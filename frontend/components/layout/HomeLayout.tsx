import Image from 'next/image'
import Link from 'next/link'
import { useNextSanityImage } from 'next-sanity-image'
import { Lang, useMainContext } from '../../context/context'
import Map2XL from '../../images/world_2xl.png'
import lowRisk from '../cards/icons/low_risk.svg'
import moneyCog from '../cards/icons/money_cog.svg'
import profiling from '../cards/icons/profiling.svg'
import shield from '../cards/icons/shield.svg'
import staff from '../cards/icons/staff.svg'
import lab from '../cards/icons/lab.svg'
import { ParticlesHome } from '../hero/Hero'
import { Navigation } from '../navigation/Navigation'
import styles from '../../styles/HomeRedesign.module.css'
import { client } from '../../pages'

export interface IMainLayout {
  headline?: string
  menu: any[]
  page: any[]
  stepGraphics?: any[]
  ctas?: any[]
  forms?: any[]
  images?: any[]
  testimonials?: any[]
  isMainHorizontal?: boolean
  cardType?: 'lego' | 'straigh' | 'around'
}

const copy = {
  es_ES: {
    heroTitle: 'Construyamos juntos el futuro digital de tu negocio',
    heroBody: 'Te acompañamos con desarrollo de software, talento TI y ciberseguridad especializada, para que te enfoques en lo que mejor sabes hacer: tu negocio.',
    services: [
      { name: 'Tercerización de talento TI', body: 'Ingenieros calificados, integrados a tu equipo sin fricción.', href: '/staff-augmentation', icon: staff },
      { name: 'Desarrollo de software a la medida', body: 'Soluciones digitales diseñadas para tu negocio.', href: '/custom-software', icon: lab },
      { name: 'Ciberseguridad', body: 'Protección, detección y soluciones seguras para tu operación.', href: '/cyber-security', icon: shield },
    ],
    process: 'Amplía tu equipo de desarrollo',
    processTime: '10 días, de la solicitud a la terna',
    stepTitles: ['Briefing', 'Selección de candidatos', 'Concéntrate en tu proceso de digitalización'],
    stepBodies: [
      'Entendemos tu necesidad: presupuesto, cultura corporativa, pila tecnológica y el perfil exacto que buscas. Con esta información definimos juntos el candidato ideal para tu equipo.',
      'Te presentamos una terna de candidatos que ya superaron nuestro proceso de entrevistas y se ajustan al perfil solicitado. Tú eliges quién se une a tu equipo.',
      'Empieza a trabajar con tu nuevo compañero de equipo mientras nosotros gestionamos contratos, pagos y beneficios. Tú te enfocas en tu negocio; nosotros en lo operativo.',
    ],
    differentiator: '¿Qué nos diferencia de otras empresas?',
    differentiatorNames: ['Honorarios', 'Selección de perfiles', 'Bajo riesgo operativo'],
    geography: 'Trabajamos en tu zona horaria',
    closing: 'Potencia la capacidad digital de tu negocio.',
  },
  en_EN: {
    heroTitle: 'Let’s build the digital future of your business together',
    heroBody: 'We support you with software development, IT talent and specialized cybersecurity, so you can focus on what you do best: your business.',
    services: [
      { name: 'IT staff augmentation', body: 'Qualified engineers who integrate seamlessly into your team.', href: '/staff-augmentation', icon: staff },
      { name: 'Custom software development', body: 'Digital solutions designed around your business.', href: '/custom-software', icon: lab },
      { name: 'Cybersecurity', body: 'Protection, detection and secure solutions for your operation.', href: '/cyber-security', icon: shield },
    ],
    process: 'Expand your development team',
    processTime: '10 days, from request to shortlist',
    stepTitles: ['Briefing', 'Candidate screening', 'Focus on your digitalization process'],
    stepBodies: [
      'We define the ideal candidate profile around your needs, budget, culture and technology stack.',
      'We present a shortlist of candidates who passed our interviews. You choose who joins your team.',
      'Start working with your new teammate while we manage contracts, payments and benefits.',
    ],
    differentiator: 'What makes us different?',
    differentiatorNames: ['Fee', 'Profiling', 'Low operational risk'],
    geography: 'We work in your time zone',
    closing: 'Boost the digital capacity of your business.',
  },
}

export const HomeLayout = ({ menu, page, stepGraphics }: IMainLayout) => {
  const { lang = Lang.ES } = useMainContext()
  const locale = copy[lang]
  const homePage = page.find((item) => item['__i18n_lang'] === lang) || page[0]
  const stepsReference = homePage?.home_sections?.find((section: any) => section.section_content === 'steps_graphic')?.section_steps_graphic?._ref
  const steps = stepGraphics?.find((item) => item._id === stepsReference)?.stepsgraphics_collection || []
  const differentiators = homePage?.home_sections?.find((section: any) => section.section_content === 'iconcards' && section.section_iconcards?.some((card: any) => card.card_icon_selection === 'icon_money_cog'))?.section_iconcards || []

  return (
    <Navigation menu={menu}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.particles}><ParticlesHome /></div>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>KADREE TECH</p>
            <h1>{locale.heroTitle}</h1>
            <p>{locale.heroBody}</p>
          </div>
        </section>

        <section className={styles.services} aria-label={lang === Lang.ES ? 'Servicios' : 'Services'}>
          {locale.services.map((service) => (
            <Link href={service.href} key={service.href} passHref>
              <a className={styles.serviceCard}>
                <span className={styles.serviceIcon}><Image src={service.icon} alt="" width={34} height={34} /></span>
                <h2>{service.name}</h2>
                <p>{service.body}</p>
                <span className={styles.cardLink}>{lang === Lang.ES ? 'Conoce más' : 'Learn more'} <span aria-hidden="true">→</span></span>
              </a>
            </Link>
          ))}
        </section>

        <section className={styles.process}>
          <header className={styles.sectionHeading}>
            <h2>{locale.process}</h2>
            <span>{locale.processTime}</span>
          </header>
          <div className={styles.steps}>
            {(steps.length ? steps.slice(0, 3) : [null, null, null]).map((step: any, index: number) => (
              <ProcessStep key={step?._key || index} index={index} title={locale.stepTitles[index]} body={locale.stepBodies[index]} image={step?.step_image} />
            ))}
          </div>
        </section>

        <section className={styles.difference}>
          <div className={styles.container}>
            <h2>{locale.differentiator}</h2>
            <div className={styles.differenceGrid}>
              {[moneyCog, profiling, lowRisk].map((icon, index) => (
                <article className={styles.differenceCard} key={locale.differentiatorNames[index]}>
                  <Image src={icon} alt="" width={36} height={36} />
                  <h3>{locale.differentiatorNames[index]}</h3>
                  {differentiators[index]?.card_text && <p>{differentiators[index].card_text}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.mapSection}>
          <div className={styles.mapTitle}>{locale.geography}</div>
          <div className={styles.mapWrap}>
            <Image src={Map2XL} alt={lang === Lang.ES ? 'Ubicaciones del equipo de Kadree Tech' : 'Kadree Tech team locations'} priority={false} />
          </div>
          <p>{locale.closing}</p>
        </section>
      </main>
    </Navigation>
  )
}

const ProcessStep = ({ index, title, body, image }: { index: number; title: string; body: string; image: any }) => {
  const imageProps: any = useNextSanityImage(client, image)
  return (
    <article className={styles.step}>
      <div className={styles.stepNumber}>{index + 1}</div>
      <div className={styles.stepCopy}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      {imageProps?.src && <div className={styles.stepImage}><Image {...imageProps} alt="" layout="responsive" /></div>}
    </article>
  )
}

export function getLinkToPage(card: string) {
  const normalized = card?.toLowerCase() || ''
  if (normalized.includes('staff') || normalized.includes('tercer')) return '/staff-augmentation'
  if (normalized.includes('software')) return '/custom-software'
  if (normalized.includes('cyber') || normalized.includes('ciber')) return '/cyber-security'
  return '/'
}
