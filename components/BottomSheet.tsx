import type { ReactNode } from "react";

interface BottomSheetProps {
  children: ReactNode;
}

const BottomSheet = ({ children }: BottomSheetProps) => {
  return (
    <section className="rounded-3xl bg-white p-4 shadow-sm">
      <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-zinc-200" />
      {children}
    </section>
  );
};

export default BottomSheet;
