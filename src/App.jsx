import { useEffect, useState, useRef } from 'react'
import portraitImg from './assets/hero.png'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const workRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: 'Solaris AI',
      category: 'Generative Intelligence',
      year: '2024',
      image: portraitImg, // Using the new premium portrait as a placeholder for projects too
    },
    {
      title: 'Nexus Commerce',
      category: 'High-End Fashion',
      year: '2023',
      image: portraitImg, 
    },
    {
      title: 'Echo Systems',
      category: 'Architectural Data',
      year: '2024',
      image: portraitImg,
    }
  ]

  const scrollToWork = (e) => {
    e.preventDefault()
    workRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-[#0a0a0a]">
      {/* NAVBAR */}
      <nav>
        <a href="#" className="nav-logo">
          <div className="nav-logo-mark">H<sup>2</sup></div>
          <span className="nav-logo-name">Huzaifa Haris</span>
        </a>

        <ul className="nav-links">
          <li><a href="#">About</a></li>
          <li><a href="#work" onClick={scrollToWork}>Work</a></li>
          <li><a href="#">Process</a></li>
          <li><a href="#">Technology</a></li>
        </ul>

        <a href="#" className="nav-cta">Contact</a>
      </nav>

      {/* SIDE SOCIALS */}
      <div className="side-socials">
        <a href="#">Github</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
        <a href="#">Behance</a>
      </div>

      {/* HERO */}
      <section className="hero">
        {/* LEFT: Name & intro */}
        <div className="hero-left">
          <div className="greeting">
            <span className="greeting-line"></span>
            <span className="greeting-text">Hello, I'm</span>
          </div>

          <h1 className="hero-name">
            <span className="hero-name-second">Huzaifa</span>
            <span className="hero-role-dim">Haris</span>
          </h1>

          <p className="hero-bio">
            I build elegant software at the intersection of
            engineering precision and generative intelligence.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn-primary" onClick={scrollToWork}>
              View Work
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#" className="btn-ghost">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1v8M1 5l4 4 4-4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Download CV
            </a>
          </div>

          <div className="stats-row">
            <div className="stat">
              <div className="stat-num">5+</div>
              <div className="stat-label">Years exp.</div>
            </div>
            <div className="stat">
              <div className="stat-num">30+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-num">12+</div>
              <div className="stat-label">Clients</div>
            </div>
          </div>
        </div>

        {/* RIGHT: Photo + Role */}
        <div className="hero-right">
          <div className="photo-wrap">
            <img src={portraitImg} alt="Huzaifa Haris" />
          </div>

          <div className="hero-right-content">
            <div className="role-badge">
              <div className="role-badge-dot"></div>
              <span className="role-badge-text">Open for Work</span>
            </div>

            <h2 className="hero-role">
              <span className="hero-role-em">Software <span className="hero-role-dim">Engineer</span></span>
            </h2>

            <div className="tags">
              <span className="tag">Fullstack</span>
              <span className="tag">React/Next.js</span>
              <span className="tag">Django</span>
              <span className="tag">Python</span>
              <span className="tag">PHP</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">MySQL</span>

            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="bottom-bar">
          <div className="scroll-indicator">
            <div className="scroll-track">
              <div className="scroll-thumb"></div>
            </div>
            <span>Scroll to explore</span>
          </div>

          <a href="#" className="resume-link">
            <span>View Resume</span>
            <div className="resume-dot"></div>
          </a>
        </div>
      </section>

      {/* WORK SECTION */}
      <section id="work" ref={workRef}>
        <div className="work-header">
          <div>
            <div className="work-num">(001 — 003)</div>
            <h2 className="work-title">Curated Work</h2>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-img-wrap">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <div>
                  <div className="project-cat">{project.category}</div>
                  <h3 className="project-name">{project.title}</h3>
                </div>
                <div className="project-year">{project.year}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <section style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid var(--line)' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 64px)', fontWeight: 800, opacity: 0.1, textTransform: 'uppercase' }}>
          Available for new projects 2024
        </h2>
      </section>
    </div>
  )
}

export default App
