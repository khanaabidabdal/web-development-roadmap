# Full-Stack Web Development Roadmap

**A free, 16-week, project-based learning resource covering frontend development, backend engineering, databases, APIs, testing, and deployment.**

> **Progress:** Weeks 01–04 completed · **Next:** Week 05 — Asynchronous JavaScript & APIs

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
| 05 | Asynchronous JavaScript & APIs | Next |
| 06 | Advanced Git, npm & tooling | Planned |
| 07 | TypeScript | Planned |
| 08 | React fundamentals | Planned |
| 09 | Advanced React | Planned |
| 10 | Modern PHP | Planned |
| 11 | SQL & MySQL | Planned |
| 12 | Laravel fundamentals | Planned |
| 13 | Advanced Laravel & APIs | Planned |
| 14 | Full-stack integration | Planned |
| 15 | Deployment, Linux, web servers, Docker & CI/CD | Planned |
| 16 | Full-stack capstone, portfolio & interviews | Planned |

## What has been built so far

| Module | Focus | Explore |
| --- | --- | --- |
| Week 01 | Semantic HTML, forms, accessibility, and portfolio structure | [HTML exercises](week-01-html/) |
| Week 02 | Responsive layouts with CSS, Flexbox, Grid, and media queries | [CSS exercises](week-02-css/) |
| Week 03 | JavaScript language fundamentals and problem-solving | [JavaScript exercises](week-03-javascript/) |
| Week 04 | DOM updates, event delegation, forms, CRUD operations, searching, and filtering | [DOM exercises](week-04-dom/) |

### Featured project: Interactive dashboard (Week 04)

The Week 04 project brings the earlier fundamentals together in a responsive, browser-based employee management dashboard. It supports adding, editing, deleting, and changing record status, alongside statistics, search, department/status filters, and empty states.

The records are stored in a JavaScript array in memory; this is **not** a persistent, database-backed application. The project is intended to demonstrate application state, rendering, event handling, and UI consistency.

**Explore:** [Week 04 module](week-04-dom/) · [Dashboard source](week-04-dom/day-06/)

## Repository organization

```text
web-development-roadmap/
├── README.md
├── week-01-html/
│   └── day-XX/                  # HTML exercises and supporting materials
├── week-02-css/
│   └── day-XX/                  # CSS exercises and supporting materials
├── week-03-javascript/
│   └── day-XX/                  # JavaScript exercises and supporting materials
└── week-04-dom/
    ├── README.md               # Module overview
    ├── notes.md                # Technical reference
    ├── questions.md            # Knowledge checks
    ├── exercises.md            # Practice and revision guide
    └── day-01/ ... day-06/     # Daily work, including the dashboard
```

*The tree is a high-level guide, not an exhaustive file listing. Documentation availability may vary by module.*

## Start here

- [Week 01 — HTML foundations](week-01-html/)
- [Week 02 — CSS and responsive design](week-02-css/)
- [Week 03 — JavaScript fundamentals](week-03-javascript/)
- [Week 04 — DOM and browser JavaScript](week-04-dom/)
- [Week 04 — Interactive dashboard](week-04-dom/day-06/)

## Engineering and AI-assisted learning approach

The aim is not to collect code snippets or accept generated answers uncritically. My workflow is to understand a concept, implement a small exercise, test behavior, inspect failures, refine the design, and document the outcome. ChatGPT supports this process through explanations, questions, and code-review suggestions; **implementation and verification remain essential**.

This repository documents progress rather than claiming that every example follows production standards. As the roadmap advances, the focus expands from browser fundamentals to typed code, frameworks, server-side engineering, databases, integration, testing, and deployment.

## Expectations and limitations

This repository is an **evolving educational resource**, not a production-ready framework. Some exercises intentionally omit persistence, authentication, authorization, and other requirements of deployed systems. Examples should be reviewed, tested, secured, and adapted before use in real applications.

Contributions, corrections, and suggestions are welcome as the material grows.
