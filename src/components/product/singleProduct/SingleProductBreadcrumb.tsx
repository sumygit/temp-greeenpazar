import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";




  function SingleProductBreadcrumb({productName}:{productName:string}) {
	 return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        
        {/* 1. Bosh sahifa */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="hover:text-emerald-700 transition-colors">
              Ana Sayfa
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        <BreadcrumbSeparator />

        {/* 2. Mahsulotlar ro'yxati sahifasi */}
        {/* <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/products" className="hover:text-emerald-700 transition-colors">
              Ürünler
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        <BreadcrumbSeparator /> */}

        {/* 3. Hozirgi ochiq turgan mahsulot nomi (Faol sahifa) */}
        <BreadcrumbItem>
          <BreadcrumbPage className="text-emerald-700 font-medium max-w-50 truncate  capitalize">
            {productName}
          </BreadcrumbPage>
        </BreadcrumbItem>

      </BreadcrumbList>
    </Breadcrumb>
  );
}
export default SingleProductBreadcrumb