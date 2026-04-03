import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-12 px-4 text-center">
      <p className="text-8xl font-bold text-[#4f8eff] opacity-30 select-none">404</p>
      <h1 className="text-3xl font-bold text-white mt-4 mb-2">Page introuvable</h1>
      <p className="text-gray-400 mb-8 max-w-md">
        Cette page n'existe pas ou a été déplacée.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#4f8eff] hover:bg-[#6ea8ff] text-white font-medium rounded-lg transition-colors"
        >
          <Home size={18} />
          Retour à l'accueil
        </Link>
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-gray-600 hover:border-[#4f8eff] text-gray-300 hover:text-white font-medium rounded-lg transition-all"
        >
          <ArrowLeft size={18} />
          Page précédente
        </button>
      </div>
    </div>
  );
}
