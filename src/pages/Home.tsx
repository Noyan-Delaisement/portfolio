import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import AlternanceCard from '../components/AlternanceCard';
import { projects } from '../data/projects';

export default function Home() {
  const skillCards: { title: string; items: string[]; link?: { to: string; label: string } }[] = [
    {
      title: 'Compétences techniques',
      items: [
        'Systèmes (Windows Server, Linux Debian)',
        'Réseaux (VLAN, pfSense, DHCP, DNS)',
        'Virtualisation (Proxmox, VMware, Docker)',
        'Sécurité (pare-feu, IDS/IPS, SIEM)',
      ],
    },
    {
      title: 'Projets réalisés',
      items: [
        'Homelab (FortiGate, Proxmox, Docker)',
        'SIEM Wazuh + intégration GLPI',
        'Réseau industriel sécurisé (pfSense, VLAN)',
        'Active Directory & GPO',
        'Vidéosurveillance IP',
        'Portfolio React / TypeScript',
      ],
      link: { to: '/projets', label: `Voir les ${projects.length} projets →` },
    },
    {
      title: 'Formation',
      items: [
        'ESGI Bachelor Systèmes Réseaux Cloud (2026 — en cours)',
        'BTS SIO SISR (2024-2026) — obtenu',
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
              À la recherche d'une alternance — Disponible immédiatement
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              DELAISEMENT Noyan
            </h1>
            <p className="text-xl sm:text-2xl text-[#4f8eff] font-medium">
              Bachelor Systèmes, Réseaux & Cloud Computing — ESGI Toulouse
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionné par l'administration systèmes & réseaux, la cybersécurité et les
              infrastructures IT. Titulaire du BTS SIO SISR après un apprentissage chez PREM
              Automation à Toulouse, je recherche une alternance pour mon Bachelor.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 pt-4">
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
              <a
                href="/Delaisement_Noyan.pdf"
                download
                className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-gray-600 hover:border-[#4f8eff] text-gray-300 hover:text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AlternanceCard />
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
                {card.link && (
                  <Link
                    to={card.link.to}
                    className="inline-block mt-4 text-sm font-medium text-[#4f8eff] hover:text-[#6ea8ff] transition-colors"
                  >
                    {card.link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
