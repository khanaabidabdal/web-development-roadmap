# Week 05 — Review Questions and Answers

Try each question without looking at the answer first.

## Event loop and Promises

**1. What is the output?**
```js
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
async function test() {
  console.log('D');
  await Promise.resolve();
  console.log('E');
}
test();
console.log('F');
```
**Answer:** `A, D, F, C, E, B`. Synchronous code runs first; Promise and `await` continuations are microtasks; timer callback runs afterward.

**2. Does `setTimeout(fn, 0)` run immediately?**
**Answer:** No. It schedules a task to run after the current script and queued microtasks have been processed, when the event loop can run it.

**3. What are the three Promise states?**
**Answer:** Pending, fulfilled, rejected.

**4. What does an `async` function return?**
**Answer:** A Promise, even if it returns a plain value.

**5. What happens when a `.then()` callback throws?**
**Answer:** The Promise returned by that `.then()` rejects.

## Fetch and error handling

**6. What is the output if `fetch()` receives HTTP 404?**
```js
try {
  const response = await fetch(url);
  console.log('A');
  if (!response.ok) throw new Error('Not found');
  console.log('B');
} catch {
  console.log('C');
}
console.log('D');
```
**Answer:** `A, C, D`. A 404 normally fulfills the Fetch Promise; the explicit `throw` transfers execution to `catch`.

**7. Does `fetch()` automatically reject on HTTP 500?**
**Answer:** No. Check `response.ok` or `response.status`.

**8. How does an aborted request differ from HTTP 500?**
**Answer:** Aborting normally rejects with `AbortError`; HTTP 500 provides a Response with `ok === false`.

**9. Why do we show separate empty and error states?**
**Answer:** Empty means a successful request returned no matches; error means something failed.

## Concurrency

**10. Approximate duration of sequential waits of 1s, 2s, 1s?**
**Answer:** 4 seconds.

**11. Approximate duration with `Promise.all([wait(1000), wait(2000), wait(1000)])`?**
**Answer:** 2 seconds.

**12. Does `Promise.all()` cancel other tasks when one rejects?**
**Answer:** No; cancellation must be designed separately.

**13. When should tasks run sequentially?**
**Answer:** When a later operation depends on the earlier result, such as creating an order before using its ID.

## State and rendering

**14. Why avoid a new API call on every local sort?**
**Answer:** Already-downloaded products can be sorted in memory, reducing latency and requests.

**15. Why copy `allProducts` before `.sort()`?**
**Answer:** `.sort()` mutates its array. A shallow copy preserves the original array order.

**16. Does `[...allProducts]` deep-copy product objects?**
**Answer:** No. It copies the array structure, not nested objects.

**17. If 30 products are loaded and 5 match a category, how many are displayed?**
**Answer:** Five, without a new request.

**18. Why might the Smartphones filter display zero products?**
**Answer:** The current downloaded page or search results may contain no smartphone items, even when the full catalog does.

**19. What was wrong with checking `price-asc` in both sorting branches?**
**Answer:** The descending branch could never run; the second comparison must be `price-desc`.

**20. Why reset category state and dropdown together on a new search?**
**Answer:** To avoid an old category silently hiding new search results and to keep UI and state synchronized.

## DOM and architecture

**21. What is the difference between `replaceChild()` and `replaceChildren()`?**
**Answer:** `replaceChild(newNode, oldNode)` replaces one child; `replaceChildren()` with no arguments clears all children.

**22. Why does each View Details button open the right product?**
**Answer:** Its click-handler closure retains access to that iteration's product object.

**23. Why prefer `textContent` for product descriptions?**
**Answer:** It treats the description as text instead of parsing it as HTML.

**24. What is the role of `renderProducts()`?**
**Answer:** Coordinate the visible-data calculation, empty state, and display without fetching again.

**25. Why check `activeController === controller` in `finally`?**
**Answer:** To prevent an old request's cleanup from clearing the controller of a newer request.

## Reflection

**26. Describe one bug you diagnosed in Week 05.**
**Suggested answer:** The empty-result path used `replaceChild()` with no arguments, causing a DOM exception. Changing it to `replaceChildren()` fixed the UI.

**27. What would change for a catalog with 50,000 products?**
**Suggested answer:** Use server-side search/filter/sort and pagination, with client-side caching only where useful.
