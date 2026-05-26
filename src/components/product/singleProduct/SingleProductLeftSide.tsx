"use client";
import { useState } from "react";
import SinglePriductZoomImage from "./SinglePriductZoomImage";
import SingleProductSlideImages from "./SingleProductSlideImages";

function SingleProductLeftSide({
  images,
}: {
  images: string[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className=" border  mb-3 relative w-full  rounded-md overflow-hidden">
      <SinglePriductZoomImage src={images[activeIndex]} />
      <SingleProductSlideImages
        images={images}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}
export default SingleProductLeftSide;
