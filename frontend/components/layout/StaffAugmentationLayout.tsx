import Head from 'next/head'
import Image from 'next/image'
import { ReactElement, useEffect, useState } from 'react'
import { Lang, useMainContext } from '../../context/context'
import styles from '../../styles/StaffAugmentation.module.css'
import { HomeNavigation } from '../navigation/HomeNavigation'

interface StaffAugmentationLayoutProps {
  menu: any[]
}

const asset = (name: string) => `/img/staff-augmentation-2026/${name}`

const translations = {
  es_ES: {
    metaTitle: 'Staff Augmentation TI | Talento tecnológico especializado | Kadree Tech',
    metaDescription: 'Amplía tu equipo tecnológico con talento TI especializado, incorporación ágil y gestión operativa de Kadree Tech.',
    heroLabel: 'STAFF AUGMENTATION',
    heroStart: 'Amplía tu equipo',
    heroAccent: 'tecnológico',
    heroEnd: 'sin ampliar tu estructura.',
    heroBody: 'Accede a talento especializado que se integra a tus proyectos, procesos y equipos, mientras Kadree Tech gestiona la operación.',
    heroCta: 'Hablemos de tu proyecto →',
    heroFeatures: [
      ['specialized-talent.svg', 'Talento especializado', 'Perfiles expertos en las tecnologías que necesitas.'],
      ['fast-onboarding.svg', 'Incorporación ágil', 'Reduce tiempos de búsqueda y contratación.'],
      ['total-flexibility.svg', 'Flexibilidad total', 'Escala tu equipo según la evolución de tus proyectos.'],
    ],
    comparisonTitle: 'Dos caminos. Un mismo objetivo: el talento que necesitas.',
    comparisonBody: 'Los procesos tradicionales pueden tomar meses y dejar tus proyectos esperando. La diferencia con Kadree está en el tiempo, la flexibilidad y la carga operativa.',
    traditional: 'Contratación tradicional',
    kadree: 'Staff Augmentation Kadree',
    comparisonRows: [
      ['onboarding.svg', 'Incorporación', 'Procesos de selección que pueden extenderse durante meses.', 'Acceso a talento preseleccionado para una incorporación más ágil.'],
      ['cost-structure.svg', 'Estructura de costos', 'Costos fijos asociados a una contratación permanente.', 'Modelo flexible según las necesidades del proyecto.'],
      ['administrative-management.svg', 'Gestión administrativa', 'La empresa asume los procesos administrativos y laborales.', 'Kadree gestiona la operación administrativa y laboral.'],
      ['scalability.svg', 'Escalabilidad', 'Limitado por la estructura interna de la empresa.', 'Aumenta o ajusta capacidades según lo demande el proyecto.'],
    ],
    comparisonNote: 'Tú te concentras en ejecutar el proyecto. Kadree hace posible el equipo.',
    processLabel: 'CÓMO FUNCIONA',
    processTitle: 'De la necesidad al talento, en cuatro pasos.',
    steps: [
      ['Entendemos', 'Conocemos tu proyecto, tecnología, perfil requerido y objetivos para definir la mejor solución.'],
      ['Seleccionamos', 'Identificamos y evaluamos profesionales que cumplen con tus necesidades técnicas y culturales.'],
      ['Integramos', 'El talento se incorpora a tu equipo y trabaja bajo tu dirección, con seguimiento constante.'],
      ['Gestionamos', 'Kadree se encarga de la gestión administrativa, contractual y laboral del talento.'],
    ],
    benefitsTitle: 'Más capacidad. Menos complejidad.',
    benefits: [
      ['prevalidated-talent.svg', 'Talento ya validado', 'Accede a perfiles evaluados técnica y profesionalmente, listos para integrarse a tu equipo sin empezar desde cero.'],
      ['frictionless-scaling.svg', 'Ajusta sin fricción', 'Amplía o reduce tu equipo según las necesidades de cada proyecto, sin asumir estructuras permanentes.'],
      ['lower-operational-load.svg', 'Menor carga operativa', 'Kadree gestiona los procesos administrativos y laborales asociados al talento, para que tu equipo se enfoque en el negocio.'],
      ['project-control.svg', 'Control del proyecto', 'Tú mantienes la dirección técnica y las prioridades. El talento trabaja integrado a tus procesos y metodologías.'],
    ],
    modelLabel: 'NUESTRO MODELO',
    modelStart: 'Tú diriges.',
    modelAccent: 'Kadree potencia.',
    modelBody: 'Un modelo colaborativo que combina tu conocimiento del negocio con nuestra capacidad para encontrar, incorporar y gestionar el talento ideal.',
    modelHeading: 'Modelo colaborativo de Staff Augmentation',
    company: 'TU EMPRESA',
    companyItems: ['Dirección del proyecto', 'Objetivos y prioridades', 'Metodologías'],
    team: 'TU EQUIPO',
    teamItems: ['Profesionales integrados', 'Trabajo bajo tus procesos', 'Entrega de valor'],
    kadreeManagement: 'GESTIÓN KADREE TECH',
    managementItems: ['Selección del talento', 'Onboarding y contratos', 'Soporte y seguimiento'],
    trustLabel: 'EMPRESAS QUE YA CONFÍAN EN NUESTRO TALENTO',
    stats: [['+8', 'Años de experiencia'], ['+350', 'Profesionales en nuestra red'], ['+250', 'Proyectos acompañados'], ['98%', 'Satisfacción de nuestros clientes']],
    testimonialsHeading: 'Lo que dicen nuestros clientes',
    testimonials: [{
      quote: 'Kadree Tech nos ha permitido ampliar nuestro equipo con talento de alto nivel, integrados perfectamente a nuestra cultura y procesos. Su gestión operativa nos da la tranquilidad para enfocarnos en construir mejores productos.',
      name: 'Jonathan Mota',
      role: 'Gerente de TI · Tigo',
    }],
    previous: 'Testimonio anterior',
    next: 'Siguiente testimonio',
  },
  en_EN: {
    metaTitle: 'IT Staff Augmentation | Specialized Technology Talent | Kadree Tech',
    metaDescription: 'Scale your technology team with specialized IT talent, fast onboarding and operational support from Kadree Tech.',
    heroLabel: 'STAFF AUGMENTATION',
    heroStart: 'Scale your',
    heroAccent: 'tech team',
    heroEnd: 'without expanding your internal structure.',
    heroBody: 'Access specialized talent that integrates seamlessly into your projects, processes and teams, while Kadree Tech handles the operational side.',
    heroCta: 'Let’s talk about your project →',
    heroFeatures: [
      ['specialized-talent.svg', 'Specialized talent', 'Experts in the technologies your business needs.'],
      ['fast-onboarding.svg', 'Fast onboarding', 'Reduce sourcing and hiring time.'],
      ['total-flexibility.svg', 'Complete flexibility', 'Scale your team as your projects evolve.'],
    ],
    comparisonTitle: 'Two paths. One goal: the talent you need.',
    comparisonBody: 'Traditional hiring processes can take months and leave your projects waiting. Kadree makes the difference through speed, flexibility and a lower operational burden.',
    traditional: 'Traditional hiring',
    kadree: 'Kadree Staff Augmentation',
    comparisonRows: [
      ['onboarding.svg', 'Onboarding', 'Selection processes that may take months.', 'Access pre-vetted talent for faster onboarding.'],
      ['cost-structure.svg', 'Cost structure', 'Fixed costs associated with permanent hiring.', 'A flexible model tailored to each project’s needs.'],
      ['administrative-management.svg', 'Administrative management', 'Your company handles administrative and employment processes.', 'Kadree manages employment and administrative operations.'],
      ['scalability.svg', 'Scalability', 'Limited by your company’s internal structure.', 'Scale or adjust capacity as project demand changes.'],
    ],
    comparisonNote: 'You focus on delivering the project. Kadree makes the team possible.',
    processLabel: 'HOW IT WORKS',
    processTitle: 'From need to talent in four steps.',
    steps: [
      ['We understand', 'We learn about your project, technology, required profile and goals to define the right solution.'],
      ['We select', 'We identify and assess professionals who fit your technical needs and company culture.'],
      ['We integrate', 'Talent joins your team and works under your direction, with ongoing support.'],
      ['We manage', 'Kadree handles the talent’s administrative, contractual and employment management.'],
    ],
    benefitsTitle: 'More capacity. Less complexity.',
    benefits: [
      ['prevalidated-talent.svg', 'Pre-vetted talent', 'Access professionals who have already been assessed for technical expertise and experience, ready to join your team.'],
      ['frictionless-scaling.svg', 'Frictionless scaling', 'Grow or reduce your team as each project requires, without taking on a permanent structure.'],
      ['lower-operational-load.svg', 'Lower operational burden', 'Kadree manages the administrative and employment processes so your team can stay focused on the business.'],
      ['project-control.svg', 'Project control', 'You retain technical direction and priorities. Talent works as part of your processes and methodologies.'],
    ],
    modelLabel: 'OUR MODEL',
    modelStart: 'You lead.',
    modelAccent: 'Kadree empowers.',
    modelBody: 'A collaborative model that combines your business knowledge with our ability to find, onboard and manage the right talent.',
    modelHeading: 'A collaborative Staff Augmentation model',
    company: 'YOUR COMPANY',
    companyItems: ['Project direction', 'Goals and priorities', 'Methodologies'],
    team: 'YOUR TEAM',
    teamItems: ['Embedded professionals', 'Work within your processes', 'Value delivery'],
    kadreeManagement: 'KADREE TECH MANAGEMENT',
    managementItems: ['Talent selection', 'Onboarding and contracts', 'Support and follow-up'],
    trustLabel: 'COMPANIES THAT ALREADY TRUST OUR TALENT',
    stats: [['+8', 'Years of experience'], ['+350', 'Professionals in our network'], ['+250', 'Projects supported'], ['98%', 'Client satisfaction']],
    testimonialsHeading: 'What our clients say',
    testimonials: [{
      quote: 'Kadree Tech has enabled us to grow our team with top-tier talent who integrate seamlessly into our culture and processes. Their operational management gives us the peace of mind to focus on building better products.',
      name: 'Jonathan Mota',
      role: 'IT Manager · Tigo',
    }],
    previous: 'Previous testimonial',
    next: 'Next testimonial',
  },
}

export const StaffAugmentationLayout = ({ menu }: StaffAugmentationLayoutProps): ReactElement => {
  const { lang = Lang.ES } = useMainContext()
  const text = translations[lang]
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonial = text.testimonials[activeTestimonial]
  const canonical = 'https://www.kadreetech.com/it-staff-augmentation/'

  useEffect(() => {
    const previousLanguage = document.documentElement.lang
    document.documentElement.lang = lang === Lang.ES ? 'es' : 'en'

    return () => {
      document.documentElement.lang = previousLanguage
    }
  }, [lang])

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: lang === Lang.ES ? 'Staff Augmentation TI' : 'IT Staff Augmentation',
    description: text.metaDescription,
    url: canonical,
    provider: { '@type': 'Organization', name: 'Kadree Tech', url: 'https://www.kadreetech.com/' },
    areaServed: ['Colombia', 'United States', 'Latin America'],
    review: text.testimonials.map((item) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: item.name },
      reviewBody: item.quote,
    })),
  }

  const changeTestimonial = (direction: number) => {
    setActiveTestimonial((current) => (current + direction + text.testimonials.length) % text.testimonials.length)
  }

  return (
    <HomeNavigation menu={menu}>
      <Head>
        <title>{text.metaTitle}</title>
        <meta name="description" content={text.metaDescription} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={text.metaTitle} />
        <meta property="og:description" content={text.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.kadreetech.com/img/staff-augmentation-2026/team.png" />
        <meta property="og:locale" content={lang === Lang.ES ? 'es_ES' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={text.metaTitle} />
        <meta name="twitter:description" content={text.metaDescription} />
        <meta name="twitter:image" content="https://www.kadreetech.com/img/staff-augmentation-2026/team.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <main className={styles.page} lang={lang === Lang.ES ? 'es' : 'en'}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{text.heroLabel}</p>
              <h1>{text.heroStart} <span>{text.heroAccent}</span> {text.heroEnd}</h1>
              <p className={styles.heroBody}>{text.heroBody}</p>
              <a className={styles.primaryButton} href="mailto:info@kadreetech.com?subject=Staff%20Augmentation">{text.heroCta}</a>
            </div>
            <div className={styles.heroImage}>
              <Image src={asset('team.png')} alt={lang === Lang.ES ? 'Equipo diverso de profesionales tecnológicos' : 'Diverse team of technology professionals'} width={715} height={462} priority />
            </div>
          </div>
          <div className={styles.heroFeatures}>
            {text.heroFeatures.map(([icon, title, body]) => (
              <article key={title}>
                <Image src={asset(icon)} alt="" width={38} height={38} />
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.comparison}>
          <div className={styles.sectionHeading}>
            <h2>{text.comparisonTitle}</h2>
            <p>{text.comparisonBody}</p>
          </div>
          <div className={styles.tableWrap}>
            <table>
              <thead><tr><th aria-label="" /><th>{text.traditional}</th><th>{text.kadree}</th></tr></thead>
              <tbody>
                {text.comparisonRows.map(([icon, title, traditional, kadree]) => (
                  <tr key={title}>
                    <th scope="row"><Image src={asset(icon)} alt="" width={32} height={32} /><span>{title}</span></th>
                    <td data-label={text.traditional}>{traditional}</td>
                    <td data-label={text.kadree}>{kadree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.comparisonNote}><Image src={asset('check.svg')} alt="" width={26} height={26} /><span>{text.comparisonNote}</span></p>
        </section>

        <section className={styles.process}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>{text.processLabel}</p>
            <h2>{text.processTitle}</h2>
          </div>
          <div className={styles.steps}>
            {text.steps.map(([title, body], index) => (
              <article key={title}>
                <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.benefits}>
          <h2>{text.benefitsTitle}</h2>
          <div className={styles.benefitGrid}>
            {text.benefits.map(([icon, title, body]) => (
              <article key={title}>
                <Image src={asset(icon)} alt="" width={44} height={44} />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.model}>
          <div className={styles.modelGlow} />
          <div className={styles.modelGrid}>
            <div className={styles.modelIntro}>
              <p className={styles.eyebrow}>{text.modelLabel}</p>
              <h2>{text.modelStart}<br /><span>{text.modelAccent}</span></h2>
              <p>{text.modelBody}</p>
            </div>
            <div className={styles.modelDiagram}>
              <h3 className={styles.srOnly}>{text.modelHeading}</h3>
              <div className={styles.modelTopCards}>
                <article><h4>{text.company}</h4><BulletList items={text.companyItems} /></article>
                <article><h4>{text.team}</h4><BulletList items={text.teamItems} /></article>
              </div>
              <div className={styles.modelLogo}><Image src={asset('kadree-model.svg')} alt="Kadree Tech" width={74} height={74} /></div>
              <article className={styles.managementCard}><h4>{text.kadreeManagement}</h4><BulletList items={text.managementItems} /></article>
            </div>
            <div className={styles.trust}>
              <h3>{text.trustLabel}</h3>
              <div className={styles.stats}>
                {text.stats.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}
              </div>
              <div className={styles.carousel} role="region" aria-roledescription="carousel" aria-label={text.testimonialsHeading}>
                <h3 className={styles.srOnly}>{text.testimonialsHeading}</h3>
                <blockquote><p>“{testimonial.quote}”</p></blockquote>
                <div className={styles.person}>
                  <Image src={asset('jonathan-mota.svg')} alt="" width={38} height={38} />
                  <div><h4>{testimonial.name}</h4><p>{testimonial.role}</p></div>
                </div>
                {text.testimonials.length > 1 && (
                  <div className={styles.carouselControls}>
                    <button type="button" onClick={() => changeTestimonial(-1)} aria-label={text.previous}>←</button>
                    <div>{text.testimonials.map((item, index) => <button key={item.name} type="button" aria-label={`${text.testimonialsHeading} ${index + 1}`} aria-current={index === activeTestimonial} onClick={() => setActiveTestimonial(index)} />)}</div>
                    <button type="button" onClick={() => changeTestimonial(1)} aria-label={text.next}>→</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </HomeNavigation>
  )
}

const BulletList = ({ items }: { items: string[] }) => <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
