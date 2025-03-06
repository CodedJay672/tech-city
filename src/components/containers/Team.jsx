import React from "react";
import { members } from "../../constants";
import Member from "../shared/Member";

const Team = () => {
  return (
    <section className="wrapper">
      <div className="flex justify-center items-center">
        <h1 className="text-7xl">
          Tech City
          <span className="rounded-full text-amber-400 block -mt-4">Team</span>
        </h1>
      </div>
      <div className="w-full mx-auto flex justify-between flex-col gap-10 max-w-3xl mt-10">
        {members.map((member) => (
          <Member
            name={member.name}
            position={member.position}
            contact={member.contact}
            website={member.website}
          />
        ))}

        <img src="assets/banner.png" alt="banner" className="mt-10" />
      </div>
    </section>
  );
};

export default Team;
