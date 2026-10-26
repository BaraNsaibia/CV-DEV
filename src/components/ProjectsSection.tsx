import React, { useState } from 'react';
import { ExternalLink, Github, CheckCircle2, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';
import { featuredProjects } from '../data/portfolioData';

interface ProjectsSectionProps {
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [showAllMobile, setShowAllMobile] = useState<boolean>(false);
  const [expandedChallenges, setExpandedChallenges] = useState<Record<string, boolean>>({});

  const filterOptions = [
    { id: 'all', label: { en: 'All Projects', fr: 'Tous les projets' } },
    { id: 'fullstack', label: { en: 'Full-Stack & Systems', fr: 'Full-Stack & Systèmes' } },
    { id: 'ai', label: { en: 'AI & Real-Time', fr: 'IA & Temps Réel' } },
    { id: 'enterprise', label: { en: 'Enterprise & Institutional', fr: 'Entreprise & Institutions' } },
  ];

  const filteredProjects = featuredProjects.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'fullstack') return p.technologies.some(t => ['Symfony', 'PHP', 'Node.js', 'React', 'TypeScript'].includes(t));
    if (selectedFilter === 'ai') return p.technologies.some(t => ['Socket.IO', 'WebSockets', 'Python', 'Google Gemini API'].includes(t)) || p.id === 'ai-workshop' || p.id === 'calligraphy-gallery';
    if (selectedFilter === 'enterprise') return p.organization || p.badge.en.includes('Internship') || p.badge.en.includes('Ministry');
    return true;
  });

  const toggleChallenge = (projectId: string) => {
    setExpandedChallenges(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <section className="section" id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            {lang === 'en' ? 'ENGINEERING PORTFOLIO' : 'RÉALISATIONS LOGICIELLES'}
          </span>
          <h2 className="section-title">
            {lang === 'en' ? 'Featured Projects & Systems' : 'Projets Phares & Architectures'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'A curated selection of real-world software applications, production deployments, and technical contributions delivered across professional internships and freelance solutions.'
              : 'Une sélection rigoureuse d\'applications logicielles concrètes, de déploiements en production et de contributions techniques réalisées dans le cadre de stages professionnels et de mandats freelance.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-nav" style={{ marginBottom: '2.5rem' }}>
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setSelectedFilter(filter.id);
                setShowAllMobile(false);
              }}
              className={`skills-tab-btn ${selectedFilter === filter.id ? 'active' : ''}`}
            >
              {filter.label[lang]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            const isExtraOnMobile = index >= 3 && !showAllMobile;
            const isChallengesOpen = !!expandedChallenges[project.id];

            return (
              <article
                key={project.id}
                className={`project-card glass-card ${isExtraOnMobile ? 'mobile-hidden-project' : ''}`}
                id={`project-${project.id}`}
              >
                {/* Card Visual Header */}
                <div
                  className="project-card-header"
                  style={{ background: project.imageFallbackGradient }}
                >
                  <span className="project-card-badge">{project.badge[lang]}</span>
                  <span className="project-card-period">{project.period}</span>
                </div>

                {/* Card Body */}
                <div className="project-card-body">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle[lang]}</p>
                  </div>

                  {/* Problem Statement */}
                  <div className="project-problem">
                    <strong>{lang === 'en' ? 'Context: ' : 'Contexte : '}</strong>
                    {project.problemStatement[lang]}
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                    {project.description[lang]}
                  </p>

                  {/* Key Engineering Challenges Accordion */}
                  <div className="project-challenges-wrapper">
                    {/* Mobile toggle button (hidden on desktop) */}
                    <button
                      type="button"
                      onClick={() => toggleChallenge(project.id)}
                      className="project-challenges-toggle-btn"
                    >
                      <span>
                        {lang === 'en'
                          ? `Key Technical Highlights (${project.engineeringChallenges.length})`
                          : `Points Clés Techniques (${project.engineeringChallenges.length})`}
                      </span>
                      {isChallengesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {/* Challenges list */}
                    <div className={`project-challenges-collapse ${isChallengesOpen ? 'is-open' : ''}`}>
                      <span className="project-challenges-desktop-label">
                        {lang === 'en' ? 'Key Technical Contributions:' : 'Contributions Techniques Clés :'}
                      </span>
                      <ul className="project-challenges-list">
                        {project.engineeringChallenges.map((challenge, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={16} />
                            <span>{challenge[lang]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Metrics / Verified Badges */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {project.metrics.map((m, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.72rem',
                            fontFamily: 'var(--font-mono)',
                            background: 'var(--badge-bg)',
                            color: 'var(--accent-primary)',
                            border: '1px solid var(--badge-border)',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '4px',
                            fontWeight: 600,
                          }}
                        >
                          ✓ {m[lang]}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech Badges */}
                  <div className="project-tech-row">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* External Actions & Links */}
                  <div className="project-actions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ padding: '0.55rem 1.1rem', fontSize: '0.8rem' }}
                      >
                        <span>{lang === 'en' ? 'Live Demo' : 'Site en direct'}</span>
                        <ExternalLink size={14} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        style={{ padding: '0.55rem 1.1rem', fontSize: '0.8rem' }}
                      >
                        <Github size={15} />
                        <span>{lang === 'en' ? 'Source Code' : 'Code Source'}</span>
                      </a>
                    )}

                    {project.organization && !project.liveUrl && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        <ShieldCheck size={16} color="var(--accent-primary)" />
                        <span>{project.organization}</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile-only "Show More / Less Projects" toggle (hidden on desktop) */}
        {filteredProjects.length > 3 && (
          <div className="mobile-projects-toggle-wrapper">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="btn btn-secondary mobile-projects-toggle-btn"
            >
              <span>
                {showAllMobile
                  ? (lang === 'en' ? 'Show Less Projects' : 'Réduire les projets')
                  : (lang === 'en'
                    ? `Explore All ${filteredProjects.length} Projects (${filteredProjects.length - 3} more)`
                    : `Voir les ${filteredProjects.length} projets (+${filteredProjects.length - 3})`)}
              </span>
              {showAllMobile ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
