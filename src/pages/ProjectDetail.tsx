import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Lightbulb, Code, Target } from 'lucide-react';
import { projects } from '../data/projects';
import ImageCarousel from '../components/ui/ImageCarousel';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'es' | 'en';

  const project = projects.find(p => p.id === id);

  const getProjectsPath = () => {
    return i18n.language === 'es' ? '/proyectos' : '/projects';
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-lavender-web to-pale-purple py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-raisin-black">Project not found</h1>
        </div>
      </div>
    );
  }

  const contentSections = [
    {
      key: 'overview',
      title: t('projects.overview'),
      content: project.longDescription[currentLang].overview,
      icon: Target,
      color: 'primary' as const,
      bgClass: 'bg-gradient-to-br from-primary-50 to-primary-100',
    },
    {
      key: 'implementation',
      title: t('projects.implementation'),
      content: project.longDescription[currentLang].implementation,
      icon: Code,
      color: 'secondary' as const,
      bgClass: 'bg-gradient-to-br from-secondary-50 to-secondary-100',
    },
    {
      key: 'learnings',
      title: t('projects.learnings'),
      content: project.longDescription[currentLang].learnings,
      icon: Lightbulb,
      color: 'accent' as const,
      bgClass: 'bg-gradient-to-br from-accent-50 to-accent-100',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-web to-pale-purple py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link to={getProjectsPath()}>
            <Button variant="ghost" className="text-primary-600 hover:text-primary-700">
              <ArrowLeft size={20} />
              {t('projects.backToProjects')}
            </Button>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Card padding="lg" shadow="large">
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-raisin-black mb-4">
                {project.title[currentLang]}
              </h1>
              <p className="text-xl text-eggplant max-w-3xl mx-auto leading-relaxed">
                {project.description[currentLang]}
              </p>
            </div>

            {/* Image Carousel */}
            <div className="mb-8">
              <ImageCarousel
                images={project.images || [project.image]}
                alt={project.title[currentLang]}
              />
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-raisin-black mb-4 text-center">
                {t('projects.technologies')}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="primary" size="md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {project.liveUrl && (
                <Button variant="primary" size="lg" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                    {t('projects.liveDemo')}
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="lg" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                    {t('projects.sourceCode')}
                  </a>
                </Button>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          {contentSections.map((section, index) => (
            <motion.div
              key={section.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <Card padding="lg" shadow="medium" className={section.bgClass}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-white shadow-soft`}>
                    <section.icon 
                      size={24} 
                      className={`text-${section.color}-600`}
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-2xl font-bold text-${section.color}-800 mb-4`}>
                      {section.title}
                    </h2>
                    <p className="text-lg text-eggplant leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;