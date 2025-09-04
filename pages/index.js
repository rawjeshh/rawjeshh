import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

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

          <button
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-controls="site-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="menu-bar" />
          </button>
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
