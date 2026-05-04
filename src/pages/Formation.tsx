import { Briefcase, GraduationCap } from 'lucide-react';

export default function Formation() {
  const experience = {
    company: 'PREM Automation',
    role: 'Technicien informatique apprenti',
    period: '2024 — présent',
    location: 'Toulouse, France',
    missions: [
      'Administration infrastructure 2 serveurs / 10+ services',
      'Déploiement pfSense + IDS/IPS',
      'Configuration Active Directory + GPO',
      'Mise en place supervision Zabbix + Wazuh',
      'Implémentation GLPI ticketing N1/N2/N3',
      'Gestion configuration Rudder',
      'Sécurisation réseau VLANs',
    ],
  };

  const formations = [
    {
      title: 'BTS SIO option SISR',
      period: '2024-2026',
      institution: 'CFAI Beauzelle — Toulouse',
      modules: [
        'Administration systèmes',
        'Réseaux',
        'Sécurité informatique',
        'Cybersécurité',
        'Projet professionnel',
      ],
    },
    {
      title: 'Bachelor Systèmes, Réseaux & Cloud Computing',
      period: 'À partir de septembre 2026',
      institution: 'ESGI Toulouse',
      modules: [
        'Spécialisation Cloud',
        'Virtualisation',
        'Cybersécurité avancée',
        'Alternance',
      ],
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white flex items-center gap-3">
            <GraduationCap className="text-[#4f8eff]" size={36} />
            Formation & Expériences
          </h1>
          <div className="h-1 w-24 bg-[#4f8eff] rounded"></div>
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
            <Briefcase className="text-[#00d4a0]" size={28} />
            Expérience professionnelle
          </h2>
          <div className="relative pl-8 border-l-2 border-[#00d4a0]">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#00d4a0] border-4 border-[#0d1117]"></div>
            <div className="bg-[#161b22] border border-gray-800 rounded-lg p-6 hover:border-[#00d4a0]/50 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{experience.company}</h3>
                  <p className="text-[#00d4a0] font-medium">{experience.role}</p>
                </div>
                <span className="text-sm text-gray-400">{experience.period}</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">{experience.location}</p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-300">Missions :</p>
                <ul className="space-y-2">
                  {experience.missions.map((mission, index) => (
                    <li key={index} className="text-sm text-gray-400 flex items-start">
                      <span className="text-[#00d4a0] mr-2">•</span>
                      <span>{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="text-[#4f8eff]" size={28} />
            Formation
          </h2>
          <div className="relative pl-8 border-l-2 border-[#4f8eff] space-y-8">
            {formations.map((formation, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#4f8eff] border-4 border-[#0d1117]"></div>
                <div className="bg-[#161b22] border border-gray-800 rounded-lg p-6 hover:border-[#4f8eff]/50 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{formation.title}</h3>
                      <p className="text-[#4f8eff] font-medium">{formation.institution}</p>
                    </div>
                    <span className="text-sm text-gray-400">{formation.period}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-300">Modules :</p>
                    <div className="flex flex-wrap gap-2">
                      {formation.modules.map((module, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#4f8eff]/20 text-[#4f8eff] rounded-md text-sm border border-[#4f8eff]/30"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
