interface FavoriteButtonProps {
  isActive: boolean;
  onToggle: () => void;
}

const FavoriteButton = ({ isActive, onToggle }: FavoriteButtonProps) => {
  return (
    <button
      type="button"
      aria-label="Toggle favorite"
      onClick={onToggle}
      className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-lg shadow-sm transition hover:scale-105"
    >
      <span>{isActive ? "❤" : "♡"}</span>
    </button>
  );
};

export default FavoriteButton;
