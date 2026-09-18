# KAYCEE INDUSTRIES LTD — MASTER PROMPT (v3 — "Control Panel")
## Single-page homepage, fresh modern design, primary colour #0997E0, client-supplied assets only

> **How to use:** Copy everything between `=== PROMPT START ===` and `=== PROMPT END ===` into Claude / Cursor / Lovable / v0 / Bolt / any AI builder. Put the `assets/img/` folder (19 files, listed in §5) next to the generated `index.html`. Nothing else needs to be supplied.
>
> **Source of truth:** every word of copy, every number, phone, email, address, client logo and product image below was extracted from the supplied website package (`kaycee-industries-website.zip` → `index.html`). Design, layout, fonts and colours from that package are **deliberately discarded** and replaced by the direction in §6–§8.

---

=== PROMPT START ===

# ROLE

You are a senior brand designer + creative front-end engineer at a top-tier agency. Build a **single-page marketing homepage** for **Kaycee Industries Ltd** — a 75+ year old, Mumbai-based, BSE-listed manufacturer of industrial electrical switches, counters and hour meters, managed by Salzer Electronics Ltd. The client is large and professional. The result must look like a premium, 2026-grade industrial-tech brand site that was clearly art-directed — **not** a template, **not** a generic AI layout, and **not** a re-skin of the previous draft.

Deliver complete, production-ready, responsive, accessible code. No lorem, no placeholders, no omitted sections.

---

# 1. NON-NEGOTIABLE RULES

1. **Single page.** All navigation is anchor scrolling. No inner pages. (Investors opens the company's investor page in a new tab; Downloads scrolls to the catalogue block inside Products.)
2. **Same navigation items and same sections as the supplied site. Add nothing, remove nothing.** Fixed list in §3 and §4.
3. **Use only the content, numbers, contacts, logos and images supplied in this prompt.** Do not invent statistics, clients, awards or certifications. Do not use stock photos or generated images — the 19 supplied files are the complete image set.
4. **Primary colour is `#0997E0`.** Build the entire palette around it (§6). Do not introduce purple, teal or gradient rainbows.
5. **Completely new visual design — the "Control Panel" system in §4/§6.** Flat, sharp, bordered grid cells, blue as a surface colour, condensed industrial type. Nothing from the previous draft (dark scrim hero, rounded cards, pill buttons, glass, marquee) may reappear.
6. **Hero is the #1 priority.** It must show the real product photo (`hero-rotary-switch.webp`) large, dramatic and instantly attractive.
7. **Motion is mandatory** (§8) — cinematic hero entrance, scroll-driven reveals, micro-interactions — always respecting `prefers-reduced-motion`.
8. **No AI-slop tells:** no glassmorphism, no gradients, no blurred blobs, no rounded cards with shadows, no pill buttons, no emoji icons, no centred-everything, no floating badges, no "Lorem".
9. **Performance:** LCP < 2.5 s on 4G, CLS < 0.05, hero image preloaded, everything else lazy, JS < 150 KB gzipped, Lighthouse ≥ 95 / 100 / 100 / 100.

---

# 2. BRAND FACTS (from the supplied site — use verbatim where quoted)

| Field | Value |
|---|---|
| Company | Kaycee Industries Ltd |
| Brand | KAYCEE — logo lockup reads **"KAYCEE · BRAND THAT SET THE STANDARD"** (blue inverted-triangle "KI" emblem + wordmark) |
| Positioning line (hero) | **"Premium Electrical Products"** |
| Headline (hero, verbatim) | **"Built for Safety, Designed for Performance"** |
| Sub-line (hero, verbatim) | "High quality electrical products manufactured with precision, reliability and innovation for a smarter, safer tomorrow." |
| Legacy | 75+ years; pre-independence incorporated company |
| Status | Mumbai-based listed company |
| Managed by / promoters | Salzer Electronics Ltd and Mr. Doraiswamy Rangaswamy |
| Manufacturing | Ambernath, Thane — ~200 skilled workforce |
| Product families | Rotary Switch · Cam Switch · Breaker Control Switch · Counter · Limit Switch · Hour Meters · Relay · Toggle & Micro Switch · Forward-Reverse Switch |
| Product categories (site taxonomy) | Switches · Hour Meters · Counters · Rotary Toggles · Cable Lugs |
| Meta title | Kaycee Industries Ltd \| Premium Electrical Products – Switches, Counters, Hour Meters |
| Meta description | Kaycee Industries Ltd – a Mumbai-based listed company with 75+ years of experience manufacturing rotary switches, cam switches, counters, hour meters, rotary toggles and cable lugs at Ambernath, Thane. |

---

# 3. NAVIGATION — same 8 items, same order (fixed)

```
[Logo]   Home · About Us · Clients · Products · Business Network · Investors · Downloads · Contact Us   [ +91 22 22613521 ]  [ Enquire Now ]
```

- Anchors: `#home #about #clients #products #network` · Investors → `https://www.kayceeindustries.com/home/investors` (new tab) · Downloads → `#downloads` (catalogue block inside Products) · `#contact`.
- "Enquire Now" (primary button) → `#contact`. Phone chip → `tel:+912222613521`.
- Logo: `assets/img/kaycee-logo-light.webp` on dark/transparent state, `assets/img/kaycee-logo.webp` once the bar turns light. Logo height 44 px desktop / 36 px mobile.
- Behaviour: transparent over the hero → after 40 px scroll becomes a 64 px sticky bar, white at 92% with `backdrop-filter: blur(16px)`, hairline bottom border, and a 2 px **primary-colour scroll-progress line** along its bottom edge.
- Active link gets a small primary dot that slides between items (spring, 350 ms). Hover: text colour → primary, 150 ms.
- Mobile (< 1024 px): hamburger morphs to ✕; full-screen overlay in `--ink` with numbered items `01 Home … 08 Contact Us` staggering in (60 ms), phone `+91 22 22613521 / 22 / 23`, email `sales@kayceeindustries.in`, and a "Send an Enquiry" button pinned at the bottom.
- 44 px minimum tap targets everywhere.

---

# 4. SECTIONS — same 8 sections, same order, "Control Panel" layouts

**System in one sentence:** the page is a stack of switchgear-panel modules. Every section is a black or blue **strip** (44 px header bar: index · name · right-aligned meta) sitting on a **panel**: a 1 px-bordered box divided into gapless **cells** by 1 px rules. No gaps between cells, no rounded corners, no shadows, no floating badges, no dark scrims, no marquees, no custom cursor. Blue `#0997E0` is used as a *surface* (whole cells and whole sections), black as the frame, yellow `#F5B400` (the switch-plate yellow) as the only accent.

## 4.0 Top bar + nav
- **Top bar** (desktop only): 34 px black, mono 11.5 px uppercase. Left: `Kaycee Industries Ltd · Mumbai-based listed company · Managed by Salzer Electronics Ltd.` Right: `+91 22 22613521 / 22 / 23` · `sales@kayceeindustries.in`.
- **Nav**: 72 px white, sticky, 1 px black bottom rule. Logo `kaycee-logo.webp` at 44 px. Links in Barlow Condensed 600, uppercase, 16 px; active link gets a 3 px blue underline on the nav's bottom edge. Right: `Enquire Now →` as a black rectangular button. Mobile: 48 px square bordered burger; menu is a full-screen **blue** sheet sliding down, links stacked in Barlow Condensed 700 at ~44 px with 1 px white rules, phone/email and a `Send an Enquiry` button at the bottom.

## 4.1 `#home` — HERO (two-cell panel + quality band)
**Copy (verbatim):** kicker `Premium Electrical Products` (yellow mono); H1 in three masked lines `Built for Safety,` / `Designed for` / `Performance`; sub "High quality electrical products manufactured with precision, reliability and innovation for a smarter, safer tomorrow."; buttons `Explore Our Products →` (black) and `About Our Company` (white outline); three facts `Experience — 75+ Years` · `Status — Mumbai-based listed company` · `Managed by — Salzer Electronics Ltd.`; photo caption `Kaycee / Rotary Switch` · `Manufacturing · Ambernath, Thane`; stamp `75+ Years of Experience`; quality band `01 Superior Safety · 02 Long Durability · 03 High Performance · 04 Trusted Quality`.

**Layout:** one bordered panel split 50/50. **Left cell is solid blue** (min-height 600 px, content bottom-aligned): kicker, H1 in Barlow Condensed 800 uppercase at `clamp(56px,7.2vw,112px)` line-height .88, sub, buttons, then the three facts as a `dl` in three columns divided by white rules. **Right cell is the photo** `hero-rotary-switch.webp` (object-fit cover, object-position 70% 50%) on a light-grey ground, with a white caption strip (mono, two ends) along its bottom edge and a **yellow stamp** pinned to its top-left corner (`75` in 56 px condensed, `+`, `YEARS OF EXPERIENCE` mono). Directly beneath the panel, a full-width **black band** with the four qualities in four bordered cells (mono yellow index + condensed label). Mobile: cells stack (blue, then photo at 4:3), facts stack with rules, band becomes a single column.

**Motion:** on load the H1 lines rise out of their masks (0.9 s, 120 ms stagger); the photo reveals with a hard `clip-path` wipe from the left (1.1 s) while it settles from scale 1.06 → 1; the 75 counts up. No parallax.

## 4.2 `#about` — ABOUT OUR COMPANY
**Copy (verbatim):** strip `01 About Our Company · Kaycee Industries Ltd`; H2 "From a Vision to a Trusted Company"; lead "Kaycee Industries delivers reliable, precision-engineered solutions."; the four paragraphs (75 years / listed company / Ambernath 200 people / promoters); `Read More About Us →`; facts `Legacy 75+ Years` · `Headquarters Mumbai` · `Managed by Salzer Electronics`; creed `01 Modern Facility.` `02 Skilled People.` `03 Better Together.`; range caption `Product Range` · `~200 skilled workforce dedicated to customer needs`; factory caption `Ambernath, Thane`; stats `10 M+ Satisfied Clients` · `182+ Expert Team` · `50+ Active Projects` · `75+ Years of Experience`; product families ticker list (static): Rotary Switch · Cam Switch · Breaker Control Switch · Counter · Limit Switch · Hour Meters · Relay · Toggle & Micro Switch · Forward-Reverse Switch.

**Layout:** three stacked panels. **Panel A** (5/7 split): H2 + lead | four paragraphs + link. **Panel B** (7/5): left = `products-range.webp` filling the cell with a mono caption strip; right = a 3-cell facts table on top, the creed below as three large condensed rows with counter numbers and hairlines, then `factory-line.webp` (260 px tall, caption strip with pin icon). **Panel C** = four stat cells (condensed 76 px numerals, mono labels). Under it a **range row**: nine bordered cells that flex to fill the width; hover inverts a cell to black. Mobile: everything single column, stats 2×2.

**Motion:** headings fade-up on entry; both photos reveal with a left-to-right `clip-path` wipe; stats count up; cells fade-up 16 px.

## 4.3 `#products` — OUR PRODUCTS (includes `#downloads`)
**Copy (verbatim):** strip `02 Our Products · Switches · Hour Meters · Counters · Rotary Toggles · Cable Lugs`; H2 "Engineered Products for Demanding Applications"; intro sentence; `View All Products →`; tabs `01 Switches` … `05 Cable Lugs`; the three product cards (Stroke Counter / Digital Counter / Rotary Toggle with their one-liners, images and `View Product →`); the Full Catalogue cell (`Full Catalogue · Downloads`, "View All Products", "Switches · Hour Meters · Counters · Rotary Toggles · Cable Lugs", "Catalogue PDFs on request: sales@kayceeindustries.in", button `View All Products →`).

**Layout:** grey section. Blue strip. **Head panel** 7/5: H2 | intro + link. **Tab row**: five equal bordered cells (mono blue index + condensed label); the active tab is solid black with a yellow index. **Product panel**: four equal cells — three product cells (mono meta row, square light-grey image well with the cut-out photo in `mix-blend-mode: multiply`, condensed 30 px name, description, `View Product →`) and the fourth cell **solid blue**: the Full Catalogue block with a white button. Mobile: tabs scroll horizontally, cells stack.

**Motion:** image scales 1.06 on hover; tab switch re-filters cells with a 350 ms fade-up; no tilt, no cursor labels.

## 4.4 `#why` — WHY CHOOSE US
**Copy (verbatim):** strip `03 Why Choose Us · Reliable Products · Technical Expertise · Competitive Value`; H2 "Precision in Every Detail, Confidence in Every Product."; intro; `89 %` "Growth in the past 2 years"; the three items `01 Experienced Team`, `02 Wide Range of Products`, `03 Competitive Pricing` with their paragraphs.

**Layout:** the **whole section is blue**; the strip is black; the panel's rules are white at 55 %. Row 1: a 2/3 cell with H2 + intro, and a 1/3 cell with **`89%` in yellow condensed at up to 150 px**, the mono caption and an 8 px progress bar that fills to 89 %. Row 2: three equal cells, each with a yellow mono index, condensed 32 px title and paragraph. Mobile: single column.

**Motion:** the 89 counts up and the bar fills (1.4 s) on entry. Nothing pinned.

## 4.5 `#clients` — OUR CLIENTS
**Copy (verbatim):** strip `04 Our Clients · Thousands of Companies are going with Kaycee Industries Ltd`; H2 "We have many Clients Worldwide!"; intro sentence; the eight logos with alt text (§5).

**Layout:** panel split 4/8: left cell = H2 + intro; right = a **4×2 gapless logo grid** of bordered cells (176 px tall), logo at 64 % width in grayscale/60 % opacity with a tiny mono caption at the cell's bottom-left. Hover: cell turns grey and the logo goes full colour. Mobile: 2 columns, 140 px cells.

## 4.6 `#network` — BUSINESS NETWORK
**Copy (verbatim):** strip `05 Business Network · Our Presence Across India · 18.94°N · 72.84°E`; H2 "Find our factories and outlets across key locations."; legend `Head Office · Branch Office · Distribution Network`; stats `1 Head Office · 10 Branch Offices · 109 Stock Points · 2 Factories`; HO block `Mumbai (HO)` with Office `+91 22 22613521/22/23`, Mobile `9320664888`, Call & WhatsApp `7498899970`; the ten branch rows (§4.6 table of the previous version, unchanged); `View all 10 branch offices`.

**Layout:** grey section, blue strip, panel split 5/7. Row 1: H2 + legend | a **2×2 stats grid** (condensed numerals bottom-aligned). Row 2: left = the **India map** as inline SVG on a grey cell — real lat/long projected outline in 1.2 px black with white fill, Maharashtra tinted light blue, dotted straight lines from Mumbai to each branch, **square** pins (black; the HO pin blue and larger) with mono labels; right = a **solid-blue Head Office cell** (condensed 44 px "MUMBAI" + `HO` tag, three phone columns) above a real **HTML table** of branch offices (`# · City · State · Phone`, city in condensed 20 px, phone in mono right-aligned; five rows visible, `View all 10 branch offices` reveals the rest). Hovering a table row highlights its pin and line on the map, and vice versa. Mobile: stacks; the State column hides.

**Motion:** the outline draws (`stroke-dashoffset`, 1.8 s) and fills; pins fade in staggered; stats count up.

## 4.7 `#testimonials` — TESTIMONIALS
**Copy (verbatim):** strip `06 Testimonials · 01 / 03`; intro sentence; the three quotes with initials, names and cities.

**Layout:** panel: a full-width grey intro cell, then **three equal quote cells side by side** (no tabs, no slider, no stack). Each: a blue 72 px opening quote mark, the quote in Barlow Condensed 600 at ~26 px, and a footer row (black 44 px initials square, condensed name, mono city) above a hairline. Mobile: stacked.

## 4.8 `#contact` — CONTACT US
**Copy (verbatim):** strip `07 Contact Us · Mon – Sat: 9:30 AM – 5:15 PM · Sunday: Closed`; heading "Share your requirements with us, and our team will get back to you with the right solution."; the info rows (Phone Number, Email Address, Working Hours, Location, Additional Contact with the seven numbers); map caption `Kaycee Industries Ltd · Ballard Estate`; form title "Send Us Message", sub "Fill in the details below and our sales team will reach out.", fields and validation messages verbatim, product options verbatim, button `Send Us Message`, success copy verbatim, `Send another message`.

**Layout:** grey section, blue strip, panel split 5/7. Left cell (spans both rows): heading + a **definition table** (`dt` mono label with blue icon | `dd` condensed value) with hairlines; Additional Contact renders the seven numbers as small bordered mono chips that invert to black on hover. Right column: top cell = the Google Maps embed (260 px, grayscale) with a mono caption strip; bottom cell = the form: mono labels above **square 52 px bordered inputs** and a native `select`, blue focus ring, red error lines, full-width blue submit; success replaces the form with `Message sent` (mono blue), the two lines and the link. Mobile: single column.

## 4.9 FOOTER
**Content verbatim.** Black section with a bordered four-cell panel: brand cell (light logo, tagline, three square social buttons in a row), `Navigation` column, `Products` column, `Contact` column (yellow mono column titles, condensed uppercase links, body text for hours and address). Under it a single mono row: `© 2026. Kaycee Industries. All Rights Reserved` left, `Website Developed by Samantha Technologies` right. Quick actions: two stacked rectangular tabs docked to the viewport's right edge (`WhatsApp us` blue, `Call now` black) that slide in after 500 px of scroll.

---

# 5. ASSETS — the complete image set (use these and nothing else)

Folder `assets/img/`:

| File | Size | Use |
|---|---|---|
| `kaycee-logo.webp` / `.png` | 382×400 | Logo on light backgrounds (nav scrolled state) |
| `kaycee-logo-light.webp` / `.png` | 382×400 | Logo on dark backgrounds (hero nav, mobile overlay, footer) |
| `favicon.png` | 96×96 | Favicon / app icon (KI triangle emblem) |
| `hero-rotary-switch.webp` | 2200×1116 | **Hero background** — Kaycee rotary switch, yellow front plate, red handle, `1 – OFF – 2`, industrial panel room |
| `products-range.webp` | 1535×672 | About row 1 image + Full Catalogue tile |
| `factory-line.webp` | 1254×1254 | About row 2 image (micro switches on the assembly line) |
| `products/stroke-counter.webp` | 1000×627 | Product card 1 |
| `products/digital-counter.webp` | 1000×742 | Product card 2 |
| `products/rotary-toggle.webp` | 823×812 | Product card 3 |
| `clients/aditya-birla.webp` | 360×183 | Client logo |
| `clients/abb.webp` | 360×138 | Client logo |
| `clients/bhel.webp` | 246×200 | Client logo |
| `clients/indian-railways.webp` | 200×200 | Client logo |
| `clients/barc.webp` | 197×200 | Client logo |
| `clients/blue-star.webp` | 360×119 | Client logo |
| `clients/cs-electric.webp` | 254×200 | Client logo |
| `clients/birla-gold.webp` | 215×200 | Client logo |

Rules: the logo is a raster with a blue triangle emblem — never recolour it, never stretch it, always keep clear space of ½ its height. Product photos have white backgrounds; place them on `--paper-2` tiles with `mix-blend-mode: multiply` so the white disappears cleanly. Serve all images with explicit `width`/`height`, `decoding="async"`, and `loading="lazy"` except the hero (`fetchpriority="high"` + `<link rel="preload">`). Icons: one line-icon set (Lucide), 1.5 px stroke, inline SVG sprite — no emoji.

---

# 6. DESIGN SYSTEM — "Control Panel" (primary `#0997E0`)

## 6.1 Colour tokens
```css
:root{
  --blue:#0997E0;   /* primary — used as SURFACE: whole cells, whole sections, strips, HO block */
  --blue-d:#0B7BB6; /* hover/lit state on blue */
  --blue-l:#D8EEFA; /* Maharashtra tint, lit table rows */
  --black:#111417;  /* frame lines, strips, buttons, footer, band */
  --white:#FFFFFF;
  --grey:#EEF1F4;   /* alternate section ground, image wells */
  --grey-2:#D7DDE3; /* inner hairlines */
  --grey-3:#6B7681; /* mono labels */
  --yellow:#F5B400; /* the switch-plate yellow — strip indices, 89 %, stamp, footer column titles */
  --red:#D93025;    /* form errors only */
}
```
- Section grounds alternate: white → grey → **blue** (Why) → white → grey → white → grey → black (footer).
- Rules: every panel and cell edge is a 1 px `--black` line; on blue surfaces rules are white at 55 %; on black, white at 25 %.
- **No** border-radius, **no** box-shadow, **no** gradients, **no** blur, **no** opacity-fade backgrounds. Hover states are hard inversions (white→black, black→blue, blue→black).

## 6.2 Typography (self-hosted woff2, latin + latin-ext)
- **Display:** `Barlow Condensed` 600/700/800, always uppercase, line-height .88–.95. H1 `clamp(56px,7.2vw,112px)`, H2 `clamp(40px,4.6vw,68px)`, cell titles 30–44 px, buttons/links 17–18 px with +.06em tracking.
- **Body:** `Barlow` 400/500/600, 17 px / 1.55; lead 19 px.
- **Mono (labels, strips, indices, captions, phone numbers):** `DM Mono` 400/500, 11–12 px, uppercase, +.10em tracking.
- Fallbacks: `"Arial Narrow", Impact` for the condensed face, `"Helvetica Neue", Arial` for body, `Menlo` for mono.

## 6.3 Grid & spacing
- Content width 1360 px, gutter `clamp(16px,3.5vw,40px)`, cell padding `clamp(20px,2.4vw,32px)`, section padding `clamp(56px,7vw,104px)`.
- Panels split by ratio (5/7, 7/5, 4/8, 50/50) or into equal cells (3, 4, 5, 4×2). Mobile: every panel collapses to one column with the vertical rules becoming horizontal rules.

## 6.4 Components
- **Strip:** 44 px bar, mono; index in yellow (black strip) or black (blue strip); right-aligned meta at 70 %.
- **Button:** 52 px rectangle, 1 px border, condensed uppercase 18 px, arrow icon nudges 5 px on hover; variants black, blue, white, white-outline.
- **More-link:** condensed uppercase with a 2 px black underline; turns blue on hover.
- **Facts table (`dl`):** bordered cells, mono `dt`, condensed `dd`.
- **Stat cell:** condensed 64–76 px numeral, mono label.
- **Inputs:** 52 px, 1 px black border, square; blue inset ring on focus; red border + mono error on invalid.
- **Icons:** 18 px line icons, 1.8 px stroke, square caps (Lucide-style), inline SVG sprite; never emoji.

---

# 7. MOTION SPEC (GSAP 3 + ScrollTrigger only; no smooth-scroll library)
- Hero: masked H1 line rise (CSS transition keyed off an `html.ready` class), photo `clip-path` wipe + scale settle, stamp count-up.
- Scroll: headings fade-up 18 px (600 ms); cells fade-up 16 px once; photos wipe left→right; numerals count up (1.2 s); the Why bar fills; the map outline draws then pins fade in staggered.
- Hover: hard inversions on tabs, range cells, logo cells, chips, buttons; product image scale 1.06; table row ↔ map pin highlight.
- Nothing pinned, no parallax, no marquee, no custom cursor, no magnetic buttons.
- `prefers-reduced-motion`: all transitions ≤ 1 ms, masks and wipes removed, counters render final values.

---

# 8. TECH & DELIVERABLE

- Preferred: static `index.html` + `assets/css/style.css` + `assets/js/main.js` with GSAP 3 + ScrollTrigger (local files); acceptable: **Next.js 15 + TypeScript + Tailwind CSS 4 + GSAP 3**, with all copy/contacts/products/branches in one typed `lib/content.ts`. Acceptable: a static `index.html` + `assets/css/style.css` + `assets/js/main.js` (GSAP/Lenis from CDN). In both cases keep the image paths exactly as in §5.
- SEO: title and meta description from §2; `theme-color #0A1626`; Open Graph image `assets/img/hero-rotary-switch.webp`; JSON-LD `Organization` + `LocalBusiness` (name, address `32 Ramjibhai Kamani Road, Ballard Estate, Mumbai 400001`, telephone `+91-22-22613521`, email `sales@kayceeindustries.in`, openingHours `Mo-Sa 09:30-17:15`, geo `18.94, 72.84`).
- Accessibility: semantic landmarks, skip link ("Skip to content"), aria-labels on icon buttons, marquee and carousels pausable, contrast ≥ 4.5:1, keyboard-operable tabs/testimonial rail, form errors announced via `aria-live`.
- Responsive: 360 / 768 / 1024 / 1280 / 1536; zero horizontal scroll at 360 px.

---

# 9. QUALITY GATE — verify before returning

- [ ] Nav has exactly: Home, About Us, Clients, Products, Business Network, Investors, Downloads, Contact Us + phone chip + "Enquire Now".
- [ ] Sections in order: Hero, About, Products (with `#downloads`), Why Choose Us, Clients, Business Network, Testimonials, Contact, Footer — nothing added, nothing removed.
- [ ] All copy verbatim from §4; all phones (HO, mobile, WhatsApp, 10 branches, 5 additional), email `sales@kayceeindustries.in`, hours, address, map link present.
- [ ] Only the 19 supplied image files are used; hero uses `hero-rotary-switch.webp`, all 8 client logos, all 3 product photos, both about images, both logo variants, favicon.
- [ ] Primary `#0997E0` used as a surface per §6; fonts Barlow Condensed / Barlow / DM Mono only; zero border-radius, zero box-shadow, zero gradients.
- [ ] Hero loads sharp within 2 s, product visible above the fold on mobile and desktop.
- [ ] Reduced-motion path works; Lighthouse ≥ 95 / 100 / 100 / 100.
- [ ] Reads as one engineered system: black/blue strips on bordered panels, gapless cells, blue hero panel + framed photo + yellow stamp + black quality band, blue Why section with the yellow 89 %, 4×2 logo grid, projected India map beside a real branch table, three side-by-side quotes, definition-table contact with square inputs, four-cell footer.

Return the complete codebase — every file in full, no omissions — followed by a 5-line "Client checklist" (social URLs, form endpoint, catalogue PDFs for Downloads, Investors URL confirmation, stat verification).

=== PROMPT END ===

---

## APPENDIX — notes for Samantha Technologies (not part of the prompt)

**What changed from v1:** v1 was reconstructed from web search because no files were supplied. v2 is built entirely from the uploaded `kaycee-industries-website.zip` (the earlier Samantha Technologies draft). All copy, numbers, phone lists, testimonials, logos and images now come from that package; the email is `sales@kayceeindustries.in` as in the package (v1 had `.com` from public listings — confirm with the client which is live).

**Deliberately discarded from the package:** Archivo + Plex Mono fonts, the navy `#071B2C` palette, all layouts, component styles and the GSAP choreography in `main.js`. Kept: `#0997E0` (as instructed) and every asset.

**v3:** the whole design layer was replaced by the "Control Panel" system after the v2.1 build was judged too generic. Copy, assets, nav and sections are unchanged.

**v2.1 layout changes (superseded):** Why Choose Us, Clients, Business Network, Testimonials, Contact and Footer were re-laid-out so they no longer mirror the draft's structure (two-column growth/list, logo marquee, map panel + side list, name tabs + stage, info grid + form card, four-column footer). See §4.4–§4.9.

**Assets:** copied into this repo at `assets/img/` (19 files, 1.5 MB) so the prompt's paths resolve as-is.

**Items the client should confirm before launch:** social media URLs (footer icons currently `#`), form endpoint, catalogue PDFs for the Downloads anchor, whether Investors should link to `kayceeindustries.com/home/investors`, and the marketing stats (`10 M+ Satisfied Clients`, `182+ Expert Team`, `50+ Active Projects`, `89 % growth`, `109 Stock Points`, `2 Factories`) which are carried over verbatim from the draft.
