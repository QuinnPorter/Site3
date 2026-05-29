// Shared, language-agnostic links/values
export const LINKS = {
  book: 'https://calendly.com/d/3vk-shd-hgj',
  payment: 'https://jacquelinebserv.securepayments.cardpointe.com/pay',
  portal: 'https://jbscorp.taxdome.com/en-us/signup',
  podcast: 'https://onestepbeyondfailure.com/',
  events: 'https://www.eventbrite.com/o/jbs-corp-95734310803',
  linkedin: 'https://www.linkedin.com/company/jbs-corp',
  facebook: 'https://www.facebook.com/jbstaxes/',
  instagram: 'https://www.instagram.com/jbscorp/?hl=en',
}

const en = {
  nav: {
    individualTax: 'Individual Tax',
    business: 'Business',
    bookkeeping: 'Bookkeeping & CFO',
    businessTax: 'Business Tax',
    resources: 'Resources',
    about: 'About',
    reviews: 'Reviews',
    careers: 'Careers',
    articles: 'Articles',
    contact: 'Contact',
    book: 'Book Appointment',
    payment: 'Make a Payment',
    portal: 'Client Portal',
    menu: 'Menu',
    close: 'Close',
    services: 'Services',
    company: 'Company',
  },
  cta: {
    book: 'Book your appointment',
    getStarted: 'Get started',
    findService: 'Find your service',
    learnMore: 'Learn more',
    readAll: 'Read all reviews',
    contact: 'Contact us',
    exploreBusiness: 'Explore business services',
    meetTeam: 'Meet the team',
  },
  hero: {
    badge: 'Xero Large Firm of the Year 2025',
    titlePre: 'Accounting that ',
    titleAccent: 'moves your money forward',
    titlePost: '.',
    subtitle:
      'Bilingual tax, bookkeeping, and CFO services for individuals and businesses — institutional-grade expertise delivered with a human touch, in all 50 states.',
    primary: 'Book your appointment',
    secondary: 'Find your service',
    trust: [
      { value: '20+', label: 'years in business' },
      { value: '7,000+', label: 'returns filed yearly' },
      { value: '50', label: 'states served' },
    ],
  },
  finder: {
    eyebrow: 'Service finder',
    title: 'Not sure where to start?',
    subtitle: 'Answer one quick question and we’ll point you to the right team.',
    question: 'Which best describes you?',
    options: [
      { id: 'w2', label: 'W-2 employee', hint: 'I get a paycheck and a W-2' },
      { id: 'freelancer', label: 'Freelancer / 1099', hint: 'I’m self-employed or a contractor' },
      { id: 'realestate', label: 'Real estate investor', hint: 'I own rental property' },
      { id: 'business', label: 'Business owner', hint: 'I run a company or LLC' },
    ],
    resultTitle: 'Your recommended path',
    restart: 'Start over',
    book: 'Book this service',
    recommendations: {
      w2: {
        name: 'Personal Tax Preparation',
        desc: 'Accurate, on-time W-2 filing with every credit and deduction you’ve earned — plus year-round support.',
        to: '/individual-tax',
      },
      freelancer: {
        name: 'Self-Employed & Schedule C',
        desc: 'We handle 1099 income, expenses, self-employment tax, and home-office deductions to optimize your outcome.',
        to: '/individual-tax',
      },
      realestate: {
        name: 'Real Estate & Schedule E',
        desc: 'Rental income, depreciation, and expense strategy to maximize deductions on your property portfolio.',
        to: '/individual-tax',
      },
      business: {
        name: 'Bookkeeping, CFO & Business Tax',
        desc: 'A dedicated bookkeeper plus fractional CFO and FP&A guidance to give you control and grow with confidence.',
        to: '/business',
      },
    },
  },
  servicesOverview: {
    eyebrow: 'What we do',
    title: 'Two paths, one trusted team',
    subtitle: 'Whether it’s your household return or your company’s books, we meet you where you are.',
    individuals: {
      title: 'Individuals & Households',
      desc: 'Year-round personal tax support that finds every deduction.',
      to: '/individual-tax',
      items: [
        'W-2 employees',
        'Freelancers & 1099',
        'Real estate investors — Schedule E',
        'Solopreneurs — Schedule C',
        'Partnerships & corporations (1120, 1120-S, 1065)',
      ],
    },
    businesses: {
      title: 'Businesses & Enterprises',
      desc: 'Books, payroll, and CFO-level insight that scale with you.',
      to: '/business',
      items: [
        'Bookkeeping & controllership',
        'Fractional CFO & FP&A',
        'Payroll services',
        'Forensic accounting',
        'Capital readiness',
      ],
    },
  },
  stats: {
    eyebrow: 'By the numbers',
    title: 'Two decades of results clients can count on',
    subtitle: 'Trusted by tens of thousands of families and business owners nationwide.',
    items: [
      { value: 2005, label: 'Founded', format: 'year' },
      { value: 7000, suffix: '+', label: 'Returns filed each year' },
      { value: 50, label: 'States served' },
      { value: 100, prefix: '$', suffix: 'M+', label: 'In loans analyzed' },
    ],
    award: 'Xero Partner Awards 2025 — Large Firm of the Year',
    mapNote: 'Remote-first service in every U.S. state, with offices in Lawrence & Methuen, MA.',
  },
  estimator: {
    eyebrow: 'Interactive estimator',
    title: 'See what working with JBS could be worth',
    subtitle: 'Move the sliders for a rough idea of your potential savings. Then let’s make it real.',
    modeIndividual: 'Individual',
    modeBusiness: 'Business',
    incomeLabel: 'Annual income',
    revenueLabel: 'Annual revenue',
    complexityLabel: 'How complex is your situation?',
    complexityLevels: ['Simple', 'Moderate', 'Complex'],
    resultLabel: 'Estimated annual benefit',
    resultSub: 'From optimized deductions, cleaner books, and proactive planning.',
    disclaimer:
      'Illustrative estimate only — not tax advice or a guarantee. Your actual results depend on your specific situation.',
    cta: 'Get your real number',
  },
  why: {
    eyebrow: 'Why JBS',
    title: 'Institutional-grade. Refreshingly human.',
    items: [
      {
        title: 'People-first, always',
        desc: 'You’re treated like family — quick to respond, always looking for solutions.',
      },
      {
        title: 'Year-round support',
        desc: 'We’re here long after tax season, so you never miss a deadline or deduction.',
      },
      {
        title: 'Fully bilingual',
        desc: 'A team fluent in English and Spanish — atención completa en tu idioma.',
      },
      {
        title: 'CFO-level expertise',
        desc: 'The discipline of a CFO with the creativity of an entrepreneur, on your side.',
      },
    ],
  },
  tiers: {
    eyebrow: 'Business packages',
    title: 'Support that scales with your stage',
    subtitle: 'Monthly packages built around your complexity, not just your size.',
    items: [
      {
        name: 'Early',
        tagline: 'Small, early-stage businesses building a foundation.',
        points: ['Core monthly bookkeeping', 'Clean financial statements', 'Tax-ready records'],
      },
      {
        name: 'Growing',
        tagline: 'Expanding businesses that need visibility and control.',
        points: ['Everything in Early', 'Monthly reporting & review', 'Cash-flow visibility'],
      },
      {
        name: 'Established',
        tagline: 'Established businesses elevating their operations.',
        points: ['Everything in Growing', 'Advisory & guidance', 'KPI & performance tracking'],
      },
      {
        name: 'Advanced',
        tagline: 'High-revenue businesses focused on growth.',
        points: ['Everything in Established', 'Fractional CFO & FP&A', 'Capital-readiness support'],
      },
    ],
  },
  reviews: {
    eyebrow: 'Client love',
    title: 'Trusted, and it shows',
    items: [
      {
        quote:
          'JBS Corp makes you feel like you’re part of the family. They’re always quick to respond whenever we have questions and always looking for solutions.',
        name: 'Xaviar Vargas',
        location: 'Haverhill, MA',
        lang: 'en',
      },
      {
        quote:
          'JBS is super responsive, any time of day, no matter the request. JBS makes your needs and business feel important.',
        name: 'Happy Hikers, LLC',
        location: 'Capitol Heights, MD',
        lang: 'en',
      },
      {
        quote:
          'As a newer small business owner, we feel JBS is an experienced and educated team that helps guide us in the direction we should be going.',
        name: 'Bloom Beauty, LLC',
        location: 'Haverhill, MA',
        lang: 'en',
      },
      {
        quote:
          'The knowledge! You don’t know what you don’t know — that’s where the JBS team guides you into different territory.',
        name: 'Real Tall Real Estate',
        location: 'Atlanta, GA',
        lang: 'en',
      },
      {
        quote:
          'What we love about JBS is the results, accessibility, and professionalism of the team. JBS is more than an accounting team.',
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
    readAll: 'Read all reviews',
  },
  bilingual: {
    eyebrow: 'En Español',
    title: 'Hablamos tu idioma',
    body: 'Nuestro equipo bilingüe te acompaña en cada paso — impuestos, contabilidad y asesoría financiera, explicados con claridad en español.',
    cta: 'Reserva tu cita',
  },
  team: {
    eyebrow: 'Leadership',
    title: 'The people behind your numbers',
    subtitle: 'Decades of combined expertise, one shared commitment to you.',
    members: [
      {
        name: 'Robinson Aquino',
        role: 'Partner & CEO',
        bio: 'Blends the discipline of a CFO with the creativity of an entrepreneur to turn JBS into a growth partner.',
      },
      {
        name: 'Alex Mercedes',
        role: 'Founder & President',
        bio: 'Founded JBS in 2005 with deep expertise in individual tax and a vision for accessible financial services.',
      },
      {
        name: 'Alvaro Tejada, CFA',
        role: 'CFO & Head of FP&A',
        bio: 'Nearly a decade in commercial banking, having structured and analyzed over $100M in loans.',
      },
      {
        name: 'Tobit Garcia',
        role: 'Partner',
        bio: 'Brand ambassador and tax strategist with an approachable, people-first style for homebuyers and beyond.',
      },
    ],
    cta: 'Meet the team',
  },
  finalCta: {
    title: 'Let’s move your money forward',
    subtitle: 'Book a free consultation today — in English or Spanish.',
    book: 'Book your appointment',
    contact: 'Contact us',
  },
  footer: {
    tagline: 'Bilingual tax, bookkeeping, and CFO services in all 50 states.',
    servicesTitle: 'Services',
    companyTitle: 'Company',
    connectTitle: 'Connect',
    offices: 'Lawrence & Methuen, Massachusetts',
    privacy: 'Privacy Policy',
    rights: 'All rights reserved.',
    logoSlot: 'Logo slot — drop your asset here',
  },
  stub: {
    badge: 'Page preview',
    intro: 'This page is part of the redesign and is outlined below. The home page is the fully-built showcase.',
    sectionsTitle: 'Planned sections',
    backHome: 'Back to home',
    book: 'Book your appointment',
  },
  pages: {
    individualTax: {
      title: 'Individual Tax',
      subtitle:
        'Year-round personal tax support for every kind of taxpayer — accurate, on-time, and optimized for your refund.',
      sections: [
        'Hero with “Find your service” entry and Book CTA',
        'Employees / W-2 — accurate, timely filing',
        'Real estate investors / Schedule E — rental income & depreciation',
        'Solopreneurs / Schedule C — income, expenses, self-employment tax',
        'Partnerships & corporations — 1120, 1120-S, 1065',
        'Year-round support pitch',
        'FAQ accordion',
        'Book appointment CTA',
      ],
    },
    business: {
      title: 'Bookkeeping, CFO & Business Services',
      subtitle:
        'A dedicated bookkeeper backed by a team of experts — plus CFO-level insight to help you grow with confidence.',
      sections: [
        'Hero with business value proposition',
        'Bookkeeping & controllership',
        'Financial reporting & dashboards',
        'Advisory — fractional CFO & FP&A',
        'Forensic accounting',
        'Payroll services',
        'Capital readiness',
        'Tiered packages — Early / Growing / Established / Advanced',
        'Book appointment CTA',
      ],
    },
    businessTax: {
      title: 'Business Tax',
      subtitle: 'Entity tax strategy and filing for LLCs, S-corps, partnerships, and corporations.',
      sections: [
        'Hero with business tax overview',
        'Entity filings — 1120, 1120-S, 1065',
        'Tax planning & strategy',
        'Quarterly estimates',
        'Coordination with bookkeeping',
        'Book appointment CTA',
      ],
    },
    about: {
      title: 'About JBS',
      subtitle: 'From a local tax practice in 2005 to a nationwide financial services firm — built on family, integrity, and community.',
      sections: [
        'Our story — founded 2005 by Alex Mercedes',
        'Mission & values — family, integrity, community impact',
        'Leadership team grid',
        'Awards & credentials — Xero Large Firm of the Year 2025',
        'Stats — 20+ years, 7,000+ returns, 50 states',
        'Careers callout',
      ],
    },
    reviews: {
      title: 'Reviews',
      subtitle: 'Real words from the families and businesses we serve — in English and Spanish.',
      sections: [
        'Testimonial wall (filterable)',
        'Spanish-language reviews',
        'Highlighted outcomes',
        'Leave-a-review CTA',
      ],
    },
    contact: {
      title: 'Contact & Book',
      subtitle: 'Reach the team or book a free consultation — we’ll respond fast, in your language.',
      sections: [
        'Book appointment (Calendly)',
        'Offices — Lawrence & Methuen, MA, with map',
        'Hours & contact form',
        'Make a payment & client portal links',
      ],
    },
    careers: {
      title: 'Careers',
      subtitle: 'Join a people-first team that’s growing across the country.',
      sections: ['Culture & values', 'Open roles', 'Benefits', 'Application CTA'],
    },
    articles: {
      title: 'Articles',
      subtitle: 'Practical tax and business insights from the JBS team.',
      sections: ['Featured article', 'Category filters', 'Article grid', 'Newsletter signup'],
    },
    resources: {
      title: 'Business Owner Info Hub',
      subtitle: 'Guides, checklists, and tools to run a healthier business.',
      sections: ['Resource categories', 'Downloadable checklists', 'Financial assessment link', 'Book a consult'],
    },
    financialAssessment: {
      title: 'Financial Assessment',
      subtitle: 'A quick health check on your finances, with tailored next steps.',
      sections: ['Assessment intro', 'Interactive questionnaire', 'Personalized results', 'Book a consult'],
    },
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'How we collect, use, and protect your information.',
      sections: ['Information we collect', 'How we use it', 'Data protection', 'Your rights', 'Contact'],
    },
    notFound: {
      title: 'Page not found',
      subtitle: 'The page you’re looking for doesn’t exist — but we can still help.',
      sections: [],
    },
  },
}

export default en
