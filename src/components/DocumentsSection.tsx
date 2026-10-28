import React, { useState } from 'react';
import { FileText, Download, ExternalLink, ShieldCheck, Eye, X } from 'lucide-react';
import { Language } from '../types';
import { documentHub } from '../data/portfolioData';

interface DocumentsSectionProps {
  lang: Language;
}

export const DocumentsSection: React.FC<DocumentsSectionProps> = ({ lang }) => {
  const [previewDocUrl, setPreviewDocUrl] = useState<string | null>(null);
  const [previewDocTitle, setPreviewDocTitle] = useState<string>('');

  const handleOpenPreview = (url: string, title: string) => {
    setPreviewDocUrl(url);
    setPreviewDocTitle(title);
  };

  return (
    <section className="section" id="documents" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            {lang === 'en' ? '// 07. VERIFIED DOCUMENTATION' : '// 07. DOSSIER & JUSTIFICATIFS'}
          </div>
          <h2 className="section-title">
            {lang === 'en' ? 'Official Documents & CV' : 'Curriculum Vitae & Dossier Officiel'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'Download current CVs and the comprehensive 44-page verified social and academic experience portfolio in English or French.'
              : 'Téléchargez les CV actualisés et le rapport complet de 44 pages attestant des engagements académiques, civiques et techniques.'}
          </p>
        </div>

        {/* Documents Grid */}
        <div className="docs-grid">
          {documentHub.map((doc) => {
            const currentFileUrl = lang === 'fr' ? doc.fileFr : doc.fileEn;

            return (
              <div key={doc.id} className="doc-hub-card card-base">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'var(--badge-bg)',
                        color: 'var(--accent-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <FileText size={24} />
                    </div>

                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{doc.title[lang]}</h3>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: 'var(--accent-secondary)',
                          fontWeight: 600,
                        }}
                      >
                        PDF • {doc.pageCount} • {lang.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      background: 'rgba(16, 185, 129, 0.12)',
                      color: '#10b981',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      fontWeight: 600,
                    }}
                  >
                    Verified
                  </span>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                  {doc.description[lang]}
                </p>

                {/* Actions */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: 'auto' }}>
                  <a
                    href={currentFileUrl}
                    download
                    className="btn btn-primary"
                    style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
                  >
                    <Download size={16} />
                    <span>{lang === 'en' ? 'Download PDF' : 'Télécharger le PDF'}</span>
                  </a>

                  <a
                    href={currentFileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
                  >
                    <ExternalLink size={16} />
                    <span>{lang === 'en' ? 'Open in New Tab' : 'Ouvrir dans un onglet'}</span>
                  </a>

                  <button
                    onClick={() => handleOpenPreview(currentFileUrl, doc.title[lang])}
                    className="btn btn-ghost"
                    style={{ padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                  >
                    <Eye size={16} />
                    <span>{lang === 'en' ? 'Quick Preview' : 'Aperçu rapide'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal PDF Quick Preview */}
        {previewDocUrl && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(9, 11, 17, 0.85)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            onClick={() => setPreviewDocUrl(null)}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '900px',
                height: '85vh',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-medium)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  padding: '1rem 1.5rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={18} color="var(--accent-primary)" />
                  <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{previewDocTitle}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <a
                    href={previewDocUrl}
                    download
                    className="btn btn-primary"
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </a>

                  <button
                    onClick={() => setPreviewDocUrl(null)}
                    className="control-btn"
                    aria-label="Close preview"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <iframe
                src={previewDocUrl}
                title={previewDocTitle}
                style={{ width: '100%', flexGrow: 1, border: 'none' }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
