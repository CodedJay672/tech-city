import React from "react";

const Contact = () => {
  return (
    <section className="wrapper">
      <div className="w-full mx-auto flex justify-between flex-col gap-10 max-w-3xl relative">
        <img src="assets/contact.png" alt="contact us" />
        <div className="absolute z-10 bottom-14 w-72 text-gray-50 bg-black right-16 p-2 flex flex-col gap-3 items-end">
          <p className="text-end text-sm">
            Tech City: Nigeria's Mini Silicon Valley
          </p>
          <p className="text-end text-sm">
            A futuristic community designed for tech enthusiasts, entrepreneurs,
            and young professionals, ofering:
          </p>
          <p className="text-end text-sm">- Afordable luxury living</p>
          <p className="text-end">
            - World-class facili￾es (high-speed internet, reliable power,
            transporta￾on)
          </p>
          <p className="text-end text-sm">- Family-friendly ameni￾es</p>
          <p className="text-end">
            - 45-minute drive to Lagos, 2-minute drive to train sta￾on
          </p>
          <p className="text-end text-sm">
            The ul￾mate des￾na￾on for innovators and game-changers.
          </p>
          <p className="text-end">
            For More Informa￾on Contact: <br />
            <span className="text-white font-bold text-lg leading-1.5">
              Michael King
              <br />
              +2348063081972
            </span>
            <br />
            <span className="text-xs text-gray-50 leading-0.5">
              king@wakocoding.com <br />
              king@techcity.homes
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
