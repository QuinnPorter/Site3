import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import Section, { SectionHeader } from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'
import teamGroup from '../../assets/photos/team-group.jpg'

export default function TeamPreview() {
  const { t } = useLanguage()
  const team = t.team

  return (
    <Section>
      <SectionHeader eyebrow={team.eyebrow} title={team.title} subtitle={team.subtitle} />

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Full-team group photo */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-navy-900/10">
            <img
              src={teamGroup}
              alt={team.photoAlt}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Names + roles */}
        <Reveal delay={0.1}>
          <ul className="divide-y divide-navy-100">
            {team.members.map((m) => (
              <li key={m.name} className="flex items-baseline justify-between gap-4 py-3.5">
                <span className="font-display text-lg font-bold text-navy-900">{m.name}</span>
                <span className="shrink-0 text-sm font-semibold text-teal-700">{m.role}</span>
              </li>
            ))}
          </ul>
        </Reveal>
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
