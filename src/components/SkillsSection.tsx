import React, { useState } from 'react';
import { Code, Server, Database, Wrench, Cpu, Palette, Sparkles, Check } from 'lucide-react';
import { Language } from '../types';
import { skillCategories } from '../data/portfolioData';

interface SkillsSectionProps {
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('frontend');

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Code size={18} />,
    backend: <Server size={18} />,
    databases: <Database size={18} />,
    tools: <Wrench size={18} />,
    ai: <Cpu size={18} />,
    multimedia: <Palette size={18} />,
  };

  const currentCategory = skillCategories.find((c) => c.id === activeCategoryId) || skillCategories[0];

  return (
    <section className="section" id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            {lang === 'en' ? 'TECHNICAL ARSENAL' : 'COMPÉTENCES TECHNIQUES'}
          </span>
          <h2 className="section-title">
            {lang === 'en' ? 'Technologies & Frameworks' : 'Technologies & Environnements'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'Categorized software engineering capabilities cultivated through academic rigor, institutional internships, and production system deliveries.'
              : 'Compétences logicielles structurées, développées à travers un cursus universitaire rigoureux, des stages institutionnels et des livraisons en production.'}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-nav">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`skills-tab-btn ${activeCategoryId === cat.id ? 'active' : ''}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              {categoryIcons[cat.id]}
              <span>{cat.name[lang]}</span>
            </button>
          ))}
        </div>

        {/* Active Category Description */}
        <div style={{ marginBottom: '1.75rem' }}>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
            {currentCategory.description[lang]}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {currentCategory.skills.map((skill) => (
            <div
              key={skill.name}
              className={`skill-item-card ${skill.highlight ? 'highlight' : ''}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                {skill.highlight ? (
                  <Sparkles size={16} color="var(--accent-primary)" />
                ) : (
                  <Check size={16} color="var(--accent-secondary)" />
                )}
                <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {skill.name}
                </span>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: skill.highlight ? 'var(--accent-primary)' : 'var(--text-muted)',
                  background: skill.highlight ? 'var(--badge-bg)' : 'transparent',
                  padding: skill.highlight ? '0.15rem 0.5rem' : '0',
                  borderRadius: '4px',
                  fontWeight: 600,
                }}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
