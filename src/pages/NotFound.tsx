import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="py-24 px-4 flex flex-col items-center justify-center text-center space-y-6">
      <p className="text-8xl font-bold text-[#4f8eff]">404</p>
      <h1 className="text-2xl font-semibold text-white">Page introuvable</h1>
      <p className="text-gray-400">Cette page n'existe pas ou a été déplacée.</p>
      <Link
        to="/"
        className="px-5 py-2.5 bg-[#4f8eff] hover:bg-[#6ea8ff] text-white font-medium rounded-lg transition-colors"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
