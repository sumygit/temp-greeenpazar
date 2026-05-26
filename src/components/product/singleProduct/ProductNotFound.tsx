import Link from "next/link";
import Container from "@/components/global/Container";
import { LuSearchX, LuArrowLeft, LuShoppingBag } from "react-icons/lu";

export default function ProductNotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <Container className="max-w-md w-full text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
        
        {/* Yuqoridagi vizual effektli yashil ikona bloki */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-emerald-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
          <div className="relative w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 text-emerald-600">
            <LuSearchX className="w-10 h-10 animate-bounce duration-1000" />
          </div>
        </div>

        {/* Katta xatolik kodi */}
        <span className="text-emerald-700 font-extrabold text-7xl tracking-tight mb-2">
          404
        </span>

        {/* Sarlavha */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
          Ürün Bulunamadı
        </h2>

        {/* Tavsif matni */}
        <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
       Maalesef aradığınız ürün mevcut değil, silinmiş veya hatalı bir bağlantı kullanılmış olabilir
        </p>

        {/* Tugmalar bo'limi (Yashil ranglar bilan uyg'unlashgan) */}
        <div className="w-full flex flex-col sm:flex-row gap-3 justify-center">
          
          {/* Bütün Ürünlere Dön tugmasi */}
          <Link
            href="/products"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-xl transition-all shadow-sm hover:shadow active:scale-98 text-sm cursor-pointer"
          >
            <LuShoppingBag className="w-4 h-4" />
            Bütün Ürünlere Dön
          </Link>

          {/* Ana Sayfa tugmasi */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-medium rounded-xl transition-all active:scale-98 text-sm cursor-pointer"
          >
            <LuArrowLeft className="w-4 h-4" />
            Ana Sayfa
          </Link>

        </div>

      </Container>
    </div>
  );
}