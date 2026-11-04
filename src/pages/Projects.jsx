import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Code, Filter, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects, projectCategories, projectStatuses } from '../data/projects'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    return projects
      .filter(project => {
        const matchesCategory = activeCategory === 'All' || project.category === activeCategory
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
        return matchesCategory && matchesSearch
      })
      .sort((a, b) => a.order - b.order)
  }, [activeCategory, searchQuery])

  const featuredProjects = useMemo(() => projects.filter(p => p.featured).sort((a, b) => a.order - b.order), [])

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
      }} aria-labelledby="projects-title">
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
              <Code size={16} />
              My Projects
            </span>
            <h1 id="projects-title" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '16px',
              fontFamily: 'var(--font-display)'
            }}>
              Projects <span className="text-gradient">Showcase</span>
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7
            }}>
              A collection of projects I've built — from simple utilities to full-featured applications.
              Each one represents a step in my learning journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="section" style={{ paddingTop: '0', paddingBottom: '40px' }} aria-labelledby="filters-title">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'center' }}
          >
            {/* Category Filters */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }} role="group" aria-label="Project categories">
              {projectCategories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '10px 20px',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-primary)',
                    background: activeCategory === category ? 'var(--accent-gradient)' : 'var(--bg-card)',
                    color: activeCategory === category ? 'var(--text-inverse)' : 'var(--text-secondary)',
                    transition: 'all var(--transition-fast)',
                    cursor: 'pointer'
                  }}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              style={{ position: 'relative', maxWidth: '300px', width: '100%' }}
            >
              <Filter size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
              <input
                type="search"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input"
                style={{ paddingLeft: '44px' }}
                aria-label="Search projects"
              />
              {searchQuery && (
                <motion.button
                  onClick={() => setSearchQuery('')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    padding: '4px',
                    color: 'var(--text-muted)',
                    borderRadius: 'var(--radius-sm)'
                  }}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="section" style={{ paddingTop: '0' }} aria-labelledby="featured-title">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '32px' }}
            >
              <h2 id="featured-title" style={{ fontSize: '1.5rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-tertiary)' }} />
                Featured Projects
              </h2>
            </motion.div>

            <div className="grid-auto-fit">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="section" aria-labelledby="all-projects-title">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '32px' }}
          >
            <h2 id="all-projects-title" style={{ fontSize: '1.5rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-primary)' }} />
              All Projects ({filteredProjects.length})
            </h2>
          </motion.div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid-auto-fit"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    gridColumn: '1 / -1',
                    textAlign: 'center',
                    padding: '60px 20px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-primary)',
                    borderRadius: 'var(--radius-lg)'
                  }}
                >
                  <Code size={48} style={{ color: 'var(--text-muted)', marginBottom: '16px', margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px' }}>No Projects Found</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                    {searchQuery
                      ? `No projects match "${searchQuery}". Try a different search term.`
                      : `No projects in the "${activeCategory}" category.`}
                  </p>
                  <button
                    onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', gap: '8px' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <X size={18} />
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }} aria-labelledby="stats-title">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="stats-title" className="section-title" style={{ marginBottom: '40px' }}>Project Statistics</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px' }}>
              <StatItem value={projects.length} label="Total Projects" color="#22d3ee" />
              <StatItem value={projects.filter(p => p.status === 'Completed').length} label="Completed" color="#22c55e" />
              <StatItem value={projects.filter(p => p.status === 'In Progress').length} label="In Progress" color="#f59e0b" />
              <StatItem value={new Set(projects.flatMap(p => p.technologies)).size} label="Technologies Used" color="#a855f7" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

// Project Card Component
function ProjectCard({ project, index }) {
  const statusConfig = projectStatuses[project.status] || projectStatuses.Archived

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="card card-interactive"
      style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => { if (project.live && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); window.open(project.live, '_blank', 'noopener,noreferrer') } }}
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

        {/* Badges */}
        <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {project.featured && (
            <span style={{
              padding: '4px 12px',
              background: 'var(--accent-tertiary)',
              color: 'var(--text-inverse)',
              fontSize: '0.7rem',
              fontWeight: 600,
              borderRadius: 'var(--radius-full)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Featured
            </span>
          )}
          <span style={{
            padding: '4px 10px',
            background: statusConfig.color,
            color: 'var(--text-inverse)',
            fontSize: '0.7rem',
            fontWeight: 600,
            borderRadius: 'var(--radius-full)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {statusConfig.label}
          </span>
        </div>

        <span style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          padding: '4px 10px',
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(10px)',
          color: 'var(--text-primary)',
          fontSize: '0.7rem',
          fontWeight: 500,
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-primary)'
        }}>
          {project.category}
        </span>
      </div>

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {project.title}
            </h3>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0, flex: 1 }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.technologies.map(tech => (
            <span key={tech} style={{
              fontSize: '0.7rem',
              fontWeight: 500,
              padding: '4px 10px',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
              transition: 'all var(--transition-fast)'
            }}>
              {tech}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-primary)' }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ flex: 1, padding: '12px 16px', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              onClick={(e) => e.stopPropagation()}
              aria-label={`View live demo of ${project.title}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1, padding: '12px 16px', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              onClick={(e) => e.stopPropagation()}
              aria-label={`View source code of ${project.title}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={16} />
              Code
            </a>
          )}
          {!project.live && !project.github && (
            <span style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 16px', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              Private / No Links
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

// Stat Item Component
function StatItem({ value, label, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ padding: '24px' }}
    >
      <div style={{
        fontSize: '3rem',
        fontWeight: 700,
        fontFamily: 'var(--font-display)',
        background: `linear-gradient(135deg, ${color}, ${color}80)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '8px'
      }}>
        {value}
      </div>
      <div style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{label}</div>
    </motion.div>
  )
}