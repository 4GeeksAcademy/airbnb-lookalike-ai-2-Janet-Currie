interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  value,
  onChange,
  placeholder = "Start your search",
}: SearchBarProps) => {
  return (
    <label className="flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-3 shadow-sm">
      <span aria-hidden className="text-zinc-500">
        🔍
      </span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-400"
      />
    </label>
  );
};

export default SearchBar;
