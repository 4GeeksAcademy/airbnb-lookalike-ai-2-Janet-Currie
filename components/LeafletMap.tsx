"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import { useState } from "react";

import MapLocationLabel from "./MapLocationLabel";
import PriceMarker from "./PriceMarker";
import type { PriceMarkerData } from "./types";

interface LeafletMapProps {
  markers: PriceMarkerData[];
  selectedId: string;
  onMarkerSelect: (id: string) => void;
}

const LeafletMap = ({ markers, selectedId, onMarkerSelect }: LeafletMapProps) => {
  const [tileError, setTileError] = useState(false);

  if (tileError) {
    return (
      <div className="grid h-[360px] place-items-center rounded-3xl bg-zinc-200 text-sm text-zinc-700">
        Map tiles unavailable. Browse list results instead.
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl">
      <MapLocationLabel label="Paris" />
      <MapContainer
        center={[48.8667, 2.3333]}
        zoom={13}
        scrollWheelZoom
        className="h-[360px] w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          eventHandlers={{ tileerror: () => setTileError(true) }}
        />
        {markers.map((marker) => (
          <PriceMarker
            key={marker.id}
            marker={marker}
            selected={marker.id === selectedId}
            onClick={onMarkerSelect}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
