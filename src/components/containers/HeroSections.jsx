import React from "react";
import Navbar from "./Navbar";

const HeroSections = () => {
  return (
    <section className="w-full h-screen relative mb-10 overflow-hidden">
      <Navbar />
      <div className="w-full relative overflow-hidden">
        <div className="absolute top-40 left-[40%] flex justify-center items-center flex-col">
          <h1 className="text-blue-800 font-light text-8xl">
            Tech <span className="font-bold block -mt-6">City</span>
          </h1>
          <p className="text-2xl font-semibold text-blue-900 leading-12">
            Nigeria's Silicon Valley
          </p>
        </div>
        <img
          src="assets/tech-city.jpg"
          alt="hero image"
          className="object-contain w-full bg-blend-saturation"
        />
      </div>
    </section>
  );
};

export default HeroSections;
