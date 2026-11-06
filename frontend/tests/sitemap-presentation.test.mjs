import assert from 'node:assert/strict'
import { mkdtemp, writeFile, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const script = new URL('../scripts/sitemap-presentation.cjs', import.meta.url)
const index = '<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>https://kadreetech.com/sitemap-0.xml</loc></sitemap></sitemapindex>'
const child = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://kadreetech.com/nosotros/</loc></url><url><loc>https://kadreetech.com/en/about-us/</loc></url></urlset>'
const stripStyle = xml => xml.replace(/<\?xml-stylesheet[^?]*\?>\n?/g, '')
test('presentation styles both XML documents without changing URLs, and generates a linked HTML view', async () => {
  const folder = await mkdtemp(join(tmpdir(), 'kadree-sitemap-'))
  try {
    await writeFile(join(folder, 'sitemap.xml'), index)
    await writeFile(join(folder, 'sitemap-0.xml'), child)
    for (let run = 0; run < 2; run++) {
      const result = spawnSync(process.execPath, [fileURLToPath(script), '--public-dir', folder], { encoding: 'utf8' })
      assert.equal(result.status, 0, result.stderr)
      for (const [filename, original] of [['sitemap.xml', index], ['sitemap-0.xml', child]]) {
        const xml = await readFile(join(folder, filename), 'utf8')
        assert.equal(stripStyle(xml), original)
        assert.equal((xml.match(/<\?xml-stylesheet/g) || []).length, 1)
        assert.match(xml, /type="text\/css" href="\/sitemap.css"/)
      }
    }
    const html = await readFile(join(folder, 'mapa-del-sitio.html'), 'utf8')
    assert.match(html, /href="\/nosotros\/"/)
    assert.match(html, /href="\/en\/about-us\/"/)
    assert.match(html, /href="\/sitemap.xml"/)
    assert.match(html, /href="\/sitemap-0.xml"/)
    assert.match(html, /lang="es"/)
    assert.match(html, /<th scope="col">/)
    assert.doesNotMatch(html, /<script|text\/xsl/)
  } finally { await rm(folder, { recursive: true, force: true }) }
})
