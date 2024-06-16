"use client";
import Image from "next/image";
import AboutUs from "/public/images/aboutimage.avif";
import { HistoryDesc } from "@/data/HistoryDesc";

export default function Page() {
  const paragraphClass =
    "text-center md:text-left flex justify-center text-left mx-8 mb-8";
  return (
    <div>
      <h2 className="flex justify-center text-3xl font-bold md:px-8 mt-32 mb-8">
        About Us
      </h2>
      <div className="grid lg:grid-cols-3 gap-6 max-w-[1350px] m-auto">
        <div className="flex justify-center lg:justify-start">
          <Image
            src={AboutUs}
            width={500}
            height={500}
            className="flex mt-[-1rem]"
          />
        </div>
        <div className="px-2 mt-4 lg:col-span-2">
          <p className={paragraphClass}> {HistoryDesc[0]}</p>
          <p className={paragraphClass}> {HistoryDesc[1]}</p>
          <p className={paragraphClass}> {HistoryDesc[2]}</p>
        </div>
      </div>
    </div>
  );
}
