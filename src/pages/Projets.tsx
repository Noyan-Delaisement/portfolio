import { Link } from 'react-router-dom';
import { FolderOpen, ArrowRight } from 'lucide-react';
import CompetencyBadge from '../components/CompetencyBadge';

export default function Projets() {
  const competencies = [
    { code: 'C1', label: 'Gérer le patrimoine informatique' },
    { code: 'C2', label: 'Répondre aux incidents et demandes' },
    { code: 'C3', label: 'Développer la présence en ligne' },
    { code: 'C4', label: 'Travailler en mode projet' },
    { code: 'C5', label: 'Mettre à disposition un service informatique' },
    { code: 'C6', label: 'Organiser son développement professionnel' },
  ];

  const projects = [
    {
      emoji: '📡',
      title: 'Infrastructure réseau sécurisée',
      description: 'pfSense, règles de filtrage avancées, IDS/IPS Suricata, VLANs 802.1Q, DHCP, DNS',
      competencies: ['C1', 'C5'],
      period: 'PREM Automation 2024/2025',
      link: '/projets/infrastructure',
    },
    {
      emoji: '🖥️',
      title: 'Active Directory & GPO',
      description: 'Windows Server, domaine AD, Unités d\'Organisation, stratégies de groupe, droits d\'accès',
      competencies: ['C1', 'C5'],
      period: 'PREM Automation 2024/2025',
      link: '/projets/active-directory',
    },
    {
      emoji: '📊',
      title: 'Supervision Zabbix & Wazuh',
      description: 'Monitoring temps réel CPU/RAM/services, SIEM, alertes automatiques, intégration Rudder-Zabbix, 3 serveurs 20+ services',
      competencies: ['C1', 'C2', 'C5'],
      period: 'PREM Automation 2024/2025',
      link: '/projets/supervision',
    },
    {
      emoji: '🎫',
      title: 'GLPI Ticketing N1/N2/N3',
      description: 'Implémentation GLPI, structure support IT hiérarchique, workflows escalade, catalogue services',
      competencies: ['C2', 'C4', 'C5'],
      period: 'PREM Automation 2024/2025',
      link: '/projets/glpi',
    },
    {
      emoji: '🔧',
      title: 'Rudder — Gestion de configuration',
      description: 'Standardisation 3 serveurs, compliance, mises à jour automatiques sécurisées, intégration Zabbix',
      competencies: ['C1', 'C2'],
      period: 'PREM Automation 2024/2025',
      link: '/projets/rudder',
    },
    {
      emoji: '💾',
      title: 'Sauvegarde NAS Synology',
      description: 'Réplication entre 3 NAS Synology via Hyper Backup, dumps MySQL automatisés via Rudder, stratégie 3-2-1',
      competencies: ['C1', 'C2', 'C4', 'C5'],
      period: 'PREM Automation 2024/2025',
      link: '/projets/nas-synology',
    },
    {
      emoji: '🏭',
      title: 'Masterisation & Configuration IHM Windows',
      description: 'Masterisation des postes Windows, déploiement et paramétrage des interfaces IHM pour automates industriels, configuration réseau industriel, tests d\'intégration',
      competencies: ['C1', 'C2', 'C4', 'C5'],
      period: 'PREM Automation 2024/2025',
      link: '/projets/masterisation-ihm',
    },
    {
      emoji: '🔍',
      title: 'Analyse trafic réseau',
      description: 'Port mirroring SPAN sur Cisco SG500X, capture et analyse avec ntopng et Arkime/OpenSearch',
      competencies: ['C1', 'C2', 'C5'],
      period: 'Infrastructure scolaire 2024/2025',
      link: '/projets/analyse-trafic',
    },
    {
      emoji: '🌐',
      title: 'Portfolio professionnel',
      description: 'React, TypeScript, Vite, Tailwind CSS, DNS, hébergement, identité professionnelle en ligne',
      competencies: ['C3', 'C4', 'C6'],
      period: 'BTS SIO 2025/2026',
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
            Voici l'ensemble de mes réalisations professionnelles réalisées en entreprise chez PREM
            Automation et en formation BTS SIO SISR. Chaque projet détaille le contexte, les actions
            menées, les outils utilisés et les compétences du bloc E5 mobilisées.
          </p>
        </div>

        <section className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Légende des compétences</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {competencies.map((comp) => (
              <div key={comp.code} className="flex items-center gap-2">
                <CompetencyBadge code={comp.code} />
                <span className="text-sm text-gray-400">{comp.label}</span>
              </div>
            ))}
          </div>
        </section>

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
                <div className="flex flex-wrap gap-2">
                  {project.competencies.map((comp) => (
                    <CompetencyBadge key={comp} code={comp} size="sm" />
                  ))}
                </div>
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
