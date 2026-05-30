import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CheckCircle2, X } from 'lucide-react'

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

const plans = [
  {
    name: 'Starter', tag: 'For growing teams', price: '4,999', period: 'project',
    color: '#0891b2', bg: 'rgba(8,145,178,0.08)',
    desc: 'Perfect for small businesses taking their first steps toward becoming data-driven.',
    features: [
      { text: 'Data audit & assessment', included: true },
      { text: 'Basic data pipeline setup', included: true },
      { text: 'Up to 3 dashboards', included: true },
      { text: 'Monthly reporting', included: true },
      { text: '30-day post-delivery support', included: true },
      { text: 'Dedicated account manager', included: false },
      { text: 'Custom ML models', included: false },
      { text: 'AI & automation solutions', included: false },
    ],
    cta: 'Get Started', popular: false,
  },
  {
    name: 'Professional', tag: 'Most Popular', price: '12,999', period: 'project',
    color: '#2563eb', bg: 'rgba(37,99,235,0.08)',
    desc: 'For mid-size businesses ready to build a serious, scalable data foundation.',
    features: [
      { text: 'Full data strategy & roadmap', included: true },
      { text: 'Advanced pipeline development', included: true },
      { text: 'Up to 10 dashboards', included: true },
      { text: 'Weekly reporting & reviews', included: true },
      { text: '90-day post-delivery support', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Basic predictive modeling', included: true },
      { text: 'AI & automation solutions', included: false },
    ],
    cta: 'Get in Touch', popular: true,
  },
  {
    name: 'Enterprise', tag: 'Full Service', price: 'Custom', period: '',
    color: '#7c3aed', bg: 'rgba(124,58,237,0.08)',
    desc: 'For organizations that need a complete, end-to-end data transformation partner.',
    features: [
      { text: 'Full data strategy & roadmap', included: true },
      { text: 'Enterprise-grade infrastructure', included: true },
      { text: 'Unlimited dashboards', included: true },
      { text: 'Real-time reporting & alerts', included: true },
      { text: '12-month ongoing support', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Custom ML & AI models', included: true },
      { text: 'AI & automation solutions', included: true },
    ],
    cta: 'Get in Touch', popular: false,
  },
]

const retainerPlans = [
  {
    name: 'Essential', price: '2,499', color: '#0891b2',
    desc: 'Ongoing support and maintenance for your existing data infrastructure.',
    includes: [
      'Pipeline monitoring & maintenance',
      'Monthly dashboard updates',
      'Up to 10 support hours/month',
      'Monthly performance review',
    ],
  },
  {
    name: 'Growth', price: '5,999', color: '#2563eb',
    desc: 'Proactive data management with continuous improvement and new feature development.',
    includes: [
      'Everything in Essential',
      'Up to 30 support hours/month',
      'Quarterly strategy sessions',
      'New dashboard development',
      'Data quality monitoring',
    ],
  },
  {
    name: 'Partner', price: 'Custom', color: '#7c3aed',
    desc: 'A fully embedded data team that acts as your in-house analytics department.',
    includes: [
      'Everything in Growth',
      'Unlimited support hours',
      'Weekly strategy sessions',
      'Dedicated team of 3+ experts',
      'Full AI & ML development',
    ],
  },
]

const alwaysIncluded = [
  { title: 'Weekly Updates', desc: 'Regular progress updates and demo sessions throughout every project.' },
  { title: 'Full Documentation', desc: 'Comprehensive docs for every system, pipeline, and dashboard we build.' },
  { title: 'Knowledge Transfer', desc: 'We train your team so you are never dependent on us to run things.' },
  { title: 'Code Ownership', desc: 'You own everything we build — all code, models, and data assets.' },
]

const faqs = [
  { q: 'How do your project-based engagements work?', a: 'We scope each project carefully during a discovery call, agree on deliverables and timeline, then execute in focused sprints with weekly updates. Payment is typically split: 50% upfront, 50% on delivery.' },
  { q: 'What is the difference between project and retainer pricing?', a: 'Project pricing is for defined, one-time deliverables (e.g. build a data warehouse). Retainer pricing is for ongoing work — maintaining, improving, and expanding your data capabilities over time.' },
  { q: 'Can we start with a smaller project before committing to a larger engagement?', a: 'Absolutely — in fact, we recommend it. Many clients start with a data audit or a single dashboard project to experience our work before expanding the relationship.' },
  { q: 'Do you offer discounts for non-profits or startups?', a: 'Yes — we offer reduced rates for early-stage startups and non-profit organizations. Get in touch and we will work something out.' },
  { q: 'What is included in post-delivery support?', a: 'Post-delivery support covers bug fixes, minor changes, questions, and knowledge transfer sessions. It does not include new feature development, which would be scoped separately.' },
  { q: 'How quickly can you start?', a: 'For most projects, we can kick off within 1–2 weeks of signing. We maintain capacity for urgent engagements — just let us know your timeline.' },
]

export default function Pricing() {
  const [billingType, setBillingType] = useState<'project' | 'retainer'>('project')

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
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>Transparent Pricing</span>
          <div style={{ width: '28px', height: '1.5px', background: 'var(--accent)', borderRadius: '2px' }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1rem' }}
        >
          Simple, honest pricing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '500px', lineHeight: 1.8, fontWeight: 300, margin: '0 auto 2.5rem' }}
        >
          No hidden fees. No surprise invoices. Every engagement starts with a clear
          scope, timeline, and price — agreed upfront.
        </motion.p>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: 'inline-flex', background: '#f7f9ff', border: '1px solid var(--border)', borderRadius: '100px', padding: '4px', gap: '4px' }}
        >
          {(['project', 'retainer'] as const).map(type => (
            <button
              key={type}
              onClick={() => setBillingType(type)}
              style={{
                padding: '8px 20px', borderRadius: '100px', border: 'none',
                fontSize: '13px', fontWeight: 500, cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                background: billingType === type ? 'var(--accent)' : 'transparent',
                color: billingType === type ? '#fff' : 'var(--muted)',
                transition: 'all 0.2s',
              }}
            >
              {type === 'project' ? 'Project-Based' : 'Monthly Retainer'}
            </button>
          ))}
        </motion.div>
      </section>

      {/* PRICING CARDS */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)' }}>
        {billingType === 'project' ? (
          <Reveal>
            <div className="pricing-grid">
              {plans.map((plan) => (
                <motion.div
                  key={plan.name} variants={fadeUp}
                  style={{
                    background: plan.popular ? plan.bg : '#fff',
                    border: `1px solid ${plan.popular ? plan.color : 'var(--border)'}`,
                    borderRadius: '20px', padding: 'clamp(1.5rem, 3vw, 2rem)',
                    position: 'relative', overflow: 'hidden',
                    boxShadow: plan.popular ? `0 8px 40px ${plan.color}20` : 'none',
                  }}
                >
                  {plan.popular && (
                    <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: plan.color, color: '#fff', fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', padding: '4px 10px', borderRadius: '100px' }}>
                      Most Popular
                    </div>
                  )}

                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: plan.color, marginBottom: '0.4rem' }}>{plan.tag}</p>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em' }}>{plan.name}</h3>
                  </div>

                  {/* Price display */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    {plan.name === 'Starter' ? (
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                        <span style={{ fontSize: '15px', color: 'var(--muted)', fontWeight: 400 }}>from $</span>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.04em' }}>{plan.price}</span>
                        <span style={{ fontSize: '13px', color: 'var(--muted)' }}>/ {plan.period}</span>
                      </div>
                    ) : (
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: `${plan.color}12`,
                        border: `1px solid ${plan.color}30`,
                        borderRadius: '100px', padding: '8px 16px',
                      }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: plan.color }} />
                        <span style={{ fontSize: '13px', fontWeight: 600, color: plan.color }}>
                          Tailored to your needs — let's talk
                        </span>
                      </div>
                    )}
                  </div>

                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 300 }}>{plan.desc}</p>

                  <div style={{ height: '1px', background: 'var(--border)', margin: '1.5rem 0' }} />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem' }}>
                    {plan.features.map((f) => (
                      <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {f.included
                          ? <CheckCircle2 size={15} color={plan.color} style={{ flexShrink: 0 }} />
                          : <X size={15} color="var(--muted)" style={{ flexShrink: 0, opacity: 0.4 }} />
                        }
                        <span style={{ fontSize: '13px', color: f.included ? 'var(--text)' : 'var(--muted)', opacity: f.included ? 1 : 0.5 }}>{f.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/book-consultation">
                    <button style={{
                      width: '100%', padding: '12px', borderRadius: '10px',
                      fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                      fontFamily: 'var(--font-body)', transition: 'opacity 0.2s',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      background: plan.popular ? plan.color : 'transparent',
                      color: plan.popular ? '#fff' : plan.color,
                      border: plan.popular ? 'none' : `1px solid ${plan.color}`,
                    } as React.CSSProperties}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      {plan.cta} <ArrowRight size={14} />
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <div className="pricing-grid">
              {retainerPlans.map((plan) => (
                <motion.div
                  key={plan.name} variants={fadeUp}
                  style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '20px', padding: 'clamp(1.5rem, 3vw, 2rem)', transition: 'all 0.2s' }}
                  whileHover={{ borderColor: plan.color, boxShadow: `0 8px 32px ${plan.color}15`, y: -4 }}
                >
                  <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: plan.color, marginBottom: '0.4rem' }}>Monthly Retainer</p>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>{plan.name}</h3>

                  {plan.name === 'Partner' ? (
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      background: `${plan.color}12`,
                      border: `1px solid ${plan.color}30`,
                      borderRadius: '100px', padding: '8px 16px',
                      marginBottom: '1rem',
                    }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: plan.color }} />
                      <span style={{ fontSize: '13px', fontWeight: 600, color: plan.color }}>
                        Tailored to your needs — let's talk
                      </span>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '15px', color: 'var(--muted)' }}>$</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.04em' }}>{plan.price}</span>
                      <span style={{ fontSize: '13px', color: 'var(--muted)' }}>/month</span>
                    </div>
                  )}

                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 300 }}>{plan.desc}</p>

                  <div style={{ height: '1px', background: 'var(--border)', margin: '1.5rem 0' }} />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem' }}>
                    {plan.includes.map((item) => (
                      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2 size={15} color={plan.color} style={{ flexShrink: 0, marginTop: '1px' }} />
                        <span style={{ fontSize: '13px', color: 'var(--text)' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/book-consultation">
                    <button style={{
                      width: '100%', padding: '12px', borderRadius: '10px',
                      border: `1px solid ${plan.color}`, fontSize: '14px',
                      fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)',
                      background: 'transparent', color: plan.color, transition: 'all 0.2s',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    } as React.CSSProperties}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = plan.color
                        e.currentTarget.style.color = '#fff'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = plan.color
                      }}
                    >
                      Get in Touch <ArrowRight size={14} />
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Reveal>
        )}

        <Reveal>
          <motion.p variants={fadeUp} style={{ textAlign: 'center', fontSize: '13px', color: 'var(--muted)', marginTop: '2.5rem', lineHeight: 1.7 }}>
            All prices are in USD and exclude applicable taxes. Need something custom?{' '}
            <Link to="/contact" style={{ color: 'var(--accent)', fontWeight: 500 }}>Talk to us</Link>
            {' '}— we scope every engagement individually.
          </motion.p>
        </Reveal>
      </section>

      {/* ALWAYS INCLUDED */}
      <section style={{ background: '#0f1623', padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 4vw, 2.5rem)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <Reveal>
          <motion.div variants={fadeUp} style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>Every Engagement</p>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.2 }}>What's always included</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden' }}>
            {alwaysIncluded.map((item) => (
              <motion.div key={item.title} variants={fadeUp} style={{ padding: 'clamp(1.25rem, 2vw, 2rem)', background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)', borderBottom: '1px solid var(--border)' }}>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(2rem, 4vw, 4rem)' }}>
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>Pricing FAQ</p>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.9rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1.2, marginBottom: '1rem' }}>Common questions about pricing</h2>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
                Have a question we have not answered? We are happy to talk through pricing on a quick call.
              </p>
              <Link to="/contact">
                <button className="btn-ghost" style={{ fontSize: '13px', padding: '9px 18px' }}>
                  Talk to Us <ArrowRight size={13} />
                </button>
              </Link>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeUp}
                  style={{ padding: 'clamp(1.25rem, 2vw, 1.5rem) clamp(1.25rem, 2vw, 2rem)', borderBottom: i < faqs.length - 1 ? '1px solid var(--border)' : 'none', transition: 'background 0.2s' }}
                  whileHover={{ background: '#f7f9ff' }}
                >
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '0.6rem' }}>{faq.q}</p>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.75, fontWeight: 300 }}>{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="cta-split">
        <div className="cta-split-left" style={{ background: 'var(--accent)' }}>
          <Reveal>
            <motion.p variants={fadeUp} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem' }}>
              Ready to invest in your data?
            </motion.p>
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.75rem' }}>
              Let's scope your project and get you a precise quote.
            </motion.h2>
            <motion.div variants={fadeUp}>
              <Link to="/book-consultation">
                <button style={{ background: '#fff', color: 'var(--accent)', border: 'none', padding: '11px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'opacity 0.2s', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Request a Quote <ArrowRight size={14} />
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
                { label: 'Learn about us', path: '/about' },
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