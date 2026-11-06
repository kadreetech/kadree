import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const built = new URL('../.next/server/pages/', import.meta.url)
const routes = ['/', '/nosotros/', '/desarrollo-software/', '/ciberseguridad/', '/consultoria-tecnologica/', '/ampliacion-equipos-ti/', '/tercerizacion-talento-ti/', '/terminos-y-condiciones/']
const englishRoutes = ['/en/', '/en/about-us/', '/en/custom-software/', '/en/cyber-security/', '/en/it-consultancy-and-training/', '/en/it-staff-augmentation/', '/en/staff-augmentation/', '/en/terms-and-conditions/']
const englishTitles = ['IT Staff Augmentation &amp; Software Development', 'About Us', 'Custom Software Development', 'Cybersecurity Solutions', 'AI Governance', 'IT Staff Augmentation', 'Technology Staffing Services', 'Terms and Conditions']

for (const [index, route] of routes.entries()) {
  for (const english of [false, true]) {
    const path = english ? englishRoutes[index] : route
    test('built page ' + path + ' has server-rendered language, SEO, GTM and contact links', async () => {
      const file = path === '/' ? 'index.html' : path.replace(/^\//, '').replace(/\/$/, '') + '.html'
      const html = await readFile(new URL(file, built), 'utf8')
      const count = (pattern) => (html.match(pattern) || []).length
      assert.match(html, new RegExp('<html[^>]*lang="' + (english ? 'en' : 'es') + '"'))
      assert.equal(count(/<title>/g), 1)
      assert.equal(count(/<meta name="description"/g), 1)
      assert.equal(count(/rel="canonical"/g), 1)
      assert.ok(html.includes('rel="canonical" href="https://kadreetech.com' + path + '"'))
      assert.ok(html.includes('hrefLang="es" href="https://kadreetech.com' + route + '"') || html.includes('hreflang="es" href="https://kadreetech.com' + route + '"'))
      assert.ok(html.includes('hrefLang="en" href="https://kadreetech.com' + englishRoutes[index] + '"') || html.includes('hreflang="en" href="https://kadreetech.com' + englishRoutes[index] + '"'))
      assert.equal(count(/<h1(?:\s|>)/g), 1, 'one primary heading per page')
      assert.match(html, /id="google-tag-manager"/)
      assert.match(html, /GTM-NJKRCJNP/)
      assert.doesNotMatch(html, /GTM-PTWQWCM9/)
      assert.match(html, /href="https:\/\/wa.me\/573008013539"/)
      assert.doesNotMatch(html, /<form(?:\s|>)/)
      assert.match(html, /application\/ld\+json/)
      const aliases = ['/about-us/', '/custom-software/', '/cyber-security/', '/it-consultancy-and-training/', '/it-staff-augmentation/', '/staff-augmentation/', '/terms-and-conditions/']
      for (const alias of aliases) assert.ok(!html.includes('href="' + alias + '"'), 'internal link must not use redirect alias: ' + alias)
      if (english) assert.ok(html.includes(englishTitles[index]), 'English title is present in initial HTML')
    })
  }
}
test('sitemap contains all language pairs and uses the canonical hostname', async () => {
  const xml = await readFile(new URL('../public/sitemap-0.xml', import.meta.url), 'utf8')
  for (const [index, route] of routes.entries()) {
    assert.ok(xml.includes('<loc>https://kadreetech.com' + route + '</loc>'))
    assert.ok(xml.includes('<loc>https://kadreetech.com' + englishRoutes[index] + '</loc>'))
  }
  assert.equal((xml.match(/<loc>/g) || []).length, 16)
  assert.doesNotMatch(xml, /<loc>https:\/\/kadreetech.com\/(?:about-us|custom-software|staff-augmentation)\//)
  assert.match(xml, /hreflang="en"/)
  assert.match(xml, /hreflang="es"/)
  assert.doesNotMatch(xml, /https:\/\/www\.kadreetech\.com/)
  const robots = await readFile(new URL('../public/robots.txt', import.meta.url), 'utf8')
  assert.match(robots, /Sitemap: https:\/\/kadreetech.com\/sitemap.xml/)
  assert.match(robots, /Sitemap: https:\/\/kadreetech.com\/sitemap-0.xml/)
})
