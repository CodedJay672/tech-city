import React from "react";

const WelcomeToTechCity = () => {
  return (
    <sectiion classname="wrapper">
      <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-10 p-6">
        <h1 className="text-4xl lg:text-6xl">
          Welcome{" "}
          <span className="font-semibold block -mt-4">To Tech City</span>
        </h1>
        <div className="w-full max-w-xl p-1 flex flex-col gap-4 lg:gap-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <img
              src="assets/phase5.jpg"
              alt="tech-city feature"
              className="w-full lg:w-96"
            />
            <div className=" p-1">
              <p className="font-semibold text-base lg:text-lg">
                Welcome to Tech City: Nigeria's Mini Silicon Valley.
              </p>
            </div>
          </div>
          <p className="font-normal text-base lg:text-lg">
            Imagine a world where technology, luxury, and convenience blend
            seamlessly together. A world designed specifically for tech
            enthusiasts, successful entrepreneurs, and young professionals on
            the rise.
          </p>
          <p className="font-normal text-base lg:text-lg">
            At Tech City, we've created a futuristic oasis that's perfect for
            those who value flexibility and control over their time. Our
            affordable luxury community offers: World-class, high-tech
            environments that redefine modern living Unparalleled facilities,
            including: + Lightning-fast internet + Seamless transportation
            options (45-minute drive to Lagos, 2-minute drive to the train
            station) + Reliable power supply + Family-friendly amenities for a
            fun, stress-free parenting experience
          </p>
          <p className="font-normal text-base lg:text-lg">
            Join the ranks of innovators, thought leaders, and game-changers who
            call Tech City home. Experience the magic of Nigeria's mini Silicon
            Valley and discover why we're the ultimate destination for those who
            demand theve
          </p>
        </div>
      </div>
    </sectiion>
  );
};

export default WelcomeToTechCity;
