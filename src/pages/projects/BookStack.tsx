import ProjectLayout from '../../components/ProjectLayout';

export default function BookStack() {
  const infoBox = (
    <div className="bg-[#161b22] border border-indigo-500/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-indigo-400 mb-3">Infrastructure BookStack</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-gray-400">Conteneurs</p>
          <p className="text-2xl font-bold text-white">2</p>
          <p className="text-gray-400 text-xs">bookstack + mariadb</p>
        </div>
        <div>
          <p className="text-gray-400">Authentification</p>
          <p className="text-white font-medium">LDAP / AD</p>
          <p className="text-gray-400 text-xs">SSO c1-04.lan</p>
        </div>
        <div>
          <p className="text-gray-400">Accès</p>
          <p className="text-[#00d4a0] font-medium">HTTPS</p>
          <p className="text-gray-400 text-xs">bookstack.c1-04.lan</p>
        </div>
      </div>
    </div>
  );

  return (
    <ProjectLayout
      label="Documentation & Gestion des connaissances"
      title="BookStack — Wiki d'infrastructure"
      period="2026"
      context="CFAI Beauzelle"
      role="Étudiant apprenti"
      competencies={['C1', 'C2', 'C5']}
      headerColor="bg-gradient-to-r from-indigo-900/50 to-blue-900/50"
      infoBox={infoBox}
      contextText="L'infrastructure c1-04.lan (CFAI Beauzelle) ne disposait d'aucune base de connaissances centralisée. Procédures, runbooks et documentations techniques étaient dispersés ou absents. Objectif : déployer une plateforme wiki accessible via navigateur, intégrée à l'Active Directory existant pour centraliser toute la documentation de l'infrastructure."
      actions={[
        'Déploiement de BookStack via Docker Compose sur SRV-DOCKER (Debian 12, Proxmox VE)',
        'Configuration de deux conteneurs : application PHP/Laravel et base MariaDB 10.11',
        'Création des volumes Docker nommés pour la persistance (bookstack_config, bookstack_db_data)',
        'Gestion des secrets via fichier .env non versionné (permissions 600)',
        'Configuration du reverse proxy HTTPS via Nginx Proxy Manager avec certificat wildcard *.c1-04.lan',
        'Intégration LDAP/Active Directory : authentification SSO via le compte de service LdapService',
        'Mappage des groupes AD vers rôles BookStack (BookStack-Admin → admin)',
        'Résolution des incidents : boucle CSRF après HTTPS, échec silencieux LDAP, race condition DB au démarrage',
        'Mise en place des sauvegardes : dump MariaDB et archive du volume config',
      ]}
      results={[
        'Documentation technique centralisée et accessible via bookstack.c1-04.lan',
        'Authentification SSO via Active Directory — aucun compte local séparé',
        'Accès HTTPS sécurisé avec certificat wildcard',
        'Base de connaissances partagée entre intervenants techniques',
        'Haute disponibilité assurée par restart: unless-stopped sur les deux conteneurs',
      ]}
      techStack={[
        'BookStack',
        'Docker Compose',
        'MariaDB 10.11',
        'Nginx Proxy Manager',
        'LDAP / Active Directory',
        'PHP / Laravel',
        'Debian 12',
        'Proxmox VE',
      ]}
      competencyDetails={[
        {
          code: 'C1',
          details: [
            'Gérer la persistance des données applicatives via volumes Docker nommés',
            'Appliquer le principe du moindre privilège (compte LdapService en lecture seule)',
            'Mettre en place les sauvegardes et vérifier la continuité de service',
          ],
        },
        {
          code: 'C2',
          details: [
            'Diagnostiquer et résoudre les incidents de déploiement (CSRF, LDAP, race condition DB)',
            'Identifier les causes racines et appliquer des solutions documentées',
          ],
        },
        {
          code: 'C5',
          details: [
            'Déployer et configurer un service web conteneurisé',
            'Intégrer le service dans l\'infrastructure existante (Active Directory, reverse proxy)',
            'Réaliser les tests d\'intégration et valider la mise en service',
          ],
        },
      ]}
      documents={[
        'Documentation technique BookStack sur Docker Compose',
      ]}
      prevProject={{ title: 'Masterisation & Configuration IHM Windows', link: '/projets/masterisation-ihm' }}
      nextProject={{ title: 'Portfolio professionnel', link: '/projets/portfolio' }}
    />
  );
}
