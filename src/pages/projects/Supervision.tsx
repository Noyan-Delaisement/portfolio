import ProjectLayout from '../../components/ProjectLayout';

export default function Supervision() {
  const infoBox = (
    <div className="bg-[#161b22] border border-[#00d4a0]/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-[#00d4a0] mb-3">Infrastructure supervisée</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-gray-400">Serveurs</p>
          <p className="text-2xl font-bold text-white">4</p>
        </div>
        <div>
          <p className="text-gray-400">Agents déployés</p>
          <p className="text-2xl font-bold text-white">10</p>
          <p className="text-gray-400 text-xs">Debian / Windows</p>
        </div>
        <div>
          <p className="text-gray-400">Technologies</p>
          <p className="text-white font-medium">SIEM Wazuh actif</p>
        </div>
      </div>
    </div>
  );

  return (
    <ProjectLayout
      label="Supervision & Sécurité"
      title="Supervision Wazuh"
      period="2025/2026"
      context="CFAI Beauzelle — infrastructure de formation"
      role="Étudiant en BTS SIO SISR"
      headerColor="bg-gradient-to-r from-orange-900/50 to-red-900/50"
      infoBox={infoBox}
      contextText="Infrastructure scolaire — CFAI Beauzelle (4 serveurs, 10+ services : AD, Docker, Vaultwarden, Nextcloud) sans supervision centralisée. Les incidents passaient inaperçus, aucune détection sécurité en place. Objectif : déployer un SIEM pour la collecte de logs et la détection des menaces."
      actions={[
        'Déploiement de Wazuh 4.14 en all-in-one (manager, indexer OpenSearch, dashboard)',
        'Authentification du dashboard via Active Directory / LDAP, avec des rôles par groupe (WazuhAdmins / WazuhUsers)',
        'Surveillance d\'intégrité des fichiers (FIM) en temps réel, configurée de façon centralisée via agent.conf',
        'Politiques SCA (Security Configuration Assessment) adaptées à Debian 13',
        'Active Response : blocage automatique des attaques par force brute SSH (règle 5763, firewall-drop)',
        'Supervision des conteneurs Docker',
        'Développement d\'une intégration Python Wazuh → GLPI : tickets créés automatiquement par catégorie (Sécurité, Intrusion, FIM, Vulnérabilité), filtrage des CVE à CVSS ≥ 9.0 et déduplication',
        'Versionnement de la configuration Wazuh dans un dépôt Gitea (authentification AD)',
        'Documentation des tableaux de bord, alertes et procédures d\'escalade',
      ]}
      results={[
        'Détection automatique des menaces et des modifications de fichiers sensibles',
        'Blocage automatique des tentatives de force brute SSH',
        'Tickets GLPI créés automatiquement pour les vulnérabilités critiques, sans doublon',
        'Configuration reproductible et historisée grâce au versionnement Git',
      ]}
      techStack={[
        'Wazuh 4.14',
        'OpenSearch',
        'Active Directory / LDAP',
        'Python',
        'GLPI',
        'Gitea',
        'Rudder',
        'Docker',
        'Debian Linux',
        'Windows Server',
        'Bash',
        'yaml',
      ]}
      documents={[
        { title: 'Documentation Wazuh SIEM', link: '/wazuh.pdf' },
      ]}
    />
  );
}
