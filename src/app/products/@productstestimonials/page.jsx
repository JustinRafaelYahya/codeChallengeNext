"use client";

import React from "react";
import { useState } from "react";
import TestimonialCards from "@/components/TestimonialCards";
import { TestimonialsData } from "@/data/TestimonialsData";

export default function Page() {
  const [costumers] = useState(TestimonialsData);

  return (
    <div className="py-[4rem] px-4 mx-auto bg-white max-w-[1450px]">
      <h2 className="flex justify-center text-3xl font-bold mb-8">
        What Our Costumers Said??
      </h2>
      <div className>
        <TestimonialCards
          costumers={costumers}
          className="grid md:grid-cols-2 lg:grid-cols-4"
        />
      </div>
    </div>
  );
}
