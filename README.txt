TecnoSol Huejutla - Sitio web (8 páginas)
Proyecto de Gestión Tecnológica Empresarial

ESTRUCTURA
  index.html       Inicio
  servicios.html   Servicios
  equipos.html     Equipos y accesorios (catálogo con filtros)
  soporte.html     Servicio técnico + preguntas frecuentes
  planes.html      Modelos de cobro
  guias.html       Guías rápidas
  nosotros.html    Nosotros
  contacto.html    Cotización por WhatsApp
  css/styles.css   Estilos (modo claro y oscuro)
  js/main.js       Menú, catálogo y formulario
  robots.txt, sitemap.xml   Para SEO

ANTES DE PUBLICAR, REEMPLAZA
  1. Número de WhatsApp: "52789XXXXXXX" en js/main.js y en el pie de página de cada .html
  2. Teléfono "(789) XXX-XXXX" y correo en el pie, contacto.html y los datos estructurados (JSON-LD)
  3. Horario de atención en contacto.html
  4. Dominio "tecnosolhuejutla.com" en canonical, og:url, sitemap.xml y robots.txt

CÓMO VERLO
  Abre index.html en tu navegador (doble clic). No requiere servidor.

DEVOPS (práctica de SDLC)
  Dockerfile, nginx.conf        Contenedor sin root, cabeceras de seguridad, /healthz y logs JSON
  docker-compose.yml            Sitio + exporter + Prometheus. Uso: docker compose up --build
                                Sitio: http://localhost:8080  |  Prometheus: http://localhost:9090
  .github/workflows/ci.yml      Pipeline CI/CD (HTML lint, Gitleaks, Trivy, prueba de humo, publicación en GHCR)
  .github/ (plantillas)         Pull request con Definition of Done e issue de historia de usuario
  docs/product-backlog.csv      Product Backlog importable a Trello o GitHub Projects
  Nota: ajusta las versiones de imágenes y acciones a las vigentes antes de usarlas.
