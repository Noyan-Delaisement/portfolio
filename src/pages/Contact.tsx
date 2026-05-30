import { Mail, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('mwvzjpvj');

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
          {state.succeeded ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <CheckCircle size={48} className="text-[#00d4a0]" />
              <p className="text-xl font-semibold text-white">Message envoyé !</p>
              <p className="text-gray-400">Je vous répondrai dans les meilleurs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-300 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
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
                  name="email"
                  className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#4f8eff] transition-colors"
                  required
                />
                <ValidationError field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="sujet" className="block text-sm font-medium text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="sujet"
                  name="sujet"
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
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#4f8eff] transition-colors resize-none"
                  required
                />
                <ValidationError field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
              </div>

              {state.errors && state.errors.length > 0 && !state.errors.some((e: { field?: string }) => e.field) && (
                <p className="text-red-400 text-sm">Une erreur est survenue. Veuillez réessayer.</p>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full sm:w-auto px-8 py-3 bg-[#4f8eff] hover:bg-[#6ea8ff] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {state.submitting ? (
                  <span>Envoi en cours…</span>
                ) : (
                  <>
                    Envoyer
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
