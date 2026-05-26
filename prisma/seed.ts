import { db } from "@/utils/db";
import products from '../src/utils/products.json' with {type:'json'} 


async function main() {
	await db.product.createMany({
		data:products, 
		skipDuplicates:true
	})
}

main().catch((e )=>{
		console.error("Yuklashda xatolik yuz berdi: ❌", e);
} ).finally(async ()=>{
	await db.$disconnect()
} )