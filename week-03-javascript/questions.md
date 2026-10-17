# Week 03 — JavaScript Fundamentals: Questions and Practice

Try each question before reading the answer key. For code-tracing questions, predict the output **before** running the code.

## A. Variables, types and operators

**Q1.** When should you use `const` instead of `let`? Does `const` make an object immutable?

**Q2.** Predict the output:

```javascript
console.log("5000" + 1000);
console.log(Number("5000") + 1000);
console.log(typeof null);
```

**Q3.** Explain the difference between `===` and `==`. Which should generally be preferred?

**Q4.** What does the `defer` attribute do on a classic external script?

## B. Conditions and loops

**Q5.** Write a condition that grants access only when the user is active and the role is either `"Admin"` or `"Finance Manager"`.

**Q6.** Predict the output:

```javascript
let total = 0;
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  total += i;
  if (total > 7) break;
}
console.log(total);
```

**Q7.** Explain `break` versus `continue`. Give a payroll or transaction example for each.

**Q8.** Write a loop that prints employee IDs `EMP-001` through `EMP-010`.

## C. Functions and scope

**Q9.** What is the difference between a parameter and an argument?

**Q10.** Predict the output:

```javascript
function add(a, b) {
  console.log(a + b);
}
const result = add(10, 20);
console.log(result);
```

**Q11.** What does a function return if no `return` statement is executed?

**Q12.** Predict the result:

```javascript
function calculate(a, b = 10) {
  return a + b;
}
console.log(calculate(5));
```

**Q13.** Why does the final line throw an error?

```javascript
function showDepartment() {
  const departmentName = "IT";
  console.log(departmentName);
}
showDepartment();
console.log(departmentName);
```

**Q14.** What happens if you assign to an undeclared variable in strict mode?

**Q15.** Rewrite as an arrow function:

```javascript
function annualSalary(monthly) {
  return monthly * 12;
}
```

## D. Arrays and objects

**Q16.** What is the index of the first array element? What is the length of `[4000, 5500, 6000]`?

**Q17.** Explain `slice()` versus `splice()`.

**Q18.** Choose the best method for each task: print all names; produce a new array of names; select active employees; find employee 103; total all salaries.

**Q19.** Predict the output:

```javascript
const employees = [
  { name: "Ahmed", salary: 5000 },
  { name: "Ali", salary: 6000 }
];
const updated = employees.map(emp => {
  emp.salary += 1000;
  return emp;
});
console.log(employees[0].salary);
console.log(updated[0].salary);
```

**Q20.** How can you create a 10%-salary-increase array without modifying the original employee objects? What limitation does object spread have?

**Q21.** What does `find()` return if no item matches? How can `?? null` change that behavior?

**Q22.** Predict the output:

```javascript
console.log([10, 20, 30].reduce((sum, n) => sum + n, 0));
```

## E. Practical challenges

**Q23 — Bonus rules.** Write `calculateBonus(salary, performance, years)` returning 20% for performance >= 90 and service >= 3 years; 10% for performance >= 75 and service >= 2 years; otherwise 0. Test boundary values.

**Q24 — Employee directory.** Given an array of employee objects with `name`, `department`, and `isActive`, return the names of active IT employees without modifying the source data.

**Q25 — Missing records.** Write `findEmployeeById(employees, id)` that returns an employee object or `null` if absent.

**Q26 — Payroll.** Given employee records with `basicSalary`, `housingAllowance`, `transportAllowance`, `deduction`, and `isActive`, calculate total **net** payroll for active employees only. Reuse a net salary function.

**Q27 — Project testing.** For the Week 03 payroll dataset, state the total employee count, active count, inactive count, and active net payroll. Explain why Omar is excluded from the active total.

**Q28 — Design review.** Why is it preferable for `calculateNetSalary(employee)` to return a number instead of calling `console.log()` internally? How does this help when adding a DOM interface?

---

## Answer key

**A1.** Use `const` when the binding will not be reassigned; use `let` when reassignment is necessary. `const` does not freeze an object or array.

**A2.** `"50001000"`, `6000`, `"object"` (the last result is a historical quirk for `null`).

**A3.** `===` compares without type coercion; `==` may coerce values. Prefer `===` in most application code.

**A4.** It lets the browser parse the HTML while downloading the external script, then executes the script after parsing completes.

**A5.** `(role === "Admin" || role === "Finance Manager") && isActive`.

**A6.** `12`. Totals: 1, 3, skip 3, 7, then 12; the loop breaks.

**A7.** `break` ends the loop, e.g., stop on an invalid transaction. `continue` skips one iteration, e.g., ignore an inactive employee.

**A8.**

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(`EMP-${String(i).padStart(3, "0")}`);
}
```

**A9.** A parameter is named in the function definition; an argument is the actual value passed when calling it.

**A10.** First `30`, then `undefined`, because the function logs the sum but returns no value.

**A11.** `undefined`.

**A12.** `15`.

**A13.** `departmentName` is local to `showDepartment`; it is not accessible outside the function.

**A14.** A `ReferenceError` is thrown.

**A15.** `const annualSalary = monthly => monthly * 12;`.

**A16.** First index `0`; length `3`.

**A17.** `slice()` returns a portion without mutating the source array; `splice()` changes the source array.

**A18.** `forEach()`, `map()`, `filter()`, `find()`, `reduce()` respectively.

**A19.** `6000` and `6000`. `map()` created a new array, but the callback mutated the original employee object.

**A20.** `employees.map(emp => ({ ...emp, salary: emp.salary * 1.1 }))`. Spread creates a shallow copy, so nested objects can still share references.

**A21.** `find()` returns `undefined` when there is no match; `find(...) ?? null` converts that missing result to `null`.

**A22.** `60`.

**A23.** One solution:

```javascript
function calculateBonus(salary, performance, years) {
  if (performance >= 90 && years >= 3) return salary * 0.2;
  if (performance >= 75 && years >= 2) return salary * 0.1;
  return 0;
}
```

**A24.** `employees.filter(emp => emp.isActive && emp.department === "IT").map(emp => emp.name)`.

**A25.**

```javascript
function findEmployeeById(employees, id) {
  return employees.find(emp => emp.id === id) ?? null;
}
```

**A26.**

```javascript
function netSalary(emp) {
  return emp.basicSalary + emp.housingAllowance + emp.transportAllowance - emp.deduction;
}
function activePayroll(employees) {
  return employees.filter(emp => emp.isActive)
    .reduce((sum, emp) => sum + netSalary(emp), 0);
}
```

**A27.** Four total, three active, one inactive, active net payroll **SAR 21,800**. Omar is excluded because `isActive` is `false`.

**A28.** Returning the result separates business logic from presentation. The caller can log it, render it in HTML, test it, or send it to another function without rewriting the calculation.

---

## Self-assessment

- [ ] I can explain my answers without running the code.
- [ ] I can trace a loop and identify when `break` or `continue` takes effect.
- [ ] I can distinguish output printed by `console.log()` from a function's return value.
- [ ] I can safely transform arrays of objects without unintended mutation.
- [ ] I can write payroll calculations and verify their results with edge cases.
