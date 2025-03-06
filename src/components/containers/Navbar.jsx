import React, { useState } from "react";
import { navLinks } from "../../constants";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="w-full p-4 md:py-4 md:px-16 flex justify-between items-center absolute top-0 left-0 z-50">
      <img src="assets/logo2.png" width={64} height={64} />
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
          {showMenu ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
        </div>
        {showMenu && (
          <ul className="absolute top-24 right-4 bg-blue-200 rounded-md p-4 w-44 slide-top">
            {navLinks.map((link, idx) => (
              <li className="text-end p-1" key={idx}>
                <a
                  href={link.link}
                  className="text-base font-medium hover:underline p-2 transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
