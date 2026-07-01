interface InfoToastProps {
  message: string;
  visible?: boolean;
}

const InfoToast = ({ message, visible = true }: InfoToastProps) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg">
      <span aria-hidden>🏷</span>
      <span>{message}</span>
    </div>
  );
};

export default InfoToast;
