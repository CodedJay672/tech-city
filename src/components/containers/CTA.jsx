import React from "react";

const CTA = () => {
  return (
    <section className="wrapper bg-blue-950 flex flex-col lg:flex-row justify-between items-center px-6 py-24">
      <div className="w-full max-w-md p-6 flex flex-col gap-6">
        <h1 className="text-white text-4xl font-semibold">
          Ready to Start Investing in Real Estate?
        </h1>
        <p className="text-white text-lg font-medium">
          Join hundreds of investors who are building their wealth through real
          estate.
        </p>
        <button className="w-64 bg-white text-blue-950 p-4 rounded-lg font-semibold">
          Get Started
        </button>
      </div>
      <div className="w-full max-w-lg grid grid-cols-2 gap-6 p-6 rotate-6">
        <img
          src="assets/feature0.png"
          alt="cta"
          className="object-cover w-full h-full"
        />
        <img
          src="assets/feature1.png"
          alt="cta"
          className="object-cover w-full h-full"
        />
        <img
          src="assets/feature2.png"
          alt="cta"
          className="object-cover w-full h-full"
        />
        <img
          src="assets/feature3.png"
          alt="cta"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default CTA;
