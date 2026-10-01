import ProjectLayout from '../../components/ProjectLayout';

export default function Infrastructure() {
  const infoBox = (
    <div className="bg-[#161b22] border border-blue-500/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-blue-400 mb-3">Architecture réseau usine — site client</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
        <div>
          <p className="text-gray-400">VLANs déployés</p>
          <p className="text-2xl font-bold text-white">4</p>
          <p className="text-gray-400 text-xs">Supervision / Production / Maintenance / Mgmt</p>
        </div>
        <div>
          <p className="text-gray-400">IHM intégrées</p>
          <p className="text-2xl font-bold text-white">16</p>
          <p className="text-gray-400 text-xs">VLAN 20 — Production</p>
        </div>
        <div>
          <p className="text-gray-400">Règles pfSense</p>
          <p className="text-2xl font-bold text-white">9</p>
          <p className="text-gray-400 text-xs">dont refus implicite</p>
        </div>
        <div>
          <p className="text-gray-400">Isolation</p>
          <p className="text-2xl font-bold text-[#00d4a0]">Air gap</p>
          <p className="text-gray-400 text-xs">réseau administratif du client</p>
        </div>
      </div>
    </div>
  );

  return (
    <ProjectLayout
      label="Infrastructure réseau industrielle"
      title="Réseau Industriel Sécurisé — Périmètre Usine"
      period="2024/2025"
      context="PREM Automation — client industriel (site sensible)"
      role="Technicien informatique apprenti"
      headerColor="bg-gradient-to-r from-blue-900/50 to-purple-900/50"
      infoBox={infoBox}
      contextText="Dans le cadre d'un contrat de prestation pour un client industriel dont le site est classé sensible, PREM Automation est intervenu pour concevoir et déployer l'infrastructure réseau du périmètre usine. Le site impose une séparation physique et logique totale (air gap) entre le réseau administratif du client et le réseau usine, afin de protéger les systèmes de contrôle industriel (SCI) de toute contamination ou accès non autorisé."
      actions={[
        'Conception du plan d\'adressage IP en 4 VLANs fonctionnels : Supervision, Production, Maintenance et Management',
        'Déploiement pfSense 2.7 CE en routeur/pare-feu interne sans interface WAN — routage inter-VLAN via trunk 802.1Q',
        'Configuration du switch manageable 802.1Q avec ports trunk et ports d\'accès par VLAN',
        'Mise en place de 9 règles de filtrage pfSense avec politique de refus implicite (default deny)',
        'Configuration DHCP uniquement sur VLAN Maintenance — adressage statique sur Supervision et Production pour la stabilité des communications automates',
        'Intégration des 16 IHM et automates sur le VLAN PRODUCTION en adressage statique numéroté par zone atelier',
        'Configuration des accès RDP depuis VLAN Maintenance vers IHM et serveurs pour interventions techniciens',
        'Validation par 9 tests de connectivité et de filtrage (flux autorisés, flux bloqués, DHCP, communication IHM ↔ automates)',
        'Rédaction de la documentation technique et des procédures de maintenance courante',
      ]}
      results={[
        'Air gap opérationnel — aucune interconnexion entre réseau usine et réseau administratif du client',
        'Segmentation en 4 VLANs adaptés aux contraintes industrielles du site',
        'Politique de filtrage stricte : 7 règles explicites + refus implicite — 9/9 tests validés',
        'Communication IHM ↔ automates fluide sans interruption sur le VLAN Production',
        'Accès techniciens contrôlé via VLAN Maintenance avec isolation des équipements nomades',
        'Documentation complète pour la maintenance et les futures interventions PREM Automation',
      ]}
      techStack={[
        'pfSense 2.7 CE',
        'VLANs 802.1Q',
        'Switch manageable',
        'DHCP',
        'DNS',
        'RDP',
        'OPC-UA / Modbus',
        'Windows Server',
        'Windows Embedded / 10',
      ]}
      documents={[]}
    />
  );
}
