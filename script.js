/* ═══════════════════════════════════════
   CAMIRA PORTFOLIO — SCRIPTS
═══════════════════════════════════════ */

/* ────────────────────────────────────
   WATER RIPPLE EFFECT
──────────────────────────────────── */
(function () {
  const canvas = document.getElementById('ripple-canvas');
  const ctx    = canvas.getContext('2d');
  const hero   = document.querySelector('.hero');

  let ripples = [];

  function resizeCanvas() {
    canvas.width  = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function createRipple(x, y, delay, initialRadius) {
    setTimeout(() => {
      ripples.push({ x, y, r: initialRadius, maxR: 220, alpha: 0.65, speed: 2.8, lw: 1.4 });
    }, delay);
  }

  /* Click (desktop) */
  hero.addEventListener('click', (e) => {
    const rect = hero.getBoundingClientRect();
    for (let i = 0; i < 4; i++) {
      createRipple(e.clientX - rect.left, e.clientY - rect.top, i * 90, i * 18);
    }
  });

  /* Touch: usamos touchend para NO bloquear el scroll */
  let touchStartY = 0;
  hero.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  hero.addEventListener('touchend', (e) => {
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
    if (dy > 10) return; // era un scroll, no un tap
    const rect = hero.getBoundingClientRect();
    const t = e.changedTouches[0];
    for (let i = 0; i < 4; i++) {
      createRipple(t.clientX - rect.left, t.clientY - rect.top, i * 90, i * 18);
    }
  }, { passive: true });

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ripples = ripples.filter(rp => rp.alpha > 0.008);
    ripples.forEach(rp => {
      rp.r    += rp.speed;
      rp.alpha = 0.65 * Math.pow(1 - rp.r / rp.maxR, 1.4);
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(81, 21, 31, ${rp.alpha})`;
      ctx.lineWidth   = rp.lw;
      ctx.stroke();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ────────────────────────────────────
   HAMBURGER MENU
──────────────────────────────────── */
(function () {
  const burger  = document.querySelector('.nav__burger');
  const mobileNav = document.getElementById('mobileNav');
  const overlay   = document.getElementById('navOverlay');
  const closeBtn  = document.getElementById('mobileNavClose');

  function open() {
    mobileNav.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    mobileNav.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);

  // Cierra al tocar un enlace del menú
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
})();

/* ────────────────────────────────────
   CAROUSEL
──────────────────────────────────── */
(function () {
  const track   = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (!track) return;

  let current = 0;

  function visibleCount() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 900) return 2;
    return 4;
  }
  function maxIndex() { return Math.max(0, track.children.length - visibleCount()); }

  function update() {
    const pct = (100 / visibleCount()) * current;
    track.style.transform = `translateX(-${pct}%)`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current >= maxIndex();
  }

  prevBtn.addEventListener('click', () => { if (current > 0) { current--; update(); } });
  nextBtn.addEventListener('click', () => { if (current < maxIndex()) { current++; update(); } });
  window.addEventListener('resize', () => { current = Math.min(current, maxIndex()); update(); });
  update();
})();

/* ────────────────────────────────────
   ANIMACIÓN EN CASCADA + MODAL PROYECTOS
──────────────────────────────────── */
(function () {
  const track = document.getElementById('carouselTrack');
  const modal = document.getElementById('projModal');
  if (!track || !modal) return;

  const cards  = track.querySelectorAll('.proj-card');
  const mClose = document.getElementById('projModalClose');
  const mImg   = document.getElementById('projModalImg');
  const mNum   = document.getElementById('projModalNum');
  const mTitle = document.getElementById('projModalTitle');
  const mDesc  = document.getElementById('projModalDesc');

  /* Animación en cascada al llegar a la sección */
  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    cards.forEach((card, i) => {
      card.style.animationDelay = (i * 110) + 'ms';
      card.classList.add('card-visible');
    });
    observer.unobserve(track);
  }, { threshold: 0.05 });
  observer.observe(track);

  /* Click: navegar a galería o abrir modal */
  cards.forEach(card => {
    card.addEventListener('click', () => {
      if (card.dataset.href) {
        window.location.href = card.dataset.href;
        return;
      }
      mImg.src           = card.querySelector('.proj-card__img img').src;
      mImg.alt           = card.querySelector('.proj-card__img img').alt;
      mNum.textContent   = card.querySelector('.proj-num').textContent;
      mTitle.textContent = card.querySelector('h3').textContent;
      mDesc.textContent  = card.dataset.desc || '';
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  mClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
})();

/* ────────────────────────────────────
   SCROLL-FADE
──────────────────────────────────── */
(function () {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
})();

/* ────────────────────────────────────
   NAV — opaque on scroll
──────────────────────────────────── */
(function () {
  const nav = document.getElementById('nav');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ────────────────────────────────────
   SMOOTH SCROLL
──────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
