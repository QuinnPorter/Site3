import { useState } from 'react'
import { Palette } from 'lucide-react'

// Prototype-only control: swaps the accent palette by setting data-theme on <html>.
// The accent scale (tailwind teal-*) is CSS-variable-backed, so every accent
// reference re-resolves instantly with no per-component changes.
const THEMES = [
  { id: 'default', label: 'Turquoise', color: '#10b981' },
  { id: 'blue', label: 'Light blue', color: '#0ea5e9' },
  { id: 'purple', label: 'SaaS purple', color: '#8b5cf6' },
]

const STORAGE_KEY = 'jbs-palette'

function applyTheme(id) {
  const root = document.documentElement
  if (id === 'default') root.removeAttribute('data-theme')
  else root.setAttribute('data-theme', id)
  try {
    localStorage.setItem(STORAGE_KEY, id)
  } catch {
    /* ignore unavailable storage */
  }
}

export default function PaletteToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'default')

  const choose = (id) => {
    setTheme(id)
    applyTheme(id)
  }

  return (
    <div
      role="group"
      aria-label="Color palette (prototype)"
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-2.5 rounded-full border border-navy-100 bg-white/90 px-3 py-2 shadow-soft backdrop-blur-md"
    >
      <Palette className="h-4 w-4 text-navy-400" />
      <span className="hidden text-[11px] font-semibold uppercase tracking-widest text-navy-400 sm:inline">Palette</span>
      <div className="flex items-center gap-1.5">
        {THEMES.map((t) => {
          const active = theme === t.id
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => choose(t.id)}
              aria-pressed={active}
              aria-label={`${t.label} palette`}
              title={t.label}
              className={`h-7 w-7 rounded-full transition-transform hover:scale-110 ${
                active ? 'scale-110 ring-2 ring-navy-900 ring-offset-2 ring-offset-white' : 'ring-1 ring-navy-200'
              }`}
              style={{ backgroundColor: t.color }}
            />
          )
        })}
      </div>
    </div>
  )
}
