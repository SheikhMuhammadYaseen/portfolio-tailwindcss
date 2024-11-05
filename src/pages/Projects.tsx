import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div id="Projects" className="py-10 px-4 md:px-16 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Projects</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <ProjectCard
          title="Blogging Website"
          main="This is a blogging website created in Next.js."
        />
        <ProjectCard
          title="YouTube Clone"
          main="This is a YouTube website created in Next.js."
        />
        <ProjectCard
          title="Netflix Clone"
          main="This is a Netflix website created in Next.js."
        />
      </div>
    </div>
  );
};

export default Projects;
