import { Link } from 'react-router-dom';
import { FolderOpen, ArrowRight } from 'lucide-react';

export default function Projets() {
  const projects = [
    {
      emoji: '🏭',
      title: 'Réseau industriel sécurisé — site client sensible',
      description: 'pfSense 2.7 CE, 4 VLANs industriels, air gap, filtrage strict default deny, 16 IHM, automates',
      period: 'PREM Automation 2024/2025',
      link: '/projets/infrastructure',
    },
    {
      emoji: '🖥️',
      title: 'Active Directory & GPO',
      description: 'Windows Server, domaine AD, Unités d\'Organisation, stratégies de groupe, droits d\'accès',
      period: 'PREM Automation 2024/2025',
      link: '/projets/active-directory',
    },
    {
      emoji: '🔧',
      title: 'Rudder — Gestion de configuration',
      description: 'Standardisation 3 serveurs, compliance, mises à jour automatiques sécurisées',
      period: 'PREM Automation 2024/2025',
      link: '/projets/rudder',
    },
    {
      emoji: '🛡️',
      title: 'Supervision Wazuh',
      description: 'SIEM Wazuh, collecte et analyse logs sécurité, détection des menaces, intégration Active Directory',
      period: 'Infrastructure scolaire 2025/2026',
      link: '/projets/supervision',
    },
    {
      emoji: '🎫',
      title: 'GLPI Ticketing N1/N2/N3',
      description: 'Implémentation GLPI, structure support IT hiérarchique, workflows escalade, catalogue services',
      period: 'PREM Automation 2024/2025',
      link: '/projets/glpi',
    },
    {
      emoji: '💾',
      title: 'Sauvegarde NAS Synology',
      description: 'Réplication entre 3 NAS Synology via Hyper Backup, dumps MySQL automatisés via Rudder, stratégie 3-2-1',
      period: 'PREM Automation 2024/2025',
      link: '/projets/nas-synology',
    },
    {
      emoji: '🔍',
      title: 'Analyse trafic réseau',
      description: 'Port mirroring SPAN sur Cisco SG500X, capture et analyse avec ntopng et Arkime/OpenSearch',
      period: 'Infrastructure scolaire 2024/2025',
      link: '/projets/analyse-trafic',
    },
    {
      emoji: '📊',
      title: 'ntopng — Monitoring de trafic réseau',
      description: 'Déploiement ntopng Community Edition, port SPAN, analyse DPI 500+ protocoles, dashboard temps réel',
      period: 'PREM Automation 2024/2025',
      link: '/projets/ntopng',
    },
    {
      emoji: '🏭',
      title: 'Masterisation & Configuration IHM Windows',
      description: 'Masterisation des postes Windows, déploiement et paramétrage des interfaces IHM pour automates industriels, configuration réseau industriel, tests d\'intégration',
      period: 'PREM Automation 2024/2025',
      link: '/projets/masterisation-ihm',
    },
    {
      emoji: '📚',
      title: 'BookStack — Wiki d\'infrastructure',
      description: 'Wiki de documentation conteneurisé via Docker Compose, intégration LDAP/Active Directory, reverse proxy HTTPS Nginx',
      period: 'Infrastructure scolaire 2026',
      link: '/projets/bookstack',
    },
    {
      emoji: '🌐',
      title: 'Portfolio professionnel',
      description: 'React, TypeScript, Vite, Tailwind CSS, DNS, hébergement, identité professionnelle en ligne',
      period: 'Projet personnel 2025/2026',
      link: '/projets/portfolio',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white flex items-center gap-3">
            <FolderOpen className="text-[#4f8eff]" size={36} />
            Projets
          </h1>
          <div className="h-1 w-24 bg-[#4f8eff] rounded"></div>
          <p className="text-gray-300 text-lg max-w-4xl leading-relaxed">
            Voici l'ensemble de mes réalisations professionnelles menées en entreprise chez PREM
            Automation et en formation. Chaque projet détaille le contexte, les actions
            menées, les outils utilisés et les résultats obtenus.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="group bg-[#161b22] border border-gray-800 rounded-lg p-6 hover:border-[#4f8eff] transition-all hover:shadow-lg hover:shadow-[#4f8eff]/10"
            >
              <div className="space-y-4">
                <div className="text-4xl">{project.emoji}</div>
                <h3 className="text-xl font-semibold text-white group-hover:text-[#4f8eff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
                <p className="text-xs text-gray-500">{project.period}</p>
                <div className="flex items-center gap-2 text-[#4f8eff] text-sm font-medium pt-2">
                  Voir le projet
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
