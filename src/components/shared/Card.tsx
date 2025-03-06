import React from "react";

const Card = ({ title, description }) => {
  return (
    <article className="w-full lg:w-xl p-6 rounded-lg">
      <h1 className="text-xl lg:text-2xl text-center font-semibold mb-4">
        {title}
      </h1>
      <p className="text-lg lg:textxl font-gray-400 text-center">
        {description}
      </p>
    </article>
  );
};

export default Card;
