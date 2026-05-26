"use server";

import { Prisma } from "@/generated/prisma/client";
import { db } from "./db";

export const fetchAllProducts = async ({
  search = "",
  sort,
}: {
  search?: string;
  sort?: string;
}) => {
let orderBy: Prisma.ProductOrderByWithRelationInput = {createdAt: "desc"};
console.log("Sort turi:", sort);
  switch (sort) {
    case "price_asc":
      orderBy = { price: "asc" }; // Arzonidan qimmatiga
      break;
    case "price_desc":
      orderBy = { price: "desc" }; // Qimmatidan arzoniga
      break;
    // case "best_seller":
    //   orderBy = { salesCount: "desc" }; // Eng ko'p sotilganlar (baza maydoniga qarab)
    //   break;
    // case "top_rated":
      //   orderBy = { rating: 'desc' }; // Eng yuqori baholanganlar
    //   break;
    default:
      orderBy = { createdAt: "desc" };
  }
  const products = await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: orderBy,
  });
  return products;
};

export const fetchSingleProduct = async (id: string) => {
  const product = await db.product.findUnique({ where: { id } });
  if (!product) return null;
  return product;
};
