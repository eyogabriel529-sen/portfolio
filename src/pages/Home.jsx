import { motion } from 'framer-motion'
import { ArrowRight, Github, ExternalLink, Code, Palette, Zap, Brain, Film, Image, Layout, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { personalInfo } from '../data/personalInfo'
import { socialLinks } from '../data/socialLinks'
import { skills } from '../data/skills'
import { projects } from '../data/projects'

// Featured projects for home page (max 3)
const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

// Skills for home page preview (top 6)
const previewSkills = [
  ...skills.frontend.slice(0, 3),
  ...skills.design.slice(0, 2),
  ...skills.tools.slice(0, 1)
]

const interestItems = [
  { icon: Code, label: 'Frontend Development', color: '#61dafb' },
  { icon: Brain, label: 'AI & Machine Learning', color: '#f59e0b' },
  { icon: Palette, label: 'UI/UX Design', color: '#f50057' },
  { icon: Zap, label: 'Creative Technology', color: '#a855f7' },
  { icon: Film, label: 'Video Editing', color: '#ec4899' },
  { icon: Image, label: 'Photo Editing', color: '#06b6d4' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{
        minHeight: 'calc(100vh - var(--header-height))',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0 80px',
        position: 'relative',
        overflow: 'hidden'
      }} aria-labelledby="hero-title">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* Hero Content */}
          <div style={{ maxWidth: '600px' }}>
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
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)', animation: 'pulse 2s infinite' }} />
                {personalInfo.hero.greeting}
              </span>
            </motion.div>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '24px',
                fontFamily: 'var(--font-display)'
              }}
            >
              {personalInfo.preferredName}
              <br />
              <span className="text-gradient" style={{ fontWeight: 700 }}>{personalInfo.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
              style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '32px',
                maxWidth: '540px'
              }}
            >
              {personalInfo.hero.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}
            >
              <Link
                to={personalInfo.hero.ctaLink}
                className="btn btn-primary"
                style={{ display: 'inline-flex' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {personalInfo.hero.ctaText}
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="btn btn-secondary"
                style={{ display: 'inline-flex' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
              style={{ display: 'flex', gap: '16px' }}
            >
              {Object.entries(socialLinks).map(([key, url]) => url && (
                <motion.a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-icon"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-primary)',
                    color: 'var(--text-secondary)',
                    transition: 'all var(--transition-fast)'
                  }}
                  whileHover={{ scale: 1.1, borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)', y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
                >
                  {key === 'github' && <Github size={20} />}
                  {key === 'linkedin' && <Linkedin size={20} />}
                  {key === 'twitter' && <Twitter size={20} />}
                  {key === 'email' && <Film size={20} />}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              aspectRatio: '1',
              maxWidth: '480px',
              margin: '0 auto',
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(145deg, var(--bg-card), var(--bg-tertiary))',
              border: '1px solid var(--border-primary)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)'
            }}>
              {/* Code Editor Mockup */}
              <div style={{ padding: '16px', borderBottom: '1px solid var(--border-primary)', background: 'rgba(0, 0, 0, 0.2)', display: 'flex', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28ca42' }} />
              </div>
              <div style={{ padding: '32px', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-primary)', overflow: 'auto', height: 'calc(100% - 44px)' }}>
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
{`<span style="color: var(--accent-secondary)">const</span> developer = <span style="color: var(--accent-primary)">{
</span>  <span style="color: var(--accent-tertiary)">name</span>: <span style="color: var(--text-secondary)">"Gabe"</span>,
<span style="color: var(--accent-primary)">  role</span>: <span style="color: var(--text-secondary)">"Software Engineering Student"</span>,
<span style="color: var(--accent-primary)">  focus</span>: [<span style="color: var(--text-secondary)">"Frontend"</span>, <span style="color: var(--text-secondary)">"React"</span>, <span style="color: var(--text-secondary)">"UI/UX"</span>],
<span style="color: var(--accent-primary)">  learning</span>: [<span style="color: var(--text-secondary)">"AI/ML"</span>, <span style="color: var(--text-secondary)">"Next.js"</span>, <span style="color: var(--text-secondary)">"Three.js"</span>],
<span style="color: var(--accent-primary)">  builds</span>: <span style="color: var(--accent-tertiary)">useful</span> <span style="color: var(--text-secondary)">digital experiences</span>
<span style="color: var(--accent-primary)">}</span>

<span style="color: var(--accent-secondary)">console.log</span>(<span style="color: var(--text-secondary)">"Building the future..."</span>)<span style="color: var(--accent-primary)">;</span>`}
                </pre>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute', top: '-20px', right: '-20px' }}
            >
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-lg)',
                padding: '16px 20px',
                backdropFilter: 'blur(20px)',
                boxShadow: 'var(--shadow-lg)',
                minWidth: '200px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e' }} />
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Currently Building</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>ClassIq - Role-based auth system</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{ position: 'absolute', bottom: '-20px', left: '-20px' }}
            >
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-lg)',
                padding: '16px 20px',
                backdropFilter: 'blur(20px)',
                boxShadow: 'var(--shadow-lg)',
                minWidth: '200px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', boxShadow: '0 0 10px #f59e0b' }} />
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Learning</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>Next.js, Three.js, ML</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }} aria-labelledby="interests-title">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="interests-title" className="section-title">What I'm Into</h2>
            <p className="section-subtitle">Technologies and creative pursuits that spark my curiosity</p>
          </motion.div>

          <div className="grid-auto-fit" style={{ marginTop: '40px' }}>
            {interestItems.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  padding: '32px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: 'var(--radius-lg)',
                  backdropFilter: 'blur(20px)',
                  transition: 'all var(--transition-base)',
                  cursor: 'default'
                }}
                whileHover={{ y: -8, borderColor: item.color, boxShadow: `0 20px 40px ${item.color}20` }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: `${item.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px' }}>{item.label}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', margin: 0 }}>Exploring and building in this space</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section" aria-labelledby="featured-title">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="featured-title" className="section-title" style={{ marginBottom: '8px' }}>Featured Projects</h2>
              <p className="section-subtitle" style={{ maxWidth: 'none', textAlign: 'left', margin: 0 }}>A selection of my favorite work</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link to="/projects" className="btn btn-secondary" style={{ display: 'inline-flex' }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                View All Projects
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          <div className="grid-auto-fit">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }} aria-labelledby="skills-title">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="skills-title" className="section-title">Technical Skills</h2>
            <p className="section-subtitle">Technologies I work with regularly</p>
          </motion.div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '40px' }}>
            {previewSkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
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
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent-gradient)'
                }} />
                {skill.name}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginTop: '32px', textAlign: 'center' }}
          >
            <Link to="/about" className="btn btn-ghost" style={{ display: 'inline-flex', gap: '8px' }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              View All Skills
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-title">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="cta-title" className="section-title" style={{ marginBottom: '16px' }}>Let's Build Something Together</h2>
            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex' }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Start a Conversation
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @media (max-width: 768px) {
          .hero .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero .hero-content {
            max-width: 100% !important;
          }
          .hero .social-links {
            justify-content: center !important;
          }
          .hero-visual {
            max-width: 100% !important;
          }
        }
      `}</style>
    </>
  )
}

// Project Card Component
function ProjectCard({ project, index }) {
  const statusColors = {
    'Completed': '#22c55e',
    'In Progress': '#f59e0b',
    'Planned': '#6366f1',
    'Archived': '#9ca3af'
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card card-interactive"
      onClick={() => window.open(project.live, '_blank', 'noopener,noreferrer')}
      style={{ cursor: 'pointer' }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') window.open(project.live, '_blank', 'noopener,noreferrer') }}
      aria-label={`View ${project.title} - ${project.shortDescription}`}
    >
      {/* Project Image Placeholder */}
      <div style={{
        aspectRatio: '16/10',
        background: 'linear-gradient(135deg, var(--bg-tertiary), var(--bg-card))',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--accent-gradient)',
          opacity: 0.1
        }}>
          <Code size={48} style={{ color: 'var(--accent-primary)' }} />
        </div>
        {project.featured && (
          <span style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            padding: '4px 12px',
            background: 'var(--accent-tertiary)',
            color: 'var(--text-inverse)',
            fontSize: '0.75rem',
            fontWeight: 600,
            borderRadius: 'var(--radius-full)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Featured
          </span>
        )}
        <span style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          padding: '4px 10px',
          background: statusColors[project.status] || '#9ca3af',
          color: 'var(--text-inverse)',
          fontSize: '0.7rem',
          fontWeight: 600,
          borderRadius: 'var(--radius-full)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {project.status}
        </span>
      </div>

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '4px' }}>{project.title}</h3>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>{project.category}</span>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0, flex: 1 }}>
          {project.shortDescription}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.technologies.slice(0, 4).map(tech => (
            <span key={tech} style={{
              fontSize: '0.7rem',
              fontWeight: 500,
              padding: '4px 10px',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.03em'
            }}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 500,
              padding: '4px 10px',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--accent-primary)'
            }}>
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', paddingTop: '8px', borderTop: '1px solid var(--border-primary)' }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ flex: 1, padding: '10px 16px', fontSize: '0.875rem' }}
              onClick={(e) => e.stopPropagation()}
              aria-label={`View live demo of ${project.title}`}
            >
              Live Demo
              <ExternalLink size={16} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1, padding: '10px 16px', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              onClick={(e) => e.stopPropagation()}
              aria-label={`View source code of ${project.title}`}
            >
              <Github size={16} />
              Code
            </a>
          )}
          {!project.live && !project.github && (
            <span style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 16px', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              Private Project
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}