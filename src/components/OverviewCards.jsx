import React from "react";
import Image from "next/image";
export default function OverviewCards(props) {
  const cards = props.cards;

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {cards.map((card) => (
        <div className="flex flex-col p-4 my-4 " key={card.id}>
          <div className="flex justify-center">
            <Image
              className="w-80"
              src={card.icon}
              alt={`${card.title} Perk`}
            />
          </div>
          <div className="card-preview">
            <h2 className="text-center font-bold text-xl mb-2">{card.title}</h2>
            <p className="flex mx-auto text-center my-5 max-w-[400px]">
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
