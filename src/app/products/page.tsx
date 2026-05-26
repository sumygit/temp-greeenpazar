import Container from "@/components/global/Container";
import SectionTitle from "@/components/global/SectionTitle";
import ProductListSkeleton from "@/components/product/ProductSkeleton";
import ProductsList from "@/components/product/ProductsList";
import ProductsSortDropdown from "@/components/product/ProductsSortDropdown";
import { Suspense } from "react";

interface PageProps {
 searchParams: Promise<{ search?: string; sort?: string }>;
}

async function ProductsPage({ searchParams }: PageProps) {
  const { search, sort } = await searchParams;
  return (
    <section>
      <Container>
        <SectionTitle>Products Page</SectionTitle>
		<div className="flex justify-end mb-3">
        <ProductsSortDropdown />
      </div>
        <Suspense fallback= {<ProductListSkeleton/>}>
          <ProductsList search={search} sort = {sort} />
        </Suspense>
      </Container>
    </section>
  );
}
export default ProductsPage;
