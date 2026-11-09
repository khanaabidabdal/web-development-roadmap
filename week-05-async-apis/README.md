# Week 05 — Asynchronous JavaScript & APIs

## Purpose
Learn to build browser applications that communicate with APIs reliably, handle asynchronous operations, and keep data retrieval separate from UI presentation.

## Learning objectives
- Explain the call stack, task queue, microtask queue, and event loop.
- Create and chain Promises; handle fulfillment and rejection.
- Use `async`/`await` and choose sequential or concurrent execution appropriately.
- Make HTTP requests using `fetch()`, parse JSON, and check `response.ok`.
- Display loading, success, empty, and error states.
- Cancel outdated requests with `AbortController` and guard against stale responses.
- Store API results in application state; filter and sort local data without unnecessary requests.
- Build accessible product cards and a native `<dialog>` details view.
- Validate changes and commit work in Git.

## Day-by-day progress
| Day | Focus | Outcome |
| --- | --- | --- |
| 01 | Event loop, timers, microtasks | Explored execution order and asynchronous scheduling |
| 02 | Promises and chaining | Implemented promise chaining and checkout validation |
| 03 | `async`/`await` and concurrency | Compared sequential loading with `Promise.all()` |
| 04 | Fetch API and HTTP errors | Retrieved remote data and handled non-OK responses |
| 05 | Product Explorer | Added search, UI states, and request cancellation |
| 06 | Product Catalog | Added category filtering, price sorting, and product details |
| 07 | Review and integration | Review concepts, document learning, validate, then merge |

## Project structure
```text
week-05-async-apis/
├── README.md
├── notes.md
├── questions.md
├── exercises.md
├── day-01/
├── day-02/
├── day-03/
├── day-04/
├── day-05/
└── day-06/
```

## Product Catalog architecture
1. `loadProducts(searchTerm)` requests data from DummyJSON and handles loading/errors/cancellation.
2. `allProducts` holds the products returned by the latest successful request.
3. `getVisibleProducts()` copies the array, filters by `selectedCategory`, then sorts by `selectedSort`.
4. `renderProducts()` decides whether to show an empty state or call `displayProducts()`.
5. `displayProducts()` creates cards using DOM methods and `textContent`.
6. `showProductDetails(product)` displays the selected product in a native dialog.

Search requests go to the server. Category and price sorting operate on the **currently downloaded dataset**. The project was adjusted to request `https://dummyjson.com/products?limit=0` for the initial catalog; a production application should generally paginate and filter on the server for large datasets.

## Technical challenges addressed
- Incorrect DOM element IDs caused `null` access errors.
- `replaceChild()` was mistakenly used instead of `replaceChildren()` for clearing a list.
- A category could appear empty because the initial API response was paginated.
- The descending sort branch initially compared against `price-asc` instead of `price-desc`.
- A new search could retain a category selection that excluded its results; resetting category state and dropdown together resolved this.
- Stale search responses were prevented with `AbortController` and request-identity checks.

## Validation
See [exercises.md](exercises.md) for the final testing checklist and [questions.md](questions.md) for revision questions.

## Git workflow
Work was developed on `feature/async-javascript-apis`. Day 05 commit: `75c0826`. Day 06 commit: `9561c4d`. Complete documentation and review before merging into `main`.

## Related documents
- [Learning notes](notes.md)
- [Review questions](questions.md)
- [Practical exercises](exercises.md)
