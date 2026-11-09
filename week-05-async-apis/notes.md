# Week 05 — Learning Notes

## 1. JavaScript execution model
JavaScript executes synchronous statements on the call stack. Asynchronous callbacks are scheduled for later. After the current synchronous code finishes, the event loop processes queued microtasks (such as Promise reactions and `await` continuations) before eligible timer tasks.

```js
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
async function demo() {
  console.log('D');
  await Promise.resolve();
  console.log('E');
}
demo();
console.log('F');
// A, D, F, C, E, B
```

`setTimeout(..., 0)` does not run immediately or interrupt the current script.

## 2. Promises
A Promise is pending, fulfilled, or rejected. `.then()` handles fulfillment and returns a new Promise, allowing chaining. `.catch()` handles rejection. `.finally()` runs after settlement and is useful for cleanup.

```js
validateCart()
  .then(cart => calculateTotal(cart))
  .then(total => console.log(total))
  .catch(error => console.error(error.message));
```

A thrown error inside `.then()` rejects the Promise returned by that handler.

## 3. Async/await
An `async` function always returns a Promise. `await` suspends the function's continuation without blocking the browser's main thread.

```js
async function load() {
  try {
    const value = await Promise.resolve(42);
    return value;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
```

## 4. Sequential vs concurrent tasks
Sequential operations start one after another:

```js
await wait(1000);
await wait(2000);
await wait(1000); // roughly 4 seconds total
```

Independent operations can start together:

```js
await Promise.all([wait(1000), wait(2000), wait(1000)]);
// roughly 2 seconds total
```

`Promise.all()` rejects when any member rejects, but does not automatically cancel other running operations. Use sequential execution when later steps depend on earlier results.

## 5. Fetch API and HTTP errors
`fetch()` normally resolves with a `Response` for HTTP statuses including 404 and 500. It rejects for network failures and typically for aborts. Always check `response.ok` when non-2xx responses should be treated as errors.

```js
const response = await fetch('https://dummyjson.com/products');
if (!response.ok) {
  throw new Error(`HTTP ${response.status}`);
}
const data = await response.json();
```

JSON parsing can also fail, so place it within the error-handling boundary.

## 6. UI states
A network-driven interface should communicate:
- **Loading:** request in progress.
- **Success:** render returned products.
- **Empty:** valid response but no matching products.
- **Error:** network, HTTP, or parsing problem.

An empty result is not the same as an API error. A rendering exception inside a `try` block can be caught by a surrounding API error handler; precise error wording matters.

## 7. AbortController and stale responses
When a new search starts, cancel the previous request and associate the new one with a fresh controller.

```js
let activeController = null;

async function loadProducts(term) {
  activeController?.abort();
  const controller = new AbortController();
  activeController = controller;
  try {
    const response = await fetch(makeUrl(term), {
      signal: controller.signal
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (activeController !== controller || controller.signal.aborted) return;
    // Update state and render current results here.
  } catch (error) {
    if (error.name === 'AbortError' || activeController !== controller) return;
    // Display an actual failure here.
  } finally {
    if (activeController === controller) activeController = null;
  }
}
```

The identity check in `finally` prevents an old request from clearing a newer request's controller.

## 8. Application state and separation of concerns
The Product Catalog keeps downloaded products in `allProducts`, and UI preferences in `selectedCategory` and `selectedSort`.

```js
function getVisibleProducts() {
  let products = [...allProducts];
  if (selectedCategory !== 'all') {
    products = products.filter(p => p.category === selectedCategory);
  }
  if (selectedSort === 'price-asc') {
    products.sort((a, b) => a.price - b.price);
  } else if (selectedSort === 'price-desc') {
    products.sort((a, b) => b.price - a.price);
  }
  return products;
}
```

`[...allProducts]` makes a **shallow copy**. Sorting it does not reorder `allProducts`, but nested product objects remain shared references.

## 9. Client-side vs server-side filtering
Client-side operations are fast for already-loaded, small datasets and do not need another request. They cannot search products that have not been downloaded. Server-side filtering and pagination are more suitable for large catalogs. DummyJSON's default products endpoint is paginated; `?limit=0` was used in this exercise to load the available catalog for local filtering.

## 10. DOM rendering, closures, and dialogs
Create cards with `document.createElement()` and assign untrusted text with `textContent`, not raw `innerHTML`.

```js
products.forEach(product => {
  const button = document.createElement('button');
  button.textContent = 'View Details';
  button.addEventListener('click', () => showProductDetails(product));
});
```

Each callback closes over the correct `product`. The native `<dialog>` element provides `showModal()` and `close()`; Escape normally closes a modal dialog.

## 11. Debugging lessons
- `Cannot read properties of null`: check HTML IDs and script timing.
- `replaceChild` needs two arguments; `replaceChildren()` without arguments clears children.
- Check the API response's actual categories before assuming a filter is broken.
- Ensure descending sort checks `price-desc`, not `price-asc`.
- Reset `selectedCategory` **and** the dropdown value on a new search when that is the intended UX.
- Use DevTools Network throttling to test rapid-search cancellation.
- Use `git diff --cached --check` to catch trailing whitespace before committing.

## 12. Engineering takeaway
Reliable API applications need more than a successful fetch: they need deliberate state ownership, cancellation, clear UI states, careful error handling, accessible DOM updates, and repeatable tests.
