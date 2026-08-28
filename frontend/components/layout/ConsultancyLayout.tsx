import Image from 'next/image'
import { ReactElement, useState } from 'react'
import { Lang, useMainContext } from '../../context/context'
import { HomeNavigation } from '../navigation/HomeNavigation'
import styles from '../../styles/Consultancy.module.css'

type ServiceKey = 'governance' | 'training' | 'management'

interface ConsultancyLayoutProps {
  menu: any[]
}

const translations = {
  es_ES: {
    eyebrow: 'CONSULTORÍA',
    heroStart: 'Decisiones de',
    heroAccent: 'IA y proyectos,',
    heroEnd: 'con la experiencia que tu empresa necesita.',
    heroBody: 'Te acompañamos donde más se necesita criterio experto: gobernamos la IA con responsabilidad, capacitamos a tus equipos para aprovecharla mejor y ponemos experiencia en gestión al frente de tus proyectos críticos, sin sobredimensionar tu estructura.',
    diagnostic: 'Agenda gratis tu diagnóstico →',
    chips: ['Gobierno de IA', 'Capacitación', 'Gerencia a demanda'],
    helpEyebrow: 'CÓMO TE AYUDAMOS',
    helpTitle: 'Tres formas de resolver lo que hoy te falta.',
    helpBody: 'Tres servicios independientes que puedes contratar por separado o combinar según las necesidades de tu empresa.',
    tabs: { governance: 'Gobierno de IA', training: 'Capacitación en IA', management: 'Gerencia de proyectos a demanda' },
    governance: {
      badge: 'Diagnóstico inicial gratis', title: 'Gobierno de IA', subtitle: 'Adopta IA con confianza, control y visión de negocio.',
      body: 'Adoptar IA requiere algo más que incorporar nuevas herramientas. Requiere criterios claros para gestionar riesgos, cumplir las obligaciones aplicables y asegurar que cada iniciativa tenga sentido para el negocio.',
      sectionTitle: 'Tres vértices para una estrategia de IA responsable',
      cards: [
        ['01', 'Normativa vigente', 'Analizamos las obligaciones regulatorias aplicables a tu organización y su relación con el uso de IA y la protección de datos.'],
        ['02', 'Buenas prácticas', 'Incorporamos marcos, estándares y buenas prácticas de gobierno de IA adaptados a la realidad de tu organización.'],
        ['03', 'Estrategia de negocio', 'Conectamos la adopción de IA con tus objetivos, prioridades y oportunidades reales de negocio.'],
      ],
      quote: '“Gobernar la IA no significa limitarla. Significa crear las condiciones para aprovecharla mejor.”',
      processTitle: 'Cómo lo hacemos',
      process: [
        ['01', 'Sesión informativa', 'Conversamos sobre tu contexto, resolvemos tus principales inquietudes y exploramos los retos y oportunidades de la IA para tu organización.'],
        ['02', 'Diagnóstico (Gratis)', 'Evaluamos el nivel actual de preparación de tu empresa desde tres perspectivas: normativa, buenas prácticas y estrategia de negocio.'],
        ['03', 'Implementación', 'Diseñamos e implementamos las políticas, procesos y mecanismos de gobierno que tu organización necesita.'],
        ['04', 'Seguimiento', 'Acompañamos la evolución del modelo y ajustamos las recomendaciones a medida que cambian tu negocio, las tecnologías y el entorno regulatorio.'],
      ],
      ctaTitle: '¿No sabes por dónde empezar?', ctaBody: 'Descubre qué tan preparada está tu empresa para adoptar IA de manera responsable.',
      ctaNote: 'DIAGNÓSTICO DE GOBIERNO DE IA · SIN COSTO · SIN COMPROMISO', ctaButton: 'Agenda gratis tu diagnóstico →',
    },
    training: {
      title: 'Capacitación en herramientas de IA', subtitle: 'De usar IA a trabajar mejor con IA.',
      body: 'Capacitación práctica en herramientas de IA, adaptada a los roles, procesos y necesidades reales de tu equipo.', include: '¿Qué incluye?',
      cards: [
        ['/img/consultancy/training.svg', 'Capacitación aplicada al rol', 'Los contenidos se adaptan a las funciones y necesidades de cada equipo.'],
        ['/img/consultancy/use-cases.svg', 'Casos de uso reales', 'Trabajamos sobre situaciones y procesos de tu propia organización.'],
        ['/img/consultancy/responsible-use.svg', 'Uso responsable', 'Buenas prácticas para proteger la información y utilizar las herramientas de IA de manera responsable.'],
        ['/img/consultancy/levels.svg', 'Niveles adaptables', 'Desde equipos que están comenzando hasta usuarios que ya utilizan IA y quieren profundizar.'],
      ],
      quote: '“El objetivo no es que tu equipo conozca más herramientas. Es que consiga mejores resultados con ellas.”',
      ctaButton: 'Cotiza una capacitación para tu equipo →',
    },
    management: {
      title: 'Gerencia de proyectos a demanda', subtitle: 'La experiencia de un gerente de proyectos, sin asumir una estructura permanente.',
      body: 'No todas las empresas necesitan un gerente de proyectos de tiempo completo. Pero algunos proyectos sí necesitan dirección, experiencia y seguimiento profesional. Kadree pone a tu disposición un gerente de proyectos con la dedicación que realmente necesitas, ajustada al alcance y etapa de tu proyecto.',
      ideal: 'Ideal para empresas que...',
      bullets: ['Necesitan dirección para un proyecto puntual.', 'No tienen suficiente volumen para justificar un gerente de tiempo completo.', 'Necesitan experiencia senior sin incorporar una posición permanente.', 'Quieren mantener el control del proyecto sin desviar a miembros clave de su equipo.'],
      directionCaption: 'Dirección experta, dimensionada al proyecto — no a la estructura.',
      caption: 'La experiencia que necesitas, sin una estructura permanente.', traditional: 'GERENTE DE TIEMPO COMPLETO', kadree: 'GERENCIA KADREE',
      traditionalItems: ['Costo fijo', 'Dedicación permanente', 'Estructura adicional', 'Menor flexibilidad'],
      kadreeItems: ['Dedicación según necesidad', 'Experiencia especializada', 'Mayor flexibilidad', 'Sin ampliar permanentemente tu estructura'],
      quote: '“Más experiencia para tu proyecto. Menos estructura para tu empresa.”', ctaButton: 'Cuéntanos tu proyecto →',
    },
    whyTitle: '¿Por qué Kadree?',
    why: [
      ['/img/consultancy/experience.svg', 'Experiencia', 'Criterio especializado para tomar mejores decisiones.'],
      ['/img/consultancy/flexibility.svg', 'Flexibilidad', 'Servicios que se adaptan al tamaño y momento de tu empresa.'],
      ['/img/consultancy/business-vision.svg', 'Visión de negocio', 'Tecnología orientada a resultados, no tecnología por tecnología.'],
    ],
    whyBody: 'No necesitas construir internamente toda la capacidad que necesitas para avanzar.\nPuedes acceder a ella cuando realmente la necesitas.',
    finalTitle: '¿Qué necesita hoy tu empresa?',
    finalBody: 'No tienes que saber cuál servicio necesitas antes de hablar con nosotros.\nCuéntanos qué estás tratando de resolver y te ayudamos a identificar el acompañamiento adecuado.',
    talk: 'Hablemos', finalLinks: ['Gobierno de IA', 'Capacitación', 'Gerencia de proyectos'],
  },
  en_EN: {
    eyebrow: 'CONSULTING', heroStart: 'AI and project', heroAccent: 'decisions,', heroEnd: 'backed by the experience your company needs.',
    heroBody: 'We bring expert judgment where it matters most: responsible AI governance, practical team training and experienced leadership for critical projects, without adding unnecessary permanent structure.',
    diagnostic: 'Book your free assessment →', chips: ['AI governance', 'Training', 'On-demand management'],
    helpEyebrow: 'HOW WE HELP', helpTitle: 'Three ways to solve what your business needs today.', helpBody: 'Three independent services you can hire separately or combine according to your company’s needs.',
    tabs: { governance: 'AI governance', training: 'AI training', management: 'On-demand project management' },
    governance: {
      badge: 'Free initial assessment', title: 'AI governance', subtitle: 'Adopt AI with confidence, control and business vision.',
      body: 'Adopting AI requires more than adding new tools. It calls for clear criteria to manage risks, meet applicable obligations and ensure every initiative makes business sense.', sectionTitle: 'Three pillars for a responsible AI strategy',
      cards: [['01', 'Current regulation', 'We assess the regulatory obligations that apply to your organization, AI use and data protection.'], ['02', 'Best practices', 'We incorporate governance frameworks, standards and practices adapted to your organization.'], ['03', 'Business strategy', 'We connect AI adoption with your objectives, priorities and real business opportunities.']],
      quote: '“Governing AI does not mean limiting it. It means creating the conditions to use it better.”', processTitle: 'How we work',
      process: [['01', 'Information session', 'We discuss your context, answer key questions and explore AI opportunities for your organization.'], ['02', 'Assessment (Free)', 'We evaluate your readiness from regulatory, best-practice and business perspectives.'], ['03', 'Implementation', 'We design and implement the policies, processes and governance mechanisms your organization needs.'], ['04', 'Follow-up', 'We evolve the model as your business, technologies and regulatory environment change.']],
      ctaTitle: 'Not sure where to start?', ctaBody: 'Discover how prepared your company is to adopt AI responsibly.', ctaNote: 'AI GOVERNANCE ASSESSMENT · FREE · NO COMMITMENT', ctaButton: 'Book your free assessment →',
    },
    training: {
      title: 'AI tools training', subtitle: 'From using AI to working better with AI.', body: 'Practical AI tools training tailored to your team’s real roles, processes and needs.', include: 'What is included?',
      cards: [['/img/consultancy/training.svg', 'Role-based training', 'Content is adapted to each team’s responsibilities and needs.'], ['/img/consultancy/use-cases.svg', 'Real use cases', 'We work with situations and processes from your own organization.'], ['/img/consultancy/responsible-use.svg', 'Responsible use', 'Good practices to protect information and use AI tools responsibly.'], ['/img/consultancy/levels.svg', 'Adaptable levels', 'From teams getting started to experienced users who want to go deeper.']],
      quote: '“The goal is not for your team to know more tools. It is to achieve better results with them.”', ctaButton: 'Request a training quote →',
    },
    management: {
      title: 'On-demand project management', subtitle: 'The experience of a project manager without permanent overhead.', body: 'Not every company needs a full-time project manager, but critical projects still need direction, experience and professional follow-up. Kadree provides the dedication your project actually needs, adjusted to its scope and stage.', ideal: 'Ideal for companies that...',
      bullets: ['Need direction for a specific project.', 'Do not have enough volume to justify a full-time manager.', 'Need senior expertise without adding a permanent position.', 'Want to retain project control without diverting key team members.'], directionCaption: 'Expert direction, sized to the project — not the structure.', caption: 'The experience you need, without permanent overhead.', traditional: 'FULL-TIME MANAGER', kadree: 'KADREE MANAGEMENT',
      traditionalItems: ['Fixed cost', 'Permanent dedication', 'Additional structure', 'Less flexibility'], kadreeItems: ['Dedication as needed', 'Specialized expertise', 'Greater flexibility', 'No permanent expansion of your structure'], quote: '“More experience for your project. Less structure for your company.”', ctaButton: 'Tell us about your project →',
    },
    whyTitle: 'Why Kadree?', why: [['/img/consultancy/experience.svg', 'Experience', 'Specialized judgment for better decisions.'], ['/img/consultancy/flexibility.svg', 'Flexibility', 'Services adapted to your company’s size and timing.'], ['/img/consultancy/business-vision.svg', 'Business vision', 'Technology focused on results, not technology for its own sake.']],
    whyBody: 'You do not need to build every capability internally.\nAccess it precisely when you need it.', finalTitle: 'What does your business need today?', finalBody: 'You do not need to know which service you need before speaking with us.\nTell us what you are trying to solve and we will help identify the right support.', talk: 'Let’s talk', finalLinks: ['AI governance', 'Training', 'Project management'],
  },
}

export const ConsultancyLayout = ({ menu }: ConsultancyLayoutProps): ReactElement => {
  const { lang = Lang.ES } = useMainContext()
  const text = translations[lang]
  const [active, setActive] = useState<ServiceKey>('governance')

  const selectService = (service: ServiceKey) => setActive(service)

  return (
    <HomeNavigation menu={menu}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>{text.eyebrow}</p>
            <h1>{text.heroStart} <span>{text.heroAccent}</span> {text.heroEnd}</h1>
            <p className={styles.heroBody}>{text.heroBody}</p>
            <a className={styles.primaryButton} href="mailto:info@kadreetech.com?subject=Diagnóstico%20de%20consultoría">{text.diagnostic}</a>
            <div className={styles.chips}>{text.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>{text.helpEyebrow}</p>
            <h2>{text.helpTitle}</h2>
            <p>{text.helpBody}</p>
          </div>
          <div className={styles.servicesLayout}>
            <div className={styles.tabs} role="tablist" aria-label={text.helpTitle}>
              {(Object.keys(text.tabs) as ServiceKey[]).map((key) => (
                <button key={key} type="button" role="tab" aria-selected={active === key} className={active === key ? styles.activeTab : ''} onClick={() => selectService(key)}>
                  <span>{text.tabs[key]}</span>
                  {active === key && <Image src="/img/consultancy/arrow-purple.svg" alt="" width={29} height={13} />}
                </button>
              ))}
            </div>
            <div className={styles.panel} role="tabpanel">
              {active === 'governance' && <Governance content={text.governance} />}
              {active === 'training' && <Training content={text.training} />}
              {active === 'management' && <Management content={text.management} />}
            </div>
          </div>
        </section>

        <section className={styles.whySection}>
          <div className={styles.contentWidth}>
            <h2>{text.whyTitle}</h2>
            <div className={styles.whyGrid}>
              {text.why.map(([icon, title, body]) => <article key={title}><Image src={icon} alt="" width={56} height={56} /><h3>{title}</h3><p>{body}</p></article>)}
            </div>
            <p className={styles.multiline}>{text.whyBody}</p>
          </div>
        </section>

        <section className={styles.finalCta}>
          <h2>{text.finalTitle}</h2>
          <p className={styles.multiline}>{text.finalBody}</p>
          <a href="mailto:info@kadreetech.com?subject=Consulta%20sobre%20servicios">{text.talk}</a>
          <div>{text.finalLinks.map((item) => <span key={item}>{item}</span>)}</div>
        </section>
      </main>
    </HomeNavigation>
  )
}

const Governance = ({ content }: { content: any }) => (
  <div className={styles.panelInner}>
    <span className={styles.badge}>{content.badge}</span><h2>{content.title}</h2><h3 className={styles.subtitle}>{content.subtitle}</h3><p className={styles.panelLead}>{content.body}</p>
    <h3 className={styles.panelSectionTitle}>{content.sectionTitle}</h3>
    <div className={styles.governanceCards}>{content.cards.map(([number, title, body]: string[]) => <article key={number}><span>{number}</span><h4>{title}</h4><p>{body}</p></article>)}</div>
    <Quote>{content.quote}</Quote>
    <h3 className={styles.processTitle}>{content.processTitle}</h3>
    <div className={styles.processGrid}>{content.process.map(([number, title, body]: string[]) => <article key={number}><span>{number}</span><h4>{title}</h4><p>{body}</p></article>)}</div>
    <div className={styles.inPanelCta}><h3>{content.ctaTitle}</h3><p>{content.ctaBody}</p><strong>{content.ctaNote}</strong><a className={styles.primaryButton} href="mailto:info@kadreetech.com?subject=Diagnóstico%20de%20gobierno%20de%20IA">{content.ctaButton}</a></div>
  </div>
)

const Training = ({ content }: { content: any }) => (
  <div className={styles.panelInner}>
    <h2>{content.title}</h2><h3 className={styles.subtitle}>{content.subtitle}</h3><p className={styles.panelLead}>{content.body}</p><h3 className={styles.panelSectionTitle}>{content.include}</h3>
    <div className={styles.trainingGrid}>{content.cards.map(([icon, title, body]: string[]) => <article key={title}><Image src={icon} alt="" width={44} height={44} /><h4>{title}</h4><p>{body}</p></article>)}</div>
    <Quote>{content.quote}</Quote>
    <a className={styles.primaryButton} href="mailto:info@kadreetech.com?subject=Capacitación%20en%20IA">{content.ctaButton}</a>
  </div>
)

const Management = ({ content }: { content: any }) => (
  <div className={styles.panelInner}>
    <h2>{content.title}</h2><h3 className={styles.subtitle}>{content.subtitle}</h3><p className={styles.panelLead}>{content.body}</p>
    <div className={styles.managementIntro}>
      <div><h3>{content.ideal}</h3><ul>{content.bullets.map((item: string) => <li key={item}><span className={styles.managementCheck}><Image src="/img/consultancy/check-purple.svg" alt="" width={24} height={24} /></span><span>{item}</span></li>)}</ul></div>
      <div className={styles.directionGraphic}><Image src="/img/consultancy/direction-expert.svg" alt="Dirección experta dimensionada al proyecto" width={399} height={318} /><p>{content.directionCaption}</p></div>
    </div>
    <p className={styles.managementCaption}>{content.caption}</p>
    <div className={styles.comparison}>
      <article><h3>{content.traditional}</h3>{content.traditionalItems.map((item: string) => <p key={item}><Image src="/img/consultancy/minus.svg" alt="" width={15} height={18} />{item}</p>)}</article>
      <article className={styles.kadreeCard}><h3>{content.kadree}</h3>{content.kadreeItems.map((item: string) => <p key={item}><Image src="/img/consultancy/check-green.svg" alt="" width={16} height={16} />{item}</p>)}</article>
    </div>
    <Quote>{content.quote}</Quote>
    <a className={styles.primaryButton} href="mailto:info@kadreetech.com?subject=Gerencia%20de%20proyectos">{content.ctaButton}</a>
  </div>
)

const Quote = ({ children }: { children: string }) => <blockquote className={styles.quote}><Image src="/img/consultancy/quote.svg" alt="" width={25} height={19} /><p>{children}</p></blockquote>
