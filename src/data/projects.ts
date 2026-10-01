export type ProjectCategory = 'Entreprise' | 'Formation' | 'Personnel';

export interface ProjectSummary {
  slug: string;
  emoji: string;
  title: string;
  description: string;
  category: ProjectCategory;
  period: string;
}

export const projects: ProjectSummary[] = [
  {
    slug: 'infrastructure',
    emoji: '🏭',
    title: 'Réseau industriel sécurisé — site client sensible',
    description: 'pfSense 2.7 CE, 4 VLANs industriels, air gap, filtrage strict default deny, 16 IHM, automates',
    category: 'Entreprise',
    period: '2024/2025',
  },
  {
    slug: 'active-directory',
    emoji: '🖥️',
    title: 'Active Directory & GPO',
    description: 'Windows Server, domaine AD, Unités d\'Organisation, stratégies de groupe, droits d\'accès',
    category: 'Entreprise',
    period: '2024/2025',
  },
  {
    slug: 'rudder',
    emoji: '🔧',
    title: 'Rudder — Gestion de configuration',
    description: 'Standardisation 3 serveurs, compliance, mises à jour automatiques sécurisées',
    category: 'Entreprise',
    period: '2024/2025',
  },
  {
    slug: 'supervision',
    emoji: '🛡️',
    title: 'Supervision Wazuh',
    description: 'SIEM Wazuh 4.14 : FIM temps réel, Active Response SSH, authentification AD, intégration automatique avec GLPI',
    category: 'Formation',
    period: '2025/2026',
  },
  {
    slug: 'glpi',
    emoji: '🎫',
    title: 'GLPI Ticketing N1/N2/N3',
    description: 'Implémentation GLPI, structure support IT hiérarchique, workflows escalade, catalogue services',
    category: 'Entreprise',
    period: '2024/2025',
  },
  {
    slug: 'nas-synology',
    emoji: '💾',
    title: 'Sauvegarde NAS Synology',
    description: 'Réplication entre 3 NAS Synology via Hyper Backup, dumps MySQL automatisés via Rudder, stratégie 3-2-1',
    category: 'Entreprise',
    period: '2024/2025',
  },
  {
    slug: 'analyse-trafic',
    emoji: '🔍',
    title: 'Analyse trafic réseau',
    description: 'Port mirroring SPAN sur Cisco SG500X, capture et analyse avec ntopng et Arkime/OpenSearch',
    category: 'Formation',
    period: '2024/2025',
  },
  {
    slug: 'ntopng',
    emoji: '📊',
    title: 'ntopng — Monitoring de trafic réseau',
    description: 'Déploiement ntopng Community Edition, port SPAN, analyse DPI 500+ protocoles, dashboard temps réel',
    category: 'Entreprise',
    period: '2024/2025',
  },
  {
    slug: 'masterisation-ihm',
    emoji: '🏭',
    title: 'Masterisation & Configuration IHM Windows — MDT / WDS',
    description: 'Masterisation des postes Windows, déploiement et paramétrage des interfaces IHM pour automates industriels, configuration réseau industriel, tests d\'intégration',
    category: 'Entreprise',
    period: '2024/2025',
  },
  {
    slug: 'bookstack',
    emoji: '📚',
    title: 'BookStack — Wiki d\'infrastructure',
    description: 'Wiki de documentation conteneurisé via Docker Compose, intégration LDAP/Active Directory, reverse proxy HTTPS Nginx',
    category: 'Formation',
    period: '2026',
  },
  {
    slug: 'portfolio',
    emoji: '🌐',
    title: 'Portfolio professionnel',
    description: 'React, TypeScript, Vite, Tailwind CSS, DNS, hébergement, identité professionnelle en ligne',
    category: 'Personnel',
    period: '2025/2026',
  },
  {
    slug: 'homelab',
    emoji: '🏠',
    title: 'Homelab — réseau segmenté et services auto-hébergés',
    description: 'Lab réseau derrière un FortiGate 30E, Raspberry Pi 5 sous Docker avec plus de dix services auto-hébergés, Proxmox pour les VM de test',
    category: 'Personnel',
    period: 'En cours',
  },
  {
    slug: 'videosurveillance',
    emoji: '📹',
    title: 'Vidéosurveillance IP — architecture et audit',
    description: 'Architecture réseau d\'un système de 15 caméras IP eneo pour un client : enregistreurs DVR/NVR, pont Wi-Fi, schéma et audit de sécurité',
    category: 'Entreprise',
    period: '2025/2026',
  },
];
