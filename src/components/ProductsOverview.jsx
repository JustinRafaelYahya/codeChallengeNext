"use client";
import { useState } from "react";
import ProductsOverviewCards from "@/components/ProductsOverviewCards";
import { ProductBannerDatas } from "@/data/ProductBannerDatas";

export default function ProductsOverview() {
  const [products] = useState(ProductBannerDatas);
  return (
    <div className="py-[4rem] px-4 mx-auto bg-white max-w-[1450px]">
      <h1 className="text-3xl font-bold mb-10">Our Products</h1>
      <ProductsOverviewCards products={products} />
    </div>
  );
}
