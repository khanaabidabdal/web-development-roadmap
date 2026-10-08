# Week 1 — HTML5 and Git/GitHub: Complete Study Notes

> **16-Week Full-Stack Development Roadmap · Week 1**  
> Days 1–6 lessons and Day 7 revision. HTML forms in these exercises require a backend to process submissions.

## Contents

- [Day 1: Web Foundations And Basic Html](#day-1-web-foundations-and-basic-html)
- [Day 2: Semantic Html, Forms And Accessibility](#day-2-semantic-html-forms-and-accessibility)
- [Day 3: Advanced Html And First Git/Github Workflow](#day-3-advanced-html-and-first-gitgithub-workflow)
- [Day 4: Professional Forms And Git Branching](#day-4-professional-forms-and-git-branching)
- [Day 5: Four-Page Portfolio And Git Diffs](#day-5-four-page-portfolio-and-git-diffs)
- [Day 6: Validation, Accessibility, Debugging And Review](#day-6-validation-accessibility-debugging-and-review)
- [Day 7: Rest + Revision Plan (Optional, 30–45 Minutes)](#day-7-rest--revision-plan-optional-3045-minutes)
- [Self-check quiz](#self-check-quiz)


## Purpose

These notes summarize the Week 1 curriculum (Days 1–6) and provide a Day 7 revision guide. They are designed to be understandable without access to the original lessons. HTML examples are illustrative; real contact/registration forms need a backend before they can save or send data.

## Learning outcomes

- Explain how browsers, DNS, HTTP(S), servers, HTML and the DOM fit together.
- Write valid, semantic, accessible multipage HTML documents.
- Build links, images, lists, data tables and forms with meaningful labels.
- Understand browser validation versus mandatory server-side validation.
- Inspect pages and diagnose broken links, images and invalid markup.
- Use Git staging, commits, branches, merges, remotes, diffs and restoration safely.
- Build and review a four-page HTML portfolio.


## Day 1: Web Foundations And Basic Html



### 1. HOW THE WEB WORKS

Typical flow:
  User enters URL -> browser resolves domain through DNS -> browser connects
  to server -> sends HTTP(S) request -> web server (e.g., Apache/Nginx)
  handles static content or routes to an application (e.g., PHP/Laravel)
  -> HTTP response -> browser parses HTML -> DOM -> render.
The web server does not normally create the browser's DOM. The browser's
HTML parser does. JavaScript can later change the DOM.
DNS maps domain names to addresses. HTTPS encrypts data in transit;
HTTPS does not make unvalidated input safe.


### 2. HTML, CSS, JAVASCRIPT

HTML = structure and meaning; CSS = presentation; JavaScript = behavior.
HTML is a markup language, not a general-purpose programming language.
Separation of concerns: choose HTML tags for meaning, not appearance.


### 3. DOCUMENT BOILERPLATE


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A developer's portfolio and projects.">
  <title>Portfolio | Developer</title>
</head>
<body>
  <h1>Hello, world!</h1>
</body>
</html>
```

- DOCTYPE requests standards-mode parsing rather than quirks mode.
- html is the root; lang declares document language for assistive tools.
- head contains metadata, not visible main content.
- body contains document content.
- UTF-8 supports international characters.
- viewport supports appropriate mobile layout sizing.
- title appears in browser tabs and can inform search results.
- meta description describes the page; it is not a ranking guarantee.
- For Arabic text sections: <span lang="ar" dir="rtl">...</span>.


### 4. TAGS, ELEMENTS AND ATTRIBUTES


```html
<p class="intro">Welcome</p> has opening tag, content, closing tag.
```

Attributes supply extra information, e.g. href, src, alt, id, name.
Void elements such as img, input, meta, br have no closing tags.
HTML comments: <!-- Explain why this is needed -->.


### 5. HEADINGS AND TEXT


```html
<h1>Page title</h1> ... <h2>Section</h2> ... <h3>Subsection</h3>
```

Choose headings for hierarchy, not visual font size. Prefer a clear h1.

```html
<p>Paragraph</p>, <strong>important meaning</strong>, <em>emphasis</em>.
<b> and <i> do not inherently communicate the same emphasis semantics.
```

Do not use repeated <br> tags for visual spacing; use CSS later.


### 6. LINKS AND PATHS


```html
<a href="about.html">About</a>             same directory
<a href="../day-03/employees.html">Employees</a> parent directory
<a href="https://example.org">External website</a> absolute URL
<a href="mailto:hello@example.org">Email</a>
<a href="tel:+123456789">Call</a>
```

When opening an untrusted site in a new tab, use target="_blank"
with rel="noopener noreferrer" when appropriate.
Avoid Windows-specific paths such as C:\\Users\\... in web links.
Use descriptive link text; avoid vague "click here".


### 7. IMAGES


```html
<img src="images/profile.jpg" alt="Portrait of the portfolio owner" width="320" height="320">
```

alt describes informative image purpose; decorative images can use alt="".
Explicit width/height can help reserve space and reduce layout shifts.


### 8. LISTS, TABLES, GENERIC ELEMENTS


```html
<ul><li>HTML</li><li>Git</li></ul> unordered list.
<ol><li>Learn</li><li>Practice</li></ol> ordered sequence.
```

Use tables for tabular data, never as page-layout tools.

```html
<div> generic block container; <span> generic inline container.
```

Prefer semantic elements when a meaningful one fits.


### 9. DEVELOPER TOOLS AND DOM

Chrome/Edge DevTools: Elements (DOM), Console (messages), Network
(requests/statuses). Ctrl+U shows HTML source; Elements shows parsed DOM.
Editing Elements changes the live page, not your original file.
A page rendering correctly does NOT prove valid, accessible or secure HTML.


## Day 2: Semantic Html, Forms And Accessibility



### 10. SEMANTIC STRUCTURE


```html
<header> introductory/header content for page or section
<nav> major navigation
<main> primary page content (normally one visible main)
<section> thematic group, typically with a heading
<article> self-contained content, e.g. project or blog post
<aside> supplementary/tangential content
<footer> footer for page or section
<figure> self-contained illustration/media
<figcaption> figure caption
Not every section needs an article; not every div needs replacing.
A page can have several headers/footers in appropriate contexts.

Example:
<body>
  <header><nav aria-label="Main navigation"><a href="index.html">Home</a></nav></header>
  <main>
    <section aria-labelledby="projects-heading">
      <h1 id="projects-heading">Projects</h1>
      <article><h2>Employee Table</h2><p>A semantic HTML table.</p></article>
    </section>
  </main>
  <footer><p>&copy; 2026 Portfolio</p></footer>
</body>

11. FORM FUNDAMENTALS
<form action="/contact" method="post"> ... </form>
- action: destination URL; method: HTTP method for submission.
- GET normally places successful form values in the query string; useful
  for searches/filters. POST sends form data in request body; useful for
  submissions. POST is NOT a substitute for HTTPS or validation.
- name: key in submitted form data; value: associated submitted value.
- id: unique document identifier, useful for labels, CSS and JS.
- label for must match the intended control's id exactly.
- placeholder is a hint, NOT a substitute for a label.
- button type="submit" submits; type="button" does not by default.
- An action="" form posts to the current URL; without a backend it won't
  magically store data and may fail with an unsupported-method response.

Example:
<label for="employee-id">Employee ID</label>
<input id="employee-id" name="employee_id" value="EMP-1001" required>
Submitted key/value: employee_id=EMP-1001.
If name is missing, the control is normally omitted from submitted form data
(even if its label and id work).

12. COMMON FORM CONTROLS
text, email, password, number, tel, url, date, time, search, file,
checkbox, radio, hidden; textarea; select/option; button.
Use type="tel" (NOT type="phone").
For a select requiring deliberate choice:
<label for="department">Department</label>
<select id="department" name="department" required>
  <option value="" selected disabled>Choose a department</option>
  <option value="it">IT</option>
  <option value="hr">HR</option>
</select>
```



### 13. RADIO BUTTONS VS CHECKBOXES

Radios: one choice per group; same name, unique IDs, distinct values.

```html
<fieldset>
  <legend>Preferred contact method</legend>
  <input type="radio" id="contact-email" name="contact_method" value="email" required>
  <label for="contact-email">Email</label>
  <input type="radio" id="contact-phone" name="contact_method" value="phone">
  <label for="contact-phone">Phone</label>
</fieldset>
```

Without a value, a checked radio normally submits the value "on".
Checkboxes allow multiple selections. In PHP/Laravel, skills[] can be used
for an array of selected values:

```html
<input type="checkbox" name="skills[]" value="html"> HTML
<input type="checkbox" name="skills[]" value="php"> PHP
```



### 14. VALIDATION ATTRIBUTES

required, minlength, maxlength, min, max, step, pattern, accept,
multiple, checked, selected, disabled, readonly, autocomplete.
- required: cannot leave a validatable control empty when submitting.
- minlength/maxlength: length constraints for applicable text controls.
- min/max/step: applicable numeric/date constraints.
- pattern: regular-expression pattern for applicable inputs.
- accept: file-picker hint, NOT server-side file-type security.
- disabled controls are not submitted; readonly controls generally are.
- hidden input values can be changed; NEVER trust them for permissions.
- autocomplete="name", "email", "tel" help browsers fill known data.
- Use <fieldset><legend> to label related radio/checkbox controls.
- aria-describedby can connect a field to helpful instructions:
  <input id="password" name="password" type="password" minlength="8"
         aria-describedby="password-hint" required>
  <p id="password-hint">Use at least eight characters.</p>


### 15. ACCESSIBILITY BASICS

- Use correct native semantic elements before adding ARIA.
- Labels should be associated with controls; clicking label should focus
  its text field or activate its choice control.
- Tab/Shift+Tab must reach interactive controls in logical order.
- Radio groups typically support arrow-key selection.
- A link navigates; a button performs an action.
- Do not remove visible keyboard focus styling when CSS is added.
- Meaningful alt text; correct document language; logical headings.
- Avoid positive tabindex for manual reordering; prefer logical DOM order.
- aria-label can distinguish multiple navigation landmarks.
- Don't rely on color alone to convey essential information.


### 16. BASIC SEO

Meaningful <title>, concise meta description, headings, semantic content,
image alt where relevant; Open Graph metadata can improve link previews.
SEO is not simply adding keywords; readable, useful content matters.


## Day 3: Advanced Html And First Git/Github Workflow



### 17. SEMANTIC DATA TABLES


```html
<table>
  <caption>Employees</caption>
  <thead><tr><th scope="col">ID</th><th scope="col">Name</th></tr></thead>
  <tbody>
    <tr><th scope="row">101</th><td>Amina</td></tr>
    <tr><th scope="row">102</th><td>Yusuf</td></tr>
  </tbody>
</table>
```

caption describes table; thead/tbody group rows; scope clarifies header
association. colspan/rowspan span columns/rows where data requires it.


### 18. MEDIA, FIGURES, EMBEDS


```html
<figure><img src="images/chart.png" alt="Monthly employee counts"><figcaption>Monthly employee totals</figcaption></figure>
<audio controls><source src="audio.mp3" type="audio/mpeg">Audio unavailable.</audio>
<video controls><source src="video.mp4" type="video/mp4">Video unavailable.</video>
<track> can provide captions/subtitles (e.g. WebVTT).
<iframe src="https://example.org" title="Embedded example"></iframe>
```

Embed only trusted content; understand privacy/security implications.
Autoplay is often restricted; avoid surprising audio/video playback.


### 19. OTHER USEFUL HTML FEATURES

Entities: &copy; (copyright), &lt; (<), &gt; (>), &amp; (&).
&nbsp; is non-breaking space; not a general-purpose layout tool.
data-* attributes store application-specific metadata in markup.

```html
<time datetime="2026-10">October 2026</time> provides machine-readable time.
<dl><dt>Technology</dt><dd>HTML</dd></dl> expresses term/description pairs.
```



### 20. GIT VS GITHUB

Git: local distributed version control, commits and history.
GitHub: hosting/collaboration service for Git repositories.
Working directory -> git add -> staging area/index -> git commit ->
local repository -> git push -> remote (e.g. GitHub).
Saving a file is not staging it; committing is not pushing it.


### 21. START A REPOSITORY

At repository root:

```bash
git init
git status
git add week-01-html/
git commit -m "feat: add HTML exercises"
git log --oneline
```

Set identity once if needed:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

To connect an existing local repo to an empty GitHub repo:

```bash
git remote add origin <your-repository-url>
git branch -M main
git push -u origin main
```

Do not copy example URLs literally. Never commit passwords, API keys or .env.


### 22. GOOD COMMIT HABITS

Commits should represent coherent, reviewable changes.
Conventional-style examples: feat:, fix:, docs:, refactor:, test:, chore:.
Use README.md to describe goals, structure, usage and progress.
.gitignore excludes generated files, secrets and local-only files.


## Day 4: Professional Forms And Git Branching



### 23. FILE UPLOADS


```html
<form action="/employees" method="post" enctype="multipart/form-data">
  <label for="photo">Photo</label>
  <input id="photo" name="photo" type="file" accept="image/jpeg,image/png">
  <button type="submit">Register</button>
</form>
```

Use enctype="multipart/form-data" for forms uploading files.
"multimedia/form-data" is incorrect. image/jpeg is the usual JPEG MIME type,
not image/jpg. The server must verify type, size and safe storage.


### 24. BRANCHES

A branch is a movable reference to a commit, not a duplicated project.
HEAD identifies the current checkout (typically the current branch).

```bash
git switch -c feature/registration-form
git status
git add week-01-html/day-04/
git commit -m "feat: add employee registration form"
git switch main
git merge feature/registration-form
git branch -d feature/registration-form
git push origin main
```

A fast-forward merge advances main when there is no divergence.
A merge conflict requires deliberate resolution when changes cannot be
combined automatically. Delete a branch only when its work is safely merged.
A branch can contain many commits. Use feature branches for isolated work.


### 25. SECURITY MENTAL MODEL

Client -> frontend checks -> HTTP -> server validation -> authorization
-> business rules -> database.
Client validation improves UX, but attackers can bypass it. Backend validation
and authorization are essential. Bypassing client validation does not by
itself prove a system is compromised.


## Day 5: Four-Page Portfolio And Git Diffs



### 26. PROJECT STRUCTURE


```text
web-development-roadmap/
  README.md
  week-01-html/
    day-01/
    day-02/
    day-03/
    day-04/
    day-05/
      index.html
      about.html
      projects.html
      contact.html
      images/
    notes.md
```


Homepage: introduction, skills, featured projects, semantic header/nav/main/footer.
About: education, experience, technical focus, goals, <time> for dates.
Projects: independent <article> entries and <dl> metadata.
Contact: labels, email/phone, subject, message, contact preference radio group.
Every page should share consistent relative navigation.
HTML structure first; CSS comes in Week 2.


### 27. SEPARATION OF CONCERNS

HTML defines meaning and structure, CSS appearance, JS interaction.
Don't use <br> or tables as layout systems. Choose ul for unordered items,
ol for meaningful sequence, dl for term-description relationships.


### 28. GIT DIFF — THREE VERSIONS

HEAD = last committed snapshot (A).
Index/staging = selected next-commit snapshot (B).
Working tree = files currently on disk (C).

```bash
git diff             compares B -> C (unstaged tracked changes)
git diff --staged    compares A -> B (staged changes)
git diff HEAD        compares A -> C (all tracked changes vs HEAD)
```

If you stage a file and edit it again, both git diff and git diff --staged
can show different changes to that same file.

```bash
git show HEAD        inspects last commit and its patch
git log --stat -3    shows recent commits with file statistics
```



### 29. RESTORING SAFELY


```bash
git restore --staged path/to/file   unstage; preserve working edits
git restore path/to/file            discard unstaged edits, replacing
```

                                      working file from index
Without staged changes, git restore usually restores the last commit's
version. Always inspect git diff/status before discarding work.
Untracked files are not automatically removed by git restore.


## Day 6: Validation, Accessibility, Debugging And Review



### 30. HTML VALIDATION

Use https://validator.w3.org/nu/ to check document syntax and conformance.
A browser may repair malformed HTML and still display the page.
Valid markup != automatically accessible, secure or functional.
Typical mistakes from exercises:
- malformed viewport meta attribute
- missing <body> or closing >
- duplicate id values
- wrong input type="phone" (use tel)
- misspelled content attribute
- malformed <time> closing tags or datetime formats
- labels pointing to nonexistent/wrong IDs
- radio group values omitted (default submitted value "on")
- wrong enctype or accept MIME type


### 31. ACCESSIBILITY TESTING

- Use keyboard only: Tab, Shift+Tab, arrow keys in radio groups.
- Click labels to verify associated fields.
- Inspect accessible names/roles in browser DevTools Accessibility pane.
- Verify headings, links, alt text, logical focus order.
- Lighthouse accessibility audits are helpful but do not replace manual tests.


### 32. DEBUGGING WORKFLOW

Reproduce -> isolate -> inspect -> form hypothesis -> test fix -> recheck.
Broken image: verify relative path, filename/case, Network tab, HTTP 404.
Broken link: check href relative to current file, spelling, actual target.
Form: check id/for, name/value, required constraints, method/action;
without backend, successful persistence is not expected.
Browser file:// behavior differs from HTTP server behavior.


### 33. GIT STATUS AND CLEANUP


```bash
git status
git log --oneline --graph --decorate
git diff
git diff --staged
git diff HEAD
git show HEAD
```

"Your branch is up to date with origin/main" describes committed remote
tracking status, not whether your working tree is clean.
"nothing to commit, working tree clean" confirms no tracked edits or
untracked nonignored files pending locally.
Review changes before staging; review staged patch before committing.


## Day 7: Rest + Revision Plan (Optional, 30–45 Minutes)

- 10 min: Explain HTML source vs DOM, head vs body, semantic elements.
- 10 min: Rebuild a small form from memory (label/id/name/value, radio).
- 10 min: Explain HEAD/index/working tree and three git diff commands.
- 10 min: Inspect four-page portfolio and GitHub README.
Take a full rest day if needed. No CSS is required until Week 2.


## Self-check quiz


1. Why does HTML need a doctype?


2. What are head, body, title, charset and viewport for?


3. When should you use article vs section vs div?


4. Why should tables not be used for layout?


5. What is the difference between id, name and value?


6. Why must radio options share a name but have distinct values?


7. Why is a placeholder not a substitute for a label?


8. What does multipart/form-data do?


9. What is the difference between readonly and disabled?


10. Why must server validation run even if HTML validation passes?


11. Why can source HTML differ from the browser DOM?


12. How do relative links work across directories?


13. What do git add, commit and push each do?


14. What is a branch? What is a fast-forward merge?


15. Compare git diff, git diff --staged and git diff HEAD.


16. Compare git restore and git restore --staged.


17. Why is a clean working tree different from being up to date with origin?


18. What does the HTML validator check, and what can't it guarantee?


19. Why test keyboard navigation?


20. What should a README tell a new learner?



## Suggested repository README section

Copy this excerpt into the repository root `README.md`:

```markdown
## Week 1 — HTML5 + Git/GitHub
Built a semantic four-page HTML portfolio, employee table and registration
form. Practiced accessible labels, validation, relative navigation, Git
branches, commits, diffs and debugging.
- [Complete Week 1 notes](week-01-html/notes.md)
- [Portfolio home](week-01-html/day-05/index.html)
- [Portfolio projects](week-01-html/day-05/projects.html)
The portfolio is HTML-only; styling starts in Week 2. Forms require a
backend to process submissions.
```

## Next: Week 2

CSS3, selectors, cascade, specificity, box model, layout, Flexbox, Grid and responsive design.
