/* ═══════════════════════════════════════
   GALERÍA FOTOGRAFÍA — SCRIPTS
═══════════════════════════════════════ */

/* ── Nav opaque on scroll ── */
(function () {
  const nav = document.getElementById('nav');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Modal detalle foto ── */
(function () {
  const items = document.querySelectorAll('.gal-item');
  const modal = document.getElementById('fotoModal');
  if (!items.length || !modal) return;

  const mClose = document.getElementById('fotoModalClose');
  const mImg   = document.getElementById('fotoModalImg');
  const mTitle = document.getElementById('fotoModalTitle');
  const mLugar = document.getElementById('fotoModalLugar');
  const mDesc  = document.getElementById('fotoModalDesc');
  const mExp   = document.getElementById('fotoModalExp');

  items.forEach(item => {
    item.addEventListener('click', () => {
      mImg.src           = item.querySelector('img').src;
      mImg.alt           = item.querySelector('img').alt;
      mTitle.textContent = item.dataset.title || '';
      mLugar.textContent = item.dataset.lugar || '';
      mDesc.textContent  = item.dataset.desc  || '';
      mExp.textContent   = item.dataset.experiencia || '';
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
