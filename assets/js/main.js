/* Kaycee Industries — main.js ("Control Panel" build)
   GSAP 3 + ScrollTrigger for scroll-linked reveals; everything else is CSS. */
(function () {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const html = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
  if (reduced) html.classList.add('no-motion');
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);

  /* hero entrance: CSS transitions keyed off html.ready */
  const arm = () => requestAnimationFrame(() => html.classList.add('ready'));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(arm).catch(arm); else arm();
  setTimeout(() => html.classList.add('ready'), 1800);

  /* anchor scrolling */
  const navH = () => ($('#nav')?.offsetHeight || 72);
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href'); if (id.length < 2) return;
      const el = $(id); if (!el) return;
      e.preventDefault(); closeMenu();
      const y = id === '#home' ? 0 : el.getBoundingClientRect().top + window.scrollY - navH();
      window.scrollTo({ top: Math.max(0, y), behavior: reduced ? 'auto' : 'smooth' });
      history.replaceState(null, '', id);
    });
  });

  /* nav active state */
  const links = $$('.nav__links a[data-nav]');
  const secs = ['home', 'about', 'clients', 'products', 'network', 'contact'].map((id) => $('#' + id)).filter(Boolean);
  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) links.forEach((l) => l.classList.toggle('is-on', l.dataset.nav === en.target.id)); }), { rootMargin: '-35% 0px -60% 0px' });
  secs.forEach((s) => io.observe(s));

  /* quick actions visibility */
  const quick = $('#quick');
  const onScroll = () => { quick.classList.toggle('is-on', window.scrollY > 500); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* mobile menu */
  const burger = $('#burger'), menu = $('#menu'), nav = $('#nav');
  function openMenu() { menu.classList.add('is-open'); nav.classList.add('is-open'); burger.setAttribute('aria-expanded', 'true'); burger.setAttribute('aria-label', 'Close menu'); menu.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; }
  function closeMenu() { if (!menu.classList.contains('is-open')) return; menu.classList.remove('is-open'); nav.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Open menu'); menu.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
  burger.addEventListener('click', () => (menu.classList.contains('is-open') ? closeMenu() : openMenu()));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  /* scroll reveals */
  const once = (el, cb, start = 'top 85%') => { if (!el) return; if (!hasGsap) { cb(); return; } ScrollTrigger.create({ trigger: el, start, once: true, onEnter: cb }); };
  $$('.wl-h').forEach((h) => once(h, () => h.classList.add('is-in')));
  $$('.wipe').forEach((w) => once(w, () => w.classList.add('is-in'), 'top 80%'));
  $$('.count').forEach((c) => {
    const to = parseFloat(c.dataset.to);
    if (reduced || !hasGsap) { c.textContent = to; return; }
    const o = { v: 0 };
    once(c, () => gsap.to(o, { v: to, duration: 1.2, ease: 'power2.out', onUpdate: () => { c.textContent = Math.round(o.v); } }), 'top 90%');
  });
  $$('.bar i').forEach((b) => once(b, () => { b.style.width = b.dataset.w + '%'; }));
  if (hasGsap && !reduced) {
    $$('.map__land').forEach((p) => { const L = p.getTotalLength(); gsap.set(p, { strokeDasharray: L, strokeDashoffset: L, fillOpacity: 0 }); once(p, () => gsap.to(p, { strokeDashoffset: 0, fillOpacity: 1, duration: 1.8, ease: 'power2.inOut' }), 'top 75%'); });
    const pins = $$('.pin'); gsap.set(pins, { opacity: 0 });
    once($('.map'), () => gsap.to(pins, { opacity: 1, duration: 0.4, stagger: 0.07, delay: 0.9 }), 'top 75%');
    $$('.panel > .cell, .logos li, .stats li, .net__stats li').forEach((c) => { gsap.set(c, { opacity: 0, y: 16 }); once(c, () => gsap.to(c, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }), 'top 92%'); });
  }

  /* products: tabs filter */
  const tabs = $$('.tab'), prods = $$('.prod');
  tabs.forEach((t) => t.addEventListener('click', () => {
    tabs.forEach((x) => { x.classList.remove('is-on'); x.setAttribute('aria-selected', 'false'); });
    t.classList.add('is-on'); t.setAttribute('aria-selected', 'true');
    const cat = t.dataset.cat;
    prods.forEach((p) => p.classList.toggle('is-hidden', !(cat === 'all' || p.dataset.cat === cat || p.classList.contains('prod--cat'))));
    if (hasGsap && !reduced) gsap.fromTo(prods.filter((p) => !p.classList.contains('is-hidden')), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, ease: 'power2.out' });
  }));

  /* network: table ↔ map linking, show all */
  const lit = (city, on) => {
    $$('.pin').forEach((p) => p.classList.toggle('is-lit', on && p.dataset.city === city && !p.classList.contains('pin--ho')));
    $$('.map__arcs path').forEach((a) => a.classList.toggle('is-lit', on && a.dataset.city === city));
    $$('.branches tr, .ho').forEach((r) => r.classList.toggle('is-lit', on && r.dataset.city === city));
  };
  $$('.branches tbody tr, .ho').forEach((r) => { r.addEventListener('pointerenter', () => lit(r.dataset.city, true)); r.addEventListener('pointerleave', () => lit(r.dataset.city, false)); r.addEventListener('focusin', () => lit(r.dataset.city, true)); r.addEventListener('focusout', () => lit(r.dataset.city, false)); });
  $$('.pin').forEach((p) => { p.addEventListener('pointerenter', () => lit(p.dataset.city, true)); p.addEventListener('pointerleave', () => lit(p.dataset.city, false)); });
  const showAll = $('#showAll'), table = $('.branches');
  showAll?.addEventListener('click', () => { const all = table.classList.toggle('is-all'); showAll.setAttribute('aria-expanded', String(all)); showAll.firstChild.textContent = all ? 'Show fewer branch offices' : 'View all 10 branch offices'; });

  /* contact form */
  const form = $('#eform'), success = $('#esuccess'), submit = form?.querySelector('button[type=submit]');
  if (form) {
    const wrap = (el) => el.closest('.f');
    const validate = () => {
      let ok = true;
      const set = (el, valid) => { wrap(el).classList.toggle('is-invalid', !valid); if (!valid) ok = false; };
      set($('#f-name'), $('#f-name').value.trim().length > 1);
      set($('#f-email'), /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($('#f-email').value.trim()));
      set($('#f-phone'), /^[+\d][\d\s-]{8,}$/.test($('#f-phone').value.trim()));
      set($('#f-prod'), !!$('#f-prod').value);
      return ok;
    };
    form.addEventListener('input', (e) => wrap(e.target)?.classList.remove('is-invalid'));
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validate()) { form.querySelector('.is-invalid input, .is-invalid select')?.focus(); return; }
      submit.classList.add('is-loading'); submit.disabled = true;
      try { if (form.dataset.endpoint) await fetch(form.dataset.endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } }); else await new Promise((r) => setTimeout(r, 800)); } catch (err) { /* endpoint is configurable */ }
      submit.classList.remove('is-loading'); submit.disabled = false;
      form.hidden = true; success.hidden = false;
    });
    $('#eagain')?.addEventListener('click', () => { form.reset(); success.hidden = true; form.hidden = false; $('#f-name').focus(); });
  }

  window.addEventListener('load', () => hasGsap && ScrollTrigger.refresh());
})();
