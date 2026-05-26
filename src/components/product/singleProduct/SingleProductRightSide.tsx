
import { Product } from "@/generated/prisma/browser";


function SingleProductRightSide({product}:{product:Product}) {
  return (
    <div className="flex flex-col ">
      <h1 className="text-3xl font-bold text-gray-900 mb-2 capitalize">
        {product.name}
      </h1>
      <p className="text-[11px] text-gray-500 mb-4">
        Company:{" "}
        <span className="text-brand-orange font-bold ">{product.company}</span>
      </p>

      <p className="text-2xl text-orange-600 font-bold mb-6 ">
        {product.price} TL
      </p>

      <div className="border-t pt-4 mb-30 ">
        <h3 className="font-semibold text-gray-800 mb-2 ">Ürün Açıklaması</h3>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>

      <div className="flex gap-3 justify-between ">
        <button className="  mt-auto px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl transition-colors shadow-md w-full">
          Sepete Ekle
        </button>
        <button className="  mt-auto px-8 py-3 bg-brand-orange hover:bg-brand-orange/80 text-white font-semibold rounded-xl transition-colors shadow-md w-full">
          Satin Al
        </button>
      </div>
    </div>
  );
}
export default SingleProductRightSide;
