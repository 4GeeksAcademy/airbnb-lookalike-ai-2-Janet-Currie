interface ImageCounterProps {
  current: number;
  total: number;
}

const ImageCounter = ({ current, total }: ImageCounterProps) => {
  return (
    <span className="rounded-full bg-black/65 px-3 py-1 text-xs font-medium text-white">
      {current} / {total}
    </span>
  );
};

export default ImageCounter;
