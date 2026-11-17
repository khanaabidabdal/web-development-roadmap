# Week 06 — Advanced JavaScript & Application Architecture

## Overview

Week 06 moves from individual JavaScript features to a modular, browser-based application. The focus is on maintainability: clear module boundaries, predictable state transitions, validation, error handling, and persistence.

## Learning objectives

- Use ES module imports and exports to organize code.
- Separate application coordination, rendering, state transitions, validation, and persistence.
- Explain lexical scope and closures, including private state.
- Build a small centralized store with `getState`, `dispatch`, and `subscribe`.
- Update arrays and objects without mutating previous state.
- Distinguish a genuine state change from a no-op using reference identity.
- Validate input, handle errors, and recover from malformed stored data.
- Build and manually verify a modular task manager.

## Daily work

| Day | Focus | Practical outcome |
| --- | --- | --- |
| [01](./day-01/) | ES modules | Named/default exports, imports, and module scope |
| [02](./day-02/) | Separation of concerns | Clear responsibilities and reduced coupling |
| [03](./day-03/) | Closures | Lexical scope, encapsulation, and private state |
| [04](./day-04/) | State management | Actions, reducers, subscriptions, and immutable updates |
| [05](./day-05/) | Error handling and validation | Custom errors, input checks, and defensive code |
| [06](./day-06/) | TaskFlow | Integrated task-management application |

## Capstone: TaskFlow

TaskFlow is a vanilla JavaScript task manager with create, edit, toggle, delete, filter, and sort features; task statistics; input validation; and `localStorage` persistence.

### Module responsibilities

| File | Responsibility |
| --- | --- |
| `main.js` | DOM event handling, dispatching actions, ID/time creation, orchestration |
| `store.js` | Current state, dispatch, subscriptions |
| `reducer.js` | Validated, immutable state transitions |
| `ui.js` | DOM rendering, filtering, sorting, statistics |
| `validators.js` | Input normalization and `ValidationError` |
| `storage.js` | Save/load and defensive parsing of stored records |
| `index.html` | Semantic page structure |
| `styles.css` | Presentation and responsive layout |

### Data flow

```text
User action
    |
    v
main.js --> dispatch(action) --> store.js --> reducer.js
                             |                    |
                             |<--- next state ----|
                             |
                  if reference changed
                             |
                             v
                     subscribed callback
                        /         \
                       v           v
                 storage.js      ui.js
```

`validators.js` is used by the reducer to validate task input. For task creation, `main.js` supplies the ID and creation timestamp, so the reducer does not generate random values or read the clock.

## Engineering decisions

1. **Separation of concerns:** Module responsibilities are narrow enough to reason about and test independently.
2. **Immutable transitions:** The reducer returns new arrays/objects for actual changes, preserving the previous state.
3. **No-op optimization:** Updates, toggles, and deletes targeting unchanged or missing data return the original state reference.
4. **State identity:** The store uses `Object.is` to skip subscriber notifications when the reducer returns the same reference.
5. **Defensive boundaries:** Inputs are validated and stored JSON is treated as potentially malformed or outdated.
6. **Safe rendering:** Task text is assigned through DOM text properties instead of interpolating untrusted HTML.

## Verification performed

- Manual task lifecycle tests: add, edit, toggle, filter, sort, delete, refresh/persist.
- Reducer checks: deterministic output for identical inputs, immutability, and no-op reference preservation.
- JavaScript syntax checks using `node --check`.
- Git staged whitespace check using `git diff --cached --check`.

These are manual and syntax checks, **not** an automated test suite.

## Run TaskFlow

Serve `day-06/` using a local HTTP development server (for example VS Code Live Server), then open `index.html` through `localhost`. ES modules should be loaded through a server rather than relying on direct `file://` access.

## Further reading in this folder

- [Technical notes](./notes.md)
- [Review questions](./questions.md)
- [Practical exercises](./exercises.md)

## Next improvements

Automated unit tests, stronger action metadata validation, accessibility audits, and explicit handling of storage failures would make TaskFlow more robust.
