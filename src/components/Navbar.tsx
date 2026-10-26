import React, { useState, useEffect } from 'react';
import { Sun, Moon, Download, Menu, X, Globe, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Language, Theme } from '../types';
import { portfolioMeta } from '../data/portfolioData';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'projects', 'experience', 'skills', 'about', 'education', 'leadership', 'documents', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'projects', label: { en: 'Projects', fr: 'Projets' } },
    { id: 'experience', label: { en: 'Experience', fr: 'Expérience' } },
    { id: 'skills', label: { en: 'Skills', fr: 'Compétences' } },
    { id: 'about', label: { en: 'About', fr: 'À Propos' } },
    { id: 'education', label: { en: 'Education', fr: 'Formation' } },
    { id: 'leadership', label: { en: 'International', fr: 'International' } },
    { id: 'documents', label: { en: 'CV & Docs', fr: 'Documents' } },
    { id: 'contact', label: { en: 'Contact', fr: 'Contact' } },
  ];

  const cvHref = lang === 'fr' ? '/assets/Bara_Nsaibia_CV_FR.pdf' : '/assets/Bara_Nsaibia_CV_EN.pdf';

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }} className="navbar-brand">
            <div className="navbar-brand-badge">BN</div>
            <span>{portfolioMeta.name}</span>
          </a>

          {/* Desktop Navigation */}
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Controls & CTA */}
          <div className="nav-actions">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="control-btn"
              title={lang === 'en' ? 'Switch to French' : 'Passer en Anglais'}
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, marginLeft: '3px' }}>
                {lang.toUpperCase()}
              </span>
            </button>

            {/* Dark / Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="control-btn"
              title={theme === 'dark' ? 'Switch to Light mode' : 'Activer le mode sombre'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Quick Resume Download */}
            <a
              href={cvHref}
              download
              className="btn btn-primary"
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.8rem', display: 'none' }}
              id="desktop-cv-btn"
            >
              <Download size={14} />
              <span>{lang === 'en' ? 'Resume' : 'CV'}</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="navbar-brand">
              <div className="navbar-brand-badge">BN</div>
              <span>{portfolioMeta.name}</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="control-btn">
              <X size={20} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  textAlign: 'left',
                  fontSize: '1.05rem',
                  fontWeight: activeSection === item.id ? 700 : 500,
                  color: activeSection === item.id ? 'var(--accent-primary)' : 'var(--text-primary)',
                  padding: '0.6rem 0',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                {item.label[lang]}
              </button>
            ))}
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href={cvHref} download className="btn btn-primary" style={{ width: '100%' }}>
              <Download size={16} />
              <span>{lang === 'en' ? 'Download Resume (PDF)' : 'Télécharger le CV (PDF)'}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
