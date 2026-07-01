import type { ReactNode } from "react";

interface ListingDetailCardProps {
  children: ReactNode;
}

const ListingDetailCard = ({ children }: ListingDetailCardProps) => {
  return (
    <section className="-mt-6 rounded-t-3xl bg-white px-4 pb-24 pt-6 shadow-lg sm:px-6">
      {children}
    </section>
  );
};

export default ListingDetailCard;
