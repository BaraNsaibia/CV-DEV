import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';
import { featuredProjects } from '../data/portfolioData';
import { TheatreExplodedArchitecture } from './TheatreExplodedArchitecture';
import { Project3DCard } from './Project3DCard';

interface ProjectsSectionProps {
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [showAllMobile, setShowAllMobile] = useState<boolean>(false);

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

  return (
    <section className="section" id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            {lang === 'en' ? '// 01. SELECTED WORKS' : '// 01. PROJETS SÉLECTIONNÉS'}
          </div>
          <h2 className="section-title">
            {lang === 'en' ? 'Featured Projects & Systems' : 'Projets Phares & Architectures'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'Real-world software engineering, client production platforms, and contributions delivered across professional internships and freelance engagements.'
              : 'Systèmes logiciels concrets, plateformes client en production et réalisations livrées en stage professionnel et mandats freelance.'}
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

        {/* 3D Exploded Architecture View (Choreographed with Theatre.js) */}
        {(selectedFilter === 'all' || selectedFilter === 'fullstack') && (
          <TheatreExplodedArchitecture lang={lang} />
        )}

        {/* Projects Grid (Interactive 3D Cards) */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            const isExtraOnMobile = index >= 3 && !showAllMobile;
            return (
              <Project3DCard
                key={project.id}
                project={project}
                lang={lang}
                isExtraOnMobile={isExtraOnMobile}
              />
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
