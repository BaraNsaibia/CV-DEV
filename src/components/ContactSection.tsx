import React, { useState } from 'react';
import { Mail, Linkedin, Github, MessageSquare, Send, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { Language } from '../types';
import { portfolioMeta } from '../data/portfolioData';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    opportunityType: 'pfe',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(
        lang === 'en'
          ? 'Please fill in your name, email, and message.'
          : 'Veuillez renseigner votre nom, email et message.'
      );
      return;
    }

    // Prepare mailto link as reliable default client action
    const subject = encodeURIComponent(`[Portfolio Opportunity - ${formData.opportunityType.toUpperCase()}] From ${formData.name} (${formData.company || 'Direct'})`);
    const body = encodeURIComponent(`Hello Bara,\n\nName: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.company || 'N/A'}\nOpportunity: ${formData.opportunityType}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`);
    
    // Trigger mail client safely
    window.location.href = `mailto:${portfolioMeta.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            {lang === 'en' ? '// 08. CONTACT & COLLABORATION' : '// 08. PRENDRE CONTACT'}
          </div>
          <h2 className="section-title">
            {lang === 'en' ? 'Discuss an Internship or Engineering Role' : 'Échanger sur une Opportunité de Stage ou de Poste'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'Available for international final-year internships (Feb – May 2027), full-stack software development roles, and technical discussions.'
              : 'Disponible pour un stage de fin d\'études (PFE 2027) à l\'international, postes en développement logiciel full-stack et échanges techniques.'}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Recruiter Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              <p>
                {lang === 'en'
                  ? 'Feel free to reach out directly via your preferred channel. I respond promptly to internship inquiries and engineering discussions.'
                  : 'N\'hésitez pas à me contacter directement via le canal de votre choix. Je réponds rapidement aux propositions de stage et opportunités techniques.'}
              </p>
            </div>

            <div className="contact-channels">
              {/* Email */}
              <a href={`mailto:${portfolioMeta.email}`} className="contact-channel-card">
                <div className="contact-icon-box">
                  <Mail size={22} />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>Email</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {portfolioMeta.email}
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={portfolioMeta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
              >
                <div className="contact-icon-box" style={{ color: '#0077b5' }}>
                  <Linkedin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>LinkedIn</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Bara Nsaibia
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={portfolioMeta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
              >
                <div className="contact-icon-box" style={{ color: 'var(--text-primary)' }}>
                  <Github size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>GitHub</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    @BaraNsaibia
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={portfolioMeta.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
              >
                <div className="contact-icon-box" style={{ color: '#25D366' }}>
                  <MessageSquare size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>WhatsApp</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {portfolioMeta.phone}
                  </div>
                </div>
              </a>
            </div>

            {/* Location & Status Card */}
            <div
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600 }}>
                <MapPin size={16} color="var(--accent-primary)" />
                <span>{portfolioMeta.location[lang]}</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {lang === 'en'
                  ? 'Current Timezone: UTC+1 (Central European Time alignment)'
                  : 'Fuseau horaire : UTC+1 (Aligné sur l\'Europe Centrale)'}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form */}
          <form className="contact-form card-base" onSubmit={handleSubmit}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
              {lang === 'en' ? 'Send a Direct Message' : 'Envoyer un Message Direct'}
            </h3>

            {submitted ? (
              <div
                style={{
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <CheckCircle2 size={36} color="#10b981" />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {lang === 'en' ? 'Message Prepared & Transmitted!' : 'Message Préparé avec Succès !'}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {lang === 'en'
                    ? 'Your email client has been opened with your inquiry pre-filled. Thank you for reaching out.'
                    : 'Votre client mail a été ouvert avec les informations pré-remplies. Merci pour votre message.'}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ marginTop: '0.5rem', fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                >
                  {lang === 'en' ? 'Send another message' : 'Envoyer un autre message'}
                </button>
              </div>
            ) : (
              <>
                {errorMessage && (
                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#ef4444',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.85rem',
                    }}
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    {lang === 'en' ? 'Your Name *' : 'Votre Nom *'}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder={lang === 'en' ? 'e.g. Sarah Jenkins' : 'ex. Jean Dupont'}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">
                    {lang === 'en' ? 'Your Professional Email *' : 'Votre Email Professionnel *'}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-company">
                    {lang === 'en' ? 'Company / Organization' : 'Entreprise / Organisation'}
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder={lang === 'en' ? 'e.g. Tech Corp' : 'ex. Société X'}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-type">
                    {lang === 'en' ? 'Opportunity Type' : 'Type d\'Opportunité'}
                  </label>
                  <select
                    id="contact-type"
                    name="opportunityType"
                    value={formData.opportunityType}
                    onChange={handleChange}
                    className="form-input"
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="pfe">{lang === 'en' ? 'PFE Internship (Feb–May 2027)' : 'Stage PFE (Fév–Mai 2027)'}</option>
                    <option value="fullstack">{lang === 'en' ? 'Full-Stack Software Engineering Role' : 'Poste Génie Logiciel Full-Stack'}</option>
                    <option value="freelance">{lang === 'en' ? 'Client Freelance Project' : 'Projet Client Freelance'}</option>
                    <option value="other">{lang === 'en' ? 'General Technical Inquiry' : 'Autre Échange'}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    {lang === 'en' ? 'Message *' : 'Message *'}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder={lang === 'en' ? 'Describe the opportunity or project details...' : 'Décrivez votre projet ou proposition de stage...'}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem', padding: '0.85rem' }}
                  id="contact-submit-btn"
                >
                  <Send size={16} />
                  <span>{lang === 'en' ? 'Discuss an Opportunity' : 'Discuter d\'une Opportunité'}</span>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
