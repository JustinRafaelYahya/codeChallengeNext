"use client";
import React from "react";
import FooterItems from "./FooterItems";

export default function Footer() {
  return (
    <div className="mx-[-18px] w-screen bottom-[0%] z-10">
      <div className=" bg-white border-t-[1px] md:bg-[#1a1c1e] md:border-none pt-2">
        <h2 className="text-center text-[#1a1c1e] md:text-white pb-6 ml-8">
          Contact us
        </h2>
        <FooterItems
          className="flex justify-center items-center h-10 max-w-[1000px] m-auto px-4 text-white z-[20px] pl-12"
          listStyle="p-4"
        />
        <p className="md:text-white text-[#1a1c1e] text-center text-sm pb-4 ml-8">
          © 2024 Blitz PC
        </p>
      </div>
    </div>
  );
}
