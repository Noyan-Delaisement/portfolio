import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import CompetencyBadge from './CompetencyBadge';

interface ProjectLayoutProps {
  label: string;
  title: string;
  period: string;
  context: string;
  role: string;
  competencies: string[];
  contextText: string;
  actions: string[];
  results: string[];
  techStack: string[];
  competencyDetails: { code: string; details: string[] }[];
  documents: (string | { title: string; link: string })[];
  prevProject?: { title: string; link: string };
  nextProject?: { title: string; link: string };
  headerColor: string;
  infoBox?: React.ReactNode;
}

export default function ProjectLayout({
  label,
  title,
  period,
  context,
  role,
  competencies,
  contextText,
  actions,
  results,
  techStack,
  competencyDetails,
  documents,
  prevProject,
  nextProject,
  headerColor,
  infoBox,
}: ProjectLayoutProps) {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <Link
          to="/projets"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#4f8eff] transition-colors"
        >
          <ArrowLeft size={20} />
          Retour aux projets
        </Link>

        <div className={`${headerColor} rounded-lg p-8 space-y-4`}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-white/80">{label}</span>
            {competencies.map((comp) => (
              <CompetencyBadge key={comp} code={comp} />
            ))}
          </div>
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-white/70">Période</span>
              <p className="text-white font-medium">{period}</p>
            </div>
            <div>
              <span className="text-white/70">Contexte</span>
              <p className="text-white font-medium">{context}</p>
            </div>
            <div>
              <span className="text-white/70">Rôle</span>
              <p className="text-white font-medium">{role}</p>
            </div>
          </div>
        </div>

        {infoBox && infoBox}

        <section className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Contexte et objectifs</h2>
          <p className="text-gray-300 leading-relaxed">{contextText}</p>
        </section>

        <section className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Ce que j'ai réalisé</h2>
          <ul className="space-y-3">
            {actions.map((action, index) => (
              <li key={index} className="text-gray-300 flex items-start">
                <span className="text-[#4f8eff] mr-3 mt-1">•</span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </section>


        <section className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Résultats et bénéfices</h2>
          <ul className="space-y-3">
            {results.map((result, index) => (
              <li key={index} className="text-gray-300 flex items-start">
                <span className="text-[#00d4a0] mr-3 mt-1">✓</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Environnement technique</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-md text-sm border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#4f8eff]/10 to-transparent border border-[#4f8eff]/30 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Compétences E5 mobilisées — détail
          </h2>
          <div className="space-y-4">
            {competencyDetails.map((comp, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 mb-2">
                  <CompetencyBadge code={comp.code} />
                </div>
                <ul className="space-y-1 ml-4">
                  {comp.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-start">
                      <span className="text-[#4f8eff] mr-2">·</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {documents.length > 0 && (
          <section className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Documents et productions</h2>
            <ul className="space-y-2">
              {documents.map((doc, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-[#4f8eff] mr-2">📄</span>
                  {typeof doc === 'object' && doc.link ? (
                    <a href={doc.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#4f8eff] transition-colors hover:underline">
                      {doc.title}
                    </a>
                  ) : (
                    <span>{typeof doc === 'object' ? doc.title : doc}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
          {prevProject ? (
            <Link
              to={prevProject.link}
              className="flex items-center gap-2 text-gray-400 hover:text-[#4f8eff] transition-colors"
            >
              <ChevronLeft size={20} />
              <span>Projet précédent</span>
            </Link>
          ) : (
            <div></div>
          )}
          {nextProject ? (
            <Link
              to={nextProject.link}
              className="flex items-center gap-2 text-gray-400 hover:text-[#4f8eff] transition-colors"
            >
              <span>Projet suivant</span>
              <ChevronRight size={20} />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
