# KAYCEE INDUSTRIES LTD — MASTER PROMPT (v2.1)
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

## 4.4 `#why` — WHY CHOOSE US  (new layout: pinned horizontal scroll)

**Copy (verbatim):**
- Label `03 Why Choose Us`
- H2: **"Precision in Every Detail, Confidence in Every Product."**
- Intro: "Built around your needs, we deliver dependable products with consistent quality, precise engineering, and lasting performance."
- Big stat: **`89 %`** — "Growth in the past 2 years"
- Value chips: `Reliable Products` · `Technical Expertise` · `Competitive Value`
- Panels:
  1. `01` **Experienced Team** — "Our team brings extensive industrial and technical product experience from diverse backgrounds, enabling us to understand customer requirements and deliver practical solutions."
  2. `02` **Wide Range of Products** — "We offer a broad range of industrial and technical products, giving our clients more options and making it easier to find the right solution for their requirements."
  3. `03` **Competitive Pricing** — "We provide reliable, high quality products at fair and competitive prices, helping our clients achieve greater value without compromising on reliability."

**Layout:** White section, **pinned horizontal-scroll stage** (desktop). The section pins for ~250 vh; as the user scrolls, a track slides left through four full-viewport-width panels:
- Panel 0 (intro): label + H2 + intro + the three value chips, set flush-left with a huge outlined `89` glyph (display font, 40 vh tall, 1 px primary outline) sitting behind the text; the caption `% Growth in the past 2 years` runs vertically along the glyph's right edge in mono.
- Panels 1–3: each is a full-width "spread" with a giant mono index `01` / `02` / `03` at 28 vh height in `--primary-050`, the title in display type at `clamp(40px,5vw,72px)`, and the paragraph in a 44-ch measure placed bottom-right. Each panel gets a different vertical anchor for its text (top-left, centre-left, bottom-right) so the spreads feel composed, not repeated.
- A fixed bottom bar during the pin: a thin primary progress line and the current index `01 — 04`; a `Drag` cursor label appears on hover (the track is also draggable).
- The `89 %` numeral fills from outline to solid primary (`clip-path` reveal) as panel 0 scrolls out.

**Mobile / reduced motion:** no pinning — the four panels stack vertically as tall cards separated by hairlines, the `89` glyph sits behind the intro at 24 vh, the chips wrap.

**Motion:** ScrollTrigger pin + `scrub: 0.8`; panel text parallaxes 0.85× against the track; giant indices parallax 1.15×; progress line scrubs; chips fade-up on entry.

## 4.5 `#clients` — OUR CLIENTS  (new layout: spotlight logo wall, no marquee)

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

**Layout:** `--paper` section. **No marquee, no logo strip.** The H2 is set very large (`clamp(40px,6vw,88px)`, two lines) and left-aligned; the intro sits to its right as a narrow 36-ch column. Below, a **staggered 4×2 logo wall** where the tiles are *not* uniform: tile heights alternate (160 px / 200 px) and the second row is offset by half a tile, giving a brick/masonry rhythm. Each tile is white, 20 px radius, hairline border, with the logo centred at 60% width, rendered in grayscale at 55% opacity. A **cursor spotlight** (radial 320 px, `--primary-050` → transparent) follows the mouse across the wall and lifts the colour and opacity of whatever tile it passes over; the hovered tile also shows a mono caption at its bottom-left (e.g. `INDIAN RAILWAYS`), taken from the alt text without the word "logo".

Beneath the wall: a single hairline, then a full-width **statement line** in display type at 28 px: "Thousands of Companies are going with Kaycee Industries Ltd" with "Understand, Track and Grow their Market Share" set in primary on a second line — this is the intro sentence re-typeset as the section's closing beat (do not duplicate it above; use the intro either as the side column *or* as this statement line, not both — choose the statement line).

**Motion:** tiles rise into place with a 3D flip (rotateY 24° → 0) in a diagonal stagger from top-left; spotlight follows the cursor with 120 ms lag; on touch devices the spotlight is replaced by a slow automatic sweep across the wall (12 s loop) that colours tiles as it passes. Reduced motion → tiles in full colour, static.

## 4.6 `#network` — BUSINESS NETWORK  (new layout: full-bleed map backdrop + branch rail)

**Copy (verbatim):**
- Label `05 Business Network`
- H2: **"Find our factories and outlets across key locations."**
- Stat tiles: `1 Head Office` · `10 Branch Offices` · `109 Stock Points` · `2 Factories`
- Map title: **"Our Presence Across India"** · HO coordinate tag `18.94°N · 72.84°E`
- Legend: `Head Office` · `Branch Office` · `Distribution Network`
- Head Office: **Mumbai (HO)** — Office `+91 22 22613521/22/23` (`tel:+912222613521`) · Mobile `9320664888` (`tel:+919320664888`) · Call & WhatsApp `7498899970` (`https://wa.me/917498899970`)
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
  Link: `View all 10 branch offices`.

**Layout:** Dark section (`--ink`), **no two-column panel**. The India map is the **full-bleed backdrop of the whole section**: an inline SVG (all states/UTs as 1 px paths at 16% white) scaled so India spans ~70% of the section height, anchored right of centre, fading to `--ink` at the edges with a radial mask. Pins are placed on the backdrop: Mumbai HO as a 14 px primary pin with a pulse ring; the nine branch cities (Bangalore, Kolkata, Delhi, Punjab, Rajasthan, Chennai, Indore, Pune/Nashik, Gujarat) as 8 px white pins; Maharashtra filled at 10% primary for the two factories. The legend sits as three small mono items pinned to the map's bottom-right, the coordinate tag `18.94°N · 72.84°E` next to the HO pin.

Content floats over the backdrop in three layers:
1. **Top band:** label + H2 on the left (max 12 ch per line, display type), and the four stat tiles arranged as a **vertical stack on the far right** (each: big numeral in display type, small label, hairline between) — not a 2×2 grid.
2. **Middle:** the `Our Presence Across India` title sits small, in mono, under the H2.
3. **Bottom band — Branch Rail:** a full-width **horizontal scroll rail** of 11 cards: the first card is the Head Office card (wider, 360 px, primary top border, containing the three HO phone rows and a `HO` monogram); the next ten are branch cards (260 px each) showing the index, city in display type, state in mono, and the phone as a full-width `tel:` button with a phone icon. The rail is draggable, has snap points, a thin primary progress line and prev/next buttons at its right end. Hovering or focusing a branch card highlights its pin on the backdrop (pin grows and a hairline connects card → pin); the reverse also works. `View all 10 branch offices` becomes a text link that scrolls the rail to the end.

**Mobile:** map backdrop is cropped to the west coast (HO pin visible), stats collapse to a single horizontal row of four small numerals, rail keeps horizontal snap-scrolling.

**Motion:** map paths draw (`stroke-dashoffset`, 2 s) as the section enters; pins pop with spring stagger from Mumbai outward by distance; pulse ring loops 2.4 s; stat numerals count up; rail cards enter from the right with 60 ms stagger; the card↔pin connector line draws on hover (250 ms).

## 4.7 `#testimonials` — TESTIMONIALS  (new layout: scroll card-stack, no tabs)

**Copy (verbatim):**
- Label `06 Testimonials`
- Intro: "Hear directly from the businesses and professionals who rely on our products every day."
- Three testimonials (initials avatar, name, city):
  1. **AK — Arun Kumar, Chennai:** "We have been using their products for our business requirements and have had a consistently positive experience. The product quality is reliable, performance has been good, and the team has always been responsive whenever we needed support. Their professionalism and commitment to quality make them a dependable partner."
  2. **SR — Suresh Raj, Coimbatore:** "What stands out for us is the consistency in product quality and service. From understanding our requirements to delivering the products on time, the entire process has been smooth and professional. We are happy with the reliability of their products and look forward to continuing our association."
  3. **PK — Praveen Kumar, Bengaluru:** "We have been impressed with the quality, performance, and attention to detail throughout our experience with the company. Their products have been dependable for our day to day requirements, and their team has been helpful and professional whenever we needed assistance. Overall, they have been a reliable choice for our business."
- Counter `01 / 03`.

**Layout:** White section. **No name tabs, no stage/slider.** Left 4 cols: sticky column with label, intro, and the counter `01 / 03` in large mono that updates as cards pass. Right 8 cols: a **scroll-driven card stack** — the three testimonial cards are stacked in the same sticky slot; as the user scrolls, card 1 scales down to 0.94 and darkens slightly while card 2 slides up over it, then card 3 over card 2, leaving a visible 16 px "deck" edge of the previous cards beneath. Each card: `--paper` background, 28 px radius, hairline border, 48 px padding; the quote in display type at `clamp(22px,2.2vw,30px)`; a large primary opening quote mark (outline glyph) at the top-left; footer row with the initials avatar (48 px circle, `--primary-100`, initials in primary-700), name in body 600, city in mono. Card 2 is offset 24 px to the right and card 3 24 px to the left of centre so the deck has a slight fan.

**Mobile:** the same card-stack works vertically (sticky slot 70 svh); counter moves above the deck.

**Motion:** ScrollTrigger scrub per card (scale, y, brightness); counter digits roll (slot-machine flip) when the active card changes; quote text on the active card reveals line-by-line the first time it becomes active; reduced motion → cards simply stacked vertically with 24 px gaps.

## 4.8 `#contact` — CONTACT US  (new layout: split-screen, pinned form)

**Copy (verbatim):**
- Label `07 Contact Us`
- Heading/intro: "Share your requirements with us, and our team will get back to you with the right solution."
- Contact items:
  - **Phone Number** — `+91 22 22613521 / 22 / 23` → `tel:+912222613521`
  - **Email Address** — `sales@kayceeindustries.in` → `mailto:sales@kayceeindustries.in`
  - **Working Hours** — `Mon – Sat: 9:30 AM – 5:15 PM` / `Sunday: Closed`
  - **Location** — `32, Ramjibhai Kamani Road, Ballard Estate, Mumbai 400 001` → `https://maps.google.com/?q=Kaycee+Industries+Ltd,+32+Ramjibhai+Kamani+Road,+Ballard+Estate,+Mumbai+400001`
  - **Additional Contact** — `+91 93428 53324` · `+91 99302 61998` · `+91 92148 33194` · `+91 99770 05208` · `+91 99251 59373` · Mobile `9320664888` · Call & WhatsApp `7498899970` (`https://wa.me/917498899970`)
  - Map caption: `Kaycee Industries Ltd · Ballard Estate`
- Form title: **"Send Us Message"** — "Fill in the details below and our sales team will reach out."
  - Fields + validation (verbatim): `Enter Your Name` ("Please enter your name.") · `Enter Your Email` ("Please enter a valid email address.") · `Enter Your Mobile Number` ("Please enter a valid mobile number.") · `Select Your Product` ("Please select a product.") with options `Switches, Hour Meters, Counters, Rotary Toggles, Cable Lugs, Stroke Counter, Digital Counter, Rotary Toggle` · `Enter Your Message`
  - Submit: `Send Us Message`
  - Success: "Thank you. Your message has been sent." / "Our team will get back to you with the right solution." / link `Send another message`
- Map embed: `https://www.google.com/maps?q=Kaycee+Industries+Ltd,+32+Ramjibhai+Kamani+Road,+Ballard+Estate,+Mumbai+400001&output=embed` (lazy, grayscale, primary pin overlay; 18.94°N, 72.84°E).

**Layout:** **Edge-to-edge split screen, no cards, no info grid.**
- **Right half (form) is a full-height `--ink` panel that is pinned (sticky) for the section's height.** The form is rendered as **oversized editorial fields**: each field is a full-width line with the placeholder text set in display type at 24 px on dark (`Enter Your Name`, `Enter Your Email`, …), a 1 px `--line-dark` rule beneath that turns into a 2 px primary rule on focus, and no boxes. The product select is a row of **choice chips** (the eight options) instead of a dropdown, single-select, with the same validation message. The submit is a full-width 64 px primary button `Send Us Message` at the panel's bottom with a large arrow; the success state replaces the form with a centred check-mark that draws itself and the two success lines, plus `Send another message`.
- **Left half** is `--paper` and scrolls: label, the intro sentence set as the section's heading in display type (`clamp(32px,3.6vw,52px)`), then the contact items laid out as a **vertical timeline**: a 1 px primary line runs down the left with a node per item; each item shows its label in mono and its value in body 600 with the link; the "Additional Contact" node expands into a two-column list of the seven numbers as plain `tel:` links; the "Location" node holds a **small floating map card** (320×200, 16 px radius, rotated −2°, hairline, grayscale embed with a primary pin and the caption `Kaycee Industries Ltd · Ballard Estate`) that hangs off the timeline like a pinned photo. A copy-to-clipboard micro-button appears on hover for the phone and email values.

**Mobile:** stacked — left column first (timeline), then the dark form panel (not pinned) at full width.

**Motion:** the timeline line draws down as it enters; nodes pop; the map card settles from −6° to −2° with a spring; form field rules draw left→right on entry (70 ms stagger); chip selection uses a sliding primary fill; submit button shows a spinner, then the check draws (`stroke-dashoffset`, 600 ms).

## 4.9 FOOTER  (new layout: closing band + mega wordmark + single-line nav)

**Content (verbatim from supplied site):** logo `assets/img/kaycee-logo-light.webp`; line "Premium electrical products — built for safety, designed for performance."; nav links Home · About Us · Clients · Products · Business Network · Investors (external) · Downloads (`#downloads`); product links Switches · Hour Meters · Counters · Rotary Toggles · Cable Lugs (→ `#products`); contact `+91 22 22613521 / 22 / 23`, `sales@kayceeindustries.in`, `Working Hours: Mon – Sat: 9:30 AM – 5:15 PM, Sunday: Closed`, `32, Ramjibhai Kamani Road, Ballard Estate, Mumbai 400 001`; three social icon buttons (`#` until URLs are supplied); `© 2026. Kaycee Industries. All Rights Reserved`; `Website Developed by Samantha Technologies` (→ `https://samanthatechnologies.com`); floating `WhatsApp us` (→ `https://wa.me/917498899970`) and `Call now` (→ `tel:+919320664888`).

**Layout:** **Not a four-column footer.** Three horizontal bands on `--ink-2`:
1. **Closing band:** a full-width row with the brand line "Premium electrical products — built for safety, designed for performance." set in display type at `clamp(28px,3.4vw,48px)` on the left, and on the right two large "ticket" links stacked: `+91 22 22613521 / 22 / 23` and `sales@kayceeindustries.in`, each in display type with an arrow that nudges on hover, separated by hairlines. Below the tickets a small mono block: `Mon – Sat: 9:30 AM – 5:15 PM · Sunday: Closed` and the address on one line.
2. **Mega wordmark band:** the word **KAYCEE** in display type sized to the full container width (`font-size` via `clamp` or SVG text scaled to 100% width), clipped at the bottom so only the top 70% of the letters shows, filled with a vertical gradient from 14% white to 0%. The logo `kaycee-logo-light.webp` (36 px tall) sits above the wordmark's left edge with the three social icon buttons beside it. This band parallaxes slightly (letters rise 24 px as the footer enters).
3. **Utility line:** one hairline-topped row in mono 12 px: left = the seven nav links **inline**, separated by primary middle-dots (Home · About Us · Clients · Products · Business Network · Investors · Downloads); centre = the five product links inline in `--text-on-dark-2`; right = `© 2026. Kaycee Industries. All Rights Reserved` and `Website Developed by Samantha Technologies`. On mobile the three groups stack as wrapped chip rows.

The floating action cluster (`WhatsApp us`, `Call now`, back-to-top with a scroll-progress ring) sits bottom-right of the viewport and hides when the footer's closing band is in view so it never overlaps the ticket links.

**Motion:** ticket links slide their arrow and underline on hover; the wordmark letters rise with scrub parallax; the utility line fades in last; the back-to-top ring fills with scroll progress.

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
- Pinned / scrubbed sections: Why Choose Us horizontal track (pin ~250 vh, scrub 0.8, draggable); Testimonials card stack (per-card scale/y/brightness scrub, rolling counter); Contact form panel sticky for the section height. Never pin on mobile or under reduced motion.
- Micro-interactions: button sweep + arrow nudge; product card tilt (max 6°, `perspective: 1000px`, spring reset); client-wall cursor spotlight (120 ms lag) and tile flip-in; branch rail drag/snap with card↔pin connector lines; copy-to-clipboard toast "Copied"; contact choice-chips sliding fill; footer ticket-link arrows and mega-wordmark parallax; back-to-top ring; WhatsApp button subtle 1.03 pulse every 6 s.
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
- [ ] Looks bespoke and nothing like the previous draft: scrim hero, editorial About, dark bento Products, pinned horizontal Why-Us, spotlight logo wall (no marquee), full-bleed map backdrop with branch rail (no two-column panel), scroll card-stack testimonials (no tabs), split-screen Contact with pinned editorial form (no cards), three-band footer with mega wordmark (no four-column grid).

Return the complete codebase — every file in full, no omissions — followed by a 5-line "Client checklist" (social URLs, form endpoint, catalogue PDFs for Downloads, Investors URL confirmation, stat verification).

=== PROMPT END ===

---

## APPENDIX — notes for Samantha Technologies (not part of the prompt)

**What changed from v1:** v1 was reconstructed from web search because no files were supplied. v2 is built entirely from the uploaded `kaycee-industries-website.zip` (the earlier Samantha Technologies draft). All copy, numbers, phone lists, testimonials, logos and images now come from that package; the email is `sales@kayceeindustries.in` as in the package (v1 had `.com` from public listings — confirm with the client which is live).

**Deliberately discarded from the package:** Archivo + Plex Mono fonts, the navy `#071B2C` palette, all layouts, component styles and the GSAP choreography in `main.js`. Kept: `#0997E0` (as instructed) and every asset.

**v2.1 layout changes:** Why Choose Us, Clients, Business Network, Testimonials, Contact and Footer were re-laid-out so they no longer mirror the draft's structure (two-column growth/list, logo marquee, map panel + side list, name tabs + stage, info grid + form card, four-column footer). See §4.4–§4.9.

**Assets:** copied into this repo at `assets/img/` (19 files, 1.5 MB) so the prompt's paths resolve as-is.

**Items the client should confirm before launch:** social media URLs (footer icons currently `#`), form endpoint, catalogue PDFs for the Downloads anchor, whether Investors should link to `kayceeindustries.com/home/investors`, and the marketing stats (`10 M+ Satisfied Clients`, `182+ Expert Team`, `50+ Active Projects`, `89 % growth`, `109 Stock Points`, `2 Factories`) which are carried over verbatim from the draft.
