"use client";

import { useMemo, useState } from "react";

import BottomSheet from "./BottomSheet";
import BottomTabBar from "./BottomTabBar";
import CatalogMap from "./CatalogMap";
import CategoryFilterPills from "./CategoryFilterPills";
import EmptyState from "./EmptyState";
import InfoToast from "./InfoToast";
import ListingCard from "./ListingCard";
import SearchSummaryBar from "./SearchSummaryBar";
import { bottomTabs, listings, mapMarkers } from "./data/listings";
import { ROUTES } from "./routes";

const MapSearchScreen = () => {
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [selectedMarkerId, setSelectedMarkerId] = useState(mapMarkers[0]?.id ?? "");

  const visibleListings = useMemo(() => {
    const filtered = listings.filter((listing) => {
      return activeCategoryId === "all" || listing.category === activeCategoryId;
    });
    return filtered.sort((a, b) => {
      const diff = a.nightlyPrice - b.nightlyPrice;
      return sortOrder === "asc" ? diff : diff * -1;
    });
  }, [activeCategoryId, sortOrder]);

  const visibleMarkers = useMemo(() => {
    const ids = new Set(visibleListings.map((listing) => listing.id));
    return mapMarkers.filter((marker) => ids.has(marker.id));
  }, [visibleListings]);

  const toggleFavorite = (id: string) => {
    setFavorites((current) => ({ ...current, [id]: !current[id] }));
  };

  return (
    <div className="min-h-screen bg-zinc-50 pb-24">
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-5">
        <SearchSummaryBar />
        <CategoryFilterPills activeId={activeCategoryId} onChange={setActiveCategoryId} />
        <div className="flex items-center justify-between text-sm text-zinc-600">
          <p>{visibleListings.length} stays available</p>
          <label className="flex items-center gap-2">
            Sort by price
            <select
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value as "asc" | "desc")}
              className="rounded-lg border border-zinc-300 bg-white px-2 py-1 text-sm text-zinc-700"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <BottomSheet>
            <div className="mb-4 flex justify-center">
              <InfoToast message="Prices include all fees" />
            </div>
            <div
              key={`${activeCategoryId}-${sortOrder}`}
              className="stagger-cards animate-list-enter space-y-4"
            >
              {visibleListings.length === 0 ? (
                <EmptyState
                  title="No stays found"
                  description="Adjust filters to see more places in this area."
                />
              ) : (
                visibleListings.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    listing={listing}
                    href={ROUTES.room(listing.id)}
                    isFavorite={Boolean(favorites[listing.id])}
                    onToggleFavorite={toggleFavorite}
                  />
                ))
              )}
            </div>
          </BottomSheet>
          <CatalogMap
            markers={visibleMarkers}
            selectedId={
              visibleMarkers.some((marker) => marker.id === selectedMarkerId)
                ? selectedMarkerId
                : visibleMarkers[0]?.id ?? ""
            }
            onMarkerSelect={setSelectedMarkerId}
          />
        </div>
      </main>
      <BottomTabBar items={bottomTabs} activeItemId="explore" />
    </div>
  );
};

export default MapSearchScreen;
