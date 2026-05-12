# DESIGN.md

> A warm, editorial-grade reading experience — like a well-typeset magazine rendered on screen. Designed for reading, not for showing off.

## 1. Visual Theme & Atmosphere

**Style**: Warm Editorial（温暖编辑风）
**Keywords**: clean, warm, editorial, readable, trustworthy, breathable, paper-like
**Tone**: Trusted knowledge platform — NOT cold-tech, NOT flashy, NOT cluttered
**Feel**: Like picking up a beautifully typeset book — warm paper tone, crisp typography, generous whitespace that invites you to keep reading

**Interaction Tier**: L2 — Smooth Interaction
**Dependencies**: CSS only (IntersectionObserver for scroll reveal, no GSAP needed)

---

## 2. Color Palette & Roles

```css
:root {
  /* Backgrounds */
  --bg: #FAFAFA;                    /* Page background, warm off-white */
  --surface: #FFFFFF;               /* Cards, containers */
  --surface-alt: #F5F4F1;           /* Alternating section background */
  --surface-hover: #F0EFEC;         /* Hover state surface */

  /* Borders */
  --border: rgba(0, 0, 0, 0.08);   /* Default border — whisper weight */
  --border-hover: rgba(0, 0, 0, 0.15); /* Hover border */
  --border-strong: rgba(0, 0, 0, 0.12); /* Emphasis border */

  /* Text */
  --text: #171717;                  /* Headings, important text */
  --text-secondary: #5C5C5C;        /* Body, descriptions */
  --text-tertiary: #8B8B8B;         /* Labels, metadata, timestamps */

  /* Accent */
  --accent: #2563EB;                /* CTA, links, active states */
  --accent-hover: #1D4ED8;          /* Accent hover */

  /* RGB variants for rgba() */
  --bg-rgb: 250, 250, 250;
  --accent-rgb: 37, 99, 235;

  /* Semantic */
  --success: #16A34A;
  --warning: #F59E0B;
  --error: #DC2626;
}
```

**Color Rules:**
- All colors referenced via CSS variables, zero hardcoded hex values
- Accent color used only on interactive elements (links, CTAs), never as decoration
- At most one accent element per section
- All grays carry a warm undertone — never use cool blue-grays

---

## 3. Typography Rules

**Font Stack:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=JetBrains+Mono:wght@400;500&display=swap');
```

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Hero H1 | Source Serif 4 | 56px (3.5rem) | 700 | 1.1 | -0.03em |
| Section H2 | Source Serif 4 | 32px (2rem) | 600 | 1.25 | -0.01em |
| H3 (Card Title) | Inter | 20px (1.25rem) | 600 | 1.35 | normal |
| Body | Inter | 16px (1rem) | 400 | 1.6 | normal |
| Body Large (lead) | Source Serif 4 | 18px (1.125rem) | 400 | 1.65 | normal |
| Body Small | Inter | 14px (0.875rem) | 400 | 1.5 | normal |
| Caption / Label | Inter | 12px (0.75rem) | 500 | 1.4 | 0.01em |
| Code / Mono | JetBrains Mono | 14px (0.875rem) | 400 | 1.6 | normal |

**Typography Rules:**
- Serif for headings (editorial authority), sans-serif for body and UI (screen readability)
- Heading weight: 600–700, body: 400, labels: 500
- Body line-height ≥ 1.5 for comfortable English reading
- Body font-size ≥ 16px on desktop, ≥ 15px on mobile
- Font smoothing enabled on macOS: `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`
- **NEVER use**: Arial as heading font, system-ui as primary font, more than 2 typefaces per page
- Code blocks use light gray background (`--surface-alt`), never dark

**Text Decoration:**
- Hero H1: no gradient, no shadow (clean editorial)
- Section H2: no decoration
- Accent color carries emphasis, not text effects

---

## 4. Component Stylings

### Buttons

**Primary (Accent Fill)**
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 1;
  color: #FFFFFF;
  background: var(--accent);
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}
.btn-primary:hover {
  background: var(--accent-hover);
  box-shadow: 0 2px 8px rgba(var(--accent-rgb), 0.25);
}
.btn-primary:active { transform: scale(0.97); }
.btn-primary:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
.btn-primary:disabled {
  background: #CBD5E1;
  color: #94A3B8;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
```

**Secondary (Ghost)**
```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 1;
  color: var(--text);
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}
.btn-secondary:hover {
  background: var(--surface-hover);
  border-color: var(--border-hover);
}
.btn-secondary:active { transform: scale(0.97); }
.btn-secondary:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

### Cards (Article Card)
```css
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  box-shadow:
    rgba(0, 0, 0, 0.03) 0px 1px 2px,
    rgba(0, 0, 0, 0.02) 0px 2px 6px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  cursor: pointer;
}
.card:hover {
  transform: translateY(-2px);
  border-color: var(--border-hover);
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 2px 4px,
    rgba(0, 0, 0, 0.03) 0px 6px 16px;
}
.card:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

### Navigation
```css
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 24px;
  background: rgba(250, 250, 250, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease, background 0.3s ease;
}
.nav.scrolled {
  border-bottom-color: var(--border);
  background: rgba(255, 255, 255, 0.9);
}
.nav a {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}
.nav a:hover { color: var(--text); }
```

### Links (Inline Text)
```css
.content a {
  color: var(--accent);
  text-decoration: none;
  position: relative;
  transition: color 0.2s ease;
}
.content a::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--accent);
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.content a:hover::after { width: 100%; }
```

### Tags / Badges
```css
.tag {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.06);
  border-radius: 9999px;
  transition: background 0.2s ease;
}
.tag:hover { background: rgba(var(--accent-rgb), 0.12); }
```

### Article Content (Prose)
```css
.prose {
  max-width: 680px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.65;
  color: var(--text-secondary);
}
.prose h1 { font-family: "Source Serif 4", serif; font-size: 2rem; font-weight: 700; color: var(--text); margin: 2em 0 0.5em; line-height: 1.2; }
.prose h2 { font-family: "Source Serif 4", serif; font-size: 1.5rem; font-weight: 600; color: var(--text); margin: 1.8em 0 0.4em; line-height: 1.3; }
.prose h3 { font-family: "Inter", sans-serif; font-size: 1.2rem; font-weight: 600; color: var(--text); margin: 1.5em 0 0.3em; }
.prose p { margin: 0 0 1.1em; }
.prose strong { color: var(--text); }
.prose pre { background: var(--surface-alt); border: 1px solid var(--border); border-radius: 8px; padding: 16px; overflow-x: auto; }
.prose code { font-family: "JetBrains Mono", monospace; font-size: 0.875em; }
.prose blockquote { border-left: 3px solid var(--accent); padding-left: 16px; margin-left: 0; color: var(--text-tertiary); font-style: italic; }
.prose ul, .prose ol { padding-left: 1.5em; margin-bottom: 1.1em; }
.prose li { margin-bottom: 0.4em; }
.prose img { border-radius: 8px; max-width: 100%; }
```

---

## 5. Layout Principles

**Container:**
- Max width: 1200px (page container), 680px (article content)
- Padding: 24px (mobile), 40px (desktop)
- Narrow variant (article text): 680px

**Spacing Scale:**
- Section padding: 80px (desktop), 48px (mobile)
- Component gap: 24px (vertical stack), 20px (grid gutter)
- Card internal padding: 24px
- Paragraph spacing: 1.1em

**Grid:**
```css
/* Article grid — 3 cols desktop, 2 cols tablet, 1 col mobile */
.article-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 1024px) { .article-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .article-grid { grid-template-columns: 1fr; } }

/* Featured hero — 2-col asymmetric */
.featured-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}
```

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Page background, text flow |
| Contain | `1px solid var(--border)` | Card outlines, dividers |
| Whisper | `rgba(0,0,0,0.03) 0 1px 2px, rgba(0,0,0,0.02) 0 2px 6px` | Default cards |
| Elevate | `rgba(0,0,0,0.05) 0 2px 4px, rgba(0,0,0,0.03) 0 6px 16px` | Hover cards, dropdowns |
| Modal | `rgba(0,0,0,0.06) 0 4px 24px, rgba(0,0,0,0.04) 0 8px 40px` | Modals, overlays |

**Whisper Border** is the primary depth mechanism — `1px solid rgba(0,0,0,0.08)` replaces heavy shadows, minimizing visual noise.

---

## 7. Animation & Interaction

**Motion Philosophy**: Motion serves reading flow, never distracts — opacity + transform only, duration ≤ 400ms

### Entrance Animation (Scroll Reveal)
```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}
```

### JS Scroll Reveal (vanilla)
```js
function initScrollReveal(selector = '.reveal') {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll(selector).forEach(el => obs.observe(el));
}
document.addEventListener('DOMContentLoaded', () => initScrollReveal());
```

### Card Hover
```css
.card-link { transition: transform 0.25s ease, box-shadow 0.25s ease; }
.card-link:hover { transform: translateY(-2px); }
```

### Nav Scroll Effect
```css
.nav-link { color: var(--text-secondary); transition: color 0.2s ease; }
.nav-link:hover, .nav-link.active { color: var(--text); }
```

### Focus Ring (Global)
```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  border-radius: 2px;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .reveal { opacity: 1; transform: none; }
}
```

---

## 8. Do's and Don'ts

### Do
- Keep article body width ≤ 680px for optimal reading measure (65-75 chars per line)
- Use Source Serif 4 for all headings — serif establishes editorial authority
- Separate cards with whisper borders, not heavy shadows
- Reserve accent blue for links and CTAs only
- Every interactive element must have a visible focus-visible state (accessibility + SEO)
- Body text ≥ 16px on desktop for comfortable reading
- Maintain clear h1-h2-h3 hierarchy per page (critical for SEO structured data)
- All images must have descriptive `alt` text and use WebP format
- Use semantic HTML tags (`<article>`, `<nav>`, `<main>`, `<aside>`) throughout

### Don't
- Never use pure black `#000` or pure white `#FFF` — always warm-toned alternatives
- Never use drop shadows as the default card treatment — use whisper borders
- No AI-slop defaults: Inter-only typography, purple gradients, nested rounded cards, glassmorphism
- Never make article body wider than 720px
- No more than 2 shadow layers on any element
- No accent colors beyond blue (reduces visual noise, builds brand consistency)
- Never use `font-size < 12px` (WCAG minimum)
- Never ship images without `alt` or links without descriptive text
- No emoji as icon replacements (diminishes professionalism)
- No Tailwind utility-class pollution in semantic HTML — use CSS modules or styled components

---

## 9. Responsive Behavior

**Breakpoints:**
| Name | Width | Key Changes |
|------|-------|-------------|
| Desktop | > 1024px | 3-col article grid, full nav, 680px prose, 56px hero |
| Tablet | 640–1024px | 2-col grid, compact nav, 48px hero |
| Mobile | < 640px | Single column, hamburger menu, 36px hero, 15px body |

**Touch Targets:** minimum 44×44px
**Collapsing Strategy:**
- Navigation: horizontal links → hamburger menu (< 640px)
- Article grid: 3 cols → 2 cols → 1 col
- Hero font-size: 56px → 40px → 32px
- Section padding: 80px → 48px → 32px
- Featured grid: side-by-side → stacked

```css
/* Mobile */
@media (max-width: 640px) {
  .prose { font-size: 15px; padding: 0 16px; }
  .nav { padding: 0 16px; height: 56px; }
  .card { padding: 16px; border-radius: 10px; }
  h1 { font-size: 2rem !important; }
  h2 { font-size: 1.35rem !important; }
}
```
