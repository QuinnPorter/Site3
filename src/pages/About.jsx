import { useEffect } from 'react'
import { ArrowUpRight, ArrowRight, Heart, ShieldCheck, HeartHandshake } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { LINKS } from '../i18n/en.js'
import Section, { SectionHeader } from '../components/ui/Section.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import StatsBand from '../components/home/StatsBand.jsx'
import FinalCTA from '../components/home/FinalCTA.jsx'
import teamLeaders from '../assets/photos/team-leaders.jpg'
import teamGroup from '../assets/photos/team-group.jpg'

const VALUE_ICONS = [Heart, ShieldCheck, HeartHandshake]

export default function About() {
  const { t } = useLanguage()
  const a = t.aboutPage

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      {/* Header */}
      <section className="relative overflow-hidden bg-[var(--bg)] pb-16 pt-36 text-navy-900">
        <div className="mesh-bg absolute inset-0 opacity-70" />
        <div className="container-x relative">
          <Reveal>
            <span className="eyebrow">{a.eyebrow}</span>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">{a.title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-navy-600">{a.subtitle}</p>
          </Reveal>
        </div>
      </section>

      {/* Story overview + leaders photo */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">{a.overview.eyebrow}</span>
            <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">{a.overview.title}</h2>
            {a.overview.body.map((p, i) => (
              <p key={i} className="mt-4 text-lg text-navy-600">
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={LINKS.book} variant="primary" size="lg">
                {t.nav.book}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                {t.nav.contact}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl shadow-glow ring-1 ring-navy-900/10">
              <img
                src={teamLeaders}
                alt={a.overview.photoAlt}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission & values */}
      <Section className="bg-white">
        <SectionHeader eyebrow={a.values.eyebrow} title={a.values.title} />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {a.values.items.map((v, i) => {
            const Icon = VALUE_ICONS[i] || Heart
            return (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card-surface h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-navy-600">{v.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Leadership — group photo + bios */}
      <Section>
        <SectionHeader
          eyebrow={a.leadership.eyebrow}
          title={a.leadership.title}
          subtitle={a.leadership.subtitle}
        />
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-navy-900/10">
              <img
                src={teamGroup}
                alt={a.leadership.photoAlt}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="divide-y divide-navy-100">
              {a.leadership.leaders.map((m) => (
                <li key={m.name} className="py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-lg font-bold text-navy-900">{m.name}</span>
                    <span className="shrink-0 text-sm font-semibold text-teal-700">{m.role}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-navy-500">{m.bio}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <StatsBand />
      <FinalCTA />
    </main>
  )
}
