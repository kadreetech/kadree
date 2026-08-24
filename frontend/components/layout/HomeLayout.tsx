import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { Lang, useMainContext } from '../../context/context'
import Map2XL from '../../images/world_2xl.png'
import MapXS from '../../images/world_xs.png'
import { client } from '../../pages'
import { ParticlesHome } from '../hero/Hero'
import { Navigation } from '../navigation/Navigation'
import styles from '../../styles/HomeRedesign.module.css'

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

const translations = {
  es_ES: {
    heroTitle: 'Construyamos juntos el futuro digital de tu negocio',
    heroBody: 'Te acompañamos con desarrollo de software, talento TI y consultoría especializada, para que te enfoques en lo que mejor sabes hacer: tu negocio.',
    contact: 'Contáctanos',
    services: [
      { icon: '/img/redesign/staff.svg', title: 'Tercerización de talento TI', body: 'Ingenieros calificados, integrados a tu equipo sin fricción.' },
      { icon: '/img/redesign/software.svg', title: 'Desarrollo de software a la medida', body: 'Soluciones digitales diseñadas para tu negocio.' },
      { icon: '/img/redesign/consulting.svg', title: 'Consultoría y capacitación en TI', body: 'Acompañamiento experto para decisiones tecnológicas más acertadas.' },
    ],
    processTitle: 'Amplía tu equipo de desarrollo',
    processTime: '10 días, de la solicitud a la terna',
    steps: [
      { title: 'Briefing', body: 'Entendemos tu necesidad: presupuesto, cultura corporativa, pila tecnológica y el perfil exacto que buscas. Con esta información, definimos juntos el candidato ideal para tu equipo.' },
      { title: 'Selección de candidatos', body: 'Te presentamos una terna de candidatos que ya superaron nuestro proceso de entrevistas y se ajustan al perfil solicitado. Tú eliges quién se une a tu equipo.' },
      { title: 'Concéntrate en tu proceso de digitalización', body: 'Empieza a trabajar con tu nuevo compañero de equipo mientras nosotros gestionamos contratos, pagos y beneficios. Tú te enfocas en tu negocio; nosotros en lo operativo.' },
    ],
    difference: '¿Qué nos diferencia de otras empresas?',
    benefits: ['Honorarios', 'Selección de perfiles', 'Bajo riesgo operativo'],
    geography: 'Trabajamos en tu zona horaria',
    closing: 'Potencia la capacidad digital de tu negocio.',
  },
  en_EN: {
    heroTitle: 'Let’s build the digital future of your business together',
    heroBody: 'We support you with software development, IT talent and specialized consultancy, so you can focus on what you do best: your business.',
    contact: 'Contact us',
    services: [
      { icon: '/img/redesign/staff.svg', title: 'IT staff augmentation', body: 'Qualified engineers, integrated into your team without friction.' },
      { icon: '/img/redesign/software.svg', title: 'Custom software development', body: 'Digital solutions designed for your business.' },
      { icon: '/img/redesign/consulting.svg', title: 'IT consulting and training', body: 'Expert guidance for more informed technology decisions.' },
    ],
    processTitle: 'Expand your development team',
    processTime: '10 days, from request to shortlist',
    steps: [
      { title: 'Briefing', body: 'We understand your budget, culture, technology stack and the exact profile you need. Together, we define the ideal candidate for your team.' },
      { title: 'Candidate selection', body: 'We present a shortlist of candidates who passed our interview process and match the required profile. You choose who joins your team.' },
      { title: 'Focus on your digitalization process', body: 'Start working with your new teammate while we manage contracts, payments and benefits. You focus on your business; we handle operations.' },
    ],
    difference: 'What makes us different from other companies?',
    benefits: ['Fees', 'Profile selection', 'Low operational risk'],
    geography: 'We work in your time zone',
    closing: 'Boost the digital capacity of your business.',
  },
}

export const HomeLayout = ({ menu, page, stepGraphics }: IMainLayout) => {
  const { lang = Lang.ES } = useMainContext()
  const text = translations[lang]
  const homePage = page.find((item) => item['__i18n_lang'] === lang) || page[0]
  const stepsReference = homePage?.home_sections?.find((section: any) => section.section_content === 'steps_graphic')?.section_steps_graphic?._ref
  const sanitySteps = stepGraphics?.find((item) => item._id === stepsReference)?.stepsgraphics_collection || []

  return (
    <Navigation menu={menu}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.particles}><ParticlesHome /></div>
          <div className={styles.heroContent}>
            <h1>{text.heroTitle}</h1>
            <p>{text.heroBody}</p>
            <a className={styles.primaryButton} href="mailto:info@kadreetech.com">{text.contact}</a>
          </div>
        </section>

        <section className={styles.services} aria-label={lang === Lang.ES ? 'Servicios' : 'Services'}>
          {text.services.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <Image src={service.icon} alt="" width={72} height={72} />
              <h2>{service.title}</h2>
              <p>{service.body}</p>
            </article>
          ))}
        </section>

        <section className={styles.process}>
          <header className={styles.processHeading}>
            <h2>{text.processTitle}</h2>
            <span>{text.processTime}</span>
          </header>
          <div className={styles.processGrid}>
            {text.steps.map((step, index) => (
              <ProcessStep key={step.title} index={index} title={step.title} body={step.body} image={sanitySteps[index]?.step_image} />
            ))}
          </div>
        </section>

        <section className={styles.blueSection}>
          <div className={styles.difference}>
            <h2>{text.difference}</h2>
            <div className={styles.benefitGrid}>
              {['/img/redesign/fee.svg', '/img/redesign/profile.svg', '/img/redesign/operation.svg'].map((icon, index) => (
                <article className={styles.benefitCard} key={text.benefits[index]}>
                  <Image src={icon} alt="" width={48} height={48} />
                  <h3>{text.benefits[index]}</h3>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.mapBlock}>
            <h2>{text.geography}</h2>
            <div className={`${styles.mapImage} ${styles.mapDesktop}`}><Image src={Map2XL} alt={lang === Lang.ES ? 'Zonas horarias donde trabaja Kadree Tech' : 'Time zones where Kadree Tech works'} /></div>
            <div className={`${styles.mapImage} ${styles.mapMobile}`}><Image src={MapXS} alt={lang === Lang.ES ? 'Zonas horarias donde trabaja Kadree Tech' : 'Time zones where Kadree Tech works'} /></div>
            <p>{text.closing}</p>
            <a className={styles.secondaryButton} href="mailto:info@kadreetech.com">{text.contact}</a>
          </div>
        </section>
      </main>
    </Navigation>
  )
}

const ProcessStep = ({ index, title, body, image }: { index: number; title: string; body: string; image: any }) => {
  const imageProps: any = useNextSanityImage(client, image)
  return (
    <article className={`${styles.processStep} ${styles[`step${index + 1}`]}`}>
      <div className={styles.stepText}>
        <div className={styles.stepTitle}>
          <span>{index + 1}</span>
          <h3>{title}</h3>
        </div>
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
