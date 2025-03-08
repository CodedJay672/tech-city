import React from "react";

const Card = ({ title, description }) => {
  return (
    <article className="w-full lg:h-96 p-6 rounded-lg bg-blue-100 flex flex-col">
      <h1 className="text-lg font-bold">{title}</h1>

      <div className="flex-1 mt-10">
        <p className="text-base align-middle">{description}</p>
      </div>
    </article>
  );
};

export default Card;
