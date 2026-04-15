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

  const realisations = [
    {
      title: 'Infrastructure réseau sécurisée (pfSense, IDS/IPS, VLANs)',
      period: 'Sept. 2024 – Fév. 2025',
      competencies: { C1: true, C2: false, C3: false, C4: false, C5: true, C6: false },
    },
    {
      title: 'Active Directory & GPO (Windows Server, OU, GPO)',
      period: 'Oct. 2024 – Mars 2025',
      competencies: { C1: true, C2: false, C3: false, C4: false, C5: true, C6: false },
    },
    {
      title: 'Supervision Zabbix & Wazuh (monitoring, SIEM, Rudder-Zabbix)',
      period: 'Nov. 2024 – Juin 2025',
      competencies: { C1: true, C2: true, C3: false, C4: false, C5: true, C6: false },
    },
    {
      title: 'GLPI Ticketing N1/N2/N3 (support IT hiérarchique)',
      period: 'Janv. 2025 – Avril 2025',
      competencies: { C1: false, C2: true, C3: false, C4: true, C5: true, C6: false },
    },
    {
      title: 'Rudder gestion de configuration (3 serveurs, compliance)',
      period: 'Déc. 2024 – Juin 2025',
      competencies: { C1: true, C2: true, C3: false, C4: false, C5: false, C6: false },
    },
    {
      title: 'Portfolio professionnel (React, Vite, Tailwind, DNS, hébergement)',
      period: 'Sept. 2025 – Mars 2026',
      competencies: { C1: false, C2: false, C3: true, C4: true, C5: false, C6: true },
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
              <p className="text-white font-medium">À compléter avant l'examen</p>
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
          Télécharger le tableau .xlsx
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
                {realisations.map((real, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-[#0d1117]/50">
                    <td className="px-4 py-4 text-gray-300">{real.title}</td>
                    <td className="px-4 py-4 text-gray-400 whitespace-nowrap">{real.period}</td>
                    <td className="px-4 py-4 text-center">
                      {real.competencies.C1 && <span className="text-[#00d4a0] text-lg">✓</span>}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {real.competencies.C2 && <span className="text-[#00d4a0] text-lg">✓</span>}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {real.competencies.C3 && <span className="text-[#00d4a0] text-lg">✓</span>}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {real.competencies.C4 && <span className="text-[#00d4a0] text-lg">✓</span>}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {real.competencies.C5 && <span className="text-[#00d4a0] text-lg">✓</span>}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {real.competencies.C6 && <span className="text-[#00d4a0] text-lg">✓</span>}
                    </td>
                  </tr>
                ))}
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
