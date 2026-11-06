import Head from 'next/head'
import { useRouter } from 'next/router'
import { Lang, useMainContext } from '../../context/context'
import { basePath, localizedPath, SITE_URL } from '../../lib/site'
import { metadata } from '../../lib/seo'
import { pageAnswers } from '../../lib/answers'

export const HtmlHead = () => {
  const { lang } = useMainContext()
  const { pathname } = useRouter()
  const english = lang === Lang.EN
  const base = basePath(pathname)
  const entry = metadata[base]
  const [title, description] = entry ? entry[english ? 'en' : 'es'] : [english ? 'Page not found | Kadree Tech' : 'Página no encontrada | Kadree Tech', english ? 'Explore Kadree Tech’s technology services.' : 'Conoce los servicios tecnológicos de Kadree Tech.']
  const canonical = `${SITE_URL}${localizedPath(base, english)}`
  const image = `${SITE_URL}/img/brand/meta.png`
  const answers = pageAnswers[base]?.[english ? 'en' : 'es']
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Kadree Tech', url: SITE_URL, logo: `${SITE_URL}/img/redesign/logo-kadree.svg`, sameAs: ['https://www.linkedin.com/company/kadreetech/'], contactPoint: { '@type': 'ContactPoint', telephone: '+57-300-8013539', contactType: 'sales', availableLanguage: ['Spanish', 'English'] } },
      { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: 'Kadree Tech', inLanguage: ['es', 'en'], publisher: { '@id': `${SITE_URL}/#organization` } },
      { '@type': base === '/about-us' ? 'AboutPage' : 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: title, description, inLanguage: english ? 'en' : 'es', isPartOf: { '@id': `${SITE_URL}/#website` } },
      ...(entry?.service ? [{ '@type': 'Service', name: entry.service[english ? 1 : 0], url: canonical, description, provider: { '@id': `${SITE_URL}/#organization` }, areaServed: ['Colombia', 'United States', 'Latin America'] }] : []),
      ...(answers ? [{ '@type': 'FAQPage', '@id': `${canonical}#questions`, inLanguage: english ? 'en' : 'es', mainEntity: answers.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }] : []),
      ...(base === '/custom-software' ? [{ '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: english ? 'Home' : 'Inicio', item: `${SITE_URL}${localizedPath('/', english)}` }, { '@type': 'ListItem', position: 2, name: english ? 'Software development' : 'Desarrollo de software', item: canonical }] }] : []),
    ],
  }
  return <Head>
    <title>{title}</title>
    <meta name="description" content={description} key="description" />
    <meta name="robots" content={entry ? 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' : 'noindex,follow'} />
    {entry && <link rel="canonical" href={canonical} />}
    {entry && <link rel="alternate" hrefLang="es" href={`${SITE_URL}${localizedPath(base, false)}`} />}
    {entry && <link rel="alternate" hrefLang="en" href={`${SITE_URL}${localizedPath(base, true)}`} />}
    {entry && <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${localizedPath(base, false)}`} />}
    <meta property="og:type" content="website" /><meta property="og:site_name" content="Kadree Tech" />
    <meta property="og:title" content={title} /><meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} /><meta property="og:image" content={image} />
    <meta property="og:locale" content={english ? 'en_US' : 'es_CO'} /><meta property="og:locale:alternate" content={english ? 'es_CO' : 'en_US'} />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} /><meta name="twitter:image" content={image} />
    <link rel="icon" href="/favicon.ico" /><link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" /><link rel="manifest" href="/site.webmanifest" />
    {entry && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />}
  </Head>
}
