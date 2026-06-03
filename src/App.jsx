import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import StubPage from './pages/StubPage.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/individual-tax" element={<StubPage pageKey="individualTax" />} />
          <Route path="/business" element={<StubPage pageKey="business" />} />
          <Route path="/business-tax" element={<StubPage pageKey="businessTax" />} />
          <Route path="/about" element={<StubPage pageKey="about" />} />
          <Route path="/reviews" element={<StubPage pageKey="reviews" />} />
          <Route path="/contact" element={<StubPage pageKey="contact" />} />
          <Route path="/careers" element={<StubPage pageKey="careers" />} />
          <Route path="/articles" element={<StubPage pageKey="articles" />} />
          <Route path="/resources" element={<StubPage pageKey="resources" />} />
          <Route path="/financial-assessment" element={<StubPage pageKey="financialAssessment" />} />
          <Route path="/privacy" element={<StubPage pageKey="privacy" />} />
          <Route path="*" element={<StubPage pageKey="notFound" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
