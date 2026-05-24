import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

const footerServices = [
  { label: 'Data Strategy & Consulting', path: '/services/strategy' },
  { label: 'Data Engineering', path: '/services/engineering' },
  { label: 'Business Intelligence & Dashboards', path: '/services/bi' },
  { label: 'Advanced Analytics & Data Science', path: '/services/analytics' },
  { label: 'AI & Automation Solutions', path: '/services/ai' },
  { label: 'Data Governance & Security', path: '/services/governance' },
]

const company = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
]

const social = [
  { label: 'LinkedIn', path: '#' },
  { label: 'Twitter / X', path: '#' },
  { label: 'GitHub', path: '#' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a0f1a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

      {/* TOP CTA */}
      <div style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 4vw, 2.5rem)',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem',
      }}>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.5rem' }}>
            Ready to get started?
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2vw, 1.6rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
            Let's turn your data into a competitive advantage.
          </h3>
        </div>
        <Link to="/book-consultation">
          <button style={{
            background: '#2563eb', color: '#fff', border: 'none',
            padding: '12px 24px', borderRadius: '100px',
            fontSize: '14px', fontWeight: 500, cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            transition: 'opacity 0.2s', flexShrink: 0, whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Book a Free Consultation <ArrowUpRight size={14} />
          </button>
        </Link>
      </div>

      {/* MAIN FOOTER */}
      <div style={{
        padding: 'clamp(2.5rem, 4vw, 4rem) clamp(1.25rem, 4vw, 2.5rem)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '2.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>

        {/* Brand */}
        <div style={{ gridColumn: 'span 1' }}>
          <Link to="/" style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: '#fff', letterSpacing: '-0.03em', textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>
            The Data <span style={{ color: '#60a5fa' }}>Artisans</span>
          </Link>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, maxWidth: '260px', fontWeight: 300, marginBottom: '1.5rem' }}>
            We help ambitious businesses unlock the full power of their data — from strategy to execution.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="mailto:hello@thedataartisans.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >
              <Mail size={13} /> hello@thedataartisans.com
            </a>
            <a href="tel:+12345678900" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >
              <Phone size={13} /> +1 (234) 567-890
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
              <MapPin size={13} /> New York, NY — Remote Worldwide
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.25rem' }}>Services</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {footerServices.map(s => (
              <Link key={s.path} to={s.path} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s', lineHeight: 1.4 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.25rem' }}>Company</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {company.map(c => (
              <Link key={c.path} to={c.path} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.25rem' }}>Follow Us</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {social.map(s => (
              <a key={s.label} href={s.path} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                {s.label} <ArrowUpRight size={11} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{
        padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1.25rem, 4vw, 2.5rem)',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
      }}>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
          © {new Date().getFullYear()} The Data Artisans. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
            <a key={item} href="#" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

    </footer>
  )
}