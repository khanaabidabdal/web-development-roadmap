# Week 03 — JavaScript Fundamentals: Study Notes

These notes accompany the six daily lessons and the Employee Payroll Management System mini-project. Examples use business and ERP-like scenarios to show how JavaScript concepts work together.

## 1. JavaScript in the browser

JavaScript adds behavior to web pages. HTML describes structure; CSS controls presentation; JavaScript handles logic and interaction.

Link an external script from HTML:

```html
<script src="exercises.js" defer></script>
```

`defer` downloads a classic external script without blocking HTML parsing and executes it after the document has been parsed. Inspect `console.log()` output in the browser's Developer Tools **Console**.

```javascript
"use strict";
console.log("JavaScript is running");
```

Strict mode helps detect unsafe patterns such as assigning to undeclared variables. JavaScript modules are strict by default.

## 2. Variables: `const`, `let`, and `var`

```javascript
const employeeId = 101; // Cannot reassign this binding
let salary = 5000;       // Can reassign
salary = 5500;
```

Prefer `const` unless the variable must be reassigned. `let` and `const` are block-scoped. Legacy `var` is function-scoped and has different hoisting behavior; avoid it in new exercises.

`const` does **not** freeze an array or object:

```javascript
const employee = { name: "Ahmed", salary: 5000 };
employee.salary = 5500; // Allowed
// employee = {};       // Not allowed
```

## 3. Data types and coercion

Common primitive types include `string`, `number`, `boolean`, `undefined`, `bigint`, `symbol`, and `null` (a primitive whose `typeof` result is historically `"object"`). Objects and arrays are reference values.

```javascript
const name = "Ahmed";        // string
const salary = 5000;        // number
const isActive = true;      // boolean
let department;             // undefined
const missing = null;       // explicit absence

console.log(typeof salary); // "number"
console.log(typeof missing); // "object" (historical quirk)
```

The `+` operator can concatenate strings:

```javascript
console.log(5000 + 1000);   // 6000
console.log("5000" + 1000); // "50001000"
console.log(Number("5000") + 1000); // 6000
```

Prefer explicit conversions when processing form inputs, because browser input values usually arrive as strings.

Use template literals for readable output:

```javascript
console.log(`Employee ${name} earns SAR ${salary}`);
```

## 4. Operators and conditions

Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`. Comparisons: `>`, `<`, `>=`, `<=`, `===`, `!==`. Logical operators: `&&` (AND), `||` (OR), `!` (NOT).

Prefer strict equality (`===`) to avoid unexpected coercion.

```javascript
const role = "Finance Manager";
const isActive = true;

if ((role === "Admin" || role === "Finance Manager") && isActive) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
```

Parentheses make complex business rules clearer. `&&` has higher precedence than `||`.

Ternary expression:

```javascript
const statusLabel = isActive ? "Active" : "Inactive";
```

Use ternaries for simple choices; use `if`/`else if` for more complex branches.

## 5. Loops and control flow

`for` is useful when a counter or index is needed:

```javascript
for (let i = 1; i <= 3; i++) {
  console.log(`EMP-${String(i).padStart(3, "0")}`);
}
```

`while` repeats as long as a condition remains true:

```javascript
let record = 1;
while (record <= 3) {
  console.log(`Processing record ${record}`);
  record++;
}
```

`for...of` iterates over values in an iterable:

```javascript
const salaries = [4000, 5500, 6000];
let total = 0;
for (const salary of salaries) total += salary;
console.log(total); // 15500
```

`continue` skips the remainder of the current iteration; `break` exits the loop entirely.

```javascript
const transactions = [500, 1200, -200, 900];
for (const amount of transactions) {
  if (amount < 0) break;
  console.log(amount);
}
// Prints 500, 1200; stops at -200
```

Nested loops are useful for employee-by-day attendance reports. Watch for off-by-one errors (`<` versus `<=`) and infinite `while` loops.

## 6. Functions, parameters, and return values

A function packages reusable behavior:

```javascript
function calculateGrossSalary(basic, housing = 0, transport = 0) {
  return basic + housing + transport;
}

const gross = calculateGrossSalary(5000, 1500, 500); // 7000
```

`basic`, `housing`, and `transport` are **parameters**; `5000`, `1500`, and `500` are **arguments**.

`return` passes a value to the caller and ends the function. `console.log()` only displays a value. A function that reaches the end without `return` produces `undefined`.

Function expression and arrow function:

```javascript
const multiply = function (a, b) { return a * b; };
const annualSalary = monthly => monthly * 12;
```

Arrow functions have different `this` behavior from regular functions; they are not universally interchangeable.

### Scope

```javascript
const companyName = "Example Industries"; // outer scope

function showDepartment() {
  const departmentName = "IT"; // function-local
  console.log(companyName, departmentName);
}

showDepartment();
// console.log(departmentName); // ReferenceError
```

`let` and `const` are also block-scoped inside `{ ... }`. Avoid undeclared assignments, which can create accidental globals in non-strict classic scripts and throw errors in strict mode.

## 7. Arrays

Arrays store ordered collections and use zero-based indexing:

```javascript
const departments = ["IT", "HR", "Finance"];
console.log(departments[0]);    // "IT"
console.log(departments.length); // 3

departments.push("Sales");    // Mutates: adds at end
departments.pop();            // Mutates: removes last
console.log(departments.includes("IT")); // true
```

`slice(start, end)` returns a selected portion without changing the original array; `splice()` modifies the original array by removing, inserting, or replacing elements.

## 8. Objects and arrays of objects

```javascript
const employee = {
  id: 101,
  name: "Ahmed",
  department: "IT",
  salary: 5000,
  isActive: true
};

console.log(employee.name);      // dot access
console.log(employee["salary"]); // bracket access
```

Arrays of objects model multiple records:

```javascript
const employees = [
  { id: 101, name: "Ahmed", department: "IT", salary: 5000, isActive: true },
  { id: 102, name: "Ali", department: "HR", salary: 4500, isActive: false },
  { id: 103, name: "Sara", department: "IT", salary: 7000, isActive: true }
];
```

## 9. Essential array methods

| Method | Purpose | Return value |
|---|---|---|
| `forEach()` | Perform an action for each item | `undefined` |
| `map()` | Transform each item | New array |
| `filter()` | Keep matching items | New array (possibly empty) |
| `find()` | Find first matching item | Item or `undefined` |
| `reduce()` | Accumulate a result | Accumulator result |
| `some()` | Test whether any item matches | Boolean |
| `every()` | Test whether all items match | Boolean |

```javascript
employees.forEach(emp => console.log(emp.name));

const names = employees.map(emp => emp.name);
const active = employees.filter(emp => emp.isActive);
const found = employees.find(emp => emp.id === 999); // undefined
const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
```

### `map()` versus `filter()`

`map()` transforms **every** element; `filter()` selects **some** elements. To get IT employee names:

```javascript
const itNames = employees
  .filter(emp => emp.department === "IT")
  .map(emp => emp.name);
// ["Ahmed", "Sara"]
```

### Avoid unintentional object mutation

`map()` creates a new array, but it does not clone the objects inside automatically:

```javascript
const raised = employees.map(emp => ({
  ...emp,
  salary: emp.salary * 1.1
}));
```

The object spread syntax makes a **shallow** copy. Nested objects would still share references unless copied separately.

### Handle missing results

```javascript
function findEmployeeById(id) {
  return employees.find(emp => emp.id === id) ?? null;
}
```

`??` supplies the right-hand value only when the left side is `null` or `undefined`. Check for missing records before accessing their properties.

## 10. Mini-project: Employee Payroll Management System

The Day 06 project applies all the concepts above to four employee records containing basic salary, housing and transport allowances, deductions, department and active status.

Gross and net salary formulas:

```javascript
function calculateGrossSalary(employee) {
  if (!employee) return null;
  return employee.basicSalary + employee.housingAllowance + employee.transportAllowance;
}

function calculateNetSalary(employee) {
  if (!employee) return null;
  return calculateGrossSalary(employee) - employee.deduction;
}
```

An active payroll total can be calculated by filtering and reducing:

```javascript
function calculateTotalPayroll(employees) {
  return employees
    .filter(emp => emp.isActive)
    .reduce((total, emp) => total + calculateNetSalary(emp), 0);
}
```

For the supplied Day 06 dataset:

| Employee | Status | Gross (SAR) | Net (SAR) |
|---|---|---:|---:|
| Ahmed | Active | 7,000 | 6,700 |
| Ali | Active | 6,100 | 5,900 |
| Omar | Inactive | 8,900 | 8,500 |
| Sara | Active | 9,700 | 9,200 |

**Active net payroll = SAR 21,800.** The report should also contain four total employees, three active employees, and one inactive employee.

Keep calculation functions independent of printing so they can later be used by a browser interface or API. Reuse existing functions rather than duplicating formulas (the DRY principle).

## 11. Debugging and testing

- Check the browser Console for errors and unexpected values.
- Test normal cases, boundaries and missing data.
- Verify `findEmployeeById(999)` returns `null` when the function contract requires it.
- Verify filtering a nonexistent department returns `[]`.
- Check that only active employees contribute to active payroll.
- Compare computed totals with independently calculated expected values.
- Use `git diff --cached --check` before committing to catch trailing whitespace.

## 12. Common mistakes to remember

1. **Using `console.log()` instead of `return`:** logging does not make a value available to callers.
2. **Using `forEach()` to return a collection:** `forEach()` itself returns `undefined`.
3. **Confusing `map()` and `filter()`:** transformation is not selection.
4. **Ignoring missing `find()` results:** accessing properties on `undefined` causes an error.
5. **Mutating shared objects:** a new array can still contain references to original objects.
6. **Assigning to undeclared identifiers:** strict mode rejects accidental globals.
7. **Repeating calculations:** extract reusable functions to keep business rules consistent.
8. **Forgetting operator grouping:** parenthesize complex permission rules.

## 13. Bridge to Week 04

The payroll application currently prints results to the Console. In Week 04, learners will use the DOM and events to display results in HTML, read form inputs, and update the page when a user clicks a button.
