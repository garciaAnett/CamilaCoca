/* ═══════════════════════════════════════
   UNIVERSOS — SCRIPTS
═══════════════════════════════════════ */

const LOCK_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`;

const DATA = {
  editorial: {
    breadcrumb: 'FOTOGRAFÍA EDITORIAL',
    title: 'EDITORIAL',
    heroImg: 'imagenes/editorial_valentina_ponce/editorial_Valentina_Ponce.jpg',
    desc: 'Serie fotográfica que explora la belleza, la expresión y la narrativa visual. Cada imagen es una historia construida con luz, dirección y sensibilidad artística.',
    quote: '"La luz no ilumina objetos, revela historias."',
    status: [
      { label: 'DIRECCIÓN ARTÍSTICA', pct: 90 },
      { label: 'ILUMINACIÓN',         pct: 85 },
      { label: 'RETOQUE',             pct: 75 },
      { label: 'ESTILISMO',           pct: 70 },
      { label: 'NARRATIVA VISUAL',    pct: 80 },
    ],
    subs: [
      {
        num: '01. LA IDEA',
        img: 'imagenes/editorial_lu/foto Lu.JPG',
        text: 'Cada sesión nace de un concepto visual. La idea define la atmósfera, los colores y la historia que se quiere contar.',
        link: 'VER MÁS →'
      },
      {
        num: '02. LA DIRECCIÓN',
        img: 'imagenes/editorial_fashion/Ediorial_Fashion.jpg',
        text: 'La dirección artística guía cada elemento en escena: poses, expresiones, vestuario y ambiente para lograr la imagen soñada.',
        link: 'VER MÁS →'
      },
      {
        num: '03. EL PROCESO',
        list: ['Concepto y moodboard previo', 'Selección de locación e iluminación', 'Dirección en set con equipo', 'Selección y edición de imágenes', 'Retoque artístico y entrega'],
        link: 'VER MÁS →'
      },
      {
        num: '04. FRAGMENTO',
        quote: 'Fotografiar no es solo apretar un botón.\nEs ver antes que todos,\ny guardar lo que nadie más notó.',
        link: 'LEER MÁS →',
        dark: true
      }
    ],
    personasLabel: '05. MODELOS & COLABORADORES',
    personas: [
      { name: 'VALENTINA PONCE', role: 'MODELO', img: 'imagenes/editorial_valentina_ponce/editorial_Valentina_Ponce.jpg' },
      { name: 'ISIS CAMACHO',    role: 'MODELO', img: 'imagenes/editorial_Isis_camacho/editorial_isis_camacho.jpg' },
      { name: 'PRÓXIMO', role: 'EN DESARROLLO', lock: true },
      { name: 'PRÓXIMO', role: 'EN DESARROLLO', lock: true },
    ],
    board: [
      'imagenes/editorial_Isis_camacho/editorial_isis_camacho2.jpg',
      'imagenes/editorial_Isis_camacho/editorial_isis_camacho3.jpg',
      'imagenes/editorial_valentina_ponce/editorial_Valentina_Ponce1.jpg',
      'imagenes/editorial_valentina_ponce/editorial_Valentina_Ponce2.jpg',
      'imagenes/editorial_lu/fotoLu1.jpg',
      'imagenes/editorial_fashion/Ediorial_Fashion2.jpg',
    ]
  },

  publicitaria: {
    breadcrumb: 'FOTOGRAFÍA PUBLICITARIA',
    title: 'PUBLICITARIA',
    heroImg: 'imagenes/publicitaria_choco/choco.jpg',
    desc: 'Fotografía pensada para conectar marcas con personas. Cada imagen comunica la esencia del producto con intención y estética cuidada.',
    quote: '"Una buena foto de producto no vende el objeto, vende lo que hace sentir."',
    status: [
      { label: 'CONCEPTO DE MARCA', pct: 88 },
      { label: 'ILUMINACIÓN',       pct: 85 },
      { label: 'COMPOSICIÓN',       pct: 90 },
      { label: 'RETOQUE',           pct: 80 },
      { label: 'ENTREGA',           pct: 95 },
    ],
    subs: [
      {
        num: '01. EL PRODUCTO',
        img: 'imagenes/publicitaria_final/final.jpg',
        text: 'La fotografía publicitaria resalta la calidad y los detalles de cada producto, creando imágenes que generan deseo y confianza en la marca.',
        link: 'VER MÁS →'
      },
      {
        num: '02. LA MARCA',
        img: 'imagenes/publicitaria_choco/choco1.png',
        text: 'Cada sesión se adapta a la identidad visual del cliente. Los colores, la iluminación y la composición refuerzan los valores de la marca.',
        link: 'VER MÁS →'
      },
      {
        num: '03. EL PROCESO',
        list: ['Briefing con el cliente', 'Definición de estética y paleta', 'Set y preparación del producto', 'Captura con iluminación controlada', 'Edición y entrega de artes finales'],
        link: 'VER MÁS →'
      },
      {
        num: '04. FRAGMENTO',
        quote: 'Cada producto tiene una historia.\nMi trabajo es encontrarla\ny mostrarla con luz.',
        link: 'LEER MÁS →',
        dark: true
      }
    ],
    personasLabel: '05. CLIENTES & MARCAS',
    personas: [
      { name: 'PAOLA PALACIOS', role: 'ACCESORIOS', img: 'imagenes/publicitaria_final/final.jpg' },
      { name: 'GABA',           role: 'ALFAJORES',  img: 'imagenes/publicitaria_choco/choco.jpg' },
      { name: 'PRÓXIMO', role: 'EN DESARROLLO', lock: true },
      { name: 'PRÓXIMO', role: 'EN DESARROLLO', lock: true },
    ],
    board: [
      'imagenes/publicitaria_choco/choco.jpg',
      'imagenes/publicitaria_choco/choco1.png',
      'imagenes/publicitaria_choco/choco2.png',
      'imagenes/publicitaria_final/final.jpg',
      'imagenes/publicitaria_final/final1.png',
      'imagenes/publicitaria_final/final2.png',
    ]
  },

  documental: {
    breadcrumb: 'FOTOGRAFÍA DOCUMENTAL',
    title: 'DOCUMENTAL',
    heroImg: 'imagenes/documental/docuemntal.JPG',
    desc: 'Instantes reales capturados sin intervención. La fotografía documental exige paciencia, respeto por el momento y la capacidad de ver lo extraordinario en lo cotidiano.',
    quote: '"No busco el momento perfecto. Lo espero."',
    status: [
      { label: 'OBSERVACIÓN',     pct: 95 },
      { label: 'TIMING',          pct: 90 },
      { label: 'LUZ NATURAL',     pct: 85 },
      { label: 'NARRATIVA',       pct: 88 },
      { label: 'POST-PRODUCCIÓN', pct: 70 },
    ],
    subs: [
      {
        num: '01. EL MOMENTO',
        img: 'imagenes/documental/docuemntal.JPG',
        text: 'La fotografía documental captura instantes reales tal como ocurren, sin puesta en escena ni intervención. La autenticidad es el valor principal.',
        link: 'VER MÁS →'
      },
      {
        num: '02. EL ENTORNO',
        img: 'imagenes/documental/docuemntal.JPG',
        text: 'El ambiente y el contexto son parte de la historia. Cada elemento en el encuadre suma significado y da profundidad a la imagen.',
        link: 'VER MÁS →'
      },
      {
        num: '03. EL PROCESO',
        list: ['Observación previa del entorno', 'Construcción de confianza con los sujetos', 'Captura espontánea y no invasiva', 'Selección de imágenes con criterio narrativo', 'Edición que respeta la realidad'],
        link: 'VER MÁS →'
      },
      {
        num: '04. FRAGMENTO',
        quote: 'La vida sucede.\nYo solo tengo la cámara\ny la suerte de estar ahí.',
        link: 'LEER MÁS →',
        dark: true
      }
    ],
    personasLabel: '05. COLABORADORES',
    personas: [
      { name: 'ALEJANDRA ROSELIO', role: 'COLABORADORA', img: 'imagenes/documental/docuemntal.JPG' },
      { name: 'JOSE OROPEZA',      role: 'COLABORADOR',  img: 'imagenes/documental/docuemntal.JPG' },
      { name: 'PRÓXIMO', role: 'EN DESARROLLO', lock: true },
      { name: 'PRÓXIMO', role: 'EN DESARROLLO', lock: true },
    ],
    board: [
      'imagenes/documental/docuemntal.JPG',
      'imagenes/documental/docuemntal.JPG',
      'imagenes/documental/docuemntal.JPG',
      'imagenes/documental/docuemntal.JPG',
    ]
  }
};

/* ── Render functions ── */

function renderStatus(list, data) {
  list.innerHTML = data.status.map(s => `
    <div class="uv-status__item">
      <div class="uv-status__row">
        <span>${s.label}</span><span>${s.pct}%</span>
      </div>
      <div class="uv-bar"><div class="uv-bar__fill" style="width:${s.pct}%"></div></div>
    </div>
  `).join('');
}

function renderSubGrid(grid, data) {
  grid.innerHTML = data.subs.map(s => {
    if (s.list) {
      return `<div class="uv-sub uv-sub--list">
        <span class="uv-sub__num">${s.num}</span>
        <ul class="uv-sub__checklist">${s.list.map(i => `<li>${i}</li>`).join('')}</ul>
        <a href="fotografia.html" class="uv-sub__link">${s.link}</a>
      </div>`;
    }
    if (s.quote) {
      return `<div class="uv-sub uv-sub--quote">
        <span class="uv-sub__num">${s.num}</span>
        <div class="uv-sub__quote-mark">"</div>
        <p class="uv-sub__quote-text">${s.quote.replace(/\n/g, '<br>')}</p>
        <a href="fotografia.html" class="uv-sub__link">${s.link}</a>
      </div>`;
    }
    return `<div class="uv-sub">
      <span class="uv-sub__num">${s.num}</span>
      <div class="uv-sub__img"><img src="${s.img}" alt="${s.num}"></div>
      <p class="uv-sub__text">${s.text}</p>
      <a href="fotografia.html" class="uv-sub__link">${s.link}</a>
    </div>`;
  }).join('');
}

function renderPersonas(grid, label, data) {
  document.getElementById('uvPersonasLabel').textContent = data.personasLabel;
  grid.innerHTML = data.personas.map(p => {
    if (p.lock) {
      return `<div class="uv-persona uv-persona--lock">
        <div class="uv-persona__img uv-persona__img--lock">${LOCK_SVG}</div>
        <p class="uv-persona__name">${p.name}</p>
        <p class="uv-persona__role">${p.role}</p>
      </div>`;
    }
    return `<div class="uv-persona">
      <div class="uv-persona__img"><img src="${p.img}" alt="${p.name}"></div>
      <p class="uv-persona__name">${p.name}</p>
      <p class="uv-persona__role">${p.role}</p>
    </div>`;
  }).join('');
}

function renderBoard(grid, data) {
  grid.innerHTML = data.board.map(src => `<img src="${src}" alt="">`).join('');
}

/* ── Switch universe ── */

function switchUniverse(key) {
  const data = DATA[key];
  if (!data) return;

  const main = document.getElementById('uvMain');
  main.classList.add('uv-fade');

  setTimeout(() => {
    document.getElementById('uvHeroBg').src        = data.heroImg;
    document.getElementById('uvBreadcrumb').textContent = data.breadcrumb;
    document.getElementById('uvTitle').textContent      = data.title;
    document.getElementById('uvDesc').textContent       = data.desc;
    document.getElementById('uvQuote').textContent      = data.quote;

    renderStatus(document.getElementById('uvStatusList'), data);
    renderSubGrid(document.getElementById('uvSubGrid'), data);
    renderPersonas(document.getElementById('uvPersonasGrid'), data.personasLabel, data);
    renderBoard(document.getElementById('uvBoardGrid'), data);

    document.querySelectorAll('.uv-sidebar__item').forEach(el => {
      el.classList.toggle('uv-sidebar__item--active', el.dataset.key === key);
    });

    main.classList.remove('uv-fade');
  }, 220);
}

/* ── Init ── */

(function () {
  const nav = document.getElementById('nav');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  document.querySelectorAll('.uv-sidebar__item').forEach(item => {
    item.addEventListener('click', () => switchUniverse(item.dataset.key));
  });

  switchUniverse('editorial');
})();
