import { useEffect, useMemo, useState } from 'react'
import { motion, useMotionValueEvent, useSpring } from 'framer-motion'
import { ArrowUpRight, Calculator, Info } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { LINKS } from '../../i18n/en.js'
import Section, { SectionHeader } from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'

const CONFIG = {
  individual: { min: 20000, max: 500000, step: 5000, default: 85000, rates: [0.02, 0.035, 0.05] },
  business: { min: 50000, max: 5000000, step: 50000, default: 750000, rates: [0.015, 0.035, 0.055] },
}

export default function SavingsEstimator() {
  const { t } = useLanguage()
  const e = t.estimator

  const [mode, setMode] = useState('individual')
  const [amount, setAmount] = useState(CONFIG.individual.default)
  const [complexity, setComplexity] = useState(1)

  const cfg = CONFIG[mode]

  // Reset amount to a sensible default when switching modes
  useEffect(() => {
    setAmount(CONFIG[mode].default)
  }, [mode])

  const benefit = useMemo(() => Math.round(amount * cfg.rates[complexity]), [amount, complexity, cfg])

  // Smoothly animate the displayed number
  const spring = useSpring(0, { stiffness: 90, damping: 20 })
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    spring.set(benefit)
  }, [benefit, spring])
  useMotionValueEvent(spring, 'change', (v) => setDisplay(Math.round(v)))

  const amountPct = ((amount - cfg.min) / (cfg.max - cfg.min)) * 100
  const complexityPct = (complexity / 2) * 100
  const maxBenefit = cfg.max * cfg.rates[2]
  const barPct = Math.min(100, (benefit / maxBenefit) * 100)

  return (
    <Section className="bg-[var(--bg)]">
      <SectionHeader eyebrow={e.eyebrow} title={e.title} subtitle={e.subtitle} />

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
        {/* Controls */}
        <div className="card-surface p-7 sm:p-8">
          {/* Mode toggle */}
          <div className="inline-flex rounded-full bg-navy-50 p-1 ring-1 ring-navy-100">
            {['individual', 'business'].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  mode === m ? 'bg-teal-500 text-white shadow' : 'text-navy-500 hover:text-navy-900'
                }`}
              >
                {m === 'individual' ? e.modeIndividual : e.modeBusiness}
              </button>
            ))}
          </div>

          {/* Amount slider */}
          <div className="mt-8">
            <div className="flex items-baseline justify-between">
              <label className="text-sm font-medium text-navy-600">
                {mode === 'individual' ? e.incomeLabel : e.revenueLabel}
              </label>
              <span className="font-display text-xl font-bold text-navy-900">
                ${amount.toLocaleString('en-US')}
              </span>
            </div>
            <input
              type="range"
              min={cfg.min}
              max={cfg.max}
              step={cfg.step}
              value={amount}
              onChange={(ev) => setAmount(Number(ev.target.value))}
              style={{ '--val': `${amountPct}%` }}
              className="mt-3 w-full"
              aria-label={mode === 'individual' ? e.incomeLabel : e.revenueLabel}
            />
          </div>

          {/* Complexity slider */}
          <div className="mt-8">
            <label className="text-sm font-medium text-navy-600">{e.complexityLabel}</label>
            <input
              type="range"
              min={0}
              max={2}
              step={1}
              value={complexity}
              onChange={(ev) => setComplexity(Number(ev.target.value))}
              style={{ '--val': `${complexityPct}%` }}
              className="mt-3 w-full"
              aria-label={e.complexityLabel}
            />
            <div className="mt-2 flex justify-between text-xs font-medium text-navy-400">
              {e.complexityLevels.map((lvl, i) => (
                <span key={lvl} className={complexity === i ? 'text-teal-600' : ''}>
                  {lvl}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-navy-950 p-7 text-white sm:p-8">
          <div className="mesh-bg absolute inset-0 opacity-40" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-500/15 px-3 py-1 text-sm font-semibold text-teal-300">
              <Calculator className="h-4 w-4" />
              {e.resultLabel}
            </span>
            <div className="mt-5 font-display text-5xl font-bold sm:text-6xl">
              ${display.toLocaleString('en-US')}
            </div>
            <p className="mt-3 max-w-sm text-sm text-navy-100">{e.resultSub}</p>

            {/* Animated bar */}
            <div className="mt-7 h-3 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-300"
                animate={{ width: `${barPct}%` }}
                transition={{ type: 'spring', stiffness: 90, damping: 20 }}
              />
            </div>
          </div>

          <div className="relative mt-8">
            <Button href={LINKS.book} variant="primary" size="lg" className="w-full sm:w-auto">
              {e.cta}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <p className="mt-4 flex items-start gap-2 text-xs text-navy-300">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              {e.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
