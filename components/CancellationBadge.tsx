interface CancellationBadgeProps {
  dueTodayLabel: string;
  cancellationText: string;
  cancellationDate: string;
}

const CancellationBadge = ({
  dueTodayLabel,
  cancellationText,
  cancellationDate,
}: CancellationBadgeProps) => {
  return (
    <p className="rounded-2xl bg-zinc-100 px-4 py-3 text-sm text-zinc-700">
      <span className="font-semibold text-zinc-900">{dueTodayLabel}</span> · {cancellationText}{" "}
      <span className="font-semibold text-zinc-900">{cancellationDate}</span>
    </p>
  );
};

export default CancellationBadge;
