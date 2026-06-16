import { useState } from 'react'
import { Play, Film } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import Section, { SectionHeader } from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import seminar from '../../assets/photos/seminar.jpg'
import community from '../../assets/photos/community.jpg'
import gala from '../../assets/photos/gala.jpg'

const VIDEO_SRC = '/media/beyond-the-bottom-line.mp4'

export default function BrandFilm() {
  const { t } = useLanguage()
  const f = t.brandFilm
  const [playing, setPlaying] = useState(false)

  return (
    <Section className="bg-[var(--bg)]">
      <SectionHeader eyebrow={f.eyebrow} title={f.title} subtitle={f.body} />

      <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-[1.6fr_1fr]">
        {/* Brand film — click to play, no bytes load until interaction */}
        <Reveal>
          <div className="group relative aspect-video overflow-hidden rounded-3xl shadow-glow ring-1 ring-navy-900/10">
            {playing ? (
              <video
                src={VIDEO_SRC}
                poster={seminar}
                className="h-full w-full object-cover"
                controls
                autoPlay
                preload="none"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={f.play}
                className="absolute inset-0 h-full w-full"
              >
                <img src={seminar} alt={f.posterAlt} className="h-full w-full object-cover" />
                <span className="absolute inset-0 bg-navy-950/30 transition-colors group-hover:bg-navy-950/20" />
                <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-glow transition-transform group-hover:scale-110">
                  <Play className="h-7 w-7 translate-x-0.5 text-teal-700" fill="currentColor" />
                </span>
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur">
                  <Film className="h-4 w-4" />
                  {f.play}
                </span>
              </button>
            )}
          </div>
        </Reveal>

        {/* Supporting community stills — two even photos that together match the film height */}
        <Reveal delay={0.1} className="h-full min-h-0">
          <div className="grid h-full min-h-0 grid-rows-2 gap-4">
            <div className="relative min-h-0 overflow-hidden rounded-3xl shadow-soft ring-1 ring-navy-900/10">
              <img src={community} alt={f.communityAlt} className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="relative min-h-0 overflow-hidden rounded-3xl shadow-soft ring-1 ring-navy-900/10">
              <img src={gala} alt={f.galaAlt} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
