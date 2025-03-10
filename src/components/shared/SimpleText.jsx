import React from "react";

const SimpleText = ({ title, desc }) => {
  return (
    <div className="w-full text-gray-50">
      <h2 className="text-base font-bold">{title}</h2>
      <p className="font-normal text-sm">{desc}</p>
    </div>
  );
};

export default SimpleText;
