export type Answer = { question: string; answer: string }
type PageAnswers = { es: Answer[]; en: Answer[] }
export const pageAnswers: Record<string, PageAnswers> = {
  '/': {
    es: [
      { question: '¿Qué servicios tecnológicos ofrece Kadree Tech en Colombia?', answer: 'Kadree Tech ofrece Staff Augmentation, desarrollo de software a la medida y consultoría tecnológica. La consultoría incluye gobierno de IA, capacitación en herramientas de IA y gerencia de proyectos a demanda.' },
      { question: '¿Qué diferencia hay entre ampliar mi equipo y contratar un desarrollo?', answer: 'Con Staff Augmentation integras profesionales a un equipo que tú diriges. En un proyecto de software a la medida, trabajamos contigo para definir y desarrollar una solución según el alcance, los objetivos y las necesidades del negocio.' },
      { question: '¿Cómo puedo consultar sobre mi proyecto?', answer: 'Puedes contactar a Kadree Tech por WhatsApp al +57 300 8013539. Cuéntanos qué necesitas, en qué etapa está tu proyecto y qué capacidad buscas para conversar sobre el servicio adecuado.' },
    ],
    en: [
      { question: 'What technology services does Kadree Tech offer in Colombia?', answer: 'Kadree Tech offers IT Staff Augmentation, custom software development and technology consulting. Consulting services include AI governance, AI tools training and on-demand project management.' },
      { question: 'How is extending my team different from commissioning a software project?', answer: 'Staff Augmentation brings professionals into a team you manage. For a custom software project, we work with you to define and develop a solution around the agreed scope, objectives and business needs.' },
      { question: 'How can I discuss my project with Kadree Tech?', answer: 'Contact Kadree Tech on WhatsApp at +57 300 8013539. Tell us what you need, your project stage and the capabilities you are looking for so we can discuss the right service.' },
    ],
  },
  '/it-staff-augmentation': {
    es: [
      { question: '¿Kadree Tech presta servicios de Staff Augmentation en Colombia?', answer: 'Sí. Kadree Tech ofrece Staff Augmentation para empresas en Colombia y acompaña proyectos internacionales. Incorporamos talento TI especializado a los procesos y equipos del cliente, mientras gestionamos la operación asociada al talento.' },
      { question: '¿Qué es Staff Augmentation y cómo funciona?', answer: 'Es un modelo para ampliar tu equipo con profesionales especializados sin incorporar toda la gestión operativa a tu estructura. Definimos el perfil, evaluamos candidatos y acompañamos su incorporación. Tú mantienes la dirección del proyecto y sus prioridades.' },
      { question: '¿En qué se diferencia de la contratación tradicional?', answer: 'La contratación tradicional implica gestionar directamente la selección y la operación laboral. Con el modelo de Kadree, accedes a talento evaluado y puedes ajustar la capacidad según el proyecto, mientras Kadree gestiona los procesos administrativos y laborales asociados.' },
      { question: '¿Cómo se define el costo del servicio?', answer: 'La propuesta depende del perfil, la experiencia, las tecnologías, la dedicación y las necesidades del proyecto. Consulta por WhatsApp para revisar tu caso y definir una propuesta con el alcance correspondiente.' },
    ],
    en: [
      { question: 'Does Kadree Tech provide Staff Augmentation in Colombia?', answer: 'Yes. Kadree Tech provides Staff Augmentation for companies in Colombia and supports international projects. Specialized IT professionals join the client’s workflows and teams while Kadree manages the associated operations.' },
      { question: 'What is Staff Augmentation and how does it work?', answer: 'It is a way to extend your team with specialized professionals without bringing all the associated operational work in-house. We define the role, assess candidates and support onboarding. You retain control of the project and its priorities.' },
      { question: 'How does it differ from traditional hiring?', answer: 'Traditional hiring means directly managing recruitment and employment operations. With Kadree’s model, you access vetted talent and adjust capacity around your project while Kadree handles the associated administrative and employment processes.' },
      { question: 'How is the service priced?', answer: 'A proposal depends on the role, experience, technology stack, time commitment and project needs. Contact us on WhatsApp to discuss your requirements and define the scope of a proposal.' },
    ],
  },
  '/custom-software': {
    es: [
      { question: '¿Qué incluye el desarrollo de software a la medida en Colombia?', answer: 'En Kadree Tech, el servicio abarca entendimiento del negocio, definición del alcance, diseño y prototipado, desarrollo incremental, pruebas y puesta en producción. El mantenimiento y soporte se definen según las necesidades y el alcance acordado.' },
      { question: '¿Cuándo conviene una solución a la medida?', answer: 'Cuando necesitas adaptar el software a procesos específicos de tu negocio y una herramienta estándar no resuelve adecuadamente el problema. Antes de desarrollar, revisamos las necesidades, las restricciones y el alcance contigo.' },
      { question: '¿Qué tecnologías y prácticas utiliza Kadree Tech?', answer: 'Trabajamos con prácticas ágiles como Scrum y Kanban; servicios de nube como AWS, Microsoft Azure y Google Cloud; pruebas automatizadas y de rendimiento; y arquitecturas orientadas a dominios, eventos y microservicios, según el proyecto.' },
      { question: '¿Cuánto cuesta y cuánto tarda desarrollar software?', answer: 'El presupuesto y los plazos dependen del alcance, las integraciones, la complejidad y el equipo necesario. Primero entendemos tu necesidad y definimos un alcance para preparar una estimación y una hoja de ruta. No existe un precio o plazo único aplicable a todos los proyectos.' },
      { question: '¿También puedo incorporar desarrolladores a mi equipo?', answer: 'Sí. Si ya diriges el desarrollo y necesitas capacidad adicional, el servicio de Staff Augmentation permite integrar profesionales especializados a tu equipo. Si necesitas construir una solución, podemos conversar sobre un proyecto de desarrollo a la medida.' },
    ],
    en: [
      { question: 'What does custom software development in Colombia include?', answer: 'At Kadree Tech, the service covers business discovery, scope definition, design and prototyping, incremental development, testing and deployment. Maintenance and support are defined around your needs and the agreed scope.' },
      { question: 'When is custom software the right choice?', answer: 'When your business has specific workflows that an off-the-shelf tool does not adequately support. Before development starts, we review your needs, constraints and scope with you.' },
      { question: 'Which technologies and practices does Kadree Tech use?', answer: 'Our capabilities include agile practices such as Scrum and Kanban; cloud services including AWS, Microsoft Azure and Google Cloud; automated and performance testing; and domain-driven, event-driven and microservices architectures, according to the project.' },
      { question: 'How much does software development cost, and how long does it take?', answer: 'Budget and timelines depend on scope, integrations, complexity and the team required. We first understand your needs and define the scope to prepare an estimate and a roadmap. There is no single price or timeline that fits every project.' },
      { question: 'Can I add developers to my existing team instead?', answer: 'Yes. If you already manage development and need extra capacity, Staff Augmentation lets you bring specialized professionals into your team. If you need to build a solution, we can discuss a custom development project.' },
    ],
  },
  '/it-consultancy-and-training': {
    es: [
      { question: '¿Qué es el gobierno de IA en una empresa?', answer: 'El gobierno de inteligencia artificial establece criterios, responsabilidades, políticas y procesos para orientar el uso de IA. Busca gestionar riesgos, proteger información y conectar las iniciativas de IA con los objetivos del negocio.' },
      { question: '¿Kadree Tech ofrece consultoría en gobierno de IA en Colombia?', answer: 'Sí. Kadree Tech acompaña a empresas en Colombia en la adopción responsable de IA. El servicio considera normativa aplicable, buenas prácticas y estrategia de negocio, con diagnóstico, implementación y seguimiento según las necesidades de la organización.' },
      { question: '¿La capacitación se adapta a los equipos?', answer: 'Sí. La capacitación en herramientas de IA se adapta a los roles, los procesos y el nivel de experiencia del equipo. Incluye casos de uso de la organización y buenas prácticas para el uso responsable de la información.' },
      { question: '¿Puedo contratar los servicios por separado?', answer: 'Sí. Gobierno de IA, capacitación en IA y gerencia de proyectos a demanda son servicios independientes. Puedes contratar uno o combinarlos según las necesidades de tu empresa.' },
    ],
    en: [
      { question: 'What is AI governance in a business?', answer: 'AI governance establishes criteria, responsibilities, policies and processes for using artificial intelligence. It helps manage risks, protect information and align AI initiatives with business goals.' },
      { question: 'Does Kadree Tech provide AI governance consulting in Colombia?', answer: 'Yes. Kadree Tech helps companies in Colombia adopt AI responsibly. The service considers applicable requirements, best practices and business strategy, with assessment, implementation and follow-up tailored to the organization.' },
      { question: 'Is AI training tailored to each team?', answer: 'Yes. AI tools training is adapted to team roles, workflows and experience levels. It includes use cases from the organization and good practices for handling information responsibly.' },
      { question: 'Can I hire the services separately?', answer: 'Yes. AI governance, AI training and on-demand project management are independent services. You can choose one or combine them around your company’s needs.' },
    ],
  },
  '/about-us': {
    es: [
      { question: '¿Qué hace Kadree Tech?', answer: 'Kadree Tech conecta talento TI especializado, desarrollo de software y consultoría tecnológica con los objetivos del negocio. Su propuesta combina capacidad técnica y acompañamiento para ejecutar proyectos y apoyar la transformación digital.' },
      { question: '¿Dónde puedo contactar a Kadree Tech?', answer: 'Kadree Tech publica sus datos de contacto y oficinas en Bogotá, Colombia, y Miami, Estados Unidos, en el pie de página. Para consultar sobre servicios puedes escribir al WhatsApp +57 300 8013539.' },
    ],
    en: [
      { question: 'What does Kadree Tech do?', answer: 'Kadree Tech connects specialized IT talent, software development and technology consulting with business goals. Its approach combines technical capabilities and guidance to deliver projects and support digital transformation.' },
      { question: 'How can I contact Kadree Tech?', answer: 'Kadree Tech lists its contact details and offices in Bogotá, Colombia, and Miami, United States, in the website footer. For service enquiries, contact us on WhatsApp at +57 300 8013539.' },
    ],
  },
}
export const relatedServices = [
  { path: '/it-staff-augmentation/', es: 'Staff Augmentation en Colombia', en: 'Staff Augmentation in Colombia' },
  { path: '/custom-software/', es: 'Software a la medida en Colombia', en: 'Custom software development in Colombia' },
  { path: '/it-consultancy-and-training/', es: 'Gobierno de IA y consultoría', en: 'AI governance and consulting' },
]
