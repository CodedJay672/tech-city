import React from "react";
import Navbar from "./Navbar";

const HeroSections = () => {
  return (
    <section className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col lg:flex-row  gap-6">
        <div className="w-full p-6 lg:p-12 flex flex-col gap-6 justify-center items-start">
          <div className="flex flex-col gap-6">
            <h1 className="text-blue-950 font-semibold text-4xl lg:text-5xl">
              LET YOUR MONEY DO THE WORK. ENJOY THE OPPORTUNITY.
            </h1>
            <p className="text-base lg:text-lg font-medium lowercase">
              INVEST IN REAL ESTATE LET YOUR MONEY DO THE WORK. ENJOY THE
              OPPORTUNITY TO INCREASE YOUR SAVED INCOME BY 38% IN JUST ONE YEAR
              THROUGH REAL ESTATE INVESTMENT.
            </p>
          </div>
          <div className="w-full p-4 flex gap-1">
            <div className="w-full p-2 bg-gray-100">
              <h1 className="text-sm lg:text-lg font-medium">Project</h1>
              <p className="text-base lg:text-base font-bold">Real Estate</p>
            </div>
            <div className="w-full p-2 bg-gray-100">
              <h1 className="text-sm lg:text-lg font-medium">Best Return</h1>
              <p className="text-base lg:text-base font-bold">60% (ROI)</p>
            </div>
            <div className="w-full p-2 bg-gray-100">
              <h1 className="text-sm lg:text-lg font-medium">Timeline</h1>
              <p className="text-base lg:text-base font-bold">1 Year</p>
            </div>
          </div>
          <div>
            <button className="bg-blue-950 text-white p-4 rounded-lg font-semibold">
              Start Now
            </button>
          </div>
        </div>
        <div className="w-full lg:w-4/5 h-full">
          <img
            src="assets/why-invest.png"
            alt="hero image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSections;
