import ListingCard from "./ListingCard";
import { ROUTES } from "./routes";
import type { Listing } from "./types";

interface ListingCarouselProps {
  listings: Listing[];
  favorites: Record<string, boolean>;
  onToggleFavorite: (id: string) => void;
}

const ListingCarousel = ({
  listings,
  favorites,
  onToggleFavorite,
}: ListingCarouselProps) => {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-2">
      <div className="stagger-cards animate-list-enter flex min-w-max gap-4">
        {listings.map((listing) => (
          <div key={listing.id} className="w-72 shrink-0">
            <ListingCard
              listing={listing}
              href={ROUTES.room(listing.id)}
              isFavorite={Boolean(favorites[listing.id])}
              onToggleFavorite={onToggleFavorite}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingCarousel;
