export interface CategoryTab {
  id: string;
  label: string;
  icon: string;
}

export interface BottomTabItem {
  id: string;
  label: string;
  icon: string;
  href: string;
}

export interface Listing {
  id: string;
  imageUrl: string;
  title: string;
  location: string;
  category: "homes" | "hotel" | "experience";
  priceLabel: string;
  nightlyPrice: number;
  rating: number;
  badge?: string;
}

export interface ListingSpecs {
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
}

export interface PricingSummaryData {
  totalPrice: string;
  nights: number;
  dateRange: string;
  dueTodayLabel: string;
  cancellationText: string;
  cancellationDate: string;
}

export interface RoomDetail {
  id: string;
  title: string;
  location: string;
  images: string[];
  specs: ListingSpecs;
  pricing: PricingSummaryData;
}

export interface PriceMarkerData {
  id: string;
  priceLabel: string;
  lat: number;
  lng: number;
}
