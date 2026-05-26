import { Product } from "@/generated/prisma/client";
import ProductItemImagesSlide from "./ProductItemImagesSlide";
import ProductItemTitle from "./ProductItemTitle";
import Link from "next/link";
import ProductItemQuickview from "./ProductItemQuickview";
import ProductItemFavorite from "./ProductItemFavorite";
import ProductItemPrice from "./ProductItemPrice";
import ProductItemButton from "./ProductItemButton";
import ProductItemCompany from "./ProductItemCompany";

function ProductItem({ product }: { product: Product }) {
  return (
    <div className="border rounded-md overflow-hidden relative  ">
      <Link href={`/products/${product.id}`} className="group ">
        <ProductItemImagesSlide images={product.images} />
        <div className="absolute top-8 right-1  flex flex-col gap-1 ">
          <ProductItemQuickview product={product} />
          <ProductItemFavorite />
        </div>
      </Link>

      <div className="p-2">
        <ProductItemTitle>{product.description}</ProductItemTitle>
        <ProductItemPrice>{product.price} </ProductItemPrice>
        <ProductItemButton>Sepete Ekle</ProductItemButton>
      </div>
	    <ProductItemCompany title={product.company}>
        {product.company}
      </ProductItemCompany>
    </div>
  );
}
export default ProductItem;
