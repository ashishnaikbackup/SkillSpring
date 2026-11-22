# Review packet: HTML & CSS: Build Responsive Websites

- Course key: `web`  ·  Lessons: 9  ·  Review interval: 90 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `course-engine.js`
- Official sources to check against:
  - https://developer.mozilla.org/en-US/docs/Learn_web_development
  - https://www.w3.org/WAI/standards-guidelines/wcag/

## Reviewer checklist (tick after reading all lessons)

- [ ] Facts, definitions and terminology are correct
- [ ] Tool names, versions, menus and commands match current official documentation
- [ ] Every code example runs and produces the stated output
- [ ] Each knowledge-check answer is correct and the wrong options are clearly wrong
- [ ] Tasks are achievable by a beginner and prerequisites are taught first
- [ ] No unsafe, legal, tax or medical advice presented as professional advice
- [ ] India-specific statements (laws, exams, tools, salaries) are accurate or removed
- [ ] Nothing important for a job-ready beginner is missing (list gaps below)
- [ ] The capstone brief is realistic, clear and fairly assessable with the rubric

Reviewer name: ________   Date: ________   Outcome: approve / approve with fixes / rewrite

## Course introduction

Learn the structure and presentation of the web, from semantic HTML to responsive, accessible layouts.

## Lessons

### 1. How the web page is structured

**Concept.** HTML describes document structure and meaning. A page has a doctype, html, head and body. The browser parses HTML into a document tree called the DOM.

**Example**

```
<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>My page</title></head>
<body><h1>Hello, World!</h1><p>My first page.</p></body>
</html>
```

**Explanation / note.** The head contains metadata and linked resources; the body contains visible content. The lang attribute helps assistive technologies identify the page language.

**Task.** Create a personal introduction page with a title, heading, paragraphs and a meaningful language attribute.

**Quiz.** Which element contains visible page content?
- Correct: body
- Wrong: head
- Wrong: meta

**Findings:** _none yet_

### 2. Semantic HTML, links & images

**Concept.** Use elements according to their meaning: header, nav, main, section, article, aside and footer. Links navigate; buttons perform actions. Images need useful alternative text when informative.

**Example**

```
<main>
  <h1>My projects</h1>
  <article><h2>Portfolio</h2><p>My work.</p></article>
  <a href="projects.html">View projects</a>
</main>
```

**Explanation / note.** Semantic elements communicate page structure. Use descriptive link text and alt text; decorative images can use empty alt text.

**Task.** Build a portfolio page with navigation, project cards and meaningful headings. Check heading order.

**Quiz.** Which element should wrap the page's primary unique content?
- Correct: main
- Wrong: span
- Wrong: b

**Findings:** _none yet_

### 3. Forms & accessible controls

**Concept.** Forms collect input. Use label elements connected to controls, appropriate input types, required constraints and clear error messages. Native controls improve keyboard and assistive-technology support.

**Example**

```
<form>
 <label for="email">Email</label>
 <input id="email" name="email" type="email" required>
 <button type="submit">Join</button>
</form>
```

**Explanation / note.** A label gives a control an accessible name. Browser validation is helpful but server-side validation is still required for real applications.

**Task.** Create a contact form with name, email, topic and message. Ensure every field has a label and visible focus.

**Quiz.** How do you associate a label with an input?
- Correct: Use matching for and id values
- Wrong: Put the label after the page
- Wrong: Use placeholder only

**Findings:** _none yet_

### 4. CSS selectors, cascade & box model

**Concept.** CSS rules match elements using selectors. The cascade resolves competing declarations. The box model includes content, padding, border and margin. box-sizing:border-box makes sizing more predictable.

**Example**

```
* { box-sizing: border-box; }
.card { padding: 1rem; border: 1px solid #ccc; margin: 1rem 0; }
.card h2 { color: rebeccapurple; }
```

**Explanation / note.** A class selector starts with a dot. Descendant selectors target matching elements inside another element. Specificity and source order affect the cascade.

**Task.** Style your portfolio with reusable classes, spacing, typography, borders and a consistent colour system.

**Quiz.** What are the four main box-model areas?
- Correct: Content, padding, border and margin
- Wrong: Header, body, footer, nav
- Wrong: Width, height, colour, font

**Findings:** _none yet_

### 5. Flexbox, Grid & responsive layout

**Concept.** Flexbox arranges items along one main axis. CSS Grid handles rows and columns. Media queries adapt layouts to viewport size. Start with a flexible layout and add breakpoints where content needs them.

**Example**

```
.cards { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
img { max-width:100%; height:auto; }
```

**Explanation / note.** auto-fit and minmax create a responsive grid without hardcoding every screen size. Test narrow screens and zoom.

**Task.** Build a responsive project gallery with Grid, a flexible header and readable mobile spacing.

**Quiz.** Which layout system is especially useful for two-dimensional rows and columns?
- Correct: CSS Grid
- Wrong: Only inline styles
- Wrong: HTML tables for all layouts

**Findings:** _none yet_

### 6. Responsive images, performance & search basics

**Concept.** Images are often the heaviest part of a page. Give every image alt text that describes its purpose, set width and height so the layout does not jump while loading, and use loading="lazy" for images below the first screen. The srcset and sizes attributes let the browser choose a suitable file size for the device. Keep a unique, descriptive title and a meta description for each page, use one h1, and write meaningful link text, which helps both search engines and screen reader users. Measure with browser tools such as Lighthouse rather than guessing.

**Example**

```
<img
  src="photo-800.jpg"
  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1600.jpg 1600w"
  sizes="(max-width: 600px) 100vw, 600px"
  width="800" height="533"
  alt="Students working together at a laptop"
  loading="lazy">
```

**Explanation / note.** The browser picks the smallest suitable file for the screen width. The width and height values reserve space to reduce layout shift, and lazy loading delays the download until the image is near the viewport.

**Task.** Optimise a fictional portfolio page: add useful alt text, srcset and sizes to two images, a page title and meta description, and one h1. Run Lighthouse before and after and note what changed.

**Quiz.** Why set width and height on an image element?
- Correct: So the browser can reserve space and avoid layout shift while it loads
- Wrong: To make the image file smaller on disk
- Wrong: To replace the need for alt text

**Findings:** _none yet_

### 7. Maintainable CSS: variables, themes & DevTools

**Concept.** CSS custom properties, written with two dashes, store values such as colours and spacing once so a change happens in one place. They make themes simple: change the variables inside a media query for prefers-color-scheme or for a class. Respect user settings: prefers-reduced-motion asks you to reduce animation, and text should still be readable when zoomed. Name classes by purpose, keep selectors short and avoid fighting specificity. When a style does not apply, open DevTools, inspect the element, read the Styles pane and see which rule wins and which is crossed out.

**Example**

```
:root {
  --bg: #ffffff;
  --text: #1b2430;
  --accent: #0b5cad;
  --space: 1rem;
}

@media (prefers-color-scheme: dark) {
  :root { --bg: #10161f; --text: #e8eef6; --accent: #7db7ff; }
}

body { background: var(--bg); color: var(--text); padding: var(--space); }
a { color: var(--accent); }

.card { transition: transform 200ms ease; }
.card:hover { transform: translateY(-2px); }

@media (prefers-reduced-motion: reduce) {
  .card { transition: none; }
}
```

**Explanation / note.** The variables define a light and a dark theme from one set of rules, and the hover movement is switched off for users who ask for reduced motion.

**Task.** Add light and dark themes to a small page using variables. Check text contrast in both themes with a browser tool, add a reduced-motion rule, and use DevTools to find which rule controls one element's colour.

**Quiz.** What does prefers-reduced-motion allow a page to do?
- Correct: Reduce or remove animation for users who ask for less motion
- Wrong: Force all users to see animations
- Wrong: Make the page load faster automatically

**Findings:** _none yet_

### 8. Layout patterns: navigation, cards & responsive components

**Concept.** Most pages reuse a few patterns. A navigation bar is a list of links, often laid out with flexbox and collapsing on small screens. A card grid can adapt without many media queries: CSS Grid with auto-fit and minmax creates as many columns as fit. Build each component once with clear class names, test it at narrow and wide widths and with the keyboard, and make sure links and buttons are large enough to tap. Prefer relative units such as rem so text respects the user's size setting, and avoid fixed heights that clip content.

**Example**

```
<nav aria-label="Main">
  <ul class="nav">
    <li><a href="/">Home</a></li>
    <li><a href="/courses">Courses</a></li>
  </ul>
</nav>

<style>
  .nav { display: flex; gap: 1rem; list-style: none; padding: 0; flex-wrap: wrap; }
  .cards { display: grid; gap: 1rem;
           grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr)); }
  .card { padding: 1rem; border: 1px solid #ccc; border-radius: 0.5rem; }
</style>
```

**Explanation / note.** The grid creates as many 16rem-or-wider columns as fit the screen, so cards reflow from one column on a phone to several on a desktop without extra rules.

**Task.** Build a navigation bar and a grid of six cards. Test at 320, 768 and 1280 pixels wide, with 200 percent zoom and with the keyboard only. Fix anything that overflows or cannot be reached.

**Quiz.** What does repeat(auto-fit, minmax(16rem, 1fr)) do in a grid?
- Correct: Creates as many flexible columns as fit the available width
- Wrong: Forces exactly sixteen columns
- Wrong: Makes every card exactly 16rem tall

**Findings:** _none yet_

### 9. Accessibility, polish & publish

**Concept.** Accessibility includes keyboard use, contrast, visible focus, semantic structure, labels and reduced-motion considerations. Test with keyboard navigation and browser tools. Optimise images and keep CSS organised.

**Example**

```
:focus-visible { outline:3px solid #7c6cff; outline-offset:3px; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior:auto !important; animation-duration:0.01ms !important; }
}
```

**Explanation / note.** Accessible design benefits many users. A page should remain usable without a mouse and at increased text zoom.

**Task.** Capstone: publish a responsive multi-page portfolio with accessible navigation, contact form UI, project cards and a clear README. Test keyboard-only use.

**Quiz.** Why provide a visible focus style?
- Correct: So keyboard users can see which control is active
- Wrong: To decorate headings only
- Wrong: To replace labels

**Findings:** _none yet_

## Capstone project brief

**.** 

Build:

Evidence to submit:

Stretch goal: 

**Brief findings (is it realistic, clear and fairly assessable?):** _none yet_
