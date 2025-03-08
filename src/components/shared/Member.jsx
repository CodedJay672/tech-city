import React from "react";

const Member = ({ name, position, contact, website }) => {
  return (
    <article className="w-full flex flex-col lg:flex-row justify-between items-center gap-1 lg:gap-4">
      <div>
        <h1 className="font-bold text-base lg:text-lg">{name}</h1>
        <p className="text-sm lg:text-base font-medium">{position}</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="hidden lg:block w-24 bg-black p-1" />
        <div className="bg-black py-2 px-4 w-2xs flex flex-col items-center">
          <p className="text-sm lg:text-base text-white font-medium">
            Contact: {contact}
          </p>
          <p className="text-sm lg:text-base text-white font-medium">
            Webisite: {website}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Member;
