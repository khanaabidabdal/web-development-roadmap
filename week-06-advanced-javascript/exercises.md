# Week 06 — Practical Exercises

These exercises reinforce the concepts used in TaskFlow. Work in scratch files or a separate practice directory unless an exercise explicitly asks you to change the capstone. **Do not alter the committed Day 06 implementation while completing the exercises unless you intend to create a separate follow-up commit.**

## Exercise 1 — Extract an ES module

**Goal:** Practice named exports and imports.

Create `pricing.js` with a named export `calculateSubtotal(items)`. Each item has `price` and `quantity`. Import it from `main.js` and calculate a sample order subtotal.

**Acceptance criteria:**
- Function is exported and imported correctly.
- Input array is not mutated.
- `[{ price: 10, quantity: 2 }, { price: 5, quantity: 3 }]` produces `35`.

<details>
<summary>Example solution</summary>

```js
// pricing.js
export function calculateSubtotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

// main.js
import { calculateSubtotal } from './pricing.js';
console.log(calculateSubtotal([{ price: 10, quantity: 2 }, { price: 5, quantity: 3 }]));
```
</details>

## Exercise 2 — Create a closure-backed counter

**Goal:** Encapsulate private state.

Implement `createCounter(initialValue = 0)` that returns `increment`, `decrement`, and `getValue` functions.

**Acceptance criteria:**
- Two counters do not share state.
- The internal value cannot be changed by direct property assignment.
- `increment` and `decrement` return the new value.

<details>
<summary>Example solution</summary>

```js
function createCounter(initialValue = 0) {
  let value = initialValue;
  return {
    increment() { return ++value; },
    decrement() { return --value; },
    getValue() { return value; }
  };
}
```
</details>

## Exercise 3 — Write an immutable reducer

**Goal:** Implement a predictable state transition.

Write a `cartReducer(state, action)` supporting:

- `ADD_ITEM`: append an item supplied in the action.
- `SET_QUANTITY`: update the quantity of an existing item.
- `REMOVE_ITEM`: remove an item by ID.
- Unknown action: return the original state.

**Acceptance criteria:**
- Previous state is unchanged.
- A missing ID returns the original state reference.
- Setting the same quantity returns the original state reference.

<details>
<summary>Example solution</summary>

```js
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'SET_QUANTITY': {
      const { id, quantity } = action.payload;
      const item = state.find(entry => entry.id === id);
      if (!item || item.quantity === quantity) return state;
      return state.map(entry =>
        entry.id === id ? { ...entry, quantity } : entry
      );
    }
    case 'REMOVE_ITEM': {
      const { id } = action.payload;
      if (!state.some(entry => entry.id === id)) return state;
      return state.filter(entry => entry.id !== id);
    }
    default:
      return state;
  }
}
```
</details>

## Exercise 4 — Test store subscriptions

**Goal:** Understand listener notifications and unsubscription.

Using the `createStore` pattern, subscribe a listener that increments a counter whenever state changes. Dispatch a real update, a no-op update, unsubscribe, then dispatch another real update.

**Acceptance criteria:**
- The listener runs after the first real update.
- It does not run for the no-op.
- It does not run after unsubscription.

**Hint:** The store should compare references with `Object.is`.

## Exercise 5 — Validate an order form

**Goal:** Separate expected input errors from unexpected failures.

Write `validateOrderInput(input)` with these rules:

- Customer name is a trimmed string of at least 2 characters.
- Quantity is an integer from 1 to 20.
- Shipping method is `standard` or `express`.

Throw a custom `ValidationError` for invalid input.

**Acceptance criteria:**
- Invalid values produce helpful messages.
- Valid input returns normalized data.
- The caller catches validation errors separately from unexpected errors.

<details>
<summary>Example solution</summary>

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateOrderInput(input) {
  if (typeof input?.customerName !== 'string') {
    throw new ValidationError('Customer name must be a string.');
  }
  const customerName = input.customerName.trim();
  if (customerName.length < 2) {
    throw new ValidationError('Customer name is too short.');
  }
  if (!Number.isInteger(input.quantity) || input.quantity < 1 || input.quantity > 20) {
    throw new ValidationError('Quantity must be an integer from 1 to 20.');
  }
  if (!['standard', 'express'].includes(input.shippingMethod)) {
    throw new ValidationError('Choose a valid shipping method.');
  }
  return { customerName, quantity: input.quantity, shippingMethod: input.shippingMethod };
}
```
</details>

## Exercise 6 — Defensive JSON parsing

**Goal:** Recover safely from malformed persisted data.

Implement `parseSavedTasks(raw)` that:

- Returns `[]` for malformed JSON.
- Returns `[]` if parsed data is not an array.
- Keeps only records that have a string `id` and string `title`.

**Acceptance criteria:**
- `'not-json'` produces `[]`.
- `'{}'` produces `[]`.
- `'[{"id":"1","title":"Read"},{"id":2,"title":"Bad"}]'` keeps only the first record.

<details>
<summary>Example solution</summary>

```js
function parseSavedTasks(raw) {
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(task =>
      task && typeof task.id === 'string' && typeof task.title === 'string'
    );
  } catch {
    return [];
  }
}
```

This is a minimal exercise validator, not a replacement for TaskFlow's full stored-record checks.
</details>

## Exercise 7 — Verify TaskFlow regression behavior

**Goal:** Test the integrated app after refactoring.

Run TaskFlow on localhost and verify:

- [ ] Add three tasks with different priorities.
- [ ] Edit one task's title and description.
- [ ] Save an unchanged edit and confirm no error.
- [ ] Toggle completion and undo it.
- [ ] Filter active and completed tasks.
- [ ] Sort by priority and date.
- [ ] Delete a task and verify the count.
- [ ] Refresh and confirm remaining tasks persist.
- [ ] Submit invalid title/priority values and confirm validation.
- [ ] Confirm task titles render as text, not HTML.

For the last item, enter a harmless literal string such as `<b>example</b>` as task text and verify that it displays as text. Do not inject executable code.

## Exercise 8 — Propose an automated test plan

**Goal:** Think beyond manual testing.

Write a short plan for automated tests of:

1. `validateTaskInput`: valid/invalid boundaries.
2. `taskReducer`: each action, immutability, and no-op identity.
3. `createStore`: subscriptions and unsubscribe behavior.
4. `storage.js`: valid, malformed, and outdated JSON.
5. `ui.js`: rendered text, statistics, filter, and sort.

For each module, state the test input, expected output, and one failure mode.

## Completion criteria

You can explain *why* each module owns its behavior, demonstrate immutable updates, distinguish reference equality from deep equality, and identify what manual tests do not prove.
