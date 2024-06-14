"use client";
import Image from "next/image";
import AboutUs from "/public/images/aboutimage.png";

export default function Page() {
  const paragraphClass = "flex justify-center text-left mx-6 mb-8";
  return (
    <div>
      <h2 className="flex justify-center text-3xl font-bold md:px-8 mt-32 mb-8">
        About Us
      </h2>
      <div className="grid lg:grid-cols-2 gap-4 max-w-[1450px] m-auto">
        <div>
          <Image
            src={AboutUs}
            width={600}
            height={600}
            className="flex mt-[-1rem]"
          />
        </div>
        <div className=" px-2 mt-4">
          <p className={paragraphClass}>
            in Blitz PC, we belief in perfection, unity, ambition and
            perseverance. These are the fundamental spirits that we implement in
            ourselves as we work towards delivering our products to you, our
            beloved customer. We always wish to know your needs, put ourselves
            into that perspective, and deliver the best product to satisfy your
            need. This is the way we have been doing things since we were
            founded.{" "}
          </p>
          <p className={paragraphClass}>
            Thus since we were founded in 2000, we strive to deliver our
            promises and spirits to build the best system based on your needs.
            Even in a time when PCs were not as ubiquitous as they are today, we
            keep the spirits alive by giving our customers the highest quality
            in prebuilt computers.{" "}
          </p>
          <p className={paragraphClass}>
            Since our estabilishment, we have been working together with the top
            brands. Three years since we stood, we sealed the partnership with
            Intel and AMD on 2003, developing the best systems with alongside
            these two major brands. Two years after, we tstart to partner with
            one of the best GPU brand in Gaming, content creating and even AI
            Development nowadays, Nvidia. In the most recent, we decided to walk
            alongside with NZXT in 2021, giving you the most quality AIO and
            PSU, while also giving you the most stylish choices in PC Cases. All
            above was done to ensure none of our products quality are lacking.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
