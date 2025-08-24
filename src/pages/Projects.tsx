import React from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-backgroundColor2 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('projects.title')}
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;