import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import Image from "next/image";

export default function HeroCarousel() {
  const heroImages = [
    { image: require("/public/images/imgslider1.png") },
    { image: require("/public/images/imgslider2.png") },
    { image: require("/public/images/imgslider3.jpg") },
  ];
  return (
    <div className="">
      <Carousel
        className="hero-slider"
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
        showArrows={false}
      >
        {heroImages.map((img) => (
          <Image
            src={img.image}
            className="w-full h-screen object-cover"
            objectFit="contain"
          />
        ))}
      </Carousel>
    </div>
  );
}
