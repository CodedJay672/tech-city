import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <secton className="bg-black text-white p-6 py-24 flex flex-col lg:flex-row lg:justify-center gap-10 lg:gap-60">
      <div className="w-64 flex flex-col space-y-4">
        <img
          src="assets/logo3.png"
          alt="Tech City Logo"
          width={72}
          height={72}
        />
        <p className="text-white mt-4">
          At Tech City our mission is to provide affordable housing for all.
        </p>
        <div className="flex flex-col mt-4">
          <p className="text-white">Follow Us:</p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/techcity_homes?igsh=MXRrZGZncmt5djRhZw=="
              target="_blank"
              className="text-white"
            >
              <i className="fab fa-instagram">
                <FaInstagram className="size-4 lg:size-6 hover:text-orange-500 transition-all cursor-pointer" />
              </i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-2xl font-bold">Quick Links</h1>
        <a href="#" className="text-white">
          <i className="fab fa-facebook-f">About Us</i>
        </a>
        <a href="#" className="text-white">
          <i className="fab fa-twitter">Our Portfolio</i>
        </a>
        <a href="#" className="text-white">
          <i className="fab fa-linkedin-in">Why Invest</i>
        </a>
        <a href="#" className="text-white">
          <i className="fab fa-instagram">Meet the team</i>
        </a>
      </div>
      <div className="w-64 flex flex-col space-y-4">
        <p className="text-sm text-white">
          For More Information Contact: <br />
          <span className="font-bold text-xl mt-4 inline-block">
            Michael King
          </span>
          <br />
          +2348063081972 <br />
          <span className="font-bold mt-4 inline-block">
            Email Address
          </span>{" "}
          <br />
          king@wakocoding.com king@techcity.homes
        </p>
      </div>
    </secton>
  );
};

export default Footer;
