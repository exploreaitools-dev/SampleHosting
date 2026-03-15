---
name: chivam-website-enhancement
description: Enhances and extends the CHIVAM SERVICES IT consulting website. Use this skill whenever the user wants to modify, improve, or add to their website — including adding new sections or pages, updating copy or services, writing blog posts, improving SEO, fixing accessibility, wiring up forms, or making any other change to the site's HTML, CSS, JS, or content. Always trigger this skill before touching any website file.
---

# CHIVAM SERVICES — Website Enhancement Skill

> **Trigger this skill** when asked to: add a section, create a new page, update content, write a blog post, improve SEO, fix accessibility, add features, or make any enhancement to the CHIVAM SERVICES website.

---

## STEP 1 — Read the Context First

**Before writing any code or making any changes**, read the context file using the `view` tool:

```
nexatech-consulting/CONTEXT.md
```

If the project was uploaded as a zip, it will be at:
```
/mnt/user-data/uploads/nexatech-consulting/CONTEXT.md
```

This file is the single source of truth for the entire project. It contains:
- Full brand identity, tone of voice, and key stats
- Complete file/folder structure and architecture conventions
- Design system (exact CSS variables, font names, class naming patterns)
- All existing page sections and JS rendering patterns
- Known gaps and improvement opportunities

**Do not proceed to any other step until CONTEXT.md has been read.**

### Keeping CONTEXT.md in sync
After completing any task, update the relevant section of `CONTEXT.md`:
- New service added → update the Services list
- New page created → update the Site Architecture section
- Gap resolved → remove it from the Known Gaps table
- Design token changed → update the Design System section

Always ask the user: *"Shall I update CONTEXT.md to reflect this change?"*

---

## STEP 2 — Understand the Architecture Rules

Before writing a single line of code, internalise these non-negotiable rules:

### Rule A: Content goes in `data.js` only
- **Never** hardcode display text in HTML or page JS files
- Add new content as a new key under the `SITE` object in `data.js`
- Reference it from the page renderer JS

### Rule B: Styles go in `styles.css` only
- **Never** add `<style>` blocks to HTML files
- **Always** use CSS custom properties (variables) from `:root` — never hardcode hex values
- Follow the existing class naming pattern (BEM-ish compounds: `.block-element`)

### Rule C: Page JS files are renderers only
- Each page JS file reads from `SITE` and injects HTML into the DOM via `getElementById`
- Use the IIFE pattern: `(function(){ 'use strict'; ... })()`
- Use ES5 syntax (no arrow functions, no `const`/`let`, no template literals) to match the existing codebase

### Rule D: Script load order
```html
<script src="js/data.js"></script>
<script src="js/shell.js"></script>
<script src="js/[page].js"></script>
```

### Rule E: New pages must include the full shell
Every new `.html` file must include:
- Ticker bar `<div class="ticker-bar" id="tickerBar">...</div>`
- Nav with all links and logo
- Mobile menu `<div class="mmenu" id="mmenu">...</div>`
- Footer with all columns
- All three scripts in order

---

## STEP 3 — Design System Cheat Sheet

Use **only** these values. Do not invent new ones.

```css
/* Colors */
var(--gold)    /* #D4AF37  — primary accent, CTAs */
var(--gold-h)  /* #B8860B  — gold hover */
var(--black)   /* #0A0A0A  — dark backgrounds */
var(--dark)    /* #1A1A1A  — footer, dark sections */
var(--navy)    /* #1B1F2A  — dark card bg */
var(--cream)   /* #FAF9F6  — page background */
var(--lgray)   /* #F5F7FA  — alternate section bg */
var(--border)  /* #E5E1D8  — borders */
var(--body)    /* #555555  — body text */
var(--muted)   /* #888888  — secondary text */
var(--white)   /* #ffffff  — white text */

/* Fonts */
var(--fd)  /* Playfair Display serif — headings */
var(--fb)  /* Inter sans-serif — body */
```

### Button Classes
```html
<a href="contact.html" class="btn btn-gold">Primary CTA →</a>
<a href="services.html" class="btn btn-outline">Secondary CTA</a>
```

### Eyebrow + Heading Pattern
```html
<p class="eyebrow">Section Label</p>
<h2>Section <em>Heading</em></h2>
<p class="section-sub">Supporting description text.</p>
```

### Scroll Reveal
Add `class="reveal"` to any card or element to get the scroll-triggered fade-in (handled by `shell.js`).

---

## STEP 4 — Common Enhancement Recipes

### A. Add a new section to an existing page

**1. Add data to `data.js`:**
```js
// Inside the SITE object, add:
newSection: {
  eyebrow: 'Section Label',
  heading: 'Section Heading',
  items: [
    { icon: '🔧', title: 'Item Title', body: 'Item description.' },
  ],
},
```

**2. Add placeholder in the HTML file:**
```html
<section class="my-section">
  <div class="container">
    <p class="eyebrow" id="newSectionEyebrow"></p>
    <h2 id="newSectionHeading"></h2>
    <div class="my-grid" id="newSectionItems"></div>
  </div>
</section>
```

**3. Add renderer in the page JS file:**
```js
function renderNewSection() {
  var s = SITE.newSection;
  set('newSectionEyebrow', s.eyebrow);
  set('newSectionHeading', s.heading);
  var html = s.items.map(function(item) {
    return '<div class="my-card reveal">'
      + '<div class="my-ico">' + item.icon + '</div>'
      + '<h4>' + item.title + '</h4>'
      + '<p>' + item.body + '</p>'
      + '</div>';
  }).join('');
  set('newSectionItems', html);
}
// Call in DOMContentLoaded
```

**4. Add CSS to `styles.css`:**
```css
/* ── NEW SECTION ── */
.my-section { padding: 80px 0; background: var(--lgray); }
.my-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 40px; }
.my-card { background: var(--white); border: 1px solid var(--border); border-radius: 12px; padding: 32px 28px; transition: box-shadow .25s; }
.my-card:hover { box-shadow: 0 8px 32px rgba(212,175,55,0.12); }
.my-ico { font-size: 32px; margin-bottom: 12px; }
```

---

### B. Add a new blog post

**In `data.js`, add to `SITE.blog.posts`:**
```js
{
  tag: 'Category Name',
  bg: 'background:linear-gradient(135deg,#1a1a2e,#16213e)',
  date: 'Mar 15, 2026',
  read: '5 min read',
  title: 'Your Blog Post Title Here',
  excerpt: 'A 1–2 sentence summary that draws readers in and previews the main insight.',
},
```
- `bg` can be `''` (uses default gold gradient) or a custom CSS background string
- Keep `tag` consistent with existing categories: `Cybersecurity`, `Cloud`, `IT Strategy`, `Digital Transformation`, `Managed IT`
- Write `excerpt` in the brand voice: practical, jargon-free, outcome-focused

---

### C. Add a new service

**In `data.js`, add to `SITE.services.items`:**
```js
{ icon: '🔧', title: 'New Service Name', body: 'One to two sentences describing what the service delivers and the business outcome.' },
```

Also add to:
- `SITE.hero.card.services` array (for the hero card list)
- `SITE.contact.serviceOptions` array (for the contact form dropdown)
- `SITE.footer.cols[0].links` array

---

### D. Create a new page

1. Copy `about.html` as a starting template (it's the simplest full-shell page)
2. Update `<title>`, `<meta name="description">`, and the `id="navXxx"` on the correct nav link
3. Replace the `<main>` content with new sections
4. Create `js/newpage.js` with the IIFE renderer pattern
5. Add new data keys to `data.js` under `SITE`
6. Add the page to `SITE.nav` in `data.js`
7. Update all 5 HTML files' nav `<ul>` to include the new link

---

### E. Improve SEO on any page

Add these tags inside `<head>` of each page, replacing placeholder values:
```html
<!-- Primary Meta -->
<meta name="description" content="[150–160 char description with primary keyword]" />
<link rel="canonical" href="https://nexatechconsulting.com/[page].html" />

<!-- Open Graph -->
<meta property="og:type"        content="website" />
<meta property="og:url"         content="https://nexatechconsulting.com/[page].html" />
<meta property="og:title"       content="[Page Title] | CHIVAM SERVICES" />
<meta property="og:description" content="[Same as meta description]" />
<meta property="og:image"       content="https://nexatechconsulting.com/images/[social-preview].png" />

<!-- Twitter Card -->
<meta name="twitter:card"        content="summary_large_image" />
<meta name="twitter:title"       content="[Page Title] | CHIVAM SERVICES" />
<meta name="twitter:description" content="[Same as meta description]" />
<meta name="twitter:image"       content="https://nexatechconsulting.com/images/[social-preview].png" />

<!-- JSON-LD Structured Data (homepage only) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "CHIVAM SERVICES",
  "url": "https://nexatechconsulting.com",
  "telephone": "+1-555-123-4567",
  "email": "hello@nexatechconsulting.com",
  "description": "Expert IT consulting for growing businesses — strategy, managed services, cybersecurity, and digital transformation.",
  "areaServed": ["India", "USA", "UK", "Australia", "Canada", "UAE"]
}
</script>
```

---

### F. Wire up the contact form

Add a `<form>` action pointing to a backend handler or a form service (e.g. Formspree, Netlify Forms):
```html
<!-- Formspree example -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Or add JS fetch in `contact.js`:
```js
form.addEventListener('submit', function(e) {
  e.preventDefault();
  var data = new FormData(form);
  fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: data })
    .then(function(res) { /* show success message */ })
    .catch(function() { /* show error message */ });
});
```

### G. Add a page hero to a new inner page

All inner pages (About, Services, Blog, Contact) use a `.page-hero` dark banner with animated entrance. Hardcode it directly in the HTML — it is **not** driven by `data.js`:

```html
<div class="page-hero">
  <div class="page-hero-bg"></div>
  <div class="page-hero-grid"></div>
  <div class="page-hero-inner">
    <div class="page-eyebrow">Section Label</div>
    <h1>Page <em>Heading</em></h1>
    <p>Short supporting sentence.</p>
    <nav class="breadcrumb"><a href="index.html">Home</a><span>›</span><span>Current Page</span></nav>
  </div>
</div>
```

- `<em>` inside `<h1>` renders in gold italic (matches `.page-hero-inner h1 em`)
- Breadcrumb last `<span>` renders gold automatically via CSS
- Use `.page-hero-sm` modifier for a shorter banner height

---

### H. Use the full 3-col services grid

On `services.html` the grid uses `svc-grid-full` instead of `svc-grid` to enforce a 3-col layout (responsive: 2-col at tablet, 1-col at mobile):

```html
<div class="svc-grid svc-grid-full" id="svcGrid"></div>
```

Use `svc-grid` (auto-fit) on the homepage preview, and `svc-grid svc-grid-full` on the dedicated services page.

---

Before delivering any change, verify:

- [ ] All new display text is in `data.js`, not hardcoded in HTML/JS
- [ ] All new colours use CSS variables, not hex values
- [ ] All new JS uses ES5 syntax (no `const`/`let`, no arrow functions, no backtick strings)
- [ ] New page includes full nav, ticker, mobile menu, and footer HTML
- [ ] Script load order is correct: `data.js` → `shell.js` → `[page].js`
- [ ] New cards/elements use `class="reveal"` for scroll animation
- [ ] Gold accent (`var(--gold)`) is used for highlights, not other brand colours
- [ ] CTA buttons use `btn-gold` (primary) or `btn-outline` (secondary)
- [ ] Headings use `font-family: var(--fd)` (Playfair) — set via CSS class, not inline
- [ ] Any new section includes an `.eyebrow` label above the heading

---

## STEP 6 — Brand Voice Rules for Copy

When writing any text for this website:

| Do                                          | Don't                                      |
|---------------------------------------------|--------------------------------------------|
| Lead with the business outcome              | Lead with the technology feature           |
| Use plain language ("no surprise costs")    | Use jargon ("synergistic value creation")  |
| Be specific with numbers ("35% cost drop")  | Be vague ("significant savings")           |
| Mention real geographies (India, USA, UK)   | Say "worldwide" without specifics          |
| Use "we / our team" — personal and direct   | Use "the company" — distant and corporate  |
| Keep CTAs action-oriented ("Book a Call →") | Use passive CTAs ("Learn More")            |
| Match the 15+ years / 200+ clients stats    | Contradict existing marketing claims       |
