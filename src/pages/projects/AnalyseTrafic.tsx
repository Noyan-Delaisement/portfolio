import ProjectLayout from '../../components/ProjectLayout';

export default function AnalyseTrafic() {
  const infoBox = (
    <div className="bg-[#161b22] border border-teal-500/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-teal-400 mb-3">Outils d'analyse déployés</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-gray-400">Port mirroring</p>
          <p className="text-2xl font-bold text-white">SPAN</p>
          <p className="text-gray-400 text-xs">Cisco SG500X</p>
        </div>
        <div>
          <p className="text-gray-400">Analyse flux</p>
          <p className="text-2xl font-bold text-white">ntopng</p>
          <p className="text-gray-400 text-xs">temps réel</p>
        </div>
        <div>
          <p className="text-gray-400">Capture PCAP</p>
          <p className="text-2xl font-bold text-[#00d4a0]">Arkime</p>
          <p className="text-gray-400 text-xs">indexé OpenSearch</p>
        </div>
      </div>
    </div>
  );

  return (
    <ProjectLayout
      label="Analyse réseau & Sécurité"
      title="Analyse trafic réseau"
      period="2024/2025"
      context="Infrastructure scolaire"
      role="Étudiant BTS SIO SISR"
      competencies={['C1', 'C2', 'C5']}
      headerColor="bg-gradient-to-r from-teal-900/50 to-green-900/50"
      infoBox={infoBox}
      contextText="Dans le cadre des travaux pratiques BTS SIO sur l'infrastructure scolaire, mise en place d'une solution complète d'analyse et de capture du trafic réseau. L'objectif était de comprendre les flux circulant sur le réseau, détecter des anomalies et constituer un historique de captures pour analyse forensique, sans impacter le trafic en production."
      actions={[
        'Configuration du port mirroring (session SPAN) sur le switch Cisco SG500X pour dupliquer le trafic vers une sonde',
        'Installation et configuration de ntopng pour la visualisation des flux réseau en temps réel (top talkers, protocoles, alertes)',
        'Déploiement d\'Arkime (ex-Moloch) pour la capture et l\'indexation des paquets au format PCAP',
        'Intégration d\'OpenSearch comme backend d\'indexation pour Arkime (recherche dans les métadonnées de sessions)',
        'Création de règles de filtrage et de vues personnalisées dans ntopng',
        'Tests de détection : génération de trafic anormal et vérification des alertes',
        'Analyse et documentation des flux identifiés sur le réseau scolaire',
      ]}
      results={[
        'Visibilité complète sur les flux réseau sans impact sur la production',
        'Historique de captures PCAP consultable et filtrable via Arkime',
        'Détection d\'anomalies de trafic opérationnelle avec ntopng',
        'Compréhension approfondie des protocoles réseau en environnement réel',
      ]}
      techStack={[
        'Cisco SG500X',
        'Port mirroring SPAN',
        'ntopng',
        'Arkime (Moloch)',
        'OpenSearch',
        'Debian Linux',
        'Wireshark',
        'PCAP',
      ]}
      competencyDetails={[
        {
          code: 'C1',
          details: [
            'Recenser et identifier les ressources numériques du réseau',
            'Exploiter des référentiels, normes et standards (IEEE 802.1Q, SPAN)',
            'Vérifier le respect des règles d\'utilisation du réseau',
          ],
        },
        {
          code: 'C2',
          details: [
            'Collecter, suivre et orienter des demandes',
            'Traiter des demandes concernant les services réseau',
            'Identifier et diagnostiquer les anomalies réseau',
          ],
        },
        {
          code: 'C5',
          details: [
            'Déployer un service informatique (sonde réseau)',
            'Vérifier la qualité du service dans les conditions normales d\'utilisation',
          ],
        },
      ]}
      documents={[
        'Procédure de configuration port mirroring SPAN (Cisco SG500X)',
        'Documentation déploiement Arkime + OpenSearch',
        'Rapport d\'analyse des flux réseau identifiés',
        'Captures PCAP et sessions analysées',
      ]}
      prevProject={{ title: 'Sauvegarde NAS Synology', link: '/projets/nas-synology' }}
      nextProject={{ title: 'Masterisation & Configuration IHM Windows', link: '/projets/masterisation-ihm' }}
    />
  );
}
