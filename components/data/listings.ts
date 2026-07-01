import type { BottomTabItem, CategoryTab, Listing, PriceMarkerData } from "../types";

export const homeCategories: CategoryTab[] = [
  { id: "all", label: "All", icon: "🌎" },
  { id: "homes", label: "Homes", icon: "🏡" },
  { id: "experience", label: "Experiences", icon: "🎒" },
  { id: "hotel", label: "Hotels", icon: "🏨" },
];

export const bottomTabs: BottomTabItem[] = [
  { id: "explore", label: "Explore", icon: "🧭", href: "/" },
  { id: "wishlists", label: "Wishlists", icon: "❤", href: "/catalog" },
  { id: "login", label: "Log in", icon: "👤", href: "/catalog" },
];

export const listings: Listing[] = [
  {
    id: "nash-loft",
    imageUrl: "https://picsum.photos/seed/nash-loft/800/600",
    title: "Loft in Nashville",
    location: "Nashville, TN",
    category: "homes",
    priceLabel: "$189 night",
    nightlyPrice: 189,
    rating: 4.92,
    badge: "Guest favorite",
  },
  {
    id: "paris-flat",
    imageUrl: "https://picsum.photos/seed/paris-flat/800/600",
    title: "Flat near Monceau",
    location: "Paris, France",
    category: "homes",
    priceLabel: "$268 night",
    nightlyPrice: 268,
    rating: 4.82,
    badge: "Guest favorite",
  },
  {
    id: "tokyo-hotel",
    imageUrl: "https://picsum.photos/seed/tokyo-hotel/800/600",
    title: "Hotel in Midtown",
    location: "Tokyo, Japan",
    category: "hotel",
    priceLabel: "$154 night",
    nightlyPrice: 154,
    rating: 4.75,
  },
  {
    id: "rome-stay",
    imageUrl: "https://picsum.photos/seed/rome-stay/800/600",
    title: "Historic stay by Trevi",
    location: "Rome, Italy",
    category: "homes",
    priceLabel: "$212 night",
    nightlyPrice: 212,
    rating: 4.88,
  },
  {
    id: "sydney-view",
    imageUrl: "https://picsum.photos/seed/sydney-view/800/600",
    title: "Harbor view suite",
    location: "Sydney, Australia",
    category: "hotel",
    priceLabel: "$236 night",
    nightlyPrice: 236,
    rating: 4.8,
  },
  {
    id: "reykjavik-tour",
    imageUrl: "https://picsum.photos/seed/reykjavik-tour/800/600",
    title: "Northern lights cabin",
    location: "Reykjavik, Iceland",
    category: "experience",
    priceLabel: "$198 night",
    nightlyPrice: 198,
    rating: 4.95,
    badge: "Popular",
  },
];

export const mapMarkers: PriceMarkerData[] = [
  { id: "paris-flat", priceLabel: "$268", lat: 48.882, lng: 2.31 },
  { id: "rome-stay", priceLabel: "$212", lat: 48.868, lng: 2.344 },
  { id: "tokyo-hotel", priceLabel: "$154", lat: 48.861, lng: 2.291 },
  { id: "sydney-view", priceLabel: "$236", lat: 48.854, lng: 2.366 },
  { id: "nash-loft", priceLabel: "$189", lat: 48.847, lng: 2.328 },
];
