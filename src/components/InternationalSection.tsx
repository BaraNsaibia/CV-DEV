import React from 'react';
import { MapPin, Calendar, Building, Users, Flag, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { internationalLeadership } from '../data/portfolioData';

interface InternationalSectionProps {
  lang: Language;
}

export const InternationalSection: React.FC<InternationalSectionProps> = ({ lang }) => {
  return (
    <section className="section" id="leadership">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            {lang === 'en' ? '// 06. DIPLOMATIC & CIVIC ENGAGEMENT' : '// 06. ENGAGEMENT INTERNATIONAL'}
          </div>
          <h2 className="section-title">
            {internationalLeadership.headline[lang]}
          </h2>
          <p className="section-subtitle">
            {internationalLeadership.eventTitle[lang]}, {internationalLeadership.location[lang]} ({internationalLeadership.dates[lang]})
          </p>
        </div>

        {/* Editorial Layout */}
        <div className="editorial-grid">
          {/* Left Column: Context Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--accent-primary)',
              }}
            >
              <Building size={16} />
              <span>{internationalLeadership.organizers[lang]}</span>
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, lineHeight: '1.35' }}>
              {internationalLeadership.roleSummary[lang]}
            </h3>

            {internationalLeadership.narrativeParagraphs.map((p, idx) => (
              <p key={idx} style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.75' }}>
                {p[lang]}
              </p>
            ))}

            {/* Event Stats Chips */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1rem' }}>
              {internationalLeadership.stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '1rem',
                  }}
                >
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    {stat.label[lang]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Authentic Visuals */}
          <div className="editorial-gallery">
            <div className="editorial-img-wrap">
              <img
                src="/assets/photo_group.jpg"
                alt="Official group delegation at First Arab Gathering in Rabat, Morocco"
                loading="lazy"
              />
              <div
                style={{
                  background: 'var(--bg-surface)',
                  padding: '0.75rem 1rem',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                {lang === 'en'
                  ? 'Official Delegation Assembly with youth representatives from 22 Arab Nations (Rabat, Morocco)'
                  : 'Assemblée officielle des délégations des 22 pays arabes (Rabat, Maroc)'}
              </div>
            </div>

            <div className="editorial-img-wrap">
              <img
                src="/assets/photo_bara.jpg"
                alt="Bara Nsaibia representing Tunisian youth in Morocco"
                loading="lazy"
                style={{ height: '220px', objectPosition: 'center 20%' }}
              />
              <div
                style={{
                  background: 'var(--bg-surface)',
                  padding: '0.75rem 1rem',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                {lang === 'en'
                  ? 'Bara Nsaibia: Diplomatic Workshop on Digital Safety and Algorithmic Well-being'
                  : 'Bara Nsaibia : Atelier diplomatique sur la sécurité numérique et l\'éthique en ligne'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
