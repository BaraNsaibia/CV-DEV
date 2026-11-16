import React, { useState, useRef, useCallback } from 'react';
import { RotateCw, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { portfolioMeta } from '../data/portfolioData';

interface Hero3DCardProps {
  lang: Language;
}

export const Hero3DCard: React.FC<Hero3DCardProps> = ({ lang }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse move handler for smooth 3D perspective tilt
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isFlipped) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Normalized tilt (-1 to 1)
    const tiltX = (x - centerX) / centerX;
    const tiltY = (y - centerY) / centerY;

    setTilt({ x: tiltX, y: tiltY });
  }, [isFlipped]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  const toggleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
    setTilt({ x: 0, y: 0 });
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    }
  }, [toggleFlip]);

  // Max 3D tilt angles: subtle and professional
  const rotateX = isHovered && !isFlipped ? -tilt.y * 10 : 0;
  const rotateY = isFlipped ? 180 : (isHovered ? tilt.x * 10 : 0);

  return (
    <div
      className="hero-3d-scene"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`hero-3d-card ${isFlipped ? 'is-flipped' : ''}`}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
        tabIndex={0}
        role="button"
        aria-label={
          isFlipped
            ? (lang === 'en' ? 'Portrait card back face. Press Enter or Space to flip back to portrait.' : 'Verso de la carte. Appuyez sur Entrée ou Espace pour revenir au portrait.')
            : (lang === 'en' ? 'Portrait card 3D. Press Enter or Space to flip for profile details.' : 'Carte portrait 3D. Appuyez sur Entrée ou Espace pour voir les détails du profil.')
        }
        aria-pressed={isFlipped}
        onClick={toggleFlip}
        onKeyDown={handleKeyDown}
      >
        {/* FRONT FACE */}
        <div
          className="hero-3d-face hero-3d-front"
          aria-hidden={isFlipped}
        >
          <div className="hero-image-frame">
            <img
              src="/assets/photo_bara.jpg"
              alt="Bara Nsaibia — Full-Stack Developer & Tunisian Youth Delegate"
              loading="eager"
            />

            {/* Elevated 3D Tag */}
            <div className="hero-image-tag hero-3d-elevated-tag">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFFFFF' }}>Bara Nsaibia</span>
                <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                  {lang === 'en' ? 'Tunisian Youth Delegate • Rabat' : 'Délégué Jeunesse Tunisienne • Rabat'}
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#60A5FA', fontWeight: 600 }}>
                TN / MA
              </span>
            </div>

            {/* Flip hint pill in top corner */}
            <div className="hero-3d-hint" title={lang === 'en' ? 'Click to flip' : 'Cliquer pour retourner'}>
              <RotateCw size={12} className="hero-3d-hint-icon" />
              <span>{lang === 'en' ? '3D • Click' : '3D • Cliquer'}</span>
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className="hero-3d-face hero-3d-back"
          aria-hidden={!isFlipped}
        >
          <div className="hero-3d-back-content">
            <div className="hero-3d-back-header">
              <div className="hero-3d-avatar-mini">
                <img src="/assets/photo_bara.jpg" alt="" aria-hidden="true" />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Bara Nsaibia
                </h4>
                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>
                  Full-Stack Software Engineer
                </p>
              </div>
            </div>

            <div className="hero-3d-back-divider" />

            <div className="hero-3d-back-details">
              <div className="hero-3d-back-item">
                <span className="hero-3d-back-label">
                  {lang === 'en' ? 'Target Position' : 'Poste ciblé'}
                </span>
                <span className="hero-3d-back-val">
                  {lang === 'en' ? 'PFE Internship (Feb – May 2027)' : 'Stage PFE (Fév – Mai 2027)'}
                </span>
              </div>

              <div className="hero-3d-back-item">
                <span className="hero-3d-back-label">
                  {lang === 'en' ? 'Education' : 'Formation'}
                </span>
                <span className="hero-3d-back-val">
                  ISET Sidi Bouzid • Tech & Web
                </span>
              </div>

              <div className="hero-3d-back-item">
                <span className="hero-3d-back-label">
                  {lang === 'en' ? 'Core Stack' : 'Stack principale'}
                </span>
                <span className="hero-3d-back-val">
                  React • TypeScript • Node.js • Symfony • PostgreSQL
                </span>
              </div>

              <div className="hero-3d-back-item">
                <span className="hero-3d-back-label">
                  {lang === 'en' ? 'Languages' : 'Langues'}
                </span>
                <span className="hero-3d-back-val">
                  English (Fluent) • French (Fluent) • Arabic (Native)
                </span>
              </div>
            </div>

            <div className="hero-3d-back-footer">
              <span className="hero-3d-back-flip-btn">
                <RotateCw size={12} />
                <span>{lang === 'en' ? 'Click to return' : 'Cliquer pour revenir'}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
