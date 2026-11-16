import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Language } from '../types';
import { portfolioMeta } from '../data/portfolioData';
import { Hero3DCard } from './Hero3DCard';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cvHref = lang === 'fr' ? '/assets/Bara_Nsaibia_CV_FR.pdf' : '/assets/Bara_Nsaibia_CV_EN.pdf';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Column: Narrative & Action */}
          <div className="hero-content">
            {/* Single Restrained Status Indicator */}
            <div className="hero-opportunity-badge">
              <span className="pulse-indicator"></span>
              <span>{portfolioMeta.opportunity[lang]}</span>
            </div>

            {/* Main Headline: Solid, High-Contrast Typography */}
            <h1 className="hero-headline">
              {lang === 'en' ? (
                <>
                  Full-stack developer engineering reliable web systems from interface to infrastructure.
                </>
              ) : (
                <>
                  Développeur full-stack concevant des architectures web fiables, de l'interface à l'infrastructure.
                </>
              )}
            </h1>

            {/* Supporting Description */}
            <p className="hero-lead">
              {portfolioMeta.subHeadline[lang]}
            </p>

            {/* Mobile-only Portrait (Positioned right above the blue button on phones) */}
            {isMobile && (
              <div className="hero-visual-mobile">
                <Hero3DCard lang={lang} />
              </div>
            )}

            {/* Action CTAs */}
            <div className="hero-actions">
              <button onClick={() => scrollTo('projects')} className="btn btn-primary" id="hero-projects-cta">
                <span>{lang === 'en' ? 'Explore My Projects' : 'Découvrir mes projets'}</span>
                <ArrowRight size={16} />
              </button>

              <a href={cvHref} download className="btn btn-secondary" id="hero-resume-cta">
                <Download size={16} />
                <span>{lang === 'en' ? 'Download Resume' : 'Télécharger le CV'}</span>
              </a>

              <button onClick={() => scrollTo('contact')} className="btn btn-ghost" id="hero-contact-cta">
                <Mail size={16} />
                <span>{lang === 'en' ? 'Get in Touch' : 'Me contacter'}</span>
              </button>
            </div>

            {/* Professional Social & Network Channels */}
            <div className="hero-socials">
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {lang === 'en' ? 'Connect:' : 'Réseaux :'}
              </span>

              <a
                href={portfolioMeta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="GitHub Profile"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>

              <a
                href={portfolioMeta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${portfolioMeta.email}`}
                className="hero-social-link"
                title="Email direct"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>

            {/* Core Tech Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
              {['React', 'TypeScript', 'Node.js', 'Symfony', 'PostgreSQL', 'Docker', 'AI Agents'].map((tech) => (
                <span key={tech} className="tech-pill highlight">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Right Column: Authenticated Portrait (PC / Desktop only) */}
          {!isMobile && (
            <div className="hero-visual hero-visual-desktop">
              <Hero3DCard lang={lang} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
