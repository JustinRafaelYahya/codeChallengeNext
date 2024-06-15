import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import Image from "next/image";

export default function HeroCarousel() {
  const heroImages = [
    { id: 1, image: require("/public/images/imgslider1.png") },
    { id: 2, image: require("/public/images/imgslider2.png") },
    { id: 3, image: require("/public/images/imgslider3.jpg") },
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
            key={img.id}
            alt="Blitz PC Hero Images"
            className="w-full h-screen object-cover"
            objectFit="contain"
          />
        ))}
      </Carousel>
    </div>
  );
}
