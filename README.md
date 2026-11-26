
# Full-Stack Web Development Roadmap

**A free, 16-week, project-based learning resource covering frontend development, backend engineering, databases, APIs, testing, and deployment.**

> **Progress:** Weeks 01–07 implemented (7/16, 43.75%) · **Next:** Week 08 — React Fundamentals

## Why I created this repository

I'm a full-stack developer working with PHP, Laravel, and ERP applications, with a master's degree in Artificial Intelligence and published research on classifying AI-generated images.

I created this repository for two connected reasons: to revisit and strengthen my full-stack engineering foundations through disciplined hands-on practice, and to turn that work into a structured, freely available resource others can follow.

I'm also exploring **how ChatGPT can serve as a technical tutor and course-development assistant**. I use it to help structure lessons, generate practice prompts, discuss engineering concepts, review code, and challenge my understanding. I write and test implementations, evaluate suggestions, correct mistakes, and document what holds up under verification. This is a practical learning workflow, **not a claim that generated material is automatically correct or that the course has been formally evaluated**.

My goal extends beyond any one application domain: to strengthen general software engineering, full-stack development, and the foundations for integrating AI into real applications. Exercises therefore span different kinds of web products and engineering problems.

The week-by-week, day-by-day organization is intentional: readers can repeat the exercises at their own pace, including the review process, without needing to follow my personal calendar.

## How to use this course

1. Read the week's `README.md` and `notes.md` where available to understand the objectives and concepts.
2. Work through the corresponding `day-XX/` exercise directories; write and test the code yourself.
3. Use `questions.md` for theory checks, debugging challenges, and assignments **before** consulting your notes.
4. Consult `exercises.md` where provided for additional practice and revision.
5. Validate your results in the browser and with appropriate developer tools; review your Git diffs before committing.
6. Reserve the seventh day for rest, with optional light revision.

Each week has **six study days and one rest/revision day**. The schedule is a guide, not a prerequisite for using the materials.

## Curriculum

| Week | Topic | Status |
| --- | --- | --- |
| 01 | HTML5, web fundamentals, accessibility & Git | Complete |
| 02 | CSS3, Flexbox, Grid & responsive design | Complete |
| 03 | JavaScript fundamentals | Complete |
| 04 | DOM manipulation, browser events & interactive interfaces | Complete |
| 05 | Asynchronous JavaScript & APIs | Complete |
| 06 | Advanced JavaScript & application architecture | Complete |
| 07 | TypeScript | Complete |
| 08 | React fundamentals | Next |
| 09 | Advanced React | Planned |
| 10 | Modern PHP | Planned |
| 11 | SQL & MySQL | Planned |
| 12 | Laravel fundamentals | Planned |
| 13 | Advanced Laravel & APIs | Planned |
| 14 | Full-stack integration | Planned |
| 15 | Deployment, Linux, web servers, Docker & CI/CD | Planned |
| 16 | Full-stack capstone, portfolio & interviews | Planned |

Completion refers to implementation, testing, and documentation milestones rather than mastery of every concept.

## What has been built so far

| Module | Focus | Explore |
| --- | --- | --- |
| Week 01 | Semantic HTML, forms, accessibility, and portfolio structure | [HTML exercises](week-01-html/) |
| Week 02 | Responsive layouts with CSS, Flexbox, Grid, and media queries | [CSS exercises](week-02-css/) |
| Week 03 | JavaScript language fundamentals and problem-solving | [JavaScript exercises](week-03-javascript/) |
| Week 04 | DOM updates, event delegation, forms, CRUD operations, searching, and filtering | [DOM exercises](week-04-dom/) |
| Week 05 | Event loop, Promises, `async`/`await`, Fetch API, request cancellation, and product catalog | [Async JavaScript & API exercises](week-05-async-apis/) |
| Week 06 | ES modules, closures, separation of concerns, immutable reducers, validation, persistence, and TaskFlow | [Advanced JavaScript exercises](week-06-advanced-javascript/) |
| Week 07 | Type inference, interfaces, unions, generics, narrowing, runtime validation, API contracts, and TypeScript application migration | [TypeScript exercises](week-07-typescript/) |

### Featured project: Interactive dashboard (Week 04)

The Week 04 project brings the earlier fundamentals together in a responsive, browser-based employee management dashboard. It supports adding, editing, deleting, and changing record status, alongside statistics, search, department/status filters, and empty states.

The records are stored in a JavaScript array in memory; this is **not** a persistent, database-backed application. The project is intended to demonstrate application state, rendering, event handling, and UI consistency.

**Explore:** [Week 04 module](week-04-dom/) · [Dashboard source](week-04-dom/day-06/)

### Featured project: Product Catalog (Week 05)

The Week 05 project explores asynchronous browser applications using the Fetch API and DummyJSON. It includes product search, category filtering, price sorting, a native dialog for product details, and loading, empty, and error states. Request cancellation and stale-response checks help prevent outdated search results from replacing newer ones. Filtering and sorting apply to the currently downloaded dataset; this is a learning project, not a production-scale catalog.

**Explore:** [Week 05 module](week-05-async-apis/) · [Product Catalog source](week-05-async-apis/day-06/)

### Featured project: TaskFlow (Week 06)

TaskFlow is a modular vanilla JavaScript task manager with task creation, editing, completion toggling, deletion, filtering, sorting, statistics, validation, and `localStorage` persistence. Its modules separate event coordination, state management, pure reducer transitions, rendering, input validation, and defensive storage parsing.

Manual lifecycle and reducer checks were performed for this original JavaScript implementation. Automated reducer and store testing was subsequently introduced in the Week 07 TypeScript version.

**Explore:** [Week 06 module](week-06-advanced-javascript/) · [TaskFlow source](week-06-advanced-javascript/day-06/)

### Featured project: TaskFlow — TypeScript Edition (Week 07)

The Week 07 project migrates the original TaskFlow application from JavaScript to TypeScript while preserving its functionality, modular architecture, and interface.

The migration introduces:

- Strict TypeScript compiler configuration.
- Shared interfaces and application contracts.
- Literal types and discriminated action unions.
- Generic state management.
- Immutable reducer transitions.
- Runtime validation and custom type guards.
- Defensive local storage parsing.
- Type-safe DOM manipulation.
- Dedicated browser compilation configuration.
- Automated reducer and store assertions.

The original JavaScript implementation remains available for comparison. The TypeScript version uses a separate local storage key to avoid overwriting the original application's data.

#### Verification results

| Verification | Result |
| --- | --- |
| Strict TypeScript compilation | Passed |
| Browser compilation | Passed |
| Manually inspected validator cases | 9/9 |
| Automated reducer and store assertions | 15/15 |
| Manual browser functional checks | 17/17 |
| Previous-day regression execution | Passed |

These checks demonstrate the verified behavior of the learning project but do not represent exhaustive test coverage or production readiness.

**Explore:** [Week 07 module](week-07-typescript/) · [TaskFlow TypeScript source](week-07-typescript/day-06/)

## Repository organization

```text
web-development-roadmap/
├── README.md
├── .gitignore
├── week-01-html/
├── week-02-css/
├── week-03-javascript/
├── week-04-dom/
├── week-05-async-apis/
│   ├── README.md, notes.md, questions.md, exercises.md
│   └── day-01/ ... day-06/     # Async exercises and Product Catalog
├── week-06-advanced-javascript/
│   ├── README.md, notes.md, questions.md, exercises.md
│   └── day-01/ ... day-06/     # Architecture exercises and TaskFlow
└── week-07-typescript/
    ├── README.md, notes.md, questions.md
    ├── package.json
    ├── package-lock.json
    ├── tsconfig.json
    ├── tsconfig.taskflow.json
    └── day-01/ ... day-06/     # TypeScript exercises and TaskFlow migration
```

*The tree is a high-level guide, not an exhaustive file listing. Documentation availability may vary by module.*

## Start here

- [Week 01 — HTML foundations](week-01-html/)
- [Week 02 — CSS and responsive design](week-02-css/)
- [Week 03 — JavaScript fundamentals](week-03-javascript/)
- [Week 04 — DOM and browser JavaScript](week-04-dom/)
- [Week 04 — Interactive dashboard](week-04-dom/day-06/)
- [Week 05 — Asynchronous JavaScript & APIs](week-05-async-apis/)
- [Week 05 — Product Catalog](week-05-async-apis/day-06/)
- [Week 06 — Advanced JavaScript & application architecture](week-06-advanced-javascript/)
- [Week 06 — TaskFlow](week-06-advanced-javascript/day-06/)
- [Week 07 — TypeScript](week-07-typescript/)
- [Week 07 — TaskFlow TypeScript Edition](week-07-typescript/day-06/)

**Next module:** Week 08 — React Fundamentals (not yet published).

## Engineering and AI-assisted learning approach

The aim is not to collect code snippets or accept generated answers uncritically. My workflow is to understand a concept, implement a small exercise, test behavior, inspect failures, refine the design, and document the outcome. ChatGPT supports this process through explanations, questions, and code-review suggestions; **implementation and verification remain essential**.

This repository documents progress rather than claiming that every example follows production standards. As the roadmap advances, the focus expands from browser fundamentals to typed code, frameworks, server-side engineering, databases, integration, testing, and deployment.

The TypeScript module introduces a more explicit distinction between compile-time type safety and runtime validation. Automated assertions, manual functional testing, and regression execution complement static analysis when verifying application behavior.

## Expectations and limitations

This repository is an **evolving educational resource**, not a production-ready framework. Some exercises intentionally omit persistence, authentication, authorization, and other requirements of deployed systems. Examples should be reviewed, tested, secured, and adapted before use in real applications.

Contributions, corrections, and suggestions are welcome as the material grows.
