import { User, Zap, Target, Lightbulb, Users, TrendingUp, Download } from 'lucide-react';

export default function Profil() {
  const technicalSkills = [
    { category: 'Systèmes', skills: 'Windows Server 2019/2022, Active Directory, GPO, Debian Linux, Rocky Linux' },
    { category: 'Réseaux', skills: 'VLAN 802.1Q, pfSense, Fortinet, Cisco, routage, DHCP, DNS, VPN, IDS/IPS Suricata' },
    { category: 'Supervision', skills: 'Zabbix, Wazuh (SIEM/XDR), Rudder (configuration management)' },
    { category: 'Virtualisation', skills: 'Proxmox, VirtualBox, VMware, Docker, Docker Compose' },
    { category: 'ITSM', skills: 'GLPI, FusionInventory, ticketing N1/N2/N3' },
    { category: 'Sécurité', skills: 'pare-feu, sauvegardes, droits utilisateurs, RGPD, analyse de logs' },
    { category: 'Outils', skills: 'Git, PowerShell, Bash, SSH, Vaultwarden, Nextcloud' },
  ];

  const certifications = [
    { name: 'Linux Unhatched — Cisco NetAcad', date: '11/07/2025' },
    { name: 'Pre-Security — TryHackMe', date: '24/04/2025' },
    { name: 'CCNA — Cisco Certified Network Associate', date: 'En cours' },
  ];

  const languages = [
    { name: 'Français', level: 'Natif' },
    { name: 'Anglais', level: 'Courant' },
    { name: 'Turc', level: 'Courant' },
  ];

  const softSkills = [
    { name: 'Esprit d\'analyse', icon: Target },
    { name: 'Autonomie', icon: Zap },
    { name: 'Rigueur', icon: Target },
    { name: 'Curiosité technologique', icon: Lightbulb },
    { name: 'Travail en équipe', icon: Users },
    { name: 'Capacité d\'adaptation', icon: TrendingUp },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white flex items-center gap-3">
            <User className="text-[#4f8eff]" size={36} />
            Profil
          </h1>
          <div className="h-1 w-24 bg-[#4f8eff] rounded"></div>
          <a
            href="/Delaisement_Noyan.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4f8eff] hover:bg-[#6ea8ff] text-white font-medium rounded-lg transition-colors text-sm"
          >
            <Download size={16} />
            Télécharger mon CV
          </a>
        </div>

        <section className="bg-[#161b22] border border-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Présentation</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Je suis Noyan DELAISEMENT, technicien informatique en apprentissage chez PREM Automation
            à Toulouse dans le cadre de mon BTS SIO option SISR. Je gère au quotidien une
            infrastructure composée de <span className="text-[#4f8eff] font-medium">3 serveurs</span> et plus de{' '}
            <span className="text-[#4f8eff] font-medium">20 services</span> (Active Directory, Docker, Vaultwarden,
            Nextcloud, Zabbix, Wazuh, Rudder, GLPI). Passionné par les réseaux, la cybersécurité et
            l'administration système, je prépare également mon entrée en Bachelor Systèmes, Réseaux
            & Cloud Computing à l'ESGI Toulouse en septembre 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Compétences techniques</h2>
          <div className="space-y-4">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#161b22] border border-gray-800 rounded-lg p-5 hover:border-[#4f8eff]/50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <span className="inline-flex px-3 py-1 bg-[#4f8eff]/20 text-[#4f8eff] rounded-md font-medium text-sm border border-[#4f8eff]/30 whitespace-nowrap">
                    {skill.category}
                  </span>
                  <p className="text-gray-300 flex-grow">{skill.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Soft skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-[#161b22] border border-gray-800 rounded-lg p-5 hover:border-[#00d4a0]/50 transition-colors flex items-center gap-3"
                >
                  <Icon size={24} className="text-[#00d4a0] flex-shrink-0" />
                  <span className="text-gray-300">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Certifications</h2>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-[#161b22] border border-gray-800 rounded-lg p-5 flex items-center justify-between hover:border-[#4f8eff]/50 transition-colors">
                <span className="text-gray-300">{cert.name}</span>
                <span className={`text-sm font-medium px-3 py-1 rounded-full border ${cert.date === 'En cours' ? 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30' : 'text-[#00d4a0] bg-[#00d4a0]/10 border-[#00d4a0]/30'}`}>
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Langues</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {languages.map((lang, index) => (
              <div key={index} className="bg-[#161b22] border border-gray-800 rounded-lg p-5 hover:border-[#4f8eff]/50 transition-colors text-center">
                <p className="text-white font-semibold text-lg">{lang.name}</p>
                <p className="text-[#4f8eff] text-sm mt-1">{lang.level}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
