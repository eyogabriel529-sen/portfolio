import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { socialLinks } from '../data/socialLinks'
import { useState, useEffect } from 'react'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

export default function Layout() {
  const { theme, toggleTheme, mounted } = useTheme()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  if (!mounted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="animate-pulse" style={{ color: 'var(--text-muted)' }}>Loading...</div>
      </div>
    )
  }

  return (
    <>
      {/* Background Effects */}
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-gradient-orb bg-gradient-orb-1" aria-hidden="true" />
      <div className="bg-gradient-orb bg-gradient-orb-2" aria-hidden="true" />
      <div className="bg-gradient-orb bg-gradient-orb-3" aria-hidden="true" />

      {/* Header */}
      <header
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 'var(--z-fixed)',
          height: 'var(--header-height)',
          background: isScrolled ? 'rgba(10, 15, 26, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-primary)' : 'none',
          transition: 'all var(--transition-base)'
        }}
        role="banner"
      >
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <NavLink
            to="/"
            className="logo"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 700,
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textDecoration: 'none',
              zIndex: 'var(--z-dropdown)'
            }}
            onClick={handleNavClick}
            aria-label="Gabe - Home"
          >
            Gabe
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} role="navigation" aria-label="Main navigation">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={({ isActive }) => ({
                  padding: '10px 16px',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                  position: 'relative',
                  background: isActive ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
                  '&:hover': {
                    color: 'var(--text-primary)',
                    background: 'var(--bg-tertiary)'
                  }
                })}
                onClick={handleNavClick}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
              </NavLink>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-icon"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-primary)',
                color: 'var(--text-secondary)',
                marginLeft: '8px'
              }}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              padding: '8px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              color: 'var(--text-primary)',
              zIndex: 'var(--z-dropdown)'
            }}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                position: 'absolute',
                top: 'var(--header-height)',
                left: 0,
                right: 0,
                background: 'rgba(10, 15, 26, 0.98)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid var(--border-primary)',
                padding: '20px var(--container-padding)',
                overflow: 'hidden',
                zIndex: 'var(--z-dropdown) - 1'
              }}
              role="navigation"
              aria-label="Mobile navigation"
            >
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {navItems.map(item => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    style={({ isActive }) => ({
                      padding: '14px 16px',
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)',
                      borderRadius: 'var(--radius-md)',
                      textDecoration: 'none',
                      transition: 'all var(--transition-fast)',
                      background: isActive ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
                      border: isActive ? '1px solid rgba(34, 211, 238, 0.2)' : 'none',
                      '&:hover': {
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-primary)'
                      }
                    })}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-primary)' }}>
                  <button
                    onClick={toggleTheme}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-primary)',
                      borderRadius: 'var(--radius-md)',
                      textAlign: 'left',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main
        id="main-content"
        style={{ paddingTop: 'var(--header-height)', minHeight: '100vh' }}
        role="main"
        tabIndex={-1}
      >
        <Outlet />
      </main>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="btn btn-icon back-to-top"
            style={{
              position: 'fixed',
              bottom: '32px',
              right: '32px',
              zIndex: 'var(--z-sticky)',
              background: 'var(--accent-gradient)',
              color: 'var(--text-inverse)',
              boxShadow: 'var(--shadow-lg)',
              border: 'none'
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 15, stiffness: 200 }}
            aria-label="Scroll to top"
            title="Back to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="footer" style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-primary)',
        padding: '60px 0 32px',
        marginTop: 'auto'
      }} role="contentinfo">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Gabe
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.9375rem' }}>
                Software Engineering student & developer building useful digital experiences through code, creativity, and technology.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '16px' }}>Navigation</h4>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {navItems.map(item => (
                  <a key={item.path} href={item.path} style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', transition: 'color var(--transition-fast)' }} onMouseEnter={e => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '16px' }}>Connect</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {Object.entries(socialLinks).map(([key, url]) => url && (
                  <a key={key} href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', display: 'flex', alignItems: 'center', gap: '10px', transition: 'color var(--transition-fast)' }} onMouseEnter={e => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                    {key === 'github' && <Github size={18} />}
                    {key === 'linkedin' && <Linkedin size={18} />}
                    {key === 'twitter' && <Twitter size={18} />}
                    {key === 'email' && <Mail size={18} />}
                    <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div style={{ paddingTop: '24px', borderTop: '1px solid var(--border-primary)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              © {new Date().getFullYear()} Gabriel Eyo. All rights reserved.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              Built with React, Vite & Framer Motion
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}