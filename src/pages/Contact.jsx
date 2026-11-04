import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, MapPin, Send, MessageSquare, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { personalInfo } from '../data/personalInfo'
import { socialLinks } from '../data/socialLinks'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you'd send this to a backend or use a service like Formspree, EmailJS, etc.
    alert('Thanks for reaching out! This is a demo form. In a production app, this would send an email.')
    e.target.reset()
  }

  return (
    <>
      {/* Page Header */}
      <section style={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 0 60px',
        position: 'relative',
        overflow: 'hidden'
      }} aria-labelledby="contact-title">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
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
              marginBottom: '24px'
            }}>
              Get In Touch
            </span>
            <h1 id="contact-title" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '16px',
              fontFamily: 'var(--font-display)'
            }}>
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7
            }}>
              Have a project in mind? Want to collaborate? Or just want to say hi?
              I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section" aria-labelledby="contact-methods-title">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="contact-methods-title" style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '24px' }}>
                Ways to Reach Me
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '40px' }}>
                I'm always open to discussing new projects, creative ideas, or opportunities.
                Feel free to reach out through any of the channels below.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { key: 'email', icon: Mail, label: 'Email', value: personalInfo.email, href: socialLinks.email },
                  { key: 'github', icon: Github, label: 'GitHub', value: '@GabeEyo', href: socialLinks.github },
                  { key: 'linkedin', icon: Linkedin, label: 'LinkedIn', value: 'Gabriel Eyo', href: socialLinks.linkedin },
                  { key: 'twitter', icon: Twitter, label: 'Twitter', value: '@gabe_eyo', href: socialLinks.twitter },
                ].map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    target={item.key !== 'email' ? '_blank' : '_self'}
                    rel={item.key !== 'email' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '20px 24px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-primary)',
                      borderRadius: 'var(--radius-lg)',
                      textDecoration: 'none',
                      transition: 'all var(--transition-base)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-primary)'
                      e.currentTarget.style.background = 'var(--bg-card-hover)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-primary)'
                      e.currentTarget.style.background = 'var(--bg-card)'
                    }}
                  >
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--accent-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <item.icon size={22} style={{ color: 'var(--text-inverse)' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '2px' }}>{item.label}</div>
                      <div style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.value}</div>
                    </div>
                    <ExternalLink size={20} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                  </motion.a>
                ))}
              </div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '16px' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={22} style={{ color: '#f59e0b' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '2px' }}>Location</div>
                  <div style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)' }}>Ikot Abasi, Akwa Ibom, Nigeria</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Open to remote opportunities worldwide</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-xl)', padding: '40px', backdropFilter: 'blur(20px)' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '8px' }}>Send a Message</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Fill out the form and I'll get back to you as soon as possible.</p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label htmlFor="name" className="label">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="input"
                        placeholder="Your name"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="input"
                        placeholder="your@email.com"
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="label">Subject</label>
                    <select id="subject" name="subject" className="input" required>
                      <option value="">Select a topic</option>
                      <option value="project">Project Inquiry</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="job">Job Opportunity</option>
                      <option value="freelance">Freelance Work</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="input"
                      rows={5}
                      placeholder="Tell me about your project, idea, or just say hi..."
                      required
                      style={{ resize: 'vertical', minHeight: '120px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', width: 'fit-content' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>

                <p style={{ marginTop: '24px', fontSize: '0.875rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                  Or email me directly at <a href={socialLinks.email} style={{ color: 'var(--accent-primary)' }}>{personalInfo.email}</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }} aria-labelledby="social-title">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="social-title" className="section-title" style={{ marginBottom: '16px' }}>Connect Elsewhere</h2>
            <p className="section-subtitle" style={{ marginBottom: '40px' }}>Follow my journey and see what I'm building</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              {Object.entries(socialLinks).map(([key, url]) => url && (
                <motion.a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', minWidth: '180px', justifyContent: 'center' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.05, borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {key === 'github' && <Github size={20} />}
                  {key === 'linkedin' && <Linkedin size={20} />}
                  {key === 'twitter' && <Twitter size={20} />}
                  {key === 'email' && <Mail size={20} />}
                  <span style={{ textTransform: 'capitalize' }}>{key}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-form {
            padding: 24px !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}