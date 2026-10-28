import React, { useState } from 'react';
import { GraduationCap, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';
import { certifications } from '../data/portfolioData';

interface EducationSectionProps {
  lang: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ lang }) => {
  const [showAllMobileCerts, setShowAllMobileCerts] = useState<boolean>(false);

  return (
    <section className="section" id="education" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            {lang === 'en' ? '// 05. ACADEMIC & CREDENTIALS' : '// 05. FORMATION & CERTIFICATIONS'}
          </div>
          <h2 className="section-title">
            {lang === 'en' ? 'Education & Certified Skills' : 'Diplômes & Certifications Reconnues'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'Academic computer science foundations complemented by verified global certifications from Harvard, Anthropic, Microsoft, and IBM.'
              : 'Fondations académiques en informatique enrichies par des certifications internationales délivrées par Harvard, Anthropic, Microsoft et IBM.'}
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="card-base education-hero-card">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'var(--badge-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                  flexShrink: 0,
                }}
              >
                <GraduationCap size={28} />
              </div>

              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                  2024 – 2027 • Bachelor of Technology / Licence
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginTop: '0.2rem' }}>
                  {lang === 'en'
                    ? 'Bachelor in Information Technology — Multimedia & Web Development'
                    : 'Licence en Technologie de l\'Information — Multimédia & Dév. Web'}
                </h3>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '0.2rem' }}>
                  Institut Supérieur des Études Technologiques (ISET) de Sidi Bouzid, Tunisie
                </div>
              </div>
            </div>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                padding: '0.35rem 0.8rem',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.12)',
                color: '#10b981',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                fontWeight: 600,
              }}
            >
              {lang === 'en' ? 'PFE Internship: Feb–May 2027' : 'Stage PFE : Fév–Mai 2027'}
            </span>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>{lang === 'en' ? 'Core Coursework: ' : 'Enseignements Clés : '}</strong>
            {lang === 'en'
              ? 'Web Technologies (HTML/CSS/JS, React, Angular), Object-Oriented Programming (Java), Relational Database Systems (SQL, MySQL), Data Structures & Algorithms, Network Infrastructure, Graphic Design & Multimedia Production.'
              : 'Technologies Web (HTML/CSS/JS, React, Angular), Programmation Orientée Objet (Java), Bases de Données Relationnelles (SQL, MySQL), Structures de Données & Algorithmique, Réseaux, Conception Graphique et Production Multimédia.'}
          </div>
        </div>

        {/* Certifications Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            {lang === 'en' ? 'Verified Industry Certifications & Credentials' : 'Certifications Industrielles Vérifiées'}
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            {lang === 'en'
              ? 'Each certification is backed by verified completion records documented in the official 44-page Social & Academic Report.'
              : 'Chaque certification est validée par des pièces officielles consultables dans le Rapport Social & Académique de 44 pages.'}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certs-grid">
          {certifications.map((cert, index) => {
            const isExtraOnMobile = index >= 4 && !showAllMobileCerts;

            return (
              <div
                key={cert.id}
                className={`cert-card ${isExtraOnMobile ? 'mobile-hidden-cert' : ''}`}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span className="cert-badge">{cert.badgeText}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    {cert.year}
                  </span>
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: '1.4' }}>{cert.title}</h4>
                  <div style={{ fontSize: '0.82rem', color: 'var(--accent-primary)', fontWeight: 600, marginTop: '0.2rem' }}>
                    {cert.issuer}
                  </div>
                </div>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {cert.description[lang]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile toggle for extra certifications (hidden on desktop) */}
        {certifications.length > 4 && (
          <div className="mobile-certs-toggle-wrapper">
            <button
              onClick={() => setShowAllMobileCerts(!showAllMobileCerts)}
              className="btn btn-secondary mobile-certs-toggle-btn"
            >
              <span>
                {showAllMobileCerts
                  ? (lang === 'en' ? 'Show Less Certifications' : 'Réduire les certifications')
                  : (lang === 'en'
                    ? `View All ${certifications.length} Certifications (+${certifications.length - 4} more)`
                    : `Voir les ${certifications.length} certifications (+${certifications.length - 4})`)}
              </span>
              {showAllMobileCerts ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
