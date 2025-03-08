import React from "react";

const KeyFeatures = () => {
  return (
    <section className="wrapper" id="key-features">
      <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-10 p-6">
        <h1 className="text-4xl lg:text-6xl">
          Key <span className="font-semibold block -mt-4">Features</span>
        </h1>
        <div className="w-full max-w-xl p-1 flex flex-col gap-4 lg:gap-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <img
              src="assets/feature0.png"
              alt="tech-city feature"
              className="w-full lg:w-96"
            />
            <div className=" p-1">
              <p className="font-semibold text-base lg:text-lg">
                Introducing Tech City Phase 1&2 Where Luxury Meets Afordability
                and Innovation
              </p>
            </div>
          </div>
          <p className="font-normal text-base lg:text-lg">
            Immerse yourself in our exquisitely designed semi-detached duplexes,
            tailored to cater to diverse tastes and preferences. Each unit is a
            masterpiece of modern architecture, seamlessly blending style,
            comfort, and cu￾ng-edge technology.
          </p>
          <p className="font-normal text-base lg:text-lg">
            For families seeking a luxurious yet afordable haven, our 3-bedroom
            fats offer the perfect blend of space, sophis￾ca￾on, and innova￾on.
            Enjoy a beau￾ful family life, surrounded by the latest technologies,
            at a price that won't break the bank.
          </p>
          <q className="font-semibold text-base lg:text-lg p-4 italic shadow-lg">
            At Tech City, we're committed to providing a holistic living
            experience that combines comfort, convenience, and afordability.
          </q>

          <ul>
            <li className="font-medium text-lg lg:text-xl">
              Our estate offers:
            </li>
            <li>
              - A secure, technology-driven environment perfect for families
            </li>
            <li>- Afordable luxury living without compromising on quality</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
