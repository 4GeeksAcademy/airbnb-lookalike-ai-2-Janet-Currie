interface ReserveButtonProps {
  onReserve: () => void;
}

const ReserveButton = ({ onReserve }: ReserveButtonProps) => {
  return (
    <button
      type="button"
      onClick={onReserve}
      className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 px-4 py-3 text-base font-semibold text-white shadow-md"
    >
      Reserve
    </button>
  );
};

export default ReserveButton;
