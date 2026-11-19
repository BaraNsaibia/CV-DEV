import React, { useState, useEffect, useRef } from 'react';
import { getProject, types, ISheet, ISheetObject } from '@theatre/core';
import { Layers, Cpu, Database, Eye, Play, Pause, RotateCcw, Wrench, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface TheatreExplodedArchitectureProps {
  lang: Language;
}

interface LayerData {
  id: 'frontend' | 'api' | 'database';
  name: { en: string; fr: string };
  badge: { en: string; fr: string };
  color: string;
  borderColor: string;
  tech: string[];
  role: { en: string; fr: string };
  decision: { en: string; fr: string };
  metric: { en: string; fr: string };
  icon: React.ReactNode;
}

const ARCHITECTURE_LAYERS: LayerData[] = [
  {
    id: 'frontend',
    name: {
      en: 'Presentation & Interaction Layer',
      fr: 'Couche Présentation & Interaction',
    },
    badge: { en: 'Client Tier', fr: 'Niveau Client' },
    color: 'rgba(59, 130, 246, 0.12)',
    borderColor: '#3B82F6',
    tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    role: {
      en: 'Responsive interactive user experience, dynamic artwork framing simulator, and zero-flicker bilingual Arabic/English state management.',
      fr: 'Expérience interactive réactive, simulateur d\'encadrement sur-mesure et gestion d\'état bilingue Arabe/Anglais sans scintillement.',
    },
    decision: {
      en: 'Built a physics-driven framing simulator and dual RTL/LTR typography pipeline directly on the client, eliminating server roundtrips during artwork customization.',
      fr: 'Développement d\'un simulateur d\'encadrement dynamique et pipeline typographique bilingue RTL/LTR côté client, éliminant tout temps de latence réseau.',
    },
    metric: {
      en: '100% Client-Side Physics Simulation',
      fr: 'Simulation physique 100% côté client',
    },
    icon: <Layers size={18} />,
  },
  {
    id: 'api',
    name: {
      en: 'API & Generative AI Middleware Layer',
      fr: 'Couche API & Middleware IA Générative',
    },
    badge: { en: 'Service Tier', fr: 'Niveau Service' },
    color: 'rgba(168, 85, 247, 0.12)',
    borderColor: '#A855F7',
    tech: ['Node.js', 'Express', 'Google Gemini 1.5 Pro API', 'TypeScript', 'CORS Security'],
    role: {
      en: 'High-throughput orchestration bridge connecting web clients to Google Gemini API for automated Square Kufic calligraphy semantic analysis.',
      fr: 'Passerelle d\'orchestration haute performance connectant le client à l\'API Google Gemini pour l\'analyse sémantique de la calligraphie coufique.',
    },
    decision: {
      en: 'Engineered a strict JSON schema validation layer with deterministic query caching to prevent redundant Gemini API calls and reduce average token latency to <200ms.',
      fr: 'Mise en œuvre d\'une validation stricte des schémas JSON et d\'un cache sémantique déterministe réduisant le coût des requêtes Gemini et la latence sous 200ms.',
    },
    metric: {
      en: 'Sub-200ms Cached AI Semantic Analysis',
      fr: 'Analyse IA sémantique en cache <200ms',
    },
    icon: <Cpu size={18} />,
  },
  {
    id: 'database',
    name: {
      en: 'Data Persistence & Transaction Infrastructure',
      fr: 'Couche Persistance & Infrastructure Transactionnelle',
    },
    badge: { en: 'Data Tier', fr: 'Niveau Données' },
    color: 'rgba(16, 185, 129, 0.12)',
    borderColor: '#10B981',
    tech: ['PostgreSQL / SQLite', 'ACID Transactions', 'Docker', 'Optimistic Locking'],
    role: {
      en: 'Guaranteed consistency for artwork catalog inquiries, administrative orders, customer contact transactions, and inventory state.',
      fr: 'Garantie de cohérence stricte pour les demandes d\'œuvres, commandes administratives, transactions clients et gestion des stocks.',
    },
    decision: {
      en: 'Implemented optimistic locking and ACID transaction blocks preventing duplicate reservations on unique handcrafted physical artworks.',
      fr: 'Implémentation du verrouillage optimiste et de blocs de transaction ACID évitant les doubles réservations sur les œuvres d\'art uniques.',
    },
    metric: {
      en: 'Zero Collision Booking Reliability',
      fr: 'Fiabilité transactionnelle sans collision',
    },
    icon: <Database size={18} />,
  },
];

export const TheatreExplodedArchitecture: React.FC<TheatreExplodedArchitectureProps> = ({ lang }) => {
  const [selectedLayerId, setSelectedLayerId] = useState<'frontend' | 'api' | 'database'>('frontend');
  const [isExploded, setIsExploded] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [studioLoaded, setStudioLoaded] = useState<boolean>(false);

  // Theatre.js animated values
  const [theatreValues, setTheatreValues] = useState({
    stageRotateX: 52,
    stageRotateZ: -24,
    stageZoom: 0.95,
    frontendZ: 140,
    apiZ: 70,
    databaseZ: 0,
    frontendOpacity: 1,
    apiOpacity: 0.85,
    databaseOpacity: 0.85,
  });

  const sheetRef = useRef<ISheet | null>(null);
  const objRef = useRef<ISheetObject<any> | null>(null);

  // Initialize Theatre.js Project & Sheet
  useEffect(() => {
    try {
      const project = getProject('PortfolioArchitectureTheatre');
      const sheet = project.sheet('ExplodedArchitecture');
      sheetRef.current = sheet;

      const obj = sheet.object('ExplodedRig', {
        stageRotateX: types.number(52, { range: [0, 85] }),
        stageRotateZ: types.number(-24, { range: [-90, 90] }),
        stageZoom: types.number(0.95, { range: [0.7, 1.3] }),
        frontendZ: types.number(140, { range: [0, 240] }),
        apiZ: types.number(70, { range: [0, 160] }),
        databaseZ: types.number(0, { range: [0, 100] }),
        frontendOpacity: types.number(1, { range: [0.3, 1] }),
        apiOpacity: types.number(0.85, { range: [0.3, 1] }),
        databaseOpacity: types.number(0.85, { range: [0.3, 1] }),
      });
      objRef.current = obj;

      const unsubscribe = obj.onValuesChange((vals) => {
        setTheatreValues(vals);
      });

      // Auto-scroll if hash matches
      if (window.location.hash === '#architecture-theater') {
        const el = document.getElementById('architecture-theater');
        if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
      }

      return () => {
        if (typeof unsubscribe === 'function') unsubscribe();
      };
    } catch (err) {
      console.warn('Theatre.js initialization note:', err);
    }
  }, []);

  // Update layer focus in Theatre.js
  const handleSelectLayer = (id: 'frontend' | 'api' | 'database') => {
    setSelectedLayerId(id);
    const sheet = sheetRef.current;
    if (!sheet) return;

    // Smoothly animate towards focused layer configuration
    if (isExploded) {
      if (id === 'frontend') {
        sheet.sequence.play({ range: [0, 1], iterationCount: 1 });
      } else if (id === 'api') {
        sheet.sequence.play({ range: [1, 2], iterationCount: 1 });
      } else {
        sheet.sequence.play({ range: [2, 3], iterationCount: 1 });
      }
    }
  };

  // Toggle Exploded vs Collapsed mode
  const toggleExploded = () => {
    const nextState = !isExploded;
    setIsExploded(nextState);

    const sheet = sheetRef.current;
    if (sheet) {
      if (nextState) {
        sheet.sequence.play({ range: [0, 1.5], iterationCount: 1 });
      } else {
        sheet.sequence.play({ range: [1.5, 3], iterationCount: 1 });
      }
    }
  };

  // Play animation sequence loop
  const togglePlaySequence = () => {
    const sheet = sheetRef.current;
    if (!sheet) return;

    if (isPlaying) {
      sheet.sequence.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      sheet.sequence.play({ iterationCount: Infinity, range: [0, 4] }).then(() => {
        setIsPlaying(false);
      });
    }
  };

  // Optional: Open Theatre Studio in dev mode
  const toggleStudio = async () => {
    try {
      const studioModule: any = await import('@theatre/studio');
      const studio = studioModule.default?.default || studioModule.default || studioModule;
      if (studio) {
        if (!studioLoaded) {
          studio.initialize();
          setStudioLoaded(true);
        } else {
          if (studio.ui?.isHidden) {
            studio.ui.restore();
          } else {
            studio.ui?.hide();
          }
        }
      }
    } catch (e) {
      console.warn('Studio toggle:', e);
    }
  };

  const isDev = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  const selectedLayer = ARCHITECTURE_LAYERS.find((l) => l.id === selectedLayerId) || ARCHITECTURE_LAYERS[0];

  return (
    <div className="theatre-architecture-container" id="architecture-theater">
      {/* Header bar */}
      <div className="theatre-header">
        <div className="theatre-title-wrap">
          <div className="theatre-pill">
            <Wrench size={13} />
            <span>THEATRE.JS • 3D MOTION ENGINE</span>
          </div>
          <h3 className="theatre-title">
            {lang === 'en'
              ? 'Exploded 3D Architecture View: Full-Stack Platform'
              : 'Vue 3D Éclatée de l\'Architecture : Plateforme Full-Stack'}
          </h3>
          <p className="theatre-lead">
            {lang === 'en'
              ? 'Interactive multi-tier architecture of Mohsen Nsaibia Calligraphy Gallery & AI Platform. Select a layer to inspect technical decisions and stack decoupling.'
              : 'Architecture multi-tiers de la Galerie Mohsen Nsaibia & Plateforme IA. Sélectionnez une couche pour inspecter les choix d\'ingénierie et le découplage.'}
          </p>
        </div>

        {/* Action controls */}
        <div className="theatre-controls">
          <button
            type="button"
            onClick={toggleExploded}
            className={`btn btn-secondary theatre-btn ${isExploded ? 'active' : ''}`}
            title="Toggle Exploded vs Collapsed"
          >
            <Layers size={14} />
            <span>{isExploded ? (lang === 'en' ? 'Exploded 3D' : 'Vue Éclatée') : (lang === 'en' ? 'Collapsed Stack' : 'Pile Groupée')}</span>
          </button>

          <button
            type="button"
            onClick={togglePlaySequence}
            className={`btn btn-ghost theatre-btn ${isPlaying ? 'active' : ''}`}
            title="Play / Pause Theatre.js Motion Sequence"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            <span>{isPlaying ? (lang === 'en' ? 'Pause Sequence' : 'Pause') : (lang === 'en' ? 'Play Timeline' : 'Animer')}</span>
          </button>

          {isDev && (
            <button
              type="button"
              onClick={toggleStudio}
              className="theatre-studio-btn"
              title="Toggle Theatre.js Visual Studio Editor"
            >
              <span>🎬 Studio GUI</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Grid: 3D Stage on Left, Technical Inspector on Right */}
      <div className="theatre-body-grid">
        {/* Left: 3D Isometric Exploded View Stage */}
        <div className="theatre-stage-wrapper">
          {/* Layer Quick Select Tabs */}
          <div className="theatre-tabs">
            {ARCHITECTURE_LAYERS.map((layer, index) => {
              const isSelected = selectedLayerId === layer.id;
              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => handleSelectLayer(layer.id)}
                  className={`theatre-tab-btn ${isSelected ? 'active' : ''}`}
                  style={{
                    borderColor: isSelected ? layer.borderColor : 'transparent',
                  }}
                >
                  <span className="theatre-tab-num">0{index + 1}</span>
                  <span className="theatre-tab-name">{layer.badge[lang]}</span>
                </button>
              );
            })}
          </div>

          {/* 3D Scene */}
          <div className="theatre-perspective-scene">
            <div
              className="theatre-isometric-rig"
              style={{
                transform: `rotateX(${theatreValues.stageRotateX}deg) rotateZ(${theatreValues.stageRotateZ}deg) scale(${theatreValues.stageZoom})`,
              }}
            >
              {/* Connecting Projection Lines (SVG in 3D plane) */}
              <div className="theatre-projection-lines" aria-hidden="true" />

              {/* Stacked Layers */}
              {ARCHITECTURE_LAYERS.map((layer) => {
                const isSelected = selectedLayerId === layer.id;
                let zOffset = 0;
                let layerOpacity = 0.85;

                if (isExploded) {
                  if (layer.id === 'frontend') {
                    zOffset = theatreValues.frontendZ;
                    layerOpacity = isSelected ? 1 : theatreValues.frontendOpacity;
                  } else if (layer.id === 'api') {
                    zOffset = theatreValues.apiZ;
                    layerOpacity = isSelected ? 1 : theatreValues.apiOpacity;
                  } else {
                    zOffset = theatreValues.databaseZ;
                    layerOpacity = isSelected ? 1 : theatreValues.databaseOpacity;
                  }
                } else {
                  // Collapsed stack
                  if (layer.id === 'frontend') zOffset = 24;
                  else if (layer.id === 'api') zOffset = 12;
                  else zOffset = 0;
                  layerOpacity = isSelected ? 1 : 0.75;
                }

                // If selected, add extra focal elevation
                const focalLift = isSelected && isExploded ? 20 : 0;

                return (
                  <div
                    key={layer.id}
                    className={`theatre-layer-card ${isSelected ? 'is-selected' : ''}`}
                    style={{
                      transform: `translateZ(${zOffset + focalLift}px)`,
                      borderColor: isSelected ? layer.borderColor : 'var(--border-medium)',
                      opacity: layerOpacity,
                      boxShadow: isSelected
                        ? `0 16px 36px ${layer.color}, 0 0 0 1px ${layer.borderColor}`
                        : '0 8px 24px rgba(0,0,0,0.4)',
                    }}
                    onClick={() => handleSelectLayer(layer.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${layer.name[lang]}`}
                  >
                    <div className="theatre-layer-glass-bg" style={{ background: layer.color }} />
                    <div className="theatre-layer-content">
                      <div className="theatre-layer-meta">
                        <span className="theatre-layer-icon" style={{ color: layer.borderColor }}>
                          {layer.icon}
                        </span>
                        <div>
                          <div className="theatre-layer-badge">{layer.badge[lang]}</div>
                          <div className="theatre-layer-title">{layer.name[lang]}</div>
                        </div>
                      </div>

                      <div className="theatre-layer-pills">
                        {layer.tech.slice(0, 3).map((t) => (
                          <span key={t} className="theatre-mini-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="theatre-hint-bar">
            <span>{lang === 'en' ? 'Click any 3D layer to inspect architecture' : 'Cliquez sur une couche 3D pour l\'examiner'}</span>
          </div>
        </div>

        {/* Right: Technical Inspector & Architectural Decision */}
        <div className="theatre-inspector">
          <div className="theatre-inspector-header">
            <div className="theatre-inspector-badge" style={{ color: selectedLayer.borderColor, borderColor: selectedLayer.borderColor }}>
              {selectedLayer.badge[lang]}
            </div>
            <h4 className="theatre-inspector-title">
              {selectedLayer.name[lang]}
            </h4>
          </div>

          <div className="theatre-inspector-block">
            <span className="theatre-inspector-label">
              {lang === 'en' ? 'Architectural Role & Scope' : 'Rôle & Périmètre Architectural'}
            </span>
            <p className="theatre-inspector-text">
              {selectedLayer.role[lang]}
            </p>
          </div>

          <div className="theatre-inspector-block highlight-decision">
            <span className="theatre-inspector-label" style={{ color: 'var(--accent-primary)' }}>
              {lang === 'en' ? 'Key Technical Decision' : 'Décision Technique Clé'}
            </span>
            <p className="theatre-inspector-text">
              {selectedLayer.decision[lang]}
            </p>
          </div>

          <div className="theatre-inspector-block">
            <span className="theatre-inspector-label">
              {lang === 'en' ? 'Technologies & Protocols' : 'Technologies & Protocoles'}
            </span>
            <div className="theatre-tech-tags">
              {selectedLayer.tech.map((t) => (
                <span key={t} className="tech-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="theatre-inspector-footer">
            <div className="theatre-metric-box">
              <CheckCircle2 size={15} color="var(--accent-primary)" />
              <span>{selectedLayer.metric[lang]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
