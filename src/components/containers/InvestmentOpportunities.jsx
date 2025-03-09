import React from "react";
import SwiperComponent from "./SwiperComponent";

const InvestmentOpportunities = () => {
  return (
    <section className="wrapper">
      <div className="w-full max-w-4xl mx-auto p-6 lg:p-10">
        <h1 className="text-4xl lg:text-5xl">
          Our
          <span className="font-semibold block -mt-4">Portfolio</span>
        </h1>
        <p className="text-lg lg:text-xl mt-4 lg:w-3/4">
          Explore exclusive real estate projects tailored to your investment
          goals. Choose properties that fit your vision for the future
        </p>

        <div className="mt-10 flex justify-center items-center">
          <SwiperComponent />
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;
