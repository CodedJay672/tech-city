import React from "react";

const SimpleText = ({ title, desc }) => {
  return (
    <div className="w-full p-6">
      <h2 className="text-base text-gray-800 font-semibold">{title}</h2>
      <p className="font-normal text-sm">{desc}</p>
    </div>
  );
};

export default SimpleText;
