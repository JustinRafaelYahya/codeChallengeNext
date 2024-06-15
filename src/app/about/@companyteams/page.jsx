"use client";

import React from "react";
import AboutTeamsPageCards from "@/components/AboutPageTeamsCards";

export default function Page() {
  return (
    <div className="mx-auto bg-white max-w-[1400px] px-3 mt-[4rem] mb-8">
      <h2 className="flex justify-center text-3xl font-bold mb-8">Our Teams</h2>
      <p className="flex justify-center text-center max-w-[1000px] mx-auto mb-2">
        Meet these kindred spirits who passionately integrate themselves with
        our belief. Experts in the field and ready to give their all for our
        costumers satisfaction!
      </p>
      <AboutTeamsPageCards
        className={"mx-6 lg:mx-2 grid md:grid-cols-2 xl:grid-cols-4"}
      />
    </div>
  );
}
