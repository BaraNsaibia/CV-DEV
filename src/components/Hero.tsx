import React from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { portfolioMeta } from '../data/portfolioData';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const cvHref = lang === 'fr' ? '/assets/Bara_Nsaibia_CV_FR.pdf' : '/assets/Bara_Nsaibia_CV_EN.pdf';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const renderPortraitCard = () => (
    <div className="hero-card-wrapper">
      <div className="hero-card-glow"></div>
      <div className="hero-image-frame">
        <img
          src="/assets/photo_bara.jpg"
          alt="Bara Nsaibia — Full-Stack Developer & Tunisian Youth Representative"
          loading="eager"
        />
        <div className="hero-image-tag">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.1rem' }}>🇹🇳</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#FFFFFF' }}>Bara Nsaibia</span>
              <span style={{ fontSize: '0.68rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                {lang === 'en' ? 'Tunisian Youth Representative' : 'Représentant Jeunesse Tunisienne'}
              </span>
            </div>
          </div>
          <span style={{ fontSize: '1.1rem' }}>🇲🇦</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Column: Narrative & Action */}
          <div className="hero-content">
            {/* Opportunity Badge */}
            <div className="hero-opportunity-badge">
              <span className="pulse-indicator"></span>
              <span>{portfolioMeta.opportunity[lang]}</span>
            </div>

            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="section-eyebrow" style={{ margin: 0 }}>
                {lang === 'en' ? 'FULL-STACK DEVELOPER • SOFTWARE ENGINEERING' : 'DÉVELOPPEUR FULL-STACK • GÉNIE LOGICIEL'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              {lang === 'en' ? (
                <>
                  Building thoughtful <span className="gradient-text">digital experiences</span>, from interface to infrastructure.
                </>
              ) : (
                <>
                  Concevoir des <span className="gradient-text">expériences numériques</span> d'exception, de l'interface à l'infrastructure.
                </>
              )}
            </h1>

            {/* Supporting Description */}
            <p className="hero-lead">
              {portfolioMeta.subHeadline[lang]}
            </p>

            {/* Mobile-only Portrait (Positioned right above the blue button on phones) */}
            <div className="hero-visual-mobile">
              {renderPortraitCard()}
            </div>

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

              <a
                href={portfolioMeta.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="WhatsApp Direct"
              >
                <MessageSquare size={18} />
                <span>WhatsApp</span>
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
          <div className="hero-visual hero-visual-desktop">
            {renderPortraitCard()}
          </div>
        </div>
      </div>
    </section>
  );
};
