import { Mail, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.sujet);
    const body = encodeURIComponent(`Nom : ${formData.nom}\n\n${formData.message}`);
    window.location.href = `mailto:contact@dlsmnt.fr?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'delaisementn@gmail.com',
      link: 'mailto:delaisementn@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Toulouse, France',
      link: null,
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'noyan-delaisement',
      link: 'https://www.linkedin.com/in/noyan-delaisement',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'Noyan-Delaisement',
      link: 'https://github.com/Noyan-Delaisement',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
            <Mail className="text-[#4f8eff]" size={36} />
            Me contacter
          </h1>
          <div className="h-1 w-24 bg-[#4f8eff] rounded mx-auto"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            N'hésitez pas à me contacter pour toute opportunité d'alternance, de stage ou de
            collaboration technique. Disponible pour une alternance à partir de septembre 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = (
              <>
                <Icon size={24} className="text-[#4f8eff] flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm text-gray-400">{info.title}</p>
                  <p className="text-white font-medium break-all whitespace-normal">{info.value}</p>
                </div>
              </>
            );

            return info.link ? (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-[#161b22] border border-gray-800 rounded-lg p-5 hover:border-[#4f8eff] transition-all flex items-center gap-3 group"
              >
                {content}
              </a>
            ) : (
              <div
                key={index}
                className="bg-[#161b22] border border-gray-800 rounded-lg p-5 flex items-center gap-3"
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="bg-[#161b22] border border-gray-800 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-300 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#4f8eff] transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#4f8eff] transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="sujet" className="block text-sm font-medium text-gray-300 mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="sujet"
                value={formData.sujet}
                onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#4f8eff] transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#4f8eff] transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-[#4f8eff] hover:bg-[#6ea8ff] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {sent ? (
                <>
                  <CheckCircle size={18} />
                  Client mail ouvert !
                </>
              ) : (
                <>
                  Envoyer
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
