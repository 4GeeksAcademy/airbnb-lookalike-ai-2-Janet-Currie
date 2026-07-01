interface FilterButtonProps {
  activeCount?: number;
}

const FilterButton = ({ activeCount = 0 }: FilterButtonProps) => {
  return (
    <button
      type="button"
      className="relative grid h-10 w-10 place-items-center rounded-full border border-zinc-300 bg-white text-zinc-700"
      aria-label="Open filters"
    >
      <span aria-hidden>🎛</span>
      {activeCount > 0 ? (
        <span className="absolute -right-1 -top-1 rounded-full bg-zinc-900 px-1.5 text-xs text-white">
          {activeCount}
        </span>
      ) : null}
    </button>
  );
};

export default FilterButton;
