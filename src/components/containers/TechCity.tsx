import React from "react";
import Heading from "../shared/Heading";
import SimpleText from "../shared/SimpleText";

const TechCity = () => {
  return (
    <section className="w-full mb-40">
      <img src="assets/tech-city.png" alt="tech city" className="w-full" />
      <div className="flex flex-col lg:flex-row justify-center w-full">
        <div className="bg-black p-6 z-10 mt-10 lg:-mt-40 rounded-md lg:w-96">
          <h1 className="text-white text-xl lg:text-3xl w-16">Tech</h1>
          <h1 className="text-white text-xl lg:text-3xl w-16 -mt-3 font-semibold">
            Center
          </h1>
          <h2 className="text-base lg:text-lg font-semibold my-2 text-gray-50">
            Introducing Tech Center:
          </h2>
          <p className="text-gray-50 text-sm">
            Nigeria's Premier Entertainment and Leisure Des￾na￾on Located in
            Ogun State, Tech Center is a revolu￾onary 16-storey structure that
            redefnes the entertainment and leisure landscape in Nigeria. This
            iconic complex boasts
          </p>
          <h2 className="text-base lg:text-lg font-semibold my-2 text-gray-50">
            Unparalleled Entertainment Options:
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-50 text-sm">
              - The largest cinema in Nigeria, featuring a 60￾ x 60￾ screen and
              state-of-the-art sound system with over 20,000 sea￾ng capacity.
            </li>
            <li className="text-gray-50 text-sm">
              - 500 small halls and Short let apartments for private events and
              gatherings
            </li>
            <li className="text-gray-50 text-sm">
              - Over 5,000 rooms hotel and suite for comfortable accommodations
            </li>
          </ul>
          <h2 className="text-base lg:text-lg font-semibold my-2 text-gray-50">
            Unique Experiences:
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-50 text-sm">
              - A private getaway for couples seeking relaxa￾on and fun
            </li>
            <li className="text-gray-50 text-sm">
              - An ideal venue for companies' retreats and training
            </li>
            <li className="text-gray-50 text-sm">
              - A pla￾orm for ar￾sts, mo￾va￾onal speakers, and events
            </li>
            <li className="text-gray-50 text-sm">
              - Breathtaking views for indoor and outdoor weddings
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-full lg:w-1/3 px-24">
          <SimpleText
            title="Architectural Marvel"
            desc="Inspired by Dubai's iconic designs, Tech Center's 16-storey building features an attractive design that will transform Ogun State's landscape"
          />
          <SimpleText
            title="A Hub for Nollywood:"
            desc="Tech Center aims to promote Nollywood by providing a world-class cinema for movie premieres and events, bringing fans and celebri￾es together"
          />
          <SimpleText
            title="The Ul￾mate Des￾na￾on for Families and Diasporas:"
            desc="In December, Tech Center will be the go-to destination for families and diasporas seeking fun and entertainment in Nigeria"
          />
        </div>
      </div>
    </section>
  );
};

export default TechCity;
