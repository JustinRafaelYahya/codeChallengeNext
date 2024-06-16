import React from "react";
import { createClient } from "contentful";
import ProductCard from "@/components/ProductCard";
import Testimonial from "@/components/Testimonial";
import ProductsHero from "@/components/ProductsHero";

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

export default async function Products() {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      <ProductsHero />
      <div>
        <h2 className="flex justify-center text-3xl font-bold md:px-8 mt-32 mb-8">
          Our Products
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20 max-w-[1375px] mx-auto">
          {products.map((products) => (
            <ProductCard key={products.sys.id} products={products} />
          ))}
        </div>
        <div className="max-w-[1375px] mx-auto my-12">
          <Testimonial
            title="What Our Costumers Said?"
            className="md:bg-white/70 w-fit p-4 rounded-xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
