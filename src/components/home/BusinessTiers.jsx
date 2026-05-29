import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronDown } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import Section, { SectionHeader } from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'

export default function BusinessTiers() {
  const { t } = useLanguage()
  const tiers = t.tiers
  const [open, setOpen] = useState(0)

  return (
    <Section className="bg-[var(--bg)]">
      <SectionHeader eyebrow={tiers.eyebrow} title={tiers.title} subtitle={tiers.subtitle} />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {tiers.items.map((tier, i) => {
          const isOpen = open === i
          const featured = i === 3
          return (
            <Reveal key={tier.name} delay={i * 0.07}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={`flex h-full w-full flex-col rounded-3xl p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-1.5 ${
                  featured
                    ? 'bg-navy-950 text-white hover:shadow-glow'
                    : 'border border-navy-100 bg-white text-navy-900 hover:border-teal-200 hover:shadow-glow'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-bold ${
                      featured ? 'bg-teal-500 text-white' : 'bg-teal-500/10 text-teal-700'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''} ${
                      featured ? 'text-teal-300' : 'text-navy-300'
                    }`}
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold">{tier.name}</h3>
                <p className={`mt-2 text-sm ${featured ? 'text-navy-100' : 'text-navy-500'}`}>{tier.tagline}</p>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 flex flex-col gap-2.5 overflow-hidden"
                    >
                      {tier.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm">
                          <Check className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? 'text-teal-400' : 'text-teal-600'}`} />
                          <span className={featured ? 'text-navy-100' : 'text-navy-700'}>{p}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </button>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
