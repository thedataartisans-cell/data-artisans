import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight, ArrowUpRight, BarChart3, Brain, Database, LineChart, Shield, Zap } from 'lucide-react'

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

function LiveBars() {
  const initialHeights = [30, 48, 38, 62, 50, 72, 60, 85, 68, 92, 78, 100]
  const [heights, setHeights] = useState<number[]>(initialHeights)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setHeights(prev =>
        prev.map((h, i) => {
          if (i === prev.length - 1) return h
          const delta = Math.random() * 16 - 8
          return Math.min(100, Math.max(15, h + delta))
        })
      )
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-end', height: '56px' }}>
      {heights.map((h, i) => (
        <div key={i} style={{
          flex: 1, height: `${h}%`, borderRadius: '3px 3px 0 0',
          background: i === heights.length - 1
            ? 'var(--accent)'
            : i >= heights.length - 3
              ? 'rgba(37,99,235,0.25)'
              : 'rgba(37,99,235,0.1)',
          transition: mounted ? 'height 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
        }} />
      ))}
    </div>
  )
}

const services = [
  { icon: <LineChart size={18} color="#2563eb" />, bg: 'rgba(37,99,235,0.08)', title: 'Data Strategy & Consulting', desc: 'Align your data vision with business goals through expert guidance and roadmaps.', color: '#2563eb', id: 'strategy' },
  { icon: <Database size={18} color="#0891b2" />, bg: 'rgba(8,145,178,0.08)', title: 'Data Engineering', desc: 'Scalable pipelines and infrastructure that power your entire data ecosystem.', color: '#0891b2', id: 'engineering' },
  { icon: <BarChart3 size={18} color="#7c3aed" />, bg: 'rgba(124,58,237,0.08)', title: 'Business Intelligence & Dashboards', desc: 'Real-time dashboards that turn data complexity into clear business decisions.', color: '#7c3aed', id: 'bi' },
  { icon: <Brain size={18} color="#d97706" />, bg: 'rgba(217,119,6,0.08)', title: 'Advanced Analytics & Data Science', desc: 'Predictive models and deep insights that give you a competitive edge.', color: '#d97706', id: 'analytics' },
  { icon: <Zap size={18} color="#db2777" />, bg: 'rgba(219,39,119,0.08)', title: 'AI & Automation Solutions', desc: 'Intelligent automation and AI-powered tools built for your workflows.', color: '#db2777', id: 'ai' },
  { icon: <Shield size={18} color="#059669" />, bg: 'rgba(5,150,105,0.08)', title: 'Data Governance & Security', desc: 'Enterprise-grade security and governance frameworks for your data assets.', color: '#059669', id: 'governance' },
]

const stats = [
  { val: '150+', label: 'Projects delivered' },
  { val: '98%', label: 'Client satisfaction' },
  { val: '40+', label: 'Enterprises served' },
  { val: '8+', label: 'Years of craft' },
]

const process = [
  { num: '01', title: 'Discover', desc: 'We audit your data landscape, identify gaps and map opportunities unique to your business.' },
  { num: '02', title: 'Architect', desc: 'Our experts design a scalable, future-proof data architecture tailored to your goals.' },
  { num: '03', title: 'Build', desc: 'We execute with precision — pipelines, dashboards, models — delivered on time.' },
  { num: '04', title: 'Evolve', desc: 'We monitor, optimize and grow your data capability continuously after launch.' },
]

const testimonials = [
  {
    text: 'The Data Artisans transformed how we use data. Decision-making speed improved dramatically within weeks of launch.',
    name: 'Chief Technology Officer',
    role: 'Financial Services',
    initials: 'CT',
    color: '#2563eb',
  },
  {
    text: 'Their BI dashboards gave us visibility we never had. Incredibly professional team with deep technical expertise.',
    name: 'Head of Analytics',
    role: 'Retail & E-commerce',
    initials: 'HA',
    color: '#0891b2',
  },
  {
    text: 'From strategy to execution, they delivered beyond expectations. Our AI pipeline is now fully automated.',
    name: 'VP of Operations',
    role: 'Healthcare Technology',
    initials: 'VP',
    color: '#7c3aed',
  },
]

export default function Home() {
  return (
    <div style={{ background: '#fff', paddingTop: '64px' }}>

      {/* ── HERO ── */}
      <section className="hero-split">
        <div className="hero-split-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}
          >
            <div style={{ width: '28px', height: '1.5px', background: 'var(--accent)', borderRadius: '2px' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>
              Data Analytics & Intelligence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.75rem)',
              fontWeight: 700, lineHeight: 1.15,
              letterSpacing: '-0.035em', color: 'var(--text)',
              marginBottom: '1rem',
            }}
          >
            We craft data systems that create real{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 600 }}>
              business impact.
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{
              fontSize: '14px', color: 'var(--muted)',
              maxWidth: '400px', marginBottom: '2rem',
              fontWeight: 300, lineHeight: 1.8,
            }}
          >
            From raw data to refined intelligence — helping ambitious businesses
            build the data foundations that drive real growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}
          >
            <Link to="/book-consultation">
              <button className="btn-primary" style={{ padding: '11px 22px', fontSize: '14px' }}>
                Start a Project <ArrowRight size={14} />
              </button>
            </Link>
            <Link
              to="/services"
              style={{ fontSize: '13px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              Explore Services <ArrowUpRight size={13} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}
          >
            {['Strategy', 'Engineering', 'Analytics', 'AI & ML', 'Governance'].map((t, i) => (
              <span key={i} style={{
                fontSize: '11px', color: 'var(--muted)',
                border: '1px solid var(--border)',
                padding: '3px 10px', borderRadius: '100px',
                letterSpacing: '0.02em',
              }}>{t}</span>
            ))}
          </motion.div>
        </div>

        {/* Right — Live Data Visual */}
        <div className="hero-split-right">
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ position: 'relative', width: '100%', maxWidth: '380px' }}
          >
            <div style={{
              background: '#fff', borderRadius: '16px', padding: '1.25rem',
              boxShadow: '0 4px 32px rgba(0,0,0,0.07)',
              border: '1px solid var(--border)', marginBottom: '10px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div>
                  <p style={{ fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Revenue Impact</p>
                  <p style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--text)', letterSpacing: '-0.04em' }}>+$2.4M</p>
                </div>
                <span style={{ background: 'rgba(5,150,105,0.1)', color: '#059669', fontSize: '11px', fontWeight: 600, padding: '3px 8px', borderRadius: '100px' }}>↑ 34%</span>
              </div>
              <LiveBars />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                {['Jan', 'Apr', 'Jul', 'Oct', 'Dec'].map(m => (
                  <span key={m} style={{ fontSize: '10px', color: 'var(--muted)' }}>{m}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={{
                background: '#fff', borderRadius: '12px', padding: '0.875rem',
                border: '1px solid var(--border)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}>
                <p style={{ fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Pipeline Health</p>
                <p style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: '#059669', letterSpacing: '-0.03em' }}>99.9%</p>
                <div style={{ marginTop: '8px', height: '3px', borderRadius: '2px', background: 'rgba(5,150,105,0.12)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '99%' }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{ height: '100%', borderRadius: '2px', background: '#059669' }}
                  />
                </div>
              </div>
              <div style={{ background: 'var(--accent)', borderRadius: '12px', padding: '0.875rem' }}>
                <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Avg. ROI</p>
                <p style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: '#fff', letterSpacing: '-0.03em' }}>3–5×</p>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>on data projects</p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: '-16px', right: '-16px',
                background: '#fff', borderRadius: '10px', padding: '7px 12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: '#059669',
                  boxShadow: '0 0 0 3px rgba(5,150,105,0.15)',
                }}
              />
              <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text)' }}>Live Dashboard</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: '#0f1623', overflow: 'hidden' }}>
        <div className="stat-bar">
          {stats.map((s, i) => (
            <div key={i} className="stat-bar-item">
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.04em' }}>{s.val}</span>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section style={{ paddingTop: '3.5rem' }}>
        <Reveal>
          <div className="page-padding" style={{ paddingBottom: '0' }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'flex-end', paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--border)',
              gap: '1rem', flexWrap: 'wrap',
            }}>
              <div>
                <motion.p variants={fadeUp} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.4rem' }}>What We Do</motion.p>
                <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.4rem, 2vw, 1.9rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)' }}>
                  Six ways we make your data work harder
                </motion.h2>
              </div>
              <motion.div variants={fadeUp}>
                <Link to="/services">
                  <button className="btn-ghost" style={{ fontSize: '13px', padding: '8px 16px', whiteSpace: 'nowrap' }}>
                    All Services <ArrowUpRight size={13} />
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="service-card-item"
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: i < 3 ? '1px solid var(--border)' : 'none',
                }}
                whileHover={{ background: '#f7f9ff' }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.875rem' }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1rem' }}>{s.desc}</p>
                <Link to={`/services/${s.id}`} style={{ fontSize: '12px', color: s.color, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                  Learn more <ArrowUpRight size={11} />
                </Link>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ background: '#0f1623' }} className="section-padding">
        <div className="page-padding">
          <Reveal>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'flex-end', marginBottom: '2.5rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div>
                <motion.p variants={fadeUp} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.4rem' }}>How We Work</motion.p>
                <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.4rem, 2vw, 1.9rem)', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.2 }}>
                  Our process,{' '}
                  <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}>refined over 8 years</em>
                </motion.h2>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="process-grid">
              {process.map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    padding: '1.75rem',
                    borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>{p.num}</div>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '0.6rem', letterSpacing: '-0.025em' }}>{p.title}</h3>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding page-padding" style={{ background: '#fff' }}>
        <Reveal>
          <div className="testimonials-layout">

            {/* Left sidebar — NO sticky */}
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.6rem' }}>Client Stories</p>
              <h2 style={{ fontSize: 'clamp(1.3rem, 1.8vw, 1.6rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1rem', color: 'var(--text)' }}>
                Words from teams we've worked with
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 300 }}>
                Trusted by analytics teams, CTOs, and data leaders across industries.
              </p>
              <Link to="/book-consultation">
                <button className="btn-primary" style={{ fontSize: '13px', padding: '9px 18px' }}>
                  Work With Us <ArrowRight size={13} />
                </button>
              </Link>
            </motion.div>

            {/* Right — testimonial cards */}
            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    padding: '1.5rem 1.75rem',
                    borderBottom: i < testimonials.length - 1 ? '1px solid var(--border)' : 'none',
                    display: 'grid',
                    gridTemplateColumns: '38px 1fr',
                    gap: '1rem',
                    alignItems: 'start',
                    transition: 'background 0.2s',
                  }}
                  whileHover={{ background: '#f7f9ff' }}
                >
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    background: `${t.color}12`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '11px', fontWeight: 600, color: t.color, flexShrink: 0,
                  }}>{t.initials}</div>
                  <div>
                    <p style={{ fontSize: '14px', color: 'var(--text)', lineHeight: 1.7, marginBottom: '0.6rem', fontWeight: 300 }}>"{t.text}"</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}>{t.name}</span>
                      <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--border2)', display: 'inline-block' }} />
                      <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{t.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </Reveal>
      </section>

      {/* ── CTA SPLIT ── */}
      <section className="cta-split">
        <div className="cta-split-left" style={{ background: 'var(--accent)' }}>
          <Reveal>
            <motion.p variants={fadeUp} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.6rem' }}>Ready to start?</motion.p>
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.3rem, 1.8vw, 1.75rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.75rem' }}>
              Let's build something remarkable with your data.
            </motion.h2>
            <motion.div variants={fadeUp}>
              <Link to="/book-consultation">
                <button
                  style={{
                    background: '#fff', color: 'var(--accent)', border: 'none',
                    padding: '10px 20px', borderRadius: '8px', fontSize: '14px',
                    fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)',
                    transition: 'opacity 0.2s', display: 'inline-flex',
                    alignItems: 'center', gap: '8px',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Book Free Consultation <ArrowRight size={14} />
                </button>
              </Link>
            </motion.div>
          </Reveal>
        </div>

        <div className="cta-split-right" style={{ background: '#fff' }}>
          <Reveal>
            <motion.p variants={fadeUp} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem' }}>Explore more</motion.p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { label: 'View our services', path: '/services' },
                { label: 'See pricing plans', path: '/pricing' },
                { label: 'Learn about us', path: '/about' },
              ].map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <Link
                    to={item.path}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '0.875rem 0', borderBottom: '1px solid var(--border)',
                      color: 'var(--text)', fontSize: '14px', fontWeight: 500,
                      textDecoration: 'none', transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
                  >
                    {item.label}
                    <ArrowUpRight size={14} color="var(--muted)" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  )
}