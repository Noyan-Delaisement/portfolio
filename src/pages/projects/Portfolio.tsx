import ProjectLayout from '../../components/ProjectLayout';

export default function Portfolio() {
  return (
    <ProjectLayout
      label="Développement Web & Communication"
      title="Portfolio professionnel"
      period="2025/2026"
      context="Projet personnel"
      role="Conception et développement"
      headerColor="bg-gradient-to-r from-pink-900/50 to-blue-900/50"
      contextText="Création d'un portfolio professionnel en ligne pour valoriser mon parcours et mes réalisations techniques."
      actions={[
        'Choix solution technique : React 18 + TypeScript + Vite + Tailwind CSS',
        'Achat et configuration nom de domaine dlsmnt.fr, sous-domaine ndfolio.dlsmnt.fr',
        'Mise en place hébergement web et configuration DNS',
        'Conception architecture du site : routing React Router, composants réutilisables (Layout, ProjectLayout)',
        'Création pages : Profil, Formation, Projets (fiches détaillées), Veille, Engagement, Contact',
        'Build et déploiement via Vite en site statique',
        'Gestion identité professionnelle en ligne : LinkedIn, GitHub, portfolio',
      ]}
      results={[
        'Portfolio accessible sur ndfolio.dlsmnt.fr',
        'Présence professionnelle cohérente',
        'Vitrine réalisations techniques',
      ]}
      techStack={[
        'React 18',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'React Router',
        'Lucide React',
        'DNS',
        'Hébergement web',
        'Git / GitHub',
      ]}
      documents={[
        { title: 'ndfolio.dlsmnt.fr — ce site', link: 'https://ndfolio.dlsmnt.fr' },
      ]}
      prevProject={{ title: 'BookStack — Wiki d\'infrastructure', link: '/projets/bookstack' }}
    />
  );
}
