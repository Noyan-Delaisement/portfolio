import ProjectLayout from '../../components/ProjectLayout';

export default function Ntopng() {
  const infoBox = (
    <div className="bg-[#161b22] border border-cyan-500/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-cyan-400 mb-3">Déploiement ntopng</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-gray-400">Source de capture</p>
          <p className="text-2xl font-bold text-white">Port SPAN</p>
          <p className="text-gray-400 text-xs">interface promiscuous</p>
        </div>
        <div>
          <p className="text-gray-400">Protocoles analysés</p>
          <p className="text-2xl font-bold text-white">500+</p>
          <p className="text-gray-400 text-xs">DPI applicatif</p>
        </div>
        <div>
          <p className="text-gray-400">Édition</p>
          <p className="text-2xl font-bold text-[#00d4a0]">Community</p>
          <p className="text-gray-400 text-xs">GPLv3 — open source</p>
        </div>
      </div>
    </div>
  );

  return (
    <ProjectLayout
      label="Monitoring réseau"
      title="ntopng — Monitoring de trafic réseau"
      period="2024/2025"
      context="Infrastructure scolaire"
      role="Étudiant BTS SIO SISR"
      competencies={['C1', 'C2', 'C5']}
      headerColor="bg-gradient-to-r from-cyan-900/50 to-blue-900/50"
      infoBox={infoBox}
      contextText="Dans le cadre des travaux pratiques BTS SIO sur l'infrastructure scolaire, déploiement de ntopng (Next Generation Network Top) pour assurer la visibilité et l'analyse du trafic réseau en temps réel. ntopng est positionné en écoute passive via un port SPAN configuré sur le switch, permettant une capture non intrusive de l'ensemble du trafic transitant sur le réseau sans impacter la production."
      actions={[
        'Configuration du port SPAN sur le switch manageable pour dupliquer le trafic vers la sonde ntopng',
        'Ajout du dépôt officiel ntop et installation de ntopng Community Edition sur Debian',
        'Configuration de l\'interface de capture sans adresse IP en mode promiscuous (eth0)',
        'Paramétrage du fichier /etc/ntopng/ntopng.conf : interface de capture, port web 3000, backend Redis',
        'Activation et persistence du mode promiscuous sur l\'interface de capture via systemd-networkd',
        'Démarrage et activation du service via systemctl, vérification de l\'écoute sur le port 3000',
        'Prise en main de l\'interface web : dashboard temps réel, top talkers, analyse des flux actifs, détection DPI',
        'Intégration de ntopng dans la stack de monitoring existante (Wazuh, Zabbix)',
      ]}
      results={[
        'Visibilité complète sur les flux réseau en temps réel sans impact sur la production',
        'Détection des protocoles applicatifs opérationnelle (DPI) : HTTP, DNS, TLS, SSH, SMTP',
        'Dashboard temps réel : top hosts, top protocoles, alertes de volume',
        'Compréhension approfondie de l\'architecture réseau via l\'analyse des flux',
      ]}
      techStack={[
        'ntopng Community Edition',
        'Debian Linux',
        'Redis',
        'Port SPAN / Port mirroring',
        'Mode promiscuous',
        'systemd',
        'Nginx (reverse proxy)',
        'Zabbix',
        'Wazuh',
      ]}
      competencyDetails={[
        {
          code: 'C1',
          details: [
            'Recenser et identifier les ressources numériques du réseau (flux, hôtes, protocoles)',
            'Exploiter des référentiels, normes et standards (port mirroring SPAN, DPI)',
            'Vérifier le respect des règles d\'utilisation du réseau via les alertes ntopng',
          ],
        },
        {
          code: 'C2',
          details: [
            'Identifier et diagnostiquer les anomalies réseau via l\'analyse des flux',
            'Traiter des demandes concernant les services réseau à partir des données de monitoring',
          ],
        },
        {
          code: 'C5',
          details: [
            'Déployer un service informatique (sonde de monitoring réseau)',
            'Vérifier la qualité du service dans les conditions normales d\'utilisation',
            'Intégrer ntopng dans l\'environnement de supervision existant',
          ],
        },
      ]}
      documents={[
        { title: 'Documentation technique — Déploiement ntopng', link: '/ntopng.pdf' },
      ]}
      prevProject={{ title: 'Analyse trafic réseau', link: '/projets/analyse-trafic' }}
      nextProject={{ title: 'Masterisation & Configuration IHM Windows', link: '/projets/masterisation-ihm' }}
    />
  );
}
