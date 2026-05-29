
"use client";
import Image from "next/image";
import { useState, type MouseEvent } from "react";

function ProductItemImagesSlide({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const index = Math.floor((x / width) * images.length);
    setCurrent(Math.min(index, images.length - 1));
  };

  const handleMouseLeave = () => setCurrent(0);

  return (
    <div
      className="relative cursor-pointer h-72 rounded-t-md overflow-hidden  "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Rasm */}
      {images[current] && (
      <Image
        src={images[current]}
        alt="Product"
        fill
        priority
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
        className="w-full h-full object-cover transition-all duration-200 hover:scale-102"

      />)}

      {/* Pastdagi nuqtalar */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 ">
        {images.map((_, i) => (
          <span
            key={i}
            className={`block h-1.5 rounded-full transition-all duration-200 ${
              i === current ? "w-4 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductItemImagesSlide;
