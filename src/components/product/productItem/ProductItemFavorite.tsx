

'use client'
import { MdFavoriteBorder } from "react-icons/md";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

<MdFavoriteBorder />


function ProductItemFavorite({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>)  {
	const base  = 'w-7 h-7 flex justify-center items-center rounded-full bg-[#F97316]/50 shadow cursor-pointer hover:bg-[#F97316]  box-shadow   opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-15  right-2'
	const combinedClasses =twMerge(base, className)
	return (
		<div className="group/favorite"   onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  alert("Favoritega qo'shildi!");
                }}>
			<div className={combinedClasses}{...props} >
				<MdFavoriteBorder  className="fill-amber-50  "/>
				
			</div>
			<div className=" transition-opacity duration-500 opacity-0 group-hover/favorite:opacity-100   w-25 bg-[#F97316] rounded-md text-white text-[12px] py-1 flex justify-center absolute right-9 top-8 z-100 pointer-events-none " >
					Favoriye Ekle
					<span className="w-4 h-4 bg-[#F97316] -right-0.5 top-1 rotate-45 absolute -z-10"></span>
				</div>
		</div>
	)
}
export default ProductItemFavorite