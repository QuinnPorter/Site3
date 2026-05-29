import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, RotateCcw, Briefcase, FileText, Home, Building2, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { LINKS } from '../../i18n/en.js'
import Section, { SectionHeader } from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'

const ICONS = {
  w2: FileText,
  freelancer: Briefcase,
  realestate: Home,
  business: Building2,
}

export default function ServiceFinder() {
  const { t } = useLanguage()
  const [selected, setSelected] = useState(null)
  const rec = selected ? t.finder.recommendations[selected] : null

  return (
    <Section id="finder" className="bg-[var(--bg)]">
      <SectionHeader eyebrow={t.finder.eyebrow} title={t.finder.title} subtitle={t.finder.subtitle} />

      <div className="mx-auto mt-12 max-w-4xl">
        {!rec ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="mb-6 text-center font-display text-xl font-semibold text-navy-900">
                {t.finder.question}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {t.finder.options.map((opt) => {
                  const Icon = ICONS[opt.id]
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelected(opt.id)}
                      className="group flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-5 text-left shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-teal-400 hover:shadow-glow"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="flex-1">
                        <span className="block font-semibold text-navy-900">{opt.label}</span>
                        <span className="block text-sm text-navy-500">{opt.hint}</span>
                      </span>
                      <ArrowRight className="h-5 w-5 text-navy-300 transition-all group-hover:translate-x-1 group-hover:text-teal-600" />
                    </button>
                  )
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl border border-teal-200 bg-white p-8 shadow-glow sm:p-10"
            >
              <div className="mesh-bg absolute inset-0 opacity-40" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-3 py-1 text-sm font-semibold text-teal-700">
                  <CheckCircle2 className="h-4 w-4" />
                  {t.finder.resultTitle}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-navy-900 sm:text-3xl">{rec.name}</h3>
                <p className="mt-3 max-w-xl text-navy-600">{rec.desc}</p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button to={rec.to} variant="primary" size="lg">
                    {t.cta.learnMore}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href={LINKS.book} variant="secondary" size="lg">
                    {t.finder.book}
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-navy-500 transition-colors hover:text-teal-700"
                  >
                    <RotateCcw className="h-4 w-4" />
                    {t.finder.restart}
                  </button>
                </div>
              </div>
            </motion.div>
        )}
      </div>
    </Section>
  )
}
