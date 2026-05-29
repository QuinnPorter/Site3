import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { LINKS } from '../../i18n/en.js'
import LanguageToggle from './LanguageToggle.jsx'
import Button from '../ui/Button.jsx'

export default function Header() {
  const { t } = useLanguage()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [businessOpen, setBusinessOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setBusinessOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const solid = scrolled || mobileOpen

  const businessLinks = [
    { to: '/business', label: t.nav.bookkeeping },
    { to: '/business-tax', label: t.nav.businessTax },
    { to: '/resources', label: t.nav.resources },
  ]

  const navLink = 'text-sm font-medium text-navy-700 transition-colors hover:text-teal-700'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'border-b border-navy-100 bg-white/90 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        {/* Logo slot — swap /public/logo-placeholder.svg for the real asset */}
        <Link to="/" className="flex items-center gap-2.5" aria-label="JBS Corp home">
          <img src="/logo-placeholder.svg" alt="" className="h-9 w-9 rounded-xl" />
          <span className="font-display text-xl font-bold text-navy-900">
            JBS<span className="text-teal-500">Corp</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          <Link to="/individual-tax" className={navLink}>
            {t.nav.individualTax}
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setBusinessOpen(true)}
            onMouseLeave={() => setBusinessOpen(false)}
          >
            <button type="button" className={`flex items-center gap-1 ${navLink}`} aria-expanded={businessOpen}>
              {t.nav.business}
              <ChevronDown className={`h-4 w-4 transition-transform ${businessOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {businessOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3"
                >
                  <div className="card-surface overflow-hidden p-2">
                    {businessLinks.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-teal-500/10 hover:text-teal-700"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link to="/about" className={navLink}>
            {t.nav.about}
          </Link>
          <Link to="/reviews" className={navLink}>
            {t.nav.reviews}
          </Link>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <Button href={LINKS.portal} variant="secondary" size="sm">
            {t.nav.portal}
          </Button>
          <Button href={LINKS.book} variant="primary" size="sm">
            {t.nav.book}
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden text-navy-900"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? t.nav.close : t.nav.menu}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-navy-100 bg-white lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-5">
              <Link to="/individual-tax" className="rounded-xl px-3 py-3 font-medium text-navy-800 hover:bg-navy-50">
                {t.nav.individualTax}
              </Link>
              <span className="px-3 pt-2 text-xs font-semibold uppercase tracking-widest text-navy-400">
                {t.nav.business}
              </span>
              {businessLinks.map((l) => (
                <Link key={l.to} to={l.to} className="rounded-xl px-5 py-2.5 text-navy-700 hover:bg-navy-50">
                  {l.label}
                </Link>
              ))}
              <Link to="/about" className="rounded-xl px-3 py-3 font-medium text-navy-800 hover:bg-navy-50">
                {t.nav.about}
              </Link>
              <Link to="/reviews" className="rounded-xl px-3 py-3 font-medium text-navy-800 hover:bg-navy-50">
                {t.nav.reviews}
              </Link>
              <div className="mt-4 flex items-center justify-between">
                <LanguageToggle />
                <Button href={LINKS.portal} variant="secondary" size="sm">
                  {t.nav.portal}
                </Button>
              </div>
              <Button href={LINKS.book} variant="primary" size="lg" className="mt-3 w-full">
                {t.nav.book}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
