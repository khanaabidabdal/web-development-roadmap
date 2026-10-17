# Week 03 — JavaScript Fundamentals

## Overview

This week introduces JavaScript programming fundamentals and their application to real-world business logic. Learners move from variables and control flow to reusable functions, structured data, and a console-based **Employee Payroll Management System**.

**Prerequisites:** Basic HTML, browser Developer Tools, and Git fundamentals (Weeks 01–02).

**Duration:** Six study days, followed by an optional revision/rest day.

## Learning outcomes

By the end of this week, learners should be able to:

- Connect an external JavaScript file to an HTML document using `defer`.
- Declare variables using `const` and `let` and distinguish JavaScript's basic data types.
- Use arithmetic, comparison, and logical operators safely.
- Write conditional business rules using `if`, `else if`, `else`, and the ternary operator.
- Apply `for`, `while`, `for...of`, `break`, and `continue` to iterative tasks.
- Define functions with parameters, return values, defaults, and arrow syntax.
- Explain global, function, and block scope.
- Work with arrays, objects, and arrays of objects.
- Use `forEach`, `map`, `filter`, `find`, and `reduce` for data processing.
- Build and test a small payroll application without changing the source records unintentionally.
- Commit incremental work to a Git feature branch.

## Daily learning plan

| Day | Focus | Practical work |
|---|---|---|
| 01 | JavaScript introduction, variables, types, operators, coercion, template literals | Employee pay calculations and type experiments |
| 02 | Comparisons, conditions, logical operators, validation, ternary expressions | Employee eligibility, access and salary rules |
| 03 | `for`, `while`, `for...of`, nested loops, `break`, `continue` | Employee IDs, payroll totals, attendance and transactions |
| 04 | Functions, parameters, `return`, scope, defaults, arrow functions | Reusable salary, bonus and authorization functions |
| 05 | Arrays, objects, array methods and immutability | Employee directory, search, salary updates, payroll summary |
| 06 | Integration, testing and debugging | Employee Payroll Management System |
| 07 | Rest / optional revision | Revisit notes and questions; no required coding |

## Folder structure

```text
week-03-javascript/
├── README.md
├── notes.md
├── questions.md
├── day-01/
├── day-02/
├── day-03/
├── day-04/
├── day-05/
└── day-06/
    ├── index.html
    ├── app.js
    └── README.md
```

Daily folders contain their own exercises and HTML test pages as applicable.

## Capstone: Employee Payroll Management System

The Day 06 project is a **console-based JavaScript application**. It models employee records and provides functions to:

1. List all employees.
2. Find an employee by ID, returning `null` for an unknown ID.
3. Calculate gross and net salary.
4. List active employees.
5. Calculate net payroll for active employees.
6. Filter employees by department.
7. Generate a payroll report with total, active, and inactive counts and total active payroll.

The supplied dataset contains four employees. Expected results include **three active employees** and **SAR 21,800** in active net payroll.

### Run the project

1. Open `day-06/index.html` in a browser (or serve it using a local development server).
2. Open Developer Tools (usually **F12**) and select **Console**.
3. Inspect the logged employee records, salary calculations, filters and report.
4. Edit `day-06/app.js` to add edge-case tests, then reload the page.

The application does not yet render its results into the HTML page. DOM interaction is introduced in Week 04.

## Completion checklist

- [ ] Explain `let`, `const`, primitive types and type coercion.
- [ ] Write correct conditions with `&&`, `||` and parentheses.
- [ ] Choose an appropriate loop and distinguish `break` from `continue`.
- [ ] Return values from functions rather than relying only on logging.
- [ ] Explain function and block scope, including accidental globals.
- [ ] Distinguish `map`, `filter`, `find`, `forEach` and `reduce`.
- [ ] Avoid unintentional mutations of employee objects.
- [ ] Test the payroll project, including missing IDs and empty department results.
- [ ] Review `notes.md` and complete the questions in `questions.md`.

## Next week

**Week 04 — DOM Manipulation and Events:** selecting elements, handling user interactions, reading form values, updating the page, and connecting JavaScript logic to a browser interface.
