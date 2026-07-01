interface EmptyStateProps {
  title: string;
  description: string;
}

const EmptyState = ({ title, description }: EmptyStateProps) => {
  return (
    <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-8 text-center">
      <p className="text-base font-semibold text-zinc-900">{title}</p>
      <p className="mt-2 text-sm text-zinc-500">{description}</p>
    </div>
  );
};

export default EmptyState;
