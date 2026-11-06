const { readFile, writeFile, readdir } = require('node:fs/promises')
const { resolve, join } = require('node:path')

const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
const decode = value => value.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'")
const style = '<?xml-stylesheet type="text/css" href="/sitemap.css"?>\n'

async function main() {
  const option = process.argv.indexOf('--public-dir')
  const directory = option === -1 ? resolve(__dirname, '../public') : resolve(process.argv[option + 1])
  const files = (await readdir(directory)).filter(name => /^sitemap(?:-\d+)?\.xml$/.test(name)).sort()
  if (!files.includes('sitemap.xml')) throw new Error('Generate sitemap.xml before preparing its presentation.')
  const urls = new Set()
  for (const filename of files) {
    const original = await readFile(join(directory, filename), 'utf8')
    if (!/^<\?xml[^?]*\?>/.test(original)) throw new Error(`Missing XML declaration: ${filename}`)
    if (/<urlset\b/.test(original)) {
      for (const match of original.matchAll(/<loc>([^<]+)<\/loc>/g)) {
        const url = new URL(decode(match[1]))
        if (url.origin !== 'https://kadreetech.com') throw new Error(`Unexpected sitemap origin: ${url.origin}`)
        urls.add(url.href)
      }
    }
    const plain = original.replace(/<\?xml-stylesheet\s+type="text\/css"\s+href="\/sitemap\.css"\?>\n?/g, '')
    await writeFile(join(directory, filename), plain.replace(/^(<\?xml[^?]*\?>\r?\n?)/, '$1' + style))
  }
  if (!urls.size) throw new Error('The sitemap contains no page URLs.')
  const links = [...urls].map(href => {
    const url = new URL(href)
    const english = /^\/en(?:\/|$)/.test(url.pathname)
    const path = url.pathname + url.search
    const label = path === '/' ? 'Inicio' : path === '/en/' ? 'Home' : path
    return `<tr><td><a href="${escape(path)}">${escape(label)}</a></td><td lang="${english ? 'en' : 'es'}">${english ? 'English' : 'Español'}</td></tr>`
  }).join('\n')
  const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Mapa del sitio | Kadree Tech</title><meta name="description" content="Explora las páginas de Kadree Tech en español e inglés y accede a los sitemaps XML."><meta name="robots" content="noindex,follow"><link rel="stylesheet" href="/sitemap.css"><link rel="icon" href="/favicon.ico"></head>
<body><header><a href="/" aria-label="Inicio de Kadree Tech"><img src="/img/redesign/logo-kadree.svg" width="141" height="50" alt="Kadree Tech"></a><a class="back" href="/">Volver al sitio</a></header>
<main><h1>Mapa del sitio</h1><p class="intro">Todas las páginas de Kadree Tech, en español e inglés. Selecciona una dirección para visitarla.</p>
<nav aria-label="Archivos para motores de búsqueda"><a href="/sitemap.xml">Índice XML</a><a href="/sitemap-0.xml">URLs en XML</a><a href="/robots.txt">robots.txt</a></nav>
<table><caption>${urls.size} páginas disponibles · Available pages</caption><thead><tr><th scope="col">Página · Page</th><th scope="col">Idioma · Language</th></tr></thead><tbody>${links}</tbody></table>
<p class="note">Esta es una vista para personas. Para Google Search Console utiliza <a href="/sitemap.xml">sitemap.xml</a>. Aparecer en el mapa no significa que una página ya esté indexada.</p></main><footer>Kadree Tech · Talento y tecnología para tus proyectos.</footer></body></html>`
  await writeFile(join(directory, 'mapa-del-sitio.html'), html)
  console.log(`Sitemap presentation prepared: ${files.length} XML files, ${urls.size} page URLs.`)
}

main().catch(error => { console.error(error.message); process.exitCode = 1 })
