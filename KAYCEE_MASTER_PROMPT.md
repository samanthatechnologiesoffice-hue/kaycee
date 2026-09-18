# KAYCEE INDUSTRIES LTD — MASTER PROMPT
## Single-page homepage redesign (modern, trendy, AI-designed look)

> **How to use:** Copy everything from `=== PROMPT START ===` to `=== PROMPT END ===` and paste it into Claude / Cursor / Lovable / v0 / Bolt / any AI builder. Everything the builder needs (content, contact data, product list, assets, design system, animations, hero spec, QA rules) is inside. Nothing else has to be supplied.
>
> **Source of truth:** All company data below was pulled from the existing site `www.kayceeindustries.com` (page index + product catalogue PDFs), the company's Google Business Profile, BSE filings and the 2024-25 Annual Report. Items marked `⚠ VERIFY` could not be confirmed 100% and must be checked by the client before launch.

---

=== PROMPT START ===

# ROLE

You are a senior product designer + front-end engineer at a top-tier digital agency (think Pentagram / Instrument / Basic Agency level). You are building a **single-page marketing homepage** for **Kaycee Industries Ltd**, an 80+ year old, BSE-listed Indian manufacturer of industrial electrical switches (subsidiary of Salzer Electronics Ltd). The client is large, listed and conservative-professional; the output must look like a premium, modern, 2026-grade industrial brand site — **not** a template and **not** a generic AI layout.

Deliver a complete, production-ready, responsive, accessible single-page site. Do not skip sections. Do not use placeholder lorem text; use the exact content supplied below.

---

# 1. NON-NEGOTIABLE RULES

1. **Single page only.** All navigation is in-page anchor scrolling. No inner pages. (Investor documents and product catalogues open as external links / PDFs in a new tab.)
2. **Keep the SAME navigation items and SAME sections as the existing site. Do not add new sections, do not remove sections.** Section list is fixed in §3.
3. **Use ONLY the content, numbers, addresses, emails and product data in this prompt.** Do not invent statistics, awards, clients or certifications.
4. **Completely new visual design.** Do not copy the old site's layout, colours, fonts or component styles. The old site is a dated, boxed, Bootstrap-era layout; the new one must feel like a modern industrial-tech brand.
5. **Hero section is the #1 priority.** It must show real-looking product imagery (rotary switches, cam switches, counters) and must be visually stunning on first paint.
6. **Motion is mandatory** — micro-interactions, scroll-driven reveals, a cinematic hero entrance — but always respect `prefers-reduced-motion`.
7. **No AI-slop tells:** no purple-to-blue gradients, no floating glass cards on a blurry blob background, no emoji as icons, no centered-everything layouts, no identical three-card rows with a check-icon, no "Lorem", no stock "handshake" photos.
8. **Performance budget:** LCP < 2.5 s on 4G, CLS < 0.05, all images lazy-loaded except hero, hero image < 250 KB (WebP/AVIF), total JS < 150 KB gzipped.

---

# 2. BRAND FACTS (verified)

| Field | Value |
|---|---|
| Legal name | Kaycee Industries Limited |
| Brand name | KAYCEE |
| Brand tagline (existing, keep) | **"Brand that sets the Standard"** |
| Secondary line (from catalogues, keep) | **"Kaycee for Commitment… Kaycee for Quality…"** |
| Founded | 1942, Mumbai (pre-independence company) |
| Claim to fame | **First Indian manufacturer of Rotary Switches** (since 1942) |
| Age | 80+ years (82nd AGM held in 2025) |
| Parent | Subsidiary of **Salzer Electronics Ltd** (acquired 74.91% stake, 24 May 2019) |
| Listing | BSE listed — scrip code **504084**, symbol **KAYCEEI**, ISIN **INE813G01023** |
| CIN | L70102MH1942PLC006482 |
| GSTIN | 27AAACK0104C1ZF |
| Quality system | Factory ISO 9001:2008 certified by UL DQS Inc `⚠ VERIFY current revision (likely upgraded to ISO 9001:2015)` |
| Testing / standards | Products conform to **IEC 60947 Part I & III**, type-tested at **ERDA**, self CE marked |
| Approvals | Railways (**RDSO**) and Defence approvals (CSE, JEE) on most products |
| Sectors served | Power sector, Panel builders, Machine tool manufacturers, Telecom, Renewables, Railways, Defence |
| Manufacturing | Ambernath (Thane), Maharashtra — skilled workforce of ~200 people (as stated on the current site) |
| Revenue FY 2024-25 | ₹60.74 crore total revenue (₹6,073.71 lakhs), up from ₹53.94 crore |
| Company mission (verbatim) | "To provide quality and reliable electrical products and services to customers by continuous development in existing and new products based on experience in product excellence and technology innovation." |

---

# 3. NAVIGATION — SAME ITEMS AS EXISTING SITE (fixed, in this order)

```
Logo (left)  |  Home · About Us · Products · Business Network · Clients · Certificates · Investors · Contact Us  |  [Get a Quote] CTA button (right)
```

- All items are anchor links: `#home #about #products #network #clients #certificates #investors #contact`.
- The "Get a Quote" button scrolls to `#contact`. (It is a CTA, not a new nav section.)
- Navbar behaviour: transparent over hero → on scroll (> 40 px) becomes a compact, frosted, 64 px-high sticky bar with a subtle 1 px bottom border and a **scroll-progress line** (2 px, accent colour) along its bottom edge.
- Active section is highlighted with an animated underline that slides between items (spring easing, 350 ms).
- Mobile (< 1024 px): hamburger → full-screen overlay menu; items stagger in (60 ms each, from 24 px below); background uses the deep primary colour; phone + email quick links at the bottom of the overlay.
- Include a 44 px minimum touch target everywhere.

---

# 4. SECTION-BY-SECTION CONTENT + LAYOUT + MOTION

## 4.1 `#home` — HERO (most important section)

**Goal:** Instantly say "80-year-old switch manufacturer, engineered, trusted, modern." The visitor must see the actual products within 1 second.

**Layout (desktop):** Full-viewport (100 svh) asymmetric split.
- Left 45%: eyebrow + headline + sub + CTAs + trust strip.
- Right 55%: a large product composition — a **3-D-style exploded / floating arrangement of Kaycee products**: one large rotary cam switch (black body, red/grey knob) in the foreground, a heavy-duty rotary switch mid, a mechanical revolution counter and a limit switch behind, all on a dark charcoal studio backdrop with a single warm rim light. Products slowly drift (parallax on mouse move, ±12 px) and rotate ±3°.
- A thin engineering-grid overlay (1 px lines, 8% opacity) and faint dimension-line ticks around the product to signal precision.
- Background: deep navy-charcoal (`--ink`) with a large, soft amber radial glow behind the product (not a blob; a single controlled light source).

**Copy (use exactly):**
- Eyebrow (mono font, small caps, with a small pulsing amber dot): `EST. 1942 · MUMBAI · BSE: 504084`
- Headline (2 lines max, display font, 64–88 px):
  **"India's first rotary switch maker. Still setting the standard."**
- Sub-headline (20 px, max 52 ch):
  "Rotary, cam, breaker-control and limit switches, counters and time totalisers — engineered in Ambernath, trusted by power, rail, defence and machine-tool industries for over 80 years."
- Primary CTA: `Explore Products` (→ `#products`)
- Secondary CTA (ghost): `Download Catalogues` (→ `#certificates` area where catalogues are listed, or opens `https://www.kayceeindustries.com/assets/front/files/ROTARY-SWITCHES.pdf`)
- Trust strip beneath CTAs (four items, mono labels, separated by thin vertical rules):
  `80+ YEARS` · `IEC 60947 · ERDA TESTED` · `RDSO & DEFENCE APPROVED` · `A SALZER GROUP COMPANY`

**Hero motion (GSAP timeline on load):**
1. 0.0 s — page reveal: a full-screen curtain in `--ink` splits horizontally (two halves slide up/down, 900 ms, `power4.inOut`).
2. 0.3 s — headline words rise in with a clip-mask (each word 70 ms stagger, `expo.out`).
3. 0.6 s — sub, CTAs and trust strip fade-up (24 px, 600 ms).
4. 0.5 s — product composition scales from 0.9 → 1 and fades in; rim-light glow blooms from 0 → 1 opacity (1.2 s).
5. Continuous — products idle-float (3 s ease-in-out yoyo), mouse-parallax layers (depth 0.4 / 0.7 / 1.0).
6. Scroll — hero content parallaxes up at 0.3× while product composition scales to 1.08 and blurs 2 px (ScrollTrigger scrub).
7. Scroll cue at bottom: thin vertical line that draws down repeatedly + "Scroll" in mono.

**Mobile hero:** stack — product composition on top (60 svh, cropped tight to the main cam switch), text below; no mouse parallax, keep float animation.

## 4.2 `#about` — ABOUT US

**Layout:** Editorial two-column. Left: sticky large numeral "1942" rendered as an outlined display glyph that fills with `--accent` as you scroll (scrub). Right: text column with the copy below, followed by a 4-tile stat row and a horizontal timeline.

**Copy (from existing site, lightly tightened — keep facts intact):**
- Section label: `01 — About Kaycee`
- Heading: **"Eight decades of switching excellence."**
- Body paragraph 1: "Kaycee Industries Ltd is a Mumbai-based, BSE-listed company incorporated in 1942 — a pre-independence enterprise and today a subsidiary of Salzer Electronics Ltd. Kaycee is a leading electrical product manufacturer and solutions provider to the power sector, panel builders, machine-tool manufacturers, telecom and renewables."
- Body paragraph 2: "Known as the first Indian manufacturer of rotary switches, Kaycee has led the electrical industry for more than 80 years through consistent quality performance in switches and the continuous development of new products for evolving applications. Since inception, Kaycee has been recognised as a company that sets the standards others follow."
- Body paragraph 3: "Our manufacturing setup in Ambernath, Thane, is run by a highly motivated and skilled workforce of around 200 people dedicated to delivering high-quality products exactly as customers need them. Products are designed and developed with indigenous, state-of-the-art technology for high reliability and long life."
- Mission block (quote style, with a thin left rule in accent): "To provide quality and reliable electrical products and services to customers by continuous development in existing and new products based on experience in product excellence and technology innovation."

**Stat tiles (count-up on scroll, mono numerals):**
| Number | Label |
|---|---|
| 1942 | Year founded — India's first rotary switch maker |
| 80+ | Years of manufacturing |
| 200 | Skilled people at Ambernath works |
| 10A–600A | Rotary switch range, AC/DC |

**Timeline (horizontal, draws a line as you scroll, 4 nodes):**
`1942 Founded in Mumbai · first Indian rotary switches` → `Ambernath manufacturing plant established` `⚠ VERIFY year` → `2019 Becomes a Salzer Electronics group company` → `2025 82nd AGM · revenue ₹60.7 Cr`

**Imagery:** one large monochrome-treated photograph of the Ambernath shop floor / assembly line (duotone in `--ink` + `--accent`) with a rounded 24 px mask and a subtle inner shadow. If no real photo is available, use AI image prompt P-3 in §7.

**Motion:** paragraphs reveal line-by-line (SplitText-style, 40 ms stagger). Stat numerals count up over 1.4 s with `power2.out`. Timeline line uses `stroke-dashoffset` scrub.

## 4.3 `#products` — PRODUCTS

**Layout:** Header row + **filter chips** (All · Switches · Counters & Timers · Components) + a **bento grid** (12-col; first two categories are 6-col hero tiles with large product renders, rest are 4-col / 3-col tiles). Each tile: product image on a warm-grey studio backdrop, category name, a one-line descriptor, a mono "spec chip" row, and a "View range ↗" link that opens the existing product page URL in a new tab.

**Product categories (all 12 — use exactly, with these descriptions from the existing site/catalogues):**

| # | Category | One-line descriptor (use as tile sub-text) | Spec chips | Link (opens new tab) |
|---|---|---|---|---|
| 1 | **Rotary Switches** | Assembled on the packet principle with a choice of four-position and multi-pole circuits. 10A to 600A AC/DC, 250V & 440V. Slow-break, quick-break, spring-return and quick-make-break mechanisms. 4, 6 & 8 positions; base or universal mounting; lockable variants. | `10A–600A` `IEC 60947` `ERDA tested` | https://www.kayceeindustries.com/home/product_category/rotary-switches |
| 2 | **Rotary Cam Switches** | Engineered for the latest switching-technology concepts demanding miniaturisation and sophistication in control engineering. Hand-operated, packet-type, multi-position, multi-pole — for switching, controlling and starting 3-phase AC squirrel-cage induction motors. Lockable (6–12A) and 25A pad-locking variants. | `6–12A` `25A` `Pad-lockable` | https://www.kayceeindustries.com/home/product_category/new-cam-switches |
| 3 | **Breaker Control Switches** | Packet-type construction with two electrically independent double-break contacts actuated by a cam. Built for control of circuit breakers, small motors and wherever severe, frequent operations are required. Lockable and non-lockable. | `Double-break` `Lockable` | https://www.kayceeindustries.com/home/product/breaker-control-lockable |
| 4 | **Ammeter / Voltmeter Selector Switches** | Available in Rotary and Rotary-Cam designs, conforming to IEC 60947 Part I & III with self CE marking. | `IEC 60947` `CE` | https://www.kayceeindustries.com/home/product/ammeter-selector-switch |
| 5 | **Rotary Toggle Switches** | Mechanism protected in a metallic housing — weather-tight and suitable for outdoor installation, generating stations, high current/voltage, continuous-process and DC changeover applications. | `Weather-tight` `Outdoor` | https://www.kayceeindustries.com/home/product_category/rotary-toggle |
| 6 | **Limit Switches** | Robust positional and safety limit switches for machine tools and industrial automation. | `Industrial` `Automation` | https://www.kayceeindustries.com/home/product_category/limit-switches |
| 7 | **Micro Switches (K1 / K3)** | Miniature "SNAP"-action switches operated by light pressure or small movement — extremely versatile control gear for industrial automation. K1 (LH/RH) and K3 (with actuator). | `Snap action` `K1 · K3` | https://www.kayceeindustries.com/home/product_category/micro-switches |
| 8 | **Toggle Switches** | Heavy-duty toggle switches for panel and equipment control. | `Panel` | https://www.kayceeindustries.com/home/product_category/toggle-switches |
| 9 | **Counters — Senior Revolution / Stroke** | Die-cast base and cover for light weight; self-lubricating sintered bearings, stainless-steel shafts and special thermoplastic figure wheels for longer life and faster operation. Counts back from a preset to zero; built-in micro switch can stop/start a machine or trigger a light/bell signal. | `Die-cast` `Preset` | https://www.kayceeindustries.com/home/product_category/senior-revolution |
| 10 | **Digital Counters** | Electronic counters for production and process counting. | `Digital` | https://www.kayceeindustries.com/home/product_category/digital-counter |
| 11 | **Time Totalisers / Hour Meters** | Mechanical: self-starting synchronous motor records ON-time directly on the dial in hours or minutes to a tenth. Digital: bright red LED display, high accuracy, reset/non-reset, AC & DC, drop-in compatible with Kaycee mechanical units. Mini time totaliser available. | `Mechanical` `Digital LED` `AC/DC` | https://www.kayceeindustries.com/home/product_category/digital-time-totalisers |
| 12 | **Relays, Foot Switches & Cable Lugs** | Relay switches, foot switches and copper cable lugs completing the panel-builder's bill of materials. | `Components` | https://www.kayceeindustries.com/home/product_category/cable-lugs |

Also traded/offered (mention in a small "Also available" mono line under the grid, no tiles): On-load changeover switches, Push buttons, LED lamps, Buzzers, Impulse counters, Digital panel meters, CT multifunction meters, Water meters, Fuse bases/fittings.

**Catalogue downloads (show as a slim row of "PDF" pills under the grid, open in new tab):**
- Rotary Switches — https://www.kayceeindustries.com/assets/front/files/ROTARY-SWITCHES.pdf
- Rotary Cam Switches — https://www.kayceeindustries.com/assets/front/files/ROTARY-CAM-SWITCHES-1.pdf
- Breaker Control — https://www.kayceeindustries.com/assets/front/files/breaker-control.pdf
- Limit Switches — https://www.kayceeindustries.com/assets/front/files/LIMIT-SWITCHES-1.pdf
- Micro Switches — https://www.kayceeindustries.com/assets/front/files/micro-switches.pdf
- Toggle Switches — https://www.kayceeindustries.com/assets/front/files/toggle-switches.pdf
- Rotary Toggle Range — https://www.kayceeindustries.com/assets/front/files/Range%20of%20Rotary%20%20toggle%20switches.pdf
- Senior Revolution Counter — https://www.kayceeindustries.com/assets/front/files/senior-counter.pdf
- Push Button — https://www.kayceeindustries.com/assets/front/files/PUSH-BUTTON.pdf

**Motion:** tiles reveal with a 3-D tilt-in (rotateX 8° → 0, 80 ms stagger). Hover: image scales 1.06, backdrop brightens, spec chips slide up, cursor becomes a small amber "View ↗" pill (custom cursor on desktop only). Filter change uses FLIP layout animation (400 ms). On mobile the grid becomes a horizontal snap-scroll carousel with a progress bar.

## 4.4 `#network` — BUSINESS NETWORK

**Copy:**
- Label: `04 — Business Network`
- Heading: **"Made in Ambernath. Delivered across India and beyond."**
- Body: "Kaycee's manufacturing setup in Ambernath, Thane, is home to a highly motivated and skilled workforce of around 200 people dedicated to delivering products exactly as customers need them. From our Ballard Estate headquarters in Mumbai we serve panel builders, OEMs and distributors across India and export markets."
- Three location cards (real data):
  1. **Registered Office & HQ** — Old Kamani Chambers (1st Floor), 32 Ramjibhai Kamani Marg, Ballard Estate, Fort, Mumbai 400 001, Maharashtra.
  2. **Factory & Sales Office** — Plot No. 24, 26, 27/19, Wimco Naka, Near R.K. CNG Pump, Ambernath (West), Thane 421 501. Tel (0251) 2991734 · 7410033051 / 52 / 53 / 55.
  3. **Group** — A Salzer Electronics Ltd company (Coimbatore-headquartered listed electrical group). Link: https://www.salzergroup.net
- Dealer note (small): "Authorised dealers and distributors across India — contact sales for your nearest partner." `⚠ VERIFY: the current site's Business Network page may list named dealers/cities; if the client supplies that list, render it as a searchable city chip list here — do NOT invent names.`

**Layout:** Left: a stylised **India map** (thin-line SVG, dark) with two glowing pins (Mumbai HQ, Ambernath works) connected by an animated dashed arc, plus faint pulse rings on each pin. Right: the three cards stacked, each with a mono coordinate label and a "Open in Maps ↗" link.

**Motion:** map paths draw on scroll (`stroke-dashoffset`); pins pop with a spring; pulse rings loop every 2.4 s.

## 4.5 `#clients` — CLIENTS

**Copy:**
- Label: `05 — Clients`
- Heading: **"Trusted by the industries that keep India running."**
- Body: "Thousands of companies work with Kaycee Industries to understand, track and grow their market share. Our switches and counters are specified by the power sector, panel builders, machine-tool manufacturers, telecom, renewables, railways and defence — with RDSO and defence approvals on most products."

**Layout:** Sector strip (six chips with line icons: Power · Panel Builders · Machine Tools · Telecom · Renewables · Railways & Defence) above an **infinite logo marquee** (two rows, opposite directions, pause on hover, grayscale → colour on hover).

`⚠ VERIFY: Client logos must come from the existing site's Clients page (https://www.kayceeindustries.com/home/clients) or from the client. Do NOT invent client names or use third-party brand logos without permission. If logos are not supplied, render the marquee with sector names in large display type instead of logos.`

**Motion:** marquee at 40 px/s, `will-change: transform`, reduced-motion → static wrapped grid.

## 4.6 `#certificates` — CERTIFICATES

**Copy:**
- Label: `06 — Certificates & Standards`
- Heading: **"Tested, certified, approved."**
- Body: "Kaycee products are type-tested at ERDA to IEC 60947 Part I & III and carry self-CE marking. The Ambernath factory operates an ISO 9001 quality management system certified by UL DQS Inc. Most products hold Railways (RDSO) and Defence (CSE, JEE) approvals."
- Cards (4):
  1. **ISO 9001** — Quality Management System · certified by UL DQS Inc. `⚠ VERIFY revision (2008 vs 2015) and certificate number`
  2. **IEC 60947 Part I & III** — Type-tested at ERDA · self CE marked
  3. **RDSO** — Indian Railways approvals on most products
  4. **Defence approvals** — CSE / JEE
- Link: "View certificates ↗" → https://www.kayceeindustries.com/home/certificates

**Layout:** Four tall cards with an embossed seal-style line-icon, a thin mono reference line, and a hairline border; hover → card lifts 4 px, border turns accent. Place the catalogue PDF pill row here as well if it did not fit in Products.

**Motion:** seal icons draw their stroke on reveal (600 ms).

## 4.7 `#investors` — INVESTORS

**Copy:**
- Label: `07 — Investors`
- Heading: **"A listed company with an 80-year track record."**
- Key facts row (mono): `BSE 504084` · `KAYCEEI` · `ISIN INE813G01023` · `CIN L70102MH1942PLC006482` · `FY25 revenue ₹60.74 Cr`
- Body: "Kaycee Industries Limited is listed on BSE. Annual reports, shareholding patterns, corporate announcements, policies and investor-grievance information are available on our investor page. Shareholder complaints may be filed through SEBI's SCORES platform; details of our Registrar and Share Transfer Agent are listed on the investor page."
- Links (open new tab): `Investor Relations ↗` → https://www.kayceeindustries.com/home/investors · `Annual Report 2024-25 (PDF) ↗` → https://www.kayceeindustries.com/uploads/investor/1753859511_728_2024-2025%20Annual%20Report.pdf · `Annual Report 2023-24 (PDF) ↗` → https://www.kayceeindustries.com/uploads/investor/1721986325_979_81st%20AnnualReport-2024_11zon.pdf · `BSE listing ↗` → https://www.bseindia.com/stock-share-price/kaycee-industries-ltd/kayceei/504084/
- Compliance email: **cs@kayceeindustries.com** (Company Secretary)

**Layout:** Compact, calm, two-column: left facts + links list with arrow hover; right a minimal document list styled like a ledger (rows with year, title, "PDF ↗"). No stock-price widget.

## 4.8 `#contact` — CONTACT US

**Copy:**
- Label: `08 — Contact Us`
- Heading: **"Let's spec your next panel."**
- Body: "Talk to our sales team for product selection, pricing, dealer enquiries or custom switch configurations."

**Contact data (exact — render all):**
- **Registered Office:** Kaycee Industries Ltd., Old Kamani Chambers, 32 Ramjibhai Kamani Marg, Ballard Estate, Mumbai 400 001, Maharashtra, India
- **Phone (Mumbai):** +91 22 2261 3521 · +91 22 6666 3521 · +91 22 6666 3522 · +91 22 6666 3523
- **Mobile (Google Business listing):** +91 70660 04494
- **Factory & Sales (Ambernath):** Plot No. 24, 26, 27/19, Wimco Naka, Near R.K. CNG Pump, Ambernath (West), Thane 421 501 · Tel (0251) 2991734 · +91 74100 33051 / 33052 / 33053 / 33055
- **Sales email:** sales@kayceeindustries.com
- **Corporate / Investor email:** cs@kayceeindustries.com
- **Website:** www.kayceeindustries.com
- **Hours:** Monday – Saturday, 9:30 AM – 5:30 PM · Sunday closed
- **Social:** LinkedIn https://www.linkedin.com/company/kaycee-industries-limited · Instagram https://www.instagram.com/kayceeindustries/
- **GSTIN:** 27AAACK0104C1ZF (show in footer only)

**Map (real coordinates):**
- HQ pin: `18.936055, 72.8387922` — Google Place ID `ChIJaxq_bdrR5zsRzKdf-HqPkLY` — Plus code `WRPQ+CG Mumbai`
- Embed: `https://www.google.com/maps?q=Kaycee+Industries+Limited,+Ballard+Estate,+Mumbai&output=embed` (style with a dark CSS filter `grayscale(1) invert(0.92) contrast(0.9)` to match the theme, and overlay a custom amber pin).
- "Get directions ↗" → https://www.google.com/maps/search/?api=1&query=Kaycee%20Industries%20Limited&query_place_id=ChIJaxq_bdrR5zsRzKdf-HqPkLY

**Form (client-side validation, posts to `/api/enquiry` or Formspree — leave endpoint configurable):**
Name* · Company · Email* · Phone* · Product interest (select: the 12 categories + Other) · Message* · Consent checkbox · `Send enquiry` button with loading spinner and success state ("Thanks — our sales team will reply within one working day.").

**Layout:** Three columns on desktop: (1) form, (2) contact details in a ledger list with copy-to-clipboard micro-buttons, (3) map card. On mobile stack form → details → map.

**Motion:** inputs have a floating label and an animated 2 px accent underline; the submit button morphs into a check on success.

## 4.9 FOOTER (not a nav section; keep minimal)

Logo · one-line: "Kaycee Industries Ltd — Brand that sets the Standard. A Salzer Electronics group company." · anchor links repeating the nav · Registered office line · CIN + GSTIN in mono · social icons · `© 2026 Kaycee Industries Limited. All rights reserved.` · a tiny "Back to top" pill that appears after 600 px scroll.

---

# 5. ASSETS

## 5.1 Logo
- Official logo: pull from the existing site header at `https://www.kayceeindustries.com/` (wordmark "KAYCEE" with the "Kaycee Industries Ltd." descriptor). A cleaned vector version is indexed at https://brandfetch.com/kayceeindustries.com. `⚠ Ask the client for the master SVG/AI file.`
- In the new design, use the wordmark in **white on dark** and **ink on light**. Do not restyle the letterforms. If only a raster is available, vectorise it (or use the Bloom/vectorize tool) and keep proportions.
- Favicon: monogram "K" cut from the wordmark, 32/180/512 sizes.

## 5.2 Product images
- Real product photographs exist on every product page of the current site (e.g. https://www.kayceeindustries.com/home/product/cam-switch-25a , /home/product/heavy-duty-rotary-switch , /home/product/senior-revolution , /home/product/limit-switches , /home/product/digital-time-totalisers , /home/product/rotary-toggle , /home/product/ammeter-selector-switch , /home/product/micro-switch-k3-with-act , /home/product/breaker-control-lockable) and inside the catalogue PDFs listed in §4.3. **Download these, remove backgrounds, colour-correct, and re-shoot them onto the new studio backdrop.** Use them for the Products grid.
- For the **hero composition**, if the real photos are too low-resolution, generate hero renders with prompts P-1 and P-2 in §7 and match them to the real product forms (black phenolic/polycarbonate bodies, red or black knobs, silver screw terminals, mechanical counter with white figure wheels).

## 5.3 Icons
- Use a single line-icon set (Lucide or Phosphor "regular"), 1.5 px stroke, never emoji, never mixed sets.

## 5.4 Fonts (load from Google Fonts, `display=swap`, preconnect)
- **Display / headings:** `Sora` (600/700) — geometric, engineered, modern; letter-spacing −0.02em on ≥ 48 px.
- **Body / UI:** `Inter` (400/500/600) — with `font-feature-settings: "ss01","cv11"` for the single-storey a.
- **Technical labels / specs / eyebrow / numerals:** `JetBrains Mono` (400/500), uppercase, tracking +0.08em, `font-variant-numeric: tabular-nums`.
- Type scale (fluid, clamp): h1 `clamp(44px, 6.5vw, 88px)`, h2 `clamp(32px, 4vw, 56px)`, h3 `28px`, body `17px/1.6`, small `14px`, mono `12–13px`.

---

# 6. DESIGN SYSTEM (new — do NOT reuse old colours)

## 6.1 Colour tokens (CSS variables on `:root`)
```css
--ink:        #0B1220;  /* deep navy-charcoal — page dark surfaces, hero bg */
--ink-2:      #121C2E;  /* elevated dark surface */
--graphite:   #1F2937;  /* borders on dark, secondary text on dark */
--accent:     #F59E0B;  /* electric amber — CTAs, active states, pins, glow */
--accent-2:   #FBBF24;  /* amber hover */
--signal:     #E5484D;  /* switch-knob red — used sparingly for 1 highlight per section max */
--paper:      #F6F5F1;  /* warm off-white — light sections */
--paper-2:    #ECEAE3;  /* light card bg / studio backdrop */
--text:       #0F172A;  /* text on light */
--text-muted: #5B6472;
--line:       rgba(15,23,42,.10);
--line-dark:  rgba(255,255,255,.10);
```
- Rhythm: hero (dark) → about (light) → products (light, warm) → network (dark) → clients (light) → certificates (light) → investors (dark) → contact (light) → footer (dark). Alternate deliberately so the page has cadence.
- Accent usage rule: amber appears on at most **one** element per viewport plus micro-states. Red `--signal` only on the hero knob highlight and the map pin pulse.
- Surfaces: 1 px hairlines, 20–24 px radii on large cards, 10 px on chips, **no drop-shadow stacks**; use `box-shadow: 0 1px 0 rgba(0,0,0,.04), 0 24px 48px -24px rgba(11,18,32,.25)` for lifted cards only on hover.
- Texture: a very faint (3–4% opacity) engineering grid or blueprint dot pattern on dark sections; subtle film grain (SVG turbulence, 2%) on the hero.

## 6.2 Spacing & grid
- 12-column grid, 1280 px max content width, 24 px gutter, 80 px outer margin desktop / 16 px mobile.
- Section padding: `clamp(96px, 12vw, 160px)` top/bottom. Section labels (`01 — About`) sit in mono at the top-left of every section with a 32 px hairline.

## 6.3 Components
- Buttons: 52 px height, 14 px 24 px padding, pill radius; primary = amber fill/ink text; ghost = 1 px white/ink line. Hover: background sweep from left (350 ms), arrow icon nudges 4 px, slight 1.02 scale; active: 0.98.
- Chips: mono 12 px uppercase, 1 px line, hover fills.
- Cards: hairline border, image on `--paper-2`, content 24 px padding, hover lift.
- Links: underline offset 4 px, thickness 1 px, animates to 2 px accent on hover.

---

# 7. AI IMAGE PROMPTS (for hero + section visuals; generate at 2048 px, export WebP)

- **P-1 Hero main product:** "Studio product photograph of an industrial rotary cam switch, matte black polycarbonate body, red-and-black round knob with white position indicator, brass screw terminals, mounted on a dark charcoal seamless background, single warm amber rim light from top-right, soft reflection beneath, ultra-sharp macro detail, 8k, photoreal, no text, no logos."
- **P-2 Hero supporting set:** "Exploded floating arrangement of Indian industrial electrical components: a heavy-duty rotary switch with black handle, a mechanical revolution counter with white numeral wheels in a die-cast housing, a roller-lever limit switch, a small snap-action micro switch — floating at different depths on dark navy background, thin cyan engineering grid faintly behind, amber rim light, cinematic depth of field, photoreal, no text."
- **P-3 About image:** "Wide shot of a clean Indian electrical-switch assembly line, technicians in navy uniforms assembling rotary switches at ESD workbenches, rows of black switch components in trays, soft daylight from high windows, documentary style, duotone-ready, no visible brand names."
- **P-4 Network map texture:** "Minimal vector-style map of India drawn in thin white lines on deep navy, subtle dot-grid, two glowing amber location pins near Mumbai, no labels."
- **P-5 Certificates icons:** "Set of four monoline seal/badge icons: ISO checkmark shield, IEC lightning-in-circle, railway wheel, defence star — 1.5 px stroke, white on transparent, consistent 64 px grid."

---

# 8. MOTION SPEC (GSAP 3 + ScrollTrigger + Lenis smooth scroll; or Framer Motion if React)

- **Global:** Lenis smooth scroll (lerp 0.08). All reveals use `expo.out` / `power3.out`, durations 500–900 ms, stagger 40–80 ms, `once: true`. Never animate `top/left/width`; only `transform`, `opacity`, `clip-path`.
- **Page load:** curtain reveal → hero timeline (see §4.1).
- **Navbar:** blur-in on scroll, progress line, sliding active underline, magnetic hover on the CTA (±6 px follow).
- **Custom cursor (desktop ≥ 1024 px only):** 8 px amber dot + 32 px ring with 120 ms lag; ring grows to 64 px and shows "View ↗" over product tiles, "Drag" over carousels.
- **Scroll reveals:** headline clip-mask word rise; paragraphs line stagger; images `clip-path: inset(0 0 100% 0) → inset(0)`; numerals count-up; SVG strokes draw.
- **Parallax:** hero product layers; about image at 0.85× speed; dark-section grid at 0.9×.
- **Micro-interactions:** button sweep; card tilt (max 6°, perspective 1000 px, reset with spring); chip fill; input underline; copy-to-clipboard "Copied ✓" toast; logo marquee pause-on-hover; back-to-top pill with a circular progress ring; success-state morph on form submit.
- **Section transitions:** dark↔light sections overlap by −48 px with a rounded top edge (24 px radius) so sections feel layered, not stacked boxes.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` — disable curtain, parallax, cursor, marquee auto-scroll; keep opacity fades ≤ 200 ms.
- **Performance:** `will-change` only while animating; IntersectionObserver-gated; hero video/webgl not required — keep it image + CSS/GSAP.

---

# 9. TECH & DELIVERABLE

- Preferred: **Next.js 15 (App Router) + TypeScript + Tailwind CSS 4 + GSAP 3 (ScrollTrigger, SplitText via free `SplitType`) + Lenis**. Acceptable alternative: a single static `index.html` + `styles.css` + `main.js` (vanilla, GSAP via CDN).
- Files: `app/page.tsx` (sections as components in `components/sections/*`), `components/ui/*` (Button, Chip, Card, SectionLabel, Marquee, Cursor, Nav), `lib/content.ts` (ALL copy + contact data + product array from this prompt in one typed object), `public/images/*`.
- SEO: `<title>Kaycee Industries Ltd — India's first rotary switch manufacturer since 1942</title>`; meta description (≤ 155 ch): "Kaycee Industries, Mumbai — rotary, cam, breaker-control & limit switches, counters and time totalisers. IEC 60947 tested, RDSO & defence approved. Since 1942."; Open Graph image = hero render; JSON-LD `Organization` + `LocalBusiness` with the address, phones, geo `18.936055,72.8387922`, openingHours `Mo-Sa 09:30-17:30`, `sameAs` LinkedIn/Instagram/BSE.
- Accessibility: semantic landmarks, skip-link, focus rings (2 px accent offset), aria-labels on icon buttons, colour contrast ≥ 4.5:1 (amber on ink passes; never put amber text on paper — use ink text on amber).
- Responsive breakpoints: 360 / 768 / 1024 / 1280 / 1536. Test at 360 px width — no horizontal scroll.

---

# 10. QUALITY GATE — check before you return the code

- [ ] Nav has exactly: Home, About Us, Products, Business Network, Clients, Certificates, Investors, Contact Us (+ Get a Quote CTA).
- [ ] Every section in §4 exists, in order, with the exact copy and data.
- [ ] Hero shows product imagery above the fold on desktop AND mobile, animates on load, and reads in under 2 seconds.
- [ ] All 12 product categories rendered with links; 9 catalogue PDFs linked.
- [ ] All phones, emails, both addresses, hours, GSTIN, CIN, BSE code present and correct.
- [ ] Map uses the real coordinates / Place ID.
- [ ] No invented clients, awards, numbers or certifications; `⚠ VERIFY` items flagged in code comments for the client.
- [ ] Fonts: Sora / Inter / JetBrains Mono only. Colours: tokens in §6 only.
- [ ] Reduced-motion path works; Lighthouse ≥ 95 Performance / 100 Accessibility / 100 SEO on desktop.
- [ ] Looks like a bespoke agency build — asymmetric hero, editorial about, bento products, layered sections — not a template.

Return the complete codebase (all files, full contents, no omissions), followed by a short "Client checklist" listing every `⚠ VERIFY` item.

=== PROMPT END ===

---

## APPENDIX — Research notes for the designer (not part of the prompt)

**What the existing site is (so you can defend the redesign):** a multi-page, boxed Bootstrap-era layout: Home (slider + "Welcome to Kaycee" intro + product thumbnails), About Us, Products (category → product detail pages with PDF links), Business Network, Clients (logo grid), Certificates ("For more details please download the manual"), Investors (SEBI/RTA info + PDFs), Contact Us (address block + form). The new single page maps 1:1 onto those eight items.

**Things that could not be fetched from inside this environment (network-restricted) and must be collected from the live site or the client before final build:**
1. Client logo files from `/home/clients`.
2. Named dealers/cities from `/home/business_network` (if any are listed).
3. Certificate images / numbers from `/home/certificates` (ISO revision).
4. Master logo SVG and high-res product photos (or re-shoot: 10 hero products on dark backdrop, 3/4 angle).
5. Year the Ambernath plant was set up (for the timeline).

**Source URLs used:** kayceeindustries.com (home, about_us, product_category/*, product/*, contact_us, investors, certificates, clients, business_network, assets/front/files/*.pdf, uploads/investor/*.pdf), Google Business Profile (Place ID ChIJaxq_bdrR5zsRzKdf-HqPkLY), BSE corporate filings, 2024-25 Annual Report, LinkedIn company page, IndiaMART company profile, Salzer Electronics acquisition press release.
