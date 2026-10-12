# Week 1 — HTML5 & Git: Practice Questions

**Instructions:** Attempt these exercises before checking [`notes.md`](notes.md). Use your editor, browser, DevTools, an HTML validator, and Git. Record your answers in a separate file or notebook; this file deliberately does not include solutions.

## Day 1 — Web fundamentals and HTML structure

### Concept checks

1. Trace what happens from entering a URL to seeing an HTML page. Where do DNS, HTTPS, the server, and DOM parsing fit?
2. What does `<!DOCTYPE html>` do? Is HTML a programming language?
3. Explain the purposes of `html`, `head`, `body`, `title`, `meta charset`, and viewport metadata.
4. What is the difference between the HTML source and the DOM visible in DevTools?
5. Explain the distinct responsibilities of HTML, CSS, and JavaScript.

### Build

Create a valid `index.html` with a descriptive title, viewport meta tag, one main heading, two paragraphs, a link, and an image with appropriate alternative text. Open it in a browser and inspect its DOM.

## Day 2 — Semantics, links, forms, accessibility

### Concept checks

6. When should you choose `article`, `section`, `nav`, `main`, or `div`? Give a realistic example for each.
7. Why should a page have meaningful heading hierarchy?
8. Explain the difference between an absolute URL and a relative path. What does `../` mean?
9. Why is a visible placeholder not a substitute for an associated `<label>`?
10. Compare the roles of `id`, `name`, and `value` in a form control.
11. Why do related radio inputs share a `name` but need different `value` attributes?

### Build

Create a contact form with associated labels for full name, email, contact preference (radio group), message, and a submit button. Group the radio controls using `fieldset` and `legend`. Navigate through the form using only the keyboard.

## Day 3 — Tables, media, and Git basics

### Concept checks

12. When is an HTML table appropriate, and why should it not be used to lay out a page?
13. Explain `caption`, `thead`, `tbody`, `th`, and `scope` in a data table.
14. What does `alt` communicate? When should it be empty (`alt=""`)?
15. Explain the differences among a Git working tree, index (staging area), and `HEAD`.
16. Compare `git add`, `git commit`, and `git push`.

### Build

Create an employee table with a caption, column headers, and at least five data rows. Initialize a Git repository (or use your course repository), stage the file, inspect the staged diff, and commit it.

## Day 4 — Form behavior and branches

### Concept checks

17. What are the roles of the `action`, `method`, and `enctype` attributes on a form?
18. How does a GET form submission differ from POST? Why is POST not automatically secure?
19. When is `multipart/form-data` required?
20. Compare `readonly` and `disabled` controls during ordinary form submission.
21. Why must the server validate input even when HTML attributes such as `required` and `min` are present?
22. What is a Git branch? Why might you use a feature branch rather than committing directly to `main`?

### Build

Extend the form with an optional file upload and suitable encoding. Explain what a backend must check before accepting the file. Create a feature branch, make a small change, commit, and merge it back after review.

## Day 5 — Multi-page portfolio and diffs

### Concept checks

23. What problems arise from broken relative links in a multi-page website?
24. Compare `git diff`, `git diff --staged`, and `git diff HEAD`.
25. Compare `git restore <file>` and `git restore --staged <file>`. What work could be lost?
26. What is a fast-forward merge?

### Build

Create or review four linked pages: Home, About, Projects, and Contact. Use consistent navigation and semantic landmarks. Include a project card linking to an earlier exercise. Verify every path from the directory where its HTML file lives. Make one change, inspect unstaged and staged diffs, and commit it.

## Day 6 — Validation, debugging, and assessment

### Concept checks

27. What kinds of problems can an HTML validator detect? What does a clean validation report *not* guarantee?
28. How would you debug an image that does not load even though the `<img>` element exists?
29. How can browser DevTools help identify missing elements, wrong paths, or unexpected DOM structure?
30. Why should you test keyboard navigation and visible focus, not just mouse interaction?
31. How can your local working tree be clean while your remote repository is behind?
32. What should a useful project README explain to a new learner?

### Debugging challenges

**A. Missing submission value**

```html
<label for="employee">Employee ID</label>
<input id="employee" value="E-1001">
```

Explain why the field may be absent from normal form submission. Correct it.

**B. Radio payload**

```html
<input type="radio" name="contact" checked> Email
<input type="radio" name="contact"> Phone
```

Identify the accessibility and submitted-value problems. Rewrite the group appropriately.

**C. Untrusted browser validation**

A purchase request form uses `<input type="number" min="1" max="10">`. A client sends `quantity=1000` directly to the server. Explain why this is possible and what the backend must do.

**D. Git staging**

You stage `index.html`, then edit it again. Which version will be included in the next commit? Which commands show the differences? Explain how to include the later edit.

## Final practical assignment — Semantic portfolio

Build or refine an HTML-only portfolio with Home, About, Projects, and Contact pages.

**Acceptance checklist**

- [ ] Each page has a doctype, language, charset, viewport, and unique title.
- [ ] Semantic landmarks and headings describe the content.
- [ ] Navigation links work across all pages.
- [ ] Images have accurate alternative text or empty alt text when decorative.
- [ ] The contact form has labels, suitable types, and grouped controls where needed.
- [ ] A data table (if used) has headers and a caption.
- [ ] The site can be navigated by keyboard.
- [ ] HTML validation has been run; warnings are understood and reviewed.
- [ ] Changes are committed with a meaningful Git message.
- [ ] A README explains the purpose, file structure, and how to run the static pages.

**Reflection:** Write 150–250 words on three bugs or misconceptions you encountered, how you diagnosed them, and what you would check differently next time.

## Day 7 — Rest

No mandatory exercises. Optionally revisit difficult questions without looking at the notes first.
