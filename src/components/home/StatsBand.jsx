import { Award } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import Counter from '../ui/Counter.jsx'
import Reveal from '../ui/Reveal.jsx'
import USMap from '../ui/USMap.jsx'

export default function StatsBand() {
  const { t } = useLanguage()
  const s = t.stats

  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
      <div className="mesh-bg absolute inset-0 opacity-50" />
      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Stats */}
          <div>
            <Reveal>
              <span className="eyebrow bg-white/10 text-teal-300">{s.eyebrow}</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{s.title}</h2>
              <p className="mt-4 max-w-lg text-navy-100">{s.subtitle}</p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9">
              {s.items.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.08}>
                  <div>
                    <div className="font-display text-4xl font-bold text-white sm:text-5xl">
                      <Counter
                        value={item.value}
                        prefix={item.prefix}
                        suffix={item.suffix}
                        format={item.format}
                      />
                    </div>
                    <div className="mt-1 text-sm text-navy-200">{item.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-teal-400/30 bg-teal-500/10 px-5 py-3">
                <Award className="h-6 w-6 text-teal-300" />
                <span className="text-sm font-semibold text-teal-100">{s.award}</span>
              </div>
            </Reveal>
          </div>

          {/* Coverage map */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
              <USMap className="w-full" />
              <p className="mt-6 text-center text-sm text-navy-200">{s.mapNote}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
