import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import { motion } from 'framer-motion';
import Card from './ui/Card';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'es' | 'en';

  const getProjectPath = (id: string) => {
    return i18n.language === 'es' ? `/proyecto/${id}` : `/project/${id}`;
  };

  return (
    <Card padding="none" shadow="medium" className="overflow-hidden group flex flex-col justify-between h-full">
      {/* Image */}
      <div className="aspect-video overflow-hidden relative">
        <motion.img
          src={project.image}
          alt={project.title[currentLang]}
          className="w-full h-full transition-transform duration-500 group-hover:scale-110 object-cover"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-raisin-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Overlay buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 backdrop-blur-sm text-primary-600 rounded-full shadow-medium hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={16} />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 backdrop-blur-sm text-primary-600 rounded-full shadow-medium hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={16} />
            </motion.a>
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-raisin-black mb-3">
          {project.title[currentLang]}
        </h3>
        <p className="text-eggplant text-sm leading-relaxed mb-4 flex-1">
          {project.description[currentLang]}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
              +{project.technologies.length - 5} más
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-lavender-web">
          <Link
            to={getProjectPath(project.id)}
            className="text-raisin-black hover:text-primary-600 font-medium text-sm transition-colors"
          >
            {t('projects.viewProject')}
          </Link>
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-eggplant hover:text-primary-600 transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-eggplant hover:text-primary-600 transition-colors"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;