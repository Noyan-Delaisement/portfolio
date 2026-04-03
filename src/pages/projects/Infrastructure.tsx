import ProjectLayout from '../../components/ProjectLayout';

export default function Infrastructure() {
  return (
    <ProjectLayout
      label="Infrastructure & Sécurité"
      title="Infrastructure réseau sécurisée"
      period="2024/2025"
      context="PREM Automation"
      role="Technicien apprenti"
      competencies={['C1', 'C5']}
      headerColor="bg-gradient-to-r from-blue-900/50 to-purple-900/50"
      contextText="PREM Automation ne disposait pas d'infrastructure réseau sécurisée. Objectif : déployer pfSense avec filtrage avancé, segmenter le réseau en VLANs, protéger contre les intrusions."
      actions={[
        'Configuration pare-feu pfSense avec règles de filtrage avancées par port et par source',
        'Mise en place IDS/IPS avec Suricata pour détection et prévention d\'intrusions',
        'Conception plan d\'adressage IP et segmentation réseau en VLANs (serveurs, utilisateurs, DMZ)',
        'Configuration services DHCP et DNS pour distribution automatique des adresses',
        'Rédaction documentation technique complète (schéma réseau, règles filtrage, procédures)',
      ]}
      results={[
        'Infrastructure segmentée et sécurisée',
        'Réduction surface d\'attaque',
        'Détection automatique intrusions via Suricata',
        'Documentation complète',
      ]}
      techStack={[
        'pfSense',
        'Suricata IDS/IPS',
        'VLANs 802.1Q',
        'DHCP',
        'DNS',
        'TCP/IP',
        'VirtualBox',
        'Debian Linux',
      ]}
      competencyDetails={[
        {
          code: 'C1',
          details: [
            'Recenser et identifier les ressources numériques',
            'Exploiter des référentiels et normes',
            'Vérifier les conditions de continuité de service',
          ],
        },
        {
          code: 'C5',
          details: [
            'Déployer un service',
            'Réaliser les tests d\'intégration et d\'acceptation',
            'Accompagner les utilisateurs',
          ],
        },
      ]}
      documents={[
        'Schéma d\'architecture réseau',
        'Documentation technique pfSense',
        'Procédure de maintenance réseau',
      ]}
      nextProject={{ title: 'Active Directory & GPO', link: '/projets/active-directory' }}
    />
  );
}
