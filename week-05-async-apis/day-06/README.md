# Day 06 — API-Powered Product Catalog

A vanilla JavaScript product catalog built as the Week 05 Day 06 mini-project in the 16-week Web Development Roadmap. It extends the Day 05 Product Explorer with client-side category filtering, price sorting, and a product details dialog.

## Features

- Load product data from the [DummyJSON Products API](https://dummyjson.com/docs/products).
- Search products using the API's search endpoint.
- Filter the currently loaded products by category.
- Sort visible products by price (low to high, high to low) or restore the API's default order.
- View a product's title, description, price, rating, and category in a native HTML dialog.
- Display loading, empty-results, and error messages.
- Cancel superseded fetch requests with `AbortController` and guard against stale responses.
- Reset the category selection when a new search is submitted.

## Tech Stack

HTML5, CSS3, vanilla JavaScript, Fetch API, and DummyJSON. No frontend framework or build tool is required.

## Project Files

```text
day-06/
├── index.html   # Search form, category/sort controls, results, and dialog
├── style.css    # Responsive product grid and dialog styles
├── script.js    # API requests, state, filtering, sorting, and rendering
└── README.md    # Project documentation
```

## Run Locally

1. Open `index.html` in a browser, preferably using VS Code Live Server or your local Laragon web server.
2. Make sure you have an internet connection so the DummyJSON requests can complete.
3. Search for a product, choose a category, change the sort order, and select **View Details** on a product card.

No `npm install` step is needed.

## API Endpoints

| Purpose | Endpoint |
| --- | --- |
| Initial product load | `https://dummyjson.com/products?limit=0` |
| Product search | `https://dummyjson.com/products/search?q=SEARCH_TERM` |

The initial request loads the available catalog for local filtering. Searches request matching results from the server; subsequent category filtering and sorting operate only on the products returned by that latest request.

**Limitation:** This learning project loads the full product list on initial load. For a large production catalog, server-side pagination, category filtering, and sorting would generally be more scalable. Search results may not contain every category, so selecting a category with no matching loaded products shows an empty state.

## How It Works

1. `loadProducts(searchTerm)` cancels any active request, shows loading feedback, fetches products, checks `response.ok`, and stores the returned array in `allProducts`.
2. `getVisibleProducts()` creates a shallow copy of `allProducts`, applies the selected category, and sorts the copy if requested.
3. `renderProducts()` handles the empty state or passes the visible products to `displayProducts()`.
4. `displayProducts()` creates DOM elements and connects each card's **View Details** button to its product object.
5. `showProductDetails(product)` fills and opens a native `<dialog>` using safe `textContent` assignments.

### Application State

- `allProducts`: products returned by the latest completed request.
- `selectedCategory`: active local category filter; defaults to `all`.
- `selectedSort`: `default`, `price-asc`, or `price-desc`.
- `activeController`: tracks the current request for cancellation and stale-response protection.

## Testing Checklist

- [ ] Initial load displays products.
- [ ] Searching for `phone` and `laptop` returns relevant results.
- [ ] Searching for a nonexistent term displays an empty-state message.
- [ ] Category filtering works on loaded products, including smartphones and laptops after initial full-catalog loading.
- [ ] Low-to-high and high-to-low sorting work correctly.
- [ ] Default sorting restores the original response order.
- [ ] Category filtering and sorting work together.
- [ ] Submitting a new search resets the category dropdown to **All Categories**.
- [ ] **View Details** shows the correct product and closes via the button or Escape.
- [ ] Rapid searches do not let an older response overwrite newer results (test with Network throttling).
- [ ] Changing category or sort does not send an additional request (check DevTools → Network).
- [ ] No unexpected errors appear in the browser console.

## Problems Solved During Development

- Corrected `replaceChild()` to `replaceChildren()` when clearing product cards.
- Changed the initial products endpoint to `?limit=0` so locally selected categories such as smartphones and laptops can be represented in the loaded dataset.
- Corrected the descending sort condition to `selectedSort === "price-desc"`.
- Reset the category filter on new searches to avoid hiding otherwise valid search results.
- Fixed trailing whitespace and extra blank lines before committing.

## Learning Outcomes

This mini-project demonstrates asynchronous requests, HTTP response validation, cancellation, state management, pure-ish data transformations on copied arrays, event handling, closures, DOM creation, accessible native dialogs, and debugging with browser DevTools.

## Course Context

Part of **Week 05 — Asynchronous JavaScript & APIs** in the 16-week Web Development Roadmap. Day 05 introduced the Product Explorer; Day 06 extends it into a more interactive catalog. The next step is Week 05 review, documentation, and branch integration.
