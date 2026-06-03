import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Compass, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { LINKS, HERO_TAGLINE } from '../../i18n/en.js'
import Button from '../ui/Button.jsx'

function scrollToFinder() {
  document.getElementById('finder')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  const { t, lang } = useLanguage()
  const reduce = useReducedMotion()
  const loop = (anim) => (reduce ? {} : anim)
  const primary = lang === 'es' ? HERO_TAGLINE.es : HERO_TAGLINE.en
  const secondary = lang === 'es' ? HERO_TAGLINE.en : HERO_TAGLINE.es

  return (
    <section className="relative overflow-hidden bg-[var(--bg)] pt-[6.4rem] text-navy-900 sm:pt-[7.2rem]">
      <div className="mesh-bg absolute inset-0 opacity-70" />

      {/* Floating motifs */}
      <motion.div
        className="absolute right-[8%] top-32 hidden h-24 w-24 rounded-3xl bg-teal-500/20 blur-xl lg:block"
        animate={loop({ y: [0, -18, 0] })}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[6%] bottom-40 hidden h-32 w-32 rounded-full bg-navy-400/20 blur-xl lg:block"
        animate={loop({ y: [0, 20, 0] })}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-x relative grid items-center gap-14 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32">
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

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-navy-100 pt-7"
          >
            {t.hero.trust.map((s) => (
              <div key={s.label}>
                <div className="font-sans text-3xl font-bold tabular-nums text-navy-900">{s.value}</div>
                <div className="text-sm text-navy-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating dashboard visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="rounded-3xl border border-navy-800 bg-navy-950 p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-navy-200">Net cash flow</p>
                <p className="font-sans text-3xl font-bold tabular-nums text-white">$248,500</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-teal-500/20 px-2.5 py-1 text-sm font-semibold text-teal-300">
                <TrendingUp className="h-4 w-4" /> +18%
              </span>
            </div>

            {/* Animated bars */}
            <div className="mt-7 flex h-32 items-end gap-2.5">
              {[40, 58, 47, 72, 63, 88, 76, 96].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-teal-600 to-teal-400"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.08, ease: 'easeOut' }}
                />
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/5 p-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/20 text-teal-300">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <p className="text-sm text-navy-100">Books reconciled & tax-ready</p>
            </div>
          </div>

          <motion.div
            className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-navy-900/90 px-4 py-3 shadow-xl backdrop-blur"
            animate={loop({ y: [0, -8, 0] })}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-xs text-navy-200">Refund optimized</p>
            <p className="font-sans text-xl font-bold tabular-nums text-teal-400">+$3,240</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
