import React from "react";

const WhyInvest = () => {
  return (
    <section className="wrapper bg-gradient-to-r from-blue-50 to-transparent mt-10">
      <div className="w-full max-w-4xl mx-auto py-20 px-6">
        <div className="w-full mb-10">
          <div className="flex justify-center items-center">
            <h1 className="text-5xl lg:text-7xl relative">
              Why <span className="font-semibold block -mt-4">Invest</span>
              <span className="inline-block text-center size-4 lg:size-6 rounded-full bg-amber-400 text-xs lg:text-base absolute top-16 lg:top-28">
                in
              </span>
              <span className="font-semibold block -mt-4">Tech City</span>
            </h1>
          </div>

          <p className="font-bold mt-10 text-base lg:text-lg lg:text-center max-w-2xl mx-auto">
            Tech City promises amazing returns on investment (ROI) with
            signifcant growth potential. The project is designed for the elite,
            ofering them a seamless blend of luxury, technology, and nature
          </p>
          <p className="font-bold mt-10 max-w-2xl text-base lg:text-lg mx-auto">
            Here’s why partnering with us is a great opportunity:
          </p>
          <ol className="list-decimal max-w-2xl mx-auto list-inside space-y-4 mt-4">
            <li className="text-base lg:text-lg font-semibold">
              High ROI: Investors can expect at least 100% R.O.I, with the
              poten￾al for even higher returns based on the success of the
              project.
            </li>
            <li className="text-base lg:text-lg font-semibold">
              Property Investment Opportunity: Investors will have the exclusive
              chance to purchase property within the estate at a 10% discount,
              with an average return of ₦20 million in value.
            </li>
            <li className="text-base lg:text-lg font-semibold">
              Reputa￾on and Trust: Our team, consis￾ng of OluJonwo Obasanjo
              (real estate expert) and Michael King (tech visionary), is
              commi￾ed to delivering this world-class project. With a track
              record of success and a reputa￾on to uphold, we are fully
              dedicated to bringing this project to life.
            </li>
            <li className="text-base lg:text-lg font-semibold">
              Long-Term Success: We are posi￾oning Tech City to be a leader in
              Nigeria’s real estate market, appealing to high-net-worth
              individuals, entrepreneurs, and tech professionals. With the
              backing of the right partners, this project has the poten￾al to
              become a signifcant landmark development.
            </li>
          </ol>
        </div>
        <img src="assets/why-invest.png" alt="why invest" className="w-full" />
      </div>
    </section>
  );
};

export default WhyInvest;
