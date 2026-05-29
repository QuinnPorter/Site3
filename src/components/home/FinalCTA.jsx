import { ArrowUpRight, Phone } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { LINKS } from '../../i18n/en.js'
import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'

export default function FinalCTA() {
  const { t } = useLanguage()
  const c = t.finalCta

  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white">
      <div className="mesh-bg absolute inset-0" />
      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-3xl font-bold sm:text-5xl">{c.title}</h2>
            <p className="mt-5 text-lg text-navy-100">{c.subtitle}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href={LINKS.book} variant="primary" size="lg">
                {c.book}
                <ArrowUpRight className="h-5 w-5" />
              </Button>
              <Button to="/contact" variant="light" size="lg">
                <Phone className="h-5 w-5" />
                {c.contact}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
