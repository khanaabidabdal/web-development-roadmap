# Week 02 — CSS3 & Responsive Web Design: Practice and Assessment

**Instructions:** Attempt the questions without looking at the reference code. Use DevTools to test your explanations. Answers are intentionally not included here; document your reasoning and code in your own solution files.

## Day 01 — CSS foundations and the box model

### Concept checks

1. What responsibilities belong to HTML, and which belong to CSS? Give two examples of each.
2. Explain the difference between an element selector, class selector, and ID selector. Which is usually preferable for reusable components?
3. Two declarations set `color` on the same element. What factors determine which declaration wins? Why isn't specificity the whole answer?
4. Which of these normally inherit: `color`, `font-family`, `padding`, `border`, and `line-height`?
5. Explain the content, padding, border, and margin areas of the box model.
6. An element has `width: 300px`, `padding: 20px`, and a `2px` border on each side. What is its border-box width under `content-box` and `border-box`?

### Coding task

Create a reusable `.content-card` class with padding, a border, a background, and rounded corners. Apply it to at least two semantic sections in an HTML page.

## Day 02 — Colors, typography, and units

### Concept checks

7. Compare `px`, `rem`, `em`, `%`, and `vw`. When might each be appropriate?
8. Why can unitless `line-height` be helpful for nested text elements?
9. What is a CSS custom property? Demonstrate a declaration and a `var()` reference.
10. Why is color alone insufficient to communicate an important state such as an error?
11. What are two ways to improve text readability beyond increasing font size?

### Coding task

Define custom properties for primary text, accent color, surface color, and spacing. Use them to style a header, button, and card. Add a restrained gradient background without reducing text contrast.

## Day 03 — Flexbox

### Concept checks

12. Define the main axis and cross axis of a flex container.
13. What changes when `flex-direction` switches from `row` to `column`?
14. Compare `justify-content`, `align-items`, `gap`, and `flex-wrap`.
15. Explain the three values in `flex: 1 1 18rem`.
16. Why might `min-width: 0` resolve overflow in a flex item?

### Coding task

Build a navigation bar containing a site title and at least four links. Use Flexbox to align the items on wide screens and wrap or stack them gracefully on narrow screens. Avoid fixed widths that cause overflow.

## Day 04 — CSS Grid

### Concept checks

17. What makes CSS Grid two-dimensional compared with Flexbox?
18. Explain the role of `repeat()`, `minmax()`, and `1fr` in a Grid layout.
19. What is the difference between `auto-fit` and `auto-fill`?
20. What does `grid-column: span 2` mean, and why might it need a breakpoint?
21. Why can `minmax(0, 1fr)` be useful when grid items contain long content?

### Coding task

Build a gallery with at least six project cards using:

```css
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: 1rem;
}
```

Explain in a comment why the inner `min(100%, 250px)` is useful on narrow screens.

## Day 05 — Responsive design

### Concept checks

22. What does *mobile-first* mean in CSS? Why does it usually pair with `min-width` media queries?
23. What is the purpose of the viewport meta tag?
24. Why should breakpoints be chosen based on content rather than device names?
25. Explain `clamp(1.75rem, 1.2rem + 2vw, 3rem)` in plain language.
26. List four causes of horizontal overflow and a suitable fix for each.
27. Why is `max-width: 100%; height: auto;` a useful default for images?

### Coding task

Start with `.content-card { padding: 0.75rem; }`. At `min-width: 768px`, increase its padding to `1.7rem`. Test at **375px, 768px, and 1440px**, and at least one intermediate width. Record what changes and why.

## Day 06 — DevTools, accessibility, and review

### Concept checks

28. What's the difference between the **Styles** and **Computed** panels in DevTools?
29. How would you diagnose a CSS declaration that appears crossed out?
30. What does `:focus-visible` solve, and why should keyboard focus remain visible?
31. Why can `overflow-x: hidden` be a poor first response to layout overflow?
32. What should you check before considering a responsive portfolio complete?

### Coding task

Inspect one layout issue using DevTools. Write a short debugging report containing: observed problem, viewport width, relevant element/selector, root cause, change made, and retest result.

---

## Debugging challenges

### Challenge A — Unexpected card width

```css
.card {
  width: 300px;
  padding: 20px;
  border: 2px solid #333;
}
```

The rendered border box is wider than 300px. Explain why, calculate its width, and show a CSS change that keeps the total border box at 300px.

### Challenge B — Overflowing flex content

```css
.row { display: flex; gap: 1rem; }
.row__text { flex: 1; }
```

One item contains an extremely long unbroken URL. On a narrow screen the row overflows. Identify at least two targeted fixes and explain when each applies.

### Challenge C — Grid column minimum

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 20px;
}
```

The layout overflows on phones. Replace the fixed columns with a responsive approach and explain your track-sizing choice.

### Challenge D — Missing keyboard focus

```css
a:focus { outline: none; }
```

Explain the accessibility problem. Replace it with a visible focus style appropriate for keyboard navigation.

---

## Final practical assessment — Responsive portfolio

**Scenario:** A developer has a semantic HTML portfolio from Week 01 and needs to make it usable on mobile, tablet-sized, and desktop viewports.

### Requirements

1. Use an external CSS stylesheet and a small, consistent set of custom properties.
2. Style a header, navigation, introduction, at least three information cards, a project gallery, and a contact section.
3. Use Flexbox for a one-dimensional alignment task and Grid for the project gallery.
4. Implement mobile-first base styles and at least one content-driven media query.
5. Ensure images scale correctly, long text wraps sensibly, and the page has no unintended horizontal scrolling.
6. Provide clear hover and keyboard-focus states for interactive elements.
7. Validate the layout at 375px, 768px, and 1440px, plus at least one width between these sizes.
8. Explain one bug found using DevTools and how it was fixed.
9. Commit the implementation using a descriptive Git commit message.

### Self-assessment rubric (20 points)

| Criterion | Points |
|---|---:|
| Correct selectors, cascade understanding, and box model | 4 |
| Consistent typography, spacing, and colors | 3 |
| Appropriate Flexbox and Grid usage | 4 |
| Mobile-first responsiveness and overflow handling | 4 |
| Accessibility and keyboard interaction | 3 |
| Debugging explanation and Git hygiene | 2 |
| **Total** | **20** |

**Suggested threshold:** 16/20, with no critical usability or accessibility defect. This is a study benchmark, not a formal certification.

## Optional reflection

- Which layout decision was hardest to explain without trial and error?
- Which DevTools feature saved the most debugging time?
- What would you refactor if the portfolio grew to ten pages?

Return to [Week 02 overview](README.md) or review the [course notes](notes.md).
