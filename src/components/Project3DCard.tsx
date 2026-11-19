import React, { useState, useRef, useCallback } from 'react';
import { ExternalLink, Github, ShieldCheck, RotateCw, CheckCircle2, ChevronRight } from 'lucide-react';
import { Language, ProjectItem } from '../types';

interface Project3DCardProps {
  project: ProjectItem;
  lang: Language;
  isExtraOnMobile?: boolean;
}

export const Project3DCard: React.FC<Project3DCardProps> = ({ project, lang, isExtraOnMobile }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Smooth mouse tilt with downward inclination when moving to bottom of card
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isFlipped) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Normalized coordinates (-1 to 1)
    const tiltX = (x - centerX) / centerX;
    const tiltY = (y - centerY) / centerY;

    setTilt({ x: tiltX, y: tiltY });
  }, [isFlipped]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  const toggleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
    setTilt({ x: 0, y: 0 });
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    // Only toggle on Enter/Space if target is the card itself or flip trigger, not child links
    if ((e.key === 'Enter' || e.key === ' ') && e.target === cardRef.current) {
      e.preventDefault();
      toggleFlip();
    }
  }, [toggleFlip]);

  // Subtle max tilt (6 degrees for supple, natural feel)
  const rotateX = isHovered && !isFlipped ? -tilt.y * 7 : 0;
  const rotateY = isFlipped ? 180 : (isHovered ? tilt.x * 7 : 0);

  return (
    <article
      ref={cardRef}
      className={`project-3d-scene ${isExtraOnMobile ? 'mobile-hidden-project' : ''}`}
      id={`project-${project.id}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      role="region"
      aria-label={`${project.title} 3D card`}
      onKeyDown={handleKeyDown}
    >
      <div
        className={`project-3d-flipper ${isFlipped ? 'is-flipped' : ''}`}
        style={{
          transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {/* =================================================================
            FRONT FACE: Overview, Problem Statement & Tech
            ================================================================= */}
        <div
          className="project-3d-face project-3d-front"
          aria-hidden={isFlipped}
        >
          {/* Decorative Subtle Gradient Bar */}
          <div
            className="project-3d-banner"
            style={{ background: project.imageFallbackGradient }}
          />

          {/* Header */}
          <div className="project-card-header project-3d-elevated-header">
            <span className="project-card-badge">{project.badge[lang]}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span className="project-card-period">{project.period}</span>
              <button
                type="button"
                onClick={toggleFlip}
                className="project-3d-flip-btn"
                title={lang === 'en' ? 'Flip for technical deep dive' : 'Retourner pour les détails techniques'}
                tabIndex={isFlipped ? -1 : 0}
                aria-label={lang === 'en' ? 'Flip card' : 'Retourner la carte'}
              >
                <RotateCw size={12} className="project-3d-flip-icon" />
                <span>{lang === 'en' ? 'Deep Dive' : 'Détails'}</span>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="project-card-body project-3d-body">
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
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {project.description[lang]}
            </p>

            {/* Tech Badges */}
            <div className="project-tech-row project-3d-tech-row">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            {/* Bottom Actions with Supple Transition into Buttons */}
            <div className="project-actions project-3d-actions">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '0.55rem 1.1rem', fontSize: '0.8rem' }}
                  tabIndex={isFlipped ? -1 : 0}
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
                  tabIndex={isFlipped ? -1 : 0}
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

              <button
                type="button"
                onClick={toggleFlip}
                className="project-3d-details-link"
                tabIndex={isFlipped ? -1 : 0}
              >
                <span>{lang === 'en' ? 'Technical Highlights' : 'Points Clés'}</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* =================================================================
            BACK FACE: Engineering Challenges, Key Outcomes & Verified Badges
            ================================================================= */}
        <div
          className="project-3d-face project-3d-back"
          aria-hidden={!isFlipped}
        >
          {/* Header */}
          <div className="project-3d-back-header">
            <div>
              <span className="project-3d-back-kicker">
                {lang === 'en' ? '// ENGINEERING HIGHLIGHTS' : '// CONTRIBUTIONS TECHNIQUES'}
              </span>
              <h4 className="project-3d-back-title">{project.title}</h4>
            </div>

            <button
              type="button"
              onClick={toggleFlip}
              className="project-3d-flip-btn return-btn"
              title={lang === 'en' ? 'Return to overview' : 'Revenir à la vue d\'ensemble'}
              tabIndex={isFlipped ? 0 : -1}
              aria-label={lang === 'en' ? 'Return to front' : 'Revenir'}
            >
              <RotateCw size={12} className="project-3d-flip-icon" />
              <span>{lang === 'en' ? 'Overview' : 'Aperçu'}</span>
            </button>
          </div>

          <div className="project-3d-back-divider" />

          {/* Challenges List */}
          <div className="project-3d-back-body">
            <div className="project-3d-section-heading">
              {lang === 'en' ? 'Key Technical Contributions:' : 'Contributions Techniques Majeures :'}
            </div>
            <ul className="project-challenges-list">
              {project.engineeringChallenges.map((challenge, idx) => (
                <li key={idx}>
                  <span>{challenge[lang]}</span>
                </li>
              ))}
            </ul>

            {/* Key Outcomes */}
            {project.keyOutcomes && project.keyOutcomes.length > 0 && (
              <div style={{ marginTop: '0.85rem' }}>
                <div className="project-3d-section-heading">
                  {lang === 'en' ? 'Verified Outcomes:' : 'Résultats Validés :'}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {project.keyOutcomes.map((outcome, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={14} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{outcome[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginTop: '0.85rem' }}>
                {project.metrics.map((m, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      background: 'var(--badge-bg)',
                      color: 'var(--accent-primary)',
                      border: '1px solid var(--badge-border)',
                      padding: '0.18rem 0.5rem',
                      borderRadius: '4px',
                      fontWeight: 600,
                    }}
                  >
                    ✓ {m[lang]}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Back Face Footer Actions */}
          <div className="project-3d-back-footer">
            <div className="project-actions" style={{ margin: 0 }}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.78rem' }}
                  tabIndex={isFlipped ? 0 : -1}
                >
                  <span>{lang === 'en' ? 'Live Demo' : 'Site en direct'}</span>
                  <ExternalLink size={13} />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.78rem' }}
                  tabIndex={isFlipped ? 0 : -1}
                >
                  <Github size={14} />
                  <span>{lang === 'en' ? 'Source Code' : 'Code Source'}</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={toggleFlip}
              className="project-3d-back-return-link"
              tabIndex={isFlipped ? 0 : -1}
            >
              <span>{lang === 'en' ? 'Back to Overview' : 'Retour'}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
