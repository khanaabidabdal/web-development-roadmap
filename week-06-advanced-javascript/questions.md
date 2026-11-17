# Week 06 — Review Questions

Use these for self-assessment and technical interview practice. Try answering before reading the key.

## Part A — Multiple choice

**1.** What does a named ES module export require at import time?

A. The file must use a default export
B. The imported name must match, unless aliased
C. The function must be attached to `window`
D. The file must be loaded with `require()`

**2.** What is the primary goal of separation of concerns?

A. Maximize the number of files
B. Avoid all function calls between modules
C. Give components coherent responsibilities and reduce coupling
D. Put all code in one controller

**3.** A closure allows a function to:

A. Access variables from its lexical environment
B. Modify any global variable automatically
C. Prevent garbage collection of every object
D. Run without being called

**4.** Why is `createStore` able to keep `state` private while exposing `getState()`?

A. Because JavaScript has no scope
B. Because returned functions close over the outer variable
C. Because `localStorage` stores the variable
D. Because modules automatically freeze arrays

**5.** Which reducer operation avoids mutating an existing state array?

A. `state.push(task)`
B. `state.splice(0, 1)`
C. `return [...state, task]`
D. `state.sort(compare)`

**6.** Why is generating a random ID inside a reducer undesirable?

A. Random IDs are never unique
B. It makes identical reducer inputs potentially produce different outputs
C. Browsers cannot generate IDs
D. Reducers cannot receive objects

**7.** What does `Object.is(previousState, nextState)` check for arrays?

A. Equal element values
B. Same length
C. Same array reference
D. Same JSON representation

**8.** What should a reducer return when toggling a missing task ID?

A. A cloned array regardless of change
B. The original state reference
C. `undefined`
D. A mutated original array

**9.** Why copy an array before calling `.sort()` in a selector or UI helper?

A. Sorting always changes item types
B. Sorting the original would mutate shared state
C. Sorting cannot work with arrays
D. Sorting automatically dispatches an action

**10.** Which is the safest default for inserting task titles into the DOM?

A. `element.innerHTML = title`
B. `document.write(title)`
C. `element.textContent = title`
D. `eval(title)`

**11.** What is the purpose of a custom `ValidationError`?

A. To distinguish expected invalid input from unexpected failures
B. To eliminate the need for error handling
C. To make all errors disappear
D. To replace server-side validation

**12.** What does `node --check` verify?

A. No logical bugs
B. Valid JavaScript syntax
C. Correct `localStorage` behavior
D. Production readiness

**13.** What is a likely consequence of returning a new state array for a no-op action?

A. Subscribers may be notified unnecessarily
B. JavaScript refuses to run
C. The browser deletes all tasks
D. `Object.is` always returns true

**14.** Why should data read from `localStorage` be validated?

A. It can be malformed, outdated, or manually changed
B. It is always guaranteed correct
C. JSON parsing performs schema validation
D. It is automatically encrypted

**15.** What does `git diff --cached --check` inspect?

A. Network requests
B. Whitespace issues in staged changes
C. JavaScript runtime errors
D. All untracked files

## Part B — Short-answer questions

1. Explain named versus default exports and give a use case for each.
2. Explain lexical scope and demonstrate a closure with private state.
3. Describe the difference between a reducer and a store.
4. Why should reducer state updates be immutable?
5. How does TaskFlow avoid unnecessary notifications for no-op actions?
6. What is the distinction between validation and error handling?
7. Why should browser storage be treated as untrusted input?
8. Describe TaskFlow's data flow from a click to a rendered update.
9. How would you add automated reducer tests without opening a browser?
10. What architectural changes would be needed to persist tasks to a remote API?

---

## Answer key — Part A

| Question | Answer | Explanation |
| --- | --- | --- |
| 1 | B | Named exports use matching names, optionally aliased. |
| 2 | C | SoC creates understandable boundaries and reduces coupling. |
| 3 | A | Closures retain access to lexical bindings. |
| 4 | B | Store methods close over `state`. |
| 5 | C | Spread creates a new array. |
| 6 | B | Randomness inside the reducer breaks determinism. |
| 7 | C | `Object.is` compares array identity, not deep contents. |
| 8 | B | Returning the same reference signals no state change. |
| 9 | B | `.sort()` mutates its receiver. |
| 10 | C | `textContent` treats text as text rather than markup. |
| 11 | A | A custom error class identifies expected input failures. |
| 12 | B | `node --check` parses syntax but does not execute application logic. |
| 13 | A | The store may treat a cloned array as a change. |
| 14 | A | Stored JSON is not a trusted or schema-validated source. |
| 15 | B | `--cached` checks staged diffs; untracked files are not included. |

## Suggested short-answer review criteria

A strong response should use a **definition**, a **small code example**, and a **practical trade-off or failure mode**. For TaskFlow-specific questions, identify the responsible module and describe what happens when data is invalid or unchanged.
