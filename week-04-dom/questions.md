# Week 04 — Review Questions and Exercises

Use this document for Day 07 revision. Try answering the questions **before** reading the answer key.

## Part A — DOM fundamentals

1. What is the DOM, and how does it differ from the HTML source file?
2. What is the difference between `getElementById()`, `querySelector()`, and `querySelectorAll()`?
3. When would you use `textContent` rather than `innerHTML`?
4. What happens if a selector does not find an element?

## Part B — Events and forms

5. What does `addEventListener()` do?
6. What is the difference between the `input` and `change` events?
7. Why do we call `event.preventDefault()` in the registration form?
8. Why should we trim an employee name before validation?
9. Does `form.reset()` undo changes already made to the `employees` array? Explain.

## Part C — State, rendering, and CRUD

10. What is the difference between the `employees` array and the HTML table?
11. Why is a central `renderDashboard()` function useful?
12. Which array methods are used for deleting and locating employees?
13. If the Finance filter is selected and you add an HR employee, why might the total count increase without a new visible row?
14. What is the difference between changing an object property and replacing an array with a filtered array?

## Part D — Event delegation

15. What is event bubbling?
16. Why is event delegation helpful for dynamically created buttons?
17. What do `data-action` and `data-id` store?
18. Why convert `button.dataset.id` using `Number()`?
19. What is the purpose of `event.target.closest('button[data-action]')`?

## Part E — Filtering and debugging

20. Why convert both the search term and employee name to lowercase?
21. What does `'Ahmed'.includes('')` return?
22. Why combine name, status, and department matches using `&&`?
23. Why should filtering leave the original `employees` array unchanged?
24. If `employeeList` is empty, how many times does its `forEach` callback run?
25. Why must the empty-state message update happen outside the `forEach` loop?
26. Why should deleting John not close an edit form for Ahmed?

## Part F — Responsive design and Git

27. What does mobile-first CSS mean?
28. Why pair `overflow-x: auto` on the table container with a `min-width` on the table?
29. What is the difference between `git commit` and `git push`?
30. What does setting an upstream branch with `git push -u origin feature/dom-manipulation` accomplish?

---

## Practical exercises

### Exercise 1 — DOM selection

Select a heading by ID and change its text using `textContent`. Explain why the HTML file itself is unchanged.

### Exercise 2 — Form validation

Reject a name containing only spaces. Explain why `.trim()` must run before the length check.

### Exercise 3 — Event delegation

Add a `data-action="details"` button to each generated row. Handle it in the existing table-body click listener by displaying that employee's name. Do not attach a listener to each button.

### Exercise 4 — Filter reasoning

Given these employees:

```js
[
  { id: 1, name: 'Amina', department: 'IT', active: true },
  { id: 2, name: 'Omar', department: 'HR', active: false },
  { id: 3, name: 'Amir', department: 'IT', active: false }
]
```

Which rows match search `am`, status `inactive`, and department `IT`? Explain each condition.

### Exercise 5 — Empty-state debugging

Explain why this code fails to display a message when `items` is empty, then fix it:

```js
items.forEach((item) => {
    renderRow(item);
    emptyMessage.hidden = items.length > 0;
});
```

### Exercise 6 — Editing edge case

Explain how you would keep Ahmed's edit form open when John is deleted, but close it when Ahmed is deleted.

### Exercise 7 — Mobile-first layout

Write CSS for one statistics column by default and three equal columns at widths of 768px or more.

### Exercise 8 — Testing

Write five browser test cases for the dashboard. For each, record the action, expected result, and actual result.

---

## Answer key — Check only after attempting

1. The DOM is the browser's live object tree for the document; scripts can modify it without editing source HTML.
2. By ID; first CSS-selector match; all CSS-selector matches (static `NodeList`), respectively.
3. For plain text that should not be parsed as HTML; it also avoids accidental HTML injection.
4. Single-element methods return `null`; `querySelectorAll()` returns an empty `NodeList`.
5. It registers a callback for a named event on an element.
6. `input` responds as values change; `change` generally responds to a committed change or selection.
7. To stop the browser's default submission/navigation so JavaScript can process the form.
8. Spaces alone should not count as a meaningful name.
9. No. It restores form control defaults; array state is separate.
10. The array is source data; the table is a rendered view.
11. It updates related UI consistently after each state change.
12. `filter()` to remove by ID; `find()` to locate one employee.
13. The new record exists in state but does not satisfy the current department filter.
14. Mutating a found object changes that object; `filter()` returns a new array that must be assigned if used to replace the original.
15. An event propagates from its target upward through ancestors.
16. A parent listener can handle buttons added later without registering new listeners for each button.
17. The requested action and the record identifier.
18. Dataset values are strings, while employee IDs are numeric.
19. It finds the action button even when the click originates inside a nested element.
20. To make matching case-insensitive.
21. `true`.
22. All three filter criteria must match for a row to be visible.
23. Search results are a temporary view; overwriting state would lose hidden records.
24. Zero times.
25. Otherwise it never runs when there are no rows.
26. The deleted ID does not match the employee being edited.
27. Write small-screen defaults, then use `min-width` queries to enhance wider layouts.
28. It preserves readable table columns while allowing horizontal scrolling on narrow screens.
29. `commit` saves a snapshot in local repository history; `push` sends commits to a remote.
30. It creates/sets the remote tracking relationship so future `git push` calls can use it by default.

**Practical exercise 4:** Only Amir (ID 3) matches: `am` appears in `Amir`, he is inactive, and his department is IT.

**Practical exercise 5:** Move `emptyMessage.hidden = items.length > 0;` after the loop.

**Practical exercise 7:**

```css
#dashboard { display: grid; grid-template-columns: 1fr; }
@media (min-width: 768px) {
  #dashboard { grid-template-columns: repeat(3, 1fr); }
}
```

For the other practical exercises, compare your implementation with the stated requirements and test it in the browser.
