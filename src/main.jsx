import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import './index.css'

// Apply a saved accent palette before first paint to avoid a color flash.
try {
  const savedPalette = localStorage.getItem('jbs-palette')
  if (savedPalette && savedPalette !== 'default') {
    document.documentElement.setAttribute('data-theme', savedPalette)
  }
} catch {
  /* ignore unavailable storage */
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
