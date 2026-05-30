import { useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, BarChart3, Brain,
  Database, LineChart, Shield, Zap, CheckCircle2, ChevronRight,
} from 'lucide-react'

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

const allServices: Record<string, {
  icon: React.ReactNode
  bg: string
  color: string
  tag: string
  title: string
  summary: string
  desc: string
  capabilities: { title: string; desc: string }[]
  process: { num: string; title: string; desc: string }[]
  tools: string[]
  industries: { name: string; desc: string }[]
  faqs: { q: string; a: string }[]
  related: string[]
}> = {
  strategy: {
    icon: <LineChart size={28} color="#2563eb" />,
    bg: 'rgba(37,99,235,0.08)', color: '#2563eb', tag: 'Foundation',
    title: 'Data Strategy & Consulting',
    summary: 'Build a clear, actionable data roadmap aligned with your business objectives.',
    desc: 'Many organizations collect data but struggle to extract value from it. We partner with your leadership team to understand your goals, audit your current data landscape, and design a comprehensive strategy that turns data into a strategic asset.',
    capabilities: [
      { title: 'Data Maturity Assessment', desc: 'Evaluate your current data capabilities, identify gaps, and benchmark against industry standards.' },
      { title: 'Technology Stack Design', desc: 'Recommend the right tools, platforms, and architecture for your specific business needs and budget.' },
      { title: 'KPI & Metrics Framework', desc: 'Define the key metrics that matter to your business and build a framework to track them consistently.' },
      { title: 'Governance Framework', desc: 'Establish data ownership, quality standards, and policies across your organization.' },
      { title: 'Implementation Roadmap', desc: 'Create a prioritized, phased roadmap with clear milestones, timelines, and resource requirements.' },
      { title: 'ROI Modelling', desc: 'Build a business case for your data investments with realistic ROI projections and success metrics.' },
    ],
    process: [
      { num: '01', title: 'Stakeholder Interviews', desc: 'We speak with key decision-makers across your business to understand goals, pain points, and priorities.' },
      { num: '02', title: 'Data Landscape Audit', desc: 'We assess your existing data sources, infrastructure, quality, and team capabilities.' },
      { num: '03', title: 'Strategy Design', desc: 'We synthesize findings into a clear, prioritized strategy with short, medium, and long-term initiatives.' },
      { num: '04', title: 'Roadmap Delivery', desc: 'We present the strategy, walk through the roadmap, and ensure full alignment before handover.' },
    ],
    tools: ['dbt', 'Snowflake', 'BigQuery', 'Looker', 'Tableau', 'Power BI', 'Fivetran', 'Airflow'],
    industries: [
      { name: 'Financial Services', desc: 'Risk modeling, regulatory reporting, and customer analytics.' },
      { name: 'Retail & E-commerce', desc: 'Customer journey, inventory, and pricing optimization.' },
      { name: 'Healthcare', desc: 'Patient outcomes, operational efficiency, and compliance.' },
      { name: 'Technology', desc: 'Product analytics, growth, and infrastructure scaling.' },
    ],
    faqs: [
      { q: 'How long does a strategy engagement take?', a: 'Typically 4–6 weeks from kickoff to final roadmap delivery, including stakeholder interviews, audit, and workshops.' },
      { q: 'Do we need to have existing data infrastructure?', a: 'Not at all. We work with businesses at every stage — from zero data infrastructure to complex multi-system environments.' },
      { q: 'What does the output look like?', a: 'A comprehensive strategy document, prioritized roadmap, and a 60-minute executive presentation session.' },
      { q: 'Can you help us get internal buy-in?', a: 'Absolutely. We can join leadership presentations and help you build the internal case for data investment.' },
    ],
    related: ['engineering', 'bi', 'governance'],
  },
  engineering: {
    icon: <Database size={28} color="#0891b2" />,
    bg: 'rgba(8,145,178,0.08)', color: '#0891b2', tag: 'Infrastructure',
    title: 'Data Engineering',
    summary: 'Scalable, reliable data infrastructure that powers your entire analytics ecosystem.',
    desc: 'Bad data infrastructure is the silent killer of analytics initiatives. We design and build robust data pipelines, warehouses, and lakes that ensure your data is clean, timely, and accessible to everyone who needs it.',
    capabilities: [
      { title: 'ETL/ELT Pipeline Development', desc: 'Build reliable pipelines that move, transform, and load data from any source to any destination.' },
      { title: 'Data Warehouse Design', desc: 'Design and build scalable cloud data warehouses optimized for analytics and reporting.' },
      { title: 'Real-Time Streaming', desc: 'Architect event-driven streaming pipelines for real-time data processing and analytics.' },
      { title: 'Data Quality Monitoring', desc: 'Implement automated testing and monitoring to catch data issues before they reach your reports.' },
      { title: 'Cloud Infrastructure', desc: 'Set up and optimize cloud infrastructure on AWS, GCP, or Azure for your data workloads.' },
      { title: 'API & System Integrations', desc: 'Connect all your tools and systems so data flows seamlessly across your entire stack.' },
    ],
    process: [
      { num: '01', title: 'Architecture Design', desc: 'We design a scalable, cost-effective data architecture based on your current and future needs.' },
      { num: '02', title: 'Pipeline Development', desc: 'Our engineers build and test all pipelines with a focus on reliability, observability, and performance.' },
      { num: '03', title: 'Quality & Testing', desc: 'We implement automated data quality checks and comprehensive testing before going live.' },
      { num: '04', title: 'Deployment & Handover', desc: 'We deploy to production, document everything, and train your team on operations and maintenance.' },
    ],
    tools: ['Apache Kafka', 'Airflow', 'dbt', 'Spark', 'Snowflake', 'BigQuery', 'Redshift', 'Fivetran', 'AWS', 'GCP', 'Azure'],
    industries: [
      { name: 'FinTech', desc: 'High-frequency transaction processing and real-time fraud detection.' },
      { name: 'E-commerce', desc: 'Order management, inventory sync, and customer behavior pipelines.' },
      { name: 'SaaS', desc: 'Product telemetry, usage analytics, and billing data infrastructure.' },
      { name: 'Media', desc: 'Content performance, ad tech, and audience data pipelines.' },
    ],
    faqs: [
      { q: 'Which cloud platforms do you work with?', a: 'We work with AWS, Google Cloud, and Azure — as well as hybrid and on-premise environments where needed.' },
      { q: 'Can you migrate our existing pipelines?', a: 'Yes. We regularly take over and modernize legacy data infrastructure, ensuring zero data loss and minimal downtime.' },
      { q: 'Do you provide ongoing maintenance?', a: 'We offer post-delivery support packages ranging from ad-hoc to fully managed monthly retainers.' },
      { q: 'How do you ensure pipeline reliability?', a: 'We implement monitoring, alerting, automated retries, and SLA tracking so you always know the health of your pipelines.' },
    ],
    related: ['strategy', 'bi', 'analytics'],
  },
  bi: {
    icon: <BarChart3 size={28} color="#7c3aed" />,
    bg: 'rgba(124,58,237,0.08)', color: '#7c3aed', tag: 'Visibility',
    title: 'Business Intelligence & Dashboards',
    summary: 'Interactive dashboards that give every team the insights they need, instantly.',
    desc: 'We build beautiful, intuitive dashboards and reports that make data accessible to everyone in your organization — from the C-suite to frontline teams. Using tools like Tableau, Power BI, Looker, or custom-built solutions.',
    capabilities: [
      { title: 'Executive Dashboards', desc: 'High-level KPI views for leadership with drill-down capabilities and automated alerts.' },
      { title: 'Operational Reporting', desc: 'Day-to-day operational reports that keep teams informed and aligned on performance.' },
      { title: 'Self-Service BI', desc: 'Empower non-technical users to explore data and answer their own questions independently.' },
      { title: 'KPI Tracking Systems', desc: 'Define, track, and visualize the metrics that matter most across every department.' },
      { title: 'Automated Reporting', desc: 'Schedule and distribute reports automatically so stakeholders always have fresh data.' },
      { title: 'Data Visualization Design', desc: 'Custom, beautifully designed visualizations that communicate insights clearly and compellingly.' },
    ],
    process: [
      { num: '01', title: 'Requirements Workshop', desc: 'We run structured sessions with each stakeholder group to understand their data questions and reporting needs.' },
      { num: '02', title: 'Data Modeling', desc: 'We design the semantic layer and data models that power accurate, consistent reporting across all dashboards.' },
      { num: '03', title: 'Dashboard Development', desc: 'We build, iterate, and refine dashboards based on continuous feedback from your team.' },
      { num: '04', title: 'Training & Handover', desc: 'We train your team, document everything, and set up governance for ongoing dashboard management.' },
    ],
    tools: ['Tableau', 'Power BI', 'Looker', 'Metabase', 'Superset', 'dbt', 'Snowflake', 'BigQuery'],
    industries: [
      { name: 'Retail', desc: 'Sales performance, inventory, and customer loyalty analytics.' },
      { name: 'Healthcare', desc: 'Clinical outcomes, staffing, and financial performance dashboards.' },
      { name: 'Financial Services', desc: 'Portfolio, risk, and compliance reporting.' },
      { name: 'Manufacturing', desc: 'Production, quality, and supply chain visibility dashboards.' },
    ],
    faqs: [
      { q: 'Which BI tools do you work with?', a: 'Tableau, Power BI, Looker, Metabase, Superset, and custom React-based dashboards depending on your needs and budget.' },
      { q: 'Can non-technical users manage dashboards themselves?', a: 'Yes — we design for self-service from day one, including training sessions and documentation for your team.' },
      { q: 'How do you ensure data accuracy in dashboards?', a: 'We implement data validation layers and automated testing so every number you see is verified and trustworthy.' },
      { q: 'Can you connect to our existing data sources?', a: 'Yes — we connect to databases, spreadsheets, CRMs, ERPs, APIs, and virtually any data source your business uses.' },
    ],
    related: ['engineering', 'analytics', 'strategy'],
  },
  analytics: {
    icon: <Brain size={28} color="#d97706" />,
    bg: 'rgba(217,119,6,0.08)', color: '#d97706', tag: 'Intelligence',
    title: 'Advanced Analytics & Data Science',
    summary: 'Predictive models and statistical analysis that give you a competitive edge.',
    desc: 'Move beyond descriptive analytics into predictive and prescriptive intelligence. Our data scientists build custom models that forecast trends, identify opportunities, and surface insights that drive measurable business outcomes.',
    capabilities: [
      { title: 'Predictive Modeling', desc: 'Build models that forecast future outcomes — from demand to churn to revenue — with measurable accuracy.' },
      { title: 'Customer Segmentation', desc: 'Identify distinct customer groups and tailor strategies to maximize value from each segment.' },
      { title: 'Churn Prediction', desc: 'Detect at-risk customers before they leave, enabling proactive retention strategies.' },
      { title: 'Demand Forecasting', desc: 'Accurately predict future demand to optimize inventory, staffing, and operations.' },
      { title: 'A/B Testing Frameworks', desc: 'Design and analyze experiments that validate hypotheses and guide data-driven product decisions.' },
      { title: 'Statistical Analysis', desc: 'Rigorous statistical methods to uncover patterns, correlations, and causal relationships in your data.' },
    ],
    process: [
      { num: '01', title: 'Problem Framing', desc: 'We translate your business question into a well-defined data science problem with clear success criteria.' },
      { num: '02', title: 'Data Exploration', desc: 'We explore, clean, and prepare your data — identifying patterns, anomalies, and key features.' },
      { num: '03', title: 'Model Development', desc: 'We build, validate, and refine models until they meet your performance requirements.' },
      { num: '04', title: 'Deployment & Monitoring', desc: 'We deploy models to production and set up monitoring to ensure continued accuracy over time.' },
    ],
    tools: ['Python', 'scikit-learn', 'TensorFlow', 'PyTorch', 'R', 'Spark MLlib', 'MLflow', 'dbt', 'Snowflake'],
    industries: [
      { name: 'E-commerce', desc: 'Product recommendations, price optimization, and lifetime value modeling.' },
      { name: 'Financial Services', desc: 'Credit scoring, fraud detection, and portfolio risk modeling.' },
      { name: 'Healthcare', desc: 'Patient risk stratification, readmission prediction, and clinical decision support.' },
      { name: 'Telecom', desc: 'Churn prediction, network optimization, and customer lifetime value.' },
    ],
    faqs: [
      { q: 'How much data do we need to get started?', a: 'It depends on the use case, but we can typically start building meaningful models with 6–12 months of historical data.' },
      { q: 'Do you build models in Python or R?', a: 'Primarily Python (scikit-learn, PyTorch, TensorFlow), but we adapt to your existing stack and team preferences.' },
      { q: 'How do you measure model performance?', a: 'We define success metrics upfront with you and provide ongoing monitoring dashboards post-deployment.' },
      { q: 'Who owns the models after delivery?', a: 'You do — completely. We document everything and transfer full ownership, including code, training data, and documentation.' },
    ],
    related: ['ai', 'bi', 'engineering'],
  },
  ai: {
    icon: <Zap size={28} color="#db2777" />,
    bg: 'rgba(219,39,119,0.08)', color: '#db2777', tag: 'Automation',
    title: 'AI & Automation Solutions',
    summary: 'Intelligent automation that eliminates manual work and unlocks new capabilities.',
    desc: 'We design and deploy AI-powered solutions tailored to your specific business workflows — from natural language processing and computer vision to generative AI applications and intelligent process automation.',
    capabilities: [
      { title: 'Custom ML Model Development', desc: 'End-to-end development of machine learning models tailored to your specific business problem.' },
      { title: 'LLM Integration & Fine-Tuning', desc: 'Integrate large language models into your products and workflows, with fine-tuning for your domain.' },
      { title: 'Process Automation', desc: 'Automate repetitive, rule-based workflows to free your team for higher-value work.' },
      { title: 'Document AI', desc: 'Extract, classify, and process information from documents, forms, and unstructured text at scale.' },
      { title: 'Recommendation Systems', desc: 'Build personalization engines that recommend the right product, content, or action to every user.' },
      { title: 'Conversational AI', desc: 'Design and deploy intelligent chatbots and virtual assistants for customer service and internal use.' },
    ],
    process: [
      { num: '01', title: 'Use Case Validation', desc: 'We assess whether AI is the right solution, define scope, and build the business case before any development begins.' },
      { num: '02', title: 'Data & Architecture', desc: 'We design the data pipeline, model architecture, and infrastructure required for your AI solution.' },
      { num: '03', title: 'Build & Iterate', desc: 'We develop in sprints with frequent demos — ensuring the solution solves the real problem before scaling.' },
      { num: '04', title: 'Deploy & Monitor', desc: 'We deploy to production with full monitoring, alerting, and a plan for model retraining over time.' },
    ],
    tools: ['OpenAI', 'Anthropic', 'LangChain', 'HuggingFace', 'Python', 'PyTorch', 'FastAPI', 'AWS SageMaker', 'Vertex AI'],
    industries: [
      { name: 'Legal', desc: 'Contract analysis, document review, and legal research automation.' },
      { name: 'Financial Services', desc: 'Fraud detection, document processing, and intelligent compliance workflows.' },
      { name: 'Healthcare', desc: 'Clinical note processing, prior auth automation, and patient triage.' },
      { name: 'E-commerce', desc: 'Product recommendations, dynamic pricing, and AI-powered customer support.' },
    ],
    faqs: [
      { q: 'Do you work with OpenAI / GPT models?', a: 'Yes — we work with OpenAI, Anthropic, Google, and open-source models depending on your use case, budget, and data privacy requirements.' },
      { q: 'How do you handle data privacy in AI projects?', a: 'We design all AI systems with privacy by default, including data anonymization, access controls, and compliance with GDPR/CCPA.' },
      { q: 'What is a realistic timeline for an AI project?', a: 'A focused MVP typically takes 6–10 weeks. Full production deployment with monitoring averages 12–16 weeks.' },
      { q: 'How do you prevent AI hallucinations or errors?', a: 'We implement validation layers, human-in-the-loop checks, and confidence thresholds appropriate to your use case and risk tolerance.' },
    ],
    related: ['analytics', 'engineering', 'governance'],
  },
  governance: {
    icon: <Shield size={28} color="#059669" />,
    bg: 'rgba(5,150,105,0.08)', color: '#059669', tag: 'Trust',
    title: 'Data Governance & Security',
    summary: 'Enterprise-grade frameworks to protect, manage, and trust your data.',
    desc: 'Data is only valuable if it can be trusted. We implement comprehensive governance frameworks that ensure data quality, compliance, and security across your entire organization.',
    capabilities: [
      { title: 'Data Catalog Implementation', desc: 'Build a searchable inventory of all your data assets so every team knows what data exists and where to find it.' },
      { title: 'Access Control & Permissions', desc: 'Implement role-based access controls so the right people have the right access — and nothing more.' },
      { title: 'Regulatory Compliance', desc: 'Implement the technical controls and documentation required for GDPR, CCPA, HIPAA, and other regulations.' },
      { title: 'Data Lineage Tracking', desc: 'Track data from source to report so you can always answer where did this number come from.' },
      { title: 'Quality Monitoring', desc: 'Automated data quality checks and alerting to catch and fix issues before they reach your business.' },
      { title: 'Security Hardening', desc: 'Audit and strengthen your data infrastructure against vulnerabilities, breaches, and unauthorized access.' },
    ],
    process: [
      { num: '01', title: 'Governance Assessment', desc: 'We audit your current data governance posture — identifying risks, gaps, and compliance exposures.' },
      { num: '02', title: 'Framework Design', desc: 'We design a governance framework tailored to your organization — policies, roles, and processes.' },
      { num: '03', title: 'Implementation', desc: 'We deploy the technical controls, catalog tools, and monitoring systems that enforce your governance framework.' },
      { num: '04', title: 'Training & Adoption', desc: 'We train your team on governance processes and help embed data stewardship into your culture.' },
    ],
    tools: ['Collibra', 'Alation', 'DataHub', 'Apache Atlas', 'dbt', 'Monte Carlo', 'Great Expectations', 'AWS Macie'],
    industries: [
      { name: 'Financial Services', desc: 'SOX compliance, data lineage for regulatory reporting, and audit trails.' },
      { name: 'Healthcare', desc: 'HIPAA compliance, PHI protection, and clinical data governance.' },
      { name: 'Retail', desc: 'Customer data privacy, GDPR compliance, and consent management.' },
      { name: 'Government', desc: 'Data sovereignty, security classification, and public sector compliance.' },
      { name: 'Supply Chain', desc: 'End-to-end data visibility, supplier compliance, and logistics data governance.' },
    ],
    faqs: [
      { q: 'Do you help with GDPR compliance?', a: 'Yes — we implement the technical controls, data mapping, and documentation required for GDPR, CCPA, and other major regulations.' },
      { q: 'What data catalog tools do you use?', a: 'We work with Alation, Collibra, DataHub, and open-source alternatives depending on your scale and budget.' },
      { q: 'How long does a governance implementation take?', a: 'Initial frameworks are typically in place within 6–8 weeks. Full organizational adoption is an ongoing process we support.' },
      { q: 'Do you help with data breach response?', a: 'We can help you build an incident response plan and the technical controls to detect and contain breaches quickly.' },
    ],
    related: ['strategy', 'engineering', 'ai'],
  },
}

const relatedMeta: Record<string, { icon: React.ReactNode; bg: string; color: string }> = {
  strategy: { icon: <LineChart size={20} color="#2563eb" />, bg: 'rgba(37,99,235,0.08)', color: '#2563eb' },
  engineering: { icon: <Database size={20} color="#0891b2" />, bg: 'rgba(8,145,178,0.08)', color: '#0891b2' },
  bi: { icon: <BarChart3 size={20} color="#7c3aed" />, bg: 'rgba(124,58,237,0.08)', color: '#7c3aed' },
  analytics: { icon: <Brain size={20} color="#d97706" />, bg: 'rgba(217,119,6,0.08)', color: '#d97706' },
  ai: { icon: <Zap size={20} color="#db2777" />, bg: 'rgba(219,39,119,0.08)', color: '#db2777' },
  governance: { icon: <Shield size={20} color="#059669" />, bg: 'rgba(5,150,105,0.08)', color: '#059669' },
}

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>()
  const service = id ? allServices[id] : null

  if (!service) return <Navigate to="/services" replace />

  return (
    <div style={{ background: '#fff', paddingTop: '64px' }}>

      {/* HERO */}
      <section style={{
        padding: 'clamp(3rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem) clamp(2rem, 3vw, 3rem)',
        borderBottom: '1px solid var(--border)',
        background: 'linear-gradient(180deg, #f7f9ff 0%, #fff 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: `radial-gradient(ellipse, ${service.color}10 0%, transparent 70%)`, pointerEvents: 'none' }} />

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2rem', flexWrap: 'wrap' }}
        >
          <Link to="/services" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >Services</Link>
          <ChevronRight size={13} color="var(--muted)" />
          <span style={{ fontSize: '13px', color: 'var(--text)', fontWeight: 500 }}>{service.title}</span>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'flex-start', maxWidth: '1100px' }}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: service.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {service.icon}
              </div>
              <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: service.color, background: `${service.color}12`, padding: '5px 12px', borderRadius: '100px' }}>{service.tag}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1rem' }}
            >{service.title}</motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              style={{ fontSize: '15px', color: service.color, fontWeight: 500, marginBottom: '0.75rem' }}
            >{service.summary}</motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, maxWidth: '640px', marginBottom: '2.5rem' }}
            >{service.desc}</motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
            >
              <Link to="/book-consultation">
                <button className="btn-primary" style={{ fontSize: '14px', padding: '12px 24px' }}>
                  Schedule a Consultation <ArrowRight size={14} />
                </button>
              </Link>
              <Link to="/pricing">
                <button className="btn-ghost" style={{ fontSize: '14px', padding: '12px 24px' }}>
                  View Pricing <ArrowUpRight size={14} />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}
          >
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem' }}>At a Glance</p>
            {[
              { label: 'Typical Timeline', val: '4–16 weeks' },
              { label: 'Team Size', val: '2–5 experts' },
              { label: 'Engagement', val: 'Project / Retainer' },
              { label: 'Industries', val: '10+ sectors' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{item.label}</span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}>{item.val}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)', borderBottom: '1px solid var(--border)' }}>
        <Reveal>
          <motion.div variants={fadeUp} style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>Core Capabilities</p>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1.2 }}>What's Included</h2>
          </motion.div>

          <div className="capabilities-grid">
            {service.capabilities.map((cap) => (
              <motion.div key={cap.title} variants={fadeUp}
                style={{ background: '#fff', padding: 'clamp(1.25rem, 2vw, 2rem)', transition: 'background 0.2s' }}
                whileHover={{ background: '#f7f9ff' }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: service.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <CheckCircle2 size={16} color={service.color} />
                </div>
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>{cap.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section style={{ background: '#0f1623', padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)' }}>
        <Reveal>
          <motion.div variants={fadeUp} style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.5rem' }}>How We Work</p>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.2 }}>Our delivery process</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden' }}>
            {service.process.map((p) => (
              <motion.div key={p.num} variants={fadeUp} style={{ padding: 'clamp(1.25rem, 2vw, 2rem)', background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: service.color, letterSpacing: '0.08em', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>{p.num}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '0.6rem', letterSpacing: '-0.02em' }}>{p.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* TOOLS */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)', borderBottom: '1px solid var(--border)' }}>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(2rem, 4vw, 4rem)', alignItems: 'start' }}>
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>Tools & Technologies</p>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.9rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1.2, marginBottom: '1rem' }}>The stack we work with</h2>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300 }}>
                We are tool-agnostic and work with the best technologies for your specific needs.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignContent: 'flex-start' }}>
              {service.tools.map((tool) => (
                <span key={tool} style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)', background: '#f7f9ff', border: '1px solid var(--border)', padding: '8px 16px', borderRadius: '100px', transition: 'all 0.2s', cursor: 'default' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = service.bg
                    e.currentTarget.style.borderColor = service.color
                    e.currentTarget.style.color = service.color
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#f7f9ff'
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text)'
                  }}
                >{tool}</span>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)', background: '#f7f9ff', borderBottom: '1px solid var(--border)' }}>
        <Reveal>
          <motion.div variants={fadeUp} style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>Industries We Serve</p>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.9rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1.2 }}>Who we work with</h2>
          </motion.div>

          <div className="industries-grid">
            {service.industries.map((ind) => (
              <motion.div key={ind.name} variants={fadeUp}
                style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: 'clamp(1.25rem, 2vw, 1.5rem)', transition: 'all 0.2s' }}
                whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.06)', borderColor: service.color }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: service.color, marginBottom: '0.875rem' }} />
                <h3 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem' }}>{ind.name}</h3>
                <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.6 }}>{ind.desc}</p>
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
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>FAQ</p>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.9rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1.2, marginBottom: '1rem' }}>Common questions</h2>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
                Still have questions? We are happy to answer them on a quick call.
              </p>
              <Link to="/contact">
                <button className="btn-ghost" style={{ fontSize: '13px', padding: '9px 18px' }}>
                  Ask Us Anything <ArrowRight size={13} />
                </button>
              </Link>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>
              {service.faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeUp}
                  style={{ padding: 'clamp(1.25rem, 2vw, 1.5rem) clamp(1.25rem, 2vw, 2rem)', borderBottom: i < service.faqs.length - 1 ? '1px solid var(--border)' : 'none', transition: 'background 0.2s' }}
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

      {/* RELATED SERVICES */}
      <section style={{ padding: 'clamp(2.5rem, 4vw, 4rem) clamp(1.25rem, 4vw, 2.5rem)', background: '#f7f9ff', borderBottom: '1px solid var(--border)' }}>
        <Reveal>
          <motion.div variants={fadeUp} style={{ marginBottom: '2rem' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>Explore More</p>
            <h2 style={{ fontSize: 'clamp(1.3rem, 2vw, 1.7rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1.2 }}>Related services</h2>
          </motion.div>

          <div className="related-grid">
            {service.related.map(relId => {
              const rel = allServices[relId]
              const meta = relatedMeta[relId]
              return (
                <motion.div key={relId} variants={fadeUp}>
                  <Link to={`/services/${relId}`} style={{ display: 'block', padding: 'clamp(1.25rem, 2vw, 1.5rem)', background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = meta.color
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: meta.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.875rem' }}>
                      {meta.icon}
                    </div>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{rel.title}</p>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.5, marginBottom: '1rem' }}>{rel.summary}</p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: meta.color, fontWeight: 500 }}>
                      Learn more <ArrowUpRight size={11} />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="cta-split">
        <div className="cta-split-left" style={{ background: service.color }}>
          <Reveal>
            <motion.p variants={fadeUp} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem' }}>Get Started</motion.p>
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.75rem' }}>
              Ready to get started with {service.title.toLowerCase()}?
            </motion.h2>
            <motion.div variants={fadeUp}>
              <Link to="/book-consultation">
                <button style={{ background: '#fff', color: service.color, border: 'none', padding: '11px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'opacity 0.2s', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Schedule a Free Consultation <ArrowRight size={14} />
                </button>
              </Link>
            </motion.div>
          </Reveal>
        </div>

        <div className="cta-split-right" style={{ background: '#fff' }}>
          <Reveal>
            <motion.p variants={fadeUp} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem' }}>Other options</motion.p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { label: 'View all services', path: '/services' },
                { label: 'See pricing plans', path: '/pricing' },
                { label: 'Read about us', path: '/about' },
              ].map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <Link to={item.path} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 0', borderBottom: '1px solid var(--border)', color: 'var(--text)', fontSize: '14px', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = service.color)}
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