import type { ListingSpecs } from "./types";

interface ListingSpecsRowProps {
  specs: ListingSpecs;
}

const ListingSpecsRow = ({ specs }: ListingSpecsRowProps) => {
  return (
    <p className="text-sm text-zinc-600">
      {specs.guests} guests · {specs.bedrooms} bedrooms · {specs.beds} beds · {specs.baths} baths
    </p>
  );
};

export default ListingSpecsRow;
