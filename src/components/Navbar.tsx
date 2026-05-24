import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const services = [
  { title: 'Data Strategy & Consulting', desc: 'Align data initiatives with business goals', path: '/services/strategy', color: '#2563eb' },
  { title: 'Data Engineering', desc: 'Scalable pipelines and data infrastructure', path: '/services/engineering', color: '#0891b2' },
  { title: 'Business Intelligence & Dashboards', desc: 'Interactive reports that drive decisions', path: '/services/bi', color: '#7c3aed' },
  { title: 'Advanced Analytics & Data Science', desc: 'Predictive models and deep insights', path: '/services/analytics', color: '#d97706' },
  { title: 'AI & Automation Solutions', desc: 'Intelligent automation for your workflows', path: '/services/ai', color: '#db2777' },
  { title: 'Data Governance & Security', desc: 'Protect and govern your data assets', path: '/services/governance', color: '#059669' },
]

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    const onResize = () => setIsMobile(window.innerWidth < 1024)
    onScroll()
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [location])

  const isActive = (path: string) => location.pathname === path
  const activeLinkColor = scrolled ? '#fff' : 'var(--accent)'
  const inactiveLinkColor = scrolled ? 'rgba(255,255,255,0.5)' : 'var(--muted)'

  return (
    <>
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'center',
        padding: scrolled ? '10px 1.25rem' : '0',
        transition: 'padding 0.4s ease',
        pointerEvents: 'none',
      }}>
        <nav style={{
          pointerEvents: 'all',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '100%',
          maxWidth: scrolled ? '1000px' : '100%',
          height: scrolled ? '52px' : '64px',
          background: scrolled ? '#0f1623' : 'rgba(255,255,255,0.97)',
          borderRadius: scrolled ? '100px' : '0px',
          padding: scrolled ? '0 8px 0 20px' : '0 1.5rem',
          border: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
          borderBottom: scrolled ? 'none' : '1px solid var(--border)',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.25)' : '0 1px 0 var(--border)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>

          {/* LOGO */}
          <Link to="/" style={{
            fontFamily: 'var(--font-display)',
            fontSize: scrolled ? '15px' : '17px',
            fontWeight: 600,
            color: scrolled ? '#fff' : 'var(--text)',
            letterSpacing: '-0.03em',
            textDecoration: 'none',
            flexShrink: 0,
            transition: 'all 0.4s ease',
          }}>
            The Data{' '}
            <span style={{ color: scrolled ? '#60a5fa' : 'var(--accent)' }}>Artisans</span>
          </Link>

          {/* DESKTOP NAV */}
          {!isMobile && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '2px',
              position: 'absolute', left: '50%', transform: 'translateX(-50%)',
            }}>
              <Link to="/" style={{
                fontSize: '13px', fontWeight: 400, padding: '6px 12px', borderRadius: '100px',
                color: isActive('/') ? activeLinkColor : inactiveLinkColor,
                background: scrolled && isActive('/') ? 'rgba(255,255,255,0.08)' : 'transparent',
                textDecoration: 'none', transition: 'all 0.2s', whiteSpace: 'nowrap',
              }}>Home</Link>

              {/* Services Mega Menu */}
              <div
                style={{ position: 'relative' }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  fontSize: '13px', fontWeight: 400, padding: '6px 12px', borderRadius: '100px',
                  color: location.pathname.startsWith('/services') ? activeLinkColor : inactiveLinkColor,
                  background: scrolled && location.pathname.startsWith('/services') ? 'rgba(255,255,255,0.08)' : 'transparent',
                  border: 'none', cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Services
                  <ChevronDown size={12} style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', opacity: 0.5 }} />
                </button>

                {servicesOpen && (
                  <div style={{
                    position: 'absolute', top: '100%', left: '-20px', right: '-20px',
                    height: '16px', background: 'transparent',
                  }} />
                )}

                {servicesOpen && (
                  <div style={{
                    position: 'absolute', top: 'calc(100% + 12px)', left: '50%',
                    transform: 'translateX(-50%)', width: '560px',
                    background: '#0f1623', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '18px', padding: '1.25rem',
                    boxShadow: '0 24px 64px rgba(0,0,0,0.4)', zIndex: 200,
                  }}>
                    <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '0.75rem', paddingLeft: '4px' }}>
                      Our Services
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                      {services.map(s => (
                        <Link
                          key={s.title} to={s.path}
                          onClick={() => setServicesOpen(false)}
                          style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 12px', borderRadius: '10px', textDecoration: 'none', transition: 'background 0.15s' }}
                          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                        >
                          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: s.color, marginTop: '5px', flexShrink: 0 }} />
                          <div>
                            <p style={{ fontSize: '13px', fontWeight: 500, color: '#fff', marginBottom: '2px' }}>{s.title}</p>
                            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.4 }}>{s.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 4px 0' }}>
                      <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>Not sure where to start?</span>
                      <Link to="/book-consultation" onClick={() => setServicesOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#60a5fa', fontWeight: 500, textDecoration: 'none' }}>
                        Talk to us <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map(link => (
                <Link key={link.path} to={link.path} style={{
                  fontSize: '13px', fontWeight: 400, padding: '6px 12px', borderRadius: '100px',
                  color: isActive(link.path) ? activeLinkColor : inactiveLinkColor,
                  background: scrolled && isActive(link.path) ? 'rgba(255,255,255,0.08)' : 'transparent',
                  textDecoration: 'none', transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>{link.label}</Link>
              ))}
            </div>
          )}

          {/* RIGHT */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            {!isMobile && (
              <Link to="/book-consultation">
                <button style={{
                  background: '#2563eb', color: '#fff', border: 'none',
                  padding: scrolled ? '7px 16px' : '8px 18px',
                  borderRadius: '100px', fontSize: '13px', fontWeight: 500,
                  cursor: 'pointer', fontFamily: 'var(--font-body)',
                  transition: 'all 0.3s ease', whiteSpace: 'nowrap',
                }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Get a Quote
                </button>
              </Link>
            )}

            {isMobile && (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  background: scrolled ? 'rgba(255,255,255,0.08)' : 'var(--bg2)',
                  border: 'none', color: scrolled ? '#fff' : 'var(--text)',
                  width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            )}
          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && isMobile && (
        <div style={{
          position: 'fixed', top: '72px', left: '12px', right: '12px', zIndex: 99,
          background: '#0f1623', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px', padding: '1.25rem 1.5rem',
          boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
          display: 'flex', flexDirection: 'column', gap: '4px',
          maxHeight: 'calc(100vh - 100px)', overflowY: 'auto',
        }}>
          <Link to="/" onClick={() => setMenuOpen(false)} style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', fontWeight: 500 }}>Home</Link>

          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '15px', color: 'rgba(255,255,255,0.7)', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500, fontFamily: 'var(--font-body)' }}
          >
            Services
            <ChevronDown size={14} color="rgba(255,255,255,0.4)" style={{ transition: 'transform 0.2s', transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </button>

          {mobileServicesOpen && (
            <div style={{ paddingLeft: '0.75rem', display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '4px' }}>
              {services.map(s => (
                <Link key={s.title} to={s.path} onClick={() => setMenuOpen(false)} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', padding: '8px 0', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                  {s.title}
                </Link>
              ))}
            </div>
          )}

          {navLinks.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setMenuOpen(false)} style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', fontWeight: 500 }}>
              {link.label}
            </Link>
          ))}

          <Link to="/book-consultation" onClick={() => setMenuOpen(false)} style={{ marginTop: '8px' }}>
            <button style={{ width: '100%', background: '#2563eb', color: '#fff', border: 'none', padding: '12px', borderRadius: '12px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
              Get a Quote
            </button>
          </Link>
        </div>
      )}
    </>
  )
}