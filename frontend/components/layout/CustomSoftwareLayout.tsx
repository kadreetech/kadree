import Image from 'next/image'
import Link from 'next/link'
import { MdAccountTree, MdArrowForward, MdCheck, MdCloudQueue, MdCode, MdFactCheck } from 'react-icons/md'
import { Lang, useMainContext } from '../../context/context'
import { localizedPath, WHATSAPP_URL } from '../../lib/site'
import { HomeNavigation } from '../navigation/HomeNavigation'
import { ServiceAnswers } from './ServiceAnswers'
import styles from '../../styles/CustomSoftware.module.css'

const copy = {
  [Lang.ES]: {
    home: 'Inicio', page: 'Desarrollo de software',
    title: 'Software a la medida.', accent: 'Con visión de negocio.',
    intro: 'Desarrollo de software a la medida en Colombia para transformar una necesidad de tu negocio en un producto digital. Definimos el alcance contigo y construimos de forma incremental.',
    consult: 'Cuéntanos tu proyecto', alt: 'Visualización de código y paneles de software en una computadora portátil',
    caption: 'Del objetivo de negocio al software en producción.',
    highlights: ['Soluciones para tus procesos', 'Desarrollo incremental', 'Acompañamiento técnico'],
    fitTitle: 'Tu negocio no es genérico. Tu software tampoco debería serlo.',
    fitBody: 'Cuando tienes una necesidad clara y necesitas experiencia para desarrollarla, trabajamos contigo para formar el equipo y construir la solución. Empezamos por entender el problema, no por escribir código.',
    fitPoints: [
      ['Una solución que responda a tu operación', 'Definimos funcionalidades según las necesidades de tus usuarios, los procesos y las prioridades del negocio.'],
      ['Un alcance para avanzar con claridad', 'Alineamos la idea, el presupuesto y los plazos para construir el producto paso a paso.'],
    ],
    capabilitiesTitle: 'Capacidad técnica para cada etapa.',
    capabilitiesBody: 'Elegimos las prácticas y herramientas según el proyecto. La tecnología está al servicio del producto.',
    capabilities: [
      ['Gestión del desarrollo', 'Organizamos el trabajo con prácticas ágiles y una hoja de ruta que conecte las entregas con las prioridades del negocio.', ['Scrum', 'Kanban', 'Shape Up']],
      ['Soluciones en la nube', 'Definimos la infraestructura según las necesidades de la solución y el entorno tecnológico de tu empresa.', ['AWS', 'Microsoft Azure', 'Google Cloud']],
      ['Calidad desde el desarrollo', 'Integramos pruebas para evaluar el comportamiento del producto y acompañar su evolución.', ['Pruebas automatizadas', 'TDD', 'Pruebas de rendimiento']],
      ['Arquitectura para evolucionar', 'Diseñamos la estructura técnica de acuerdo con el alcance, la complejidad y los objetivos del producto.', ['Diseño por dominios', 'Eventos', 'Microservicios']],
    ] as [string, string, string[]][],
    processTitle: 'De la idea al producto, con un camino claro.',
    processBody: 'Cada etapa aporta contexto para la siguiente. Definimos el alcance y los entregables contigo.',
    steps: [
      ['Entendemos', 'Revisamos el negocio, las necesidades de los usuarios y tu entorno tecnológico.'],
      ['Definimos', 'Acordamos el alcance, estimamos el esfuerzo y trazamos la hoja de ruta.'],
      ['Diseñamos', 'Damos forma a la solución con arquitectura, prototipos y validación de la idea.'],
      ['Desarrollamos', 'Construimos por ciclos que incluyen análisis, desarrollo, pruebas y puesta en producción.'],
      ['Acompañamos', 'Definimos el mantenimiento, el soporte y los siguientes pasos según la evolución del producto.'],
    ],
    modelTitle: 'Decisiones centradas en el producto.',
    modelBody: 'Tú aportas el conocimiento del negocio. Kadree Tech aporta capacidad técnica y acompañamiento para convertirlo en una solución que puedas utilizar y evolucionar.',
    modelItems: [
      ['Prioridades compartidas', 'Un alcance conectado con tus objetivos y tus restricciones.'],
      ['Entregas incrementales', 'Funciones que se construyen, se prueban y se validan por ciclos.'],
      ['Continuidad técnica', 'Buenas prácticas de ingeniería para facilitar el mantenimiento y la evolución.'],
    ],
    finalTitle: 'Tu próximo producto empieza con una conversación.',
    finalBody: 'Cuéntanos qué necesitas resolver, qué has construido y a dónde quieres llegar.',
    finalButton: 'Consultar por WhatsApp',
  },
  [Lang.EN]: {
    home: 'Home', page: 'Software development',
    title: 'Custom software.', accent: 'Built around your business.',
    intro: 'Custom software development in Colombia that turns a business need into a digital product. We define the scope with you and build through incremental delivery.',
    consult: 'Tell us about your project', alt: 'Visualization of code and software dashboards on a laptop',
    caption: 'From a business goal to software in production.',
    highlights: ['Built for your workflows', 'Incremental delivery', 'Technical guidance'],
    fitTitle: 'Your business is unique. Your software should fit.',
    fitBody: 'When you have a clear need and need the expertise to build it, we work with you to form the team and develop the solution. We start by understanding the problem before writing code.',
    fitPoints: [
      ['A solution for the way you work', 'We define functionality around user needs, business workflows and your priorities.'],
      ['A clear scope to move forward', 'We align the idea, budget and timeline to build your product step by step.'],
    ],
    capabilitiesTitle: 'Technical capabilities for every stage.',
    capabilitiesBody: 'We choose practices and tools to fit the project. Technology serves the product.',
    capabilities: [
      ['Development management', 'We organize delivery through agile practices and a roadmap that connects each release to your business priorities.', ['Scrum', 'Kanban', 'Shape Up']],
      ['Cloud solutions', 'We define infrastructure around the solution’s requirements and your company’s technology environment.', ['AWS', 'Microsoft Azure', 'Google Cloud']],
      ['Quality throughout development', 'We integrate testing to assess product behavior and support its evolution.', ['Automated testing', 'TDD', 'Performance testing']],
      ['Architecture that can evolve', 'We design the technical structure around your product’s scope, complexity and goals.', ['Domain-driven design', 'Events', 'Microservices']],
    ] as [string, string, string[]][],
    processTitle: 'A clear path from idea to product.',
    processBody: 'Each stage informs the next. We define the scope and deliverables with you.',
    steps: [
      ['Discover', 'We explore your business, user needs and technology environment.'],
      ['Define', 'We agree on scope, estimate effort and establish a roadmap.'],
      ['Design', 'We shape the solution through architecture, prototypes and idea validation.'],
      ['Develop', 'We build in cycles that include analysis, development, testing and deployment.'],
      ['Support', 'We define maintenance, support and next steps as your product evolves.'],
    ],
    modelTitle: 'Product-centered decisions.',
    modelBody: 'You bring knowledge of your business. Kadree Tech brings technical capabilities and guidance to turn it into a solution you can use and evolve.',
    modelItems: [
      ['Shared priorities', 'Scope that reflects your objectives and constraints.'],
      ['Incremental delivery', 'Features that are built, tested and validated in cycles.'],
      ['Technical continuity', 'Engineering practices that support maintenance and future development.'],
    ],
    finalTitle: 'Your next product starts with a conversation.',
    finalBody: 'Tell us what you need to solve, what you have built and where you want to go.',
    finalButton: 'Contact us on WhatsApp',
  },
}

const capabilityIcons = [MdCode, MdCloudQueue, MdFactCheck, MdAccountTree]

export const CustomSoftwareLayout = ({ menu, heroImage }: { menu: any[]; heroImage: string }) => {
  const { lang = Lang.ES } = useMainContext()
  const text = copy[lang]
  return <HomeNavigation menu={menu}>
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <nav className={styles.breadcrumbs} aria-label={lang === Lang.EN ? 'Breadcrumb' : 'Ruta de navegación'}>
            <Link href={localizedPath('/', lang === Lang.EN)}><a>{text.home}</a></Link>
            <span aria-hidden="true">/</span><span aria-current="page">{text.page}</span>
          </nav>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1>{text.title}<br /><span>{text.accent}</span></h1>
              <p>{text.intro}</p>
              <a className={styles.button} href={WHATSAPP_URL}>{text.consult}<MdArrowForward aria-hidden="true" /></a>
            </div>
            <figure className={styles.heroFigure}>
              <div className={styles.heroPhoto}><Image src={heroImage} alt={text.alt} layout="fill" objectFit="cover" objectPosition="center" priority /></div>
              <figcaption>{text.caption}</figcaption>
            </figure>
          </div>
          <ul className={styles.highlights}>{text.highlights.map(item => <li key={item}><MdCheck aria-hidden="true" />{item}</li>)}</ul>
        </div>
      </section>
      <section className={styles.fit}>
        <div className={styles.container}>
          <div className={styles.fitGrid}>
            <div><h2>{text.fitTitle}</h2><p>{text.fitBody}</p></div>
            <div className={styles.fitPoints}>{text.fitPoints.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
          </div>
        </div>
      </section>
      <section className={styles.capabilities}>
        <div className={styles.container}>
          <header className={styles.heading}><h2>{text.capabilitiesTitle}</h2><p>{text.capabilitiesBody}</p></header>
          <div className={styles.capabilityGrid}>{text.capabilities.map(([title, body, tags], index) => {
            const Icon = capabilityIcons[index]
            return <article key={title}><Icon className={styles.capabilityIcon} aria-hidden="true" /><h3>{title}</h3><p>{body}</p><ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article>
          })}</div>
        </div>
      </section>
      <section className={styles.process}>
        <div className={styles.container}>
          <header className={styles.heading}><h2>{text.processTitle}</h2><p>{text.processBody}</p></header>
          <ol className={styles.steps}>{text.steps.map(([title, body], index) => <li key={title}><span className={styles.stepNumber} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{body}</p></li>)}</ol>
        </div>
      </section>
      <section className={styles.model}>
        <div className={styles.container}>
          <div className={styles.modelGrid}>
            <div><h2>{text.modelTitle}</h2><p>{text.modelBody}</p></div>
            <div>{text.modelItems.map(([title, body]) => <article key={title}><MdCheck aria-hidden="true" /><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
          </div>
        </div>
      </section>
      <ServiceAnswers path="/custom-software/" />
      <section className={styles.final}>
        <div className={styles.container}><h2>{text.finalTitle}</h2><p>{text.finalBody}</p><a className={styles.button} href={WHATSAPP_URL}>{text.finalButton}<MdArrowForward aria-hidden="true" /></a></div>
      </section>
    </main>
  </HomeNavigation>
}
