import React from 'react';
import { UserCheck, Award, Globe, Rocket, Building2, Code2, GraduationCap } from 'lucide-react';
import { Language } from '../types';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Authentic Recruiter Narrative */}
          <div>
            <div className="section-kicker">
              {lang === 'en' ? '// 04. PROFILE & BACKGROUND' : '// 04. PROFIL & PARCOURS'}
            </div>
            <h2 className="section-title">
              {lang === 'en' ? 'About Bara Nsaibia' : 'À Propos de Bara Nsaibia'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.75' }}>
              <p>
                {lang === 'en'
                  ? 'I am an Information Technology student specializing in Multimedia and Web Development at the Higher Institute of Technological Studies (ISET) of Sidi Bouzid, Tunisia. My engineering journey bridges modern frontend development, scalable backend architecture, and applied AI workflows.'
                  : 'Je suis étudiant en technologies de l\'information, spécialisé en Multimédia et Développement Web à l\'Institut Supérieur des Études Technologiques (ISET) de Sidi Bouzid, Tunisie. Mon parcours allie développement frontend moderne, architecture backend robuste et intégration d\'outils IA appliqués.'}
              </p>

              <p>
                {lang === 'en'
                  ? 'Through internships at Datalia (France, remote), the Tunisian Ministry of Women, Children and the Elderly, and Compagnie des Phosphates de Gafsa (CPG), I have developed a disciplined approach to building reliable software: writing automated tests, hardening database workflows, and collaborating across technical teams.'
                  : 'À travers mes stages chez Datalia (France, en distanciel), au Ministère de la Famille, de la Femme, de l\'Enfance et des Personnes Âgées, ainsi qu\'à la Compagnie des Phosphates de Gafsa (CPG), j\'ai acquis une méthodologie rigoureuse : rédaction de tests automatisés, sécurisation des flux de bases de données et collaboration technique.'}
              </p>

              <p>
                {lang === 'en'
                  ? 'My primary objective is securing an international, on-site or hybrid, paid final-year internship (PFE) in Full-Stack Development or Software Engineering between February and May 2027. I am eager to contribute to forward-thinking engineering teams solving high-impact problems.'
                  : 'Mon objectif principal est d\'intégrer une équipe d\'ingénierie internationale pour un stage de fin d\'études (PFE) rémunéré, sur site ou en hybride, entre février et mai 2027, en développement Full-Stack ou Génie Logiciel.'}
              </p>
            </div>

            {/* Quick Strengths List */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem', marginTop: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code2 size={18} color="var(--accent-primary)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{lang === 'en' ? 'Full-Stack Problem Solver' : 'Développeur Full-Stack Polyvalent'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Building2 size={18} color="var(--accent-primary)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{lang === 'en' ? 'Enterprise & Public Sector' : 'Expérience Entreprise & Publique'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={18} color="var(--accent-primary)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{lang === 'en' ? 'International Mobility Ready' : 'Prêt pour mobilité internationale'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <GraduationCap size={18} color="var(--accent-primary)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{lang === 'en' ? 'Anthropic & Harvard Certified' : 'Certifié Anthropic & Harvard'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Impact Metrics */}
          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-number">3</span>
              <span className="stat-label">
                {lang === 'en' ? 'Engineering Internships' : 'Stages en Entreprise'}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {lang === 'en' ? 'France (Remote) & Tunisia' : 'France (Distanciel) & Tunisie'}
              </span>
            </div>

            <div className="stat-box">
              <span className="stat-number">40+</span>
              <span className="stat-label">
                {lang === 'en' ? 'Verified Credentials' : 'Certifications Validées'}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {lang === 'en' ? 'Harvard, Anthropic, MS, IBM' : 'Harvard, Anthropic, MS, IBM'}
              </span>
            </div>

            <div className="stat-box">
              <span className="stat-number">3+</span>
              <span className="stat-label">
                {lang === 'en' ? 'Years of Web Dev' : 'Années de Dév. Web'}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {lang === 'en' ? 'Freelance & Production' : 'Freelance & Production'}
              </span>
            </div>

            <div className="stat-box">
              <span className="stat-number">1 of 2</span>
              <span className="stat-label">
                {lang === 'en' ? 'National Youth Delegate' : 'Délégué National'}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {lang === 'en' ? 'First Arab Gathering (Rabat)' : 'Premier Rassemblement Arabe'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
