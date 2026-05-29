import { useEffect } from 'react'
import { ArrowLeft, ArrowUpRight, LayoutGrid } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { LINKS } from '../../i18n/en.js'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'

export default function PageStub({ content }) {
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [content])

  return (
    <main>
      {/* Hero header */}
      <section className="relative overflow-hidden bg-[var(--bg)] pb-20 pt-36 text-navy-900">
        <div className="mesh-bg absolute inset-0 opacity-70" />
        <div className="container-x relative">
          <Reveal>
            <span className="eyebrow">{t.stub.badge}</span>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">{content.title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-navy-600">{content.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={LINKS.book} variant="primary" size="lg">
                {t.stub.book}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button to="/" variant="secondary" size="lg">
                <ArrowLeft className="h-4 w-4" />
                {t.stub.backHome}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Planned sections */}
      {content.sections?.length > 0 && (
        <section className="py-20">
          <div className="container-x">
            <Reveal>
              <p className="mb-2 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-teal-700">
                <LayoutGrid className="h-4 w-4" />
                {t.stub.sectionsTitle}
              </p>
              <p className="mx-auto mb-12 max-w-xl text-center text-navy-500">{t.stub.intro}</p>
            </Reveal>
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
              {content.sections.map((s, i) => (
                <Reveal key={s} delay={i * 0.05}>
                  <div className="card-surface flex items-start gap-4 p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-sm font-bold text-teal-700">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-navy-700">{s}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
