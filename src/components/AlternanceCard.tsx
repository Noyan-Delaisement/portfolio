export default function AlternanceCard() {
  const rows = [
    {
      label: 'Formation',
      value:
        'Bachelor Administrateur Systèmes, Réseaux & Cloud Computing — ESGI Toulouse (RNCP 39115, niveau 6)',
    },
    { label: 'Rythme', value: '1 semaine école / 3 semaines entreprise' },
    { label: 'Domaines', value: 'Systèmes, réseaux, cloud, cybersécurité' },
    { label: 'Zone', value: 'Toulouse et alentours — véhiculé' },
    { label: 'Disponibilité', value: 'Immédiate' },
  ];

  return (
    <div className="bg-[#161b22] border border-[#00d4a0]/50 rounded-lg p-6 text-left">
      <h2 className="text-lg font-semibold text-[#00d4a0] mb-4">Recherche d'alternance</h2>
      <dl className="space-y-3 text-sm">
        {rows.map((row) => (
          <div key={row.label} className="flex flex-col sm:flex-row sm:gap-4">
            <dt className="text-gray-400 sm:w-32 flex-shrink-0">{row.label}</dt>
            <dd className="text-white font-medium">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
