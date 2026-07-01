import Link from "next/link";

import FilterButton from "./FilterButton";
import { ROUTES } from "./routes";

const SearchSummaryBar = () => {
  return (
    <div className="flex items-center gap-3">
      <Link
        href={ROUTES.home}
        className="grid h-10 w-10 place-items-center rounded-full border border-zinc-300 bg-white text-zinc-700 shadow-sm"
        aria-label="Back to home"
      >
        ←
      </Link>
      <button
        type="button"
        className="flex-1 rounded-full border border-zinc-200 bg-white px-4 py-2 text-left text-sm shadow-sm"
      >
        <span className="block font-medium text-zinc-900">Homes in Paris</span>
        <span className="block text-xs text-zinc-500">Nov 9 - 13 · 4 guests</span>
      </button>
      <FilterButton activeCount={1} />
    </div>
  );
};

export default SearchSummaryBar;
