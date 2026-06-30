# Context

## Project Brief

We are rebuilding the front end of a vacation rental platform.

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

Planned component areas:

- Global header / navigation
- Search filters and sort controls
- Active filters summary
- Results grid/list of listing cards
- Map panel (optional split-view)
- Pagination or infinite scroll
- Footer

## Room Detail Page

Planned component areas:

- Listing title and quick metadata
- Media gallery (hero + thumbnails)
- Host and property highlights
- Amenities list
- Availability and booking card
- Reviews summary and review list
- Location section with map
- House rules / policies
- Footer


