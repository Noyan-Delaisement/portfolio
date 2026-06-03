import { Anchor, Award, Shield, Radio, BookOpen, Download, ArrowRight } from 'lucide-react';

export default function Engagement() {
  const certifications = [
    { code: 'BNSSA', label: 'Brevet National de Sécurité et de Sauvetage Aquatique' },
    { code: 'PSE1', label: 'Premiers Secours en Équipe niveau 1' },
    { code: 'PSE2', label: 'Premiers Secours en Équipe niveau 2' },
    { code: 'IRB', label: 'Inflatable Rescue Boat — Canot de sauvetage' },
    { code: 'Marine Jet 1', label: 'Permis mer côtier — Jet ski sauvetage' },
    { code: 'VHF', label: 'Certificat Radio VHF maritime' },
  ];

  const activities = [
    {
      icon: Shield,
      title: 'Surveillance & Intervention',
      color: 'text-[#4f8eff]',
      border: 'border-l-[#4f8eff]',
      items: [
        'Surveillance de baignades, plans d\'eau et événements sportifs',
        'Réponse aux urgences : noyades, collisions, chavirement',
        'Coordination des secours en équipe',
        'Application des procédures SAR (Search and Rescue)',
      ],
    },
    {
      icon: Radio,
      title: 'Communications Radio',
      color: 'text-[#00d4a0]',
      border: 'border-l-[#00d4a0]',
      items: [
        'Protocoles VHF maritime — canal 16, appels de détresse DSC',
        'Coordination avec le CROSS (Centre Régional Opérationnel de Surveillance et de Sauvetage)',
        'Gestion des fréquences et des canaux de travail',
        'Rédaction et transmission de messages normalisés',
      ],
    },
    {
      icon: BookOpen,
      title: 'Formation continue',
      color: 'text-purple-400',
      border: 'border-l-purple-400',
      items: [
        'Entraînements hebdomadaires — techniques de sauvetage et premiers secours',
        'Recyclage des certifications PSE1/PSE2',
        'Formation des nouvelles recrues de la station',
        'Veille sur l\'évolution des procédures et réglementations maritimes',
      ],
    },
  ];

  const comparisons = [
    {
      snsm: 'Protocoles radio VHF standardisés (canal 16, DSC, MAYDAY)',
      sisr: 'Protocoles réseau standardisés (TCP/IP, VLAN, 802.1Q)',
    },
    {
      snsm: 'Gestion d\'incident & escalade (MAYDAY → CROSS → coordination)',
      sisr: 'PRA/PCA & réponse aux incidents IT (N1 → N2 → N3, GLPI)',
    },
    {
      snsm: 'Rigueur procédurale & traçabilité des interventions',
      sisr: 'Administration système — logs, supervision, audit (Wazuh, Rudder)',
    },
    {
      snsm: 'Formation continue & veille sur les procédures SAR',
      sisr: 'Veille technologique & cybersécurité (ANSSI, CVE, certification)',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* En-tête */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white flex items-center gap-3">
            <Anchor className="text-[#4f8eff]" size={36} />
            Engagement Étudiant
          </h1>
          <div className="h-1 w-24 bg-[#4f8eff] rounded"></div>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            En parallèle de ma formation BTS SIO SISR et de mon apprentissage chez PREM Automation,
            je suis bénévole nageur sauveteur à la <strong className="text-white">SNSM Toulouse</strong> depuis
            plus de 2 ans.
          </p>
        </div>

        {/* Intro SNSM */}
        <section className="bg-[#161b22] border border-gray-800 rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-md bg-[#4f8eff]/10 border border-[#4f8eff]/20">
              <Anchor className="text-[#4f8eff]" size={22} />
            </div>
            <h2 className="text-xl font-semibold text-white">SNSM — Société Nationale de Sauvetage en Mer</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            La SNSM est une association <strong className="text-white">100 % bénévole</strong> qui couvre l'ensemble des
            côtes et voies navigables françaises. Elle intervient chaque année pour plusieurs milliers
            de sauvetages en mer et en eaux intérieures.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Notre station est basée à <strong className="text-white">l'Île du Ramier (Toulouse)</strong>, sur les voies
            navigables de la Garonne. J'y assure des missions de surveillance, de sauvetage et de
            formation aux côtés d'une équipe de bénévoles expérimentés.
          </p>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
            <Award className="text-[#00d4a0]" size={28} />
            Certifications obtenues
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.code}
                className="bg-[#161b22] border border-gray-800 rounded-lg p-4 flex items-start gap-3 hover:border-[#4f8eff]/40 transition-colors"
              >
                <span className="mt-0.5 flex-shrink-0 w-2 h-2 rounded-full bg-[#4f8eff] mt-2"></span>
                <div>
                  <p className="text-white font-semibold text-sm">{cert.code}</p>
                  <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{cert.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activités */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Activités & missions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.title}
                  className={`bg-[#161b22] border border-gray-800 border-l-4 ${activity.border} rounded-lg p-6 space-y-4`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={activity.color} size={22} />
                    <h3 className="text-white font-semibold">{activity.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {activity.items.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <ArrowRight size={14} className="flex-shrink-0 mt-0.5 text-gray-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tableau SNSM ↔ SISR */}
        <section className="bg-gradient-to-r from-[#4f8eff]/10 to-transparent border border-[#4f8eff]/30 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Compétences transversales — SNSM & SISR
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            L'engagement à la SNSM développe des réflexes directement transposables en informatique.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left pb-3 pr-6 text-[#4f8eff] font-semibold w-1/2">
                    Compétence SNSM
                  </th>
                  <th className="text-left pb-3 text-[#00d4a0] font-semibold w-1/2">
                    Compétence SISR
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {comparisons.map((row, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-6 text-gray-300 align-top">{row.snsm}</td>
                    <td className="py-3 text-gray-300 align-top">{row.sisr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Téléchargement */}
        <section className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Document EF4</h2>
          <p className="text-gray-400 text-sm mb-5">
            Présentation réalisée dans le cadre de l'épreuve EF4 — Engagement étudiant du BTS SIO.
          </p>
          <a
            href="/EF4_Engagement_Etudiant_SNSM.pptx"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#4f8eff] hover:bg-[#6ea8ff] text-white font-medium rounded-lg transition-colors"
          >
            <Download size={18} />
            Télécharger la présentation EF4 (PPTX)
          </a>
        </section>

      </div>
    </div>
  );
}
