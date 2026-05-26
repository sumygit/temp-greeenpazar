"use client"
import Link from "next/link";

function ProductItemButton({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href={"/"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        alert("Savatchaga qo'shildi!");
      }}
	  className="border border-brand-green text-brand-green w-full block text-center rounded-md py-1 hover:bg-brand-green hover:text-white transition-all duration-500 "
    >
      {children}
    </Link>
  );
}
export default ProductItemButton;
