"use client";
import React from "react";
import { useState } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaRegStar } from "react-icons/fa";
import { HiArrowsPointingIn } from "react-icons/hi2";
import { VscTools } from "react-icons/vsc";
import OverviewCards from "@/components/OverviewCards";

export default function Page() {
  const [cards, setCards] = useState([
    {
      id: 1,
      icon: <FaRegStar className="mx-auto mb-6" size={100} />,
      title: "Best Components",
      desc: "No Compromise. We use the latest and the best products to ensure your satisfaction and experience.",
    },
    {
      id: 2,
      icon: <LiaShippingFastSolid className="mx-auto mb-6" size={100} />,
      title: "Fast, Free Shipping",
      desc: "All of our products come with free shipping. We won't make you wait long as we ensure the quickest delivery possible to you!",
    },
    {
      id: 3,
      icon: <HiArrowsPointingIn className="mx-auto mb-6" size={100} />,
      title: "Professional Assembly",
      desc: "All of our pc's are professionaly assembled by our 10+ years of working experience PC Technicians hand.",
    },
    {
      id: 4,
      icon: <VscTools className="mx-auto mb-6" size={100} />,
      title: "3 Years of Warranty",
      desc: "Your investment will be future proof as we ensure the standard 3 years of parts replacement.",
    },
  ]);

  return (
    <div className="py-[4rem] px-4 mx-auto bg-white max-w-[1450px]">
      <h2 className="flex justify-center text-3xl font-bold mb-8">
        Why Blitz PC?
      </h2>
      <p className="flex justify-center text-center mx-6 mb-8">
        Estabilished in 2000, Blitz PC is the pioneer of delivering prebuilt pc
        for thousands of costumers. We set ourselves apart from competitors by
        providing you the best bang for your buck, while pride our years of
        experience of adjusting to various costumers need, from professionals
        and gamers up to the content creators. We utilize the state of the art
        as well as the most quality components and technology from the best
        companies such as Intel, AMD, Nvidia, Microsoft, MSI, Samsung, NZXT, and
        more. From our Costumer Services up to our PC Tecnicians, we
        passionately help you to discover the ultimate experience of your PC.{" "}
      </p>
      <h2 className="flex justify-center text-3xl font-bold mb-8">Our Perks</h2>
      <OverviewCards cards={cards} />
    </div>
  );
}
