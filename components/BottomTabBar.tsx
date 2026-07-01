import Link from "next/link";

import type { BottomTabItem } from "./types";

interface BottomTabBarProps {
  items: BottomTabItem[];
  activeItemId: string;
}

const BottomTabBar = ({ items, activeItemId }: BottomTabBarProps) => {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/95 backdrop-blur">
      <ul className="mx-auto flex max-w-7xl items-center justify-around px-4 py-3">
        {items.map((item) => {
          const active = item.id === activeItemId;
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-1 text-xs font-medium transition ${
                  active ? "text-rose-600" : "text-zinc-500"
                }`}
              >
                <span className="text-lg" aria-hidden>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomTabBar;
