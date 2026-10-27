import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { InternationalSection } from './components/InternationalSection';
import { DocumentsSection } from './components/DocumentsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Theme state with local persistence (defaults to 'dark')
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  // Language state with local persistence (defaults to 'en' for international recruiters)
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved === 'en' || saved === 'fr') ? saved : 'en';
  });

  // Synchronize theme attribute on root html
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  // Synchronize language attribute on root html & document title
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('portfolio_lang', lang);

    if (lang === 'fr') {
      document.title = 'Bara Nsaibia — Développeur Full-Stack & Étudiant en Génie Logiciel';
    } else {
      document.title = 'Bara Nsaibia — Full-Stack Developer & Software Engineering Student';
    }
  }, [lang]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
  };

  return (
    <div className="portfolio-app">
      {/* Subtle ambient grid pattern */}
      <div className="bg-grid-pattern" aria-hidden="true" />

      {/* Main Navigation */}
      <Navbar
        lang={lang}
        setLang={handleSetLang}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        <Hero lang={lang} />
        <ProjectsSection lang={lang} />
        <ExperienceSection lang={lang} />
        <SkillsSection lang={lang} />
        <AboutSection lang={lang} />
        <EducationSection lang={lang} />
        <InternationalSection lang={lang} />
        <DocumentsSection lang={lang} />
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
};

export default App;
