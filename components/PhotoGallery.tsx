import Image from "next/image";

import ImageCounter from "./ImageCounter";

interface PhotoGalleryProps {
  images: string[];
  currentIndex: number;
  onChange: (nextIndex: number) => void;
}

const PhotoGallery = ({ images, currentIndex, onChange }: PhotoGalleryProps) => {
  const total = images.length;

  const goPrevious = () => onChange((currentIndex - 1 + total) % total);
  const goNext = () => onChange((currentIndex + 1) % total);

  return (
    <section className="relative">
      <Image
        src={images[currentIndex]}
        alt="Room photo"
        width={1200}
        height={800}
        className="h-[340px] w-full rounded-b-3xl object-cover sm:h-[420px]"
      />
      <div className="absolute bottom-4 right-4">
        <ImageCounter current={currentIndex + 1} total={total} />
      </div>
      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-3">
        <button
          type="button"
          onClick={goPrevious}
          className="rounded-full bg-white/85 px-3 py-2 text-sm font-semibold text-zinc-800"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={goNext}
          className="rounded-full bg-white/85 px-3 py-2 text-sm font-semibold text-zinc-800"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default PhotoGallery;
