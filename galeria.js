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

/* ── Filtrado por categoría ── */
(function () {
  const tabs  = document.querySelectorAll('.gal-tab');
  const items = document.querySelectorAll('.gal-item[data-cat]');
  if (!tabs.length) return;

  function filter(cat) {
    items.forEach(item => {
      if (item.dataset.cat === cat) {
        item.classList.remove('gal-hidden');
        item.style.animation = 'none';
        item.offsetHeight;
        item.style.animation = '';
      } else {
        item.classList.add('gal-hidden');
      }
    });
    tabs.forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => filter(tab.dataset.cat));
  });

  filter('editorial');
})();

/* ── Modal detalle foto + carrusel evento ── */
(function () {
  const items = document.querySelectorAll('.gal-item');
  const modal = document.getElementById('fotoModal');
  if (!items.length || !modal) return;

  const mClose   = document.getElementById('fotoModalClose');
  const mImg     = document.getElementById('fotoModalImg');
  const mTitle   = document.getElementById('fotoModalTitle');
  const mLugar   = document.getElementById('fotoModalLugar');
  const mIg      = document.getElementById('fotoModalIg');
  const mDesc    = document.getElementById('fotoModalDesc');
  const mExp     = document.getElementById('fotoModalExp');
  const mExpBlock = document.getElementById('fotoModalExpBlock');
  const carTrack = document.getElementById('fotoCarTrack');
  const carPrev  = document.getElementById('fotoCarPrev');
  const carNext  = document.getElementById('fotoCarNext');

  let carCurrent = 0;
  let carTotal   = 0;

  function visibleCarCount() {
    if (window.innerWidth <= 425) return 2;
    return 3;
  }

  function updateCar() {
    const vis = visibleCarCount();
    const maxIdx = Math.max(0, carTotal - vis);
    carCurrent = Math.min(carCurrent, maxIdx);
    const pct = (100 / vis) * carCurrent;
    carTrack.style.transform = 'translateX(-' + pct + '%)';
    carPrev.disabled = carCurrent === 0;
    carNext.disabled = carCurrent >= maxIdx;
  }

  carPrev.addEventListener('click', function (e) {
    e.stopPropagation();
    if (carCurrent > 0) { carCurrent--; updateCar(); }
  });
  carNext.addEventListener('click', function (e) {
    e.stopPropagation();
    if (carCurrent < carTotal - visibleCarCount()) { carCurrent++; updateCar(); }
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      mImg.src           = item.querySelector('img').src;
      mImg.alt           = item.querySelector('img').alt;
      mTitle.textContent = item.dataset.title || '';
      mLugar.textContent = item.dataset.lugar || '';
      if (item.dataset.instagram) {
        mIg.href = item.dataset.instagram;
        mIg.textContent = '@' + item.dataset.instagram.split('/').pop();
        mIg.style.display = '';
      } else {
        mIg.style.display = 'none';
      }
      mDesc.textContent  = item.dataset.desc  || '';
      var expText = item.dataset.experiencia || '';
      mExp.textContent = expText;
      if (mExpBlock) mExpBlock.style.display = expText ? '' : 'none';

      carTrack.innerHTML = '';
      carCurrent = 0;
      var fotos = item.dataset.fotos ? item.dataset.fotos.split(',') : [];
      carTotal = fotos.length;
      fotos.forEach(function (src) {
        var img = document.createElement('img');
        img.src = src.trim();
        img.alt = 'Foto del evento';
        img.addEventListener('click', function (e) {
          e.stopPropagation();
          openLightbox(img.src);
        });
        carTrack.appendChild(img);
      });
      updateCar();

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

  /* Lightbox para ampliar fotos del carrusel */
  var lightbox    = document.getElementById('fotoLightbox');
  var lbImg       = document.getElementById('fotoLightboxImg');
  var lbClose     = document.getElementById('fotoLightboxClose');

  function openLightbox(src) {
    lbImg.src = src;
    lbImg.style.animation = 'none';
    lbImg.offsetHeight;
    lbImg.style.animation = '';
    lightbox.classList.add('open');
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
  }

  lbClose.addEventListener('click', function (e) { e.stopPropagation(); closeLightbox(); });
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (lightbox.classList.contains('open')) { closeLightbox(); }
      else { closeModal(); }
    }
  });
})();
