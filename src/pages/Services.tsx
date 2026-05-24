import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight, ArrowUpRight, BarChart3, Brain, Database, LineChart, Shield, Zap } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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

const services = [
  { id: 'strategy', icon: <LineChart size={28} color="#2563eb" />, bg: 'rgba(37,99,235,0.08)', color: '#2563eb', title: 'Data Strategy & Consulting', desc: 'Align your data vision with business goals through expert guidance and actionable roadmaps.', features: ['Data maturity assessment & audit', 'Technology stack recommendations', 'KPI framework & implementation roadmap'] },
  { id: 'engineering', icon: <Database size={28} color="#0891b2" />, bg: 'rgba(8,145,178,0.08)', color: '#0891b2', title: 'Data Engineering', desc: 'Scalable pipelines and data infrastructure that power your entire analytics ecosystem.', features: ['ETL/ELT pipeline development', 'Real-time streaming & data warehouses', 'Cloud infrastructure & API integrations'] },
  { id: 'bi', icon: <BarChart3 size={28} color="#7c3aed" />, bg: 'rgba(124,58,237,0.08)', color: '#7c3aed', title: 'Business Intelligence & Dashboards', desc: 'Interactive, real-time dashboards that turn data complexity into clear business decisions.', features: ['Executive & operational dashboards', 'Self-service BI setup & training', 'Automated reporting & KPI tracking'] },
  { id: 'analytics', icon: <Brain size={28} color="#d97706" />, bg: 'rgba(217,119,6,0.08)', color: '#d97706', title: 'Advanced Analytics & Data Science', desc: 'Predictive models and deep insights that give your business a measurable competitive edge.', features: ['Predictive modeling & forecasting', 'Customer segmentation & churn analysis', 'A/B testing & statistical frameworks'] },
  { id: 'ai', icon: <Zap size={28} color="#db2777" />, bg: 'rgba(219,39,119,0.08)', color: '#db2777', title: 'AI & Automation Solutions', desc: 'Intelligent automation and AI-powered tools built specifically for your business workflows.', features: ['Custom ML model development', 'LLM integration & fine-tuning', 'Process automation & AI chatbots'] },
  { id: 'governance', icon: <Shield size={28} color="#059669" />, bg: 'rgba(5,150,105,0.08)', color: '#059669', title: 'Data Governance & Security', desc: 'Enterprise-grade security and governance frameworks to protect and manage your data assets.', features: ['GDPR / CCPA compliance', 'Data catalog & lineage tracking', 'Access control & security hardening'] },
]

const stats = [
  { val: '150+', label: 'Projects Delivered' },
  { val: '98%', label: 'Client Satisfaction' },
  { val: '40+', label: 'Enterprise Clients' },
  { val: '8+', label: 'Years of Expertise' },
]

const whyUs = [
  { label: 'Dedicated experts', desc: 'Assigned to every engagement' },
  { label: 'Agile delivery', desc: 'Weekly updates & demos' },
  { label: 'Built to scale', desc: 'From day one, always' },
  { label: 'Knowledge transfer', desc: 'We train your team too' },
]

export default function Services() {
  return (
    <div style={{ background: '#fff', paddingTop: '64px' }}>

      {/* HERO */}
      <section style={{
        padding: 'clamp(3rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem) clamp(2rem, 3vw, 3rem)',
        borderBottom: '1px solid var(--border)',
        background: 'linear-gradient(180deg, #f7f9ff 0%, #fff 100%)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-150px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '500px', background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}
        >
          <div style={{ width: '28px', height: '1.5px', background: 'var(--accent)', borderRadius: '2px' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>What We Offer</span>
          <div style={{ width: '28px', height: '1.5px', background: 'var(--accent)', borderRadius: '2px' }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1.25rem' }}
        >Our Services</motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.8, fontWeight: 300, margin: '0 auto 2.5rem' }}
        >
          From building your first data pipeline to deploying enterprise AI — we cover
          every layer of the modern data stack with precision and care.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', background: '#fff' }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem)',
              borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: 'var(--accent)', letterSpacing: '-0.04em' }}>{s.val}</div>
              <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)' }}>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {services.map((s) => (
              <motion.div
                key={s.id} variants={fadeUp}
                style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.75rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', cursor: 'default', transition: 'border-color 0.2s' }}
                whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = s.color)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: s.color, borderRadius: '16px 16px 0 0' }} />

                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  {s.icon}
                </div>

                <h3 style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--text)', marginBottom: '0.75rem', lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 300, flex: 1 }}>{s.desc}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.5rem', padding: '1rem', background: s.bg, borderRadius: '10px' }}>
                  {s.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: s.color, flexShrink: 0, marginTop: '6px' }} />
                      <span style={{ fontSize: '12px', color: 'var(--text)', lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link to={`/services/${s.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: s.color, textDecoration: 'none' }}>
                  Learn more <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* WHY US */}
      <section style={{ background: '#0f1623', padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 4vw, 2.5rem)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <Reveal>
          <div className="why-grid">
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>Why Choose Us</p>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.9rem)', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                Artisan-level craft meets enterprise-grade scale.
              </h2>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
                We embed with your team, understand your business deeply,
                and build data systems that grow with you.
              </p>
              <Link to="/about">
                <button className="btn-primary" style={{ fontSize: '13px', padding: '10px 20px' }}>
                  About Us <ArrowRight size={13} />
                </button>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="why-cards">
                {whyUs.map((item) => (
                  <div key={item.label} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>{item.label}</p>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{
        padding: 'clamp(3rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)',
        background: 'linear-gradient(135deg, #f0f4ff 0%, #fff 100%)',
        borderTop: '1px solid var(--border)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      }}>
        <Reveal>
          <motion.p variants={fadeUp} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>
            Let's Work Together
          </motion.p>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1.2, marginBottom: '1rem', maxWidth: '560px' }}>
            Not sure which service is right for you?
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: '14px', color: 'var(--muted)', maxWidth: '440px', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem' }}>
            Book a free 45-minute discovery call. We'll listen to your challenges
            and recommend the right approach — no pressure, no sales pitch.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/book-consultation">
              <button className="btn-primary" style={{ fontSize: '14px', padding: '12px 24px' }}>
                Book a Free Call <ArrowRight size={14} />
              </button>
            </Link>
            <Link to="/pricing">
              <button className="btn-ghost" style={{ fontSize: '14px', padding: '12px 24px' }}>
                View Pricing <ArrowUpRight size={14} />
              </button>
            </Link>
          </motion.div>
        </Reveal>
      </section>

    </div>
  )
}