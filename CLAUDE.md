# CHIVAM SERVICES — Claude Code Project Instructions

> This file is auto-read by Claude Code at the start of every session.
> Full brand/architecture details → `CONTEXT.md` | Enhancement recipes → `SKILL.md`

---

## Project Identity

| Field        | Value                                |
|--------------|--------------------------------------|
| Company      | CHIVAM SERVICES                      |
| Domain       | nexatechconsulting.com               |
| Email        | hello@nexatechconsulting.com         |
| Stack        | Vanilla HTML / CSS / ES5 JS — no frameworks, no build tools |
| Pages        | index · about · services · blog · contact |

---

## Non-Negotiable Architecture Rules

1. **Content → `js/data.js` only.** Never hardcode display text in HTML or other JS files. Add to the `SITE` object, reference from the page renderer.
2. **Styles → `css/styles.css` only.** No `<style>` blocks in HTML. Always use CSS custom properties — never raw hex values.
3. **JS → ES5 IIFE only.** No `const`/`let`, no arrow functions `=>`, no backtick template literals. Match the existing codebase style.
4. **Script load order:** `data.js` → `shell.js` → `[page].js`
5. **New pages** must include the full shell: ticker bar, nav, mobile menu, footer.
6. **Scroll animation:** Add `class="reveal"` to cards/elements for the IntersectionObserver fade-in (handled by `shell.js`).

---

## Design System (tokens — use only these)

```css
/* Colors */
var(--gold)    /* #D4AF37 — primary accent, CTAs       */
var(--gold-h)  /* #B8860B — gold hover                 */
var(--black)   /* #0A0A0A — nav, ticker bg             */
var(--dark)    /* #1A1A1A — footer, dark sections      */
var(--navy)    /* #1B1F2A — dark card bg               */
var(--cream)   /* #FAF9F6 — page background            */
var(--lgray)   /* #F5F7FA — alternate section bg       */
var(--parch)   /* #F5F5F0 — parchment tones            */
var(--border)  /* #E5E1D8 — borders, dividers          */
var(--body)    /* #555555 — body text                  */
var(--muted)   /* #888888 — secondary text             */
var(--white)   /* #ffffff — white text on dark bg      */

/* Fonts */
var(--fd)  /* 'Playfair Display' serif — headings      */
var(--fb)  /* 'Inter' sans-serif — body               */
```

---

## File Map

```
nexatech-consulting/
├── index.html          ← Homepage (hero, about, services, why, process, testimonials, blog, CTA)
├── about.html          ← About page
├── services.html       ← Services page (9-card svc-grid-full)
├── blog.html           ← Blog + category filter
├── contact.html        ← Contact form + 12-item FAQ + offices (~14 KB, safe to read)
├── CLAUDE.md           ← This file
├── CONTEXT.md          ← Full project knowledge base
├── SKILL.md            ← Enhancement recipes
├── PRE-RELEASE.md      ← Go-live checklist
├── css/styles.css      ← ALL styles (single file)
├── js/
│   ├── data.js         ← ALL content (SITE object — single source of truth)
│   ├── shell.js        ← Ticker, nav scroll, mobile menu, scroll reveal, active nav
│   ├── main.js         ← Homepage renderer
│   ├── about.js        ← About renderer
│   ├── services.js     ← Services renderer
│   ├── blog.js         ← Blog renderer + filter
│   └── contact.js      ← Contact renderer + form validation
├── .claude/commands/   ← Slash commands (add-blog-post, add-service, improve-seo, new-page)
└── images/
    ├── LogoImage.png
    ├── Homepage1.png
    ├── AboutUs.png
    ├── ContactUs.png
    ├── 3DGoldenStar.png
    ├── contact-icon-1.svg  ← Lightbulb (contact info bullet 1)
    ├── contact-icon-2.svg  ← Target (contact info bullet 2)
    └── contact-icon-3.svg  ← Chat bubble (contact info bullet 3)
```

---

## JS Renderer Pattern (copy for new pages)

```js
(function () {
  'use strict';
  function set(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }
  // render functions that read from SITE object...
  document.addEventListener('DOMContentLoaded', function () {
    // call render functions
  });
})();
```

---

## HTML Patterns

**Eyebrow + Heading:**
```html
<div class="sec-eye">Label</div>
<h2 class="sec-title">Heading <em>Here</em></h2>
<p class="sec-sub">Supporting text.</p>
```

**Buttons:**
```html
<a href="contact.html" class="btn btn-gold">Primary CTA →</a>
<a href="services.html" class="btn btn-outline">Secondary CTA</a>
```

**Page Hero (inner pages):**
```html
<div class="page-hero">
  <div class="page-hero-bg"></div>
  <div class="page-hero-grid"></div>
  <div class="page-hero-inner">
    <div class="page-eyebrow">Label</div>
    <h1>Heading <em>Here</em></h1>
    <p>Supporting sentence.</p>
    <nav class="breadcrumb"><a href="index.html">Home</a><span>›</span><span>Current Page</span></nav>
  </div>
</div>
```

---

## Available Slash Commands

| Command                        | Does                                   |
|--------------------------------|----------------------------------------|
| `/project:add-blog-post`       | Adds a new blog post to `data.js`      |
| `/project:add-service`         | Adds a new service across all files    |
| `/project:improve-seo`         | Adds full SEO meta tags to all pages   |
| `/project:new-page`            | Scaffolds a complete new HTML page     |

---

## Known Gaps (from CONTEXT.md)

- SEO: inner pages missing meta descriptions, no OG/Twitter cards, no JSON-LD
- Contact form: not wired to a real backend (Formspree/Netlify/etc.)
- Careers, Privacy Policy, Terms of Service pages: not built yet
- Social links in footer: all point to `#`
- Analytics: no GA4/GTM
- Pre-release: email & phone are placeholders — see `PRE-RELEASE.md`
