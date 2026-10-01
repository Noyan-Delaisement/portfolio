import ProjectLayout from '../../components/ProjectLayout';

export default function Videosurveillance() {
  return (
    <ProjectLayout
      label="Sécurité physique & réseau"
      title="Vidéosurveillance IP — architecture et audit"
      period="2025/2026"
      context="PREM Automation — client"
      role="Technicien informatique apprenti"
      headerColor="bg-gradient-to-r from-slate-800/60 to-blue-900/50"
      contextText="Projet mené pour un client de PREM Automation : conception de l'architecture réseau d'un système de vidéosurveillance IP et évaluation de sa sécurité."
      actions={[
        'Conception de l\'architecture : 15 caméras IP eneo, enregistreurs DVR et NVR, liaison par pont Wi-Fi',
        'Réalisation du schéma d\'architecture réseau de l\'installation',
        'Évaluation de la sécurité de l\'installation et rédaction des recommandations',
      ]}
      results={[
        'Architecture documentée par un schéma réseau',
        'Points de vigilance sécurité identifiés et documentés',
      ]}
      techStack={[
        'Caméras IP eneo',
        'DVR',
        'NVR',
        'Pont Wi-Fi',
        'Audit de sécurité',
      ]}
      documents={[]}
    />
  );
}
