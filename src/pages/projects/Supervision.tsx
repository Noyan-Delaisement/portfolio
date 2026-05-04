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
      period="2024/2025"
      context="CFAI Beauzelle"
      role="Étudiant apprenti"
      competencies={['C1', 'C2', 'C5']}
      headerColor="bg-gradient-to-r from-orange-900/50 to-red-900/50"
      infoBox={infoBox}
      contextText="Infrastructure scolaire — CFAI Beauzelle (4 serveurs, 10+ services : AD, Docker, Vaultwarden, Nextcloud) sans supervision centralisée. Les incidents passaient inaperçus, aucune détection sécurité en place. Objectif : déployer un SIEM pour la collecte de logs et la détection des menaces."
      actions={[
        'Déploiement Wazuh (SIEM) pour collecte et analyse logs de sécurité',
        'Résolution incidents de compliance détectés lors mise en place',
        'Documentation tableaux de bord, alertes et procédures d\'escalade',
      ]}
      results={[
        'Détection proactive incidents',
        'Détection automatique des menaces via Wazuh',
      ]}
      techStack={[
        'Wazuh SIEM',
        'Rudder',
        'Docker',
        'Debian Linux',
        'Windows Server',
        'Bash',
        'yaml',
      ]}
      competencyDetails={[
        {
          code: 'C1',
          details: [
            'Exploiter des référentiels et normes',
            'Gérer des sauvegardes',
            'Vérifier les conditions de continuité de service',
          ],
        },
        {
          code: 'C2',
          details: [
            'Collecter, suivre et orienter des demandes',
            'Traiter des demandes concernant les services réseau et système',
          ],
        },
        {
          code: 'C5',
          details: [
            'Déployer un service',
            'Réaliser les tests d\'intégration et d\'acceptation',
          ],
        },
      ]}
      documents={[
        { title: 'Documentation Wazuh SIEM', link: '/wazuh.pdf' },
      ]}
      prevProject={{ title: 'Rudder — Gestion de configuration', link: '/projets/rudder' }}
      nextProject={{ title: 'GLPI Ticketing N1/N2/N3', link: '/projets/glpi' }}
    />
  );
}
