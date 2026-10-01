import ProjectLayout from '../../components/ProjectLayout';

export default function ActiveDirectory() {
  return (
    <ProjectLayout
      label="Systèmes & Administration"
      title="Active Directory & GPO"
      period="2024/2025"
      context="PREM Automation — client industriel"
      role="Technicien informatique apprenti"
      headerColor="bg-gradient-to-r from-green-900/50 to-blue-900/50"
      contextText="Projet mené pour un client industriel de PREM Automation qui ne disposait d'aucun annuaire centralisé. Objectif : déployer un domaine Active Directory pour centraliser la gestion des utilisateurs et des ressources, et y intégrer les postes IHM."
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
      documents={[]}
    />
  );
}
