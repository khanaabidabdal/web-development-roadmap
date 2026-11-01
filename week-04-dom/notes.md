# Week 04 — Technical Notes

These notes summarize the concepts practiced during Week 04 and the implementation decisions in the Day 06 dashboard.

## 1. The Document Object Model (DOM)

The DOM is the browser's object representation of an HTML document. JavaScript can read and modify it after the page loads.

```js
const heading = document.getElementById('main-heading');
heading.textContent = 'Employee Dashboard';

const firstButton = document.querySelector('button');
const allRows = document.querySelectorAll('tbody tr');
```

- `getElementById()` returns an element or `null`.
- `querySelector()` returns the first matching element or `null`.
- `querySelectorAll()` returns a static `NodeList` of matches.
- `textContent` is suitable for inserting plain text safely without interpreting it as HTML.

**Important:** The DOM is not the same as the original HTML source. JavaScript can change the live document without changing the `.html` file.

## 2. Events and event listeners

An event listener runs a callback when a specified event occurs.

```js
const button = document.querySelector('#submit-btn');
button.addEventListener('click', (event) => {
    console.log('Clicked:', event.target);
});
```

Common events:

- `click` — a button or other element is activated.
- `submit` — a form is submitted.
- `input` — an input value changes as the user types.
- `change` — a selection or committed value changes.

Prefer `addEventListener()` over inline `onclick` attributes so markup and behavior stay separate.

## 3. Form handling and validation

```js
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = employeeName.value.trim();
    const department = employeeDepartment.value;

    if (name.length < 3 || department === '') {
        alert('Enter a valid name and select a department');
        return;
    }

    // Add a record, re-render, and reset the form.
});
```

- `preventDefault()` stops the browser's normal form submission/navigation.
- `.value` on an HTML input is a **string**, even for an ID field.
- `.trim()` removes leading/trailing whitespace.
- `.reset()` restores form controls to their default values; it does not save or undo application data by itself.

## 4. Dynamic DOM rendering

The dashboard creates table rows using DOM methods rather than hard-coding every row in HTML.

```js
const row = document.createElement('tr');
const nameCell = document.createElement('td');
nameCell.textContent = employee.name;
row.append(nameCell);
tbody.append(row);
```

Before rebuilding the table:

```js
tbody.replaceChildren();
```

This removes previously rendered rows so the view can be rebuilt from current state.

## 5. Application state versus the displayed view

The source data is stored in an array:

```js
let employees = [
    { id: 101, name: 'Ahmed', department: 'IT', active: true }
];
```

The DOM table is a **view** of that data, not the source of truth. For example, adding an HR employee while the Finance filter is active should increase the total employee count without showing that new employee in the filtered table.

A central rendering function keeps the UI consistent:

```js
function renderDashboard() {
    renderStatistics();
    renderEmployees(getFilteredEmployees());
}
```

This avoids manually patching several parts of the interface in each event handler.

## 6. CRUD operations

**Create:** add an object to the array.

```js
employees.push({
    id: nextEmployeeId++,
    name,
    department,
    active: true
});
```

**Read:** render or filter employee records.

**Update:** find the matching object and change its properties.

```js
const employee = employees.find((item) => item.id === id);
if (employee) {
    employee.active = !employee.active;
}
```

**Delete:** create a new array excluding the selected ID.

```js
employees = employees.filter((item) => item.id !== id);
```

After a mutation, call `renderDashboard()` to refresh the UI.

## 7. Event delegation

Buttons inside the employee table are generated dynamically. Instead of attaching separate listeners to every button, attach one listener to the table body:

```js
employeeTableBody.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button || !employeeTableBody.contains(button)) return;

    const action = button.dataset.action;
    const id = Number(button.dataset.id);

    if (action === 'delete') deleteEmployee(id);
    else if (action === 'toggle') toggleEmployeeStatus(id);
    else if (action === 'edit') openEditForm(id);
});
```

**Why it works:** click events bubble from descendants to ancestors. `closest()` finds the intended action button, and `data-*` attributes identify the action and record ID.

## 8. Search and filtering

The three filters are combined with logical **AND**: a record must match the name, status, **and** department conditions.

```js
function getFilteredEmployees() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedStatus = statusFilter.value;
    const selectedDepartment = departmentFilter.value;

    return employees.filter((employee) => {
        const matchesName = employee.name.toLowerCase().includes(searchTerm);
        const matchesStatus = selectedStatus === 'all' ||
            (selectedStatus === 'active' && employee.active) ||
            (selectedStatus === 'inactive' && !employee.active);
        const matchesDepartment = selectedDepartment === 'all' ||
            employee.department === selectedDepartment;

        return matchesName && matchesStatus && matchesDepartment;
    });
}
```

- `toLowerCase()` enables case-insensitive name matching.
- Every string includes the empty string (`'Ahmed'.includes('')` is `true`), so an empty search doesn't exclude names.
- Filter dropdown values must match the case of stored department names (`IT`, `Finance`, `HR`).
- Do **not** overwrite `employees` with search results: that would discard hidden records from the application state.

## 9. Empty states and a debugging lesson

```js
employeeList.forEach((employee) => {
    // Create one row per employee.
});

emptyMessage.hidden = employeeList.length > 0;
```

The empty-message logic must run **after** `forEach`, not inside it. If the array is empty, the `forEach` callback runs **zero times**. Code inside the callback cannot display an empty-state message.

## 10. Editing edge case

If an employee is deleted while their edit form is open, close and reset the form:

```js
function deleteEmployee(id) {
    employees = employees.filter((employee) => employee.id !== id);

    if (!editSection.hidden && Number(editId.value) === id) {
        editForm.reset();
        editSection.hidden = true;
    }

    renderDashboard();
}
```

The `&&` matters: both the form must be open **and** its ID must match the deleted employee. Deleting someone else should not interrupt the current edit.

## 11. Mobile-first CSS

Start with styles for narrow screens, then add enhancements for wider screens:

```css
#dashboard {
    display: grid;
    grid-template-columns: 1fr;
}

#table-data {
    overflow-x: auto;
}

table {
    min-width: 650px;
}

@media (min-width: 768px) {
    #dashboard {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

The table keeps readable columns and scrolls horizontally on narrow screens. Test at 375px, 768px, and 1440px using DevTools. Include the viewport meta tag in HTML.

## 12. Testing checklist and limitations

Test registration, editing, canceling edits, status toggles, deletion, combined filters, no-match searches, filter clearing, and adding a record that is hidden by the current filter. Also test deleting the record currently being edited versus deleting a different record.

The project has no persistence yet. Refreshing the page recreates the initial array; later weeks will introduce APIs and backend storage.

## 13. Git workflow

```powershell
git status
git diff --check
git add week-04-dom/
git diff --cached --check
git diff --cached --stat
git commit -m "docs: add Week 04 learning notes and review"
```

Review staged files before committing. Local commits do not require an immediate push. Keep the feature branch until documentation and revision are finished.

## Key takeaway

The most important architectural lesson this week is to **change state first, then render the UI from that state**. Event delegation, filtering, and explicit edge-case handling make this small application easier to reason about and maintain.
