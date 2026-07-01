import Link from "next/link";
import Image from "next/image";

import Badge from "./Badge";
import FavoriteButton from "./FavoriteButton";
import type { Listing } from "./types";

interface ListingCardProps {
  listing: Listing;
  href: string;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const ListingCard = ({
  listing,
  href,
  isFavorite,
  onToggleFavorite,
}: ListingCardProps) => {
  return (
    <article className="relative overflow-hidden rounded-3xl bg-white shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <Link href={href} className="block">
        <div className="relative">
          <Image
            src={listing.imageUrl}
            alt={listing.title}
            width={800}
            height={600}
            className="h-52 w-full object-cover"
          />
          <div className="absolute left-3 top-3">
            {listing.badge ? <Badge label={listing.badge} /> : null}
          </div>
        </div>
        <div className="space-y-1 px-4 py-4">
          <p className="text-lg font-semibold text-zinc-900">{listing.title}</p>
          <p className="text-sm text-zinc-500">{listing.location}</p>
          <p className="text-sm font-medium text-zinc-800">{listing.priceLabel}</p>
          <p className="text-sm text-zinc-600">★ {listing.rating.toFixed(2)}</p>
        </div>
      </Link>
      <div className="absolute right-3 top-3">
        <FavoriteButton
          isActive={isFavorite}
          onToggle={() => onToggleFavorite(listing.id)}
        />
      </div>
    </article>
  );
};

export default ListingCard;
