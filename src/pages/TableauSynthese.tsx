import { FileSpreadsheet, Download } from 'lucide-react';
import CompetencyBadge from '../components/CompetencyBadge';

export default function TableauSynthese() {
  const competencies = [
    { code: 'C1', label: 'Gérer le patrimoine informatique' },
    { code: 'C2', label: 'Répondre aux incidents et demandes' },
    { code: 'C3', label: 'Développer la présence en ligne' },
    { code: 'C4', label: 'Travailler en mode projet' },
    { code: 'C5', label: 'Mettre à disposition un service informatique' },
    { code: 'C6', label: 'Organiser son développement professionnel' },
  ];

  const sections = [
    {
      label: 'Réalisation en cours de formation',
      items: [
        {
          title: 'SIEM Wazuh — 10 agents Debian/Windows, FIM, SCA, règles CVE, authentification LDAP/AD',
          period: '01/10/25 – 30/04/26',
          competencies: { C1: true, C2: true, C3: false, C4: false, C5: true, C6: false },
        },
        {
          title: 'Portfolio professionnel (React, TypeScript, Vite, Tailwind — hébergement LXC, Cloudflare Tunnel)',
          period: '01/01/26 – 30/04/26',
          competencies: { C1: false, C2: false, C3: true, C4: true, C5: false, C6: true },
        },
        {
          title: 'Déploiement automatisé de postes Windows avec MDT (WDS + ADK/WinPE, PXE, Windows Server 2022)',
          period: '01/11/25 – 15/01/26',
          competencies: { C1: true, C2: true, C3: false, C4: true, C5: true, C6: false },
        },
        {
          title: 'BookStack — Déploiement Docker Compose, authentification LDAP/AD, reverse proxy HTTPS Nginx',
          period: '15/02/26 – 30/03/26',
          competencies: { C1: true, C2: true, C3: false, C4: false, C5: true, C6: false },
        },
        {
          title: 'Scripting (Bash / PowerShell / YAML) — automatisation infra, sauvegardes, agents Wazuh',
          period: '01/09/24 – 30/06/26',
          competencies: { C1: true, C2: true, C3: false, C4: false, C5: true, C6: false },
        },
        {
          title: 'Supervision Zabbix — monitoring temps réel CPU/RAM/services sur 3 serveurs, intégration LDAP/AD',
          period: '01/02/26 – 15/03/26',
          competencies: { C1: true, C2: true, C3: false, C4: false, C5: true, C6: false },
        },
        {
          title: 'Rudder — Gestion de configuration centralisée, standardisation 3 serveurs, compliance',
          period: '01/10/25 – 30/06/26',
          competencies: { C1: true, C2: true, C3: false, C4: false, C5: false, C6: false },
        },
      ],
    },
    {
      label: 'Réalisations en milieu professionnel — Première année',
      items: [
        {
          title: 'Infrastructure réseau sécurisée — PREM Automation (pfSense, IDS/IPS Suricata, VLANs 802.1Q)',
          period: '01/09/24 – 30/11/24',
          competencies: { C1: true, C2: false, C3: false, C4: false, C5: true, C6: false },
        },
        {
          title: 'Active Directory & GPO — PREM Automation (Windows Server, OU, stratégies de groupe)',
          period: '01/10/24 – 31/01/25',
          competencies: { C1: true, C2: false, C3: false, C4: false, C5: true, C6: false },
        },
        {
          title: 'GLPI Ticketing N1/N2/N3 — PREM Automation (support IT hiérarchique, workflows escalade)',
          period: '01/11/24 – 31/03/25',
          competencies: { C1: false, C2: true, C3: false, C4: true, C5: true, C6: false },
        },
      ],
    },
    {
      label: 'Réalisations en milieu professionnel — Deuxième année',
      items: [
        {
          title: 'Configuration des IHM Windows — PREM Automation (paramétrage postes IHM, réseau industriel, tests)',
          period: '01/09/25 – 30/06/26',
          competencies: { C1: true, C2: true, C3: false, C4: true, C5: true, C6: false },
        },
        {
          title: 'Stratégie de sauvegarde — PREM Automation (3 NAS Synology, Hyper Backup, tests de restauration)',
          period: '01/09/25 – 30/06/26',
          competencies: { C1: true, C2: true, C3: false, C4: true, C5: true, C6: false },
        },
        {
          title: 'Automatisation des dumps MySQL vers NAS Synology avec CRON',
          period: '10/03/26 – 20/03/26',
          competencies: { C1: true, C2: true, C3: false, C4: false, C5: false, C6: false },
        },
        {
          title: 'Analyse de trame avec Arkime et ntopng — configuration switch SPAN (port mirroring)',
          period: '01/03/26 – 31/03/26',
          competencies: { C1: true, C2: true, C3: false, C4: false, C5: false, C6: false },
        },
      ],
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white flex items-center gap-3">
            <FileSpreadsheet className="text-[#4f8eff]" size={36} />
            Tableau de synthèse E5
          </h1>
          <div className="h-1 w-24 bg-[#4f8eff] rounded"></div>
        </div>

        <div className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Nom et prénom</span>
              <p className="text-white font-medium">DELAISEMENT Noyan</p>
            </div>
            <div>
              <span className="text-gray-400">N° candidat</span>
              <p className="text-white font-medium">02147230919</p>
            </div>
            <div>
              <span className="text-gray-400">Centre de formation</span>
              <p className="text-white font-medium">CFAI Beauzelle — Toulouse</p>
            </div>
            <div>
              <span className="text-gray-400">Option</span>
              <p className="text-white font-medium">SISR</p>
            </div>
            <div>
              <span className="text-gray-400">Session</span>
              <p className="text-white font-medium">2026</p>
            </div>
            <div>
              <span className="text-gray-400">URL portfolio</span>
              <a
                href="https://ndfolio.dlsmnt.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4f8eff] hover:underline font-medium"
              >
                ndfolio.dlsmnt.fr
              </a>
            </div>
          </div>
        </div>

        <a
          href="/Tableau_Synthese_E5.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d4a0] hover:bg-[#00e6b4] text-gray-900 font-medium rounded-lg transition-colors"
        >
          <Download size={20} />
          Télécharger le tableau .pdf
        </a>

        

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

        <div className="bg-[#161b22] border border-gray-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#0d1117] border-b border-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left text-white font-semibold">Réalisation</th>
                  <th className="px-4 py-3 text-left text-white font-semibold">Période</th>
                  <th className="px-4 py-3 text-center text-white font-semibold">C1</th>
                  <th className="px-4 py-3 text-center text-white font-semibold">C2</th>
                  <th className="px-4 py-3 text-center text-white font-semibold">C3</th>
                  <th className="px-4 py-3 text-center text-white font-semibold">C4</th>
                  <th className="px-4 py-3 text-center text-white font-semibold">C5</th>
                  <th className="px-4 py-3 text-center text-white font-semibold">C6</th>
                </tr>
              </thead>
              <tbody>
                {sections.flatMap((section, sIdx) => [
                  <tr key={`s-${sIdx}`} className="bg-[#0d1117]">
                    <td colSpan={8} className="px-4 py-2 text-xs font-semibold text-[#4f8eff] uppercase tracking-wider border-b border-t border-gray-700">
                      {section.label}
                    </td>
                  </tr>,
                  ...section.items.map((real, idx) => (
                    <tr key={`${sIdx}-${idx}`} className="border-b border-gray-800 hover:bg-[#0d1117]/50">
                      <td className="px-4 py-4 text-gray-300 text-sm">{real.title}</td>
                      <td className="px-4 py-4 text-gray-400 whitespace-nowrap text-sm">{real.period}</td>
                      {(['C1','C2','C3','C4','C5','C6'] as const).map(c => (
                        <td key={c} className="px-4 py-4 text-center">
                          {real.competencies[c] && <span className="text-[#00d4a0] text-lg">✓</span>}
                        </td>
                      ))}
                    </tr>
                  )),
                ])}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#161b22] border border-[#4f8eff]/30 rounded-lg p-4">
          <p className="text-sm text-gray-400 text-center">
            Tableau conforme au modèle Annexe VI-1 — BTS SIO session 2026
          </p>
        </div>
      </div>
    </div>
  );
}
