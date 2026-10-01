import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FolderOpen, ArrowRight } from 'lucide-react';
import { projects, type ProjectCategory } from '../data/projects';
import usePageTitle from '../hooks/usePageTitle';

type Filter = 'Tous' | ProjectCategory;

const filters: Filter[] = ['Tous', 'Entreprise', 'Formation', 'Personnel'];

export default function Projets() {
  usePageTitle('Projets');

  const [filter, setFilter] = useState<Filter>('Tous');

  const visibleProjects =
    filter === 'Tous' ? projects : projects.filter((project) => project.category === filter);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white flex items-center gap-3">
            <FolderOpen className="text-[#4f8eff]" size={36} />
            Projets
          </h1>
          <div className="h-1 w-24 bg-[#4f8eff] rounded"></div>
          <p className="text-gray-300 text-lg max-w-4xl leading-relaxed">
            Voici l'ensemble de mes réalisations professionnelles menées en entreprise chez PREM
            Automation et en formation. Chaque projet détaille le contexte, les actions
            menées, les outils utilisés et les résultats obtenus.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                filter === item
                  ? 'bg-[#4f8eff]/20 text-[#4f8eff] border-[#4f8eff]/30 font-medium'
                  : 'bg-[#161b22] text-gray-400 border-gray-800 hover:text-white hover:border-gray-600'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <Link
              key={project.slug}
              to={`/projets/${project.slug}`}
              className="group bg-[#161b22] border border-gray-800 rounded-lg p-6 hover:border-[#4f8eff] transition-all hover:shadow-lg hover:shadow-[#4f8eff]/10"
            >
              <div className="space-y-4">
                <div className="text-4xl">{project.emoji}</div>
                <h3 className="text-xl font-semibold text-white group-hover:text-[#4f8eff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
                <p className="text-xs text-gray-500">
                  {project.category} — {project.period}
                </p>
                <div className="flex items-center gap-2 text-[#4f8eff] text-sm font-medium pt-2">
                  Voir le projet
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
