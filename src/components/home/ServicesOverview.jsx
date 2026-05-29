import { Link } from 'react-router-dom'
import { Users, Building2, Check, ArrowRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import Section, { SectionHeader } from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'

function PathCard({ data, Icon, accentDark }) {
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 ${
        accentDark
          ? 'bg-navy-950 text-white hover:shadow-glow'
          : 'border border-navy-100 bg-white text-navy-900 hover:shadow-glow'
      }`}
    >
      {accentDark && <div className="mesh-bg absolute inset-0 opacity-40" />}
      <div className="relative flex flex-1 flex-col">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
            accentDark ? 'bg-teal-500/20 text-teal-300' : 'bg-teal-500/10 text-teal-600'
          }`}
        >
          <Icon className="h-7 w-7" />
        </span>
        <h3 className="mt-6 text-2xl font-bold">{data.title}</h3>
        <p className={`mt-2 ${accentDark ? 'text-navy-100' : 'text-navy-500'}`}>{data.desc}</p>

        <ul className="mt-6 flex flex-col gap-3">
          {data.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className={`mt-0.5 h-5 w-5 shrink-0 ${accentDark ? 'text-teal-400' : 'text-teal-600'}`} />
              <span className={accentDark ? 'text-navy-100' : 'text-navy-700'}>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          to={data.to}
          className={`mt-8 inline-flex items-center gap-2 self-start rounded-full px-5 py-2.5 text-sm font-semibold transition-all group-hover:gap-3 ${
            accentDark ? 'bg-teal-500 text-white hover:bg-teal-600' : 'bg-navy-950 text-white hover:bg-navy-800'
          }`}
        >
          {data.title}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export default function ServicesOverview() {
  const { t } = useLanguage()
  const s = t.servicesOverview

  return (
    <Section>
      <SectionHeader eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <PathCard data={s.individuals} Icon={Users} accentDark={false} />
        </Reveal>
        <Reveal delay={0.1}>
          <PathCard data={s.businesses} Icon={Building2} accentDark />
        </Reveal>
      </div>
    </Section>
  )
}
