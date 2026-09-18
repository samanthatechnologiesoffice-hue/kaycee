# Kaycee Industries — homepage redesign

Single-page marketing homepage for Kaycee Industries Ltd (Mumbai), built from
`KAYCEE_MASTER_PROMPT.md` (v2.1) with the client-supplied assets.

## Files

| Path | What |
|---|---|
| `index.html` | The whole page: nav, hero, about, products (+ `#downloads`), why choose us, clients, business network, testimonials, contact, footer |
| `assets/css/style.css` | Design system (primary `#0997E0`), layouts, responsive rules, reduced-motion fallbacks |
| `assets/js/main.js` | GSAP + ScrollTrigger + Lenis motion, nav, product tabs, pinned "why" track, spotlight logo wall, map/rail linking, card-stack testimonials, form validation |
| `assets/fonts/` | Self-hosted Bricolage Grotesque, Manrope, Geist Mono (latin + latin-ext) |
| `assets/img/` | The 19 client-supplied images (logo, hero, range, factory, 3 products, 8 client logos, favicon) |
| `assets/vendor/` | gsap 3.15, ScrollTrigger, lenis 1.3 |
| `KAYCEE_MASTER_PROMPT.md` | The brief the site was built from |

## Run locally

```
python3 -m http.server 8080
# open http://localhost:8080/
```

No build step. Everything is static.

## Before launch (client checklist)

- Footer social links are `#` until the client supplies URLs.
- Contact form posts to `data-endpoint` on `#eform` (empty = simulated success). Point it at Formspree / an API route.
- Downloads anchor (`#downloads`) says "Catalogue PDFs on request" — add PDF links when supplied.
- Investors links to `https://www.kayceeindustries.com/home/investors`.
- Marketing stats (10 M+, 182+, 50+, 89 %, 109 stock points, 2 factories) are carried over verbatim from the previous draft.
