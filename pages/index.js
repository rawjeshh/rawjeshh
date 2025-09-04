import { useEffect, useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const features = [
    {
      title: 'Track Your Brand Performance',
      desc: 'Understand how your brand is performing in your specific area (State/RTO) with latest retails and trend charts.',
    },
    {
      title: 'Monitor Competitors',
      desc: 'See exactly how your competitors are doing in your preferred area, and spot opportunities to stay ahead.',
    },
  ]
  const [activeFeature, setActiveFeature] = useState(0)

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

  useEffect(() => {
    const id = setInterval(() => {
      setActiveFeature((i) => (i + 1) % features.length)
    }, 4000)
    return () => clearInterval(id)
  }, [features.length])

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

      <main className="hero-section">
        <div className="hero-container">
          <div className="hero-title">
            <h1>
              Understand Your <span className="highlight-text">Automobile Market insights</span> in Minutes @ Just at <span className="price-text">₹500 per month</span>
            </h1>
          </div>
          <div className="hero-content">
            <div className="hero-left">

              <div className="features-slider">
                <div
                  className="slider-viewport"
                  style={{ height: `${120 * 2}px` }}
                  aria-live="polite"
                >
                  <div
                    className="slider-track"
                    style={{ transform: `translateY(${-(activeFeature * 120 - (240 - 120) / 2)}px)` }}
                  >
                    {features.map((f, i) => {
                      const isActive = i === activeFeature
                      const isNext = i === (activeFeature + 1) % features.length
                      const cls = `feature-slide ${isActive ? 'active' : isNext ? 'next' : 'hidden'}`
                      return (
                        <div key={i} className={cls}>
                          <span className={`slide-dot ${isActive ? 'dot-active' : 'dot-hidden'}`} />
                          <div className="feature-content">
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="form-panel">
                <h2>Try Live Now</h2>

                <div className="form-section">
                  <label>Choose Your Automobile Business Type</label>
                  <div className="vehicle-types">
                    <div className="vehicle-option">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/418c81359bc91d293dc7c267856ef75d809fb92d?width=54" alt="2 Wheeler" />
                      <span>2 Wheeler</span>
                    </div>
                    <div className="vehicle-option">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/99dfe6048536a9d298657dd90a94ec5b92f80fa3?width=48" alt="3 Wheeler" />
                      <span>3 Wheeler</span>
                    </div>
                    <div className="vehicle-option">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/ac06624fab37fc6e4be49c0921d8602dd8a18776?width=68" alt="Cars" />
                      <span>Cars</span>
                    </div>
                    <div className="vehicle-option">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/44976abfc01f79a93283aa972662b909f4f04af8?width=42" alt="Trucks & Bus" />
                      <span>Trucks & Bus</span>
                    </div>
                    <div className="vehicle-option">
                      <img src="https://api.builder.io/api/v1/image/assets/TEMP/d604ff819ece6ab8a189e4588ca7cc153062e906?width=44" alt="Tractor" />
                      <span>Tractor</span>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <label>Choose Your Automobile Business Brand</label>
                  <div className="form-input">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#D1D1D1" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke="#D1D1D1" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 15L16 10L5 21" stroke="#D1D1D1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input type="text" placeholder="Start Typing your brand to Select..." />
                  </div>
                </div>

                <div className="form-section">
                  <label>Choose Your State</label>
                  <div className="form-input">
                    <input type="text" placeholder="Select your State" />
                    <svg width="15" height="8" viewBox="0 0 15 8" fill="none">
                      <path d="M7.5 7.5L0.138785 0.75L14.8612 0.750001L7.5 7.5Z" fill="#9CA3AF"/>
                    </svg>
                  </div>
                </div>

                <button className="btn-primary form-btn">Check Insights live Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="automobile-strip">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/b8c1bc7f410fff4efe20d6500fff83445c3ee480?width=2866" alt="Automobile types" />
        </div>
      </main>
    </div>
  )
}
