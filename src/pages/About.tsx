import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Target, Heart, Zap, Users } from 'lucide-react'

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

const stats = [
  { val: '2020', label: 'Year Founded' },
  { val: '20+', label: 'Projects Delivered' },
  { val: '10+', label: 'Enterprise Clients' },
  { val: '98%', label: 'Satisfaction Rate' },
]

const values = [
  { icon: <Target size={20} color="#2563eb" />, bg: 'rgba(37,99,235,0.08)', color: '#2563eb', title: 'Impact Over Output', desc: 'We measure success by the business outcomes we create, not the volume of deliverables. Every project starts with the question: what does success actually look like for you?' },
  { icon: <Heart size={20} color="#db2777" />, bg: 'rgba(219,39,119,0.08)', color: '#db2777', title: 'Craft & Care', desc: 'We treat every dataset, every pipeline, every dashboard with the same attention to detail. Data artisanship is not just our name — it is our standard.' },
  { icon: <Zap size={20} color="#d97706" />, bg: 'rgba(217,119,6,0.08)', color: '#d97706', title: 'Radical Transparency', desc: 'No black boxes. No jargon. We communicate clearly, share progress openly, and tell you what we actually think — even when it is not what you want to hear.' },
  { icon: <Users size={20} color="#059669" />, bg: 'rgba(5,150,105,0.08)', color: '#059669', title: 'Partnership Mindset', desc: 'We do not just hand over a deliverable and disappear. We embed with your team, transfer knowledge, and build your internal capability alongside every project.' },
]

const team = [
  { name: 'Farah Mubeen', role: 'Founder & CEO', expertise: 'Data Strategy & Architecture', initials: 'FM', color: '#2563eb' },
  { name: 'Priya Mehta', role: 'Head of Data Engineering', expertise: 'Pipelines & Infrastructure', initials: 'PM', color: '#0891b2' },
  { name: 'James Osei', role: 'Lead Data Scientist', expertise: 'ML & Advanced Analytics', initials: 'JO', color: '#7c3aed' },
  { name: 'Sarah Chen', role: 'BI & Visualization Lead', expertise: 'Dashboards & Reporting', initials: 'SC', color: '#d97706' },
  { name: 'Marcus Wright', role: 'AI Solutions Architect', expertise: 'AI & Automation', initials: 'MW', color: '#db2777' },
  { name: 'Lena Kovacs', role: 'Data Governance Lead', expertise: 'Compliance & Security', initials: 'LK', color: '#059669' },
]

const timeline = [
  { year: '2020', title: 'Founded', desc: 'Started as a boutique data consultancy focused on helping businesses unlock the value of their data.' },
  { year: '2021', title: 'First Enterprise Client', desc: 'Delivered our first enterprise data infrastructure project, setting the standard for our craft.' },
  { year: '2022', title: 'Growing Team', desc: 'Expanded to a team of 10+ specialists across data engineering, analytics, and AI.' },
  { year: '2023', title: '20+ Projects', desc: 'Crossed 20 successfully delivered projects across 3+ countries worldwide.' },
  { year: '2024', title: 'Today', desc: 'A team of 10–20 experts serving 10+ enterprise clients across 3+ countries.' },
]

const testimonials = [
  { text: 'The Data Artisans are not just consultants — they are true partners. They embedded with our team, understood our business deeply, and built something we are genuinely proud of.', role: 'Financial Services', initials: 'CT', color: '#2563eb' },
  { text: 'What sets them apart is the combination of technical excellence and business understanding. They always connect the work back to what actually matters for the company.', role: 'Retail & E-commerce', initials: 'HA', color: '#0891b2' },
  { text: 'Radically transparent, incredibly skilled, and genuinely invested in our success. The Data Artisans feel like an extension of our own team.', role: 'Healthcare Technology', initials: 'VP', color: '#7c3aed' },
]

export default function About() {
  return (
    <div style={{ background: '#fff', paddingTop: '64px' }}>

      {/* HERO */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(3rem, 5vw, 5rem) clamp(1.25rem, 4vw, 4rem)', borderBottom: '1px solid var(--border)' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}
          >
            <div style={{ width: '28px', height: '1.5px', background: 'var(--accent)', borderRadius: '2px' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>Our Story</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1.25rem' }}
          >
            We believe data should{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 600 }}>work for people,</em>{' '}
            not the other way around.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, maxWidth: '420px', marginBottom: '2.5rem' }}
          >
            Founded in 2020, The Data Artisans was born from a simple frustration:
            too many businesses were drowning in data but starving for insight.
            We set out to change that.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
          >
            <Link to="/book-consultation">
              <button className="btn-primary" style={{ fontSize: '14px', padding: '11px 22px' }}>
                Work With Us <ArrowRight size={14} />
              </button>
            </Link>
            <Link to="/services">
              <button className="btn-ghost" style={{ fontSize: '14px', padding: '11px 22px' }}>
                Our Services <ArrowUpRight size={14} />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Founder quote */}
        <div style={{ background: '#f7f9ff', padding: 'clamp(3rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div style={{ position: 'relative', maxWidth: '440px' }}>
            <div style={{ fontSize: '4rem', color: 'rgba(37,99,235,0.15)', fontFamily: 'var(--font-display)', lineHeight: 1, marginBottom: '1rem' }}>"</div>
            <p style={{ fontSize: '15px', color: 'var(--text)', lineHeight: 1.85, fontWeight: 300, marginBottom: '2rem', fontStyle: 'italic' }}>
              We started with a belief that great data work is equal parts technical
              excellence and human understanding. You cannot build solutions that work
              without truly understanding the business behind the numbers.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(37,99,235,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 600, color: 'var(--accent)', flexShrink: 0 }}>FM</div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>Farah Mubeen</p>
                <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Founder & CEO, The Data Artisans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ background: '#0f1623' }}>
        <div className="stat-bar">
          {stats.map((s, i) => (
            <div key={i} className="stat-bar-item">
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.04em' }}>{s.val}</span>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MISSION + TIMELINE */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)', borderBottom: '1px solid var(--border)' }}>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'start' }}>
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>Our Mission</p>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '1.25rem' }}>
                Make data work for every business, not just those with billion-dollar budgets.
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.85, fontWeight: 300, marginBottom: '1rem' }}>
                Enterprise-grade data capabilities used to be reserved for companies with
                massive engineering teams and unlimited budgets. We believe that is wrong.
              </p>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.85, fontWeight: 300, marginBottom: '2rem' }}>
                Every ambitious business deserves a data foundation that works — pipelines
                that do not break, dashboards that tell the truth, and AI that actually helps.
                Since 2020, that is exactly what we have been building.
              </p>
              <Link to="/services">
                <button className="btn-ghost" style={{ fontSize: '13px', padding: '10px 20px' }}>
                  See Our Services <ArrowUpRight size={13} />
                </button>
              </Link>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Our Journey</p>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '11px', top: '8px', bottom: '8px', width: '1px', background: 'var(--border)' }} />
                {timeline.map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.25rem', marginBottom: i < timeline.length - 1 ? '1.75rem' : '0', position: 'relative' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0, zIndex: 1, marginTop: '1px', background: i === timeline.length - 1 ? 'var(--accent)' : '#fff', border: `2px solid ${i === timeline.length - 1 ? 'var(--accent)' : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {i === timeline.length - 1 && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }} />}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.05em' }}>{t.year}</span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>{t.title}</span>
                      </div>
                      <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* VALUES */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)', background: '#f7f9ff', borderBottom: '1px solid var(--border)' }}>
        <Reveal>
          <motion.div variants={fadeUp} style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>What Drives Us</p>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1.2 }}>Our values, in plain English</h2>
          </motion.div>

          <div className="values-grid">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}
                style={{ background: '#fff', padding: 'clamp(1.5rem, 3vw, 2.5rem)', transition: 'background 0.2s' }}
                whileHover={{ background: '#f7f9ff' }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: v.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>{v.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.75 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* TEAM */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)', borderBottom: '1px solid var(--border)' }}>
        <Reveal>
          <motion.div variants={fadeUp} style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>The Team</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1rem', flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1.2 }}>Meet the people behind the work</h2>
              <p style={{ fontSize: '13px', color: 'var(--muted)', maxWidth: '300px', lineHeight: 1.6 }}>
                A team of specialists united by a love of data and a commitment to craft.
              </p>
            </div>
          </motion.div>

          <div className="team-grid">
            {team.map((member) => (
              <motion.div key={member.name} variants={fadeUp}
                style={{ background: '#fff', padding: 'clamp(1.25rem, 2vw, 2rem)', display: 'flex', alignItems: 'flex-start', gap: '1rem', transition: 'background 0.2s' }}
                whileHover={{ background: '#f7f9ff' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0, background: `${member.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 600, color: member.color }}>
                  {member.initials}
                </div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>{member.name}</p>
                  <p style={{ fontSize: '12px', color: member.color, fontWeight: 500, marginBottom: '4px' }}>{member.role}</p>
                  <p style={{ fontSize: '12px', color: 'var(--muted)' }}>{member.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)', background: '#f7f9ff', borderBottom: '1px solid var(--border)' }}>
        <Reveal>
          <motion.div variants={fadeUp} style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>What Clients Say</p>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1.2 }}>Words from the teams we have worked with</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp}
                style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '14px', padding: 'clamp(1.25rem, 2vw, 2rem)', transition: 'all 0.2s' }}
                whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(0,0,0,0.06)' }}
              >
                <div style={{ color: '#f59e0b', fontSize: '13px', marginBottom: '1rem', letterSpacing: '3px' }}>★★★★★</div>
                <p style={{ fontSize: '14px', color: 'var(--text)', lineHeight: 1.75, marginBottom: '1.5rem', fontWeight: 300, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: `${t.color}12`, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 600, color: t.color }}>{t.initials}</div>
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--muted)' }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="cta-split">
        <div className="cta-split-left" style={{ background: 'var(--accent)' }}>
          <Reveal>
            <motion.p variants={fadeUp} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem' }}>
              Let's Build Together
            </motion.p>
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.75rem' }}>
              Ready to work with a team that truly cares about your data?
            </motion.h2>
            <motion.div variants={fadeUp}>
              <Link to="/book-consultation">
                <button style={{ background: '#fff', color: 'var(--accent)', border: 'none', padding: '11px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'opacity 0.2s', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Get in Touch <ArrowRight size={14} />
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
                { label: 'Contact us', path: '/contact' },
              ].map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <Link to={item.path} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 0', borderBottom: '1px solid var(--border)', color: 'var(--text)', fontSize: '14px', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
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