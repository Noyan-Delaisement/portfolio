import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const skillCards = [
    {
      title: 'Compétences techniques',
      items: [
        'Systèmes (Windows Server, Linux Debian)',
        'Réseaux (VLAN, pfSense, DHCP, DNS)',
        'Virtualisation (VirtualBox, VMware, Docker)',
        'Sécurité (pare-feu, IDS/IPS, SIEM)',
      ],
    },
    {
      title: 'Projets réalisés',
      items: [
        'Infrastructure réseau',
        'Active Directory',
        'Supervision Wazuh',
        'GLPI Ticketing',
        'Rudder',
        'Portfolio web',
      ],
    },
    {
      title: 'Formation',
      items: [
        'BTS SIO SISR (2024-2026)',
        'ESGI Bachelor Systèmes Réseaux Cloud (Sept. 2026)',
      ],
    },
    {
      title: 'Soft skills',
      items: [
        'Esprit d\'analyse',
        'Autonomie',
        'Rigueur',
        'Curiosité technologique',
        'Travail en équipe',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4f8eff]/5 to-transparent"></div>
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d4a0]/10 border border-[#00d4a0]/30 rounded-full text-sm text-[#00d4a0] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#00d4a0] animate-pulse"></span>
              Disponible en alternance — Septembre 2026
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              DELAISEMENT Noyan
            </h1>
            <p className="text-xl sm:text-2xl text-[#4f8eff] font-medium">
              BTS SIO SISR — Technicien informatique en apprentissage
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionné par l'administration systèmes & réseaux, la cybersécurité et les
              infrastructures IT. Actuellement en apprentissage chez PREM Automation à Toulouse.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/projets"
                className="group w-full sm:w-auto px-8 py-3 bg-[#4f8eff] hover:bg-[#6ea8ff] text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2"
              >
                Voir mes projets
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-gray-600 hover:border-[#4f8eff] text-gray-300 hover:text-white font-medium rounded-lg transition-all"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#161b22] border border-gray-800 rounded-lg p-6 hover:border-[#4f8eff]/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <span className="text-[#4f8eff] mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
