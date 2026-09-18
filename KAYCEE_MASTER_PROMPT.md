# KAYCEE INDUSTRIES LTD — MASTER PROMPT (v2)
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
5. **Completely new visual design.** Different hero composition, different section layouts, different component styles, different fonts, different motion from the previous draft.
6. **Hero is the #1 priority.** It must show the real product photo (`hero-rotary-switch.webp`) large, dramatic and instantly attractive.
7. **Motion is mandatory** (§8) — cinematic hero entrance, scroll-driven reveals, micro-interactions — always respecting `prefers-reduced-motion`.
8. **No AI-slop tells:** no glassmorphism cards on blurry blobs, no emoji icons, no centred-everything, no three identical check-icon cards, no fake 3D mockups, no "Lorem".
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

# 4. SECTIONS — same 8 sections, same order, new layouts

Section numbering labels (mono, top-left of each section): `01 About Our Company`, `02 Our Products`, `03 Why Choose Us`, `04 Our Clients`, `05 Business Network`, `06 Testimonials`, `07 Contact Us`.

## 4.1 `#home` — HERO

**Goal:** the yellow-and-red Kaycee rotary switch photo fills the screen and sells "safety + performance" in one glance.

**Layout (desktop):** Full-bleed 100 svh. `assets/img/hero-rotary-switch.webp` (2200×1116, switch sits on the right third, soft white studio on the left) is the background at `object-fit: cover; object-position: 78% 50%`. Over the left half, a **dark-to-transparent gradient scrim** in `--ink` (from 92% at the left edge to 0% at 55% width) so white text is readable while the product stays bright and untouched. Content column occupies the left 44%.

Bottom-left: a thin caption in mono `KAYCEE / ROTARY SWITCH · 1 – OFF – 2`. Bottom-right: a **spec plate** card (frosted dark, 1 px hairline, 12 px radius) containing four rows with primary-colour 1 px dividers: `01 Superior Safety` · `02 Long Durability` · `03 High Performance` · `04 Trusted Quality`.

**Copy (verbatim):**
- Eyebrow (mono, uppercase, primary-colour pulsing dot): `PREMIUM ELECTRICAL PRODUCTS`
- H1 (two lines, display font, `clamp(48px, 6.4vw, 92px)`, line-height 0.98):
  **Built for Safety,**
  **Designed for Performance**
- Sub (19 px, max 54 ch, 80% white): "High quality electrical products manufactured with precision, reliability and innovation for a smarter, safer tomorrow."
- Buttons: `Explore Our Products` (primary → `#products`) · `About Our Company` (ghost white → `#about`)
- Trust row (three items, mono 12 px, separated by 1 px × 16 px rules): `75+ YEARS OF EXPERIENCE` · `MUMBAI-BASED LISTED COMPANY` · `MANAGED BY SALZER ELECTRONICS LTD.`
- Floating stat badge overlapping the product's lower-left (white card, 16 px radius, primary left rule): big `75+` in display font, small `Years of Experience`, and a second line `Manufacturing · Ambernath, Thane`.

**Hero motion (GSAP timeline on load):**
1. 0.0 s — image starts at scale 1.12 with 8 px blur and eases to 1.0 / 0 px over 1.6 s (`power3.out`).
2. 0.2 s — scrim fades in (400 ms).
3. 0.35 s — eyebrow dot pops; H1 lines rise from under a clip mask, line by line (120 ms stagger, `expo.out`, 900 ms).
4. 0.8 s — sub, buttons, trust row fade-up 20 px (80 ms stagger).
5. 1.0 s — stat badge slides in from the left with a slight overshoot; spec plate rows draw their dividers left→right (100 ms stagger).
6. Continuous — the switch image has a mouse parallax of ±10 px (desktop only); the badge floats 6 px up/down over 4 s.
7. Scroll — image scales to 1.08 and darkens 20%; text parallaxes at 0.35× (ScrollTrigger scrub 0.6).
8. Scroll cue: mono `SCROLL` + a 40 px vertical line that repeatedly draws down.

**Mobile:** image cropped to the switch (`object-position: 82% 50%`), scrim becomes bottom-to-top, content stacks at the bottom, spec plate becomes a horizontal snap row under the hero.

## 4.2 `#about` — ABOUT OUR COMPANY

**Copy (verbatim from site):**
- Label `01 About Our Company`
- H2: **"From a Vision to a Trusted Company"**
- Lead: "Kaycee Industries delivers reliable, precision-engineered solutions."
- P1: "Kaycee Industries Ltd is more than 75 years old pre-independence incorporated Company presently managed by Salzer Electronics Ltd."
- P2: "Kaycee Industries Ltd, a Mumbai-based listed company is leading the Electrical Industry by showing consistent quality performance in switches along with development of existing products & new products as per the applications."
- P3: "Kaycee has manufacturing setup located in Ambernath, Thane where highly motivated and skilled workforce of around 200 people dedicated to deliver the products as per customers' need."
- P4: "The promoters of the Company are M/s Salzer Electronics Limited and Mr. Doraiswamy Rangaswamy."
- Fact chips: `Legacy — 75+ Years` · `Headquarters — Mumbai` · `Managed by — Salzer Electronics`
- Three-word manifesto (large, stacked, one per line, mono numbers): `01 Modern Facility.` `02 Skilled People.` `03 Better Together.`
- Location tag over factory image: `Ambernath, Thane`
- Stat strip (count-up): `10 M+ Satisfied Clients` · `182+ Expert Team` · `50+ Active Projects` · `75+ Years of Experience`
- Product-family ticker (infinite, mono, uppercase, separated by primary dots): Rotary Switch · Cam Switch · Breaker Control Switch · Counter · Limit Switch · Hour Meters · Relay · Toggle & Micro Switch · Forward-Reverse Switch
- Link: `Read More About Us` → `#contact` (single page; keep the label).

**Layout:** Editorial asymmetric grid on `--paper`.
- Row 1: left 5 cols = label + H2 + lead + paragraphs + chips. Right 7 cols = `assets/img/products-range.webp` (1535×672 flat-lay of the whole range) in a 24 px-radius frame that **bleeds off the right edge of the viewport**, with a small overlapping pill `PRODUCT RANGE` and a stat tag `~200 Skilled workforce dedicated to customer needs`.
- Row 2: left 7 cols = `assets/img/factory-line.webp` (1254×1254 square) cropped to 4:3 with the `Ambernath, Thane` tag; right 5 cols = the stacked manifesto (`Modern Facility. / Skilled People. / Better Together.`) in display type, `01/02/03` in primary mono, then the `Read More About Us` link.
- Row 3: full-width stat strip with hairline dividers, then the ticker.

**Motion:** images reveal with `clip-path: inset(0 100% 0 0 round 24px)` → `inset(0)`; paragraphs stagger; manifesto lines slide in from the right one by one; stats count up (1.4 s, `power2.out`); ticker 36 px/s, pauses on hover.

## 4.3 `#products` — OUR PRODUCTS (includes `#downloads`)

**Copy (verbatim):**
- Label `02 Our Products`
- H2: **"Engineered Products for Demanding Applications"**
- Intro: "We offer a wide range of industrial products like Rotary switch, Cam switch, Breaker control switch, Counter, Limit switch, Hour meters, Relay, Toggle & Micro switch, Forward-reverse switch etc."
- Category tabs (five, numbered): `01 Switches` · `02 Hour Meters` · `03 Counters` · `04 Rotary Toggles` · `05 Cable Lugs`
- Featured products (three cards, exact copy and images):
  1. `01 / 03 · Counters` — **Stroke Counter** — "Accurately monitor and count every stroke for consistent, reliable performance." — `assets/img/products/stroke-counter.webp` (1000×627, alt: "Kaycee stroke counter with crank lever and red reset knob")
  2. `02 / 03 · Counters` — **Digital Counter** — "Clear, real-time readings that make every count easy to track and manage." — `assets/img/products/digital-counter.webp` (1000×742, alt: "Kaycee Digicount R digital counter with LED display and relay")
  3. `03 / 03 · Rotary Toggles` — **Rotary Toggle** — "Smooth rotary control designed for quick selection and dependable everyday operation." — `assets/img/products/rotary-toggle.webp` (823×812, alt: "Kaycee grey rotary toggle switch enclosure")
  Each card button: `View Product` → `#contact` (single page).
- Full-catalogue tile (`#downloads` anchor lives here): image `assets/img/products-range.webp`, eyebrow `Full Catalogue`, title **"View All Products"**, line `Switches · Hour Meters · Counters · Rotary Toggles · Cable Lugs`, button `View All Products` → `#contact`, plus a mono note `Catalogue PDFs on request — sales@kayceeindustries.in`.

**Layout:** Dark section (`--ink`) for contrast against About. Header row with H2 left and intro right. Category tabs as a horizontal **segmented rail** with a sliding primary indicator. Below: a **3 + 1 bento**: three product cards (each = product image on a `--paper-2` studio tile with a subtle radial highlight, category chip, name, description, `View Product` arrow link) and one wide "Full Catalogue" tile that spans the remaining width with the range image bleeding out of its right edge.

**Motion:** cards enter with a 3D tilt-in (rotateX 10° → 0, translateY 40 px → 0, 90 ms stagger). Hover: product image scales 1.06 and lifts 6 px with a soft primary-tinted shadow; the tile background brightens; the arrow icon nudges. Tab click animates the indicator with a spring and re-orders cards with a FLIP transition (400 ms). On mobile the three cards become a horizontal snap carousel with a thin primary progress bar and `01 / 03` counter.

## 4.4 `#why` — WHY CHOOSE US

**Copy (verbatim):**
- Label `03 Why Choose Us`
- H2: **"Precision in Every Detail, Confidence in Every Product."**
- Intro: "Built around your needs, we deliver dependable products with consistent quality, precise engineering, and lasting performance."
- Big stat: **`89 %`** — "Growth in the past 2 years"
- Value chips: `Reliable Products` · `Technical Expertise` · `Competitive Value`
- Cards:
  1. `01` **Experienced Team** — "Our team brings extensive industrial and technical product experience from diverse backgrounds, enabling us to understand customer requirements and deliver practical solutions."
  2. `02` **Wide Range of Products** — "We offer a broad range of industrial and technical products, giving our clients more options and making it easier to find the right solution for their requirements."
  3. `03` **Competitive Pricing** — "We provide reliable, high quality products at fair and competitive prices, helping our clients achieve greater value without compromising on reliability."

**Layout:** Light section. Left sticky column (4 cols): label, H2, intro, then the `89 %` rendered huge (display font, 160 px, primary colour) with a thin **circular progress ring** that fills to 89% on scroll, and the three value chips. Right column (8 cols): the three cards as **horizontal ledger rows** (not boxes): mono number, title, paragraph, with hairline dividers; each row has a thin primary bar on the left that grows on hover. Rows are wide, generous, editorial.

**Motion:** ring draws (`stroke-dashoffset`, 1.6 s) and the number counts to 89; rows reveal with a left-to-right hairline draw then text fade; hover bar grows 2 px → 6 px.

## 4.5 `#clients` — OUR CLIENTS

**Copy (verbatim):**
- Label `04 Our Clients`
- H2: **"We have many Clients Worldwide!"**
- Intro: "Thousands of Companies are going with Kaycee Industries Ltd to Understand, Track and Grow their Market Share!"

**Logos (exactly these 8 files, with alt text):**
| File | Alt |
|---|---|
| `assets/img/clients/aditya-birla.webp` (360×183) | Aditya Birla Group logo |
| `assets/img/clients/abb.webp` (360×138) | ABB logo |
| `assets/img/clients/bhel.webp` (246×200) | BHEL logo |
| `assets/img/clients/indian-railways.webp` (200×200) | Indian Railways logo |
| `assets/img/clients/barc.webp` (197×200) | BARC – Bhabha Atomic Research Centre logo |
| `assets/img/clients/blue-star.webp` (360×119) | Blue Star Infotech logo |
| `assets/img/clients/cs-electric.webp` (254×200) | C&S Electric logo |
| `assets/img/clients/birla-gold.webp` (215×200) | Birla Gold Premium Cement logo |

**Layout:** Light section. Header left. Logos in a **two-row infinite marquee**, rows moving in opposite directions, each logo inside a 180×96 white tile with hairline border; logos rendered `grayscale(1) opacity(.7)` and turning full-colour on hover. Below the marquee a single line in mono: `TRUSTED BY POWER · RAILWAYS · RESEARCH · INFRASTRUCTURE · ELECTRICAL OEMs`.

**Motion:** marquee 40 px/s, pause on hover, `will-change: transform`; reduced motion → static wrapped grid of the 8 tiles.

## 4.6 `#network` — BUSINESS NETWORK

**Copy (verbatim):**
- Label `05 Business Network`
- H2: **"Find our factories and outlets across key locations."**
- Stat tiles: `1 Head Office` · `10 Branch Offices` · `109 Stock Points` · `2 Factories`
- Map title: **"Our Presence Across India"** · HO coordinate tag `18.94°N · 72.84°E`
- Legend: `Head Office` · `Branch Office` · `Distribution Network`
- Head Office card: **Mumbai (HO)** — Office `+91 22 22613521/22/23` (`tel:+912222613521`) · Mobile `9320664888` (`tel:+919320664888`) · Call & WhatsApp `7498899970` (`https://wa.me/917498899970`)
- Branch Offices ("Call us directly") — render all 10:
  | # | City | State | Phone |
  |---|---|---|---|
  | 01 | Bangalore | Karnataka | +91 93428 53324 |
  | 02 | Kolkata | West Bengal | +91 93390 40692 |
  | 03 | Delhi | Delhi | +91 99302 61998 |
  | 04 | Punjab | Punjab | +91 90174 98027 |
  | 05 | Rajasthan | Rajasthan | +91 92148 33194 |
  | 06 | Chennai | Tamil Nadu | +91 99410 11095 |
  | 07 | Indore | Madhya Pradesh | +91 99770 05208 |
  | 08 | Pune / Nashik | Maharashtra | +91 83695 89081 |
  | 09 | Gujarat | Gujarat | +91 99251 59373 |
  | 10 | Mumbai | Maharashtra | +91 93248 03914 |
  Link: `View all 10 branch offices` (expands the list on mobile; shows 5 then reveals all).

**Layout:** Dark section (`--ink`). Left 7 cols: an **inline SVG map of India** drawn in 1 px lines at 22% white (all states/UTs as paths; the previous draft's state list — Andaman and Nicobar Islands through West Bengal — is the full set), with pins: HO Mumbai as a primary-colour pin with a pulse ring, 9 branch cities as smaller white pins (Bangalore, Kolkata, Delhi, Punjab, Rajasthan, Chennai, Indore, Pune/Nashik, Gujarat) and Maharashtra tinted at 12% primary to signal both factories. Thin dashed arcs from Mumbai to each branch. Hovering a pin highlights the matching row on the right. Right 5 cols: stat tiles (2×2), the HO card, then the branch list as a compact ledger with `tel:` links and a phone icon that fills primary on hover.

**Motion:** map outline draws on scroll (`stroke-dashoffset`, 2 s), pins pop with spring stagger, arcs draw after pins, pulse ring loops 2.4 s; stat numbers count up.

## 4.7 `#testimonials` — TESTIMONIALS

**Copy (verbatim):**
- Label `06 Testimonials`
- Intro: "Hear directly from the businesses and professionals who rely on our products every day."
- Three testimonials (initials avatar, name, city):
  1. **AK — Arun Kumar, Chennai:** "We have been using their products for our business requirements and have had a consistently positive experience. The product quality is reliable, performance has been good, and the team has always been responsive whenever we needed support. Their professionalism and commitment to quality make them a dependable partner."
  2. **SR — Suresh Raj, Coimbatore:** "What stands out for us is the consistency in product quality and service. From understanding our requirements to delivering the products on time, the entire process has been smooth and professional. We are happy with the reliability of their products and look forward to continuing our association."
  3. **PK — Praveen Kumar, Bengaluru:** "We have been impressed with the quality, performance, and attention to detail throughout our experience with the company. Their products have been dependable for our day to day requirements, and their team has been helpful and professional whenever we needed assistance. Overall, they have been a reliable choice for our business."
- Counter `01 / 03`.

**Layout:** Light section. A **single large quote stage** (max 880 px, display serif-less quote at 28–32 px, a large primary-colour opening quote mark drawn as an outlined glyph) with the three names listed as a vertical **selector rail** on the left (`01 Arun Kumar Chennai`, …). Clicking / auto-rotating (7 s) crossfades the quote with a slight upward motion; a thin progress bar under the active name shows time to the next quote. Avatar = initials in a primary-tinted circle.

**Motion:** quote text crossfade + 16 px rise (500 ms), rail indicator slides, progress bar 7 s linear, pause on hover/focus; swipe on touch.

## 4.8 `#contact` — CONTACT US

**Copy (verbatim):**
- Label `07 Contact Us`
- H2/intro: "Share your requirements with us, and our team will get back to you with the right solution."
- Contact rows (with icons and links):
  - **Phone Number** — `+91 22 22613521 / 22 / 23` → `tel:+912222613521`
  - **Email Address** — `sales@kayceeindustries.in` → `mailto:sales@kayceeindustries.in`
  - **Working Hours** — `Mon – Sat: 9:30 AM – 5:15 PM` / `Sunday: Closed`
  - **Location** — `32, Ramjibhai Kamani Road, Ballard Estate, Mumbai 400 001` → `https://maps.google.com/?q=Kaycee+Industries+Ltd,+32+Ramjibhai+Kamani+Road,+Ballard+Estate,+Mumbai+400001`
  - **Additional Contact** — `+91 93428 53324` · `+91 99302 61998` · `+91 92148 33194` · `+91 99770 05208` · `+91 99251 59373` · Mobile `9320664888` · Call & WhatsApp `7498899970` (`https://wa.me/917498899970`)
  - Map caption: `Kaycee Industries Ltd · Ballard Estate`
- Form title: **"Send Us Message"** — "Fill in the details below and our sales team will reach out."
  - Fields + validation messages (verbatim): `Enter Your Name` ("Please enter your name.") · `Enter Your Email` ("Please enter a valid email address.") · `Enter Your Mobile Number` ("Please enter a valid mobile number.") · `Select Your Product` ("Please select a product.") with options `Switches, Hour Meters, Counters, Rotary Toggles, Cable Lugs, Stroke Counter, Digital Counter, Rotary Toggle` · `Enter Your Message`
  - Submit: `Send Us Message`
  - Success: "Thank you. Your message has been sent." / "Our team will get back to you with the right solution." / link `Send another message`
- Map embed: `https://www.google.com/maps?q=Kaycee+Industries+Ltd,+32+Ramjibhai+Kamani+Road,+Ballard+Estate,+Mumbai+400001&output=embed` (lazy, `loading="lazy"`, styled `grayscale(1) contrast(1.05)` with a primary pin overlay; coordinates 18.94°N, 72.84°E).

**Layout:** `--paper` section. Two-column: left 5 cols = the contact ledger (icon, label, value, copy-to-clipboard micro-button; "Additional Contact" as a wrap of small phone pills) with the map card beneath it; right 7 cols = the form inside a white card with a 24 px radius, floating labels, 2 px primary underline focus, product `<select>` styled custom, consent-free (as per site). Submit posts to a configurable endpoint (`data-endpoint`), with loading spinner → check-mark morph → success state replacing the form.

**Motion:** ledger rows stagger; map card slides up; input underline animates; success state morphs; phone pills fill primary on hover.

## 4.9 FOOTER (same content as supplied)

Dark (`--ink-2`). Four columns:
1. `assets/img/kaycee-logo-light.webp` + "Premium electrical products — built for safety, designed for performance." + three social icon buttons (links `#` until the client supplies URLs).
2. **Navigation:** Home · About Us · Clients · Products · Business Network · Investors (external) · Downloads (`#downloads`).
3. **Products:** Switches · Hour Meters · Counters · Rotary Toggles · Cable Lugs (each → `#products`).
4. **Contact:** `+91 22 22613521 / 22 / 23` · `sales@kayceeindustries.in` · `Working Hours: Mon – Sat: 9:30 AM – 5:15 PM, Sunday: Closed` · `32, Ramjibhai Kamani Road, Ballard Estate, Mumbai 400 001`.
Bottom bar: giant outlined `KAYCEE` watermark (display font, 12% white, clipped) behind `© 2026. Kaycee Industries. All Rights Reserved` and `Website Developed by Samantha Technologies` (→ `https://samanthatechnologies.com`).
Floating action cluster (bottom-right, appears after 600 px): `WhatsApp us` (→ `https://wa.me/917498899970`) and `Call now` (→ `tel:+919320664888`), plus a back-to-top pill with a circular scroll-progress ring.

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

# 6. DESIGN SYSTEM (new — primary `#0997E0`)

## 6.1 Colour tokens
```css
:root{
  --primary:      #0997E0;   /* Kaycee blue — CTAs, active states, pins, progress lines, key numerals */
  --primary-600:  #0781C1;   /* hover */
  --primary-700:  #066A9E;   /* pressed / text-on-light when needed (AA on paper) */
  --primary-100:  #D6EEFB;   /* tints, chips, avatar circles */
  --primary-050:  #EEF7FD;   /* very light wash */
  --primary-glow: rgba(9,151,224,.28);

  --ink:          #0A1626;   /* deep blue-black — hero scrim, Products & Network sections */
  --ink-2:        #101F33;   /* elevated dark surface, footer */
  --ink-3:        #1A2C44;   /* dark card / border on dark */

  --paper:        #F7FAFC;   /* light section background */
  --paper-2:      #EDF2F6;   /* product tiles, alt surfaces */
  --white:        #FFFFFF;

  --text:         #0F1B2B;
  --text-2:       #4B5B6B;   /* muted */
  --text-on-dark: rgba(255,255,255,.86);
  --text-on-dark-2: rgba(255,255,255,.62);

  --signal:       #FFC72C;   /* switch-plate yellow — ONE highlight per page max (hero eyebrow dot or 89% ring cap) */
  --signal-2:     #E63946;   /* switch-handle red — form errors only */

  --line:         rgba(15,27,43,.10);
  --line-dark:    rgba(255,255,255,.10);
}
```
- Section rhythm: Hero (dark scrim) → About (paper) → Products (ink) → Why Choose Us (white) → Clients (paper) → Business Network (ink) → Testimonials (white) → Contact (paper) → Footer (ink-2).
- Primary discipline: `#0997E0` on at most one hero element per viewport plus micro-states; large fills are ink or paper, never big blue blocks.
- Never place primary-coloured text on white below 24 px — use `--primary-700` for small text to pass AA.
- Surfaces: hairline borders, 16–24 px radii on cards, 999 px on chips/buttons. Shadows only on hover: `0 24px 48px -24px rgba(10,22,38,.28), 0 0 0 1px var(--line)`. Dark sections carry a faint 4% dot-grid texture.

## 6.2 Typography (new fonts, Google Fonts, `display=swap`, preconnect)
- **Display / headings:** `Bricolage Grotesque` 600–800, `font-optical-sizing: auto`, letter-spacing −0.025em at ≥ 48 px. Confident, engineered, distinctive.
- **Body / UI:** `Manrope` 400–600, 17 px / 1.6.
- **Mono (labels, numbers, coordinates, spec rows):** `Geist Mono` 400–500, 12–13 px, uppercase, tracking +0.08em, `tabular-nums`.
- Scale (fluid): h1 `clamp(48px,6.4vw,92px)`; h2 `clamp(34px,4.2vw,60px)`; h3 `26px`; lead `20px`; body `17px`; small `14px`; mono `12–13px`.

## 6.3 Grid & spacing
12 columns, 1320 px max, 24 px gutters, outer margin `clamp(16px,4vw,48px)`. Section padding `clamp(88px,11vw,152px)`. Section label + 32 px hairline at the top-left of every section. Adjacent dark/light sections overlap by −40 px with a 32 px rounded top edge so the page reads as layered planes rather than stacked boxes.

## 6.4 Components
- **Buttons:** 52 px, 20 px side padding, pill. Primary = `--primary` fill, white text; hover = `--primary-600` with a left→right lighter sweep (350 ms) and the arrow icon nudging 4 px; active scale 0.98. Ghost = 1 px white (on dark) / ink (on light) border; hover fills 8%.
- **Chips:** mono, 1 px border, 999 px; active = primary fill.
- **Cards:** white or `--ink-3`, hairline border, 20 px radius, 24–32 px padding; hover lift 6 px.
- **Links:** 1 px underline offset 4 px → 2 px primary on hover.
- **Inputs:** 56 px, floating label, bottom 2 px underline animating to primary on focus, error in `--signal-2`.
- **Focus ring:** 2 px primary, 3 px offset, always visible on keyboard focus.

---

# 7. MOTION SPEC (GSAP 3 + ScrollTrigger + Lenis; or Framer Motion in React)

- Global: Lenis smooth scroll (lerp 0.085). Reveals use `expo.out` / `power3.out`, 500–900 ms, stagger 40–90 ms, `once: true`. Animate only `transform`, `opacity`, `clip-path`, `stroke-dashoffset`. `will-change` applied only during animation.
- Page load: hero timeline (§4.1). No full-screen preloader; the image blur-to-sharp *is* the entrance.
- Navbar: transparent → frosted on scroll; progress line; sliding active dot; magnetic hover (±6 px) on "Enquire Now".
- Custom cursor (≥ 1024 px, pointer: fine): 6 px primary dot + 28 px ring lagging 120 ms; over product cards the ring grows to 72 px with `VIEW ↗`; over the testimonial stage it shows `DRAG`; over the map it shrinks to a crosshair.
- Scroll reveals: headline word/line clip-mask rise; paragraph line stagger; images `clip-path` wipes; counters count-up; SVG strokes draw (map, ring, spec dividers).
- Parallax: hero image 1.0 → 1.08 with darkening; About range image at 0.9× speed; dark-section dot-grid at 0.95×.
- Micro-interactions: button sweep + arrow nudge; product card tilt (max 6°, `perspective: 1000px`, spring reset); logo tiles grayscale → colour; branch phone pills fill; copy-to-clipboard toast "Copied"; testimonial progress bar; back-to-top ring; WhatsApp button subtle 1.03 pulse every 6 s.
- Section transitions: overlapping rounded planes (§6.3) plus a 1 px primary hairline that draws across at each section top as it enters.
- Reduced motion: disable parallax, cursor, marquee auto-scroll, tilt, pulses; keep ≤ 200 ms opacity fades; hero renders sharp immediately.

---

# 8. TECH & DELIVERABLE

- Preferred: **Next.js 15 (App Router) + TypeScript + Tailwind CSS 4 + GSAP 3 (ScrollTrigger) + Lenis**, with all copy/contacts/products/branches in one typed `lib/content.ts`. Acceptable: a static `index.html` + `assets/css/style.css` + `assets/js/main.js` (GSAP/Lenis from CDN). In both cases keep the image paths exactly as in §5.
- SEO: title and meta description from §2; `theme-color #0A1626`; Open Graph image `assets/img/hero-rotary-switch.webp`; JSON-LD `Organization` + `LocalBusiness` (name, address `32 Ramjibhai Kamani Road, Ballard Estate, Mumbai 400001`, telephone `+91-22-22613521`, email `sales@kayceeindustries.in`, openingHours `Mo-Sa 09:30-17:15`, geo `18.94, 72.84`).
- Accessibility: semantic landmarks, skip link ("Skip to content"), aria-labels on icon buttons, marquee and carousels pausable, contrast ≥ 4.5:1, keyboard-operable tabs/testimonial rail, form errors announced via `aria-live`.
- Responsive: 360 / 768 / 1024 / 1280 / 1536; zero horizontal scroll at 360 px.

---

# 9. QUALITY GATE — verify before returning

- [ ] Nav has exactly: Home, About Us, Clients, Products, Business Network, Investors, Downloads, Contact Us + phone chip + "Enquire Now".
- [ ] Sections in order: Hero, About, Products (with `#downloads`), Why Choose Us, Clients, Business Network, Testimonials, Contact, Footer — nothing added, nothing removed.
- [ ] All copy verbatim from §4; all phones (HO, mobile, WhatsApp, 10 branches, 5 additional), email `sales@kayceeindustries.in`, hours, address, map link present.
- [ ] Only the 19 supplied image files are used; hero uses `hero-rotary-switch.webp`, all 8 client logos, all 3 product photos, both about images, both logo variants, favicon.
- [ ] Primary `#0997E0` used per §6; fonts Bricolage Grotesque / Manrope / Geist Mono only.
- [ ] Hero loads sharp within 2 s, product visible above the fold on mobile and desktop.
- [ ] Reduced-motion path works; Lighthouse ≥ 95 / 100 / 100 / 100.
- [ ] Looks bespoke: asymmetric hero with scrim, editorial About, dark bento Products, ledger Why-Us, dual marquee, drawn India map, quote stage, ledger Contact.

Return the complete codebase — every file in full, no omissions — followed by a 5-line "Client checklist" (social URLs, form endpoint, catalogue PDFs for Downloads, Investors URL confirmation, stat verification).

=== PROMPT END ===

---

## APPENDIX — notes for Samantha Technologies (not part of the prompt)

**What changed from v1:** v1 was reconstructed from web search because no files were supplied. v2 is built entirely from the uploaded `kaycee-industries-website.zip` (the earlier Samantha Technologies draft). All copy, numbers, phone lists, testimonials, logos and images now come from that package; the email is `sales@kayceeindustries.in` as in the package (v1 had `.com` from public listings — confirm with the client which is live).

**Deliberately discarded from the package:** Archivo + Plex Mono fonts, the navy `#071B2C` palette, all layouts, component styles and the GSAP choreography in `main.js`. Kept: `#0997E0` (as instructed) and every asset.

**Assets:** copied into this repo at `assets/img/` (19 files, 1.5 MB) so the prompt's paths resolve as-is.

**Items the client should confirm before launch:** social media URLs (footer icons currently `#`), form endpoint, catalogue PDFs for the Downloads anchor, whether Investors should link to `kayceeindustries.com/home/investors`, and the marketing stats (`10 M+ Satisfied Clients`, `182+ Expert Team`, `50+ Active Projects`, `89 % growth`, `109 Stock Points`, `2 Factories`) which are carried over verbatim from the draft.
