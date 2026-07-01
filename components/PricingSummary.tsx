import CancellationBadge from "./CancellationBadge";
import type { PricingSummaryData } from "./types";

interface PricingSummaryProps {
  pricing: PricingSummaryData;
}

const PricingSummary = ({ pricing }: PricingSummaryProps) => {
  return (
    <div className="space-y-3 rounded-2xl border border-zinc-200 p-4">
      <p className="text-2xl font-semibold text-zinc-900">{pricing.totalPrice}</p>
      <p className="text-sm text-zinc-600">
        {pricing.nights} nights · {pricing.dateRange}
      </p>
      <CancellationBadge
        dueTodayLabel={pricing.dueTodayLabel}
        cancellationText={pricing.cancellationText}
        cancellationDate={pricing.cancellationDate}
      />
    </div>
  );
};

export default PricingSummary;
