import ProjectLayout from '../../components/ProjectLayout';

export default function Homelab() {
  const infoBox = (
    <div className="bg-[#161b22] border border-teal-500/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-teal-400 mb-3">Infrastructure personnelle</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-gray-400">Services conteneurisés</p>
          <p className="text-2xl font-bold text-white">10+</p>
        </div>
        <div>
          <p className="text-gray-400">Pare-feu</p>
          <p className="text-white font-medium">FortiGate 30E</p>
        </div>
        <div>
          <p className="text-gray-400">Accès distant</p>
          <p className="text-white font-medium">Cloudflare Tunnel + Tailscale</p>
        </div>
      </div>
    </div>
  );

  return (
    <ProjectLayout
      label="Infrastructure personnelle"
      title="Homelab — réseau segmenté et services auto-hébergés"
      period="En cours"
      context="Projet personnel"
      role="Conception, déploiement et exploitation"
      headerColor="bg-gradient-to-r from-teal-900/50 to-blue-900/50"
      infoBox={infoBox}
      contextText="Environnement personnel pour pratiquer l'administration systèmes et réseaux en conditions réelles : un réseau de lab isolé derrière un pare-feu FortiGate, un Raspberry Pi 5 qui héberge plus de dix services conteneurisés, et un hyperviseur Proxmox pour les machines de test et la préparation de la certification LFCS."
      actions={[
        'Mise en place d\'un réseau de lab séparé du réseau domestique : pare-feu FortiGate 30E en coupure derrière la box opérateur, switch Cisco Catalyst',
        'Déploiement d\'un Raspberry Pi 5 sous Docker / Docker Compose, une stack par service : Nextcloud, Vaultwarden, Paperless-ngx, Grafana, Pi-hole, Homarr, NetAlertX, n8n, Jellyfin',
        'Publication des services via un Cloudflare Tunnel (conteneur cloudflared sur un réseau Docker dédié) et accès distant via Tailscale',
        'Reverse proxy avec Nginx Proxy Manager et journalisation de la véritable IP des visiteurs (en-tête CF-Connecting-IP)',
        'Paperless-ngx avec import automatique des documents depuis une boîte mail (IMAP)',
        'Vidéo et domotique : Frigate et Zigbee2MQTT, avec notifications envoyées par un bot Telegram (MQTT, Python paho-mqtt)',
        'Hyperviseur Proxmox pour les machines virtuelles de test (Ubuntu Server 22.04, CentOS Stream 9) utilisées pour préparer la LFCS',
        'Hébergement de ce portfolio dans un conteneur Nginx, construit depuis GitHub par un build Node éphémère',
      ]}
      results={[
        'Récupération d\'une instance Nextcloud après une montée de version automatique (NC28 → NC33) et un décrochage du disque',
        'Résolution d\'une saturation CPU causée par la génération à la volée des aperçus Nextcloud',
        'Mise à jour de Vaultwarden de la version 1.34.1 à la 1.37.1',
        'Services accessibles à distance via Cloudflare Tunnel et Tailscale',
      ]}
      techStack={[
        'FortiGate 30E',
        'Cisco Catalyst',
        'Raspberry Pi 5',
        'Proxmox',
        'Docker',
        'Docker Compose',
        'Cloudflare Tunnel',
        'Tailscale',
        'Nginx Proxy Manager',
        'Nextcloud',
        'Vaultwarden',
        'Paperless-ngx',
        'Grafana',
        'Pi-hole',
        'n8n',
        'MQTT',
      ]}
      documents={[]}
    />
  );
}
