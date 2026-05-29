
"use client";

import { IoEyeSharp, IoClose } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { Product } from "@/generated/prisma/client";
import SingleProductLeftSide from "../singleProduct/SingleProductLeftSide";
import SingleProductRightSide from "../singleProduct/SingleProductRightSide";


function ProductItemQuickview({ product }: { product: Product }) {
  const base =
    "w-7 h-7 flex justify-center items-center rounded-full bg-[#F97316]/50 shadow cursor-pointer hover:bg-[#F97316]  box-shadow   opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-7  right-2 ";
  const combinedClasses = twMerge(base);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group/eye">
      <div
        className={combinedClasses}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(true);
        }}
      >
        <IoEyeSharp className="fill-amber-50 " />
      </div>
      <div className=" transition-opacity duration-500 opacity-0 group-hover/eye:opacity-100   w-25 bg-[#F97316]  rounded-md text-white text-[12px] py-1 flex justify-center absolute right-9 top-0 pointer-events-none ">
        Hızlı Bakış
        <span className="w-4 h-4 bg-[#F97316]  -right-0.5 top-1.25 rotate-45 absolute"></span>
      </div>

{/* 🚀 MODAL OYNA */}
      {isOpen && (
        <div
          className="fixed inset-0 z-100 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(false);
          }}
        >
          <div
            className="relative bg-white shadow-2xl rounded-xl w-[95%] max-w-5xl max-[760px]:h-[85vh] m-auto p-6 overflow-y-auto animate-in zoom-in-95 duration-200 "
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {/* 🚀 Yopish (X) tugmasi */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-50 p-1 hover:bg-gray-100 rounded-full max-[835px]:right-0 max-[835px]:top-1"
            >
              <IoClose size={24} />
            </button>

            {/* Grid qismi */}
            <div className="grid grid-cols-2 max-[835px]:grid-cols-1 gap-8  pt-4">
              {/* 🚀 src prop majburiy bo'lgani uchun qo'shildi */}
              <SingleProductLeftSide 
                images={product.images || []} 
              />
              <div className="overflow-y-auto h-full pr-2">
                <SingleProductRightSide product={product} />
              </div>
            </div>
          </div>
		  {/* Modal eng */}
        </div>
      )}
    </div>
  );
}
export default ProductItemQuickview;
