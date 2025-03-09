import React, { useState } from "react";
import { navLinks } from "../../constants";
import { RiCloseLine, RiMenLine, RiMenu3Fill } from "react-icons/ri";
import { ImMenu } from "react-icons/im";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="w-full flex justify-between p-1 px-6 lg:px-10 lg:p-4 items-center sticky top-0 left-0 z-50 bg-white">
      <img
        src="assets/dark-logo.png"
        width={105}
        alt="tech-city"
        className="-ml-5"
      />
      <ul className="hidden lg:flex items-center gap-4">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.link}
              className="text-base font-medium hover:underline p-2 transition-all"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="assets/tech-city-brochure.pdf"
        className="p-2 text-base bg-blue-900 rounded-md text-gray-100 cursor-pointer hover:bg-blue-950 transition-all hidden md:block"
        download
      >
        Brochure
      </a>

      <div className="lg:hidden">
        <div className="p-1 cursor-pointer" onClick={handleShowMenu}>
          {showMenu ? (
            <RiCloseLine size={40} className="font-bold stroke-2 fill-black" />
          ) : (
            <RiMenu3Fill size={40} className="font-bold" />
          )}
        </div>
        {showMenu && (
          <ul className="w-full absolute top-32 right-0 bg-white rounded-md p-4 slide-top">
            {navLinks.map((link, idx) => (
              <li className="text-end p-1" key={idx}>
                <a
                  href={link.link}
                  className="text-base font-medium hover:underline p-2 transition-all"
                  onClick={handleShowMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="text-end p-1 mt-6">
              <a
                href="assets/tech-city-brochure.pdf"
                className="p-2 text-base bg-blue-900 rounded-md text-gray-100 cursor-pointer hover:bg-blue-950 transition-all"
                download
              >
                Brochure
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
