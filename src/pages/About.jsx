import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Twitter, Mail, MapPin, GraduationCap, Briefcase, Heart, Award, Code, Palette, Brain, Film, Image, Zap, ArrowRight } from 'lucide-react'
import { personalInfo } from '../data/personalInfo'
import { socialLinks } from '../data/socialLinks'
import { skills } from '../data/skills'
import { skillCategories } from '../data/skills'

export default function About() {
  const { about } = personalInfo

  const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.database,
    ...skills.tools,
    ...skills.design,
    ...skills.learning
  ]

  const tagStyle = {
    padding: '6px 12px',
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border-primary)',
    borderRadius: 'var(--radius-full)',
    fontSize: '0.8rem',
    fontWeight: 500,
    color: 'var(--text-secondary)'
  }

  return (
    <>
      {/* Page Header */}
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 0 80px',
        position: 'relative',
        overflow: 'hidden'
      }} aria-labelledby="about-title">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: 'rgba(34, 211, 238, 0.1)',
              border: '1px solid rgba(34, 211, 238, 0.2)',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--accent-primary)',
              marginBottom: '24px',
              width: 'fit-content'
            }}>
              About Me
            </span>
            <h1 id="about-title" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '24px',
              fontFamily: 'var(--font-display)'
            }}>
              Get to Know <br />
              <span className="text-gradient">Me</span>
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '500px'
            }}>
              {about.background}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* Profile Card */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-xl)',
              padding: '40px',
              backdropFilter: 'blur(20px)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'var(--accent-gradient)', opacity: 0.03 }} />
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'var(--accent-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  color: 'var(--text-inverse)',
                  marginBottom: '20px',
                  boxShadow: 'var(--shadow-glow)'
                }}>
                  {personalInfo.preferredName.charAt(0)}
                </div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '4px' }}>{personalInfo.name}</h2>
                <p style={{ color: 'var(--accent-primary)', fontWeight: 500, marginBottom: '4px' }}>{personalInfo.title}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
                  {about.education.institution} • {about.education.level}
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px'
            }}>
              <StatCard icon={GraduationCap} value={about.education.level} label="Academic Level" color="#61dafb" />
              <StatCard icon={Code} value={allSkills.length} label="Technologies" color="#a855f7" />
              <StatCard icon={Award} value="6+" label="Projects Built" color="#f59e0b" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }} aria-labelledby="journey-title">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="journey-title" className="section-title">My Journey</h2>
            <p className="section-subtitle">How I got here and where I'm headed</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '40px' }}>
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ padding: '32px', background: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'rgba(97, 218, 251, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GraduationCap size={24} style={{ color: '#61dafb' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Education</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                {about.education.degree} at {about.education.institution} ({about.education.level}, {about.education.status})
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span style={tagStyle}>Software Engineering</span>
                <span style={tagStyle}>FUTIA</span>
                <span style={tagStyle}>{about.education.level}</span>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ padding: '32px', background: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Code size={24} style={{ color: '#a855f7' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Development Journey</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                {about.journey}
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Interests & Goals */}
      <section className="section" aria-labelledby="interests-title">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="interests-title" className="section-title">Interests & Aspirations</h2>
            <p className="section-subtitle">What drives me and where I want to go</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
            <InterestColumn
              title="Tech Interests"
              icon={Brain}
              color="#f59e0b"
              items={about.interests}
              delay={0.1}
            />
            <InterestColumn
              title="Career Goals"
              icon={Briefcase}
              color="#6366f1"
              items={about.careerGoals}
              delay={0.2}
            />
            <InterestColumn
              title="Creative Pursuits"
              icon={Palette}
              color="#f50057"
              items={about.creativeInterests}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }} aria-labelledby="skills-title">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="skills-title" className="section-title">Technical Skills</h2>
            <p className="section-subtitle">Technologies I've worked with and continue to explore</p>
          </motion.div>

          <div style={{ marginTop: '40px' }}>
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: category.color }} />
                  {category.label}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {skills[category.key].map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 16px',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-primary)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'var(--text-secondary)',
                        transition: 'all var(--transition-fast)',
                        cursor: 'default'
                      }}
                    >
                      <SkillLevel level={skill.level} color={category.color} />
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section className="section" style={{ textAlign: 'center' }} aria-labelledby="cv-title">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            <h2 id="cv-title" className="section-title" style={{ marginBottom: '16px' }}>Résumé / CV</h2>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              {about.cv.available
                ? 'Download my current résumé to learn more about my experience and skills.'
                : 'My CV is currently being updated. Check back soon or connect with me directly!'}
            </p>
            {about.cv.available ? (
              <a
                href={`/cv/${about.cv.filename}`}
                download={about.cv.filename}
                className="btn btn-primary"
                style={{ display: 'inline-flex', gap: '10px' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} />
                {about.cv.label}
              </a>
            ) : (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                <button className="btn btn-secondary" disabled style={{ opacity: 0.6, cursor: 'not-allowed' }}>
                  <Download size={20} />
                  {about.cv.label} (Coming Soon)
                </button>
                <Link to="/contact" className="btn btn-ghost" style={{ display: 'inline-flex', gap: '8px' }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  Contact Me Instead
                  <ArrowRight size={18} />
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 768px) {
          .about-header .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .about-header .hero-content {
            max-width: 100% !important;
          }
          .quick-stats {
            grid-template-columns: 1fr !important;
          }
          .journey-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}

// Stat Card Component
function StatCard({ icon: Icon, value, label, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      style={{
        padding: '24px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-primary)',
        borderRadius: 'var(--radius-lg)',
        textAlign: 'center',
        backdropFilter: 'blur(20px)'
      }}
    >
      <Icon size={28} style={{ color, marginBottom: '12px' }} />
      <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '4px' }}>{value}</div>
      <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{label}</div>
    </motion.div>
  )
}

// Interest Column Component
function InterestColumn({ title, icon: Icon, color, items, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={{ padding: '32px', background: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={24} style={{ color }} />
        </div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{title}</h3>
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {items.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-secondary)',
              fontSize: '0.9375rem',
              transition: 'all var(--transition-fast)'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: color, flexShrink: 0 }} />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

// Skill Level Indicator
function SkillLevel({ level, color }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map(l => (
        <div
          key={l}
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '2px',
            background: l <= Math.ceil(level / 20) ? color : 'var(--border-primary)',
            boxShadow: l <= Math.ceil(level / 20) ? `0 0 4px ${color}` : 'none'
          }}
        />
      ))}
    </div>
  )
}

