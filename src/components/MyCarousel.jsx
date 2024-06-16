"use client";
import { Carousel } from "react-responsive-carousel";

import React from "react";

export default function MyCarousel({ images }) {
  return (
    <div>
      {" "}
      <Carousel
        className="hero-slider"
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
        showArrows={true}
        showStatus={false}
      ></Carousel>
    </div>
  );
}
