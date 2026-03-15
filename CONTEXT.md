# CHIVAM SERVICES — Website Context File

> **Purpose:** This file captures all essential knowledge about the CHIVAM SERVICES website — its brand, content, architecture, design system, and conventions. Use this as ground truth when making any changes or additions to the site.

---

## 1. Brand Identity

| Field         | Value                                      |
|---------------|--------------------------------------------|
| Company Name  | CHIVAM SERVICES                            |
| Tagline       | IT Consulting                              |
| Domain        | nexatechconsulting.com                     |
| Email         | hello@nexatechconsulting.com               |
| Phone         | +1 (555) 123-4567                          |
| Founded Year  | 2026                                       |
| Positioning   | People-First IT Consulting for growing businesses |

### Tone & Voice
- Professional yet approachable — avoids jargon, favours plain language
- Outcome-driven: leads with measurable business results
- Honest and transparent — "no surprises", "no sales pressure"
- Global reach with local delivery focus

### Key Stats (used in marketing copy)
- **200+** Clients Served
- **98%** Client Retention / Satisfaction
- **15+** Years Experience
- **24/7** Support Coverage
- **6 Countries**: India · USA · UK · Australia · Canada · UAE

---

## 2. Site Architecture

```
nexatech-consulting/
├── index.html          ← Homepage
├── about.html          ← About Us page
├── services.html       ← Services & Offerings page
├── blog.html           ← Blog listing page
├── contact.html        ← Contact / consultation page
├── CLAUDE.md           ← Auto-loaded Claude Code instructions (quick-ref rules, file map, slash commands)
├── CONTEXT.md          ← This file — full project knowledge base
├── SKILL.md            ← Enhancement recipes for Claude Code
├── PRE-RELEASE.md      ← Checklist of tasks to complete before go-live
├── css/
│   └── styles.css      ← All styles (single stylesheet)
├── js/
│   ├── data.js         ← ALL site content (single source of truth)
│   ├── shell.js        ← Shared behaviour: ticker, nav scroll, mobile menu, scroll reveal
│   ├── main.js         ← Homepage renderer
│   ├── about.js        ← About page renderer
│   ├── services.js     ← Services page renderer
│   ├── blog.js         ← Blog page renderer
│   └── contact.js      ← Contact page renderer
├── .claude/
│   └── commands/       ← Project slash commands
│       ├── add-blog-post.md   → /project:add-blog-post
│       ├── add-service.md     → /project:add-service
│       ├── improve-seo.md     → /project:improve-seo
│       └── new-page.md        → /project:new-page
└── images/
    ├── LogoImage.png
    ├── Homepage1.png
    ├── AboutUs.png
    ├── ContactUs.png
    ├── 3DGoldenStar.png
    ├── contact-icon-1.svg  ← Lightbulb icon (contact info bullets)
    ├── contact-icon-2.svg  ← Target/strategy icon
    └── contact-icon-3.svg  ← Chat/conversation icon
```

### Architecture Conventions
- **Content lives exclusively in `data.js`** — never hardcode text in HTML or other JS files
- **JS files are page-specific renderers** — they read from `SITE` object and inject into DOM via `getElementById`
- **Single CSS file** — all styles in `styles.css` using CSS custom properties
- All pages share the same `<nav>`, ticker bar, mobile menu, and `<footer>` structure (hardcoded in each HTML file, driven by `data.js`)
- Script load order per page: `data.js` → `shell.js` → `[page].js`

---

## 3. Design System

### Color Palette
| Variable    | Hex       | Usage                               |
|-------------|-----------|-------------------------------------|
| `--gold`    | `#D4AF37` | Primary accent, CTAs, highlights    |
| `--gold-h`  | `#B8860B` | Gold hover state                    |
| `--black`   | `#0A0A0A` | Navbar, ticker background           |
| `--dark`    | `#1A1A1A` | Dark sections, footer               |
| `--navy`    | `#1B1F2A` | Dark card backgrounds               |
| `--cream`   | `#FAF9F6` | Page background                     |
| `--lgray`   | `#F5F7FA` | Alternate section background        |
| `--parch`   | `#F5F5F0` | Parchment tones                     |
| `--border`  | `#E5E1D8` | Borders, dividers                   |
| `--body`    | `#555555` | Body text                           |
| `--muted`   | `#888888` | Secondary/muted text                |
| `--white`   | `#ffffff` | White text on dark backgrounds      |

### Typography
| Variable | Font                              | Usage           |
|----------|-----------------------------------|-----------------|
| `--fd`   | `Playfair Display`, Georgia serif | Headings, brand |
| `--fb`   | `Inter`, system-ui sans-serif     | Body, UI        |

- Google Fonts loaded: `Playfair Display` (400, 700, italic) + `Inter` (300–700)
- Base font size: `15px`, line-height `1.65`

### Component Naming Conventions (CSS classes)
| Pattern       | Example                         | Description              |
|---------------|---------------------------------|--------------------------|
| Section block | `.hero`, `.about`, `.services`  | Full-width sections      |
| Page hero     | `.page-hero`, `.page-hero-inner`, `.page-eyebrow` | Dark banner used on all inner pages (About, Services, Blog, Contact) — includes animated entrance, optional breadcrumb |
| Grid variant  | `.svc-grid-full`                | 3-col fixed services grid (used on services.html); responsive to 2-col then 1-col |
| Breadcrumb    | `.breadcrumb`                   | Gold-accented breadcrumb nav inside `.page-hero` |
| BEM-ish       | `.svc-card`, `.svc-ico`         | Block-element compound   |
| Utility       | `.btn`, `.btn-gold`, `.btn-outline` | Reusable buttons     |
| Reveal        | `.reveal`                       | Scroll-triggered fade-in |
| Gold accent   | `.gold`, `.eyebrow`             | Gold-coloured text       |

---

## 4. Content Map

### Services Offered (9 core services)
1. IT Strategy & Consulting
2. Managed IT Services
3. Cybersecurity
4. Cloud Solutions (AWS, Azure, GCP)
5. Digital Transformation (automation, AI, modern platforms)
6. Custom Software Development
7. IT Infrastructure & Support
8. Staff Augmentation
9. IT Training & Placement

> **Note:** The hero card (`SITE.hero.card.services`) lists 8 services — IT Infrastructure & Support is omitted from that list but present in the full services grid.

### Navigation
`Home` | `About` | `Services` | `Blog` | `Contact` + CTA: `Free Consultation`

### Process Steps
01. Discover → 02. Plan → 03. Implement → 04. Support

### Why NexaTech (differentiators)
01. Outcome-Driven Engagements
02. Transparent Pricing
03. Fully Managed Service
04. Multi-Region Expertise

### Ticker Content (rotating 3 rows, 12s interval)
- Row 1 `🏆 Achievements`: 120+ Projects Delivered, 8 Countries, 10+ Years, 95% Retention, Security-First
- Row 2 `⚙️ Core Strengths`: AI, Cloud Architecture, Kubernetes, DevOps, Microservices, ML, Data Engineering
- Row 3 `✅ Client Benefits`: Faster Deployment, Enterprise Security, Scalable Solutions, Cost-Optimised, Dedicated Support

### Blog Posts (current)
| Date       | Category     | Title                                                       |
|------------|--------------|-------------------------------------------------------------|
| Mar 5, 2026  | Cybersecurity | Cybersecurity Tips Every Small Business Needs in 2026     |
| Feb 20, 2026 | Cloud         | A Practical Cloud Migration Guide for Small Business Owners |
| Feb 8, 2026  | IT Strategy   | How to Choose an IT Consultant: 7 Questions to Ask First   |

### Testimonials
- **Sarah Mitchell**, CEO Apex Logistics — IT infrastructure transformation, near-zero downtime
- **Ravi Kumar**, CTO Pinnacle Healthcare — Cloud migration, 35% cost reduction
- **James Thornton**, Director of IT Greenfield Financial — Cybersecurity audit & overhaul

### Office Locations (India)
Visakhapatnam · Hyderabad · Bangalore · Pune

---

## 5. Page-by-Page Structure

### index.html (Homepage)
Sections (top → bottom):
1. Ticker bar (fixed, top)
2. Nav (fixed)
3. Hero — eyebrow + headline + sub + 2 CTAs + stats strip + service card
4. About preview — heading + body + features grid (4 items)
5. Services preview — 9 service cards grid
6. Why Us — reasons list + stats grid
7. Process — 4-step flow
8. Testimonials — 3 cards
9. Blog preview — 3 posts
10. CTA Banner
11. Footer

### about.html
- About heading + body
- 4 Feature cards (Fast Response, Tailored Solutions, Proven Track Record, Global Reach)
- Process steps (4)
- Testimonials grid

### services.html
- **Page hero** (`.page-hero`) — dark full-width banner with eyebrow, `<h1>`, subtitle, and breadcrumb nav (hardcoded in HTML, not driven by `data.js`)
- Services grid (9 cards, `svc-grid-full` class = 3-col fixed grid) — rendered by `services.js` from `SITE.services.items`
- Why Us section — rendered from `SITE.why`
- Process steps — rendered from `SITE.process`
- Testimonials — rendered from `SITE.testimonials`
- CTA band (hardcoded in HTML)

### blog.html
- Blog grid (posts from `SITE.blog.posts`)

### contact.html
- Page hero (`.page-hero-sm`) with ContactUs.png image
- Contact grid: info panel (left) + form (right)
- Info panel: heading, 3 intro bullets with SVG icons, contact details, 4 office cards
- Contact form: first name, last name, full name (auto-fill), email, phone, company, address, service dropdown, source dropdown, message + validation
- FAQ section: 12 questions in 2-col grid, section label "What Our Clients Ask"
- Service options dropdown (11 options including Immigration & Visa Consultations)
- **Note:** FAQ items are hardcoded in HTML (not data-driven)

---

## 6. JS Rendering Pattern

All page renderers follow this pattern:
```js
(function () {
  'use strict';
  function set(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }
  // render functions that read from SITE object
  document.addEventListener('DOMContentLoaded', function () {
    // call render functions
  });
})();
```

To add a new section: (1) add data to `data.js` under `SITE`, (2) add a placeholder `<div id="mySection"></div>` in the HTML, (3) write a render function in the page's `.js` file.

---

## 7. SEO & Meta Tags (current state)

| Page        | Title                                               | Meta Description                            |
|-------------|-----------------------------------------------------|---------------------------------------------|
| index.html  | CHIVAM SERVICES \| IT Strategy, Managed IT & Cybersecurity | Expert IT consulting for growing businesses. |
| about.html  | About Us \| CHIVAM SERVICES                        | *(not set — needs improvement)*              |
| services.html | Services \| CHIVAM SERVICES                      | *(not set — needs improvement)*              |
| blog.html   | Blog \| CHIVAM SERVICES                             | *(not set — needs improvement)*              |
| contact.html | Contact \| CHIVAM SERVICES                        | *(not set — needs improvement)*              |

**Note:** OG tags, Twitter cards, canonical URLs, and structured data (JSON-LD) are not yet implemented.

---

## 8. Known Gaps & Improvement Opportunities

| Area                  | Gap / Opportunity                                                        |
|-----------------------|--------------------------------------------------------------------------|
| SEO                   | Missing meta descriptions on inner pages, no OG/Twitter cards, no JSON-LD |
| Accessibility         | Alt text on images should be audited, ARIA labels on form fields          |
| Performance           | No lazy-loading on images, no minification pipeline                       |
| Analytics             | No tracking code present (GA4 / GTM / Hotjar)                            |
| Careers page          | Footer links to `#` — page not yet built                                 |
| Privacy / Terms pages | Footer links to `#` — pages not yet built                                |
| Social links          | Footer socials point to `#` — real URLs not connected                   |
| Blog                  | Only 3 static posts; no CMS or pagination                                |
| Contact form          | No backend/form action — form submission not wired up                    |
| Immigration service   | Listed in contact dropdown but not in services section                   |
| Pre-release           | Email, phone number are placeholders — see `PRE-RELEASE.md`              |

---

## 9. Session Change Log

### Session 2 — Mar 15, 2026
- **contact.html** — Fixed 1.7 MB file size: extracted 3 embedded base64 PNGs → saved as SVG icons (`contact-icon-1/2/3.svg`, < 300 B each)
- **contact.html** — FAQ section: expanded from 6 → 12 questions with brand-voice answers; section label changed from "Quick Answers" / "Frequently Asked Questions" → "What Our Clients Ask" (eyebrow only, h2 removed)
- **css/styles.css** — Added `.faq-bg` overrides: `padding-top: 24px`, `.sec-eye` font size `17px`, colour `var(--black)`, `margin-bottom: 24px`
- **css/styles.css** — `.contact-intro-bullets` margin-top set to `16px` for balanced spacing
- **CLAUDE.md** — Created (auto-loaded by Claude Code; quick-ref rules, design tokens, file map, slash commands)
- **PRE-RELEASE.md** — Created (go-live checklist; first item: update real email/phone)
- **.claude/commands/** — Created 4 slash commands: `add-blog-post`, `add-service`, `improve-seo`, `new-page`
