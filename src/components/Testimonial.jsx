"use client";
import React from "react";
import { useState } from "react";
import TestimonialCards from "./TestimonialCards";
import { TestimonialsData } from "@/data/TestimonialsData";

export default function Testimonial({ title, className }) {
  const [costumers] = useState(TestimonialsData);

  return (
    <div className="py-[4rem] px-4 mx-auto  max-w-[1400px]">
      <h2
        className={`${className} flex justify-center text-3xl font-bold mb-8`}
      >
        {title}
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
