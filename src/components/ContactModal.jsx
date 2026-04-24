import { useState, useEffect, useRef } from 'react'
import { X, Send, CheckCircle2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

// ── EmailJS Config ──────────────────────────────────────────
// Get these from https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID  = 'service_w9jri7t'
const EMAILJS_TEMPLATE_ID = 'template_aj80bhw'
const EMAILJS_PUBLIC_KEY  = 'lHd_L0TmN4Upsfpcb'
// ────────────────────────────────────────────────────────────

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const overlayRef = useRef(null)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      // Reset form when closed
      setTimeout(() => {
        setForm({ name: '', email: '', phone: '', message: '' })
        setErrors({})
        setStatus('idle')
      }, 400)
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email.'
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name.trim(),
          from_email:   form.email.trim(),
          phone:        form.phone.trim() || 'Not provided',
          message:      form.message.trim(),
          to_email:     'huzaifaharis.dev@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setTimeout(() => { onClose() }, 2800)
    } catch {
      setStatus('error')
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div
      ref={overlayRef}
      className={`modal-backdrop ${isOpen ? 'modal-open' : ''}`}
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
      aria-label="Contact form"
    >
      <div className={`modal-panel ${isOpen ? 'modal-panel-visible' : ''}`}>

        {/* Header */}
        <div className="modal-header">
          <div>
            <p className="modal-eyebrow">Get in touch</p>
            <h2 className="modal-title">Let's build something.</h2>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Success State */}
        {status === 'success' ? (
          <div className="modal-success">
            <div className="modal-success-icon">
              <CheckCircle2 size={40} strokeWidth={1.5} />
            </div>
            <h3 className="modal-success-title">Message received!</h3>
            <p className="modal-success-sub">I'll get back to you as soon as possible. Closing shortly…</p>
            <p className="modal-success-spam">
              Didn't receive a confirmation? Check your <strong>spam folder</strong>.
            </p>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit} noValidate>

            {/* Name + Email row */}
            <div className="modal-row">
              <div className="modal-field">
                <label htmlFor="contact-name" className="modal-label">
                  Name <span className="modal-required">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className={`modal-input ${errors.name ? 'modal-input-error' : ''}`}
                  placeholder="Huzaifa Haris"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
                {errors.name && <span className="modal-error-msg">{errors.name}</span>}
              </div>

              <div className="modal-field">
                <label htmlFor="contact-email" className="modal-label">
                  Email <span className="modal-required">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className={`modal-input ${errors.email ? 'modal-input-error' : ''}`}
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                {errors.email && <span className="modal-error-msg">{errors.email}</span>}
              </div>
            </div>

            {/* Phone */}
            <div className="modal-field">
              <label htmlFor="contact-phone" className="modal-label">
                Phone <span className="modal-optional">(optional)</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                className="modal-input"
                placeholder="+92 300 0000000"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>

            {/* Message */}
            <div className="modal-field">
              <label htmlFor="contact-message" className="modal-label">
                Message <span className="modal-required">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                className={`modal-textarea ${errors.message ? 'modal-input-error' : ''}`}
                placeholder="Tell me about your project, idea, or anything you'd like to discuss…"
                rows={4}
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <span className="modal-error-msg">{errors.message}</span>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="modal-submit"
              disabled={status === 'submitting'}
              style={status === 'submitting' ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
            >
              {status === 'submitting' ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 0.8s linear infinite' }}>
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  <Send size={16} strokeWidth={1.5} />
                  Send Message
                </>
              )}
            </button>

            {status === 'error' && (
              <p style={{ fontSize: '13px', color: '#e06060', textAlign: 'center', marginTop: '4px' }}>
                Something went wrong. Please try again or email me directly.
              </p>
            )}

          </form>
        )}
      </div>
    </div>
  )
}
