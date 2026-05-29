import { Heart, CalendarCheck, Languages, LineChart } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import Section, { SectionHeader } from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'

const ICONS = [Heart, CalendarCheck, Languages, LineChart]

export default function WhyJBS() {
  const { t } = useLanguage()
  const w = t.why

  return (
    <Section>
      <SectionHeader eyebrow={w.eyebrow} title={w.title} />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {w.items.map((item, i) => {
          const Icon = ICONS[i]
          return (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-glow">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-600 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm text-navy-500">{item.desc}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
