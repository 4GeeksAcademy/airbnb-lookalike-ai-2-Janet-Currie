interface LoadingStateProps {
  label: string;
}

const LoadingState = ({ label }: LoadingStateProps) => {
  return (
    <div className="flex min-h-[220px] items-center justify-center rounded-3xl border border-dashed border-zinc-300 bg-white">
      <p className="text-sm font-medium text-zinc-500">{label}</p>
    </div>
  );
};

export default LoadingState;
