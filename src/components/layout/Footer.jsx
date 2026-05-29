import { Link } from 'react-router-dom'
import { Linkedin, Facebook, Instagram, MapPin, Mic, Calendar } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { LINKS } from '../../i18n/en.js'
import LanguageToggle from './LanguageToggle.jsx'

export default function Footer() {
  const { t } = useLanguage()

  const services = [
    { to: '/individual-tax', label: t.nav.individualTax },
    { to: '/business', label: t.nav.bookkeeping },
    { to: '/business-tax', label: t.nav.businessTax },
    { to: '/resources', label: t.nav.resources },
  ]
  const company = [
    { to: '/about', label: t.nav.about },
    { to: '/reviews', label: t.nav.reviews },
    { to: '/careers', label: t.nav.careers },
    { to: '/articles', label: t.nav.articles },
    { to: '/contact', label: t.nav.contact },
  ]
  const socials = [
    { href: LINKS.linkedin, label: 'LinkedIn', Icon: Linkedin },
    { href: LINKS.facebook, label: 'Facebook', Icon: Facebook },
    { href: LINKS.instagram, label: 'Instagram', Icon: Instagram },
  ]
  const external = [
    { href: LINKS.podcast, label: 'Podcast', Icon: Mic },
    { href: LINKS.events, label: 'Events', Icon: Calendar },
  ]

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5">
          {/* Logo slot — swap for the real asset */}
          <div className="flex items-center gap-2.5">
            <img src="/logo-placeholder.svg" alt="" className="h-9 w-9 rounded-xl" />
            <span className="font-display text-xl font-bold text-white">
              JBS<span className="text-teal-400">Corp</span>
            </span>
          </div>
          <p className="max-w-xs text-sm text-navy-200">{t.footer.tagline}</p>
          <p className="flex items-start gap-2 text-sm text-navy-300">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
            {t.footer.offices}
          </p>
          <LanguageToggle light />
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-400">
            {t.footer.servicesTitle}
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            {services.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-navy-200 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-400">
            {t.footer.companyTitle}
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            {company.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-navy-200 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-400">
            {t.footer.connectTitle}
          </h3>
          <div className="mb-5 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-teal-500"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <ul className="flex flex-col gap-3 text-sm">
            {external.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-navy-200 transition-colors hover:text-white"
                >
                  <Icon className="h-4 w-4 text-teal-400" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-300 sm:flex-row">
          <p>
            © {new Date().getFullYear()} JBS Corp. {t.footer.rights}
          </p>
          <Link to="/privacy" className="transition-colors hover:text-white">
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  )
}
