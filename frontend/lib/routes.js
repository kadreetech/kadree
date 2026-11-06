// Keys are stable content identifiers, not public Spanish URLs.
const routePairs = {
  '/': { es: '/', en: '/en/' },
  '/about-us': { es: '/nosotros/', en: '/en/about-us/' },
  '/custom-software': { es: '/desarrollo-software/', en: '/en/custom-software/' },
  '/cyber-security': { es: '/ciberseguridad/', en: '/en/cyber-security/' },
  '/it-consultancy-and-training': { es: '/consultoria-tecnologica/', en: '/en/it-consultancy-and-training/' },
  '/it-staff-augmentation': { es: '/ampliacion-equipos-ti/', en: '/en/it-staff-augmentation/' },
  '/staff-augmentation': { es: '/tercerizacion-talento-ti/', en: '/en/staff-augmentation/' },
  '/terms-and-conditions': { es: '/terminos-y-condiciones/', en: '/en/terms-and-conditions/' },
}

/** @param {string} path */
function contentPath(path) {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, '') || '/'
  for (const [key, pair] of Object.entries(routePairs)) {
    if (clean === key || clean === pair.es.replace(/\/$/, '') || clean === pair.en.replace(/\/$/, '')) return key
  }
  return clean.replace(/^\/en(?=\/|$)/, '') || '/'
}

const legacyRedirects = Object.entries(routePairs).filter(([key]) => key !== '/').flatMap(([key, pair]) =>
  [key, `${key}/`].map(source => ({ source, destination: pair.es, statusCode: 301 }))
)

module.exports = { routePairs, contentPath, legacyRedirects }
