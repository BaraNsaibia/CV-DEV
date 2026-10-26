import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { experiences } from '../data/portfolioData';

interface ExperienceSectionProps {
  lang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  return (
    <section className="section" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            {lang === 'en' ? 'PROFESSIONAL TRAJECTORY' : 'PARCOURS PROFESSIONNEL'}
          </span>
          <h2 className="section-title">
            {lang === 'en' ? 'Work Experience & Internships' : 'Expériences & Stages en Entreprise'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'Proven track record of delivering software within international remote teams, government institutions, and major industrial enterprises.'
              : 'Expérience confirmée au sein d\'équipes internationales en distanciel, d\'institutions gouvernementales et de grandes entreprises industrielles.'}
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-node"></div>
              <div className="glass-card timeline-card">
                {/* Header */}
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role[lang]}</h3>
                    <div className="timeline-company">{exp.company}</div>
                  </div>

                  <div className="timeline-meta">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={14} />
                      {exp.period[lang]}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={14} />
                      {exp.location[lang]}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {exp.summary[lang]}
                </p>

                {/* Bullets */}
                <ul className="timeline-bullets">
                  {exp.contributions.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} />
                      <span>{item[lang]}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
