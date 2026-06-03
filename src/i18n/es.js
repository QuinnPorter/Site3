const es = {
  nav: {
    individualTax: 'Impuestos Personales',
    business: 'Negocios',
    bookkeeping: 'Contabilidad y CFO',
    businessTax: 'Impuestos de Negocios',
    resources: 'Recursos',
    about: 'Nosotros',
    reviews: 'Reseñas',
    careers: 'Empleo',
    articles: 'Artículos',
    contact: 'Contacto',
    book: 'Reserva una Cita',
    payment: 'Hacer un Pago',
    portal: 'Portal de Clientes',
    menu: 'Menú',
    close: 'Cerrar',
    services: 'Servicios',
    company: 'Empresa',
  },
  cta: {
    book: 'Reserva una Cita',
    getStarted: 'Comienza ahora',
    findService: 'Encuentra tu servicio',
    learnMore: 'Ver más',
    readAll: 'Ver todas las reseñas',
    contact: 'Contáctanos',
    exploreBusiness: 'Ver servicios de negocios',
    meetTeam: 'Conoce al equipo',
  },
  hero: {
    badge: 'Xero — Gran Firma del Año 2025',
    titlePre: 'Contabilidad que ',
    titleAccent: 'hace crecer tu dinero',
    titlePost: '.',
    subtitle:
      'Servicios bilingües de impuestos, contabilidad y CFO para personas y negocios — experiencia de nivel institucional con trato humano, en los 50 estados.',
    primary: 'Reserva una Cita',
    secondary: 'Encuentra tu servicio',
    trust: [
      { value: '20+', label: 'años de experiencia' },
      { value: '7,000+', label: 'declaraciones al año' },
      { value: '50', label: 'estados atendidos' },
    ],
  },
  finder: {
    eyebrow: 'Buscador de servicios',
    title: '¿No sabes por dónde empezar?',
    subtitle: 'Responde una pregunta rápida y te llevamos con el equipo indicado.',
    question: '¿Cuál te describe mejor?',
    options: [
      { id: 'w2', label: 'Empleado con W-2', hint: 'Recibo salario y un W-2' },
      { id: 'freelancer', label: 'Freelancer / 1099', hint: 'Soy independiente o contratista' },
      { id: 'realestate', label: 'Inversionista de bienes raíces', hint: 'Tengo propiedades de renta' },
      { id: 'business', label: 'Dueño de negocio', hint: 'Tengo una empresa o LLC' },
    ],
    resultTitle: 'Tu camino recomendado',
    restart: 'Empezar de nuevo',
    book: 'Reserva una Cita',
    recommendations: {
      w2: {
        name: 'Preparación de Impuestos Personales',
        desc: 'Declaración de W-2 precisa y puntual, con cada crédito y deducción que mereces — y soporte todo el año.',
        to: '/individual-tax',
      },
      freelancer: {
        name: 'Independientes y Schedule C',
        desc: 'Manejamos ingresos 1099, gastos, impuesto de trabajo independiente y deducciones de oficina en casa.',
        to: '/individual-tax',
      },
      realestate: {
        name: 'Bienes Raíces y Schedule E',
        desc: 'Ingresos de renta, depreciación y estrategia de gastos para maximizar las deducciones de tu portafolio.',
        to: '/individual-tax',
      },
      business: {
        name: 'Contabilidad, CFO e Impuestos de Negocio',
        desc: 'Un contador dedicado más asesoría de CFO y FP&A para darte control y crecer con confianza.',
        to: '/business',
      },
    },
  },
  servicesOverview: {
    eyebrow: 'Qué hacemos',
    title: 'Dos caminos, un equipo de confianza',
    subtitle: 'Ya sea la declaración de tu hogar o los libros de tu empresa, te acompañamos donde estés.',
    individuals: {
      title: 'Personas y Hogares',
      desc: 'Soporte personal de impuestos todo el año que encuentra cada deducción.',
      to: '/individual-tax',
      items: [
        'Empleados con W-2',
        'Freelancers y 1099',
        'Inversionistas de bienes raíces — Schedule E',
        'Independientes — Schedule C',
        'Sociedades y corporaciones (1120, 1120-S, 1065)',
      ],
    },
    businesses: {
      title: 'Negocios y Empresas',
      desc: 'Libros, nómina y visión de CFO que escalan contigo.',
      to: '/business',
      items: [
        'Contabilidad y controladuría',
        'CFO fraccional y FP&A',
        'Servicios de nómina',
        'Contabilidad forense',
        'Preparación para capital',
      ],
    },
  },
  stats: {
    eyebrow: 'En números',
    title: 'Dos décadas de resultados en los que puedes confiar',
    subtitle: 'La confianza de decenas de miles de familias y dueños de negocio en todo el país.',
    items: [
      { value: 2005, label: 'Fundada', format: 'year' },
      { value: 7000, suffix: '+', label: 'Declaraciones al año' },
      { value: 50, label: 'Estados atendidos' },
      { value: 100, prefix: '$', suffix: 'M+', label: 'En préstamos analizados' },
    ],
    award: 'Xero Partner Awards 2025 — Gran Firma del Año',
    mapNote: 'Servicio remoto en cada estado de EE. UU., con oficinas en Lawrence y Methuen, MA.',
  },
  estimator: {
    eyebrow: 'Estimador interactivo',
    title: 'Descubre cuánto puede valer trabajar con JBS',
    subtitle: 'Mueve los controles para una idea de tu ahorro potencial. Luego lo hacemos realidad.',
    modeIndividual: 'Personal',
    modeBusiness: 'Negocio',
    incomeLabel: 'Ingreso anual',
    revenueLabel: 'Ingresos anuales',
    complexityLabel: '¿Qué tan compleja es tu situación?',
    complexityLevels: ['Simple', 'Moderada', 'Compleja'],
    resultLabel: 'Beneficio anual estimado',
    resultSub: 'De deducciones optimizadas, libros más limpios y planeación proactiva.',
    disclaimer:
      'Estimación ilustrativa — no es asesoría fiscal ni una garantía. Tus resultados reales dependen de tu situación específica.',
    cta: 'Reserva una Cita',
  },
  why: {
    eyebrow: 'Por qué JBS',
    title: 'Nivel institucional. Refrescantemente humano.',
    items: [
      {
        title: 'Las personas primero',
        desc: 'Te tratamos como familia — respondemos rápido y siempre buscamos soluciones.',
      },
      {
        title: 'Soporte todo el año',
        desc: 'Estamos contigo mucho después de la temporada, para que no pierdas una fecha ni una deducción.',
      },
      {
        title: 'Totalmente bilingüe',
        desc: 'Un equipo fluido en inglés y español — full attention in your language.',
      },
      {
        title: 'Experiencia de CFO',
        desc: 'La disciplina de un CFO con la creatividad de un emprendedor, de tu lado.',
      },
    ],
  },
  tiers: {
    eyebrow: 'Paquetes de negocio',
    title: 'Soporte que escala con tu etapa',
    subtitle: 'Paquetes mensuales según tu complejidad, no solo tu tamaño.',
    items: [
      {
        name: 'Inicial',
        tagline: 'Negocios pequeños y nuevos que construyen su base.',
        points: ['Contabilidad mensual esencial', 'Estados financieros claros', 'Registros listos para impuestos'],
      },
      {
        name: 'Crecimiento',
        tagline: 'Negocios en expansión que necesitan visibilidad y control.',
        points: ['Todo lo de Inicial', 'Reportes y revisión mensual', 'Visibilidad de flujo de caja'],
      },
      {
        name: 'Establecido',
        tagline: 'Negocios establecidos que elevan sus operaciones.',
        points: ['Todo lo de Crecimiento', 'Asesoría y guía', 'Seguimiento de KPIs y desempeño'],
      },
      {
        name: 'Avanzado',
        tagline: 'Negocios de altos ingresos enfocados en crecer.',
        points: ['Todo lo de Establecido', 'CFO fraccional y FP&A', 'Preparación para capital'],
      },
    ],
  },
  reviews: {
    eyebrow: 'Lo que dicen',
    title: 'Confianza que se nota',
    items: [
      {
        quote:
          'JBS Corp te hace sentir parte de la familia. Siempre responden rápido cuando tenemos preguntas y siempre buscan soluciones.',
        name: 'Xaviar Vargas',
        location: 'Haverhill, MA',
        lang: 'en',
      },
      {
        quote:
          'JBS responde súper rápido, a cualquier hora, sin importar la solicitud. JBS hace que tus necesidades y tu negocio se sientan importantes.',
        name: 'Happy Hikers, LLC',
        location: 'Capitol Heights, MD',
        lang: 'en',
      },
      {
        quote:
          'Como dueños de un negocio nuevo, sentimos que JBS es un equipo experto y preparado que nos guía en la dirección correcta.',
        name: 'Bloom Beauty, LLC',
        location: 'Haverhill, MA',
        lang: 'en',
      },
      {
        quote:
          '¡El conocimiento! No sabes lo que no sabes — ahí es donde el equipo de JBS te guía hacia nuevo terreno.',
        name: 'Real Tall Real Estate',
        location: 'Atlanta, GA',
        lang: 'en',
      },
      {
        quote:
          'Lo que amamos de JBS son los resultados, la accesibilidad y el profesionalismo del equipo. JBS es más que un equipo de contabilidad.',
        name: 'Starz & Cloudz, Inc.',
        location: 'Lowell, MA',
        lang: 'en',
      },
      {
        quote: 'La mejor compañía para hacer tus taxes. Profesionales, atentos y siempre dispuestos a ayudar.',
        name: 'Jatashaly',
        location: 'Lawrence, MA',
        lang: 'es',
      },
    ],
    readAll: 'Ver todas las reseñas',
  },
  bilingual: {
    eyebrow: 'In English',
    title: 'We speak your language',
    body: 'Our bilingual team is with you every step — taxes, bookkeeping, and financial guidance, explained clearly in English.',
    cta: 'Book an Appointment',
  },
  team: {
    eyebrow: 'Liderazgo',
    title: 'Las personas detrás de tus números',
    subtitle: 'Décadas de experiencia combinada, un mismo compromiso contigo.',
    members: [
      {
        name: 'Robinson Aquino',
        role: 'Socio y CEO',
        bio: 'Combina la disciplina de un CFO con la creatividad de un emprendedor para convertir a JBS en un socio de crecimiento.',
      },
      {
        name: 'Alex Mercedes',
        role: 'Fundador y Presidente',
        bio: 'Fundó JBS en 2005 con gran experiencia en impuestos personales y una visión de servicios financieros accesibles.',
      },
      {
        name: 'Alvaro Tejada, CFA',
        role: 'CFO y Director de FP&A',
        bio: 'Casi una década en banca comercial, estructurando y analizando más de $100M en préstamos.',
      },
      {
        name: 'Tobit Garcia',
        role: 'Socio',
        bio: 'Embajador de marca y estratega fiscal con un estilo cercano y centrado en las personas, para compradores de vivienda y más.',
      },
    ],
    cta: 'Conoce al equipo',
  },
  finalCta: {
    title: 'Hagamos crecer tu dinero',
    subtitle: 'Reserva una consulta gratis hoy — en inglés o español.',
    book: 'Reserva una Cita',
    contact: 'Contáctanos',
  },
  footer: {
    tagline: 'Servicios bilingües de impuestos, contabilidad y CFO en los 50 estados.',
    servicesTitle: 'Servicios',
    companyTitle: 'Empresa',
    connectTitle: 'Conecta',
    offices: 'Lawrence y Methuen, Massachusetts',
    privacy: 'Política de Privacidad',
    rights: 'Todos los derechos reservados.',
    logoSlot: 'Espacio para el logo — coloca tu imagen aquí',
  },
  stub: {
    badge: 'Vista previa',
    intro: 'Esta página es parte del rediseño y se describe abajo. La página de inicio es la muestra completa.',
    sectionsTitle: 'Secciones planeadas',
    backHome: 'Volver al inicio',
    book: 'Reserva una Cita',
  },
  pages: {
    individualTax: {
      title: 'Impuestos Personales',
      subtitle:
        'Soporte personal de impuestos todo el año para cada tipo de contribuyente — preciso, puntual y optimizado para tu reembolso.',
      sections: [
        'Hero con acceso a “Encuentra tu servicio” y botón de reserva',
        'Empleados / W-2 — declaración precisa y puntual',
        'Inversionistas de bienes raíces / Schedule E — renta y depreciación',
        'Independientes / Schedule C — ingresos, gastos, impuesto propio',
        'Sociedades y corporaciones — 1120, 1120-S, 1065',
        'Propuesta de soporte todo el año',
        'Acordeón de preguntas frecuentes',
        'Botón de reservar cita',
      ],
    },
    business: {
      title: 'Contabilidad, CFO y Servicios de Negocio',
      subtitle:
        'Un contador dedicado respaldado por un equipo de expertos — más visión de CFO para crecer con confianza.',
      sections: [
        'Hero con propuesta de valor para negocios',
        'Contabilidad y controladuría',
        'Reportes financieros y tableros',
        'Asesoría — CFO fraccional y FP&A',
        'Contabilidad forense',
        'Servicios de nómina',
        'Preparación para capital',
        'Paquetes por etapa — Inicial / Crecimiento / Establecido / Avanzado',
        'Botón de reservar cita',
      ],
    },
    businessTax: {
      title: 'Impuestos de Negocios',
      subtitle: 'Estrategia y declaración fiscal para LLCs, S-corps, sociedades y corporaciones.',
      sections: [
        'Hero con resumen de impuestos de negocio',
        'Declaraciones por entidad — 1120, 1120-S, 1065',
        'Planeación y estrategia fiscal',
        'Estimados trimestrales',
        'Coordinación con contabilidad',
        'Botón de reservar cita',
      ],
    },
    about: {
      title: 'Sobre JBS',
      subtitle:
        'De una práctica local de impuestos en 2005 a una firma de servicios financieros nacional — basada en familia, integridad y comunidad.',
      sections: [
        'Nuestra historia — fundada en 2005 por Alex Mercedes',
        'Misión y valores — familia, integridad, impacto comunitario',
        'Cuadrícula del equipo de liderazgo',
        'Premios y credenciales — Xero Gran Firma del Año 2025',
        'Cifras — 20+ años, 7,000+ declaraciones, 50 estados',
        'Llamado a empleo',
      ],
    },
    reviews: {
      title: 'Reseñas',
      subtitle: 'Palabras reales de las familias y negocios que atendemos — en inglés y español.',
      sections: [
        'Muro de testimonios (con filtros)',
        'Reseñas en español',
        'Resultados destacados',
        'Botón para dejar una reseña',
      ],
    },
    contact: {
      title: 'Contacto y Reservas',
      subtitle: 'Contacta al equipo o reserva una consulta gratis — respondemos rápido, en tu idioma.',
      sections: [
        'Reservar cita (Calendly)',
        'Oficinas — Lawrence y Methuen, MA, con mapa',
        'Horario y formulario de contacto',
        'Enlaces de pago y portal de clientes',
      ],
    },
    careers: {
      title: 'Empleo',
      subtitle: 'Únete a un equipo que pone a las personas primero y crece por todo el país.',
      sections: ['Cultura y valores', 'Vacantes', 'Beneficios', 'Botón de aplicación'],
    },
    articles: {
      title: 'Artículos',
      subtitle: 'Ideas prácticas de impuestos y negocios del equipo JBS.',
      sections: ['Artículo destacado', 'Filtros por categoría', 'Cuadrícula de artículos', 'Suscripción al boletín'],
    },
    resources: {
      title: 'Centro de Información',
      subtitle: 'Guías, listas y herramientas para un negocio más sano.',
      sections: ['Categorías de recursos', 'Listas descargables', 'Enlace a evaluación financiera', 'Reservar consulta'],
    },
    financialAssessment: {
      title: 'Evaluación Financiera',
      subtitle: 'Un chequeo rápido de tus finanzas, con próximos pasos personalizados.',
      sections: ['Introducción', 'Cuestionario interactivo', 'Resultados personalizados', 'Reservar consulta'],
    },
    privacy: {
      title: 'Política de Privacidad',
      subtitle: 'Cómo recopilamos, usamos y protegemos tu información.',
      sections: ['Información que recopilamos', 'Cómo la usamos', 'Protección de datos', 'Tus derechos', 'Contacto'],
    },
    notFound: {
      title: 'Página no encontrada',
      subtitle: 'La página que buscas no existe — pero aún podemos ayudarte.',
      sections: [],
    },
  },
}

export default es
