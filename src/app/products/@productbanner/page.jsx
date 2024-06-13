"use client";
import React from "react";
import StoreBannerPic from "/public/images/storebanner.png";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        src={StoreBannerPic}
        className="object-cover w-full h-screen "
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0">
        <div className=" max-w-[1450px] h-screen px-12 m-auto flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <div className="bg-[#d0d3d4] bg-opacity-50 py-4 px-12 rounded-lg lg:bg-opacity-0 lg:py-0 lg:px-0">
            <p className=" text-lg lg:text-xl font-base">
              Welcome to our store of
            </p>
            <h2 className=" text-4xl lg:text-5xl font-bold my-2">
              POWERFUL PREBUILTS
            </h2>
            <p className=" text-xl lg:text-2xl mt-8 font-semibold">
              Take your time, decide which fittest your needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
