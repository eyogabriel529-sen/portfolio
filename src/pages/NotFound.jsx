import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search, Code } from 'lucide-react'

export default function NotFound() {
  return (
    <div style={{
      minHeight: 'calc(100vh - var(--header-height))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 24px',
      textAlign: 'center'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ maxWidth: '400px' }}
      >
        <motion.div
          animate={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
          style={{ display: 'inline-flex', marginBottom: '24px' }}
        >
          <Code size={80} style={{ color: 'var(--accent-primary)', filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.5))' }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: 'clamp(6rem, 15vw, 12rem)',
            fontWeight: 700,
            fontFamily: 'var(--font-display)',
            lineHeight: 1,
            background: 'var(--accent-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '16px'
          }}
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 600,
            marginBottom: '16px',
            fontFamily: 'var(--font-display)'
          }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: '32px'
          }}
        >
          The page you're looking for doesn't exist or has been moved.
          Don't worry, it happens to the best of us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}
        >
          <Link
            to="/"
            className="btn btn-primary"
            style={{ display: 'inline-flex', gap: '8px' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Home size={20} />
            Back Home
          </Link>
          <Link
            to="/projects"
            className="btn btn-secondary"
            style={{ display: 'inline-flex', gap: '8px' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Search size={20} />
            Browse Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border-primary)' }}
        >
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', marginBottom: '16px' }}>
            Or explore from here:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <Link to="/about" className="btn btn-ghost" style={{ fontSize: '0.875rem' }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>About Me</Link>
            <Link to="/contact" className="btn btn-ghost" style={{ fontSize: '0.875rem' }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Contact</Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating code particles */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: -1, overflow: 'hidden' }}>
        {[1, 2, 3, 4, 5].map(i => (
          <motion.div
            key={i}
            animate={{
              y: [-100, window.innerHeight + 100],
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              opacity: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 5, ease: 'linear' }}
            style={{
              position: 'absolute',
              fontFamily: 'var(--font-mono)',
              fontSize: '1.5rem',
              color: 'var(--accent-primary)',
              opacity: 0.1,
              left: `${Math.random() * 100}%`
            }}
          >
            {['</>', '{ }', '()', '=>', '[]'][i - 1]}
          </motion.div>
        ))}
      </div>
    </div>
  )
}