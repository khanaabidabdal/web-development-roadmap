# Week 04 — DOM Manipulation and Events: Practical Exercises

> **Audience:** Learners who have completed HTML, CSS, and JavaScript fundamentals.
>
> **Goal:** Build interactive interfaces with vanilla JavaScript, then combine the skills in a responsive employee management dashboard.

## How to use this guide

1. Work through the days in order. Read the corresponding lesson or `notes.md` section before coding.
2. Create your own files in `day-01/` through `day-06/`. Use the existing day folders as references **after** attempting the exercise.
3. Open your HTML file in a browser, test each interaction, and inspect the Console for errors.
4. Answer the reflection questions in your own words. Keep your answers in personal notes or compare them with `questions.md`.
5. Day 07 is a revision and rest day; it does not require a new application.

**Suggested setup:** VS Code, a modern browser with DevTools, and Git. No framework or backend is required. All employee data is stored in memory and resets on refresh.

---

## Day 01 — DOM fundamentals and selectors

**Objective:** Understand how JavaScript finds and changes HTML elements.

### Exercise

Build a small **profile information panel** with a heading, a paragraph, a status label, and a button.

1. Create `index.html` and `script.js`, and link the script using `defer` or place it at the end of `<body>`.
2. Select the heading with `getElementById()` and change its `textContent`.
3. Select the paragraph with `querySelector()` and replace its text.
4. Select multiple elements with `querySelectorAll()` and inspect the returned collection in the console.
5. Change a status label's text and CSS class from JavaScript.

**Success criteria:** The browser displays the JavaScript-updated text; no element selection returns `null` unexpectedly; the console has no errors.

**Reflect:** What is the difference between the HTML source and the live DOM? When would you prefer `textContent` over `innerHTML`?

---

## Day 02 — Events and event listeners

**Objective:** Respond to user actions without writing inline JavaScript in HTML.

### Exercise

Create an **interactive counter** with Increase, Decrease, and Reset buttons.

1. Display the current count in a `<span>`.
2. Attach click listeners with `addEventListener()`.
3. Store the count in a JavaScript variable, and update the display after each click.
4. Add a visual class when the count is negative and remove it when the count is nonnegative.
5. Log the event's `type` and `target` in DevTools while testing.

**Success criteria:** All three buttons work repeatedly; the count and its visual state stay synchronized.

**Reflect:** Why should the count live in a JavaScript variable rather than being calculated from the displayed text every time?

---

## Day 03 — Forms and validation

**Objective:** Read user input, prevent unwanted page reloads, and validate data.

### Exercise

Create a **feedback form** with name, category, message, and Submit controls.

1. Add properly associated `<label>` elements and appropriate input types.
2. Listen for the form's `submit` event and call `event.preventDefault()`.
3. Read input values and use `.trim()` on text fields.
4. Reject a name shorter than three characters and a blank message.
5. Show a success message for valid input, then reset the form.
6. Test empty values, whitespace-only values, and valid values.

**Success criteria:** Invalid submissions do not display success; valid submissions display feedback without refreshing the page.

**Reflect:** What does `preventDefault()` prevent? Why should validation also happen on a backend in a production app?

---

## Day 04 — Dynamic elements and rendering

**Objective:** Render a collection of JavaScript objects into HTML.

### Exercise

Build a **dynamic item directory** from an array of objects containing `id`, `name`, and `category`.

1. Create a `<table>` with a `<tbody>` for dynamic rows.
2. Write `renderItems(items)` to clear the old rows using `replaceChildren()`.
3. Loop over the items with `forEach()`.
4. Create rows and cells with `createElement()`, set `textContent`, and append them.
5. Add an item to the array and call `renderItems()` again.
6. Display an empty-state message when the array is empty. Place the empty-state check **outside** the `forEach()` callback.

**Success criteria:** The table matches the array; repeated renders do not duplicate rows; an empty array displays the empty state.

**Reflect:** How many times does `forEach()` run for an empty array? Why should the empty-state logic not be inside it?

---

## Day 05 — Event delegation

**Objective:** Handle clicks on dynamically created buttons using a single parent listener.

### Exercise

Extend the directory from Day 04 with **Edit**, **Toggle**, and **Delete** buttons in each row.

1. Give each button a `data-action` and `data-id` attribute.
2. Attach one click listener to the table body, not one listener per button.
3. Find the clicked action button with `event.target.closest('button[data-action]')`.
4. Ignore clicks that do not come from a valid button inside the table body.
5. Read `button.dataset.action` and convert `button.dataset.id` to a number.
6. Route the action to the corresponding function.
7. Verify that buttons on newly rendered rows still work.

**Success criteria:** All action buttons work after re-rendering, with only one delegated click listener on the table body.

**Reflect:** What is event bubbling? Why is delegation useful for elements created after the listener is registered?

---

## Day 06 — Mini-project: Employee Management Dashboard

**Objective:** Combine state, rendering, forms, events, CRUD, filtering, and responsive CSS in one application.

### Required data model

Start with an array of employee objects. Each employee has:

```js
{
  id: 101,
  name: 'Ahmed',
  department: 'IT',
  active: true
}
```

Use at least five starter employees across IT, Finance, and HR, including active and inactive records. Keep a `nextEmployeeId` counter for new employees.

### Stage A — HTML and CSS foundation

1. Create `index.html`, `style.css`, and `script.js`.
2. Add a heading, three statistics cards, a registration form, a search field, status and department filters, and an employee table.
3. Add a separate edit form section that starts hidden.
4. Add an empty-state message that starts hidden and sits outside the table.
5. Use **mobile-first CSS**: stacked forms and statistics on small screens, wider layouts via `@media (min-width: 768px)`.
6. Make the table horizontally scrollable on narrow screens.

### Stage B — State and rendering

1. Keep employee objects in an `employees` array.
2. Write `renderStatistics()` for total, active, and inactive counts.
3. Write `renderEmployees(employeeList)` to create table rows and action buttons with DOM methods.
4. Write `renderDashboard()` as the central function that refreshes the statistics and visible rows.

### Stage C — CRUD and events

1. **Create:** Validate the registration form, assign a unique ID, push a new employee, refresh, and reset the form.
2. **Read:** Display all employees through the render function.
3. **Update:** Open the edit form with the selected employee's data, save validated changes, and allow Cancel.
4. **Toggle:** Switch `active` between `true` and `false`.
5. **Delete:** Remove the matching employee from the array.
6. Use event delegation on the table body for Edit, Toggle, and Delete.

### Stage D — Search, filtering, and empty states

1. Implement case-insensitive name search with `toLowerCase()` and `includes()`.
2. Filter by status (`all`, `active`, `inactive`).
3. Filter by department (`all`, `IT`, `Finance`, `HR`).
4. Combine all three conditions with `&&`.
5. Render the **filtered view** without replacing the original `employees` array.
6. Show the empty-state message when no rows match.

### Stage E — Edge cases and final testing

Check each scenario:

- [ ] Create an employee; the table and counts update.
- [ ] Edit a name or department; the row updates.
- [ ] Cancel editing; no employee data changes.
- [ ] Toggle a status; the badge and counts update.
- [ ] Delete an employee; the total count decreases.
- [ ] Combine search, status, and department filters.
- [ ] Search for `xyz`; the empty-state message appears.
- [ ] Clear filters; all remaining employees reappear.
- [ ] Add an HR employee while Finance is selected; total increases but the new row remains filtered out.
- [ ] Open Edit for Ahmed and delete Ahmed; the edit form closes.
- [ ] Open Edit for Ahmed and delete John; Ahmed's edit form stays open.
- [ ] Test layouts at approximately 375px, 768px, and 1440px.

**Success criteria:** The UI stays consistent with the employee array; no duplicate rows appear; all CRUD actions work; filtering does not destroy data; mobile users can access the table and actions.

**Reflect:** Why is a central `renderDashboard()` easier to maintain than manually updating many DOM elements inside every event handler? What would be needed to preserve data after a browser refresh?

---

## Day 07 — Revision, reflection, and rest

**Objective:** Consolidate the week's learning before moving to asynchronous JavaScript.

This is a **review day**, not a requirement to build a seventh project.

### Review exercises

1. Without opening your notes, explain the difference between **state** and **rendered UI**.
2. Sketch the flow: **user action → event handler → state change → render → updated browser display**.
3. Explain when to use `getElementById()`, `querySelector()`, `createElement()`, and `replaceChildren()`.
4. Explain `preventDefault()`, event bubbling, `closest()`, and `dataset`.
5. Revisit a bug you fixed this week. Write its symptom, cause, and correction.
6. Inspect the Day 06 project and identify one improvement you would make in a future version.
7. Complete the review questions in `questions.md`, then take a break.

### Optional stretch challenge

Add a **Clear filters** button that resets the search field and both dropdowns, then calls `renderDashboard()`. Test that it does not delete or modify any employee records.

**Success criteria:** You can explain the dashboard's data flow without reading its code and can justify the major implementation decisions.

---

## Completion checklist

- [ ] Day 01: DOM selection and updates
- [ ] Day 02: Event listeners and counter
- [ ] Day 03: Form handling and validation
- [ ] Day 04: Dynamic rendering and empty state
- [ ] Day 05: Event delegation
- [ ] Day 06: Employee dashboard and browser tests
- [ ] Day 07: Revision and reflection
- [ ] Review `notes.md` and answer `questions.md`
- [ ] Run `git status` and `git diff --check`
- [ ] Commit the documentation when reviewed

**Note:** Days 01–05 above are reproducible learner exercises aligned to the week's topics; they are not claimed to be exact transcriptions of every exercise completed during the original lessons. Day 07 is the recommended revision plan.
