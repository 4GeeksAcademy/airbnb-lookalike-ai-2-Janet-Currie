interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <header className="space-y-1">
      <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
      {subtitle ? <p className="text-sm text-zinc-500">{subtitle}</p> : null}
    </header>
  );
};

export default SectionHeader;
