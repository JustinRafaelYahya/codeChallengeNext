"use client";
import React from "react";
import { useState } from "react";
import OverviewCards from "@/components/OverviewCards";
import { CompanyPerks } from "@/data/CompanyPerks";
import Link from "next/link";
import LinkPurple from "@/components/LinkPurple";
import { OverviewDesc } from "@/data/OverviewDesc";

export default function Overview() {
  const [cards] = useState(CompanyPerks);

  return (
    <div className="py-[4rem] mx-auto px-12 bg-white max-w-[1400px]">
      <h2 className="flex justify-center text-3xl font-bold mb-8">
        Why Blitz PC?
      </h2>
      <p className="flex justify-center max-w-[1000px] mx-auto text-center mb-8">
        {OverviewDesc}
      </p>
      <h2 className="flex justify-center text-3xl font-bold mb-8">Our Perks</h2>
      <div>
        <OverviewCards cards={cards} />
      </div>
      <div className="float-right">
        <Link href="/about/">
          <LinkPurple className="px-6 my-6">Learn More About Us ⪢</LinkPurple>
        </Link>
      </div>
    </div>
  );
}
