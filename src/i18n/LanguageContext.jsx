import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import en from './en.js'
import es from './es.js'

const dictionaries = { en, es }
const STORAGE_KEY = 'jbs-lang'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'es') return saved
    return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((prev) => (prev === 'en' ? 'es' : 'en')),
      t: dictionaries[lang],
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
