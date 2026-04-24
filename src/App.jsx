import { useEffect, useState, useRef } from 'react'
import portraitImg from './assets/hero.png'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const workRef = useRef(null)
  const sliderRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: 'Qonkar',
      category: 'Platform',
      year: '2024',
      image: new URL('./project/1.qonkar.png', import.meta.url).href,
      logo: new URL('./project/project_logos/qonkar.svg', import.meta.url).href,
      about: 'A comprehensive digital platform revolutionizing local services with an intuitive user experience and robust functionality.',
    },
    {
      title: 'Scholian',
      category: 'Education',
      year: '2023',
      image: new URL('./project/2.scholian.png', import.meta.url).href,
      logo: new URL('./project/project_logos/scholian.svg', import.meta.url).href,
      about: 'An innovative ed-tech solution designed to streamline school management and enhance student learning outcomes.',
    },
    {
      title: 'Fayz Soft',
      category: 'Software Solutions',
      year: '2023',
      image: new URL('./project/3.fayz_soft.png', import.meta.url).href,
      logo: new URL('./project/project_logos/fayz_soft.svg', import.meta.url).href,
      about: 'Custom enterprise software delivering scalable business solutions and operational efficiency.',
    },
    {
      title: 'Vetuk',
      category: 'Veterinary Services',
      year: '2024',
      image: new URL('./project/4.vetuk.png', import.meta.url).href,
      logo: new URL('./project/project_logos/vetuk.svg', import.meta.url).href,
      about: 'A modern healthcare platform tailored for veterinary practices to manage appointments, records, and client communication.',
    },
    {
      title: 'Doctor',
      category: 'Healthcare',
      year: '2024',
      image: new URL('./project/5.Doctor.png', import.meta.url).href,
      logo: new URL('./project/project_logos/doctor.svg', import.meta.url).href,
      about: 'An advanced medical portal enabling seamless doctor-patient interactions, telemedicine, and health tracking.',
    },
    {
      title: 'Sellvixa',
      category: 'E-commerce',
      year: '2024',
      image: new URL('./project/6.sellvixa.png', import.meta.url).href,
      logo: new URL('./project/project_logos/sellvixa.svg', import.meta.url).href,
      about: 'A premium e-commerce experience featuring high-performance storefronts, secure payments, and dynamic inventory.',
    }
  ]

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -400, behavior: 'smooth' })
  }

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 400, behavior: 'smooth' })
  }

  const scrollToWork = (e) => {
    if (e) e.preventDefault()
    workRef.current?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="bg-[#0a0a0a]">
      {/* NAVBAR */}
      <nav className={isMenuOpen ? 'menu-active' : ''}>
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

        <div className="nav-right">
          <a href="#" className="nav-cta">Contact</a>
          <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#work" onClick={scrollToWork}>Work</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>Process</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>Technology</a></li>
          <li><a href="#" className="mobile-nav-cta" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>

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
              <div className="stat-num">1.5+</div>
              <div className="stat-label">Years exp.</div>
            </div>
            <div className="stat">
              <div className="stat-num">10+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-num">7+</div>
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
            <div className="work-num">(001 — 006)</div>
            <h2 className="work-title">Curated Work</h2>
          </div>
          <div className="work-nav-buttons">
            <button className="slider-btn" onClick={scrollLeft} aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="slider-btn" onClick={scrollRight} aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="project-grid" ref={sliderRef}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-img-wrap">
                <img src={project.image} alt={project.title} className="project-main-img" />
                <div className="project-hover-content">
                  <img src={project.logo} alt={`${project.title} logo`} className="project-logo" />
                  <p className="project-about">{project.about}</p>
                </div>
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
