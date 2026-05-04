import ProjectLayout from '../../components/ProjectLayout';

export default function MasterisationIHM() {
  const infoBox = (
    <div className="bg-[#161b22] border border-orange-500/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-orange-400 mb-3">Périmètre du déploiement</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-gray-400">Postes masterisés</p>
          <p className="text-2xl font-bold text-white">Multiple</p>
          <p className="text-gray-400 text-xs">Windows 10/11</p>
        </div>
        <div>
          <p className="text-gray-400">Interfaces IHM</p>
          <p className="text-2xl font-bold text-white">Industrielles</p>
          <p className="text-gray-400 text-xs">configurées et testées</p>
        </div>
        <div>
          <p className="text-gray-400">Intégration</p>
          <p className="text-2xl font-bold text-[#00d4a0]">Validée</p>
          <p className="text-gray-400 text-xs">tests sur automates</p>
        </div>
      </div>
    </div>
  );

  return (
    <ProjectLayout
      label="Déploiement & Environnement industriel"
      title="Masterisation & Configuration IHM Windows"
      period="2024/2025"
      context="PREM Automation"
      role="Technicien apprenti"
      competencies={['C1', 'C2', 'C4', 'C5']}
      headerColor="bg-gradient-to-r from-orange-900/50 to-yellow-900/50"
      infoBox={infoBox}
      contextText="PREM Automation déploie des postes Windows sur des sites industriels pour piloter des automates via des interfaces IHM (Interface Homme-Machine). Chaque déploiement requiert une image système standardisée, une configuration réseau adaptée à l'environnement industriel (réseaux OT) et un paramétrage précis des logiciels IHM pour assurer la communication avec les automates sur site."
      actions={[
        'Analyse des besoins matériels et logiciels pour chaque site client',
        'Création et maintenance de l\'image master Windows (sysprep, drivers, logiciels pré-installés)',
        'Déploiement des postes à partir du master via clé bootable ou réseau',
        'Configuration réseau industriel : adressage IP statique, paramétrage interfaces réseau OT',
        'Installation et paramétrage des logiciels IHM (supervision automates, communication OPC-UA/Modbus)',
        'Réalisation des tests d\'intégration : communication poste IHM ↔ automate, validation des écrans de supervision',
        'Mise en service sur site et formation utilisateur à la prise en main',
        'Rédaction des fiches de recette et procédures de déploiement',
      ]}
      results={[
        'Postes déployés de manière reproductible et standardisée',
        'Communication IHM ↔ automates opérationnelle sur chaque site',
        'Réduction du temps de déploiement grâce à l\'image master',
        'Documentation de déploiement réutilisable pour les projets suivants',
      ]}
      techStack={[
        'Windows 10 / 11',
        'Sysprep / WinPE',
        'IHM industrielle (Wonderware, Vijeo)',
        'OPC-UA / Modbus',
        'Réseau OT / IT',
        'Active Directory',
        'Cisco Switch',
        'VLANs',
      ]}
      competencyDetails={[
        {
          code: 'C1',
          details: [
            'Recenser et identifier les ressources numériques',
            'Exploiter des référentiels, normes et standards (image master, procédures)',
            'Vérifier les conditions de continuité de service',
          ],
        },
        {
          code: 'C2',
          details: [
            'Traiter des demandes concernant les services réseau et système',
            'Résoudre les incidents de mise en service sur site client',
          ],
        },
        {
          code: 'C4',
          details: [
            'Analyser les objectifs et les modalités d\'organisation d\'un projet',
            'Planifier les activités de déploiement et anticiper les contraintes site',
          ],
        },
        {
          code: 'C5',
          details: [
            'Déployer un service informatique',
            'Accompagner les utilisateurs dans la mise en place d\'un service',
            'Vérifier la qualité du service dans les conditions normales d\'utilisation',
          ],
        },
      ]}

      documents={[
        { title: 'Documentation technique Masterisation IHM', link: '/Masterisation_IHM.pdf' },
      ]}
      prevProject={{ title: 'Analyse trafic réseau', link: '/projets/analyse-trafic' }}
      nextProject={{ title: 'BookStack — Wiki d\'infrastructure', link: '/projets/bookstack' }}
    />
  );
}
