import ProjectLayout from '../../components/ProjectLayout';

export default function Portfolio() {
  return (
    <ProjectLayout
      label="Développement Web & Communication"
      title="Portfolio professionnel"
      period="2025/2026"
      context="BTS SIO"
      role="Étudiant BTS SIO SISR"
      competencies={['C3', 'C4', 'C6']}
      headerColor="bg-gradient-to-r from-pink-900/50 to-blue-900/50"
      contextText="Dans le cadre de l'épreuve E5 du BTS SIO, création d'un portfolio professionnel en ligne pour valoriser le parcours de professionnalisation et les réalisations techniques."
      actions={[
        'Choix solution technique : React 18 + TypeScript + Vite + Tailwind CSS',
        'Achat et configuration nom de domaine dlsmnt.fr, sous-domaine ndfolio.dlsmnt.fr',
        'Mise en place hébergement web et configuration DNS',
        'Conception architecture du site : routing React Router, composants réutilisables (Layout, ProjectLayout, CompetencyBadge)',
        'Création pages : Profil, Formation, Projets (10 fiches détaillées), Tableau de synthèse E5, Veille, Contact',
        'Build et déploiement via Vite en site statique',
        'Gestion identité professionnelle en ligne : LinkedIn, GitHub, portfolio',
      ]}
      results={[
        'Portfolio accessible sur ndfolio.dlsmnt.fr',
        'Dossier E5 complet consultable en ligne',
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
      competencyDetails={[
        {
          code: 'C3',
          details: [
            'Participer à la valorisation de l\'image sur les médias numériques',
            'Référencer les services en ligne',
            'Mesurer la visibilité',
          ],
        },
        {
          code: 'C4',
          details: [
            'Analyser les objectifs et les modalités d\'organisation',
            'Planifier les activités',
          ],
        },
        {
          code: 'C6',
          details: [
            'Gérer son identité professionnelle',
            'Développer son projet professionnel',
            'Mettre en place son environnement d\'apprentissage',
          ],
        },
      ]}
      documents={[
        { title: 'ndfolio.dlsmnt.fr — ce site', link: 'https://ndfolio.dlsmnt.fr' },
        'Documentation technique hébergement et DNS',
      ]}
      prevProject={{ title: 'BookStack — Wiki d\'infrastructure', link: '/projets/bookstack' }}
    />
  );
}
