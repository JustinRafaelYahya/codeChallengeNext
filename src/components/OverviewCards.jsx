import React from "react";

export default function OverviewCards(props) {
  const cards = props.cards;
  const icon = props.icon;

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      {cards.map((card) => (
        <div className="flex flex-col p-4 my-4">
          {card.icon}
          <div className="card-preview" key={card.id}>
            <h2 className="text-center font-bold text-xl mb-2">
              {" "}
              {card.title}{" "}
            </h2>
            <p className="text-center">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
