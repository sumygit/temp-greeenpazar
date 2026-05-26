import ProductItem from "./productItem/ProductItem";
import { fetchAllProducts } from "@/utils/actions";

interface ProductsListProps {
  search?: string;
  sort?: string;
}

async function ProductsList({ search , sort}: ProductsListProps) {
  const products = await fetchAllProducts({ search , sort});
  if (products.length === 0) {
    return <div className="text-center py-10">Mahsulotlar topilmadi 😕</div>;
  }

  return (
    <>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5  gap-2 ">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
export default ProductsList;
