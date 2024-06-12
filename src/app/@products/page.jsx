"use client";
import { useState } from "react";
import ImagesIndex from "../../../public/images";
import ImageRepeater from "@/components/ImageRepeater";
import ProductsOverviewCards from "@/components/ProductsOverviewCards";

export default function Page() {
  const [productDatas] = useState([
    {
      id: 1,
      className: "bg-[#cffff0]",
      productImage: (
        <ImageRepeater
          src={ImagesIndex.bseries}
          alt="B Series PC"
          height={300}
          width={300}
        />
      ),
      title: "Blitz B Series",
      desc: "Build around the emphasis of professional and corporate uses, Blitz B Series use state of the art parts which robust and outstand hours of operation.",
    },
    {
      id: 2,
      className: "bg-[#cfecff]",
      productImage: (
        <ImageRepeater
          src={ImagesIndex.gseries}
          alt="G Series PC"
          height={300}
          width={300}
        />
      ),
      title: "Blitz G Series",
      desc: " The heart and core of a gamer, Blitz G Series is a machine built using parts that fulfill every gamer needs, be it competitive gaming or AAA experience, gain your best performance and experience.",
    },
    {
      id: 3,
      className: "bg-[#f0cfff]",
      productImage: (
        <ImageRepeater
          src={ImagesIndex.sseries}
          alt="S Series PC"
          height={300}
          width={300}
        />
      ),
      title: "Blitz S Series",
      desc: " Uncover your potential in the digital world. Blitz S Series is designed to stream, create contents, and multitask in mind. Do everything simultaneously, be the king of flex.",
    },
  ]);
  return (
    <div className="py-[4rem] px-4 mx-auto bg-white max-w-[1450px]">
      <h1 className="text-3xl font-bold mb-10">Our Products</h1>
      <ProductsOverviewCards products={productDatas} />
    </div>
  );
}
