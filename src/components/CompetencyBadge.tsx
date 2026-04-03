interface CompetencyBadgeProps {
  code: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CompetencyBadge({ code, label, size = 'md' }: CompetencyBadgeProps) {
  const colors: Record<string, string> = {
    C1: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    C2: 'bg-green-500/20 text-green-400 border-green-500/30',
    C3: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    C4: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    C5: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    C6: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  };

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium ${colors[code]} ${sizes[size]}`}
    >
      {code}
      {label && <span className="ml-1">{label}</span>}
    </span>
  );
}
