import { motion } from 'framer-motion'
import { ArrowUpRight, Compass, Sparkles, Award, MapPin } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { LINKS, HERO_TAGLINE } from '../../i18n/en.js'
import Button from '../ui/Button.jsx'

function scrollToFinder() {
  document.getElementById('finder')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  const { t, lang } = useLanguage()
  const primary = lang === 'es' ? HERO_TAGLINE.es : HERO_TAGLINE.en
  const secondary = lang === 'es' ? HERO_TAGLINE.en : HERO_TAGLINE.es

  return (
    <section className="relative overflow-hidden bg-[var(--bg)] pt-[6.4rem] text-navy-900 sm:pt-[7.2rem]">
      <div className="mesh-bg absolute inset-0 opacity-70" />

      <div className="container-x relative grid items-center gap-14 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        {/* Copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-sm font-semibold text-teal-700"
          >
            <Sparkles className="h-4 w-4" />
            {t.hero.badge}
          </motion.span>

          {/* Bilingual tagline — current language leads, the other follows (always both). */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 text-[2.167rem] font-bold leading-[1.08] sm:text-[2.917rem] lg:text-[3.667rem]"
          >
            {primary.pre}
            <span className="gradient-text">{primary.accent}</span>
            {primary.post}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="mt-3 font-display text-xl text-navy-500 sm:text-2xl"
          >
            {secondary.pre}
            {secondary.accent}
            {secondary.post}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-[1.042rem] text-navy-600"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button href={LINKS.book} variant="primary" size="lg">
              {t.hero.primary}
              <ArrowUpRight className="h-5 w-5" />
            </Button>
            <Button variant="secondary" size="lg" onClick={scrollToFinder}>
              <Compass className="h-5 w-5" />
              {t.hero.secondary}
            </Button>
          </motion.div>
        </div>

        {/* Credentials card — formal trust panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-md"
        >
          <div className="card-surface p-8">
            {/* Headline credential — Xero award */}
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700">
                <Award className="h-6 w-6" />
              </span>
              <p className="font-display text-lg font-bold leading-snug text-navy-900">{t.hero.badge}</p>
            </div>

            <div className="my-6 border-t border-navy-100" />

            {/* Credential facts — value first, then label */}
            <ul className="space-y-3">
              {t.hero.trust.map((s) => (
                <li key={s.label} className="flex items-baseline gap-2 text-navy-600">
                  <span className="font-sans text-lg font-bold tabular-nums text-navy-900">{s.value}</span>
                  {s.label}
                </li>
              ))}
            </ul>

            {/* Offices */}
            <div className="mt-6 flex items-center gap-2.5 rounded-2xl bg-navy-50 px-4 py-3 text-sm font-medium text-navy-700">
              <MapPin className="h-4 w-4 shrink-0 text-teal-700" />
              {t.hero.offices}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
