"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import BottomTabBar from "./BottomTabBar";
import CategoryTabs from "./CategoryTabs";
import EmptyState from "./EmptyState";
import InfoToast from "./InfoToast";
import ListingCarousel from "./ListingCarousel";
import LoadingState from "./LoadingState";
import SearchBar from "./SearchBar";
import SectionHeader from "./SectionHeader";
import { bottomTabs, homeCategories, listings } from "./data/listings";
import { ROUTES } from "./routes";
import type { Listing } from "./types";

const HomeScreen = () => {
  const [query, setQuery] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [loadedListings, setLoadedListings] = useState<Listing[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadedListings(listings);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredListings = useMemo(() => {
    return loadedListings.filter((listing) => {
      const categoryMatch =
        activeCategoryId === "all" || listing.category === activeCategoryId;
      const searchMatch = `${listing.title} ${listing.location}`
        .toLowerCase()
        .includes(query.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [activeCategoryId, loadedListings, query]);

  const hotelListings = useMemo(() => {
    return filteredListings.filter((listing) => listing.category === "hotel");
  }, [filteredListings]);

  const toggleFavorite = (id: string) => {
    setFavorites((current) => ({ ...current, [id]: !current[id] }));
  };

  return (
    <div className="min-h-screen bg-zinc-50 pb-24">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6">
        <SearchBar value={query} onChange={setQuery} />
        <CategoryTabs
          tabs={homeCategories}
          activeTabId={activeCategoryId}
          onTabChange={setActiveCategoryId}
        />
        <div className="flex items-center justify-between">
          <SectionHeader
            title="Popular homes in Nashville"
            subtitle="Plus, get Airbnb credit when you stay"
          />
          <Link href={ROUTES.catalog} className="text-sm font-semibold text-rose-600">
            View all
          </Link>
        </div>
        {loading ? (
          <LoadingState label="Loading listings..." />
        ) : filteredListings.length === 0 ? (
          <EmptyState
            title="No stays match your search"
            description="Try another category or clear your search text."
          />
        ) : (
          <>
            <ListingCarousel
              key={`primary-${activeCategoryId}-${query}`}
              listings={filteredListings}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
            {hotelListings.length > 0 ? (
              <>
                <SectionHeader title="Great hotels for your next trip" />
                <ListingCarousel
                  key={`hotel-${activeCategoryId}-${query}`}
                  listings={hotelListings}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              </>
            ) : null}
          </>
        )}
        <div className="sticky bottom-20 mt-4 flex justify-center">
          <InfoToast message="Prices include all fees" />
        </div>
      </main>
      <BottomTabBar items={bottomTabs} activeItemId="explore" />
    </div>
  );
};

export default HomeScreen;
