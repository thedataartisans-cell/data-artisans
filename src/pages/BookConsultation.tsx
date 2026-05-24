import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock, Users, Zap, Shield } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const serviceOptions = [
  'Data Strategy & Consulting',
  'Data Engineering',
  'Business Intelligence & Dashboards',
  'Advanced Analytics & Data Science',
  'AI & Automation Solutions',
  'Data Governance & Security',
  'Not sure yet — need guidance',
]

const companySizes = [
  '1–10 employees',
  '11–50 employees',
  '51–200 employees',
  '201–500 employees',
  '500+ employees',
]

const timelines = [
  'As soon as possible',
  'Within 1 month',
  'Within 3 months',
  'Just exploring for now',
]

const budgets = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Prefer not to say',
]

const benefits = [
  {
    icon: <Clock size={18} color="#2563eb" />,
    bg: 'rgba(37,99,235,0.08)',
    title: '45 Minutes, Focused',
    desc: 'A structured session designed to understand your situation and give you real, actionable guidance.',
  },
  {
    icon: <Users size={18} color="#0891b2" />,
    bg: 'rgba(8,145,178,0.08)',
    title: 'Senior Experts Only',
    desc: 'You will speak directly with a senior data consultant — not a sales rep or account manager.',
  },
  {
    icon: <Zap size={18} color="#d97706" />,
    bg: 'rgba(217,119,6,0.08)',
    title: 'Immediate Value',
    desc: 'You will leave with clarity on your data challenges and a clear sense of the right next steps.',
  },
  {
    icon: <Shield size={18} color="#059669" />,
    bg: 'rgba(5,150,105,0.08)',
    title: 'Zero Pressure',
    desc: 'No sales pitch. No obligation. If we are not the right fit, we will tell you — and point you in the right direction.',
  },
]

const nextSteps = [
  'We review your submission within 24 hours',
  'You receive a calendar invite with a Zoom link',
  'We prepare by reviewing your situation in advance',
  'On the call, we listen first — then advise',
  'You receive a follow-up summary with next steps',
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

export default function BookConsultation() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    companySize: '',
    service: '',
    timeline: '',
    budget: '',
    challenge: '',
    hearAboutUs: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_BOOK,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    setStatus('success')
    setForm({
      name: '', email: '', company: '', role: '',
      companySize: '', service: '', timeline: '',
      budget: '', challenge: '', hearAboutUs: '',
    })
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
        <div style={{ position: 'absolute', top: '-150px', right: '-100px', width: '600px', height: '600px', background: 'radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '700px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}
          >
            <div style={{ width: '28px', height: '1.5px', background: 'var(--accent)', borderRadius: '2px' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>
              Free Consultation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1.25rem' }}
          >
            Book your free{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 600 }}>
              45-minute discovery call.
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, maxWidth: '560px' }}
          >
            Tell us about your data challenges and we will help you find the right path forward.
            No sales pitch — just honest, expert guidance from our senior consultants.
          </motion.p>
        </div>
      </section>

      {/* MAIN GRID */}
      <div className="contact-grid">

        {/* LEFT — Benefits */}
        <div style={{
          padding: 'clamp(2rem, 4vw, 4rem) clamp(1.25rem, 3vw, 2.5rem)',
          borderRight: '1px solid var(--border)',
          background: '#f7f9ff',
        }}>

          {/* Benefits */}
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>
              What You Get
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {benefits.map((b) => (
                <div key={b.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', background: '#fff', border: '1px solid var(--border)', borderRadius: '12px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: b.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {b.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '3px' }}>{b.title}</p>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.6 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>
              What Happens Next
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {nextSteps.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '11px', fontWeight: 700, color: 'var(--accent)' }}>
                    {i + 1}
                  </div>
                  <span style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '14px', padding: '1.5rem' }}>
            <div style={{ color: '#f59e0b', fontSize: '12px', marginBottom: '0.75rem', letterSpacing: '3px' }}>★★★★★</div>
            <p style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.75, fontStyle: 'italic', fontWeight: 300, marginBottom: '1rem' }}>
              "The discovery call alone was worth it. They understood our data challenges better
              than we did and gave us a clear path forward. We signed within a week."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(37,99,235,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 600, color: 'var(--accent)', flexShrink: 0 }}>SM</div>
              <div>
                <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}>Sarah Mitchell</p>
                <p style={{ fontSize: '11px', color: 'var(--muted)' }}>CTO, FinEdge Solutions</p>
              </div>
            </div>
          </div>
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
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.75rem' }}>
                You are booked in!
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '400px', marginBottom: '2rem' }}>
                Thanks for booking a consultation. We will review your submission and send
                you a calendar invite within 24 business hours.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link to="/">
                  <button className="btn-primary" style={{ fontSize: '13px', padding: '10px 20px' }}>
                    Back to Home <ArrowRight size={13} />
                  </button>
                </Link>
                <Link to="/services">
                  <button className="btn-ghost" style={{ fontSize: '13px', padding: '10px 20px' }}>
                    Explore Services
                  </button>
                </Link>
              </div>
            </motion.div>
          ) : (
            <>
              <motion.div variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                  Book Your Call
                </p>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                  Tell us about your situation
                </h2>
                <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
                  The more you share, the more value we can provide on the call.
                </p>
              </motion.div>

              <form ref={formRef} onSubmit={handleSubmit}>

                {/* Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                  <div>
                    <label style={labelStyle}>Work Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                </div>

                {/* Company + Role */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Company Name *</label>
                    <input type="text" name="company" required value={form.company} onChange={handleChange} placeholder="Acme Corp" style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                  <div>
                    <label style={labelStyle}>Your Role *</label>
                    <input type="text" name="role" required value={form.role} onChange={handleChange} placeholder="CTO, Head of Analytics..." style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                </div>

                {/* Company Size + Service */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Company Size</label>
                    <select name="companySize" value={form.companySize} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }} onFocus={onFocus} onBlur={onBlur}>
                      <option value="">Select size</option>
                      {companySizes.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Service Interested In *</label>
                    <select name="service" required value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }} onFocus={onFocus} onBlur={onBlur}>
                      <option value="">Select a service</option>
                      {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                {/* Timeline + Budget */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Project Timeline</label>
                    <select name="timeline" value={form.timeline} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }} onFocus={onFocus} onBlur={onBlur}>
                      <option value="">Select timeline</option>
                      {timelines.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Budget Range</label>
                    <select name="budget" value={form.budget} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }} onFocus={onFocus} onBlur={onBlur}>
                      <option value="">Select budget</option>
                      {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                {/* Challenge */}
                <div style={{ marginBottom: '1rem' }}>
                  <label style={labelStyle}>What is your biggest data challenge right now? *</label>
                  <textarea
                    name="challenge" required rows={4}
                    value={form.challenge} onChange={handleChange}
                    placeholder="Describe your current situation, pain points, and what you are hoping to achieve. The more detail, the better we can prepare for your call."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={onFocus} onBlur={onBlur}
                  />
                </div>

                {/* How did you hear */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={labelStyle}>How did you hear about us?</label>
                  <input type="text" name="hearAboutUs" value={form.hearAboutUs} onChange={handleChange} placeholder="Google, LinkedIn, referral..." style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                </div>

                {status === 'error' && (
                  <div style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', marginBottom: '1rem', fontSize: '13px', color: '#dc2626' }}>
                    Something went wrong. Please try again or email us at hello@thedataartisans.com
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary"
                  style={{ width: '100%', padding: '13px', fontSize: '15px', fontWeight: 600, justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
                >
                  {status === 'sending' ? 'Submitting...' : (
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      Book My Free Consultation <ArrowRight size={15} />
                    </span>
                  )}
                </button>

                <p style={{ fontSize: '12px', color: 'var(--muted)', textAlign: 'center', marginTop: '0.75rem' }}>
                  We will never share your information. You will hear from us within 24 business hours.
                </p>
              </form>
            </>
          )}
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div style={{ padding: 'clamp(2rem, 3vw, 3rem) clamp(1.25rem, 4vw, 2.5rem)', background: '#0f1623', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.5rem' }}>
            Prefer to reach out directly?
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2vw, 1.3rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em' }}>
            Email us at hello@thedataartisans.com
          </h3>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link to="/contact">
            <button className="btn-ghost" style={{ fontSize: '14px', padding: '10px 20px', color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.15)' }}>
              Contact Page
            </button>
          </Link>
          <Link to="/services">
            <button className="btn-primary" style={{ fontSize: '14px', padding: '10px 20px' }}>
              View Services <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}