import React from "react";
import Image from "next/image";
import { createClient } from "contentful";
import ProductCard from "@/components/ProductCard";

async function getProducts() {
  try {
    const client = createClient({
      space: "tiof1j098ief",
      accessToken: "Vv3reBVLYz2E0S72gKDpN_bXZ7YGoPIApWPfvlkFBuA",
    });
    const res = await client.getEntries({ content_type: "products" });
    return res.items;
  } catch (error) {
    console.error(error);
  }
}
export default async function Page() {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      <h2 className="flex justify-center text-3xl font-bold md:px-8 mt-32 mb-8">
        Our Products
      </h2>
      <section className="flex flex-wrap gap-8 gap-y-20">
        {products.map((product) => (
          <ProductCard key={product.sys.id} />
        ))}
      </section>
    </div>
  );
}
