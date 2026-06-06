import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import Section, { SectionHeader } from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'

function initials(name) {
  return name
    .replace(/,?\s*(LLC|Inc\.?)/gi, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default function Reviews() {
  const { t } = useLanguage()
  const items = t.reviews.items
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (paused || reduce) return
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000)
    return () => clearInterval(id)
  }, [paused, reduce, items.length])

  const go = (dir) => setIndex((i) => (i + dir + items.length) % items.length)
  const review = items[index]

  return (
    <Section>
      <div className="flex flex-col items-center gap-6 text-center">
        <SectionHeader title={t.reviews.title} />
      </div>

      <div
        className="mx-auto mt-12 max-w-3xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative rounded-3xl border border-navy-100 bg-white p-8 shadow-soft sm:p-12">
          <Quote className="absolute right-8 top-8 h-12 w-12 text-teal-500/15" />

          <div className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold text-gold" />
            ))}
          </div>

          <div className="relative mt-6 min-h-[140px]">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-center text-xl font-medium leading-relaxed text-navy-800">
                  “{review.quote}”
                </p>
                <div className="mt-7 flex items-center justify-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 font-sans text-sm font-bold text-teal-300">
                    {initials(review.name)}
                  </span>
                  <div className="text-left">
                    <div className="flex items-center gap-2 font-semibold text-navy-900">
                      {review.name}
                      {review.lang === 'es' && (
                        <span className="rounded-full bg-teal-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal-700">
                          Español
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-navy-400">{review.location}</div>
                  </div>
                </div>
              </motion.div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-navy-600 transition-colors hover:border-teal-400 hover:text-teal-700"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-teal-500' : 'w-2 bg-navy-200 hover:bg-navy-300'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-navy-600 transition-colors hover:border-teal-400 hover:text-teal-700"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button to="/reviews" variant="ghost" size="md">
            {t.reviews.readAll}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Section>
  )
}
