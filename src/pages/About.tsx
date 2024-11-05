import React from "react";
import AboutImg from "../assets/about.png";

const About: React.FC = () => {
  return (
    <div className="about-container bg-black bg-opacity-30 p-10 mx-4 md:mx-auto mb-16 max-w-4xl rounded-lg shadow-lg text-white">
      {/* About Title */}
      <h2 className="about-title text-3xl md:text-4xl font-bold mb-6 text-center">About</h2>

      {/* About Content */}
      <div className="about-content flex flex-wrap gap-6 items-start justify-center">
        {/* About Image with Hover Effect */}
        <div className="about-image flex-shrink-0 w-full max-w-xs mx-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={AboutImg} alt="About" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* About Details */}
        <div className="about-details flex-1 flex flex-col gap-4">
          {/* About Item 1 */}
          <div className="about-item mb-4">
            <h3 className="about-role text-xl md:text-2xl font-semibold mb-2">Frontend Developer</h3>
            <p className="about-description text-base leading-relaxed text-gray-300">
              Expert in creating dynamic user interfaces with React and TypeScript.
            </p>
          </div>

          {/* About Item 2 */}
          <div className="about-item mb-4">
            <h3 className="about-role text-xl md:text-2xl font-semibold mb-2">Database Developer</h3>
            <p className="about-description text-base leading-relaxed text-gray-300">
              Experienced in managing and optimizing databases for efficiency and speed.
            </p>
          </div>

          {/* About Item 3 */}
          <div className="about-item">
            <h3 className="about-role text-xl md:text-2xl font-semibold mb-2">Backend Developer</h3>
            <p className="about-description text-base leading-relaxed text-gray-300">
              Skilled in building secure and scalable backend APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
