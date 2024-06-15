import React from "react";
import StoreBannerPic from "/public/images/storebanner.png";
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

export default async function Products() {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      <Image
        src={StoreBannerPic}
        className="object-cover w-full h-screen "
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0">
        <div className=" max-w-[1450px] h-screen px-12 m-auto flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <div className="bg-[#d0d3d4] bg-opacity-50 py-4 px-12 rounded-lg lg:bg-opacity-0 lg:py-0 lg:px-0">
            <p className=" text-lg lg:text-xl font-base">
              Welcome to our store of
            </p>
            <h2 className=" text-4xl lg:text-5xl font-bold my-2">
              POWERFUL PREBUILTS
            </h2>
            <p className=" text-xl lg:text-2xl mt-8 font-semibold">
              Take your time, decide which fittest your needs
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="flex justify-center text-3xl font-bold md:px-8 mt-32 mb-8">
          Our Products
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20 max-w-[1450px] mx-auto">
          {products.map((products) => (
            <ProductCard key={products.sys.id} products={products} />
          ))}
        </div>
      </div>
    </div>
  );
}
