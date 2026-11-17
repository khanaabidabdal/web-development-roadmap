# Week 06 — Technical Notes

These notes capture the JavaScript and architecture concepts practiced during Week 06. They complement the code in `day-01/` through `day-06/`.

## 1. ES modules: dependencies are explicit

ES modules let files declare what they expose and what they consume.

```js
// math.js
export function calculateTotal(prices) {
  return prices.reduce((sum, price) => sum + price, 0);
}

// main.js
import { calculateTotal } from './math.js';
console.log(calculateTotal([12, 8])); // 20
```

- **Named exports** are imported using braces and must match the exported names (unless aliased).
- **Default exports** provide a module's default exported value.
- Modules have their own scope; top-level declarations do not automatically become global variables.
- Imports are statically declared, making dependencies easier to inspect.
- In the browser, use `<script type="module" src="./main.js"></script>` and serve files over HTTP.

**Trade-off:** Modules improve organization but do not automatically eliminate circular dependencies or poor boundaries.

## 2. Separation of concerns (SoC)

A module should have a coherent responsibility. In TaskFlow:

- `main.js`: interpret browser events and coordinate application operations.
- `reducer.js`: calculate next state from current state and action.
- `store.js`: hold state and notify listeners.
- `ui.js`: build and update the visible interface.
- `validators.js`: normalize and reject invalid task input.
- `storage.js`: isolate `localStorage` access and failure handling.

This separation limits the blast radius of changes. For example, switching from `localStorage` to an API should primarily affect the persistence boundary, although the controller may also need asynchronous handling.

**Common mistake:** Splitting code into many files without giving each file a clear purpose. File count alone does not create good architecture.

## 3. Closures and private state

A closure is a function together with access to variables from its lexical environment, even after the outer function has returned.

```js
function createCounter() {
  let count = 0;
  return {
    increment() { count += 1; return count; },
    current() { return count; }
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.current();   // 1
```

`count` is not directly exposed. TaskFlow's `createStore` uses a related pattern: its internal `state` and `listeners` remain accessible to returned methods through closures.

**Watch for:** Captured variables can remain in memory while referenced; closures do not automatically make data immutable.

## 4. Centralized state and the reducer pattern

An **action** describes what happened:

```js
{ type: 'TOGGLE_TASK', payload: { id: 'task-001' } }
```

A **reducer** receives `(state, action)` and returns the next state. The store holds the current state and coordinates dispatch and subscriptions.

```js
function counterReducer(state, action) {
  if (action.type === 'INCREMENT') return { count: state.count + 1 };
  return state;
}
```

The reducer should not mutate the incoming state:

```js
// Avoid: mutates the original array
state.push(newTask);
return state;

// Prefer: creates a new array
return [...state, newTask];
```

For updates, `map` creates a new array and object spread creates a new changed object. For deletions, `filter` creates a new array.

### Referential equality and no-op actions

```js
const a = [{ id: 1 }];
const b = [...a];
Object.is(a, b); // false: distinct array references
Object.is(a, a); // true
```

TaskFlow's store skips subscriber notifications when `Object.is(nextState, state)` is true. Therefore, a reducer should return the **original state reference** when an action has no effect (such as toggling a nonexistent ID).

An actual state update must return a new reference. Mutating state and returning the same reference would incorrectly suppress notifications.

### Reducer purity

A pure reducer is deterministic for the same state and action inputs and avoids externally observable side effects. Creating IDs with `crypto.randomUUID()` or timestamps with `new Date()` inside the reducer would make identical calls produce different results. TaskFlow generates these values in `main.js` and includes them in the `ADD_TASK` action payload.

**Remaining improvement:** Validate action metadata (`id`, `createdAt`) at the reducer boundary rather than assuming every caller is trusted.

## 5. Validation and error handling

TaskFlow validates task fields before committing them to state:

- Title: string, trimmed, 3–100 characters.
- Description: optional string, at most 500 characters.
- Priority: one of `low`, `medium`, `high`.

A custom `ValidationError` separates expected user mistakes from unexpected programming errors.

```js
try {
  store.dispatch(action);
} catch (error) {
  if (error instanceof ValidationError) {
    showError(error.message);
  } else {
    console.error('Unexpected task error:', error);
    showError('Something went wrong. Please try again.');
  }
}
```

**Important:** Client-side validation improves user experience but is not a security boundary for any future backend. A server must validate data independently.

## 6. Browser persistence and trust boundaries

`localStorage` stores **strings**, so task arrays are serialized with `JSON.stringify` and restored with `JSON.parse`.

Potential failures include:

- Invalid JSON (for example, a manually edited value).
- Old records that no longer match the expected shape.
- Storage disabled, unavailable, or over quota.

TaskFlow's storage module catches errors and validates loaded task records. It returns a safe fallback rather than crashing the page. However, a failed save can still mean the latest changes will not survive a refresh; production UX should make such failures visible.

Do not store secrets in `localStorage`.

## 7. Rendering, sorting, and DOM safety

- Use `textContent` for user-provided text to avoid interpreting it as HTML.
- Use event delegation to handle buttons inside the task list with one parent listener.
- Copy arrays before sorting if the original is application state:

```js
const sorted = [...tasks].sort((a, b) => a.title.localeCompare(b.title));
```

`sort()` mutates the array on which it is called. Sorting `tasks` directly would violate the immutability expectation.

## 8. Verification strategy

Different checks catch different defects:

| Check | Detects | Does not guarantee |
| --- | --- | --- |
| `node --check file.js` | Syntax errors | Correct application logic |
| Browser functional tests | Broken user flows | Exhaustive edge-case coverage |
| Reducer reference tests | Some immutability/no-op mistakes | Every reducer invariant |
| `git diff --cached --check` | Whitespace errors in staged changes | Correct runtime behavior |

The TaskFlow capstone passed manual task-lifecycle and targeted reducer checks. Automated tests remain a recommended next step.

## 9. Design questions to revisit

1. What happens if `localStorage` writes fail after state changes?
2. Should `dispatch` validate action shape before passing it to the reducer?
3. How would asynchronous server persistence change the controller and store?
4. How would you test DOM rendering without relying only on manual clicks?
5. Would a task search field belong in the reducer or in the presentation layer?

These questions connect the week's fundamentals to production application design.
