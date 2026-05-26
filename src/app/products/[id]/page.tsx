import SingleProductContainer from "@/components/product/singleProduct/SingleProductContainer";
import { fetchSingleProduct } from "@/utils/actions"; // Bazadan bitta mahsulotni oladigan aksiya
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  
  const product = await fetchSingleProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div>
		
      <SingleProductContainer product={product} />
    </div>
  );
}

export default ProductPage;