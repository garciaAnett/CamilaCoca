/* ═══════════════════════════════════════
   CAMIRA PORTFOLIO — SCRIPTS
   · Water ripple effect (canvas)
   · Carousel
   · Scroll-fade animations
   · Nav background on scroll
═══════════════════════════════════════ */

/* ────────────────────────────────────
   WATER RIPPLE EFFECT
──────────────────────────────────── */
(function () {
  const canvas = document.getElementById('ripple-canvas');
  const ctx = canvas.getContext('2d');
  const hero = document.querySelector('.hero');

  let ripples = [];
  let raf;

  function resizeCanvas() {
    canvas.width  = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  /* Each Ripple: one expanding ring */
  function createRipple(x, y, delay, initialRadius) {
    setTimeout(() => {
      ripples.push({
        x,
        y,
        r:        initialRadius,
        maxR:     220,
        alpha:    0.65,
        speed:    2.8,
        lw:       1.4,
      });
    }, delay);
  }

  /* On click anywhere in the hero, spawn 4 staggered rings */
  hero.addEventListener('click', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let i = 0; i < 4; i++) {
      createRipple(x, y, i * 90, i * 18);
    }
  });

  /* Touch support */
  hero.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const rect = hero.getBoundingClientRect();
    const t = e.touches[0];
    const x = t.clientX - rect.left;
    const y = t.clientY - rect.top;
    for (let i = 0; i < 4; i++) {
      createRipple(x, y, i * 90, i * 18);
    }
  }, { passive: false });

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ripples = ripples.filter(rp => rp.alpha > 0.008);

    ripples.forEach(rp => {
      rp.r     += rp.speed;
      rp.alpha  = 0.65 * Math.pow(1 - rp.r / rp.maxR, 1.4);

      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(81, 21, 31, ${rp.alpha})`;
      ctx.lineWidth   = rp.lw;
      ctx.stroke();
    });

    raf = requestAnimationFrame(draw);
  }

  draw();
})();

/* ────────────────────────────────────
   CAROUSEL
──────────────────────────────────── */
(function () {
  const track   = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (!track) return;

  const cards = track.children;
  let current = 0;

  function visibleCount() {
    if (window.innerWidth <= 640)  return 2;
    if (window.innerWidth <= 900)  return 2;
    return 4;
  }

  function maxIndex() {
    return Math.max(0, cards.length - visibleCount());
  }

  function update() {
    const pct = (100 / visibleCount()) * current;
    track.style.transform = `translateX(-${pct}%)`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current >= maxIndex();
  }

  prevBtn.addEventListener('click', () => {
    if (current > 0) { current--; update(); }
  });
  nextBtn.addEventListener('click', () => {
    if (current < maxIndex()) { current++; update(); }
  });

  window.addEventListener('resize', () => {
    current = Math.min(current, maxIndex());
    update();
  });

  update();
})();

/* ────────────────────────────────────
   SCROLL-FADE (IntersectionObserver)
──────────────────────────────────── */
(function () {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
})();

/* ────────────────────────────────────
   NAV — opaque on scroll
──────────────────────────────────── */
(function () {
  const nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ────────────────────────────────────
   SMOOTH SCROLL for anchor links
──────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
