"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";

type SortOptions = {
  value: string;
  label: string;
  showInfoIcon?: boolean;
};
const sortOptions: SortOptions[] = [
  { value: "suggested", label: "Önerilen Sıralama", showInfoIcon: true },
  { value: "price_asc", label: "En Düşük Fiyat" },
  { value: "price_desc", label: "En Yüksek Fiyat" },
  { value: "newest", label: "En Yeniler" },
  { value: "best_seller", label: "En Çok Satan" },
  { value: "favorites", label: "En Favoriler" },
  { value: "top_rated", label: "En Çok Değerlendirilen" },
];
const defaultSortValue = "suggested";

function ProductsSortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const activeSortValue = searchParams.get("sort") ?? defaultSortValue;
  const activeSelectValue =
    sortOptions.find((option) => option.value ===activeSortValue) ?? sortOptions[0];

  const handleSelectValue = (value: string) => {
    console.log(value);
    const params = new URLSearchParams(searchParams.toString());
    if (!value || value === "suggested") {
    
	    params.delete("sort");
    } else {
       params.set("sort", value);
    }
    replace(`${pathname}?${params.toString()}`);
    setIsOpen(false);
  };

  return (
    <div
      className=" w-50 border rounded-md  border-brand-green hover:bg-brand-green cursor-pointer group  transition-all duration-300 relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className=" py-1 px-3 inset-y-0 right-3  items-center pointer-events-none text-gray-500  flex justify-between group ">
        <div className="text-[13px] text-brand-green group-hover:text-white transition-all duration-300">
          {activeSelectValue.label}
        </div>
        <LuArrowUpDown className="w-4 h-4 text-brand-green group-hover:text-white transition-all duration-300" />
      </div>
      {isOpen && (
        <ul className="absolute bg-white w-full z-100 animate-in fade-in slide-out-to-top-1 duration-500 grid gap-0 border rounded-md">
          {sortOptions.map((option) => (
            <li
              key={option.value}
              className="hover:bg-gray-100"
              onClick={() => handleSelectValue(option.value)}
            >
              <span className="block text-[13px]  py-1.5 px-3">
                {option.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default ProductsSortDropdown;
