import ProjectLayout from '../../components/ProjectLayout';

export default function Supervision() {
  const infoBox = (
    <div className="bg-[#161b22] border border-[#00d4a0]/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-[#00d4a0] mb-3">Infrastructure supervisée</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-gray-400">Serveurs</p>
          <p className="text-2xl font-bold text-white">3</p>
        </div>
        <div>
          <p className="text-gray-400">Agents déployés</p>
          <p className="text-2xl font-bold text-white">3</p>
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
      context="Ecole"
      role="Etudiant apprenti"
      competencies={['C1', 'C2', 'C5']}
      headerColor="bg-gradient-to-r from-orange-900/50 to-red-900/50"
      infoBox={infoBox}
      contextText="Infrastructure Ecolé(CFAI Beauzelle) (4 serveurs, 10+ services : AD, Docker, Vaultwarden, Nextcloud) sans supervision centralisée. Incidents passaient inaperçus, aucune détection sécurité. Objectif : SIEM et détection des menaces."
      actions={[
        'Déploiement Wazuh (SIEM) pour collecte et analyse logs de sécurité',
        'Résolution incidents de compliance détectés lors mise en place',
        'Documentation tableaux de bord, alertes et procédures d\'escalade',
      ]}
      results={[
        'Détection proactive incidents',
        'Détection automatique menaces via Wazuh',
        'Mises à jour sécurisées via Rudder',
      ]}
      techStack={[
        'Wazuh SIEM',
        'Ruddder',
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
        'Documentation Wazuh règles SIEM',
      ]}
      prevProject={{ title: 'Rudder — Gestion de configuration', link: '/projets/rudder' }}
      nextProject={{ title: 'GLPI Ticketing N1/N2/N3', link: '/projets/glpi' }}
    />
  );
}
