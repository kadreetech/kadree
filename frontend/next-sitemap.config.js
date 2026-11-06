/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://kadreetech.com'
const { routePairs, contentPath } = require('./lib/routes')
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/api/*', '/404', '/500'],
  transform: async (_config, path) => {
    const clean = path.replace(/\/+$/, '') || '/'
    const pair = routePairs[contentPath(path)]
    if (!pair) return null
    const { es: spanish, en: english } = pair
    const canonicalPath = clean === '/' ? '/' : clean + '/'
    if (canonicalPath !== spanish && canonicalPath !== english) return null
    return {
      loc: clean === '/' ? '/' : clean + '/',
      alternateRefs: [
        { href: siteUrl + spanish, hreflang: 'es', hrefIsAbsolute: true },
        { href: siteUrl + english, hreflang: 'en', hrefIsAbsolute: true },
        { href: siteUrl + spanish, hreflang: 'x-default', hrefIsAbsolute: true },
      ],
    }
  },
}
