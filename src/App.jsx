import React, { useState, useEffect } from 'react'
import { NAV, TopBar, Header, Footer } from './components'
import { HomePage, ServicesPage, ContactPage } from './pages'

const LEGACY_ALIASES = {
  expertises: 'services', conseil: 'services', ingenierie: 'services',
  maintenance: 'services', travaux: 'services', gestion: 'services',
  logiciels: 'services', projets: 'services',
}

function parseHash() {
  const raw = (window.location.hash || '').replace(/^#\/?/, '')
  if (!raw) return { page: 'home' }
  let page = raw.split('?')[0]
  if (LEGACY_ALIASES[page]) page = LEGACY_ALIASES[page]
  if (!NAV.some(n => n.id === page)) page = 'home'
  return { page }
}

export default function App() {
  const [{ page }, setRoute] = useState(() => parseHash())

  useEffect(() => {
    function fromHash() { setRoute(parseHash()) }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [])

  function navigate(id) {
    let target = LEGACY_ALIASES[id] || id
    const hash = `#/${target}`
    if (window.location.hash !== hash) {
      window.location.hash = hash
    } else {
      setRoute({ page: target })
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }

  let Content
  switch (page) {
    case 'home':     Content = <HomePage onNavigate={navigate} />; break
    case 'services': Content = <ServicesPage onNavigate={navigate} />; break
    case 'contact':  Content = <ContactPage onNavigate={navigate} />; break
    default:         Content = <HomePage onNavigate={navigate} />
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header current={page} onNavigate={navigate} />
      <main className="flex-1">{Content}</main>
      <Footer onNavigate={navigate} />
    </div>
  )
}
