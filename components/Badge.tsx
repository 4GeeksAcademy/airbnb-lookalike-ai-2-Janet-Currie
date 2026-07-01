interface BadgeProps {
  label: string;
}

const Badge = ({ label }: BadgeProps) => {
  return (
    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900 shadow-sm">
      {label}
    </span>
  );
};

export default Badge;
