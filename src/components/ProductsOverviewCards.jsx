import React from "react";
import Image from "next/image";
import ButtonPurple from "./ButtonPurple";
import Link from "next/link";

export default function ProductsOverviewCards({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div
          className="mx-4 first-of-type:bg-[#cffff0] bg-[#cfecff] last-of-type:bg-[#f0cfff] my-8 grid lg:grid-cols-2 lg:items-start gap-8 h-fit rounded-xl"
          key={product.id}
        >
          <div>
            <Image
              className="w-64 lg:m-12 mx-auto"
              src={product.productImage}
              alt={`${product.title} Prebuilt PC`}
            />
          </div>
          <div>
            <h2 className="flex justify-center lg:justify-start ml-6 mt-1 lg:mt-20 text-2xl font-bold">
              {product.title}
            </h2>
            <p className="mx-auto text-center lg:mx-2 lg:mr-20 lg:text-start px-4 mt-5 mb-7">
              {product.desc}
            </p>
            <Link href="/products/">
              <ButtonPurple className="flex mt-12 w-5/6 lg:w-fit mx-auto lg:mx-6 lg:mt-2 ">
                To Store
              </ButtonPurple>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
