import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Language } from '../types';
import { portfolioMeta } from '../data/portfolioData';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Top Row */}
        <div className="footer-top">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="navbar-brand-badge" style={{ width: '28px', height: '28px', fontSize: '0.75rem' }}>
                BN
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem' }}>
                {portfolioMeta.name}
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '480px' }}>
              {lang === 'en'
                ? 'Full-Stack Web Developer & Software Engineering Student • Available for International PFE Internships (Feb–May 2027).'
                : 'Développeur Web Full-Stack & Étudiant en Génie Logiciel • Disponible pour stages PFE internationaux (Fév–Mai 2027).'}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{ padding: '0.6rem 1rem', fontSize: '0.8rem' }}
            id="back-to-top-btn"
          >
            <span>{lang === 'en' ? 'Back to top' : 'Haut de page'}</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Quick Nav Links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          {['projects', 'experience', 'skills', 'about', 'education', 'leadership', 'documents', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                textTransform: 'capitalize',
                color: 'var(--text-secondary)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {id === 'leadership' ? (lang === 'en' ? 'International' : 'International') : id}
            </button>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom">
          <div>
            © 2026 {portfolioMeta.name}. {lang === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={portfolioMeta.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={portfolioMeta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${portfolioMeta.email}`}
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
