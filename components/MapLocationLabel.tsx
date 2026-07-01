interface MapLocationLabelProps {
  label: string;
}

const MapLocationLabel = ({ label }: MapLocationLabelProps) => {
  return (
    <div className="absolute left-4 top-4 z-[400] rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-700 shadow">
      📍 {label}
    </div>
  );
};

export default MapLocationLabel;
