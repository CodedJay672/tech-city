import React from "react";
import SimpleText from "../shared/SimpleText";

const TechCenter = () => {
  return (
    <section className="wrapper">
      <div className="bg-gray-950 p-6 lg:p-24 py-24 flex flex-col lg:flex-row">
        <div className="w-full flex flex-col lg:flex-row gap-6">
          <h1 className="text-gray-50 text-4xl lg:text-6xl">
            Tech <span className="font-semibold block -mt-4">Center</span>
          </h1>
          <img
            src="assets/techCity.jpg"
            alt="tech-city feature"
            className="w-full lg:hidden"
          />
        </div>
        <div>
          <div>
            <img
              src="assets/techCity.jpg"
              alt="tech-city feature"
              className="hidden lg:block w-full"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-6 mt-6">
            <div>
              <h2 className="text-base lg:text-lg font-semibold my-2 text-gray-50">
                Introducing Tech Center:
              </h2>
              <p className="text-gray-50 text-sm">
                Nigeria's Premier Entertainment and Leisure Destination Located
                in Ogun State, Tech Center is a revolutionary 16-storey
                structure that redefines the entertainment and leisure landscape
                in Nigeria. This iconic complex boasts
              </p>
              <h2 className="text-base lg:text-lg font-semibold my-2 text-gray-50">
                Unparalleled Entertainment Options:
              </h2>
              <ul className="flex flex-col gap-2">
                <li className="text-gray-50 text-sm">
                  - The largest cinema in Nigeria, featuring a 600 x 600 screen
                  and state-of-the-art sound system with over 20,000 seating
                  capacity.
                </li>
                <li className="text-gray-50 text-sm">
                  - 500 small halls and Short let apartments for private events
                  and gatherings
                </li>
                <li className="text-gray-50 text-sm">
                  - Over 5,000 rooms hotel and suite for comfortable
                  accommodations
                </li>
              </ul>
              <h2 className="text-base lg:text-lg font-semibold my-2 text-gray-50">
                Unique Experiences:
              </h2>
              <ul className="flex flex-col gap-2">
                <li className="text-gray-50 text-sm">
                  - A private getaway for couples seeking relaxation and fun
                </li>
                <li className="text-gray-50 text-sm">
                  - An ideal venue for companies' retreats and training
                </li>
                <li className="text-gray-50 text-sm">
                  - A platform for artists, motivational speakers, and events
                </li>
                <li className="text-gray-50 text-sm">
                  - Breathtaking views for indoor and outdoor weddings
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-6 w-full mt-6">
              <SimpleText
                title="Architectural Marvel"
                desc="Inspired by Dubai's iconic designs, Tech Center's 16-storey building features an attractive design that will transform Ogun State's landscape"
              />
              <SimpleText
                title="A Hub for Nollywood:"
                desc="Tech Center aims to promote Nollywood by providing a world-class cinema for movie premieres and events, bringing fans and celebrities together"
              />
              <SimpleText
                title="The Ultimate Destination for Families and Diasporas:"
                desc="In December, Tech Center will be the go-to destination for families and diasporas seeking fun and entertainment in Nigeria"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCenter;
