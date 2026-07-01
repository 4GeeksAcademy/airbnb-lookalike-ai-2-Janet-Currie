interface CategoryFilterPillsProps {
  activeId: string;
  onChange: (id: string) => void;
}

const filterPills = [
  { id: "all", label: "Any" },
  { id: "homes", label: "Home" },
  { id: "hotel", label: "Hotel" },
  { id: "experience", label: "Experience" },
];

const CategoryFilterPills = ({
  activeId,
  onChange,
}: CategoryFilterPillsProps) => {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-2">
      <ul className="flex min-w-max gap-2">
        {filterPills.map((pill) => {
          const active = pill.id === activeId;
          return (
            <li key={pill.id}>
              <button
                type="button"
                onClick={() => onChange(pill.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "animate-chip-press border-2 border-zinc-900 bg-white text-zinc-900 shadow-sm"
                    : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
                }`}
              >
                {pill.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryFilterPills;
