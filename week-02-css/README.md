# Week 02 — CSS3 & Responsive Web Design

**Module 02 of the 16-week Full-Stack Web Development Roadmap**  

**Schedule:** Six guided study days + one rest/revision day  
**Prerequisites:** Week 01 HTML5, semantic markup, forms, basic Git

## Overview

This module turns a semantic HTML portfolio into a readable, maintainable, responsive interface. You'll learn not only *which* CSS properties to use, but how the cascade, layout algorithms, intrinsic sizing, and browser DevTools explain the results.

## Learning outcomes

By the end of Week 02, you should be able to:

- Attach stylesheets and write maintainable selectors and declarations.
- Explain the cascade, inheritance, specificity, and box model.
- Build consistent typography, spacing, colors, and reusable design tokens.
- Choose Flexbox for one-dimensional layout and Grid for two-dimensional layout.
- Implement mobile-first responsive layouts and avoid horizontal overflow.
- Inspect and debug layout issues using browser DevTools.
- Apply accessible focus indicators, readable contrast, and responsive images.

## Six-day lesson plan

| Day | Topic | Practical outcome |
|---|---|---|
| [01](day-01/) | CSS foundations, selectors, cascade, box model | Style the existing HTML portfolio |
| [02](day-02/) | Colors, typography, units, gradients, variables | Establish a consistent visual system |
| [03](day-03/) | Flexbox | Build navigation and flexible content sections |
| [04](day-04/) | CSS Grid | Build a responsive card/project layout |
| [05](day-05/) | Mobile-first design, media queries, fluid sizing | Adapt layouts across screen sizes |
| [06](day-06/) | DevTools, refinement, accessibility, validation | Complete and verify the responsive portfolio |

**Day 07:** Rest. Optional review of the notes, unanswered questions, and final project.

## Course materials

- **[Detailed notes](notes.md)** — concepts, examples, troubleshooting, and reference explanations.
- **[Practice questions](questions.md)** — conceptual checks, coding tasks, debugging challenges, and final assessment.
- **[Daily implementations](day-01/)** — start with Day 01 and work sequentially through Day 06.

> The day folders contain successive exercises and implementations. Compare your solution with the code only after attempting the task independently.

## Final project — Responsive portfolio

Extend your Week 01 semantic HTML portfolio into a responsive site featuring a header/navigation area, an introduction, content or skills cards, a project grid, and a contact section. The finished site should work without horizontal scrolling at narrow viewport widths and remain readable at larger widths.

### Acceptance checklist

- [ ] HTML remains semantic; CSS is kept in an external stylesheet.
- [ ] Mobile-first base styles work without depending on a desktop breakpoint.
- [ ] Flexbox is used where alignment or one-dimensional distribution is needed.
- [ ] Grid is used for the project/card layout, with sensible intrinsic minimum sizes.
- [ ] Images are responsive and preserve their proportions.
- [ ] Text remains legible; links and controls have visible keyboard focus.
- [ ] Layout is checked around **375px, 768px, and 1440px**, plus widths between them.
- [ ] No unintended horizontal overflow or overlapping content.
- [ ] Changes are committed with meaningful Git messages.

## Suggested workflow

1. Read the day's topic in [notes.md](notes.md).
2. Complete the related task in [questions.md](questions.md) before checking the reference code.
3. Implement and inspect the page in a browser; use DevTools to explain unexpected behavior.
4. Record corrections, retest at different viewport widths, and commit your work.

**Next module:** Week 03 — JavaScript Fundamentals.
