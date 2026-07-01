"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import InfoToast from "./InfoToast";
import ListingDetailCard from "./ListingDetailCard";
import ListingSpecsRow from "./ListingSpecsRow";
import ListingTitle from "./ListingTitle";
import LoadingState from "./LoadingState";
import PhotoGallery from "./PhotoGallery";
import PricingSummary from "./PricingSummary";
import ReserveButton from "./ReserveButton";
import { roomsById } from "./data/rooms";
import { ROUTES } from "./routes";

interface ListingDetailScreenProps {
  roomId: string;
}

const ListingDetailScreen = ({ roomId }: ListingDetailScreenProps) => {
  const [loading, setLoading] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [roomId]);

  const room = useMemo(() => roomsById[roomId], [roomId]);

  if (loading) {
    return (
      <main className="mx-auto mt-10 w-full max-w-4xl px-4">
        <LoadingState label="Loading room details..." />
      </main>
    );
  }

  if (!room) {
    return (
      <main className="mx-auto mt-10 w-full max-w-4xl px-4 text-center">
        <p className="text-zinc-600">Room not found.</p>
        <Link href={ROUTES.catalog} className="mt-4 inline-block text-sm font-semibold text-rose-600">
          Back to catalog
        </Link>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 pb-10">
      <PhotoGallery images={room.images} currentIndex={photoIndex} onChange={setPhotoIndex} />
      <ListingDetailCard>
        <Link href={ROUTES.catalog} className="mb-4 inline-block text-sm font-semibold text-rose-600">
          ← Back to catalog
        </Link>
        <div className="space-y-4">
          <ListingTitle title={room.title} />
          <p className="text-sm text-zinc-500">{room.location}</p>
          <ListingSpecsRow specs={room.specs} />
          <InfoToast message="Prices include all fees" />
          <PricingSummary pricing={room.pricing} />
          <ReserveButton onReserve={() => {}} />
        </div>
      </ListingDetailCard>
    </div>
  );
};

export default ListingDetailScreen;
