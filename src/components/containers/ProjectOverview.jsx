import React from "react";
import Heading from "../shared/Heading";
import Card from "../shared/Card";

const ProjectOverview = () => {
  return (
    <section className="p-6 my-10" id="overview">
      <h1 className="text-4xl font-medium text-center">Here's What We Think</h1>
      <section className="w-full flex flex-col lg:flex-row gap-6 mt-6">
        <div className="w-full h-72 lg:h-96 lg:w-1/2 overflow-hidden rounded-lg">
          <img
            src="assets/black-port.png"
            alt="black port"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-1/2 lg:p-6">
          <p className="text-base lg:text-lg leading-6 lg:leading-[27px]">
            You may not have the capital to start a building project today, but
            if you follow our investment plans over time, you’ll have more than
            enough to begin constructing your dream home through our
            collaborative joint building investments.
          </p>

          <p className="text-base lg:text-lg leading-6 lg:leading-[27px]">
            We offer lucrative real estate projects with returns of over 38%
            ROI, and some even promise up to 60% ROI within one year.
          </p>

          <p className="text-base lg:text-lg leading-6 lg:leading-[27px]">
            Through this vision, we seek to shape the future of real estate and
            contribute to the economic and social well-being of Ogun State and
            beyond.
          </p>
        </div>
      </section>
    </section>
  );
};

export default ProjectOverview;
