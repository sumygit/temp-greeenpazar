// src/components/product/productCard/ProductSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="border rounded-md overflow-hidden flex flex-col h-full animate-pulse">
      {/* Rasm joyi uchun skeleton (h-72 o'lchamda) */}
      <div className="h-72  relative mb-3">
        <Skeleton className="w-full h-full rounded-none bg-gray-200" />
      </div>

      {/* Matnlar va tugma uchun skeleton */}
      <div className="px-2 pb-2 flex flex-col gap-2 grow">
        {/* Sarlavha (Nomi) uchun 2 qator chiziq */}
        <Skeleton className="h-3 w-5/6 rounded bg-gray-200" />
        <Skeleton className="h-3 w-2/3 rounded bg-gray-200" />

        {/* Narxi (120 TL) uchun chiziq */}
        <Skeleton className="h-4 w-1/3 rounded mt-1 bg-gray-200" />

        {/* "Sepete Ekle" tugmasi uchun skeleton */}
        <Skeleton className="h-9 w-full rounded-md mt-auto bg-gray-200" />
      </div>
    </div>
  );
}

// Bir nechta kartani birdaniga guruhlab ko'rsatish uchun ro'yxat skeletoni
export default function ProductListSkeleton() {
  // Grid tartibini aynan sizning ProducCardList bilan bir xil qilamiz (5 talik grid)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2">
      {Array.from({ length: 10 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}