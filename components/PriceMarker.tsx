import { Marker, Tooltip } from "react-leaflet";
import { divIcon } from "leaflet";

import type { PriceMarkerData } from "./types";

interface PriceMarkerProps {
  marker: PriceMarkerData;
  selected: boolean;
  onClick: (id: string) => void;
}

const PriceMarker = ({ marker, selected, onClick }: PriceMarkerProps) => {
  const markerIcon = divIcon({
    html: `<div class=\"price-marker ${selected ? "active" : ""}\">${marker.priceLabel}</div>`,
    className: "",
    iconSize: [76, 34],
    iconAnchor: [38, 17],
  });

  return (
    <Marker
      position={[marker.lat, marker.lng]}
      icon={markerIcon}
      eventHandlers={{ click: () => onClick(marker.id) }}
    >
      <Tooltip>{marker.priceLabel}</Tooltip>
    </Marker>
  );
};

export default PriceMarker;
