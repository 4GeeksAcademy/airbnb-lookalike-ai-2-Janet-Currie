# Context

## Project Brief

We are rebuilding the front end of a vacation rental platform.  The app should be mobile first and designed for the front end user looking to easily book a vacation rental anywhere in the world right from their phone.  

The implementation target is three Airbnb-style views in Next.js using React components:

1. Home page
2. Catalog (search results) page
3. Room detail page

## Home Page

## 1. `SearchBar`

The pill-shaped search input at the top with a magnifying glass icon and "Start your search" placeholder.

```typescript
interface SearchBarProps {
  placeholder?: string;          // "Start your search"
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onSubmit?: (query: string) => void;
}
```

## 2. `CategoryTabs`

The horizontally scrollable row of category pills ("All", "Homes", "Experiences", and a partially cut-off "Services").

```typescript
interface CategoryTab {
  id: string;
  label: string;                 // "All", "Homes", "Experiences"
  icon: string;                  // icon/emoji asset url or key
}

interface CategoryTabsProps {
  tabs: CategoryTab[];
  activeTabId: string;
  onTabChange: (id: string) => void;
}
```

## 3. `SectionHeader`

The titled header row, optionally with a subtitle and a circular arrow "see all" button. Used by both "Popular homes in Nashville" and "Great hotels for your next trip".

```typescript
interface SectionHeaderProps {
  title: string;                 // "Popular homes in Nashville"
  subtitle?: string;             // "Plus, get Airbnb credit when you stay..."
  showAction?: boolean;          // renders the circular arrow button
  onActionPress?: () => void;
}
```

## 4. `ListingCard`

The individual property card: image, optional badge, favorite (heart) toggle, title, price, and rating.

```typescript
interface ListingCardProps {
  id: string;
  imageUrl: string;
  title: string;                 // "Hotel in Midtown"
  priceLabel: string;            // "$268 for 2 nights"
  rating?: number;               // 4.82
  badge?: string;                // "Guest favorite"
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onPress: (id: string) => void;
}
```

### 4a. `Badge`(sub-component)

The "Guest favorite" pill overlaid on the image top-left.

```typescript
interface BadgeProps {
  label: string;                 // "Guest favorite"
  variant?: "default" | "light";
}
```

### 4b. `FavoriteButton`(sub-component)

The heart icon overlaid on the image top-right.

```typescript
interface FavoriteButtonProps {
  isActive: boolean;
  onToggle: () => void;
  size?: number;
}
```

## 5. `ListingCarousel`

The horizontally scrolling row of `ListingCard`s (note the partially visible third card on the right edge).

```typescript
interface ListingCarouselProps {
  listings: ListingCardProps[];
  onToggleFavorite: (id: string) => void;
  onListingPress: (id: string) => void;
}
```

## 6. `InfoToast`/ `FloatingPill`

The floating white pill near the bottom with a tag icon and "Prices include all fees".

```typescript
interface InfoToastProps {
  icon?: string;                 // tag/price-tag asset
  message: string;               // "Prices include all fees"
  visible?: boolean;
  onDismiss?: () => void;
}
```

## 7. `BottomTabBar`

The fixed bottom navigation with "Explore", "Wishlists", and "Log in" items.

```typescript
interface BottomTabItem {
  id: string;
  label: string;                 // "Explore", "Wishlists", "Log in"
  icon: string;
}

interface BottomTabBarProps {
  items: BottomTabItem[];
  activeItemId: string;          // "explore"
  onItemPress: (id: string) => void;
}
```

## 8. `HomeScreen`(container)

The top-level screen that composes everything above.

```typescript
interface HomeSection {
  id: string;
  title: string;
  subtitle?: string;
  listings: ListingCardProps[];
}

interface HomeScreenProps {
  searchPlaceholder: string;
  categories: CategoryTab[];
  activeCategoryId: string;
  sections: HomeSection[];
  tabs: BottomTabItem[];
  activeTabId: string;
}
```

---

**Summary:** The screen breaks down into 8 core components — `SearchBar`, `CategoryTabs`, `SectionHeader`, `ListingCard` (with `Badge` and `FavoriteButton` sub-components), `ListingCarousel`, `InfoToast`, and `BottomTabBar` — all composed inside a `HomeScreen` container. The most reused piece is `ListingCard`, which appears in every carousel. Let me know if you'd like me to extract shared types (e.g., a base `Listing` model) or add styling/variant props.

## Catalog (Search Results) Page

## 1. `SearchSummaryBar`

The top bar containing a back arrow, the central pill showing the current search context (location, dates, guests), and the filter button.

```typescript
interface SearchSummaryBarProps {
  location: string;              // "Homes in paris"
  dateRange: string;             // "Nov 9 – 13"
  guestCount: number;            // 4
  onBack: () => void;
  onSearchPress: () => void;     // tapping the central pill re-opens search
  onFilterPress: () => void;
  activeFilterCount?: number;    // the "1" badge on the filter button
}
```

### 1a. `FilterButton`(sub-component)

The circular sliders/tune icon with a count badge.

```typescript
interface FilterButtonProps {
  activeCount?: number;          // renders badge when > 0
  onPress: () => void;
}
```

## 2. `CategoryFilterPills`

The row of selectable filter pills ("Any", "Home", "Hotel"), where the active pill has a dark outline.

```typescript
interface CategoryFilterPill {
  id: string;
  label: string;                 // "Any", "Home", "Hotel"
}

interface CategoryFilterPillsProps {
  pills: CategoryFilterPill[];
  activePillId: string;          // "any"
  onPillChange: (id: string) => void;
}
```

## 3. `MapView`

The interactive map surface rendering the geography, labels, and price markers.

```typescript
interface MapRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface MapViewProps {
  region: MapRegion;
  markers: PriceMarkerProps[];
  onRegionChange?: (region: MapRegion) => void;
  onMarkerPress: (id: string) => void;
}
```

### 3a. `PriceMarker`(sub-component)

Each pill-shaped price bubble on the map (e.g. "$1,875", "$916", "$895").

```typescript
interface PriceMarkerProps {
  id: string;
  priceLabel: string;            // "$1,875"
  latitude: number;
  longitude: number;
  isSelected?: boolean;          // selected/expanded marker state
  onPress: (id: string) => void;
}
```

### 3b. `MapLocationLabel`(sub-component)

The location pin + label callout on the map (e.g. the "Paris" pin bubble).

```typescript
interface MapLocationLabelProps {
  label: string;                 // "Paris"
  showPinIcon?: boolean;
}
```

## 4. `InfoToast`/ `FloatingPill`

The "Prices include all fees" pill with the tag icon, sitting on the bottom sheet header.

```typescript
interface InfoToastProps {
  icon?: string;                 // price-tag asset
  message: string;               // "Prices include all fees"
  visible?: boolean;
}
```

## 5. `BottomSheet`

The draggable sheet overlaying the bottom of the map, with a drag handle. It contains the info toast and the listing cards.

```typescript
interface BottomSheetProps {
  snapPoints: (string | number)[];   // e.g. ["25%", "90%"]
  initialSnapIndex?: number;
  showDragHandle?: boolean;
  children: React.ReactNode;
}
```

## 6. `ListingCard`

The property card in the sheet: large image, "Guest favorite" badge, favorite toggle, and (typically) details below.

```typescript
interface ListingCardProps {
  id: string;
  imageUrl: string;
  title?: string;
  priceLabel?: string;
  rating?: number;
  badge?: string;                // "Guest favorite"
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onPress: (id: string) => void;
}
```

### 6a. `Badge`(sub-component)

The "Guest favorite" pill overlaid top-left on the image.

```typescript
interface BadgeProps {
  label: string;                 // "Guest favorite"
  variant?: "default" | "light";
}
```

### 6b. `FavoriteButton`(sub-component)

The heart icon overlaid top-right on the image.

```typescript
interface FavoriteButtonProps {
  isActive: boolean;
  onToggle: () => void;
  size?: number;
}
```

## 7. `BottomTabBar`

The fixed bottom navigation ("Explore", "Wishlists", "Log in"), partially covered by the sheet.

```typescript
interface BottomTabItem {
  id: string;
  label: string;                 // "Explore", "Wishlists", "Log in"
  icon: string;
}

interface BottomTabBarProps {
  items: BottomTabItem[];
  activeItemId: string;          // "explore"
  onItemPress: (id: string) => void;
}
```

## 8. `MapSearchScreen`(container)

The top-level screen composing everything above.

```typescript
interface MapSearchScreenProps {
  searchSummary: SearchSummaryBarProps;
  categoryPills: CategoryFilterPill[];
  activeCategoryId: string;
  region: MapRegion;
  markers: PriceMarkerProps[];
  listings: ListingCardProps[];
  tabs: BottomTabItem[];
  activeTabId: string;
}
```

---

**Summary:** This map view breaks down into 8 core components — `SearchSummaryBar` (with `FilterButton`), `CategoryFilterPills`, `MapView` (with `PriceMarker` and `MapLocationLabel` sub-components), `InfoToast`, `BottomSheet`, `ListingCard` (with `Badge` and `FavoriteButton`), and `BottomTabBar` — composed inside a `MapSearchScreen` container. Note that `ListingCard`, `Badge`, `FavoriteButton`, `InfoToast`, and `BottomTabBar` are shared with the previous home-feed screen, while `MapView`, `PriceMarker`, `SearchSummaryBar`, and `BottomSheet` are unique to this results view. Let me know if you'd like me to consolidate the shared types into a single reusable module.


## Room Detail Page

## 1. `PhotoGallery`

The large full-bleed image carousel at the top, with a position counter overlay.

```typescript
interface PhotoGalleryProps {
  images: string[];              // ordered image urls
  currentIndex: number;          // 0-based, drives the counter
  onIndexChange: (index: number) => void;
  onImagePress?: (index: number) => void;   // open fullscreen viewer
}
```

### 1a. `ImageCounter`(sub-component)

The dark rounded "1 / 20" badge overlaid on the bottom-right of the gallery.

```typescript
interface ImageCounterProps {
  current: number;               // 1 (display value, 1-based)
  total: number;                 // 20
}
```

## 2. `ListingDetailCard`

The rounded white sheet that overlaps the gallery and holds the title, specs, price, and CTA.

```typescript
interface ListingDetailCardProps {
  title: string;                 // "Contemporary Flat by Champs Elysées & Parc Monceau"
  specs: ListingSpecs;
  pricing: PricingSummaryProps;
  onReserve: () => void;
  children?: React.ReactNode;
}
```

## 3. `ListingTitle`

The large multi-line heading for the property name.

```typescript
interface ListingTitleProps {
  title: string;                 // "Contemporary Flat by Champs Elysées & Parc Monceau"
  numberOfLines?: number;
}
```

## 4. `InfoToast`/ `FloatingPill`

The "Prices include all fees" pill with a tag icon (shared with the other screens).

```typescript
interface InfoToastProps {
  icon?: string;                 // price-tag asset
  message: string;               // "Prices include all fees"
  visible?: boolean;
}
```

## 5. `ListingSpecsRow`

The single line summarizing capacity ("6 guests · 2 bedrooms · 3 beds · 1.5 baths").

```typescript
interface ListingSpecs {
  guests: number;                // 6
  bedrooms: number;              // 2
  beds: number;                  // 3
  baths: number;                 // 1.5
}

interface ListingSpecsRowProps {
  specs: ListingSpecs;
  separator?: string;            // "·"
}
```

## 6. `PricingSummary`

The price block: total price, the nights/date range, and the cancellation note.

```typescript
interface PricingSummaryProps {
  totalPrice: string;            // "$1,872"
  nights: number;                // 4
  dateRange: string;             // "Nov 9 – 13"
  dueTodayLabel: string;         // "$0 today"
  cancellationText: string;      // "Free cancellation before"
  cancellationDate: string;      // "November 4" (bold portion)
}
```

### 6a. `CancellationBadge`(sub-component)

The gray rounded pill containing the "$0 today · Free cancellation before November 4" text.

```typescript
interface CancellationBadgeProps {
  dueTodayLabel: string;         // "$0 today"
  cancellationText: string;      // "Free cancellation before November 4"
  highlightDate?: string;        // "November 4" rendered bold
}
```

## 7. `ReserveButton`

The large gradient primary CTA at the bottom.

```typescript
interface ReserveButtonProps {
  label?: string;                // "Reserve"
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}
```

## 8. `ListingDetailScreen`(container)

The top-level screen composing everything above.

```typescript
interface ListingDetailScreenProps {
  images: string[];
  currentImageIndex: number;
  title: string;
  specs: ListingSpecs;
  pricing: PricingSummaryProps;
  onReserve: () => void;
  onImageIndexChange: (index: number) => void;
}
```

---

**Summary:** This detail view breaks down into 8 core components — `PhotoGallery` (with `ImageCounter`), `ListingDetailCard`, `ListingTitle`, `InfoToast`, `ListingSpecsRow`, `PricingSummary` (with `CancellationBadge`), and `ReserveButton` — composed inside a `ListingDetailScreen` container. `InfoToast` is the one component shared across all three screens you've sent, while `PhotoGallery`, `PricingSummary`, and `ReserveButton` are unique to this booking view. If you'd like, I can consolidate the recurring types (`ListingSpecs`, `InfoToastProps`, etc.) into a single shared types module so the three screens stay consistent.


