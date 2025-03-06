import React from "react";
import Heading from "../shared/Heading";
import Card from "../shared/Card";

const ProjectOverview = () => {
  return (
    <section className="w-full mb-40" id="overview">
      <Heading
        title="Black Port"
        tagline="Welcome to Black Port—Where the Future of Living and Work Comes Together."
        desc="Black Port is not just a building; it’s a vision for the future—a unique and sophis￾cated space designed specifcally for the modern, fast-paced entrepreneur, tech enthusiast, and remote worker who seeks a balance between work and leisure, comfort and produc￾vity, and luxury and accessibility"
      />
      <section className="w-full overflow-hidden flex gap-16">
        <div className="-ml-64 hidden md:block">
          <img
            src="assets/black-port.png"
            alt="black port"
            className="object-fill"
          />
        </div>
        <div className="flex-1 flex-center">
          <Card
            title="Black Port – A New Era of Living and Working with ease and fun.
"
            description="Black Port is more than just a building; it’s an investment in the future. A place for visionaries, entrepreneurs, and tech enthusiasts, where luxury meets productivity, serenity meets innovation, and comfort meets success. If you are someone who can see the future—who can look beyond the ordinary to see extraordinary opportunities—then Black Port is the place for you."
          />
        </div>
      </section>
    </section>
  );
};

export default ProjectOverview;
