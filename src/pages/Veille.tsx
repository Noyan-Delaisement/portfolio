import { Rss, Shield, Bug, Newspaper, Github, Youtube, Linkedin, Globe, Activity, Eye, Settings } from 'lucide-react';

export default function Veille() {
  const sources = [
    {
      icon: Shield,
      name: 'ANSSI',
      description: 'Alertes et bulletins sécurité officiels, guides et recommandations',
      url: 'https://cert.ssi.gouv.fr',
    },
    {
      icon: Bug,
      name: 'CVE Details',
      description: 'Base de données vulnérabilités connues (CVE) pour les technologies utilisées',
      url: 'https://cvedetails.com',
    },
    {
      icon: Newspaper,
      name: 'The Hacker News',
      description: 'Actualités cybersécurité, nouvelles menaces et incidents majeurs',
      url: 'https://thehackernews.com',
    },
    {
      icon: Github,
      name: 'GitHub Trending',
      description: 'Nouveaux outils open-source, tendances projets tech Linux Docker sécurité',
      url: 'https://github.com/trending',
    },
    {
      icon: Youtube,
      name: 'YouTube / Docs officielles',
      description: 'Tutoriels techniques, documentation officielle Linux Debian pfSense',
      url: 'https://www.youtube.com/@LearnLinuxTV',
    },
  ];

  const toolBlogs = [
    {
      icon: Activity,
      name: 'Zabbix Blog',
      description: 'Nouvelles versions, templates et bonnes pratiques monitoring',
      url: 'https://blog.zabbix.com',
      accent: 'border-l-orange-500',
      iconColor: 'text-orange-400',
    },
    {
      icon: Eye,
      name: 'Wazuh Blog',
      description: 'Actualités SIEM/XDR, règles de détection et cas d\'usage sécurité',
      url: 'https://wazuh.com/blog',
      accent: 'border-l-[#4f8eff]',
      iconColor: 'text-[#4f8eff]',
    },
    {
      icon: Settings,
      name: 'Rudder Blog',
      description: 'Mises à jour gestion de configuration, compliance et nouvelles politiques',
      url: 'https://www.rudder.io/blog',
      accent: 'border-l-[#00d4a0]',
      iconColor: 'text-[#00d4a0]',
    },
  ];

  const identities = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'noyan-delaisement',
      url: 'https://www.linkedin.com/in/noyan-delaisement',
    },
    {
      icon: Github,
      name: 'GitHub',
      handle: 'Noyan-Delaisement',
      url: 'https://github.com/Noyan-Delaisement',
    },
    {
      icon: Globe,
      name: 'Portfolio',
      handle: 'ndfolio.dlsmnt.fr',
      url: 'https://ndfolio.dlsmnt.fr',
    },
  ];

  const timeline = [
    {
      period: '2024–2026',
      title: 'BTS SIO SISR en apprentissage chez PREM Automation, Toulouse',
    },
    {
      period: 'Septembre 2026',
      title: 'Bachelor Systèmes, Réseaux & Cloud Computing — ESGI Toulouse — en alternance',
    },
    {
      period: 'Objectif',
      title: 'Administrateur systèmes & réseaux / Cloud / Cybersécurité',
    },
    {
      period: 'Certifications visées',
      title: 'CCNA, LPIC-1, AWS Solutions Architect Associate',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white flex items-center gap-3">
            <Rss className="text-[#4f8eff]" size={36} />
            Veille technologique
          </h1>
          <div className="h-1 w-24 bg-[#4f8eff] rounded"></div>
          <p className="text-gray-300 text-lg max-w-4xl leading-relaxed">
            La veille technologique fait partie intégrante de ma pratique professionnelle. Je
            surveille activement les évolutions dans les domaines des infrastructures systèmes &
            réseaux, de la cybersécurité et du cloud computing.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Mes sources de veille</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sources.map((source, index) => {
              const Icon = source.icon;
              return (
                <a
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#161b22] border border-gray-800 rounded-lg p-6 hover:border-[#4f8eff] transition-all hover:shadow-lg hover:shadow-[#4f8eff]/10 group"
                >
                  <Icon size={32} className="text-[#4f8eff] mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-white mb-2">{source.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{source.description}</p>
                  {source.url !== '#' && (
                    <p className="text-xs text-[#4f8eff] mt-2">{source.url.replace('https://', '')}</p>
                  )}
                </a>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">Blogs des outils utilisés</h2>
          <p className="text-sm text-gray-400 mb-6">Suivi des mises à jour des outils déployés en production</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {toolBlogs.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-[#0d1117] border border-gray-800 border-l-4 ${tool.accent} rounded-lg p-4 flex items-start gap-4 hover:bg-[#161b22] transition-all group`}
                >
                  <Icon size={22} className={`${tool.iconColor} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`} />
                  <div>
                    <h3 className="text-white font-semibold text-sm">{tool.name}</h3>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{tool.description}</p>
                    <p className="text-xs text-gray-600 mt-2">{tool.url.replace('https://', '')}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Articles de veille commentés</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#161b22] border border-gray-800 rounded-lg p-6 space-y-3 hover:border-[#4f8eff]/50 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-2 py-1 bg-[#4f8eff]/20 text-[#4f8eff] rounded border border-[#4f8eff]/30">ANSSI</span>
                <span className="text-xs text-gray-500">Mars 2026</span>
              </div>
              <h3 className="text-white font-semibold leading-snug">Panorama de la cybermenace 2025 — Les PME en première ligne</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                L'ANSSI publie son bilan annuel : 128 attaques ransomware majeures traitées en 2025, dont 48 % visaient des PME, TPE et ETI. Les équipements de bordure (pare-feu, VPN) restent la principale porte d'entrée, avec 29 % des vulnérabilités exploitées le jour même de leur divulgation. Ce rapport illustre directement mon travail chez PREM Automation : la mise en place de pfSense avec IDS/IPS Suricata et Wazuh SIEM répond précisément à ces menaces ciblant les petites structures industrielles.
              </p>
              <a href="https://cyber.gouv.fr/nous-connaitre/publications/panoramas-de-la-cybermenace/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#4f8eff] hover:underline">cyber.gouv.fr →</a>
            </div>

            <div className="bg-[#161b22] border border-gray-800 rounded-lg p-6 space-y-3 hover:border-[#4f8eff]/50 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-2 py-1 bg-[#00d4a0]/20 text-[#00d4a0] rounded border border-[#00d4a0]/30">IT-Connect</span>
                <span className="text-xs text-gray-500">Mai 2025</span>
              </div>
              <h3 className="text-white font-semibold leading-snug">BadSuccessor — Faille critique dans Active Directory sous Windows Server 2025</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Des chercheurs d'Akamai ont découvert une vulnérabilité critique liée aux nouveaux comptes dMSA de Windows Server 2025. Baptisée "BadSuccessor", elle permettrait à un attaquant disposant de permissions limitées de compromettre n'importe quel compte du domaine, ouvrant la voie à une prise de contrôle totale. 91 % des environnements testés seraient vulnérables. Cet article m'a conduit à auditer les permissions sur notre Active Directory chez PREM Automation et à vérifier la configuration de nos GPO de sécurité.
              </p>
              <a href="https://www.it-connect.fr/windows-server-2025-compte-dmsa-cette-faille-critique-menace-lactive-directory/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#4f8eff] hover:underline">it-connect.fr →</a>
            </div>

            <div className="bg-[#161b22] border border-gray-800 rounded-lg p-6 space-y-3 hover:border-[#4f8eff]/50 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-2 py-1 bg-purple-500/20 text-purple-400 rounded border border-purple-500/30">IT-Connect</span>
                <span className="text-xs text-gray-500">Avril 2025</span>
              </div>
              <h3 className="text-white font-semibold leading-snug">Déployer Wazuh XDR/SIEM avec Docker pour un lab cybersécurité</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Cet article détaille le déploiement de Wazuh via Docker Compose, en couvrant les différences entre antivirus, EDR et XDR, ainsi que l'ajout d'agents Windows et Linux. Il illustre une approche que j'ai utilisée chez PREM Automation pour déployer et tester Wazuh sur notre infrastructure Proxmox. La containerisation simplifie la gestion et les mises à jour de la stack Wazuh, ce qui correspond directement à notre usage de Docker sur les serveurs de l'entreprise.
              </p>
              <a href="https://www.it-connect.fr/xdr-deploiement-de-wazuh-pour-creer-un-lab-cybersecurite/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#4f8eff] hover:underline">it-connect.fr →</a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Mon identité professionnelle</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {identities.map((identity, index) => {
              const Icon = identity.icon;
              return (
                <a
                  key={index}
                  href={identity.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#161b22] border border-gray-800 rounded-lg p-6 hover:border-[#00d4a0] transition-all group flex items-center gap-4"
                >
                  <Icon size={28} className="text-[#00d4a0] group-hover:scale-110 transition-transform flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{identity.name}</h3>
                    <p className="text-sm text-gray-400">{identity.handle}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Mon projet professionnel</h2>
          <div className="relative pl-8 border-l-2 border-[#00d4a0] space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#00d4a0] border-4 border-[#0d1117]"></div>
                <div className="bg-[#161b22] border border-gray-800 rounded-lg p-5 hover:border-[#00d4a0]/50 transition-colors">
                  <span className="text-sm text-[#00d4a0] font-medium">{item.period}</span>
                  <p className="text-white mt-1">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
