import type { CategoryTab } from "./types";

interface CategoryTabsProps {
  tabs: CategoryTab[];
  activeTabId: string;
  onTabChange: (id: string) => void;
}

const CategoryTabs = ({ tabs, activeTabId, onTabChange }: CategoryTabsProps) => {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-2">
      <ul className="flex min-w-max gap-2">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <li key={tab.id}>
              <button
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "animate-chip-press border-zinc-900 bg-zinc-900 text-white shadow-sm"
                    : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
                }`}
              >
                <span className="mr-2" aria-hidden>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryTabs;
