import React from "react";

const Heading = ({ title, tagline, desc }) => {
  return (
    <article className="w-full md:w-2/3 p-16 flex-center flex-col mx-auto">
      <h1 className="text-xl lg:text-2xl font-bold">{title}</h1>
      <p className="text-sm lg:text-base text-gray-500 font-semibold">
        {tagline}
      </p>
      <p className="text-sm lg:text-base mt-4 text-gray-500 text-center">
        {desc}
      </p>
    </article>
  );
};

export default Heading;
