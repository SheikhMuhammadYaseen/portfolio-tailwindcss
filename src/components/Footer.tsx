import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#465697] to-[#2e3a63] text-white py-8 px-4">
      {/* Footer Content */}
      <div className="flex flex-col items-center gap-6 max-w-5xl mx-auto md:flex-row md:justify-between md:items-start md:text-left">
        
        {/* Contact Section */}
        <div>
          <h1 className="text-[1.8rem] font-bold">Contact Me</h1>
          <p className="text-gray-300 text-base md:text-lg">Feel free to reach out via email or connect on social media.</p>
        </div>

        {/* Social Links */}
        <ul className="flex flex-wrap gap-4 justify-center md:justify-start list-none p-0">
          <li>
            <a href="mailto:adamdev94@gmail.com" className="flex items-center gap-2 text-base hover:text-[#a1c4fd] transition-transform transform hover:scale-105">
              <MdOutlineEmail size={20} /> adamdev94@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/username" className="flex items-center gap-2 text-base hover:text-[#a1c4fd] transition-transform transform hover:scale-105">
              <FaGithub size={20} /> GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/username" className="flex items-center gap-2 text-base hover:text-[#a1c4fd] transition-transform transform hover:scale-105">
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </li>
        </ul>
      </div>

      {/* Footer Bottom Text */}
      <p className="text-gray-400 mt-6 text-sm md:text-base text-center">
        &copy; {new Date().getFullYear()} Adam. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
