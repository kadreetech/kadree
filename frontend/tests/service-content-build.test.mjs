import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const routes = ['', 'about-us', 'custom-software', 'it-staff-augmentation', 'it-consultancy-and-training']
const spanishRoutes = ['', 'nosotros', 'desarrollo-software', 'ampliacion-equipos-ti', 'consultoria-tecnologica']
const decode = value => value.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
for (const [index, route] of routes.entries()) for (const english of [false, true]) {
  const path = (english ? ['en', route].filter(Boolean).join('/') : spanishRoutes[index]) || 'index'
  test(`${path}: structured answers match visible, server-rendered content`, async () => {
    const html = await readFile(new URL(`../.next/server/pages/${path}.html`, import.meta.url), 'utf8')
    const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph']
    const faq = graph.find(item => item['@type'] === 'FAQPage')
    assert.ok(faq)
    assert.equal((html.match(/<summary>/g) || []).length, faq.mainEntity.length)
    const visible = decode(html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]*>/g, ''))
    for (const question of faq.mainEntity) {
      assert.ok(visible.includes(question.name), question.name)
      assert.ok(visible.includes(question.acceptedAnswer.text), 'answer exists outside JSON-LD')
    }
    if (route === 'custom-software') {
      assert.ok(graph.some(item => item['@type'] === 'BreadcrumbList'))
      assert.match(html, /Scrum/)
      assert.match(html, /Microsoft Azure/)
      assert.match(html, english ? /Built around your business/ : /Con visión de negocio/)
      assert.match(html, /<svg/)
    }
  })
}
