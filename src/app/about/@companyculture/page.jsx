"use client";
import CompanyCultureCards from "@/components/CompanyCultureCards";
import { CultureItems } from "@/data/CompanyCulturePoints";
import { useState } from "react";
import React from "react";

export default function Page() {
  const [cards] = useState(CultureItems);
  return (
    <div className="mx-auto bg-white max-w-[1450px] px-3 mt-[4rem] mb-8">
      <h2 className="flex justify-center text-3xl font-bold mb-8">
        What We Live By
      </h2>
      <p className="flex justify-center text-center mx-6 mb-2">
        These are our Ikigai, our goals and the way we move as a company.
      </p>
      <CompanyCultureCards cards={cards} />
    </div>
  );
}
