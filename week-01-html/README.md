# Week 01 — HTML5, Web Fundamentals & Git

**Module 01 · Full-Stack Web Development Roadmap**

Learn how web pages are structured, how browsers interpret HTML, how forms communicate data, and how Git supports a reliable development workflow. This module combines technical explanations with hands-on exercises and a small multi-page portfolio.

## Learning outcomes

By the end of this module, you should be able to:

- Describe the roles of the browser, DNS, HTTP(S), web servers, HTML, and the Document Object Model (DOM).
- Create valid HTML5 documents with appropriate metadata and semantic structure.
- Build accessible navigation, links, images, lists, data tables, and forms.
- Explain how `id`, `name`, and `value` affect form behavior and submitted data.
- Distinguish browser-side validation from server-side validation and authorization.
- Diagnose markup, navigation, and accessibility problems using browser DevTools and an HTML validator.
- Use Git to stage, commit, compare, branch, merge, restore, and push changes.
- Build and inspect a four-page HTML portfolio.

## Learning materials

- **[Detailed notes](notes.md)** — concepts, explanations, commands, and worked examples.
- **[Practice questions and assignments](questions.md)** — knowledge checks, coding tasks, and debugging challenges.
- **Lesson folders** — practical files you can inspect, run, and modify.

## Lesson guide

| Study day | Topic | Practice |
| --- | --- | --- |
| 01 | Web foundations and basic HTML | Create a valid HTML document; understand its structure |
| 02 | Semantic HTML, forms, and accessibility | Use semantic elements and accessible form controls |
| 03 | Advanced HTML and Git/GitHub basics | Work with tables, media, and the Git workflow |
| 04 | Forms and Git branching | Review form submission behavior; practice branching and merging |
| 05 | Multi-page portfolio and Git diffs | Connect four HTML pages with relative links; inspect changes |
| 06 | Validation, accessibility, debugging, and review | Validate markup, test keyboard access, and review the portfolio |
| 07 | Rest | Optional light revision; no required assignment |

The repository currently includes `day-01/` through `day-05/` exercise folders. Day 6 is a review and assessment session, not necessarily a separate folder.

## Practical project: Four-page HTML portfolio

The culminating exercise is a semantic HTML portfolio with four interconnected pages. Start with [the portfolio homepage](day-05/index.html) and inspect the other pages in that directory.

When reviewing the project, check that:

1. Every page has a meaningful title, language, character encoding, and viewport metadata.
2. Navigation and relative links work across all pages.
3. Headings and semantic landmarks describe the page structure.
4. Images have appropriate alternative text.
5. Forms use associated labels and meaningful field names.
6. Tables represent tabular data, not page layout.
7. The HTML validator reports no errors, and the site is usable with a keyboard.

**Scope:** This is an HTML-focused project. CSS styling is introduced in Week 2. HTML form controls do not save or send application data without a configured destination and backend processing.

## How to study this module

Read the relevant section of [notes.md](notes.md), implement the example yourself, then attempt the matching exercises in [questions.md](questions.md). Use the browser's Developer Tools to investigate behavior rather than relying only on visual appearance. Review your Git changes before committing.

You can follow the six-day sequence or study at your own pace. The seventh day is reserved for rest; revision is optional.

## Next module

Continue with [Week 02 — CSS and Responsive Design](../week-02-css/) to style the HTML portfolio using the cascade, box model, Flexbox, Grid, and responsive layouts.
