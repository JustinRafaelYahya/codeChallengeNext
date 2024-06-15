import React from "react";
import Image from "next/image";

export default function TestimonialCardsProductsPage() {
  const costumers = [
    {
      id: 1,
      name: "Skill4ltu",
      image: require("/public/images/costumer1.png"),
      title: "World of Tanks Streamer",
      desc: " The machine I bought at Blitz was a perfection, it worked beyond my expectation. There are no more lags, but just all frags!",
    },
    {
      id: 2,
      name: "Stephen Burke",
      image: require("/public/images/costumer2.jpeg"),
      title: "Tech Youtuber",
      desc: "  I bought the Blitz PC S1 Prime around last year, and it was a really delightful experience. The assembly was perfect-clean and the machine performs great.",
    },
    {
      id: 3,
      name: "Nasser Al-Khelaifi",
      image: require("/public/images/costumer3.jpg"),
      title: "Enterprise Director",
      desc: "  The Blitz B1 I bought is working like a charm. The company doesn't play around and ensure to use the most-quality parts.",
    },
    {
      id: 3,
      name: "Ueda Reina",
      image: require("/public/images/costumer4.jpg"),
      title: "Twitch Streamer",
      desc: "  The delivery process went fast and PC was wrapped in a very careful way! Overall all the staff was also so kind and responsive (≧▽≦)",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 ">
      {costumers.map((costumer) => (
        <div
          key={costumer.id}
          className="shadow-xl flex flex-col p-4 my-4 mx-4 rounded-lg hover:scale-105 duration-300"
        >
          <div>
            <Image
              className="rounded-full w-28 mx-auto bg-white"
              src={costumer.image}
              alt="/"
            />
            <h2 className="text-center font-semibold text-lg my-1 mb-3">
              {costumer.name}
            </h2>
            <p className=" mx-2 text-sm mb-1 text-center border-b">
              {costumer.title}
            </p>
            <p className="text-center py-4 mx-8">{costumer.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
