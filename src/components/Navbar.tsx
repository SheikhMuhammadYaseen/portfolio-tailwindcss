import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-[#171d32] text-white relative">
      {/* Navbar Title */}
      <span className="text-[2.2rem] font-bold tracking-wide">ADAM</span>

      {/* Navbar Links */}
      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col md:flex-row md:flex gap-2 md:gap-8 absolute md:static top-[60px] right-4 bg-[#171d32] md:bg-transparent rounded-lg md:rounded-none p-4 md:p-0 shadow-lg md:shadow-none transition-all duration-300 z-50`}
      >
        {["Home", "About", "Experience", "Projects"].map((item) => (
          <li key={item} className="text-[1.3rem] md:text-[1.4rem] font-medium transition-opacity duration-300 hover:opacity-85">
            <Link to={`/${item.toLowerCase()}`} className="text-white no-underline">
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-3xl cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <RiCloseLine /> : <RiMenu2Line />}
      </div>
    </nav>
  );
};

export default Navbar;
