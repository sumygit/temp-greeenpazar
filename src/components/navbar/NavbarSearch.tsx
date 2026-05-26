"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";
import { fetchAllProducts } from "@/utils/actions";
import Link from "next/link";

interface Product {
  id: string;
  description: string;
  price: number;
}

function NavbarSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const search = searchParams.get("search") || "";
  const [isOpen, setIsOpen] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams);
    if (value.trim()) {
      params.set("search", value);
      setIsOpen(true);
    } else {
      params.delete("search");
      setIsOpen(false);
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  useEffect(() => {
    const getDatalar = async () => {
      if (!search.trim()) {
        setProducts([]);
        return;
      }
      setLoading(true);
      try {
        const data = await fetchAllProducts({ search });
        setProducts(data);
      } catch (error) {
        console.error("Qidiruvda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    getDatalar();
  }, [search]);

  return (
    <div className="flex-1">
      <div className="relative w-full">
        <Input
          type="search"
          placeholder="Ürün ara..."
          defaultValue={search}
          onChange={(e) => {
            if (e.target.value.trim()) setIsOpen(true);
            handleSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsOpen(false); 
            }
          }}
          onFocus={() => search && setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="w-full bg-amber-50 focus:border-none focus-visible:ring-brand-orange "
        />
       

        {/* 🚀 DROPDOWN: `scrollbar-hide` klassini aynan shu yerga qo'shish kerak! */}
        <div
          className={`
            absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto p-4
            scrollbar-hide 
            transition-all duration-500 ease-in-out
            ${
              isOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }
          `}
        >
          {/* A holat: Yuklanayotgan paytda */}
          {loading && (
            <p className="text-sm text-gray-500 text-center py-2">
               Aranıyor...
            </p>
          )}

          {/* B holat: Yuklanish tugadi va mahsulotlar topildi */}
          {!loading && products.length > 0 && (
            // Ichki divlardan ortiqcha scrollbar-hide klasslarini tozalab tashladik
            <div className="flex flex-col gap-2">
              {products.slice(0, 10).map((product) => (
                <Link
                  href={`/products/${product.id}`}
                  key={product.id}
                  className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border-b last:border-none flex justify-between items-center"
                >
                  <p className="text-sm font-medium text-gray-800 truncate w-50">
                    {product.description}
                  </p>
                  <p className="text-xs text-brand-orange font-semibold whitespace-nowrap">
                    {product.price} TL
                  </p>
                </Link>
              ))}
            </div>
          )}

          {/* C holat: Qidiruv yakunlandi lekin hech narsa topilmadi */}
          {!loading && search && products.length === 0 && (
            
              <div className="text-sm text-gray-500 py-2 text-center">
                 Maalesef, aradığınız ürün bulunamadı.
            </div>
            
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarSearch;
