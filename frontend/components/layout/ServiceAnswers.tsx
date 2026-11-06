import Link from 'next/link'
import { Lang, useMainContext } from '../../context/context'
import { basePath, localizedPath } from '../../lib/site'
import { pageAnswers, relatedServices } from '../../lib/answers'
import styles from '../../styles/ServiceAnswers.module.css'

export const ServiceAnswers = ({ path }: { path: string }) => {
  const { lang } = useMainContext()
  const english = lang === Lang.EN
  const currentPath = basePath(path)
  const entry = pageAnswers[currentPath]
  if (!entry) return null
  return <section className={styles.section} aria-label={english ? 'Service questions and related services' : 'Preguntas y servicios relacionados'}>
    <div className={styles.layout}>
      <div className={styles.intro}>
        <h2>{english ? 'Clear answers before we begin.' : 'Respuestas claras antes de empezar.'}</h2>
        <p>{english ? 'Learn how we work and find the right service for your project.' : 'Conoce cómo trabajamos y encuentra el servicio adecuado para tu proyecto.'}</p>
        <Link href={localizedPath('/about-us/', english)}><a>{english ? 'Meet Kadree Tech' : 'Conoce Kadree Tech'} <span aria-hidden="true">→</span></a></Link>
      </div>
      <div className={styles.questions}>
        {entry[english ? 'en' : 'es'].map(({ question, answer }) => <details key={question}>
          <summary>{question}<span className={styles.plus} aria-hidden="true" /></summary>
          <p>{answer}</p>
        </details>)}
      </div>
    </div>
    <nav className={styles.related} aria-label={english ? 'Related services' : 'Servicios relacionados'}>
      <h3>{english ? 'Explore our services' : 'Explora nuestros servicios'}</h3>
      {relatedServices.filter(service => basePath(service.path) !== currentPath).map(service => <Link key={service.path} href={localizedPath(service.path, english)}><a>{service[english ? 'en' : 'es']} <span aria-hidden="true">↗</span></a></Link>)}
    </nav>
  </section>
}
