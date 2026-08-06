import { useEffect, useState, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import portraitImg from './assets/hero.png'
import resumePdf from './Huzaifa_Haris_Resume.pdf'
import ContactModal from './components/ContactModal.jsx'
import AdminResponses from './pages/AdminResponses.jsx'

const GithubIcon = ({ size = 24, strokeWidth = 2, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-github ${className}`}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
)

const LinkedinIcon = ({ size = 24, strokeWidth = 2, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-linkedin ${className}`}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const ExternalLinkIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
)

const ShopifyIcon = ({ size = 14, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.34 2.89c-.39-.04-.79.11-1.05.4l-1.7 1.86-1.38-3.28A.96.96 0 0 0 10.25 1a.96.96 0 0 0-.86.7L6.21 7.35 3.41 8.02A.96.96 0 0 0 2.7 9.1l1.54 8.77A.96.96 0 0 0 5.19 18.67h9.81a.96.96 0 0 0 .95-.8l1.54-8.77a.96.96 0 0 0-.62-1.08l-4.15-1.71z"/>
  </svg>
)

function PortfolioPage({ onContact }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const workRef = useRef(null)
  const sliderRef = useRef(null)
  const processRef = useRef(null)
  const techRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      title: 'CarSound',
      category: 'Shopify Store',
      type: 'Shopify',
      year: '2025',
      image: new URL('./project/carsound.webp', import.meta.url).href,
      about: 'High-performance Danish Shopify e-commerce platform specialized in automotive audio systems, amplifiers, custom sound setups & accessories.',
      link: 'https://carsound.dk',
      isShopify: true,
    },
    {
      title: 'Power Culture',
      category: 'Shopify Store',
      type: 'Shopify',
      year: '2024',
      image: new URL('./project/power_culture.webp', import.meta.url).href,
      about: 'Modern Danish Shopify store built for high-energy fitness apparel & brand culture, featuring custom layouts and optimized conversion flow.',
      link: 'https://www.powerculture.dk',
      isShopify: true,
    },
    {
      title: 'BarkDNA',
      category: 'Shopify Store',
      type: 'Shopify',
      year: '2024',
      image: new URL('./project/BarkDNA.webp', import.meta.url).href,
      about: 'High-conversion Shopify e-commerce storefront for canine genetics & health testing, featuring sleek UI components and fast load speeds.',
      link: 'https://barkdna.com',
      isShopify: true,
    },
    {
      title: 'Qonkar',
      category: 'Platform',
      type: 'Platform',
      year: '2024',
      image: new URL('./project/1.qonkar.png', import.meta.url).href,
      logo: new URL('./project/project_logos/qonkar.svg', import.meta.url).href,
      about: 'A comprehensive digital platform revolutionizing local services with an intuitive user experience and robust functionality.',
      link: 'https://qonkar.com',
    },
    {
      title: 'Scholian',
      category: 'Education',
      type: 'EdTech',
      year: '2023',
      image: new URL('./project/2.scholian.png', import.meta.url).href,
      logo: new URL('./project/project_logos/scholian.svg', import.meta.url).href,
      about: 'An innovative ed-tech solution designed to streamline school management and enhance student learning outcomes.',
    },
    {
      title: 'Fayz Soft',
      category: 'Software Solutions',
      type: 'Platform',
      year: '2023',
      image: new URL('./project/3.fayz_soft.png', import.meta.url).href,
      logo: new URL('./project/project_logos/fayz_soft.svg', import.meta.url).href,
      about: 'Custom enterprise software delivering scalable business solutions and operational efficiency.',
    },
    {
      title: 'Vetuk',
      category: 'Veterinary Services',
      type: 'Healthcare',
      year: '2024',
      image: new URL('./project/4.vetuk.png', import.meta.url).href,
      logo: new URL('./project/project_logos/vetuk.svg', import.meta.url).href,
      about: 'A modern healthcare platform tailored for veterinary practices to manage appointments, records, and client communication.',
    },
    {
      title: 'Doctor',
      category: 'Healthcare',
      type: 'Healthcare',
      year: '2024',
      image: new URL('./project/5.Doctor.png', import.meta.url).href,
      logo: new URL('./project/project_logos/doctor.svg', import.meta.url).href,
      about: 'An advanced medical portal enabling seamless doctor-patient interactions, telemedicine, and health tracking.',
    },
    {
      title: 'Sellvixa',
      category: 'E-commerce',
      type: 'Shopify',
      year: '2024',
      image: new URL('./project/6.sellvixa.png', import.meta.url).href,
      logo: new URL('./project/project_logos/sellvixa.svg', import.meta.url).href,
      about: 'A premium e-commerce experience featuring high-performance storefronts, secure payments, and dynamic inventory.',
    }
  ]

  const filteredProjects = projects.filter(p => {
    if (activeCategory === 'Shopify Stores') return p.type === 'Shopify' || p.isShopify
    if (activeCategory === 'Platforms') return p.type === 'Platform'
    if (activeCategory === 'Healthcare & EdTech') return p.type === 'Healthcare' || p.type === 'EdTech'
    return true
  })

  const processes = [
    {
      id: '01',
      title: 'Discovery & Strategy',
      desc: 'Understanding the core problem, defining project goals, and establishing the overall strategic vision.',
    },
    {
      id: '02',
      title: 'Planning & Architecture',
      desc: 'Mapping out user stories, technical stack selection, and laying down a robust scalable architecture.',
    },
    {
      id: '03',
      title: 'UI/UX Design',
      desc: 'Crafting premium, intuitive interfaces and prototyping the user journey for maximum engagement.',
    },
    {
      id: '04',
      title: 'Agile Development',
      desc: 'Iterative sprints of coding, focusing on building high-performance, maintainable, and clean software.',
    },
    {
      id: '05',
      title: 'Testing & QA',
      desc: 'Rigorous quality assurance, automated testing, and performance optimization across all devices.',
    },
    {
      id: '06',
      title: 'Deployment & Iteration',
      desc: 'Smooth production launch followed by continuous monitoring, feedback gathering, and refinement.',
    }
  ]

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -450, behavior: 'smooth' })
  }

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 450, behavior: 'smooth' })
  }

  const scrollToWork = (e) => {
    if (e) e.preventDefault()
    workRef.current?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const scrollToProcess = (e) => {
    if (e) e.preventDefault()
    processRef.current?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const scrollToTech = (e) => {
    if (e) e.preventDefault()
    techRef.current?.scrollIntoView({ behavior: 'smooth' })
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
          <li><a href="#process" onClick={scrollToProcess}>Process</a></li>
          <li><a href="#tech" onClick={scrollToTech}>Technology</a></li>
        </ul>

        <div className="nav-right">
          <button className="nav-cta" onClick={() => { onContact(); setIsMenuOpen(false); }}>Contact</button>
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
          <li><a href="#process" onClick={scrollToProcess}>Process</a></li>
          <li><a href="#tech" onClick={scrollToTech}>Technology</a></li>
          <li><button className="mobile-nav-cta" onClick={() => { onContact(); setIsMenuOpen(false); }}>Contact</button></li>
        </ul>
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
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href={resumePdf}
              download="Huzaifa_Haris_Resume.pdf"
              className="btn-ghost"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1v8M1 5l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
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
              <span className="tag">Shopify Theme Dev</span>
              <span className="tag">Liquid</span>
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
        </div>
      </section>

      {/* WORK SECTION */}
      <section id="work" ref={workRef}>
        <div className="work-header">
          <div className="work-header-left">
            <div className="work-num">(001 — {String(projects.length).padStart(3, '0')})</div>
            <h2 className="work-title">Curated Work</h2>
          </div>

          <div className="work-filter-tabs">
            {['All', 'Shopify Stores', 'Platforms', 'Healthcare & EdTech'].map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
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
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => {
                if (project.link) window.open(project.link, '_blank', 'noopener,noreferrer');
              }}
            >
              <div className="project-img-wrap">
                <img src={project.image} alt={project.title} className="project-main-img" />

                {/* Floating Badges */}
                <div className="project-top-badges">
                  {project.isShopify && (
                    <span className="badge shopify-badge">
                      <ShopifyIcon /> Shopify
                    </span>
                  )}
                  {project.link && (
                    <span className="badge live-badge">
                      <span className="live-dot"></span> {project.isShopify ? 'Live Store' : 'Live Site'}
                    </span>
                  )}
                </div>

                {/* Hover Content Overlay: Name instead of logo + Visited Link */}
                <div className="project-hover-content">
                  <div className="project-hover-header">
                    <span className="project-hover-cat">{project.category}</span>
                    <h3 className="project-hover-title">{project.title}</h3>
                  </div>
                  
                  <p className="project-about">{project.about}</p>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-visited-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>{project.isShopify ? 'Visit Live Store' : 'Visit Live Website'}</span>
                      <ExternalLinkIcon size={16} />
                    </a>
                  ) : (
                    <span className="project-preview-tag">Featured Showcase</span>
                  )}
                </div>
              </div>

              <div className="project-info">
                <div>
                  <div className="project-cat">{project.category}</div>
                  <h3 className="project-name">
                    {project.title}
                    {project.link && <ExternalLinkIcon size={18} className="inline-link-icon" />}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" ref={processRef} className="process-section">
        <div className="process-container">
          <div className="process-sticky">
            <div className="process-num">(Methodology)</div>
            <h2 className="process-title">Process</h2>
            <p className="process-subtitle">A systematic approach to transforming complex problems into elegant, high-performance software solutions.</p>
          </div>

          <div className="process-list">
            {processes.map((proc, index) => (
              <div key={index} className="process-item">
                <div className="process-item-num">{proc.id}</div>
                <div className="process-item-content">
                  <h3 className="process-item-title">{proc.title}</h3>
                  <p className="process-item-desc">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section id="tech" ref={techRef} className="tech-section">
        <div className="tech-header">
          <div className="tech-num">(Stack)</div>
          <h2 className="tech-title">Technology</h2>
        </div>
        <div className="tech-bento">
          <div className="bento-item">
            <div className="bento-content">
              <h3 className="bento-title">Shopify & E-Commerce</h3>
              <p className="bento-desc">Crafting custom Shopify themes, Liquid templating, Storefront API integrations, custom sections, and conversion-focused UX.</p>
            </div>
            <div className="bento-tags">
              <span>Shopify Theme Dev</span>
              <span>Liquid</span>
              <span>Storefront API</span>
              <span>Custom Sections</span>
            </div>
          </div>
          <div className="bento-item">
            <div className="bento-content">
              <h3 className="bento-title">Frontend Engine</h3>
              <p className="bento-desc">Building lightning-fast, interactive user interfaces with modern web standards and deep attention to performance.</p>
            </div>
            <div className="bento-tags">
              <span>React</span>
              <span>Next.js</span>
              <span>TailwindCSS</span>
            </div>
          </div>
          <div className="bento-item">
            <div className="bento-content">
              <h3 className="bento-title">Backend Architecture</h3>
              <p className="bento-desc">Robust, scalable server-side logic and REST/GraphQL APIs.</p>
            </div>
            <div className="bento-tags">
              <span>Django</span>
              <span>Python</span>
              <span>PHP</span>
            </div>
          </div>
          <div className="bento-item">
            <div className="bento-content">
              <h3 className="bento-title">Database Systems</h3>
              <p className="bento-desc">Secure, optimized data models and storage solutions.</p>
            </div>
            <div className="bento-tags">
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>SQLite 3</span>
            </div>
          </div>
          <div className="bento-item">
            <div className="bento-content">
              <h3 className="bento-title">Infrastructure & DevOps</h3>
              <p className="bento-desc">Seamless deployment pipelines, automated testing, containerization, and reliable cloud hosting.</p>
            </div>
            <div className="bento-tags">
              <span>AWS</span>
              <span>Docker</span>
              <span>Vercel</span>
              <span>GitHub Actions</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer-section">
        <div className="footer-top">
          <h2 className="footer-cta-title">Let's build something<br/>extra<br/>ordinary.</h2>
          <div className="footer-contact-info">
            <div className="footer-block">
              <span className="footer-label">Email</span>
              <a href="mailto:huzaifaharis.dev@gmail.com" className="footer-link">
                <Mail size={20} strokeWidth={1.5} />
                huzaifaharis.dev@gmail.com
              </a>
            </div>
            <div className="footer-block">
              <span className="footer-label">Phone</span>
              <a href="tel:03225456517" className="footer-link">
                <Phone size={20} strokeWidth={1.5} />
                0322-5456517
              </a>
            </div>
            <div className="footer-block">
              <span className="footer-label">Socials</span>
              <div className="footer-socials">
                <a href="https://www.linkedin.com/in/huzaifa-haris-aa8281262/" target="_blank" rel="noreferrer" className="footer-link">
                  <LinkedinIcon size={20} strokeWidth={1.5} />
                  LinkedIn
                </a>
                <a href="https://github.com/HuzaifaHaris-Huxi" target="_blank" rel="noreferrer" className="footer-link">
                  <GithubIcon size={20} strokeWidth={1.5} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <a href="#" className="nav-logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="nav-logo-mark">H<sup>2</sup></div>
            <span className="nav-logo-name">Huzaifa Haris</span>
          </a>
          <div className="footer-copy">&copy; {new Date().getFullYear()} All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Routes>
        <Route path="/" element={<PortfolioPage onContact={() => setIsModalOpen(true)} />} />
        <Route path="/lets-build-project-hsquare" element={<AdminResponses />} />
      </Routes>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default App
