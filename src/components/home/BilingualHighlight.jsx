import { Languages, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { LINKS } from '../../i18n/en.js'
import Section from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'

export default function BilingualHighlight() {
  const { t } = useLanguage()
  const b = t.bilingual

  return (
    <Section className="bg-[var(--bg)]">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-600 to-teal-500 p-10 text-white sm:p-14">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 left-1/3 h-56 w-56 rounded-full bg-navy-900/20 blur-2xl" />
          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-semibold">
                <Languages className="h-4 w-4" />
                {b.eyebrow}
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{b.title}</h2>
              <p className="mt-4 text-lg text-teal-50">{b.body}</p>
            </div>
            <Button href={LINKS.book} variant="white" size="lg" className="shrink-0">
              {b.cta}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
