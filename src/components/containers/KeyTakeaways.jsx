import React from "react";

const KeyTakeaways = () => {
  return (
    <section className="wrapper">
      <div className="w-full max-w-4xl mx-auto gap-4">
        <h1 className="text-6xl">
          Comparative
          <span className="font-semibold block -mt-4">Analysis</span>
        </h1>
        <div className="w-full flex justify-center gap-6 mt-10 mx-auto">
          <div className="max-w-md p-2 flex flex-col gap-4">
            <h2 className="text-base font-bold">King's Court</h2>
            <p>- Loca￾on: Two-minute drive from Tech City</p>
            <p>- Property Type: Old 4-bedroom duplex</p>
            <p>
              - Features: Outdated design, limited infrastructure (power,
              internet
            </p>
            <p>- Price: 190 million Naira</p>
          </div>
          <div className="max-w-md p-2 flex flex-col gap-4">
            <h2 className="text-base font-bold">Tech City</h2>
            <p>- Loca￾on: Prime area with modern infrastructure</p>
            <p>
              - Property Type: New genera￾on 4-bedroom duplex (semi-detached)
            </p>
            <p>
              - Features: World-class design, modern infrastructure (reliable
              power, high-speed internet), special a￾rac￾ons (ameni￾es,
              services)
            </p>
            <p>- Price: Star￾ng from 230 million Naira (semi-detached)</p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto gap-4">
        <h1 className="text-6xl">
          Key
          <span className="font-semibold block -mt-4">Takeaways</span>
        </h1>
        <div className="w-full flex justify-center gap-6 mt-10 mx-auto">
          <ol className="list-decimal p-2 grid grid-cols-2 gap-4">
            <li>
              <span className="font-semibold">Location:</span> Both estates are
              in close proximity, but Tech City ofers a more desirable loca￾on
              with modern infrastructure
            </li>
            <li>
              <span className="font-semibold">Property Type:</span> Tech City
              features new genera￾on designs, while Kings Court has outdated
              proper￾es.
            </li>
            <li>
              <span className="font-semibold">Features:</span> Tech City ofers a
              range of modern ameni￾es and services, while Kings Court has
              limited infrastructure.
            </li>
            <li>
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
