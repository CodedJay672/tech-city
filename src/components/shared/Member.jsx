import React from "react";

const Member = ({ name, position, contact, website }) => {
  return (
    <article className="w-full flex justify-between items-center gap-4">
      <div>
        <h1 className="font-bold text-lg">{name}</h1>
        <p className="text-base font-medium">{position}</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-24 bg-black p-1" />
        <div className="bg-black py-2 px-4 w-2xs flex flex-col items-center">
          <p className="text-white font-medium">Contact: {contact}</p>
          <p className="text-white font-medium">Webisite: {website}</p>
        </div>
      </div>
    </article>
  );
};

export default Member;
