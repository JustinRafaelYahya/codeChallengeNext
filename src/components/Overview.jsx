"use client";
import React from "react";
import { useState } from "react";
import OverviewCards from "@/components/OverviewCards";
import { CompanyPerks } from "@/data/CompanyPerks";

export default function Overview() {
  const [cards] = useState(CompanyPerks);

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
        more. From our Costumer Services up to our PC Technicians, we
        passionately help you to discover the ultimate experience of your PC.{" "}
      </p>
      <h2 className="flex justify-center text-3xl font-bold mb-8">Our Perks</h2>
      <OverviewCards cards={cards} />
    </div>
  );
}
