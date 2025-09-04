import { useEffect, useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [menuOpen])

  return (
    <div>
      <header className={`navbar ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d68075eff96e920583c8a647086b4aadf05be6fb?width=532"
              alt="Market Insights"
              className="logo-image"
            />
          </div>

          {/* Desktop navigation */}
          <nav className="navbar-nav" id="site-navigation">
            <a href="#" className="nav-link">Features</a>
            <a href="#" className="nav-link">Pricing</a>
            <a href="#" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>

          <div className="navbar-actions">
            <button className="btn-primary">Start 14-Days Free Trial</button>
            <button className="btn-secondary">Log-in</button>
          </div>

          {/* Mobile trigger */}
          <button
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-controls="mobile-sheet"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="menu-bar" />
          </button>
        </div>

        {/* Backdrop and Mobile/Tablet full-screen sheet */}
        <div className="sheet-backdrop" onClick={() => setMenuOpen(false)} />
        <div id="mobile-sheet" className="mobile-sheet" role="dialog" aria-modal="true">
          <div className="sheet-header">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d68075eff96e920583c8a647086b4aadf05be6fb?width=532"
              alt="Market Insights"
              className="logo-image"
            />
            <button
              className="close-toggle"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
            >
              <span className="close-bar" />
            </button>
          </div>
          <div className="sheet-content">
            <nav className="sheet-nav">
              <a href="#" className="sheet-link" onClick={() => setMenuOpen(false)}>Features</a>
              <a href="#" className="sheet-link" onClick={() => setMenuOpen(false)}>Pricing</a>
              <a href="#" className="sheet-link" onClick={() => setMenuOpen(false)}>Blog</a>
              <a href="#" className="sheet-link" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
            <div className="sheet-actions">
              <button className="btn-primary" onClick={() => setMenuOpen(false)}>Start 14-Days Free Trial</button>
              <button className="btn-secondary" onClick={() => setMenuOpen(false)}>Log-in</button>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="content-container">
          <h1>Welcome to Market Insights</h1>
          <p>Your navigation bar is now ready!</p>
        </div>
      </main>
    </div>
  )
}
