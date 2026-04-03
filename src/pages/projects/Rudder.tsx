import ProjectLayout from '../../components/ProjectLayout';

export default function Rudder() {
  const infoBox = (
    <div className="bg-[#161b22] border border-purple-500/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-purple-400 mb-3">Statistiques de gestion</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-gray-400">Serveurs gérés</p>
          <p className="text-2xl font-bold text-white">3</p>
        </div>
        <div>
          <p className="text-gray-400">Services supervisés</p>
          <p className="text-2xl font-bold text-white">20+</p>
        </div>
        <div>
          <p className="text-gray-400">Mises à jour</p>
          <p className="text-2xl font-bold text-[#00d4a0]">100%</p>
          <p className="text-gray-400 text-xs">automatisées</p>
        </div>
      </div>
    </div>
  );

  return (
    <ProjectLayout
      label="Configuration Management"
      title="Rudder — Gestion de configuration"
      period="2024/2025"
      context="PREM Automation"
      role="Technicien apprenti"
      competencies={['C1', 'C2']}
      headerColor="bg-gradient-to-r from-purple-900/50 to-pink-900/50"
      infoBox={infoBox}
      contextText="Infrastructure PREM Automation gérée manuellement, configurations incohérentes entre machines, mises à jour sécurité non systématiques. Objectif : déployer Rudder pour standardiser et automatiser gestion de configuration."
      actions={[
        'Installation et configuration serveur Rudder, déploiement agents sur 3 serveurs',
        'Création règles de conformité pour standardiser configurations (SSH, pare-feu local, droits fichiers)',
        'Mise en place mises à jour automatiques de sécurité sur l\'ensemble du parc',
        'Résolution incidents de compliance détectés lors des audits Rudder',
        'Intégration Rudder-Zabbix pour corréler état conformité et supervision',
        'Mise en place rapports de conformité périodiques',
      ]}
      results={[
        'Infrastructure standardisée et conforme',
        'Élimination écarts de configuration',
        'Mises à jour sécurité automatiques et tracées',
        'Réduction administration manuelle',
      ]}
      techStack={[
        'Rudder',
        'Debian Linux',
        'Windows Server',
        'Zabbix',
        'Bash Shell',
        'CFEngine',
        'Docker',
      ]}
      competencyDetails={[
        {
          code: 'C1',
          details: [
            'Exploiter des référentiels, normes et standards',
            'Vérifier les conditions de continuité de service',
            'Vérifier le respect des règles d\'utilisation',
          ],
        },
        {
          code: 'C2',
          details: [
            'Collecter, suivre et orienter des demandes',
            'Traiter des demandes concernant les services réseau et système',
          ],
        },
      ]}
      documents={[
        'Documentation technique Rudder règles et politiques',
        'Rapport conformité avant/après',
        'Procédure maintenance agents Rudder',
      ]}
      prevProject={{ title: 'GLPI Ticketing N1/N2/N3', link: '/projets/glpi' }}
      nextProject={{ title: 'Sauvegarde NAS Synology', link: '/projets/nas-synology' }}
    />
  );
}
