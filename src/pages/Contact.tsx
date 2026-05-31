import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

function Reveal({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={style}>
      {children}
    </motion.div>
  )
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const serviceOptions = [
  'Data Strategy & Consulting',
  'Data Engineering',
  'Business Intelligence & Dashboards',
  'Advanced Analytics & Data Science',
  'AI & Automation Solutions',
  'Data Governance & Security',
  'Not sure yet',
]

const budgetOptions = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Prefer not to say',
]

const expectations = [
  'We respond within 24 business hours',
  'A free 45-min discovery call',
  'A clear proposal with scope and pricing',
  'No pressure, no hard sell',
]

const quickFaqs = [
  { q: 'How quickly will you respond?', a: 'We respond to all enquiries within 24 business hours. For urgent projects, call us directly.' },
  { q: 'What happens after I submit this form?', a: 'One of our team members will reach out to schedule a free 45-minute discovery call.' },
  { q: 'Do you work with international clients?', a: 'Yes — we work with clients across 12 countries. All engagements can be fully remote.' },
  { q: 'Is the discovery call really free?', a: 'Absolutely. No strings attached. We use it to understand your situation and see if we are a good fit.' },
]

const contactDetails = [
  { label: 'Email Us', value: 'thedataartisans@gmail.com', href: 'mailto:thedataartisans@gmail.com', icon: <Mail size={18} color="#2563eb" />, bg: 'rgba(37,99,235,0.08)' },
  { label: 'Call Us', value: '+1 (234) 567-890', href: 'tel:+12345678900', icon: <Phone size={18} color="#0891b2" />, bg: 'rgba(8,145,178,0.08)' },
  { label: 'Location', value: 'New York, NY — Remote Worldwide', href: '#', icon: <MapPin size={18} color="#7c3aed" />, bg: 'rgba(124,58,237,0.08)' },
  { label: 'Response Time', value: 'Within 24 business hours', href: '#', icon: <Clock size={18} color="#059669" />, bg: 'rgba(5,150,105,0.08)' },
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '11px 14px',
  background: '#fff',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  fontSize: '14px',
  color: 'var(--text)',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '12px',
  fontWeight: 500,
  color: 'var(--text)',
  marginBottom: '6px',
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState({
    name: '', email: '', company: '', service: '', budget: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--accent)'
  }

  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--border)'
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!formRef.current) return
  setStatus('sending')
  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    setStatus('success')
    setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' })
  } catch {
    setStatus('error')
  }
}

  return (
    <div style={{ background: '#fff', paddingTop: '64px' }}>

      {/* HERO */}
      <section style={{
        padding: 'clamp(3rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem) clamp(2rem, 3vw, 3rem)',
        borderBottom: '1px solid var(--border)',
        background: 'linear-gradient(180deg, #f7f9ff 0%, #fff 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-150px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '500px', background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '640px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}
          >
            <div style={{ width: '28px', height: '1.5px', background: 'var(--accent)', borderRadius: '2px' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>Get In Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1.25rem' }}
          >
            {"Let's talk about your "}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 600 }}>data challenges.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300 }}
          >
            Whether you have a specific project in mind or just want to explore how data
            could help your business — we would love to hear from you. Fill out the form
            and we will be in touch within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* MAIN GRID */}
      <div className="contact-grid">

        {/* LEFT */}
        <div style={{ padding: 'clamp(2rem, 4vw, 4rem) clamp(1.25rem, 3vw, 2.5rem)', borderRight: '1px solid var(--border)', background: '#f7f9ff' }}>
          <Reveal>
            {/* Contact Details */}
            <motion.div variants={fadeUp} style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.75rem' }}>Contact Details</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {contactDetails.map((item) => (
                  <a key={item.label} href={item.href} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                      e.currentTarget.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', color: 'var(--muted)', marginBottom: '2px' }}>{item.label}</p>
                      <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* What to Expect */}
            <motion.div variants={fadeUp} style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>What to Expect</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {expectations.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={15} color="var(--accent)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: 'var(--muted)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick FAQs */}
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>Quick Answers</p>
              <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', background: '#fff' }}>
                {quickFaqs.map((faq, i) => (
                  <div key={i} style={{ padding: '1rem 1.25rem', borderBottom: i < quickFaqs.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{faq.q}</p>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.65 }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* RIGHT — Form */}
        <div style={{ padding: 'clamp(2rem, 4vw, 4rem) clamp(1.25rem, 3vw, 3rem)' }}>
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'clamp(2rem, 5vw, 4rem)' }}
            >
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(5,150,105,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <CheckCircle2 size={32} color="#059669" />
              </div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.75rem' }}>Message sent!</h2>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '360px', marginBottom: '2rem' }}>
                Thanks for reaching out. One of our team members will be in touch within 24 business hours.
              </p>
              <button onClick={() => setStatus('idle')} className="btn-ghost" style={{ fontSize: '13px', padding: '9px 18px' }}>
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <Reveal>
              <motion.div variants={fadeUp} style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>Send Us a Message</p>
                <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.9rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1.2 }}>Tell us about your project</h2>
              </motion.div>

              <form ref={formRef} onSubmit={handleSubmit}>
                <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                  <div>
                    <label style={labelStyle}>Work Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} style={{ marginBottom: '1rem' }}>
                  <label style={labelStyle}>Company Name</label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp" style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                </motion.div>

                <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Service Interested In</label>
                    <select name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }} onFocus={onFocus} onBlur={onBlur}>
                      <option value="">Select a service</option>
                      {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Budget Range</label>
                    <select name="budget" value={form.budget} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }} onFocus={onFocus} onBlur={onBlur}>
                      <option value="">Select budget</option>
                      {budgetOptions.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
                  <label style={labelStyle}>Tell Us About Your Project *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Describe your data challenges, goals, and what you are hoping to achieve..." style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }} onFocus={onFocus} onBlur={onBlur} />
                </motion.div>

                {status === 'error' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', marginBottom: '1rem', fontSize: '13px', color: '#dc2626' }}>
                    Something went wrong. Please try again or email us at thedataartisans@gmail.com
                  </motion.div>
                )}

                <motion.div variants={fadeUp}>
                  <button type="submit" disabled={status === 'sending'} className="btn-primary" style={{ width: '100%', padding: '13px', fontSize: '15px', fontWeight: 600, justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}>
                    {status === 'sending' ? 'Sending...' : (
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        Send Message <ArrowRight size={15} />
                      </span>
                    )}
                  </button>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', textAlign: 'center', marginTop: '0.75rem' }}>
                    We will never share your information with third parties.
                  </p>
                </motion.div>
              </form>
            </Reveal>
          )}
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div style={{ padding: 'clamp(2rem, 3vw, 3rem) clamp(1.25rem, 4vw, 2.5rem)', background: '#0f1623', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.5rem' }}>Prefer to browse first?</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2vw, 1.4rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em' }}>
            Explore our services and pricing before reaching out.
          </h3>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="/services">
            <button className="btn-ghost" style={{ fontSize: '14px', padding: '11px 22px', color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.15)' }}>
              View Services
            </button>
          </a>
          <a href="/pricing">
            <button className="btn-primary" style={{ fontSize: '14px', padding: '11px 22px' }}>
              See Pricing <ArrowRight size={14} />
            </button>
          </a>
        </div>
      </div>

    </div>
  )
}