# Week 02 — CSS3 & Responsive Web Design: Course Notes

This reference accompanies the six practical lessons in `week-02-css/day-01` through `day-06`. Read the relevant section, implement the example, then test your understanding using [questions.md](questions.md).

## Contents

1. [Day 01 — CSS foundations and the box model](#day-01--css-foundations-and-the-box-model)
2. [Day 02 — Visual design, typography, and units](#day-02--visual-design-typography-and-units)
3. [Day 03 — Flexbox](#day-03--flexbox)
4. [Day 04 — CSS Grid](#day-04--css-grid)
5. [Day 05 — Responsive design](#day-05--responsive-design)
6. [Day 06 — Debugging, accessibility, and final review](#day-06--debugging-accessibility-and-final-review)
7. [Property reference](#quick-property-reference)
8. [Common mistakes](#common-mistakes-and-fixes)

---

## Day 01 — CSS foundations and the box model

### What CSS does

HTML describes document meaning and structure; CSS controls presentation and layout. Keeping them separate makes pages easier to maintain.

Link a stylesheet from the HTML document's `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

A CSS rule consists of a selector and declarations:

```css
.profile-card {
  padding: 1rem;
  border: 1px solid #d5dbe3;
  border-radius: 0.75rem;
}
```

The selector `.profile-card` matches elements with that class. Each declaration has a property and a value. Comments use `/* ... */`.

### Selectors

```css
p { line-height: 1.6; }              /* element */
.card { background: white; }         /* class */
#contact { scroll-margin-top: 5rem; } /* ID */
nav a { text-decoration: none; }     /* descendant */
nav > a { font-weight: 600; }        /* direct child */
a:hover { text-decoration: underline; } /* pseudo-class */
```

Prefer classes for reusable component styling. IDs are useful for unique anchors but tend to make styling harder to override.

### Cascade, specificity, and inheritance

When multiple rules affect the same property, the browser resolves them using cascade factors including origin/importance, cascade layers, specificity, scoping proximity (where applicable), and source order. **Specificity alone does not always decide the winner.**

For ordinary author rules in the same layer, common specificity examples are:

- `p` → `(0,0,1)`
- `.card` → `(0,1,0)`
- `#contact` → `(1,0,0)`
- `main .card` → `(0,1,1)`

If competing declarations have equal priority and specificity, the later declaration generally wins. `!important` changes cascade priority; it is not a substitute for understandable selectors.

Some properties, such as `color` and `font-family`, inherit by default. Others, such as `margin`, `padding`, and `border`, do not.

### Box model

Every rendered element occupies a box composed of **content → padding → border → margin**. With the default `content-box`, declared `width` refers to content width; padding and borders add to it. `border-box` includes padding and border inside the declared width.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Example: with `width: 300px`, `padding: 20px`, and `border: 2px solid`, `content-box` produces a **344px** outer border box; `border-box` produces a **300px** outer border box. Margins sit outside both.

### Display and document flow

- `block`: generally begins on a new line and fills available inline space.
- `inline`: participates in text flow; width/height generally do not apply as for block boxes.
- `inline-block`: participates inline but accepts width/height.
- `display: none`: removes the element from layout and accessibility exposure in ordinary cases.

Use normal document flow as your starting point; add layout systems only where needed.

**Day 01 check:** Explain why two selectors produce different results and diagnose an element whose rendered width exceeds its declared width.

---

## Day 02 — Visual design, typography, and units

### Colors and backgrounds

CSS supports named colors, hexadecimal, `rgb()`, `hsl()`, and other modern color functions.

```css
:root {
  --color-ink: #172334;
  --color-surface: #ffffff;
  --color-accent: #1769aa;
  --space-3: 0.75rem;
  --radius-card: 0.75rem;
}

body {
  color: var(--color-ink);
  background: linear-gradient(135deg, #edf4fc, #ffffff);
}
```

CSS custom properties are inherited unless otherwise configured. `var(--color-accent)` substitutes a property value; `var(--missing, #000)` provides a fallback.

Use color intentionally: text contrast matters more than decoration. Do not communicate important status with color alone.

### Typography

```css
body {
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}

h1 {
  font-size: clamp(1.8rem, 1.2rem + 2vw, 3rem);
  line-height: 1.15;
}
```

`line-height` without a unit is often preferable for body text because it scales with the element's font size. Establish a clear heading hierarchy and avoid excessively long lines of text.

### Units

| Unit | Relative to / use |
|---|---|
| `px` | CSS reference pixel; useful for borders and precise limits |
| `rem` | Root element's computed font size; consistent spacing and type |
| `em` | Usually current element's font size for lengths; context-dependent |
| `%` | Depends on the property and containing block |
| `vw`, `vh` | Viewport width/height; use carefully on mobile |
| `dvh` | Dynamic viewport height where supported |
| `fr` | Fraction of available space in CSS Grid tracks |

A practical default is `rem` for spacing and type, with `max-width` and fluid layout constraints. Avoid setting large fixed widths that cannot fit on small screens.

### Spacing system and reusable styles

```css
.section {
  padding-block: 2rem;
}

.content-card {
  padding: var(--space-3);
  border-radius: var(--radius-card);
  background: var(--color-surface);
}
```

Consistency improves readability and makes later responsive adjustments easier.

**Day 02 check:** Explain when `rem` is more predictable than `em`, and update a component's colors through custom properties.

---

## Day 03 — Flexbox

Flexbox is a **one-dimensional** layout model: it arranges items along a main axis, with alignment along the cross axis.

```css
.site-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
```

### Axes and core properties

- `flex-direction: row` → main axis follows the inline direction; `column` → main axis follows the block direction.
- `justify-content` distributes items along the **main axis**.
- `align-items` aligns items along the **cross axis**.
- `gap` controls spacing between items without adding external margins.
- `flex-wrap: wrap` allows items to move onto additional lines.

For a column flex container, the axes change: `justify-content` controls vertical distribution in a conventional horizontal writing mode.

### Growing and shrinking

```css
.profile-summary {
  flex: 1 1 18rem;
  min-width: 0;
}

.profile-photo {
  flex: 0 0 9rem;
  max-width: 100%;
}
```

`flex: 1 1 18rem` means `flex-grow: 1`, `flex-shrink: 1`, `flex-basis: 18rem`. The basis is the starting size before available space is distributed. A flex item may refuse to shrink below its min-content size; `min-width: 0` can resolve unexpected overflow, but first identify the real constraint.

### When to use Flexbox

Use it for navigation links, button groups, header alignment, or a single row/column of cards. Use Grid when both rows and columns need coordinated control.

**Day 03 check:** Build a header with a site title and navigation that wraps without overlapping at narrow widths.

---

## Day 04 — CSS Grid

Grid is a **two-dimensional** layout system that defines columns and rows and places items into cells.

```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 250px), 1fr)
  );
  gap: 1.25rem;
}
```

This pattern creates as many columns as fit, with each column aiming for a 250px minimum while allowing it to shrink to the container width on very narrow screens. `auto-fit` collapses unused tracks; `auto-fill` can preserve empty tracks.

### Core properties

```css
.feature-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .feature-layout {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .featured-card {
    grid-column: span 2;
  }
}
```

`grid-column: span 2` makes an item occupy two tracks **when those tracks exist**. Apply spans at a breakpoint where the intended layout is available.

`minmax(0, 1fr)` permits tracks to shrink below min-content size, which can help prevent overflow caused by long content; the content itself may still need wrapping or overflow handling.

### Grid versus Flexbox

| Situation | Typical choice |
|---|---|
| Navigation or toolbar | Flexbox |
| Evenly spaced card gallery | Grid |
| Two-dimensional dashboard | Grid |
| Inline badge/button arrangement | Flexbox |
| Card internal vertical arrangement | Flexbox or normal flow |

These are guidelines, not absolute rules; choose the model that expresses the layout clearly.

**Day 04 check:** Build a responsive project gallery that becomes one column when space is limited and multiple columns when space allows.

---

## Day 05 — Responsive design

Responsive design adapts to the **available space and user environment**, not to a fixed list of device models.

### Viewport and mobile-first styles

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Start with a narrow-screen layout, then add enhancements when space permits:

```css
.page-container {
  width: min(100% - 2rem, 72rem);
  margin-inline: auto;
}

.content-card {
  padding: 0.75rem;
}

@media (min-width: 768px) {
  .content-card {
    padding: 1.7rem;
  }
}
```

This mirrors the Week 02 portfolio's final card-spacing refinement: comfortable mobile padding with more generous spacing on larger screens.

### Breakpoints and fluid sizing

Use breakpoints where the **content** needs them. `768px` is an example, not a universal tablet boundary.

```css
.hero-title {
  font-size: clamp(1.75rem, 1.2rem + 2.5vw, 3.25rem);
}
```

`clamp(minimum, preferred, maximum)` prevents fluid sizes from becoming excessively small or large.

### Responsive media

```css
img {
  max-width: 100%;
  height: auto;
}
```

Set appropriate `alt` text in HTML: describe informative images and use `alt=""` for purely decorative images. `object-fit: cover` can crop images within a fixed-size box; avoid cropping important content unintentionally.

### Preventing horizontal overflow

Inspect these common causes:

- Fixed-width elements larger than the viewport.
- Grid or flex items constrained by intrinsic minimum sizes.
- Long unbroken strings or URLs.
- Wide tables, images, or preformatted code.
- Padding and borders added to `content-box` widths.

Useful targeted solutions include `max-width: 100%`, `min-width: 0`, `overflow-wrap: anywhere` for unavoidable long strings, and a scrollable wrapper for truly wide tables. Avoid using `overflow-x: hidden` on the whole page to conceal a broken layout.

**Day 05 check:** Test around 375px, 768px, and 1440px, and at intermediate widths; record the first width where a layout starts to fail.

---

## Day 06 — Debugging, accessibility, and final review

### Browser DevTools workflow

1. **Inspect** the affected element.
2. Open **Styles** to identify active and overridden declarations.
3. Open **Computed** to see resolved dimensions, spacing, and inherited values.
4. Inspect the **box model** visualization.
5. Use **Flexbox/Grid overlays** to inspect tracks, alignment, and gaps.
6. Resize the viewport and test the narrowest practical width.
7. Make the smallest justified fix, then retest other breakpoints.

A crossed-out CSS declaration may be overridden or inactive; the Computed panel shows the final resolved value. A media query can also be inactive because its condition is false.

### Accessible interaction styles

```css
a:focus-visible,
button:focus-visible,
input:focus-visible {
  outline: 3px solid #1769aa;
  outline-offset: 3px;
}
```

Avoid removing focus outlines without providing a visible replacement. Keyboard users need to know which control is active. Ensure links are identifiable, text contrast is sufficient, and layouts remain usable with text zoom.

### Motion preferences

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Apply reduced-motion handling when the site includes animation or smooth scrolling; do not introduce motion purely for decoration.

### Final validation checklist

- [ ] Navigation and links work by mouse and keyboard.
- [ ] Heading hierarchy and semantic HTML remain intact.
- [ ] CSS is understandable and avoids unnecessary duplication.
- [ ] Flex and Grid layouts behave correctly at multiple widths.
- [ ] No unintended horizontal overflow or clipped text.
- [ ] Images scale without distortion.
- [ ] Focus indicators remain visible.
- [ ] Browser console has no unexplained errors.
- [ ] Changes are committed with descriptive messages.

---

## Quick property reference

| Property | Purpose |
|---|---|
| `box-sizing` | Controls how width/height account for padding and border |
| `margin`, `padding` | Outer and inner spacing |
| `display` | Establishes layout mode |
| `gap` | Space between flex/grid items |
| `flex` | Flex item's growth, shrink, and basis |
| `justify-content` | Main-axis distribution in Flexbox |
| `align-items` | Cross-axis alignment in Flexbox |
| `grid-template-columns` | Defines Grid column tracks |
| `grid-column` | Places/spans Grid items |
| `min-width`, `max-width` | Constrains element width |
| `@media` | Applies styles when media conditions match |
| `clamp()` | Bounds a fluid value |
| `var()` | Reads a CSS custom property |
| `:focus-visible` | Styles keyboard-relevant focus |

## Common mistakes and fixes

**1. “`justify-content` isn't moving my items.”** Check whether the flex container has extra free space along its main axis and whether `flex-direction` changed that axis.

**2. “My grid is wider than the phone.”** Inspect the column minimums and long content. Consider `minmax(0, 1fr)` or the auto-fit pattern with `min(100%, 250px)`.

**3. “My CSS rule is ignored.”** Confirm the stylesheet path, selector match, active media query, cascade priority, and any invalid property/value.

**4. “My card padding looks too large on mobile.”** Start with compact base padding, then increase it at a justified breakpoint.

**5. “The layout looks fine at 375px and 768px but breaks at 620px.”** Test continuously between presets. Breakpoints should follow content needs, not only device labels.

**6. “I fixed overflow with `overflow-x: hidden`.”** Revisit the element creating overflow; hiding it can conceal content and keyboard focus.

## Further study

- [MDN — CSS first steps](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)
- [MDN — CSS box model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [MDN — Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout)
- [MDN — Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [MDN — Responsive design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)

**Next:** Use [questions.md](questions.md) for practice, then compare your implementation against the Day 06 portfolio.
