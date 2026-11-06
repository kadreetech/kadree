import Image from 'next/image'
import Link from 'next/link'
import { Lang, useMainContext } from '../../context/context'
import { localizedPath, WHATSAPP_URL } from '../../lib/site'
import { HomeNavigation } from '../navigation/HomeNavigation'
import styles from '../../styles/About.module.css'

const content = {
  [Lang.ES]: {
    label: 'NOSOTROS', start: 'Nuestro objetivo:', end: 'que tus proyectos tengan éxito.',
    intro: 'Conectamos talento especializado y tecnología con los objetivos de tu negocio.',
    cta: 'Consultar', photo: 'Profesionales colaborando en un proyecto de tecnología',
    proposition: 'NUESTRA PROPUESTA', heading: 'Tecnología con un propósito. El tuyo.',
    body: 'En Kadree Tech impulsamos la transformación digital mediante talento especializado y soluciones tecnológicas. Nos enfocamos en gestionar los riesgos operativos y alinear nuestras soluciones con tus objetivos estratégicos, para que la innovación aporte valor al negocio.',
    body2: 'Desde pequeñas empresas hasta grandes organizaciones, acompañamos a nuestros clientes para que se adapten al futuro digital con confianza y resultados medibles.',
    approach: 'CÓMO TE ACOMPAÑAMOS', approachTitle: 'Personas, tecnología y criterio experto.',
    services: [
      ['01', 'Talento que se integra a tu equipo', 'Incorpora profesionales especializados que trabajen bajo tus procesos y prioridades, con la gestión operativa de Kadree Tech.', '/it-staff-augmentation/', 'Conocer Staff Augmentation'],
      ['02', 'Software pensado para tu negocio', 'Desarrolla soluciones digitales adaptadas a las necesidades de tus usuarios, tus equipos y tus procesos.', '/custom-software/', 'Conocer desarrollo a la medida'],
      ['03', 'Decisiones con acompañamiento experto', 'Avanza con consultoría tecnológica, gobierno y capacitación en IA, y gerencia de proyectos a demanda.', '/it-consultancy-and-training/', 'Conocer consultoría'],
    ],
    closing: 'HABLEMOS DE TU PROYECTO', closingTitle: 'Transformemos el mundo con software.',
    closingBody: 'Con productos y talento que marcan la diferencia. Cuéntanos qué quieres lograr y conversemos sobre cómo acompañarte.',
    whatsapp: 'Consultar por WhatsApp',
  },
  [Lang.EN]: {
    label: 'ABOUT US', start: 'Our goal:', end: 'to make your projects succeed.',
    intro: 'We connect specialized talent and technology with your business goals.',
    cta: 'Let’s talk', photo: 'Technology professionals collaborating on a project',
    proposition: 'OUR VALUE PROPOSITION', heading: 'Technology with a purpose. Yours.',
    body: 'At Kadree Tech, we drive digital transformation through specialized talent and technology solutions. We focus on managing operational risks and aligning our solutions with your strategic goals, so innovation creates value for your business.',
    body2: 'From small businesses to large organizations, we help our clients adapt to the digital future with confidence and measurable results.',
    approach: 'HOW WE SUPPORT YOU', approachTitle: 'People, technology and expert guidance.',
    services: [
      ['01', 'Talent that becomes part of your team', 'Bring in specialized professionals who work within your processes and priorities, while Kadree Tech handles operations.', '/it-staff-augmentation/', 'Explore Staff Augmentation'],
      ['02', 'Software built around your business', 'Develop digital solutions tailored to the needs of your users, teams and workflows.', '/custom-software/', 'Explore custom development'],
      ['03', 'Expert support for informed decisions', 'Move forward with technology consulting, AI governance and training, and on-demand project management.', '/it-consultancy-and-training/', 'Explore consulting'],
    ],
    closing: 'LET’S TALK ABOUT YOUR PROJECT', closingTitle: 'Let’s transform the world with software.',
    closingBody: 'Through products and talent that make a difference. Tell us what you want to achieve, and let’s explore how we can help.',
    whatsapp: 'Contact us on WhatsApp',
  },
}

export const AboutLayout = ({ menu }: { menu: any[] }) => {
  const { lang = Lang.ES } = useMainContext()
  const text = content[lang]
  return <HomeNavigation menu={menu}>
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroPhoto}>
          <Image src="https://cdn.sanity.io/images/z72wzr8g/production/994a52d872fec10219b138cee26d1ce045ca5cbe-4323x1938.jpg?w=1600&q=85&auto=format" alt={text.photo} layout="fill" objectFit="cover" priority />
        </div>
        <div className={styles.container}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{text.label}</p>
            <h1>{text.start}<br /><span>{text.end}</span></h1>
            <p className={styles.intro}>{text.intro}</p>
            <a className={styles.button} href={WHATSAPP_URL}>{text.cta} <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
      <section className={styles.proposition}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>{text.proposition}</p>
          <div className={styles.propositionGrid}>
            <h2>{text.heading}</h2>
            <div><p>{text.body}</p><p>{text.body2}</p></div>
          </div>
        </div>
      </section>
      <section className={styles.approach}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>{text.approach}</p>
          <h2>{text.approachTitle}</h2>
          <div className={styles.services}>
            {text.services.map(([number, title, body, href, label]) => <article key={number}>
              <span className={styles.number}>{number}</span>
              <div><h3>{title}</h3><p>{body}</p></div>
              <Link href={localizedPath(href, lang === Lang.EN)}><a>{label} <span aria-hidden="true">↗</span></a></Link>
            </article>)}
          </div>
        </div>
      </section>
      <section className={styles.contact}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>{text.closing}</p>
          <h2>{text.closingTitle}</h2>
          <p>{text.closingBody}</p>
          <a className={styles.button} href={WHATSAPP_URL}>{text.whatsapp} <span aria-hidden="true">→</span></a>
        </div>
      </section>
      <ServiceAnswers path="/about-us/" />
    </main>
  </HomeNavigation>
}
import { ServiceAnswers } from './ServiceAnswers'
