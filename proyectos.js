/* ═══════════════════════════════════════
   PROYECTOS — LIGHTBOX
═══════════════════════════════════════ */

(function () {
  /* Build overlay */
  const overlay = document.createElement('div');
  overlay.className = 'lb-overlay';
  overlay.innerHTML = `
    <button class="lb-close" aria-label="Cerrar">✕</button>
    <img class="lb-img" src="" alt="">
    <button class="lb-prev" aria-label="Anterior">‹</button>
    <button class="lb-next" aria-label="Siguiente">›</button>
  `;
  document.body.appendChild(overlay);

  const lbImg   = overlay.querySelector('.lb-img');
  const lbClose = overlay.querySelector('.lb-close');
  const lbPrev  = overlay.querySelector('.lb-prev');
  const lbNext  = overlay.querySelector('.lb-next');

  let images = [];
  let current = 0;

  function open(imgs, idx) {
    images  = imgs;
    current = idx;
    show();
    overlay.classList.add('lb-overlay--visible');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('lb-overlay--visible');
    document.body.style.overflow = '';
  }

  function show() {
    lbImg.classList.remove('lb-img--in');
    lbImg.src = images[current];
    lbImg.onload = () => lbImg.classList.add('lb-img--in');
    lbPrev.style.display = images.length > 1 ? '' : 'none';
    lbNext.style.display = images.length > 1 ? '' : 'none';
  }

  function prev() { current = (current - 1 + images.length) % images.length; show(); }
  function next() { current = (current + 1) % images.length; show(); }

  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', (e) => { e.stopPropagation(); prev(); });
  lbNext.addEventListener('click', (e) => { e.stopPropagation(); next(); });
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('lb-overlay--visible')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  });

  /* Wire up grid items — collect all images per grid, open on click */
  document.querySelectorAll('.pj-grid').forEach(grid => {
    const items = Array.from(grid.querySelectorAll('.pj-grid__item img'));
    const srcs  = items.map(img => img.src);
    items.forEach((img, idx) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => open(srcs, idx));
    });
  });
})();
