import React from "react";

const KeyTakeaways = () => {
  return (
    <section className="wrapper">
      <div className="w-full max-w-4xl mx-auto gap-4 p-6">
        <h1 className="text-4xl lg:text-5xl">
          Comparative
          <span className="font-semibold block -mt-4">Analysis</span>
        </h1>
        <div className="w-full flex justify-center gap-2 lg:gap-6 mt-10 mx-auto">
          <div className="w-full max-w-md p-2 flex flex-col gap-4">
            <h2 className="text-base font-bold">King's Court</h2>
            <p className="text-sm">
              - Location: Two-minute drive from Tech City
            </p>
            <p className="text-sm">- Property Type: Old 4-bedroom duplex</p>
            <p className="text-sm">
              - Features: Outdated design, limited infrastructure, power,
              internet
            </p>
            <p className="text-sm">- Price: 190 million Naira</p>
          </div>
          <div className="w-full max-w-md p-2 flex flex-col gap-4">
            <h2 className="text-base font-bold">Tech City</h2>
            <p className="text-sm lg:text-base">
              - Location: Prime area with modern infrastructure
            </p>
            <p className="text-sm lg:text-base">
              - Property Type: New generation 4-bedroom duplex (semi-detached)
            </p>
            <p className="text-sm lg:text-base">
              - Features: World-class design, modern infrastructure (reliable
              power, high-speed internet), special attractions (amenities,
              services)
            </p>
            <p className="text-sm lg:text-base">
              - Price: Starting from 230 million Naira (semi-detached)
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto p-6">
        <h1 className="text-4xl lg:text-5xl">
          Key
          <span className="font-semibold block -mt-4">Takeaways</span>
        </h1>
        <div className="w-full flex justify-center gap-6 mt-10 mx-auto">
          <ol className="list-decimal p-2 grid grid-cols-2 gap-4">
            <li className="text-sm lg:text-base p-1">
              <span className="font-semibold">Location:</span> Both estates are
              in close proximity, but Tech City ofers a more desirable location
              with modern infrastructure
            </li>
            <li className="text-sm lg:text-base p-1">
              <span className="font-semibold">Property Type:</span> Tech City
              features new generation designs, while Kings Court has outdated
              properties.
            </li>
            <li className="text-sm lg:text-base p-1">
              <span className="font-semibold">Features:</span> Tech City ofers a
              range of modern amenities and services, while Kings Court has
              limited infrastructure.
            </li>
            <li className="text-sm lg:text-base p-1">
              <span className="font-semibold">Price:</span> Tech City's
              semi-detached duplexes start at 230 million Naira, while Kings
              Court's old 4-bedroom duplex sells for 190 million Naira..
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default KeyTakeaways;
