"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ZoomImageProps {
  src: string;
}

function SinglePriductZoomImage({ src }: ZoomImageProps) {
  const [position, setPosition] = useState("center");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition(`${x}% ${y}%`);
  };

  return (
    <div
      className="w-full h-120 max-[830px]:h-150 overflow-hidden cursor-zoom-in relative min-h-100 mb-5 min-[970px]:h-150"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition("center")}
    >
      <Image
        src={src}
        alt="Product Zoom"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center transition-transform duration-200 ease-out hover:scale-[3.5] "
        style={{ transformOrigin: position }}
      />
    </div>
  );
}
export default SinglePriductZoomImage;
