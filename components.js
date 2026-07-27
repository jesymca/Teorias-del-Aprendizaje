/* ============================================================
   Wiki Teorías del Aprendizaje — UPTPC
   Componentes compartidos: header, footer, funciones JS
   Autor: José Herrera
   ============================================================ */

// ── Auto-detectar nivel de la página ──
// Si el archivo está en modulos/, los paths relativos necesitan ../
// Si está en la raíz, los paths relativos son directos
var isInModule = window.location.pathname.indexOf('/modulos/') !== -1;
var ROOT = isInModule ? '../' : './';

// ── Templates de componentes ──
var componentTemplates = {

  header: '<nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm sticky-top" style="top:4px;">\n' +
    '  <div class="container">\n' +
    '    <a class="navbar-brand d-flex align-items-center gap-2" href="' + ROOT + 'index.html">\n' +
    '      <img src="' + ROOT + 'assets/logos/logo-uptpc.png" alt="UPTPC" height="44" />\n' +
    '      <span class="badge bg-primary rounded-pill fw-semibold">Wiki Teorias del Aprendizaje</span>\n' +
    '    </a>\n' +
    '    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Abrir menu">\n' +
    '      <span class="navbar-toggler-icon"></span>\n' +
    '    </button>\n' +
    '    <div class="collapse navbar-collapse" id="mainNav">\n' +
    '      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-1 align-items-lg-center">\n' +
    '        <li class="nav-item"><a class="nav-link fw-medium" href="' + ROOT + 'index.html#inicio">Inicio</a></li>\n' +
    '        <li class="nav-item"><a class="nav-link fw-medium" href="' + ROOT + 'index.html#linea-de-tiempo">Linea de Tiempo</a></li>\n' +
    '        <li class="nav-item"><a class="nav-link fw-medium" href="' + ROOT + 'index.html#modulos">Modulos</a></li>\n' +
    '        <li class="nav-item"><a class="nav-link fw-medium" href="' + ROOT + 'modulos/conclusion.html">Conclusion</a></li>\n' +
    '        <li class="nav-item ms-lg-2">\n' +
    '          <button id="btnReading" class="btn btn-sm btn-outline-primary" type="button" aria-label="Cambiar tamano de letra">\n' +
    '            <i class="bi bi-fonts"></i>\n' +
    '          </button>\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</nav>',

  footer: '<footer class="bg-white border-top pt-5 pb-4">\n' +
    '  <div class="container">\n' +
    '    <div class="row g-4 align-items-center">\n' +
    '      <div class="col-md-4 text-center text-md-start">\n' +
    '        <img src="' + ROOT + 'assets/logos/logo-uptpc.png" alt="UPTPC" height="70" class="mb-2" />\n' +
    '      </div>\n' +
    '      <div class="col-md-4 text-center">\n' +
    '        <img src="' + ROOT + 'assets/logos/educacion-universitaria.png" alt="Educacion Universitaria" height="70" class="mx-2 my-2" />\n' +
    '        <img src="' + ROOT + 'assets/logos/ciencia-tecnologia.png" alt="Ciencia y Tecnologia" height="70" class="mx-2 my-2" />\n' +
    '      </div>\n' +
    '      <div class="col-md-4 text-center text-md-end">\n' +
    '        <h6 class="fw-bold mb-2" style="color:#0a2a6c;">Teorias del Aprendizaje</h6>\n' +
    '        <p class="small text-secondary mb-1"><i class="bi bi-person-fill me-1"></i> José Herrera</p>\n' +
    '        <p class="small text-secondary mb-1"><i class="bi bi-envelope me-1"></i> sereinf@uptpc.edu.ve</p>\n' +
    '        <p class="small text-secondary mb-1"><i class="bi bi-whatsapp me-1"></i> <a href="https://api.whatsapp.com/send?phone=584141448515&text=Saludos%20cordiales%20deseo%20exponer%20el%20siguiente%20caso:&source=&data=&app_absent=" target="_blank" rel="noopener noreferrer" class="text-secondary text-decoration-none">+58 414 1448515</a></p>\n' +
    '        <p class="small text-secondary mb-1"><i class="bi bi-github me-1"></i> Desplegado en GitHub Pages</p>\n' +
    '        <p class="small text-secondary mb-0"><i class="bi bi-globe2 me-1"></i> <a href="https://www.uptpc.edu.ve" target="_blank" rel="noopener noreferrer" class="text-secondary text-decoration-none">www.uptpc.edu.ve</a></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <hr class="my-4" />\n' +
    '    <div class="text-center small text-secondary mb-3">\n' +
    '      Universidad Politecnica Territorial de Puerto Cabello.<br/>\n' +
    '      <em>"Tambien somos Ciencia para la vida"</em>\n' +
    '    </div>\n' +
    '    <div class="text-center small text-secondary">\n' +
    '      &copy; <span id="year"></span> UPTPC — Unidad de Ciencia y Tecnologia. Contenido bajo licencia academica abierta.\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</footer>'
};

// ── Inyectar header y footer ──
function injectComponents() {
  var headerPlaceholder = document.getElementById('wiki-header');
  var footerPlaceholder = document.getElementById('wiki-footer');

  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = componentTemplates.header;
  }
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = componentTemplates.footer;
  }

  // Año dinámico
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ── Función: alternar tamaño de letra ──
var fontSizeLevels = ['100%', '115%', '130%', '145%'];
var currentFontSizeIndex = 0;

function toggleFontSize() {
  currentFontSizeIndex = (currentFontSizeIndex + 1) % fontSizeLevels.length;
  document.documentElement.style.fontSize = fontSizeLevels[currentFontSizeIndex];

  var btn = document.getElementById('btnReading');
  if (btn) {
    btn.textContent = '';
    var icon = document.createElement('i');
    icon.className = 'bi bi-fonts';
    btn.appendChild(icon);

    var span = document.createElement('span');
    span.className = 'ms-1 small';
    span.textContent = fontSizeLevels[currentFontSizeIndex];
    btn.appendChild(span);
  }
}

// ── Función: animaciones de scroll ──
function setupScrollAnimations() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });
}

// ── Función: scroll smooth a anchors ──
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId && targetId.length > 1) {
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var offset = 80;
          var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      }
    });
  });
}

// ── Función: tooltip de Bootstrap ──
function setupTooltips() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

// ── Función: highlight de tarjeta activa en timeline ──
function setupTimelineHighlight() {
  var cards = document.querySelectorAll('.timeline-card');
  cards.forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      cards.forEach(function (c) { c.classList.remove('border-primary'); c.classList.add('border-light'); });
      this.classList.remove('border-light');
      this.classList.add('border-primary');
    });
    card.addEventListener('mouseleave', function () {
      this.classList.remove('border-primary');
      this.classList.add('border-light');
    });
  });
}

// ── Función: filtro de teorías ──
function setupTheoryFilter() {
  var filterBtns = document.querySelectorAll('.filter-btn');
  var theoryCards = document.querySelectorAll('.theory-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = this.getAttribute('data-filter');

      // Activar botón
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      // Filtrar tarjetas
      theoryCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = '';
          card.classList.add('fade-in', 'visible');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ── Función: barra de progreso de lectura ──
function setupReadingProgress() {
  var progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = Math.min(progress, 100) + '%';
  });
}

// ── Función: contador de visitas ──
function setupVisitCounter() {
  var counterEl = document.getElementById('visit-count');
  if (!counterEl) return;

  var stored = localStorage.getItem('wiki-visits');
  var count = stored ? parseInt(stored) + 1 : 1;
  localStorage.setItem('wiki-visits', count.toString());
  counterEl.textContent = count;
}

// ── Inicialización ──
document.addEventListener('DOMContentLoaded', function () {
  injectComponents();
  setupScrollAnimations();
  setupSmoothScroll();
  setupTooltips();
  setupTimelineHighlight();
  setupTheoryFilter();
  setupReadingProgress();
  setupVisitCounter();

  // Botón de tamaño de letra
  var btnReading = document.getElementById('btnReading');
  if (btnReading) {
    btnReading.addEventListener('click', toggleFontSize);
  }

  // Marcar nav-link activo según filename
  var currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(function (link) {
    var linkPage = link.getAttribute('href');
    if (linkPage) {
      var linkFile = linkPage.split('/').pop().split('#')[0];
      if (currentPage === linkFile || (currentPage === '' && linkFile === 'index.html')) {
        link.classList.add('active');
      }
    }
  });
});
