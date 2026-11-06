import { routePairs, contentPath } from './routes'
export const SITE_URL = 'https://kadreetech.com'
export const WHATSAPP_URL = 'https://wa.me/573008013539'
export const GTM_ID = 'GTM-NJKRCJNP'

export function isEnglishPath(path: string) {
  return /^\/en(?:\/|$)/.test(path.split(/[?#]/)[0])
}
export function basePath(path: string) {
  return contentPath(path)
}
export function localizedPath(path: string, english: boolean) {
  const base = basePath(path)
  const pair = routePairs[base as keyof typeof routePairs]
  if (pair) return pair[english ? 'en' : 'es']
  return `${english ? '/en' : ''}${base === '/' ? '/' : `${base}/`}`
}
export const publicRoutes = Object.values(routePairs).flatMap(pair => [pair.es, pair.en])
