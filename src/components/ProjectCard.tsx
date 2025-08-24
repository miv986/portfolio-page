import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import Badge from './ui/Badge';
import Card from './ui/Card';
import Button from './ui/Button';

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
    <Card padding="none" shadow="medium" className="overflow-hidden group">
      {/* Image */}
      <div className="aspect-video overflow-hidden relative">
        <motion.img
          src={project.image}
          alt={project.title[currentLang]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-raisin-black mb-3 group-hover:text-primary-600 transition-colors">
          {project.title[currentLang]}
        </h3>
        
        <p className="text-eggplant mb-4 leading-relaxed line-clamp-3">
          {project.description[currentLang]}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="primary" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" size="sm">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        {/* View Project Button */}
        <Link to={getProjectPath(project.id)}>
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300"
          >
            {t('projects.viewProject')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;