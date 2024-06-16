import React from "react";
import Image from "next/image";

export default function TestimonialCards(props) {
  const costumers = props.costumers;
  const className = props.className;

  return (
    <div className={className}>
      {costumers.map((costumer) => (
        <div
          key={costumer.id}
          className="shadow-2xl flex flex-col p-4 my-4 mx-4 rounded-lg hover:scale-105 ease-in-out duration-300 bg-white"
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
