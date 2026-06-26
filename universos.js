/* ═══════════════════════════════════════
   UNIVERSOS — SCRIPTS
═══════════════════════════════════════ */

const DATA = {
  bloodcrest: {
    breadcrumb: 'UNIVERSO FANTÁSTICO',
    title: 'BLOODCREST',
    heroImg: 'imagenes/astraInternacional/blood_universo3.jpeg',
    paragraphs: [
      'Hay reinos que fueron levantados con piedra. Bloodcrest fue construido sobre antiguos juramentos.',
      'Entre montañas cubiertas por nieve, bosques que parecen no tener fin y lagos donde el invierno deja su reflejo, generaciones de clanes han aprendido a convivir bajo un mismo principio: la verdadera fortaleza no pertenece a quien domina, sino a quien es capaz de proteger. Allí, las tradiciones forman parte de la vida cotidiana y cada decisión busca preservar el delicado equilibrio entre el reino, la naturaleza y quienes lo habitan.',
      'Ningún gobernante recibe la corona por derecho. Antes de asumir el liderazgo, todo futuro rey o reina debe enfrentarse al Invierno Blanco, una antigua travesía que pone a prueba mucho más que la fuerza. Quienes regresan lo hacen con una certeza compartida: el poder solo tiene sentido cuando existe alguien a quien cuidar.',
    ],
    quote: '"Algunas coronas se forjan con oro. Otras con la promesa de regresar a casa."',
    waMsg: 'Hola%20Camila%2C%20me%20interesa%20conocer%20más%20sobre%20el%20universo%20Bloodcrest%20y%20explorar%20una%20colaboración.',
  },

  casaMoretti: {
    breadcrumb: 'UNIVERSO CONTEMPORÁNEO',
    title: 'LA CASA MORETTI',
    heroImg: 'imagenes/astraInternacional/familiaMorrieti_universo2.jpeg',
    paragraphs: [
      'Hay familias que heredan apellidos. La Casa Moretti heredó una promesa.',
      'Desde hace generaciones, su historia ha estado ligada a un mundo donde la lealtad vale más que cualquier fortuna y el silencio puede proteger más vidas que una verdad pronunciada en el momento equivocado. Mientras el resto del mundo solo conoce empresarios, benefactores y viejos linajes italianos, los Moretti continúan preservando un legado construido sobre la confianza, la responsabilidad y los sacrificios que rara vez llegan a contarse.',
      'Dentro de la familia, las tradiciones no existen para mirar al pasado, sino para recordar que cada decisión representa a quienes estuvieron antes y a quienes vendrán después. Por eso, el primer brindis nunca pertenece a los vivos, sino a aquellos que hicieron posible que el apellido Moretti siguiera en pie una generación más.',
      'Pero, por encima de cualquier código o ceremonia, existe una única regla que nadie cuestiona: la familia siempre será el primer hogar… y la última línea de defensa.',
    ],
    quote: '"Algunas familias comparten un apellido. Otras comparten un juramento."',
    waMsg: 'Hola%20Camila%2C%20me%20interesa%20conocer%20más%20sobre%20el%20universo%20La%20Casa%20Moretti%20y%20explorar%20una%20colaboración.',
  },

  astra: {
    breadcrumb: 'UNIVERSO ÉLITE',
    title: 'ASTRA INTERNATIONAL',
    heroImg: 'imagenes/astraInternacional/astra_universo1.jpeg',
    paragraphs: [
      'Hay lugares que educan a las personas. Astra International educa a quienes algún día decidirán el rumbo del mundo.',
      'Lejos de la mirada pública, esta exclusiva institución reúne a los herederos de las familias más influyentes del ámbito empresarial, político y financiero. Durante su estancia, el apellido deja de ser un privilegio y el anonimato se convierte en la primera lección. En un entorno donde cada conversación puede convertirse en una negociación y cada amistad ocultar un interés mayor, el verdadero poder no se impone: se aprende.',
      'Entre las tradiciones más importantes de Astra se encuentra el Juramento del Anonimato, una ceremonia en la que cada estudiante renuncia temporalmente a su apellido para ser reconocido únicamente por sus decisiones, su carácter y su capacidad de liderazgo.',
    ],
    quote: '"El poder no desaparece cuando ocultas tu nombre. Solo cambia la forma en que los demás aprenden a verlo."',
    waMsg: 'Hola%20Camila%2C%20me%20interesa%20conocer%20más%20sobre%20el%20universo%20Astra%20International%20y%20explorar%20una%20colaboración.',
  },
};

/* ── Switch universe ── */

function switchUniverse(key) {
  const data = DATA[key];
  if (!data) return;

  const main = document.getElementById('uvMain');
  main.classList.add('uv-fade');

  setTimeout(() => {
    document.getElementById('uvHeroBg').src                = data.heroImg;
    document.getElementById('uvBreadcrumb').textContent    = data.breadcrumb;
    document.getElementById('uvTitle').textContent         = data.title;
    document.getElementById('uvQuote').textContent         = data.quote;
    document.getElementById('uvCtaLink').href =
      'https://wa.me/59168923029?text=' + data.waMsg;

    document.getElementById('uvStory').innerHTML =
      data.paragraphs.map(p => `<p>${p}</p>`).join('');

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

  /* read ?u= param to open a specific universe from index.html links */
  const param = new URLSearchParams(window.location.search).get('u');
  switchUniverse(param && DATA[param] ? param : 'bloodcrest');
})();
