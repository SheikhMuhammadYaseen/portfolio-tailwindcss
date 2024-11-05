import React from 'react';
import avatarImg from '../assets/home.png';
import TextChange from '../components/TextChange';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 py-8 md:py-24 w-full max-w-screen-xl mx-auto gap-6 md:gap-12">
      {/* Text Section */}
      <div className="flex-1 max-w-lg text-center md:text-left flex flex-col">
        
        {/* Title Container */}
        <div className="overflow-hidden flex items-center justify-center md:justify-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight m-0">
            Hi, I'm <TextChange />
          </h1>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg lg:text-2xl text-gray-300 mt-4 leading-relaxed">
          Welcome to my portfolio! I build engaging frontends, manage databases, and create secure backends.
        </p>

        {/* Contact Button */}
        <a
          href="mailto:your-email@example.com"
          className="mt-4 w-fit px-6 py-3 text-lg md:text-xl font-semibold bg-[#465697] text-white rounded-full transition-transform duration-300 hover:scale-105 hover:opacity-85 mx-auto md:mx-0"
        >
          Contact Me
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-[250px] md:max-w-[28rem] mt-4 md:mt-0 flex-shrink-0">
        <img
          src={avatarImg}
          alt="Avatar"
          className="w-full rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Home;
