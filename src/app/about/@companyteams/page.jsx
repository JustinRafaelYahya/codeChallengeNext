"use client";
import CompanyCultureCards from "@/components/CompanyCultureCards";
import { CultureItems } from "@/data/CompanyCulturePoints";
import { useState } from "react";
import React from "react";
import AboutTeamsPageCards from "@/components/AboutPageTeamsCards";

export default function Page() {
  const [cards] = useState(CultureItems);
  return (
    <div className="mx-auto bg-white max-w-[1450px] px-3 mt-[4rem] mb-8">
      <h2 className="flex justify-center text-3xl font-bold mb-8">Our Teams</h2>
      <p className="flex justify-center text-center mx-6 mb-2">
        Meet these kindred spirits who passionately integrate themselves with
        our belief. All of them are the experts in the field and will to give
        their all for our costumers satisfaction!
      </p>
      <AboutTeamsPageCards className={"grid md:grid-cols-2 xl:grid-cols-4"} />
    </div>
  );
}
