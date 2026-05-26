"use client";

import Image from "next/image";
import { useRef, } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface SlideImagesProps {
  images: string[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

function SingleProductSlideImages({ images, activeIndex, setActiveIndex }: SlideImagesProps) {

  const thumbnailsRef = useRef<HTMLUListElement>(null);

  // 🚀 Yon tomonga surish funksiyasi
  const scrollThumbnails = (direction: "left" | "right") => {
    const el = thumbnailsRef.current;
    if (!el) return;

    const step = direction === "left" ? -200 : 200;

    el.scrollTo({ left: el.scrollLeft + step, behavior: "smooth" });
  };


  return (
    <div className=" ">
      <div className="relative w-full flex items-center group">
        {/* ⬅️ Chapga surish tugmasi */}
        <button
          onClick={() => scrollThumbnails("left")}
          className="absolute left-1 z-10 bg-white/50 hover:bg-gray-50 text-gray-800 p-1 rounded-full shadow-lg transition-all hover:scale-110 active:scale-75 cursor-pointer opacity-0 group-hover:opacity-100  max-[770px]:group-hover:opacity-0"
          aria-label="Previous slide"
        >
          <LuChevronLeft className="w-5 h-5" />
        </button>
        <ul
          ref={thumbnailsRef}
          className="w-full flex items-center gap-1 overflow-x-auto pb-2 no-scrollbar scroll-smooth justify-center  p-1"
          style={{ scrollbarWidth: "none" }} // Firefox uchun scrollbar-ni yashirish
        >
          {images.map((image, index) => (
            <li
              key={index}
              className={`relative h-24 w-19  rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-white
                ${
                  index === activeIndex
                    ? "border-emerald-600 shadow-md scale-102 ring-2 ring-emerald-500/20"
                    : "border-gray-200 hover:border-gray-400"
                }`}
            >
              {" "}
              <Image
                src={images[index]} 
                alt="Product Main Image"
                fill
                priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top  transition-all duration-300"
                onMouseEnter={() => setActiveIndex(index)}
              />
            </li>
          ))}
        </ul>
        {/* ➡️ O'ngga surish tugmasi */}
        <button
          onClick={() => scrollThumbnails("right")}
          className="absolute right-1 z-100 bg-white/50 hover:bg-gray-50 text-gray-800 p-1 rounded-full shadow-lg  transition-all hover:scale-110 active:scale-75 cursor-pointer opacity-0 group-hover:opacity-100 max-[770px]:group-hover:opacity-0"
          aria-label="Next slide"
        >
          <LuChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
export default SingleProductSlideImages;
