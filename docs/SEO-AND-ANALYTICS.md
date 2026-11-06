# SEO, idiomas y medición

## Rutas

El español usa slugs en español. El inglés usa el prefijo /en/ con slugs en inglés.

| Español | Inglés |
| --- | --- |
| / | /en/ |
| /nosotros/ | /en/about-us/ |
| /desarrollo-software/ | /en/custom-software/ |
| /ampliacion-equipos-ti/ | /en/it-staff-augmentation/ |
| /consultoria-tecnologica/ | /en/it-consultancy-and-training/ |
| /tercerizacion-talento-ti/ | /en/staff-augmentation/ |
| /ciberseguridad/ | /en/cyber-security/ |
| /terminos-y-condiciones/ | /en/terms-and-conditions/ |

Cada ruta genera su idioma y sus metadatos en el HTML estático, antes de ejecutar JavaScript. El selector de idioma enlaza a la página equivalente mediante frontend/lib/routes.js. Los identificadores internos antiguos del contenido no son URLs públicas: localizedPath los convierte al destino correcto.

Las URLs españolas antiguas con slug inglés redirigen 301 a sus equivalentes españolas. Las reglas nativas de netlify.toml evitan el salto previo de normalización de barra del runtime Next.js 12; next.config.js incluye las mismas redirecciones como respaldo y para pruebas locales. Localmente, una URL antigua sin barra puede recibir primero 308 para añadir la barra y después 301 al slug nuevo. Los enlaces internos y el sitemap apuntan directamente a la URL final. Verificar ambos casos en el Deploy Preview antes de publicar. Mantener las redirecciones al menos un año, preferiblemente permanentemente.

Ambas páginas de Staff conservan contenido independiente: ampliacion-equipos-ti es el diseño nuevo del menú; tercerizacion-talento-ti conserva la página anterior.

## SEO

- Metadatos editoriales por idioma: frontend/lib/seo.ts.
- Dominio canónico: https://kadreetech.com. En Netlify, comprobar que éste siga siendo el dominio principal y que www redirija a él antes de publicar. Si el principal cambia, alinear lib/site.ts y next-sitemap.config.js.
- Canonical propio, hreflang es/en/x-default, Open Graph y Twitter por página.
- Datos estructurados Organization, WebSite, WebPage/AboutPage y Service donde corresponda. Sin calificaciones ni reseñas estructuradas que prometan resultados enriquecidos no aplicables.
- Robots y sitemap bilingüe se regeneran durante postbuild. Los archivos generados están excluidos de Git por la configuración existente del proyecto.
- Las palabras clave se trabajan en títulos, descripciones y contenido. No se añade meta keywords porque Google la ignora.
- Las traducciones de respaldo de contenido antiguo de Sanity están en frontend/lib/cms-translations.ts. Los documentos españoles de Sanity tienen prioridad; las referencias a imágenes y documentos se conservan. Cuando se agregue contenido inglés nuevo al CMS, agregar su traducción española o crear el documento español correspondiente.
- La página Nosotros usa el nuevo AboutLayout con contenido bilingüe en el repositorio y la imagen del Nosotros actual en Sanity.

## Google Tag Manager y GA4

El usuario confirmó conservar GTM-NJKRCJNP con GA4. Los dos fragmentos facilitados eran contenedores GTM, no dos productos que deban instalarse en paralelo.

- Contenedor instalado una sola vez en _document.tsx: GTM-NJKRCJNP.
- Usa el arranque estándar de GTM en head y el iframe noscript al inicio del body.
- El contenedor público consultado durante la implementación respondió HTTP 200 e incluyó el identificador GA4 G-528K4XTWFW. Esto confirma la configuración publicada visible, no la recepción de eventos en la propiedad.
- No instalar otro gtag ni el contenedor GTM-PTWQWCM9 en paralelo.
- Después del despliegue, abrir Tag Assistant y confirmar una sola instalación y un page_view por carga/cambio de página. Comprobar también la navegación interna de Next.js y evitar activar simultáneamente dos mecanismos de medición de historial.
- Abrir GA4 Tiempo real / DebugView en la propiedad correcta y comprobar recepción de eventos. La instalación también carga en localhost; usar filtros de desarrollador al probar para no confundir visitas de prueba con tráfico de producción.
- La medición mejorada de enlaces salientes puede registrar los clics en wa.me. Un clic de contacto no demuestra que se haya enviado un mensaje ni que exista una venta.
- Revisar los ajustes de consentimiento y privacidad aplicables al sitio dentro del contenedor y la política publicada.

## Contacto

Los CTA comerciales, incluido el header, apuntan a https://wa.me/573008013539. Los controles de navegación, idioma, pestañas y carrusel conservan su función. Las secciones que antes mostraban formularios usan un CTA a WhatsApp. Los enlaces informativos de correo y LinkedIn del pie se conservan.

## Comprobación y publicación

1. Detener el servidor dev antes de ejecutar npm run build para no mezclar salidas en .next.
2. Ejecutar npm run build desde frontend.
3. Ejecutar node --test tests/staff-augmentation-build.test.mjs tests/bilingual-seo-build.test.mjs.
4. Revisar /nosotros/ y /en/about-us/ en escritorio y móvil, y cambiar de idioma desde un servicio. Ejecutar también node --test tests/localized-routes.test.mjs.
5. Crear una rama/PR con los cambios revisados y comprobar el Deploy Preview de Netlify.
6. Después de publicar, comprobar sitemap.xml y enviar https://kadreetech.com/sitemap.xml en Search Console. Inspeccionar las nuevas URLs españolas e inglesas y solicitar indexación de las prioritarias. No usar Retirada de URLs para esta migración ni Cambio de dirección (el dominio no cambia). No borrar el sitemap de la propiedad si ya usa la misma URL: reenviarlo.
7. Confirmar 301 de cada ruta antigua, destino 200, canonical final y hreflang recíproco. Monitorizar Indexación > Páginas: las antiguas pueden figurar como Página con redirección, lo cual es esperado. Puede haber fluctuaciones mientras Google vuelve a rastrear.

Esta entrega prepara el código. No solicita indexación, no modifica la cuenta de Google y no cambia DNS.

## Contenido y descubrimiento

- El postbuild ejecuta next-sitemap y scripts/sitemap-presentation.cjs. Añade una instrucción de estilo CSS a los XML, conservando sus elementos, URLs y hreflang; no usa XSLT ni detección de bots.
- /mapa-del-sitio.html es la vista legible con enlaces a todas las páginas y a los archivos XML. Se genera desde los loc reales de los sitemaps y lleva noindex,follow; no se incluye en el sitemap de páginas.
- public/sitemap.css es el archivo estático de presentación. Los XML y el HTML se generan en cada build, no se versionan.
- robots.txt declara el índice y el archivo hijo sitemap-0.xml para descubrimiento directo. El éxito del índice en Search Console no demuestra que Google ya haya contabilizado sus páginas ni que estén indexadas. Si el contador continúa en cero, consultar el hijo en Search Console o enviarlo directamente una vez; no eliminar el índice válido ni prometer plazos de actualización.

- Software a medida tiene diseño bilingüe propio con Lexend Deca, Inter e iconos Material Design mediante la dependencia react-icons existente, sin fuentes de iconos externas.
- Los títulos y descripciones de servicios distinguen Staff Augmentation en Colombia, desarrollo de software a la medida en Colombia y gobierno de IA/consultoría. Se trabaja la intención de búsqueda sin repetir todas las frases en cada página.
- Las preguntas frecuentes de inicio, Nosotros y los tres servicios principales están en frontend/lib/answers.ts. Sus respuestas se entregan en el HTML, con controles details accesibles, enlaces internos y FAQPage coherente con el texto visible. Software incluye BreadcrumbList que corresponde a su navegación visible.
- La elegibilidad de FAQPage no garantiza resultados enriquecidos; Google los limita principalmente a sitios gubernamentales y de salud.
- No hay garantía de posiciones ni recomendaciones de IA. Google indica que sus funciones de IA usan las bases de SEO y no requieren archivos ni marcado especial: https://developers.google.com/search/docs/appearance/ai-features.
- Pruebas adicionales: node --test tests/service-content-build.test.mjs.
