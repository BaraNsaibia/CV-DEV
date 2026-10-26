import { ProjectItem, ExperienceItem, SkillCategory, CertificationItem, DocumentItem, BilingualText } from '../types';

export const portfolioMeta = {
  name: "Bara Nsaibia",
  email: "bara.nsaibia.dev@gmail.com",
  phone: "+216 92 049 451",
  location: {
    en: "Sidi Bouzid, Tunisia (Open to International Relocation & Remote)",
    fr: "Sidi Bouzid, Tunisie (Disponible pour mobilité internationale & remote)"
  },
  github: "https://github.com/BaraNsaibia",
  linkedin: "https://tn.linkedin.com/in/bara-nsaibia-3a17793b1",
  whatsapp: "https://wa.me/21692049451",
  opportunity: {
    en: "Open to International PFE Internships • February–May 2027",
    fr: "Disponible pour Stages PFE Internationaux • Février–Mai 2027"
  },
  tagline: {
    en: "Building thoughtful digital experiences, from interface to infrastructure.",
    fr: "Concevoir des expériences numériques réfléchies, de l'interface à l'infrastructure."
  },
  subHeadline: {
    en: "Full-Stack Developer specializing in modern web applications, scalable backend systems, API integration, and AI-powered automation. Experienced in delivering real-world software through internships and freelance projects.",
    fr: "Développeur Full-Stack spécialisé en applications web modernes, systèmes backend évolutifs, intégration d'API et automatisation assistée par IA. Expérimenté dans la livraison de logiciels concrets via stages et projets freelance."
  }
};

export const featuredProjects: ProjectItem[] = [
  {
    id: "calligraphy-gallery",
    title: "Mohsen Nsaibia Calligraphy Gallery",
    subtitle: {
      en: "Digital Cultural Preservation & AI-Powered Interactive Art Platform",
      fr: "Préservation Numérique du Patrimoine & Galerie d'Art Interactive avec IA"
    },
    badge: {
      en: "Full-Stack • Gemini AI • Cultural Heritage",
      fr: "Full-Stack • IA Gemini • Patrimoine Culturel"
    },
    type: "Full-Stack Art & Cultural Heritage Platform",
    period: "2025 – 2026",
    featured: true,
    imageFallbackGradient: "linear-gradient(135deg, #271d10 0%, #b45309 50%, #d97706 100%)",
    liveUrl: "https://lnkd.in/eiDNRXPW",
    githubUrl: "https://github.com/BaraNsaibia/Arabic-calligraphy-site-",
    problemStatement: {
      en: "Traditional Tunisian Square Kufic calligraphy required an intuitive digital platform to showcase handcrafted artworks, interactively visualize premium framings, and connect global collectors with artist Mohsen Nsaibia.",
      fr: "La calligraphie coufique carrée traditionnelle tunisienne nécessitait une plateforme numérique intuitive pour exposer des œuvres artisanales, simuler des encadrements d'art et connecter des collectionneurs internationaux avec l'artiste Mohsen Nsaibia."
    },
    description: {
      en: "Engineered a full-stack platform transforming a traditional art workshop into a digital experience. Features dynamic artwork visualization with custom framing, animated gallery interactions, order management, and AI-assisted calligraphy interpretation using Google Gemini.",
      fr: "Développement d'une plateforme full-stack modernisant un atelier d'art traditionnel en une expérience numérique immersive. Comprend la visualisation dynamique d'œuvres avec encadrement personnalisé, une galerie animée, la gestion des commandes et l'interprétation par IA via Google Gemini."
    },
    engineeringChallenges: [
      {
        en: "Integrated Google Gemini API to analyze complex Square Kufic geometric compositions and generate context-aware artistic interpretations.",
        fr: "Intégration de l'API Google Gemini pour analyser les compositions géométriques coufiques carrées et fournir des interprétations artistiques contextualisées."
      },
      {
        en: "Built interactive artwork visualization and custom framing simulation with physics-based micro-interactions powered by Framer Motion.",
        fr: "Conception d'un visualiseur interactif d'œuvres avec simulation d'encadrements sur-mesure et micro-interactions fluides via Framer Motion."
      },
      {
        en: "Implemented an end-to-end bilingual Arabic (RTL) and English (LTR) experience with culturally authentic typography and seamless state management.",
        fr: "Implémentation d'une interface bilingue intégrale Arabe (RTL) et Anglais (LTR) avec typographie soignée et gestion d'état réactive."
      },
      {
        en: "Architected a robust Node.js/Express backend with TypeScript and SQLite for streamlined order inquiries and administrative content control.",
        fr: "Architecture backend sous Node.js/Express avec TypeScript et SQLite pour la gestion des demandes de commandes et le contrôle administratif."
      }
    ],
    keyOutcomes: [
      {
        en: "Successfully applied software engineering to digital cultural preservation with public live demo and open-source GitHub repository.",
        fr: "Application concrète du génie logiciel à la préservation du patrimoine avec démonstration en ligne et dépôt open-source."
      },
      {
        en: "Demonstrated real-world generative AI integration within a production-ready full-stack product.",
        fr: "Intégration d'IA générative dans un produit full-stack concret prêt pour la production."
      }
    ],
    technologies: ["React", "TypeScript", "Vite", "Node.js", "Express", "Google Gemini API", "Framer Motion", "Tailwind CSS", "SQLite"],
    metrics: [
      { en: "Google Gemini AI Powered", fr: "Propulsé par Google Gemini IA" },
      { en: "Bilingual Arabic & English", fr: "Bilingue Arabe & Anglais" },
      { en: "Live on Web & GitHub", fr: "En ligne & Open-Source" }
    ]
  },
  {
    id: "kilicasa",
    title: "KiliCasa",
    subtitle: {
      en: "Real Estate Ecosystem & Automated Testing Infrastructure",
      fr: "Écosystème Immobilier & Infrastructure de Tests Automatisés"
    },
    badge: {
      en: "Professional Internship • France",
      fr: "Stage Professionnel • France"
    },
    type: "Professional Engineering Internship",
    organization: "Datalia (France • Remote)",
    period: "2025 – 2026",
    featured: true,
    imageFallbackGradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%)",
    problemStatement: {
      en: "A multi-service French real estate platform required hardening of its backend APIs, stabilization of its automated integration test suite, and resilient checkout/storage workflows.",
      fr: "Une plateforme immobilière française multiservice nécessitait la sécurisation de ses API backend, la stabilisation de sa suite de tests d'intégration et la fiabilité des workflows de paiement et de stockage."
    },
    description: {
      en: "Engineered backend services and integration test coverage within an enterprise TypeScript/Node.js environment. Strengthened user matching eligibility, quota allocations, and administrative dashboards.",
      fr: "Développement de services backend et renforcement de la couverture de tests d'intégration sous TypeScript et Node.js. Amélioration de l'éligibilité de mise en relation, de la gestion des quotas et du tableau de bord admin."
    },
    engineeringChallenges: [
      {
        en: "Investigated and fixed fragile integration test suites across Dockerized PostgreSQL/PostGIS environments, preventing regressions in production builds.",
        fr: "Diagnostic et résolution de suites de tests d'intégration instables sous PostgreSQL/PostGIS conteneurisé Docker, évitant les régressions en production."
      },
      {
        en: "Implemented secure checkout state-machines and multi-tier account storage quotas with transactional data consistency.",
        fr: "Mise en œuvre de machines à états sécurisées pour le paiement et gestion des quotas de stockage par palier avec cohérence transactionnelle."
      },
      {
        en: "Enhanced 2FA account recovery workflows and administrative audit tooling without compromising data privacy guidelines.",
        fr: "Amélioration des flux de récupération 2FA et des outils d'audit d'administration dans le respect de la confidentialité des données."
      }
    ],
    keyOutcomes: [
      {
        en: "Drastic reduction in flaky CI test runs across the automated testing pipeline.",
        fr: "Réduction drastique des échecs intermittents de tests au sein du pipeline CI."
      },
      {
        en: "Anonymized, production-aligned case study showcasing professional software engineering rigor.",
        fr: "Étude de cas anonymisée et conforme aux normes professionnelles de génie logiciel."
      }
    ],
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "PostGIS", "Docker", "REST APIs", "Automated Testing", "CI/CD"],
    metrics: [
      { en: "High CI Test Reliability", fr: "Haute fiabilité des tests CI" },
      { en: "Transactional Workflows", fr: "Workflows transactionnels" }
    ]
  },
  {
    id: "drei-hotel",
    title: "Drei Hotel",
    subtitle: {
      en: "Full-Stack Hotel Booking Engine & Management System",
      fr: "Moteur de Réservation Hôtelière Full-Stack & Système de Gestion"
    },
    badge: {
      en: "Live Production Website",
      fr: "Site en Production"
    },
    type: "Freelance Full-Stack Client Solution",
    period: "2024 – 2025",
    featured: true,
    imageFallbackGradient: "linear-gradient(135deg, #1e293b 0%, #0f766e 50%, #14b8a6 100%)",
    liveUrl: "https://drei-hotel.com/",
    problemStatement: {
      en: "Independent hotel required a modern booking engine to manage room inventories, seasonal rates, guest reservations, and multilingual inquiries without intermediary commission fees.",
      fr: "Un hôtel indépendant avait besoin d'un moteur de réservation moderne pour gérer ses chambres, tarifs saisonniers, réservations clients et demandes multilingues sans commissions d'intermédiaires."
    },
    description: {
      en: "Architected and deployed a production hotel reservation platform using Symfony, PHP, MySQL, and Doctrine ORM, featuring an intuitive guest booking journey and administrative back-office.",
      fr: "Conception et déploiement en production d'une plateforme hôtelière complète avec Symfony, PHP, MySQL et Doctrine ORM, comprenant un parcours client fluide et un back-office d'administration."
    },
    engineeringChallenges: [
      {
        en: "Built a double-booking prevention mechanism using relational database transactions and optimistic locking.",
        fr: "Conception d'un mécanisme anti-surréservation reposant sur les transactions relationnelles et le verrouillage optimiste."
      },
      {
        en: "Created custom back-office dashboards for dynamic room availability calendars, payment logging, and direct customer email notifications.",
        fr: "Développement d'un tableau de bord personnalisé avec calendrier dynamique des disponibilités, suivi des paiements et notifications automatiques."
      },
      {
        en: "Delivered a lightweight, highly responsive frontend with optimized asset delivery for international travelers on mobile connections.",
        fr: "Livraison d'une interface responsive et ultra-légère avec optimisation des assets pour les voyageurs internationaux sur mobile."
      }
    ],
    keyOutcomes: [
      {
        en: "Deployed to live production with direct customer booking capability at drei-hotel.com.",
        fr: "Déployé avec succès en production réelle avec prise de réservation directe sur drei-hotel.com."
      },
      {
        en: "Zero reported booking collision issues through rigorous relational constraint design.",
        fr: "Aucun conflit de réservation grâce à une modélisation relationnelle rigoureuse."
      }
    ],
    technologies: ["Symfony", "PHP", "MySQL", "Doctrine ORM", "JavaScript", "HTML5", "CSS3", "Apache/Linux"],
    metrics: [
      { en: "Live at drei-hotel.com", fr: "En ligne sur drei-hotel.com" },
      { en: "Custom Admin Suite", fr: "Back-office sur-mesure" }
    ]
  },
  {
    id: "ministry-platform",
    title: "National Social Projects Monitoring Platform",
    subtitle: {
      en: "Government Budget & Project Performance Tracking System",
      fr: "Système National de Suivi des Dépenses & Projets Sociaux"
    },
    badge: {
      en: "Ministry Placement • Tunisia",
      fr: "Mission Ministérielle • Tunisie"
    },
    type: "Public Sector Enterprise Application",
    organization: "Ministry of Family, Women, Children and the Elderly (Tunisia)",
    period: "January 2026 – February 2026",
    featured: true,
    imageFallbackGradient: "linear-gradient(135deg, #18181b 0%, #4338ca 50%, #6366f1 100%)",
    problemStatement: {
      en: "Managing and evaluating social development projects and public budget allocations distributed across all 24 Tunisian governorates required a centralized digital tracking tool.",
      fr: "Le suivi et l'évaluation des projets de développement social et des allocations budgétaires répartis sur les 24 gouvernorats tunisiens nécessitaient un outil numérique centralisé."
    },
    description: {
      en: "Contributed to designing and deploying a digital management system used by ministerial supervisors to monitor expenditures, KPI milestones, and regional project progress.",
      fr: "Contribution à la conception et au déploiement d'un système de gestion numérique permettant aux superviseurs ministériels de suivre les dépenses, jalons KPI et l'avancement régional."
    },
    engineeringChallenges: [
      {
        en: "Structured data pipelines handling standardized regional reporting across disparate municipal delegations.",
        fr: "Structuration de pipelines de données unifiés pour consolider les rapports régionaux provenant de délégations multiples."
      },
      {
        en: "Collaborated under strict public-sector data integrity guidelines, user role permissions, and administrative auditing standards.",
        fr: "Développement conforme aux directives rigoureuses d'intégrité des données publiques, des rôles d'accès et d'audit administratif."
      }
    ],
    keyOutcomes: [
      {
        en: "Awarded an official ministerial attestation recognizing successful technical participation in a nationally scoped program.",
        fr: "Attestation ministérielle officielle reconnaissant la contribution technique à un programme d'envergure nationale."
      },
      {
        en: "Demonstrated technical capability within large-scale government IT infrastructure.",
        fr: "Démonstration des compétences techniques au sein d'infrastructures informatiques d'État."
      }
    ],
    technologies: ["PHP", "JavaScript", "SQL", "RESTful Architecture", "Data Modeling", "Access Control (RBAC)"],
    metrics: [
      { en: "24 Governorates Scoped", fr: "24 Gouvernorats couverts" },
      { en: "Ministerial Attestation", fr: "Attestation Ministérielle" }
    ]
  },
  {
    id: "ai-workshop",
    title: "Interactive AI Workshop Platform",
    subtitle: {
      en: "Real-Time Zero-Login Presentation & Polling Web System",
      fr: "Plateforme Web Interactive Temps Réel pour Ateliers IA"
    },
    badge: {
      en: "React • Node.js • WebSockets",
      fr: "React • Node.js • WebSockets"
    },
    type: "AI & Real-Time Engineering Project",
    period: "2026",
    featured: true,
    imageFallbackGradient: "linear-gradient(135deg, #09090b 0%, #7c3aed 50%, #a855f7 100%)",
    githubUrl: "https://github.com/BaraNsaibia/interactive-ai-workshop",
    problemStatement: {
      en: "Traditional conference presentations lack audience engagement. Attendees struggle with app installations, account creation, or unstable local Wi-Fi networks.",
      fr: "Les présentations traditionnelles manquent d'interactivité. Le public est freiné par l'installation d'applications, la création de comptes ou les réseaux Wi-Fi saturés."
    },
    description: {
      en: "Engineered an end-to-end interactive platform for live AI seminars. Mobile attendees scan a QR code via 4G/5G, answer interactive prompts, and see synchronized dynamic word clouds, live polls, and AI vs Human challenges appear instantly on the presenter's projector screen.",
      fr: "Développement d'une plateforme interactive de bout en bout pour séminaires IA. Les participants scannent un QR code en 4G/5G, et leurs réponses s'affichent instantanément sous forme de nuages de mots dynamiques, sondages en direct et défis IA vs Humain sur le vidéoprojecteur du présentateur."
    },
    engineeringChallenges: [
      {
        en: "Orchestrated bi-directional low-latency WebSocket synchronization between hundreds of cellular mobile clients and the central presenter projector view using Socket.IO.",
        fr: "Synchronisation WebSocket bidirectionnelle à faible latence entre des centaines de mobiles et l'écran projecteur via Socket.IO."
      },
      {
        en: "Architected a dual-cloud decoupled infrastructure: React + Vite frontend deployed on Vercel, Node.js + Express backend service on Render with robust CORS policies.",
        fr: "Architecture cloud découplée : frontend React + Vite hébergé sur Vercel, backend Node.js + Express sur Render avec gestion stricte des politiques CORS."
      },
      {
        en: "Implemented dynamic client-side word frequency scaling, animated voting counters, and instant answer reveals with confetti effects.",
        fr: "Pondération dynamique des fréquences lexicales en temps réel, barres de vote animées et révélation de réponses avec effets confetti."
      }
    ],
    keyOutcomes: [
      {
        en: "Validated end-to-end with automated test scripts and production-ready zero-login participant onboarding.",
        fr: "Validé de bout en bout avec scripts de tests automatisés et expérience utilisateur sans mot de passe instantanée."
      },
      {
        en: "Tested and ready for live presentation events, keynotes, and academic AI workshops.",
        fr: "Prêt pour les conférences en direct, keynotes et ateliers académiques d'intelligence artificielle."
      }
    ],
    technologies: ["React", "Vite", "Node.js", "Express", "Socket.IO", "JavaScript ES6+", "Vercel", "Render", "WebSockets"],
    metrics: [
      { en: "Sub-100ms Live Sync", fr: "Sync temps réel <100ms" },
      { en: "Zero-Login Onboarding", fr: "Accès instantané sans compte" }
    ]
  },
  {
    id: "cs50-systems",
    title: "CS50x Systems & Algorithmic Projects",
    subtitle: {
      en: "Memory Management, Data Structures & Applied Algorithms",
      fr: "Gestion Mémoire, Structures de Données & Algorithmes Appliqués"
    },
    badge: {
      en: "Harvard University Verified",
      fr: "Certifié Harvard University"
    },
    type: "Computer Science Foundations",
    period: "2023 – 2024",
    featured: false,
    imageFallbackGradient: "linear-gradient(135deg, #18181b 0%, #dc2626 50%, #f97316 100%)",
    problemStatement: {
      en: "Deep dive into foundational computer science, low-level memory control, algorithmic time complexity, and data structures.",
      fr: "Immersion rigoureuse dans les fondements de l'informatique, la gestion mémoire bas-niveau, la complexité algorithmique et les structures de données."
    },
    description: {
      en: "Completed Harvard's rigorous CS50x curriculum, implementing foundational data structures in C (hash tables, tries, linked lists, binary trees) and full-stack web applications with Python and SQLite.",
      fr: "Validation du cursus exigeant CS50x de Harvard, avec implémentation de structures de données en C (tables de hachage, tries, listes chaînées, arbres binaires) et applications full-stack Python/SQLite."
    },
    engineeringChallenges: [
      {
        en: "Implemented low-level memory allocation, pointer manipulation, and memory leak prevention validated through Valgrind.",
        fr: "Gestion manuelle de l'allocation mémoire, manipulation de pointeurs et élimination des fuites mémoire validées par Valgrind."
      },
      {
        en: "Solved algorithmic pathfinding and sorting efficiency challenges with O(n log n) performance constraints.",
        fr: "Résolution de problèmes algorithmiques de tri et de recherche sous contraintes de performance O(n log n)."
      }
    ],
    keyOutcomes: [
      {
        en: "Earned official HarvardX Certificate of Completion for CS50's Introduction to Computer Science.",
        fr: "Obtention du certificat officiel HarvardX pour CS50's Introduction to Computer Science."
      }
    ],
    technologies: ["C", "Python", "SQLite", "Data Structures", "Algorithms", "Memory Optimization", "Linux"]
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "datalia",
    company: "Datalia",
    role: {
      en: "Full-Stack Development Intern",
      fr: "Stagiaire Développeur Full-Stack"
    },
    location: {
      en: "France • Remote",
      fr: "France • En distanciel"
    },
    employmentType: {
      en: "Internship",
      fr: "Stage"
    },
    period: {
      en: "Recent",
      fr: "Récent"
    },
    summary: {
      en: "Contributed to backend development, automated test coverage, and administrative tool stabilization for an international client real estate platform.",
      fr: "Contribution au développement backend, à la couverture de tests automatisés et à la fiabilisation d'outils administratifs pour une plateforme immobilière internationale."
    },
    contributions: [
      {
        en: "Repaired fragile integration test suites within Dockerized PostgreSQL/PostGIS environments, ensuring reproducible CI pipeline executions.",
        fr: "Stabilisation des suites de tests d'intégration sous environnement Docker/PostgreSQL/PostGIS, garantissant l'intégrité des pipelines CI."
      },
      {
        en: "Implemented secure checkout state handling, quota storage management, and two-factor authentication recovery paths.",
        fr: "Mise en place de la gestion sécurisée des transactions, de la gestion des quotas de stockage et des flux de récupération 2FA."
      },
      {
        en: "Enhanced administrative dashboards to streamline user eligibility verification and operational monitoring.",
        fr: "Amélioration des dashboards administratifs pour fluidifier la vérification d'éligibilité et le monitoring opérationnel."
      }
    ],
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "REST APIs", "Integration Testing"],
    badgeColor: "var(--accent-primary)"
  },
  {
    id: "ministry",
    company: "Ministry of Family, Women, Children and the Elderly",
    role: {
      en: "Web Development & IT Intern",
      fr: "Stagiaire Développeur Web & IT"
    },
    location: {
      en: "Tunisia",
      fr: "Tunisie"
    },
    employmentType: {
      en: "Government Internship",
      fr: "Stage Institutionnel"
    },
    period: {
      en: "Jan 2026 – Feb 2026",
      fr: "Janv 2026 – Fév 2026"
    },
    summary: {
      en: "Contributed to developing and maintaining the national monitoring platform for public social projects across Tunisia's 24 governorates.",
      fr: "Contribution au développement et à la maintenance du système national de suivi des dépenses et projets sociaux dans les 24 gouvernorats tunisiens."
    },
    contributions: [
      {
        en: "Built reporting interfaces to track budgetary expenditures and operational project KPIs across regional delegations.",
        fr: "Développement d'interfaces de suivi pour consolider les dépenses budgétaires et indicateurs de performance régionaux."
      },
      {
        en: "Participated in data modeling and administrative access control routines to protect sensitive public sector records.",
        fr: "Participation à la modélisation de données et aux contrôles d'accès pour sécuriser les données administratives."
      },
      {
        en: "Awarded an official ministerial attestation for technical contribution to a strategic national digital program.",
        fr: "Obtention d'une attestation ministérielle officielle pour participation technique à un programme numérique national."
      }
    ],
    technologies: ["PHP", "JavaScript", "SQL", "Relational Databases", "RBAC Security", "Technical Documentation"]
  },
  {
    id: "cpg",
    company: "Compagnie des Phosphates de Gafsa (CPG)",
    role: {
      en: "IT & Software Development Intern",
      fr: "Stagiaire Informatique & Développement"
    },
    location: {
      en: "Gafsa, Tunisia",
      fr: "Gafsa, Tunisie"
    },
    employmentType: {
      en: "Industrial Internship",
      fr: "Stage Industriel"
    },
    period: {
      en: "Jan 2025 – Feb 2025",
      fr: "Janv 2025 – Fév 2025"
    },
    summary: {
      en: "Completed a structured technical internship within the IT department of one of Tunisia's largest state-owned industrial enterprises.",
      fr: "Stage technique structuré au sein de la direction des systèmes d'information de l'une des plus grandes entreprises industrielles tunisiennes."
    },
    contributions: [
      {
        en: "Assisted in enterprise IT support workflows, network diagnostics, and internal system maintenance across operational units.",
        fr: "Participation aux flux de support technique d'entreprise, diagnostics réseau et maintenance des systèmes internes."
      },
      {
        en: "Gained direct exposure to enterprise-scale industrial computing infrastructure, hardware reliability, and security practices.",
        fr: "Immersion concrète dans la gestion d'infrastructures informatiques à échelle industrielle et leurs contraintes de fiabilité."
      }
    ],
    technologies: ["Enterprise IT", "Linux", "Network Support", "Internal Tools", "Troubleshooting"]
  },
  {
    id: "freelance",
    company: "Freelance Full-Stack Developer",
    role: {
      en: "Full-Stack Web Developer & Designer",
      fr: "Développeur Web Full-Stack & Designer"
    },
    location: {
      en: "Remote / Tunisia",
      fr: "En distanciel / Tunisie"
    },
    employmentType: {
      en: "Freelance / Independent",
      fr: "Freelance / Indépendant"
    },
    period: {
      en: "Since 2023",
      fr: "Depuis 2023"
    },
    summary: {
      en: "Delivering bespoke, production-ready web platforms, reservation engines, and modern client applications.",
      fr: "Conception et déploiement de plateformes web sur-mesure, moteurs de réservation et solutions digitales prêtes pour la production."
    },
    contributions: [
      {
        en: "Built and deployed Drei Hotel (drei-hotel.com) using Symfony, PHP, and MySQL with custom booking engine and admin back-office.",
        fr: "Création et mise en production de Drei Hotel (drei-hotel.com) avec Symfony, PHP et MySQL avec moteur de réservation et back-office."
      },
      {
        en: "Developed responsive web applications with React, JavaScript, Laravel, PHP, REST APIs, and relational databases.",
        fr: "Développement d'applications web réactives avec React, JavaScript, Laravel, PHP, API REST et bases de données relationnelles."
      },
      {
        en: "Designed digital brand identities, graphics, and video media utilizing Adobe Photoshop, Illustrator, and Premiere Pro.",
        fr: "Création d'identités visuelles, supports graphiques et vidéos via Adobe Photoshop, Illustrator et Premiere Pro."
      }
    ],
    technologies: ["React", "Symfony", "Laravel", "PHP", "Node.js", "MySQL", "Git", "Adobe Creative Cloud"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: { en: "Frontend Engineering", fr: "Ingénierie Frontend" },
    description: {
      en: "Modern, responsive, accessible web interfaces built with component architectures.",
      fr: "Interfaces web modernes, réactives et accessibles conçues par composants."
    },
    skills: [
      { name: "React", level: "Core Stack", highlight: true },
      { name: "TypeScript", level: "Core Stack", highlight: true },
      { name: "JavaScript (ES6+)", level: "Core Stack", highlight: true },
      { name: "HTML5 / Semantic Web", level: "Core Stack" },
      { name: "CSS3 / Modern CSS", level: "Core Stack" },
      { name: "Angular", level: "Coursework / Familiar" },
      { name: "Vite / Modern Bundlers", level: "Core Stack" },
      { name: "Tailwind CSS / Framer Motion", level: "Applied (Calligraphy Platform)", highlight: true },
      { name: "Responsive UI/UX", level: "Core Stack" }
    ]
  },
  {
    id: "backend",
    name: { en: "Backend & Systems", fr: "Backend & Systèmes" },
    description: {
      en: "Robust server-side architectures, RESTful APIs, and transaction-safe workflows.",
      fr: "Architectures serveur robustes, API RESTful et transactions fiables."
    },
    skills: [
      { name: "Node.js", level: "Core Stack", highlight: true },
      { name: "Express", level: "Core Stack" },
      { name: "Symfony", level: "Production Experience", highlight: true },
      { name: "Laravel", level: "Production Experience", highlight: true },
      { name: "PHP", level: "Core Stack" },
      { name: "Java / Spring Boot", level: "Coursework / Foundations" },
      { name: "Python / FastAPI", level: "Applied" },
      { name: "RESTful API Design", level: "Core Stack" }
    ]
  },
  {
    id: "databases",
    name: { en: "Databases & ORM", fr: "Bases de Données & ORM" },
    description: {
      en: "Relational data modeling, schema migrations, and query optimization.",
      fr: "Modélisation relationnelle, migrations de schémas et optimisation de requêtes."
    },
    skills: [
      { name: "PostgreSQL", level: "Core Stack", highlight: true },
      { name: "MySQL", level: "Core Stack", highlight: true },
      { name: "SQLite", level: "Core Stack" },
      { name: "PostGIS", level: "Applied (Datalia)" },
      { name: "Doctrine ORM", level: "Production Experience" },
      { name: "Database Design & Normalization", level: "Core Stack" }
    ]
  },
  {
    id: "tools",
    name: { en: "Development Tools & DevOps", fr: "Outils de Dév & DevOps" },
    description: {
      en: "Version control, automated testing, containerization, and production tooling.",
      fr: "Gestion de versions, tests automatisés, conteneurisation et outils de production."
    },
    skills: [
      { name: "Git & GitHub", level: "Core Stack", highlight: true },
      { name: "Docker", level: "Applied", highlight: true },
      { name: "Automated Testing", level: "Applied (CI/CD)" },
      { name: "Postman / API Testing", level: "Core Stack" },
      { name: "GitHub Codespaces", level: "Applied" },
      { name: "Linux / Ubuntu", level: "Applied" },
      { name: "CI / CD Pipelines", level: "Applied" }
    ]
  },
  {
    id: "ai",
    name: { en: "AI & Automation", fr: "IA & Automatisation" },
    description: {
      en: "Agentic AI workflows, LLM integration, and real-time event synchronization.",
      fr: "Workflows IA agentiques, intégration de LLM et synchronisation temps réel."
    },
    skills: [
      { name: "Google Gemini API", level: "Applied in Production", highlight: true },
      { name: "Anthropic Claude Code (Certified)", level: "Certified Agentic Workflows", highlight: true },
      { name: "LLM APIs & Prompt Engineering", level: "Applied", highlight: true },
      { name: "GitHub Copilot (Certified)", level: "Certified" },
      { name: "Socket.IO / WebSockets", level: "Real-Time Systems" },
      { name: "AI Workflow Automation", level: "Applied" }
    ]
  },
  {
    id: "multimedia",
    name: { en: "Multimedia & Design", fr: "Multimédia & Design" },
    description: {
      en: "Visual brand identity, UI prototypes, video editing, and digital media production.",
      fr: "Identité visuelle, maquettes d'interface, montage vidéo et production multimédia."
    },
    skills: [
      { name: "Adobe Photoshop", level: "Advanced Proficiency" },
      { name: "Adobe Premiere Pro", level: "Video Production" },
      { name: "Adobe Illustrator", level: "Vector & Logo Design" },
      { name: "Brand Identity Design", level: "Applied" }
    ]
  }
];

export const certifications: CertificationItem[] = [
  {
    id: "claude-code",
    title: "Claude Code in Action",
    issuer: "Anthropic",
    year: "2026",
    category: "ai",
    badgeText: "Anthropic Certified",
    description: {
      en: "Comprehensive training on agentic AI-assisted software engineering: planning, writing, debugging, multi-step actions, and context-aware terminal workflows.",
      fr: "Formation approfondie en ingénierie logicielle assistée par agents IA : planification, rédaction de code, débogage et workflows en ligne de commande."
    }
  },
  {
    id: "cs50",
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University (edX)",
    year: "2024",
    category: "cs",
    badgeText: "HarvardX Verified",
    description: {
      en: "Rigorous computer science benchmark covering low-level memory in C, data structures (tries, hash tables, linked lists), Python, and algorithmic complexity.",
      fr: "Référence mondiale en informatique fondamentale couvrant la mémoire en C, les structures de données, Python et la complexité algorithmique."
    }
  },
  {
    id: "ms-copilot",
    title: "Artificial Intelligence & GitHub Copilot Learning Path",
    issuer: "Microsoft",
    year: "2024",
    category: "ai",
    badgeText: "Microsoft Digital Badge",
    description: {
      en: "Validated competencies in AI-assisted coding, model behavior, optimized prompt design, and safe AI tooling integration.",
      fr: "Compétences validées en développement assisté par IA, comportement des modèles, prompt engineering et intégration sécurisée."
    }
  },
  {
    id: "ms-git",
    title: "Version Control, GitHub & Cloud Development",
    issuer: "Microsoft",
    year: "2024",
    category: "cs",
    badgeText: "Microsoft Digital Badge",
    description: {
      en: "Advanced source control, code scanning security practices, cloud environments with GitHub Codespaces, and collaborative team branching.",
      fr: "Gestion avancée de code source, pratiques de sécurité par analyse de code, environnements GitHub Codespaces et travail collaboratif."
    }
  },
  {
    id: "ms-cloud",
    title: "Cloud Computing & Services Fundamentals",
    issuer: "Microsoft",
    year: "2024",
    category: "cloud",
    badgeText: "Microsoft Digital Badge",
    description: {
      en: "Foundational cloud architecture concepts: scalability, high availability, cloud service models (IaaS, PaaS, SaaS), and security governance.",
      fr: "Concepts fondamentaux du cloud computing : élasticité, haute disponibilité, modèles de services (IaaS, PaaS, SaaS) et sécurité."
    }
  },
  {
    id: "ibm-ai",
    title: "Artificial Intelligence in Modern Education",
    issuer: "IBM SkillsBuild",
    year: "2024",
    category: "ai",
    badgeText: "IBM Digital Badge",
    description: {
      en: "Practical frameworks for integrating AI into educational workflows, data ethics, and automated learning systems.",
      fr: "Cadres pratiques d'intégration de l'IA dans l'éducation, éthique des données et systèmes d'apprentissage automatisés."
    }
  },
  {
    id: "ielts",
    title: "IELTS Academic — English Proficiency",
    issuer: "British Council / IDP",
    year: "Validated",
    category: "language",
    badgeText: "Professional Working",
    description: {
      en: "Internationally standardized assessment certifying professional working fluency in written and spoken English for international software teams.",
      fr: "Certification internationale attestant de l'aisance professionnelle écrite et orale en anglais pour équipes logicielles internationales."
    }
  },
  {
    id: "us-embassy",
    title: "Business Management & AI-Enhanced Training",
    issuer: "International Initiative (Supported by U.S. Embassy & Partners)",
    year: "2024",
    category: "leadership",
    badgeText: "International Certificate",
    description: {
      en: "Cross-functional training blending business operations, modern project leadership, and AI-driven organizational workflows.",
      fr: "Programme interdisciplinaire combinant gestion de projet, leadership moderne et méthodologies assistées par IA."
    }
  }
];

export const internationalLeadership = {
  eventTitle: {
    en: "First Arab Gathering — Impact of Social Media on Youth",
    fr: "Premier Rassemblement Arabe — L'Impact des Réseaux Sociaux sur les Jeunes"
  },
  headline: {
    en: "Representing Tunisian Youth on an International Stage",
    fr: "Représenter la Jeunesse Tunisienne sur la Scène Internationale"
  },
  location: {
    en: "Rabat, Morocco",
    fr: "Rabat, Maroc"
  },
  dates: {
    en: "June 23–25, 2026",
    fr: "23–25 Juin 2026"
  },
  organizers: {
    en: "Moroccan Ministry of Youth, Culture and Communication & The League of Arab States",
    fr: "Ministère de la Jeunesse, de la Culture et de la Communication du Maroc & Ligue des États Arabes"
  },
  roleSummary: {
    en: "Selected as one of only two official Tunisian youth delegates to represent the nation among youth leaders from 22 Arab countries in Rabat, Morocco.",
    fr: "Sélectionné comme l'un des deux seuls délégués officiels de la jeunesse tunisienne pour représenter la nation parmi des représentants de 22 pays arabes à Rabat, Maroc."
  },
  narrativeParagraphs: [
    {
      en: "Participated in high-level diplomatic panels and collaborative workshops focused on digital safety, online mental health, combating algorithmic extremism, and championing responsible digital citizenship.",
      fr: "Participation à des panels diplomatiques de haut niveau et ateliers collaboratifs axés sur la sécurité numérique, la santé mentale en ligne, la lutte contre l'extrémisme algorithmique et la citoyenneté numérique responsable."
    },
    {
      en: "Collaborated directly with youth delegations across the Arab world to formulate strategic recommendations for digital empowerment, ethical tech usage, and youth-led digital initiatives.",
      fr: "Collaboration directe avec les délégations de jeunes de tout le monde arabe pour formuler des recommandations stratégiques sur l'émancipation numérique et l'éthique technologique."
    }
  ],
  stats: [
    { value: "2", label: { en: "Tunisian Delegates", fr: "Délégués Tunisiens" } },
    { value: "22", label: { en: "Arab Nations", fr: "Nations Arabes" } },
    { value: "3", label: { en: "Days of Summits", fr: "Jours de Sommet" } },
    { value: "🇹🇳 🇲🇦", label: { en: "Diplomatic Representation", fr: "Représentation Diplomatique" } }
  ]
};

export const documentHub: DocumentItem[] = [
  {
    id: "cv",
    title: {
      en: "Curriculum Vitae (Software Engineering)",
      fr: "Curriculum Vitae (Génie Logiciel)"
    },
    description: {
      en: "Up-to-date resume highlighting full-stack engineering internships, tech stack, verified certifications, and education.",
      fr: "CV actualisé mettant en valeur les stages en développement full-stack, technologies, certifications et parcours universitaire."
    },
    fileEn: "/assets/Bara_Nsaibia_CV_EN.pdf",
    fileFr: "/assets/Bara_Nsaibia_CV_FR.pdf",
    pageCount: "2 Pages",
    type: "cv"
  },
  {
    id: "social-report",
    title: {
      en: "Social & Academic Experience Report",
      fr: "Rapport d'Expérience Sociale & Académique"
    },
    description: {
      en: "Comprehensive 44-page verified portfolio documenting institutional internships, ministerial attestations, leadership summits, and authentic photo records.",
      fr: "Portfolio complet de 44 pages documentant les stages institutionnels, attestations ministérielles, sommets internationaux et pièces justificatives."
    },
    fileEn: "/assets/social_experience_EN.pdf",
    fileFr: "/assets/social_experience_FR.pdf",
    pageCount: "44 Pages",
    type: "report"
  }
];
