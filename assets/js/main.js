/* Kaycee Industries — main.js (v2.1 build)
   GSAP 3 + ScrollTrigger + Lenis. All motion respects prefers-reduced-motion. */
(function () {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const html = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const desktop = () => window.matchMedia('(min-width: 1024px)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const hasGsap = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
  if (reduced) html.classList.add('reduced');
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);

  /* ---------- Lenis smooth scroll ---------- */
  let lenis = null;
  if (!reduced && typeof Lenis !== 'undefined' && hasGsap) {
    lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  const scrollTo = (target, opts = {}) => {
    const el = typeof target === 'string' ? $(target) : target;
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: opts.offset ?? -64, duration: 1.2 });
    else el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  };

  /* ---------- anchor links ---------- */
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const el = $(id);
      if (!el) return;
      e.preventDefault();
      closeMenu();
      scrollTo(el, { offset: id === '#home' ? 0 : -64 });
      history.replaceState(null, '', id);
    });
  });

  /* ---------- nav ---------- */
  const nav = $('#nav'), progress = $('#navProgress'), dot = $('.nav__dot');
  const navLinks = $$('.nav__links a[data-nav]');
  const onScrollNav = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    nav.classList.toggle('is-scrolled', y > 40);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, y / max) : 0;
    progress.style.transform = `scaleX(${p})`;
    const fill = $('.totop__fill');
    if (fill) fill.style.strokeDashoffset = String(132 - 132 * p);
    const fab = $('#fab');
    if (fab) {
      fab.classList.toggle('is-visible', y > 600);
      const foot = $('.footer__close');
      if (foot) {
        const r = foot.getBoundingClientRect();
        fab.classList.toggle('is-hidden', r.top < window.innerHeight && r.bottom > 0);
      }
    }
  };
  window.addEventListener('scroll', onScrollNav, { passive: true });
  onScrollNav();

  const moveDot = (a) => {
    if (!a || !dot) return;
    const r = a.getBoundingClientRect(), pr = a.parentElement.getBoundingClientRect();
    dot.style.transform = `translateX(${r.left - pr.left + r.width / 2 - 3}px)`;
  };
  const sections = ['home', 'about', 'clients', 'products', 'network', 'contact'].map((id) => $('#' + id)).filter(Boolean);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        const a = navLinks.find((l) => l.dataset.nav === en.target.id);
        moveDot(a);
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach((s) => io.observe(s));
  window.addEventListener('resize', () => moveDot(navLinks[0]));

  /* ---------- mobile menu ---------- */
  const burger = $('#burger'), menu = $('#menu');
  $$('.menu__list a').forEach((a, i) => a.style.setProperty('--i', i));
  function openMenu() {
    menu.classList.add('is-open'); nav.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true'); burger.setAttribute('aria-label', 'Close menu');
    menu.setAttribute('aria-hidden', 'false');
    if (lenis) lenis.stop(); document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    if (!menu.classList.contains('is-open')) return;
    menu.classList.remove('is-open'); nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Open menu');
    menu.setAttribute('aria-hidden', 'true');
    if (lenis) lenis.start(); document.body.style.overflow = '';
  }
  burger.addEventListener('click', () => (menu.classList.contains('is-open') ? closeMenu() : openMenu()));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  /* ---------- custom cursor ---------- */
  const cursor = $('.cursor');
  if (cursor && finePointer && desktop() && !reduced && hasGsap) {
    document.body.classList.add('has-cursor');
    const d = $('.cursor__dot'), ring = $('.cursor__ring'), label = $('.cursor__label');
    const qx = gsap.quickTo(ring, 'x', { duration: 0.28, ease: 'power3' }), qy = gsap.quickTo(ring, 'y', { duration: 0.28, ease: 'power3' });
    window.addEventListener('pointermove', (e) => {
      cursor.classList.add('is-on');
      d.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
      gsap.set(ring, { xPercent: -50, yPercent: -50 }); qx(e.clientX); qy(e.clientY);
    }, { passive: true });
    const setLabel = (t) => { label.textContent = t; cursor.classList.toggle('is-view', !!t); };
    $$('.pcard').forEach((c) => { c.addEventListener('pointerenter', () => setLabel('VIEW ↗')); c.addEventListener('pointerleave', () => setLabel('')); });
    $$('.deck, #whyTrack, #branchTrack').forEach((c) => { c.addEventListener('pointerenter', () => setLabel('DRAG')); c.addEventListener('pointerleave', () => setLabel('')); });
    const map = $('.network__map');
    if (map) { map.parentElement.addEventListener('pointerenter', () => cursor.classList.add('is-cross')); map.parentElement.addEventListener('pointerleave', () => cursor.classList.remove('is-cross')); }
  }

  /* ---------- magnetic buttons ---------- */
  if (finePointer && !reduced && hasGsap) {
    $$('.magnetic').forEach((b) => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.18, y: (e.clientY - r.top - r.height / 2) * 0.18, duration: 0.4, ease: 'power3' });
      });
      b.addEventListener('pointerleave', () => gsap.to(b, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.5)' }));
    });
  }

  /* ---------- split headings into lines ---------- */
  function splitLines(el) {
    if (el.dataset.split) return;
    const words = el.textContent.trim().split(/\s+/);
    el.textContent = '';
    const probe = document.createElement('span');
    words.forEach((w, i) => { const s = document.createElement('span'); s.textContent = w + (i < words.length - 1 ? ' ' : ''); s.style.display = 'inline'; probe.appendChild(s); });
    el.appendChild(probe);
    const lines = []; let cur = [], top = null;
    Array.from(probe.children).forEach((s) => { const t = s.offsetTop; if (top === null || Math.abs(t - top) < 4) { cur.push(s.textContent); top = t; } else { lines.push(cur.join('')); cur = [s.textContent]; top = t; } });
    if (cur.length) lines.push(cur.join(''));
    el.textContent = '';
    lines.forEach((l) => { const o = document.createElement('span'); o.className = 'rl'; const i = document.createElement('span'); i.textContent = l.trim(); o.appendChild(i); el.appendChild(o); });
    el.dataset.split = '1';
  }

  /* ---------- hero timeline ---------- */
  function hero() {
    if (!hasGsap || reduced) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.to('.hero__img', { scale: 1, filter: 'blur(0px)', duration: 1.6 }, 0)
      .from('.hero__scrim', { opacity: 0, duration: 0.4 }, 0.2)
      .from('.eyebrow--light', { opacity: 0, y: 10, duration: 0.5 }, 0.35)
      .from('.hero__title .line > span', { yPercent: 110, duration: 0.9, ease: 'expo.out', stagger: 0.12 }, 0.35)
      .from(['.hero__sub', '.hero__cta', '.hero__trust'], { opacity: 0, y: 20, duration: 0.7, stagger: 0.08 }, 0.8)
      .from('.hero__badge', { opacity: 0, x: -40, duration: 0.8, ease: 'back.out(1.6)' }, 1.0)
      .to('.hero__plate li + li::before', {}, 1.0)
      .from('.hero__plate', { opacity: 0, y: 16, duration: 0.6 }, 1.0)
      .from(['.hero__caption', '.hero__scroll'], { opacity: 0, duration: 0.6 }, 1.3);
    // plate dividers (pseudo elements can't be tweened; use CSS var via class)
    $$('.hero__plate li').forEach((li, i) => setTimeout(() => { li.style.setProperty('--d', '1'); li.classList.add('is-in'); }, 1000 + i * 100));
    const style = document.createElement('style');
    style.textContent = '.hero__plate li.is-in+li::before{transform:scaleX(1);transition:transform .5s cubic-bezier(.16,1,.3,1)}';
    document.head.appendChild(style);
    // float badge
    gsap.to('.hero__badge', { y: -6, duration: 2, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2 });
    // mouse parallax
    if (finePointer && desktop()) {
      const media = $('.hero__media');
      $('.hero').addEventListener('pointermove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2, y = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(media, { x: x * -10, y: y * -6, duration: 1.2, ease: 'power3' });
      });
    }
    // scroll: scale + darken image, parallax text
    gsap.to('.hero__img', { scale: 1.08, filter: 'brightness(.8)', ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 } });
    gsap.to('.hero__copy', { y: -120, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 } });
  }

  /* ---------- generic reveals ---------- */
  function reveals() {
    if (!hasGsap || reduced) return;
    $$('.reveal-lines').forEach((h) => splitLines(h));
    $$('.reveal-lines').forEach((h) => {
      gsap.to(h.querySelectorAll('.rl > span'), { y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.09, scrollTrigger: { trigger: h, start: 'top 85%', once: true } });
    });
    $$('.slabel, .lead, .chips, .products__intro, .clients__statement, .netstats, .network__sub, .eform__head').forEach((el) => {
      gsap.from(el, { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });
    $$('.about__copy').forEach((c) => gsap.to(c.children, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: c, start: 'top 85%', once: true } }));
    $$('.img-wipe').forEach((w) => gsap.to(w, { clipPath: 'inset(0 0% 0 0 round 24px)', duration: 1.2, ease: 'expo.inOut', scrollTrigger: { trigger: w, start: 'top 80%', once: true } }));
    $$('.manifesto').forEach((m) => gsap.to(m.children, { opacity: 1, x: 0, duration: 0.9, stagger: 0.12, ease: 'expo.out', scrollTrigger: { trigger: m, start: 'top 80%', once: true } }));
    $$('.stats li, .tag, .about__tag').forEach((el) => gsap.from(el, { opacity: 0, y: 18, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }));
    // counters
    $$('.count').forEach((c) => {
      const to = parseFloat(c.dataset.to);
      const obj = { v: 0 };
      gsap.to(obj, { v: to, duration: 1.4, ease: 'power2.out', onUpdate: () => { c.textContent = Math.round(obj.v); }, scrollTrigger: { trigger: c, start: 'top 88%', once: true } });
    });
    // section hairline draw
    $$('.section, .why, .contact').forEach((s) => {
      const line = document.createElement('span');
      line.style.cssText = 'position:absolute;left:0;top:0;height:1px;width:100%;background:#0997E0;transform-origin:left;transform:scaleX(0);pointer-events:none;z-index:2';
      s.style.position = 'relative'; s.appendChild(line);
      gsap.to(line, { scaleX: 1, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: s, start: 'top 90%', once: true } });
    });
    // parallax touches
    gsap.to('.about__range img', { yPercent: -6, ease: 'none', scrollTrigger: { trigger: '.about__range', start: 'top bottom', end: 'bottom top', scrub: 0.8 } });
  }
  if (reduced) $$('.count').forEach((c) => { c.textContent = c.dataset.to; });

  /* ---------- products: tabs + bento ---------- */
  function products() {
    const rail = $('.rail'), tabs = $$('.rail__tab'), ind = $('.rail__ind'), cards = $$('.pcard');
    const place = (t) => { if (!ind) return; ind.style.width = t.offsetWidth + 'px'; ind.style.transform = `translateX(${t.offsetLeft - 4}px)`; };
    place(tabs[0]);
    window.addEventListener('resize', () => place($('.rail__tab.is-active')));
    tabs.forEach((t) => t.addEventListener('click', () => {
      tabs.forEach((x) => { x.classList.remove('is-active'); x.setAttribute('aria-selected', 'false'); });
      t.classList.add('is-active'); t.setAttribute('aria-selected', 'true'); place(t);
      const cat = t.dataset.cat;
      const first = cards.map((c) => c.getBoundingClientRect());
      cards.forEach((c) => {
        const show = cat === 'all' || c.dataset.cat === cat || c.classList.contains('pcard--wide');
        c.classList.toggle('is-hidden', !show);
      });
      if (hasGsap && !reduced) {
        cards.forEach((c, i) => {
          if (c.classList.contains('is-hidden')) return;
          const last = c.getBoundingClientRect();
          const dx = first[i].left - last.left, dy = first[i].top - last.top;
          gsap.fromTo(c, { x: dx, y: dy, opacity: dx || dy ? 1 : 0 }, { x: 0, y: 0, opacity: 1, duration: 0.45, ease: 'power3.out' });
        });
      }
    }));
    if (hasGsap && !reduced) {
      gsap.from(cards, { opacity: 0, y: 40, rotateX: 10, transformPerspective: 1000, duration: 0.9, ease: 'expo.out', stagger: 0.09, scrollTrigger: { trigger: '#bento', start: 'top 85%', once: true } });
      if (finePointer) cards.forEach((c) => {
        if (c.classList.contains('pcard--wide')) return;
        c.addEventListener('pointermove', (e) => { const r = c.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5; gsap.to(c, { rotateY: x * 6, rotateX: -y * 6, transformPerspective: 1000, duration: 0.5, ease: 'power3' }); });
        c.addEventListener('pointerleave', () => gsap.to(c, { rotateX: 0, rotateY: 0, duration: 0.8, ease: 'elastic.out(1,.6)' }));
      });
    }
    const bento = $('#bento'), prog = $('.bento__progress i');
    if (bento && prog) bento.addEventListener('scroll', () => { const m = bento.scrollWidth - bento.clientWidth; prog.style.transform = `translateX(${m ? (bento.scrollLeft / m) * 300 : 0}%)`; }, { passive: true });
  }

  /* ---------- why: pinned horizontal ---------- */
  function why() {
    if (!hasGsap || reduced || !desktop()) return;
    const track = $('#whyTrack'), pin = $('.why__pin'), idx = $('#whyIndex'), bar = $('#whyProgress');
    const dist = () => track.scrollWidth - window.innerWidth;
    const st = gsap.to(track, {
      x: () => -dist(), ease: 'none',
      scrollTrigger: {
        trigger: '.why', start: 'top top', end: () => '+=' + (dist() + window.innerHeight * 0.2), pin: pin, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1,
        onUpdate: (s) => { bar.style.transform = `scaleX(${s.progress})`; idx.textContent = String(Math.min(4, Math.floor(s.progress * 4) + 1)).padStart(2, '0'); }
      }
    });
    gsap.to('.why__glyph-fill', { clipPath: 'inset(0% 0 0 0)', ease: 'none', scrollTrigger: { trigger: '.why', start: 'top top', end: () => '+=' + window.innerWidth * 0.6, scrub: true } });
    $$('.why__index').forEach((el) => gsap.fromTo(el, { xPercent: 12 }, { xPercent: -12, ease: 'none', scrollTrigger: { containerAnimation: st, trigger: el, start: 'left right', end: 'right left', scrub: true } }));
    $$('.why__body').forEach((el) => gsap.from(el, { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', scrollTrigger: { containerAnimation: st, trigger: el, start: 'left 80%', once: true } }));
  }

  /* ---------- clients: spotlight wall ---------- */
  function clients() {
    const wall = $('#wall'), tiles = $$('.wall__tile'), spot = $('.wall__spot');
    if (!wall) return;
    if (hasGsap && !reduced) gsap.to(tiles, { opacity: 1, rotateY: 0, duration: 1, ease: 'expo.out', stagger: { each: 0.07, from: 'start' }, scrollTrigger: { trigger: wall, start: 'top 82%', once: true } });
    const light = (px, py) => {
      const wr = wall.getBoundingClientRect();
      tiles.forEach((t) => { const r = t.getBoundingClientRect(); const cx = r.left + r.width / 2 - wr.left, cy = r.top + r.height / 2 - wr.top; const d = Math.hypot(cx - px, cy - py); t.classList.toggle('is-lit', d < 200); });
    };
    if (finePointer) {
      wall.addEventListener('pointerenter', () => wall.classList.add('is-active'));
      wall.addEventListener('pointerleave', () => { wall.classList.remove('is-active'); tiles.forEach((t) => t.classList.remove('is-lit')); });
      wall.addEventListener('pointermove', (e) => { const r = wall.getBoundingClientRect(); const x = e.clientX - r.left, y = e.clientY - r.top; spot.style.left = x + 'px'; spot.style.top = y + 'px'; light(x, y); });
    } else if (!reduced && hasGsap) {
      wall.classList.add('is-active');
      const sweep = { x: 0 };
      gsap.to(sweep, { x: 1, duration: 12, repeat: -1, ease: 'none', onUpdate: () => { const r = wall.getBoundingClientRect(); const x = sweep.x * r.width, y = r.height / 2; spot.style.left = x + 'px'; spot.style.top = y + 'px'; light(x, y); } });
    }
  }

  /* ---------- network: map + rail ---------- */
  function network() {
    const track = $('#branchTrack'), prog = $('#railProgress');
    const pins = $$('.pin'), arcs = $$('.map__arcs path'), cards = $$('.bcard');
    if (hasGsap && !reduced) {
      $$('.map__outline').forEach((p) => { const L = p.getTotalLength(); gsap.set(p, { strokeDasharray: L, strokeDashoffset: L }); gsap.to(p, { strokeDashoffset: 0, duration: 2, ease: 'power2.inOut', scrollTrigger: { trigger: '#network', start: 'top 70%', once: true } }); });
      gsap.from('.map__mh', { opacity: 0, duration: 1, delay: 1.2, scrollTrigger: { trigger: '#network', start: 'top 70%', once: true } });
      const order = pins.slice().sort((a, b) => (a.classList.contains('pin--ho') ? -1 : 1));
      gsap.from(order.map((p) => p.querySelector('circle:not(.pin__pulse)')), { attr: { r: 0 }, duration: 0.6, ease: 'back.out(2)', stagger: 0.08, delay: 0.8, scrollTrigger: { trigger: '#network', start: 'top 70%', once: true } });
      arcs.forEach((a) => { const L = a.getTotalLength(); gsap.set(a, { strokeDasharray: '3 5', strokeDashoffset: 0 }); gsap.from(a, { opacity: 0, duration: 0.8, delay: 1.6, scrollTrigger: { trigger: '#network', start: 'top 70%', once: true } }); });
      gsap.from(cards, { opacity: 0, x: 60, duration: 0.8, ease: 'expo.out', stagger: 0.06, scrollTrigger: { trigger: '#branchRail', start: 'top 85%', once: true } });
    }
    const lit = (city, on) => {
      pins.forEach((p) => p.classList.toggle('is-lit', on && p.dataset.city === city && !p.classList.contains('pin--ho')));
      arcs.forEach((a) => a.classList.toggle('is-lit', on && a.dataset.city === city));
      cards.forEach((c) => c.classList.toggle('is-lit', on && c.dataset.city === city));
    };
    cards.forEach((c) => { ['pointerenter', 'focusin'].forEach((ev) => c.addEventListener(ev, () => lit(c.dataset.city, true))); ['pointerleave', 'focusout'].forEach((ev) => c.addEventListener(ev, () => lit(c.dataset.city, false))); });
    if (!track) return;
    const update = () => { const m = track.scrollWidth - track.clientWidth; if (prog) prog.style.transform = `translateX(${m ? (track.scrollLeft / m) * 400 : 0}%)`; };
    track.addEventListener('scroll', update, { passive: true }); update();
    const step = () => 274;
    $('#railPrev')?.addEventListener('click', () => track.scrollBy({ left: -step() * 2, behavior: 'smooth' }));
    $('#railNext')?.addEventListener('click', () => track.scrollBy({ left: step() * 2, behavior: 'smooth' }));
    $('#railAll')?.addEventListener('click', (e) => { e.preventDefault(); track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' }); });
    // drag to scroll
    let down = false, sx = 0, sl = 0, moved = false;
    track.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = track.scrollLeft; track.classList.add('is-dragging'); });
    window.addEventListener('pointermove', (e) => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 4) moved = true; track.scrollLeft = sl - dx; });
    window.addEventListener('pointerup', () => { down = false; track.classList.remove('is-dragging'); });
    track.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
  }

  /* ---------- testimonials: card stack ---------- */
  function testimonials() {
    const cards = $$('.tcard'), num = $('#testiNum');
    if (!hasGsap || reduced) return;
    num.dataset.cur = '01';
    const setNum = (n) => {
      const target = String(n).padStart(2, '0');
      if (num.dataset.cur === target) return;
      num.dataset.cur = target;
      const olds = Array.from(num.querySelectorAll('b'));
      gsap.killTweensOf(olds);
      olds.slice(0, -1).forEach((b) => b.remove());
      const cur = olds[olds.length - 1];
      const nb = document.createElement('b'); nb.textContent = target;
      num.appendChild(nb); gsap.fromTo(nb, { yPercent: 100 }, { yPercent: 0, duration: 0.5, ease: 'expo.out' });
      if (cur) gsap.to(cur, { yPercent: -100, duration: 0.5, ease: 'expo.out', onComplete: () => cur.remove() });
    };
    cards.forEach((c, i) => {
      if (i < cards.length - 1) {
        gsap.fromTo(c, { scale: 1, filter: 'brightness(1)' }, { scale: 0.94, filter: 'brightness(.92)', ease: 'none', scrollTrigger: { trigger: cards[i + 1], start: 'top 85%', end: 'top 120px', scrub: true } });
      }
      ScrollTrigger.create({ trigger: c, start: 'top 60%', onEnter: () => setNum(i + 1), onLeaveBack: () => setNum(Math.max(1, i)) });
      const bq = c.querySelector('blockquote');
      gsap.from(bq, { opacity: 0, y: 14, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: c, start: 'top 80%', once: true } });
    });
  }

  /* ---------- contact ---------- */
  function contact() {
    const tl = $('#timeline');
    if (tl && hasGsap && !reduced) {
      const line = document.createElement('span'); line.className = 'tl__line'; tl.appendChild(line);
      gsap.to(line, { scaleY: 1, duration: 1.6, ease: 'power2.inOut', scrollTrigger: { trigger: tl, start: 'top 75%', once: true } });
      gsap.to($$('.tl__node'), { scale: 1, duration: 0.5, ease: 'back.out(2)', stagger: 0.18, scrollTrigger: { trigger: tl, start: 'top 75%', once: true } });
      $$('.tl__item').forEach((it) => gsap.from(it.querySelectorAll('.tl__k, .tl__v, .tl__extra'), { opacity: 0, y: 12, duration: 0.6, stagger: 0.06, scrollTrigger: { trigger: it, start: 'top 85%', once: true } }));
      gsap.to('.mapcard', { rotate: -2, duration: 1.2, ease: 'elastic.out(1,.5)', scrollTrigger: { trigger: '.mapcard', start: 'top 85%', once: true } });
      gsap.from($$('.efield'), { opacity: 0, y: 14, duration: 0.6, stagger: 0.07, ease: 'power3.out', scrollTrigger: { trigger: '.eform', start: 'top 80%', once: true } });
    }
    // copy buttons
    const toast = $('#toast'); let tt;
    $$('.copy').forEach((b) => b.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(b.dataset.copy); } catch (e) { /* ignore */ }
      toast.classList.add('is-on'); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('is-on'), 1400);
    }));
    // form
    const form = $('#eform'), success = $('#esuccess'), submit = $('.esubmit');
    if (!form) return;
    const field = (el) => el.closest('.efield');
    const validate = () => {
      let ok = true;
      const name = $('#f-name'), email = $('#f-email'), phone = $('#f-phone');
      const set = (el, valid) => { field(el).classList.toggle('is-invalid', !valid); if (!valid) ok = false; };
      set(name, name.value.trim().length > 1);
      set(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()));
      set(phone, /^[+\d][\d\s-]{8,}$/.test(phone.value.trim()));
      const prod = form.querySelector('input[name="product"]:checked');
      $('.efield--chips').classList.toggle('is-invalid', !prod); if (!prod) ok = false;
      return ok;
    };
    form.addEventListener('input', (e) => { const f = field(e.target); if (f) f.classList.remove('is-invalid'); });
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validate()) { form.querySelector('.is-invalid input, .is-invalid textarea')?.focus(); return; }
      submit.classList.add('is-loading'); submit.disabled = true;
      const endpoint = form.dataset.endpoint;
      try {
        if (endpoint) { await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } }); }
        else { await new Promise((r) => setTimeout(r, 900)); }
      } catch (err) { /* still show success; endpoint is configurable */ }
      submit.classList.remove('is-loading'); submit.disabled = false;
      form.hidden = true; success.hidden = false; success.querySelector('h3').focus?.();
    });
    $('#eagain')?.addEventListener('click', () => { form.reset(); success.hidden = true; form.hidden = false; $('#f-name').focus(); });
  }

  /* ---------- footer ---------- */
  function footer() {
    $('#toTop')?.addEventListener('click', () => scrollTo('#home', { offset: 0 }));
    if (!hasGsap || reduced) return;
    gsap.from('.footer__word text', { y: 24, ease: 'none', scrollTrigger: { trigger: '.footer__mark', start: 'top bottom', end: 'bottom bottom', scrub: 0.8 } });
    gsap.from(['.footer__line', '.ticket', '.footer__meta'], { opacity: 0, y: 18, duration: 0.7, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.footer__close', start: 'top 85%', once: true } });
    gsap.from('.footer__util', { opacity: 0, duration: 0.8, scrollTrigger: { trigger: '.footer__util', start: 'top 98%', once: true } });
  }

  /* ---------- boot ---------- */
  const boot = () => {
    hero(); reveals(); products(); why(); clients(); network(); testimonials(); contact(); footer();
    window.__kcReady = true;
    if (hasGsap) { ScrollTrigger.refresh(); setTimeout(() => ScrollTrigger.refresh(), 600); }
    moveDot(navLinks[0]);
  };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(boot).catch(boot); else boot();
  window.addEventListener('load', () => hasGsap && ScrollTrigger.refresh());
})();
