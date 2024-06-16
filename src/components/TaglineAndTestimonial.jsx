import React from "react";
import Testimonial from "./Testimonial";

export default function TaglineAndTestimonial() {
  return (
    <div className="bg-[url('/images/mainpagebanner1.png')] max-w-[1350px] h-fit mx-auto my-auto rounded-2xl mb-28">
      <div className=" max-w-[1350px] p-6 flex flex-col items-center justify-center text-center bg-white/70  ">
        <h2 className="text-4xl lg:text-5xl font-bold my-5 text- text-center">
          We Are The True Bang for Your Bucks
        </h2>
        <p className=" text-xl lg:text-2xl font-semibold">
          Start your wonderful PC experience!
        </p>
      </div>
      <div className="pt-10">
        <Testimonial
          title="What Our Costumers Said?"
          className="md:bg-white/70 w-fit p-4 rounded-xl mx-auto"
        />
      </div>
    </div>
  );
}
