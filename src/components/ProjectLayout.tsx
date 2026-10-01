import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import usePageTitle from '../hooks/usePageTitle';

interface ProjectLayoutProps {
  label: string;
  title: string;
  period: string;
  context: string;
  role: string;
  contextText: string;
  actions: string[];
  results: string[];
  techStack: string[];
  documents: (string | { title: string; link: string })[];
  headerColor: string;
  infoBox?: React.ReactNode;
}

export default function ProjectLayout({
  label,
  title,
  period,
  context,
  role,
  contextText,
  actions,
  results,
  techStack,
  documents,
  headerColor,
  infoBox,
}: ProjectLayoutProps) {
  usePageTitle(title);

  const { pathname } = useLocation();
  const currentIndex = projects.findIndex(
    (project) => `/projets/${project.slug}` === pathname.replace(/\/$/, '')
  );
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex >= 0 && currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;

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

        {documents.length > 0 && (
          <section className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Documents et productions</h2>
            <div className="space-y-6">
              {documents.map((doc, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 text-gray-300 mb-3">
                    <span className="text-[#4f8eff]">📄</span>
                    {typeof doc === 'object' && doc.link ? (
                      <a href={doc.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#4f8eff] transition-colors hover:underline">
                        {doc.title}
                      </a>
                    ) : (
                      <span>{typeof doc === 'object' ? doc.title : doc}</span>
                    )}
                  </div>
                  {typeof doc === 'object' && doc.link && doc.link.endsWith('.pdf') && (
                    <>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#4f8eff] hover:bg-[#6ea8ff] text-white font-medium rounded-lg transition-colors text-sm"
                        >
                          <ExternalLink size={16} />
                          Ouvrir le PDF
                        </a>
                        <a
                          href={doc.link}
                          download
                          className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-600 hover:border-[#4f8eff] text-gray-300 hover:text-white font-medium rounded-lg transition-colors text-sm"
                        >
                          <Download size={16} />
                          Télécharger
                        </a>
                      </div>
                      <iframe
                        src={doc.link}
                        loading="lazy"
                        className="hidden md:block w-full h-[750px] rounded border border-gray-700"
                        title={doc.title}
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
          {prevProject ? (
            <Link
              to={`/projets/${prevProject.slug}`}
              className="flex items-center gap-2 text-gray-400 hover:text-[#4f8eff] transition-colors"
            >
              <ChevronLeft size={20} className="flex-shrink-0" />
              <span>{prevProject.title}</span>
            </Link>
          ) : (
            <div></div>
          )}
          {nextProject ? (
            <Link
              to={`/projets/${nextProject.slug}`}
              className="flex items-center gap-2 text-gray-400 hover:text-[#4f8eff] transition-colors sm:text-right"
            >
              <span>{nextProject.title}</span>
              <ChevronRight size={20} className="flex-shrink-0" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
