import { useLanguage } from '../i18n/LanguageContext.jsx'
import PageStub from '../components/layout/PageStub.jsx'

export default function StubPage({ pageKey }) {
  const { t } = useLanguage()
  const content = t.pages[pageKey] ?? t.pages.notFound
  return <PageStub content={content} />
}
