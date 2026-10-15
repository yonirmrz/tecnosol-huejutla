// TecnoSol Huejutla - comportamiento compartido
var WA = '52789XXXXXXX'; // cambia por tu número de WhatsApp (código de país + número)

// Menú móvil
var mb = document.getElementById('mb'), nv = document.getElementById('nv');
if (mb && nv) {
  mb.addEventListener('click', function () {
    var open = nv.classList.toggle('open');
    mb.setAttribute('aria-expanded', open);
  });
}

// Catálogo con filtros (solo en equipos.html)
var chips = document.getElementById('chips'), cat = document.getElementById('cat');
if (chips && cat) {
  var P = [
    ['Laptops','Laptop para estudiantes','Memoria y SSD suficientes para programar y estudiar.'],
    ['Laptops','Laptop para trabajo diario','Ligera, con batería duradera para oficina y casa.'],
    ['Laptops','Laptop económica','La opción accesible para empezar sin gastar de más.'],
    ['Escritorio','Computadora de escritorio','Armada según tu uso: oficina, diseño o cómputo general.'],
    ['Accesorios','Monitores','Pantallas para oficina, estudio o punto de venta.'],
    ['Accesorios','Teclados y ratones','Alámbricos e inalámbricos, para casa y oficina.'],
    ['Componentes','Memoria RAM y discos SSD','Dale nueva vida a tu equipo con una mejora.'],
    ['Componentes','Refacciones','Baterías, cargadores, pantallas y ventiladores.'],
    ['Redes','Routers y cámaras','Equipo para la red y la seguridad de tu negocio.']
  ];
  var cats = ['Todos','Laptops','Escritorio','Accesorios','Componentes','Redes'], cur = 'Todos';
  var draw = function () {
    chips.innerHTML = cats.map(function (c) {
      return '<button class="chip" aria-pressed="' + (c === cur) + '" data-c="' + c + '">' + c + '</button>';
    }).join('');
    cat.innerHTML = P.filter(function (x) { return cur === 'Todos' || x[0] === cur; }).map(function (x) {
      return '<article class="card prod"><div class="ph" aria-hidden="true">' + x[0] + '</div><h3>' + x[1] +
        '</h3><p>' + x[2] + '</p><a class="btn ghost" href="contacto.html?producto=' + encodeURIComponent(x[1]) + '">Cotizar</a></article>';
    }).join('');
  };
  chips.addEventListener('click', function (e) {
    var c = e.target.closest('.chip');
    if (c) { cur = c.dataset.c; draw(); }
  });
  draw();
}

// Formulario de contacto -> WhatsApp (solo en contacto.html)
var f = document.getElementById('f');
if (f) {
  var q = new URLSearchParams(location.search).get('producto');
  if (q) {
    document.getElementById('s').value = 'Comprar un equipo';
    document.getElementById('d').value = 'Me interesa: ' + q + '. ';
  }
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var n = document.getElementById('n').value.trim(), m = document.getElementById('msg');
    if (!n) { m.textContent = 'Escribe tu nombre para continuar.'; document.getElementById('n').focus(); return; }
    var t = 'Hola, soy ' + n + '. Necesito: ' + document.getElementById('s').value + '. ' + document.getElementById('d').value.trim();
    m.textContent = 'Abriendo WhatsApp...';
    window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(t), '_blank', 'noopener');
  });
}
