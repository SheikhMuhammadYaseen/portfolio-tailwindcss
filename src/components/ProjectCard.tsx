// src/components/ProjectCard.tsx
import React from 'react';
import bannerImg from '../assets/project.png';

interface ProjectCardProps {
  title: string;
  main: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, main }) => {
  return (
    <div className="w-full max-w-xs bg-[#0c0e19] shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
      <img src={bannerImg} alt="Project Banner" className="w-full h-auto rounded-t-2xl" />
      <h3 className="text-xl font-bold p-4 text-white">{title}</h3>
      <p className="text-base leading-relaxed px-4 pb-4 text-gray-300">{main}</p>
      <div className="flex gap-3 pb-4">
        <button className="py-2 px-4 bg-[#465697] text-white font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-transform">
          Demo
        </button>
        <button className="py-2 px-4 bg-[#465697] text-white font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-transform">
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
