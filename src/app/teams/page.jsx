"use client";
import TeamsImage from "/public/images/teamsimage2.png";
import Image from "next/image";
import TeamsPageCards from "@/components/TeamsPageCards";

export default function Teams() {
  return (
    <div className="py-[-10rem] mx-auto bg-white max-w-[1450px]">
      <div>
        <Image
          src={TeamsImage}
          width={600}
          className="px-8 flex mx-auto mt-40 lg:px-6"
        />
      </div>
      <div className="col-span-2">
        <h2 className="flex justify-center text-3xl font-bold md:px-8 mt-10 mb-8">
          Our Team
        </h2>
        <p className="flex text-center px-8 pb-6">
          Below are the more details of information from our teams. If you ever
          need any help regarding to our services and products, please our
          member below for more informations. They are ready to help you
          anytime!
        </p>
        <TeamsPageCards className={"grid md:grid-cols-2"} />
      </div>
    </div>
  );
}

// Meet these kindred spirits who passionately integrate themselves with
// our belief. They are the leaders, or lets say the field commanders who
// execute various operations in order to keep us in line. All of them
// are the experts in the field and will to give their all.
