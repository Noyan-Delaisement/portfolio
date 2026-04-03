import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Profil', path: '/profil' },
    { name: 'Formation & Expériences', path: '/formation' },
    { name: 'Projets', path: '/projets' },
    { name: 'Veille', path: '/veille' },
    { name: 'Tableau E5', path: '/tableau-synthese' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100 flex flex-col">
      <nav className="bg-[#161b22] border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold text-[#4f8eff] hover:text-[#6ea8ff] transition-colors">
              ND
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm transition-colors ${
                    isActive(link.path)
                      ? 'text-[#4f8eff] font-medium'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-700">
                <a
                  href="https://www.linkedin.com/in/noyan-delaisement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#4f8eff] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/AnthraX-J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#4f8eff] transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0d1117] border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm transition-colors ${
                    isActive(link.path)
                      ? 'text-[#4f8eff] font-medium'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
                <a
                  href="https://www.linkedin.com/in/noyan-delaisement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#4f8eff] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/AnthraX-J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#4f8eff] transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="bg-[#161b22] border-t border-gray-800 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          © 2026 DELAISEMENT Noyan — ndfolio.dlsmnt.fr
        </div>
      </footer>
    </div>
  );
}
