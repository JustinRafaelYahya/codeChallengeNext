import React from "react";
import Image from "next/image";
import ButtonPurple from "./ButtonPurple";
import Link from "next/link";

export default function ProductsOverviewCards(props) {
  const products = props.products;

  return (
    <div>
      {products.map((product) => (
        <div
          className={`${product.className} my-8 grid lg:grid-cols-2 gap-8 h-fit rounded-xl`}
          key={product.id}
        >
          <Image className="w-64 lg:m-12" src={product.productImage} alt="/" />
          <div>
            <h2 className="flex justify-start ml-6 mt-1 lg:mt-28 text-2xl font-bold">
              {product.title}
            </h2>
            <p className="flex justify-start ml-6 mr-20 mt-5 mb-7">
              {product.desc}
            </p>
            {/* <button className="ml-6 rounded-lg border-[2px] border-slate-700 px-4 py-2 pointer-click mb-10  hover:bg-slate-700 hover:text-white">
              To Store
            </button> */}
            <Link href="/products/">
              <ButtonPurple className="flex mx-6 mt-2">To Store</ButtonPurple>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
