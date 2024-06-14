import React from "react";
import Image from "next/image";

export default function CompanyCultureCards(props) {
  const cards = props.cards;

  return (
    <div
      className=" grid lg:grid-cols-2 gap-8 mx-10
"
    >
      {cards.map((card) => (
        <div>
          <div className="my-20 mx-4" key={card.id}>
            <h2 className="text-2xl font-bold my-8 flex justify-center">
              {card.title}
            </h2>
            <p className="text-center">{card.desc}</p>
          </div>
          <div>
            <Image
              src={card.image}
              alt={card.alt}
              className="flex justify-center"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// grid lg:grid-cols-2 gap-8 mx-10
