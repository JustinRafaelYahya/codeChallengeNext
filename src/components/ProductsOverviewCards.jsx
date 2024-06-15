import React from "react";
import Image from "next/image";
import ButtonPurple from "./ButtonPurple";
import Link from "next/link";

export default function ProductsOverviewCards({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div
          className="mx-4 first-of-type:bg-[#cffff0] bg-[#cfecff] last-of-type:bg-[#f0cfff] my-8 grid lg:grid-cols-2 gap-8 h-fit rounded-xl"
          key={product.id}
        >
          <div>
            <Image
              className="w-64 lg:m-12"
              src={product.productImage}
              alt={`${product.title} Prebuilt PC`}
            />
          </div>
          <div>
            <h2 className="flex justify-start ml-6 mt-1 lg:mt-28 text-2xl font-bold">
              {product.title}
            </h2>
            <p className="flex justify-start ml-6 mr-20 mt-5 mb-7">
              {product.desc}
            </p>
            <Link href="/products/">
              <ButtonPurple className="flex mx-6 mt-2">To Store</ButtonPurple>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
