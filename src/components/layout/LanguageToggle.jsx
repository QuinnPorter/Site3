import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function LanguageToggle({ className = '', light = false }) {
  const { lang, setLang } = useLanguage()
  const opts = [
    { id: 'en', label: 'EN' },
    { id: 'es', label: 'ES' },
  ]
  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center rounded-full p-1 ${
        light ? 'bg-white/15 backdrop-blur' : 'bg-navy-50 ring-1 ring-navy-100'
      } ${className}`}
    >
      {opts.map((o) => {
        const active = lang === o.id
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(o.id)}
            className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${
              active
                ? 'bg-teal-500 text-white shadow'
                : light
                  ? 'text-white/80 hover:text-white'
                  : 'text-navy-500 hover:text-navy-900'
            }`}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}
