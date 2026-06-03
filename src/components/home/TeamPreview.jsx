import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import Section, { SectionHeader } from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'

function initials(name) {
  return name
    .replace(/,.*$/, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default function TeamPreview() {
  const { t } = useLanguage()
  const team = t.team

  return (
    <Section>
      <SectionHeader eyebrow={team.eyebrow} title={team.title} subtitle={team.subtitle} />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.members.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.08}>
            <div className="group h-full rounded-3xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
              {/* Photo slot — replace gradient avatar with a real headshot */}
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700">
                <span className="font-sans text-4xl font-bold text-teal-300">{initials(m.name)}</span>
                <span className="absolute bottom-2 right-2 rounded-full bg-black/30 px-2 py-0.5 text-[10px] text-white/70 backdrop-blur">
                  photo slot
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{m.name}</h3>
              <p className="text-sm font-semibold text-teal-700">{m.role}</p>
              <p className="mt-2 text-sm text-navy-500">{m.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button to="/about" variant="secondary" size="md">
          {team.cta}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  )
}
