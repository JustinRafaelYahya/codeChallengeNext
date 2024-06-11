"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { TypeAnimation } from "react-type-animation";
import ImgSlider1 from "/public/images/imgslider1.png";
import ImgSlider2 from "/public/images/imgslider2.png";
import ImgSlider3 from "/public/images/imgslider3.jpg";
import ImgSlider4 from "/public/images/imgslider4.png";
import Image from "next/image";
import ButtonPurple from "/src/components/ButtonPurple";

const Page = () => {
  return (
    <div>
      <Carousel
        className="hero-slider"
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
        showArrows={false}
      >
        <Image
          src={ImgSlider1}
          className="w-full h-screen object-cover"
          alt=""
        />
        <Image
          src={ImgSlider2}
          className="w-full h-screen object-cover "
          alt=""
        />
        <Image
          src={ImgSlider3}
          className="w-full h-screen object-cover "
          alt=""
        />
        <Image
          src={ImgSlider4}
          className="w-full h-screen object-cover "
          alt=""
        />
      </Carousel>

      <div className="w-full h-screen absolute top-0 left-0 bg-white/10">
        <div className=" max-w-[1450px] h-screen px-12 m-auto flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <div className="bg-[#d0d3d4] bg-opacity-50 py-4 px-12 rounded-lg lg:bg-opacity-0 lg:py-0 lg:px-0">
            <h1 className="text-4xl lg:text-5xl font-bold my-5 text-black">
              Prebuilt PC by us <br /> For{" "}
              <TypeAnimation
                sequence={[
                  "Professional",
                  2000,
                  "Gamer",
                  2000,
                  "Creator",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                style={{
                  fontSize: "1em",
                  paddingLeft: "5px",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </h1>
            <p className=" text-xl lg:text-2xl font-semibold">
              Best performance, more bang for your bucks
            </p>
          </div>
          <ButtonPurple>Get Started</ButtonPurple>
        </div>
      </div>
    </div>
  );
};

export default Page;
