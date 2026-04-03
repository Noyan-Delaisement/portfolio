import ProjectLayout from '../../components/ProjectLayout';

export default function ActiveDirectory() {
  return (
    <ProjectLayout
      label="Systèmes & Administration"
      title="Active Directory & GPO"
      period="2024/2025"
      context="PREM Automation"
      role="Technicien apprenti"
      competencies={['C1', 'C5']}
      headerColor="bg-gradient-to-r from-green-900/50 to-blue-900/50"
      contextText="Absence d'annuaire centralisé chez PREM Automation. Objectif : déployer domaine Active Directory pour centraliser gestion utilisateurs et ressources."
      actions={[
        'Installation et configuration Windows Server en tant que contrôleur de domaine (DC)',
        'Création et organisation annuaire : Unités d\'Organisation (OU), groupes, comptes utilisateurs',
        'Mise en place stratégies de groupe (GPO) : restrictions sécurité, déploiement logiciels, configuration postes',
        'Gestion droits d\'accès aux ressources partagées (dossiers, imprimantes)',
        'Jonction postes clients au domaine et vérification fonctionnement',
        'Documentation architecture et procédures d\'administration',
      ]}
      results={[
        'Centralisation gestion utilisateurs',
        'Application automatique règles sécurité via GPO',
        'Réduction temps administration',
        'Traçabilité connexions',
      ]}
      techStack={[
        'Windows Server 2019',
        'Active Directory DS',
        'GPO',
        'DNS Windows',
        'PowerShell',
        'ADUC',
        'Windows 10/11 Pro',
      ]}
      competencyDetails={[
        {
          code: 'C1',
          details: [
            'Mettre en place et vérifier les niveaux d\'habilitation',
            'Recenser et identifier les ressources numériques',
            'Vérifier les conditions de continuité de service',
          ],
        },
        {
          code: 'C5',
          details: [
            'Déployer un service',
            'Accompagner les utilisateurs',
            'Réaliser les tests d\'intégration',
          ],
        },
      ]}
      documents={[
        'Schéma d\'architecture du domaine',
        'Documentation AD et GPO',
        'Procédure de jonction au domaine',
      ]}
      prevProject={{ title: 'Infrastructure réseau sécurisée', link: '/projets/infrastructure' }}
      nextProject={{ title: 'Supervision Zabbix & Wazuh', link: '/projets/supervision' }}
    />
  );
}
