import ProjectLayout from '../../components/ProjectLayout';

export default function GLPI() {
  const infoBox = (
    <div className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Structure support hiérarchique</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
          <h4 className="text-blue-400 font-semibold mb-2">Niveau 1</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Réinitialisation mots de passe</li>
            <li>• Problèmes connexion</li>
            <li>• Incidents matériels simples</li>
            <li>• Demandes accès standards</li>
          </ul>
        </div>
        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
          <h4 className="text-green-400 font-semibold mb-2">Niveau 2</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Pannes systèmes et réseaux</li>
            <li>• Configurations avancées</li>
            <li>• Incidents Active Directory</li>
            <li>• Déploiements logiciels</li>
          </ul>
        </div>
        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
          <h4 className="text-purple-400 font-semibold mb-2">Niveau 3</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Incidents d\'infrastructure</li>
            <li>• Sécurité et intrusions</li>
            <li>• Problèmes serveurs critiques</li>
            <li>• Projets d\'évolution</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <ProjectLayout
      label="ITSM & Support"
      title="GLPI Ticketing N1/N2/N3"
      period="2024/2025"
      context="PREM Automation"
      role="Technicien apprenti"
      competencies={['C2', 'C4', 'C5']}
      headerColor="bg-gradient-to-r from-yellow-900/50 to-orange-900/50"
      infoBox={infoBox}
      contextText="PREM Automation sans outil de gestion des demandes IT. Sollicitations par email sans traçabilité ni priorisation. Objectif : implémenter GLPI et structurer support IT en 3 niveaux."
      actions={[
        'Installation et configuration GLPI sur serveur Linux (Apache, MariaDB, PHP)',
        'Création hiérarchie support : catégories tickets, groupes techniciens N1/N2/N3',
        'Configuration règles d\'escalade automatique et SLA par niveau',
        'Création formulaires de saisie pour guider les utilisateurs',
        'Mise en place catalogue de services informatiques',
        'Formation des utilisateurs à la création de tickets',
        'Planification et suivi du projet (planning, jalons, livrables)',
      ]}
      results={[
        'Traçabilité complète des demandes',
        'Réduction temps résolution grâce orientation automatique',
        'Visibilité sur charge de travail',
        'Base de connaissance',
      ]}
      techStack={[
        'GLPI',
        'Debian Linux',
        'Apache',
        'MariaDB',
        'PHP',
        'ITIL principes',
        'FusionInventory',
      ]}
      competencyDetails={[
        {
          code: 'C2',
          details: [
            'Collecter, suivre et orienter des demandes',
            'Traiter des demandes services réseau et applicatifs',
          ],
        },
        {
          code: 'C4',
          details: [
            'Analyser les objectifs et modalités d\'organisation',
            'Planifier les activités',
            'Évaluer les indicateurs de suivi',
          ],
        },
        {
          code: 'C5',
          details: [
            'Déployer un service',
            'Accompagner les utilisateurs dans la mise en place',
          ],
        },
      ]}
      documents={[]}
      prevProject={{ title: 'Supervision Wazuh', link: '/projets/supervision' }}
      nextProject={{ title: 'Sauvegarde NAS Synology', link: '/projets/nas-synology' }}
    />
  );
}
