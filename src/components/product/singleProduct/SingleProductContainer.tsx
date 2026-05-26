import Container from "@/components/global/Container";
import SingleProductLeftSide from "./SingleProductLeftSide";
import SingleProductRightSide from "./SingleProductRightSide";
import SingleProductBreadcrumb from "./SingleProductBreadcrumb";
import ProductNotFound from "./ProductNotFound";
import { Product } from "@/generated/prisma/client";


interface SingleProductContainerProps {
  product: Product; // product o'zgaruvchisining tipi Prisma bergan Product ekanini aytamiz
}
async function SingleProductContainer({ product}:  SingleProductContainerProps ) {

  if (!product) {
    return (
      <Container>
        <ProductNotFound/>
      </Container>
    );
  }
  return (
    <section>
      <Container className="py-10">
          <SingleProductBreadcrumb productName={product.name}/>
        <div className="grid grid-cols-2 gap-8 md:gap-20 xl:gap-48 max-[830px]:grid-cols-1">
          <SingleProductLeftSide images={product.images || []} />
          <SingleProductRightSide product={product} />
        </div>
      </Container>
    </section>
  );
}
export default SingleProductContainer;
