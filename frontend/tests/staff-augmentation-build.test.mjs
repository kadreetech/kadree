import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const pagesDirectory = new URL('../.next/server/pages/', import.meta.url)

const readBuiltPage = async (filename) => readFile(new URL(filename, pagesDirectory), 'utf8')

test('build preserves the legacy Staff page and generates the new SEO page', async () => {
  const legacyPage = await readBuiltPage('staff-augmentation.html')
  const newPage = await readBuiltPage('it-staff-augmentation.html')

  assert.match(legacyPage, /<main|<div/)
  assert.match(newPage, /<link rel="canonical" href="https:\/\/www\.kadreetech\.com\/it-staff-augmentation\/"/)
  assert.match(newPage, /<script type="application\/ld\+json"/)
})

test('new Staff page has one H1 and a complete semantic heading hierarchy', async () => {
  const page = await readBuiltPage('it-staff-augmentation.html')
  const count = (tag) => (page.match(new RegExp(`<${tag}(?:\\s|>)`, 'g')) || []).length

  assert.equal(count('h1'), 1)
  assert.ok(count('h2') >= 4, 'expected at least four H2 section headings')
  assert.ok(count('h3') >= 4, 'expected card and process H3 headings')
  assert.ok(count('h4') >= 2, 'expected nested H4 headings in the collaboration model')
})

test('service menus point to the new Staff page instead of the legacy page', async () => {
  const [legacyPage, newPage] = await Promise.all([
    readBuiltPage('staff-augmentation.html'),
    readBuiltPage('it-staff-augmentation.html'),
  ])

  for (const page of [legacyPage, newPage]) {
    assert.match(page, /href="\/it-staff-augmentation\/?"/)
    assert.doesNotMatch(page, /href="\/staff-augmentation\/?"/)
  }
})
