import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGoogle, FaAmazon } from "react-icons/fa";
import { SiRedis, SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";

const Experience: React.FC = () => {
  const technologies = [
    { Icon: FaHtml5, color: "#E34F26" },
    { Icon: FaCss3, color: "#1572B6" },
    { Icon: FaReact, color: "#61DAFB" },
    { Icon: FaJs, color: "#F7DF1E" },
    { Icon: FaFigma, color: "#F24E1E" },
    { Icon: SiMongodb, color: "#47A248" },
    { Icon: SiRedis, color: "#FF4438" }
  ];

  const experiences = [
    {
      Icon: FaGoogle,
      color: "#4285F4",
      role: "Software Engineer, Google",
      date: "Sept 2023 - Present",
      responsibilities: ["Work as software developer", "Senior SDE-developer"]
    },
    {
      Icon: RiNetflixFill,
      color: "#E50914",
      role: "Software Engineer, Netflix",
      date: "Jan 2022 - Aug 2023",
      responsibilities: ["Developed scalable streaming features", "Enhanced platform security"]
    },
    {
      Icon: FaAmazon,
      color: "#FF9900",
      role: "Software Engineer, Amazon",
      date: "Mar 2021 - Dec 2021",
      responsibilities: ["Backend system optimization", "Implemented cloud solutions"]
    }
  ];

  return (
    <div className="experience-container py-10 md:py-16 px-8 md:px-20 text-white text-center">
      {/* Experience Title */}
      <h1 className="experience-title text-3xl md:text-4xl font-bold mb-8">Experience</h1>

      {/* Tech Stack Icons with Hover Effect */}
      <div className="tech-stack flex flex-wrap gap-6 justify-center mb-10">
        {technologies.map(({ Icon, color }, index) => (
          <div
            key={index}
            className="tech-icon p-4 bg-[#0c0e19] rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-[#1c233a]"
          >
            <Icon color={color} size={50} />
          </div>
        ))}
      </div>

      {/* Job Experience Details */}
      <div className="job-cards flex flex-col gap-6 items-center">
        {experiences.map(({ Icon, color, role, date, responsibilities }, index) => (
          <div
            key={index}
            className="job-card flex flex-col items-center text-center gap-3 bg-[#465697] bg-opacity-60 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl max-w-lg w-full"
          >
            <div className="job-icon-wrapper flex items-center justify-center">
              <Icon color={color} size={60} />
            </div>
            <h2 className="job-title text-xl font-semibold">{role}</h2>
            <p className="text-sm text-gray-400">{date}</p>
            <ul className="job-description list-none text-sm leading-relaxed text-gray-300">
              {responsibilities.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
