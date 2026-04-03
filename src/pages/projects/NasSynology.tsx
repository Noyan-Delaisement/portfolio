import ProjectLayout from '../../components/ProjectLayout';

export default function NasSynology() {
  const infoBox = (
    <div className="bg-[#161b22] border border-cyan-500/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-cyan-400 mb-3">Statistiques de sauvegarde</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-gray-400">NAS Synology</p>
          <p className="text-2xl font-bold text-white">3</p>
          <p className="text-gray-400 text-xs">en réplication</p>
        </div>
        <div>
          <p className="text-gray-400">Stratégie</p>
          <p className="text-2xl font-bold text-white">3-2-1</p>
          <p className="text-gray-400 text-xs">3 copies, 2 supports, 1 offsite</p>
        </div>
        <div>
          <p className="text-gray-400">Dumps MySQL</p>
          <p className="text-2xl font-bold text-[#00d4a0]">100%</p>
          <p className="text-gray-400 text-xs">automatisés via Rudder</p>
        </div>
      </div>
    </div>
  );

  return (
    <ProjectLayout
      label="Sauvegarde & Continuité de service"
      title="Sauvegarde NAS Synology"
      period="2024/2025"
      context="PREM Automation"
      role="Technicien apprenti"
      competencies={['C1', 'C2', 'C4', 'C5']}
      headerColor="bg-gradient-to-r from-cyan-900/50 to-blue-900/50"
      infoBox={infoBox}
      contextText="PREM Automation disposait de données critiques (bases MySQL, fichiers de configuration, documents) sans plan de sauvegarde formalisé ni stratégie de réplication. L'objectif était de mettre en place une solution de sauvegarde robuste et automatisée, garantissant la continuité de service en cas de défaillance matérielle, en s'appuyant sur l'infrastructure NAS Synology existante et les outils déjà déployés (Rudder)."
      actions={[
        'Analyse de l\'existant et recueil des besoins : identification des données critiques, RTO/RPO souhaités',
        'Conception de la stratégie 3-2-1 : 3 copies des données, sur 2 supports différents, dont 1 hors site',
        'Configuration de Hyper Backup sur les 3 NAS Synology pour la réplication inter-sites planifiée',
        'Mise en place des tâches de réplication Synology Replication Service entre NAS local et NAS distant',
        'Création et déploiement des scripts de dump MySQL automatisés via les techniques Rudder',
        'Planification des sauvegardes et dumps (créneaux off-peak, rétention différenciée)',
        'Tests de restauration pour valider l\'intégrité des sauvegardes et les procédures de reprise',
        'Documentation du plan de sauvegarde et des procédures de restauration',
      ]}
      results={[
        'Stratégie 3-2-1 opérationnelle sur 3 sites Synology',
        'Dumps MySQL automatisés quotidiennement sans intervention manuelle',
        'Procédures de restauration testées et documentées',
        'Réduction du risque de perte de données critique',
        'Conformité avec les bonnes pratiques de continuité de service',
      ]}
      techStack={[
        'Synology NAS (DSM)',
        'Hyper Backup',
        'Synology Replication Service',
        'MySQL / MariaDB',
        'Rudder',
        'Bash Shell',
        'Cron',
        'Debian Linux',
      ]}
      competencyDetails={[
        {
          code: 'C1',
          details: [
            'Exploiter des référentiels, normes et standards (stratégie 3-2-1)',
            'Vérifier les conditions de continuité de service informatique',
            'Gérer les sauvegardes et plans de reprise d\'activité',
          ],
        },
        {
          code: 'C2',
          details: [
            'Traiter des demandes concernant les services réseau et système',
            'Mettre en œuvre et vérifier les niveaux d\'habilitation associés à un service',
          ],
        },
        {
          code: 'C4',
          details: [
            'Analyser les objectifs et les modalités d\'organisation d\'un projet',
            'Planifier les activités et évaluer les écarts par rapport à la prévision',
          ],
        },
        {
          code: 'C5',
          details: [
            'Déployer un service informatique',
            'Accompagner les utilisateurs dans la mise en place d\'un service',
          ],
        },
      ]}
      documents={[
        'Plan de sauvegarde et stratégie 3-2-1 (schéma de réplication)',
        'Procédure de restauration NAS Synology',
        'Scripts de dump MySQL automatisés (Rudder)',
        'Rapport de tests de restauration',
      ]}
      prevProject={{ title: 'Rudder — Gestion de configuration', link: '/projets/rudder' }}
      nextProject={{ title: 'Masterisation & Configuration IHM Windows', link: '/projets/masterisation-ihm' }}
    />
  );
}
