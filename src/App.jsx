import { useEffect, useState, useRef } from 'react'
import heroImg from './assets/hero.png'
import textInsiderImg from './assets/text_insider.png'
import projectSolaris from './assets/project_solaris.png'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)
  const workRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
    const handleResize = () => setWindowWidth(window.innerWidth)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isMobile = windowWidth < 1024
  const heroText = isMobile ? 'HUXI' : 'HUZAIFA HARIS'
  const yShift = isMobile ? -80 : -128

  const navLinks = [
    { name: 'About', href: '#' },
    { name: 'Work', href: '#work', isSection: true },
    { name: 'Process', href: '#' },
    { name: 'Technology', href: '#' },
  ]

  const projects = [
    {
      title: 'Solaris AI',
      category: 'Generative Intelligence',
      year: '2024',
      image: projectSolaris,
    },
    {
      title: 'Nexus Commerce',
      category: 'High-End Fashion',
      year: '2023',
      image: projectSolaris, 
    },
    {
      title: 'Echo Systems',
      category: 'Architectural Data',
      year: '2024',
      image: projectSolaris,
    }
  ]

  const scrollToWork = () => {
    workRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen bg-black selection:bg-white selection:text-black scroll-smooth">
      {/* Film Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation Layer with Glass Effect */}
      <nav className={`fixed top-0 left-0 right-0 z-[110] flex justify-between items-center px-6 md:px-10 py-2 lg:py-4 transition-all duration-500 
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${isScrolled ? 'bg-black/40 backdrop-blur-xl border-b border-white/5 py-3 lg:py-4' : 'bg-transparent'}`}>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform" />
          </div>
          <div className="nav-text text-sm md:text-base">Huzaifa Haris</div>
        </div>

        <div className="hidden lg:flex gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-text hover:opacity-50 transition-opacity"
              onClick={(e) => {
                if(link.isSection) {
                  e.preventDefault()
                  scrollToWork()
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden sm:block btn-contact">
            Contact
          </a>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden flex flex-col gap-1.5 z-[120]">
            <div className={`w-6 h-0.5 bg-white transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-500 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden mobile-menu-overlay ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="text-4xl font-black uppercase tracking-widest text-white hover:text-white/50 transition-colors" onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}
        <a href="#" className="mt-8 px-12 py-4 border-2 border-white text-sm font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all" onClick={() => setIsMenuOpen(false)}>
          Contact
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-20 py-20 bg-black">
        
        {/* Background is pure black now to ensure zero differentiation */}

        <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 z-10">
          
          {/* Left Block: Name & Introduction */}
          <div className={`flex flex-col gap-1 lg:gap-2 order-2 lg:order-1 lg:w-1/3 transition-all duration-1000 delay-300 
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
            absolute lg:relative left-6 top-[44%] lg:top-0 -translate-y-1/2 lg:translate-y-0 z-20`}>
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-6 lg:w-8 h-[1px] bg-white/20" />
              <span className="nav-text text-white/40 lowercase tracking-widest font-light text-[8px] lg:text-[10px]">Hello, I'm</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter">
              Huzaifa<br />Haris
            </h1>
          </div>

          {/* Center: The Subject (Portrait) */}
          <div className={`relative z-0 order-1 lg:order-2 lg:w-1/2 flex justify-center transition-all duration-[2500ms] ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
            <img 
              src={heroImg} 
              alt="Portrait" 
              className="h-[50vh] md:h-[78vh] w-auto object-contain portrait-matte relative z-0"
            />
          </div>

          {/* Right/Bottom Block: Professional Title (Skills) */}
          <div className={`flex flex-col items-center lg:items-end gap-1 lg:gap-2 order-3 lg:w-1/3 transition-all duration-1000 delay-500 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            lg:relative z-20`}>
            <span className="nav-text text-white/40 lowercase tracking-widest text-center lg:text-right lg:mr-2 font-light text-[8px] lg:text-[10px]">Lead</span>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white text-center lg:text-right leading-[0.9] tracking-tighter">
              Software<br />
              <span className="text-white/20">Engineer</span><br />
              & Gen AI
            </h2>
          </div>

        </div>

        {/* Vertical Socials (Bottom Left) */}
        <div className={`absolute bottom-10 left-10 hidden md:flex flex-col gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {['github', 'linkedin', 'twitter', 'behance'].map((social) => (
            <a key={social} href="#" className="nav-text text-[8px] vertical-text hover:text-white transition-all duration-300 opacity-20 hover:opacity-100 hover:translate-x-1">
              {social}
            </a>
          ))}
        </div>

        {/* Scroll Indicator (Bottom Center) */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-1000 delay-1000 ${isVisible ? 'opacity-40' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={scrollToWork}>
            <div className="w-px h-12 bg-white/40" />
            <span className="nav-text text-[8px] mt-2">Scroll</span>
          </div>
        </div>

        {/* Resume / CTA (Bottom Right) */}
        <div className={`absolute bottom-10 right-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a href="#" className="nav-text text-[10px] flex items-center gap-2 group">
            <span className="opacity-40 group-hover:opacity-100 transition-opacity underline decoration-white/20 underline-offset-8">RESUME</span>
            <div className="w-2 h-2 bg-white rounded-full scale-50 group-hover:scale-100 transition-transform" />
          </a>
        </div>
      </section>

      {/* Work Section (Horizontal Gallery) */}
      <section id="work" ref={workRef} className="relative min-h-screen bg-black z-40 py-32 flex flex-col justify-center">
        <div className="px-10 mb-12 flex justify-between items-end">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white">Curated<br/>Work</h2>
          <div className="nav-text opacity-40 mb-2">(001 — 003)</div>
        </div>

        <div className="flex overflow-x-auto gap-8 px-10 no-scrollbar scroll-snap-x pb-20">
          {projects.map((project, index) => (
            <div key={index} className="flex-none w-[85vw] md:w-[60vw] group cursor-pointer scroll-snap-align-center">
              <div className="relative aspect-[16/10] overflow-hidden bg-white/5 portrait-matte rounded-sm transition-transform duration-700 group-hover:scale-[0.98]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="mt-8 flex justify-between items-end">
                <div>
                  <div className="nav-text text-[10px] opacity-40 mb-2">{project.category}</div>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                </div>
                <div className="nav-text opacity-40">{project.year}</div>
              </div>
            </div>
          ))}
          
          {/* Spacer for empty space at the end */}
          <div className="flex-none w-10 md:w-20" />
        </div>
      </section>

      {/* Footer Section Placeholder */}
      <section className="h-screen bg-black flex items-center justify-center px-10">
         <div className="text-center">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white/10 hover:text-white transition-colors duration-1000 cursor-default">
              Available for new projects 2024
            </h2>
         </div>
      </section>
    </div>
  )
}

export default App
