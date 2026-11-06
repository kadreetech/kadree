import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import ts from 'typescript'
import test from 'node:test'
const require = createRequire(import.meta.url)
require.extensions['.ts'] = (module, filename) => {
  const source = require('node:fs').readFileSync(filename, 'utf8')
  module._compile(ts.transpileModule(source, {compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText, filename)
}
const { localizedPath, basePath } = require('../lib/site.ts')
const config = require('../next.config.js')
const pairs = [
  ['/about-us/', '/nosotros/', '/en/about-us/'],
  ['/custom-software/', '/desarrollo-software/', '/en/custom-software/'],
  ['/cyber-security/', '/ciberseguridad/', '/en/cyber-security/'],
  ['/it-consultancy-and-training/', '/consultoria-tecnologica/', '/en/it-consultancy-and-training/'],
  ['/it-staff-augmentation/', '/ampliacion-equipos-ti/', '/en/it-staff-augmentation/'],
  ['/staff-augmentation/', '/tercerizacion-talento-ti/', '/en/staff-augmentation/'],
  ['/terms-and-conditions/', '/terminos-y-condiciones/', '/en/terms-and-conditions/'],
]
test('language switching resolves every old and localized page identifier', () => {
  for (const [old, es, en] of pairs) for (const source of [old, es, en]) {
    assert.equal(localizedPath(source, false), es)
    assert.equal(localizedPath(source, true), en)
    assert.equal(basePath(source), old.replace(/\/$/, ''))
  }
  assert.equal(localizedPath('/en/', false), '/')
  assert.equal(localizedPath('/', true), '/en/')
  assert.equal(localizedPath('/nosotros/?ref=menu#equipo', true), '/en/about-us/')
  assert.equal(localizedPath('/not-a-page/', false), '/not-a-page/')
})
test('legacy URLs have explicit one-hop 301 redirects, never to another alias', async () => {
  assert.equal(typeof config.redirects, 'function', 'server redirects must be configured')
  const redirects = await config.redirects()
  for (const [old, es] of pairs) for (const source of [old, old.slice(0,-1)]) {
    const redirect = redirects.find(rule => rule.source === source)
    assert.ok(redirect, source)
    assert.equal(redirect.destination, es)
    assert.equal(redirect.statusCode, 301)
    assert.ok(!redirects.some(rule => rule.source === es), 'canonical destination must not redirect')
  }
})
