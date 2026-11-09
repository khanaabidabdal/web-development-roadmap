# Week 05 — Practical Exercises and Validation

These exercises reinforce the concepts learned in Days 01–06. Existing project code should be preserved unless an exercise explicitly asks for an improvement.

## Exercise 1 — Predict event loop output
Predict the output **before running**:
```js
console.log('start');
setTimeout(() => console.log('timer'), 0);
Promise.resolve().then(() => console.log('promise'));
console.log('end');
```
Expected: `start`, `end`, `promise`, `timer`.

## Exercise 2 — Promise chaining
Create `validateCart()`, `calculateTotal(cart)`, and `confirmCheckout(total)` as Promise-based functions. Chain them with `.then()` and handle a failed validation using `.catch()`.

## Exercise 3 — Sequential vs concurrent timing
Write a `wait(ms)` helper. Measure three waits (1000, 2000, 1000 ms) sequentially and using `Promise.all()`. Explain the observed difference.

## Exercise 4 — Fetch error handling
Fetch a valid product and a nonexistent product from DummyJSON. Verify that `response.ok` is checked before parsing the JSON. Display separate messages for network errors and non-OK HTTP statuses.

## Exercise 5 — Product Explorer
Build a search form with loading, success, empty, and error states. Use `AbortController` to cancel an outdated request. Under network throttling, quickly search for two different terms and verify the second search wins.

## Exercise 6 — Product Catalog
Extend the Explorer with:
- An `allProducts` array and selected category/sort state.
- `getVisibleProducts()` that filters and sorts a copied array.
- A `renderProducts()` coordinator.
- A native dialog that shows details for the clicked product.
- Category reset on new search to avoid stale filtering.

## Exercise 7 — Debugging practice
Explain and correct each problem:

**A.** `productList.replaceChild()` throws because it requires `newChild` and `oldChild`. Use `replaceChildren()` to clear the list.

**B.** Descending sort never runs:
```js
if (selectedSort === 'price-asc') { /* ascending */ }
else if (selectedSort === 'price-asc') { /* descending */ }
```
Change the second condition to `price-desc`.

**C.** The category dropdown is set to Smartphones, but the current API response contains only beauty products. Explain why the UI is empty, and distinguish local filtering from server-side filtering.

## Final manual test checklist
- [ ] Initial load shows products.
- [ ] Search for `phone` and `laptop` produces matching results.
- [ ] A nonexistent search shows an empty message rather than an error.
- [ ] Category filtering works for categories present in downloaded data.
- [ ] Ascending, descending, and default sorting work.
- [ ] Category filtering and sorting work together.
- [ ] New searches reset the category selection as designed.
- [ ] View Details opens the correct product.
- [ ] Close button and Escape close the dialog.
- [ ] Rapid searches do not display stale results.
- [ ] Browser console has no unexpected errors.
- [ ] DevTools confirms local sorting/filtering does not trigger another API request.

## Git validation checklist
- [ ] `git branch --show-current` shows `feature/async-javascript-apis`.
- [ ] `git status` shows only intended documentation changes.
- [ ] `git diff --cached --check` has no whitespace errors.
- [ ] `git diff --cached --stat` lists the four documentation files.
- [ ] Documentation commit succeeds.
- [ ] Working tree is clean before merge.

## Optional stretch challenges
1. Generate the category dropdown dynamically from `allProducts` rather than hardcoding category names.
2. Add a visible product count showing the number of filtered items.
3. Add a Reset Filters button that resets both dropdowns and rerenders.
4. For a larger dataset, investigate server-side pagination and query parameters.

## Completion reflection
Write three short paragraphs in your own words:
1. What asynchronous JavaScript concept was hardest to understand?
2. Which bug taught you the most, and how did you diagnose it?
3. When would you choose server-side rather than client-side filtering?
