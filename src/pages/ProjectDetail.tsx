import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Lightbulb, Code, Target, ChevronDown } from 'lucide-react';
import { projects } from '../data/projects';
import ImageCarousel from '../components/ui/ImageCarousel';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'es' | 'en';
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const project = projects.find(p => p.id === id);

  const getProjectsPath = () => {
    return i18n.language === 'es' ? '/proyectos' : '/projects';
  };

  const toggleSection = (key: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const splitIntoChunks = (text: string, maxChunks: number = 3): string[] => {
    const sentences = text.split(/\.\s+/).filter(s => s.trim().length > 15);
    const chunkSize = Math.ceil(sentences.length / maxChunks);
    const chunks: string[] = [];
    
    for (let i = 0; i < sentences.length; i += chunkSize) {
      chunks.push(sentences.slice(i, i + chunkSize).join('. '));
    }
    
    return chunks;
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

  const colorClasses = {
    primary: {
      icon: 'text-primary-600',
      title: 'text-primary-800',
      bullet: 'text-primary-500',
      border: 'border-primary-300',
    },
    secondary: {
      icon: 'text-secondary-600',
      title: 'text-secondary-800',
      bullet: 'text-secondary-500',
      border: 'border-secondary-300',
    },
    accent: {
      icon: 'text-accent-600',
      title: 'text-accent-800',
      bullet: 'text-accent-500',
      border: 'border-accent-300',
    },
  };

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
      <div className="max-w-5xl mx-auto mt-[2rem] px-4 sm:px-6 lg:px-8">
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
                <Button variant="primary" size="lg" >
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
                <Button variant="outline" size="lg" >
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
        <div className="space-y-4">
          {contentSections.map((section, index) => {
            const isExpanded = expandedSections.has(section.key);
            const contentChunks = splitIntoChunks(section.content, 3);
            const previewChunk = contentChunks[0];
            const remainingChunks = contentChunks.slice(1);
            
            return (
              <motion.div
                key={section.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card padding="md" shadow="medium" className={`${section.bgClass} cursor-pointer hover:shadow-lg transition-shadow`}>
                  <div
                    onClick={() => toggleSection(section.key)}
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`p-2 rounded-lg bg-white shadow-soft flex-shrink-0`}>
                        <section.icon
                          size={20}
                          className={colorClasses[section.color].icon}
                        />
                      </div>
                      <h2 className={`text-xl font-bold ${colorClasses[section.color].title}`}>
                        {section.title}
                      </h2>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown 
                        size={20} 
                        className={colorClasses[section.color].icon}
                      />
                    </motion.div>
                  </div>

                  {/* Preview - siempre visible */}
                  <div className="mt-4 pl-11">
                    <div className="text-sm text-eggplant leading-relaxed">
                      {previewChunk.split(/\.\s+/).slice(0, 2).map((sentence, idx) => (
                        <p key={idx} className="mb-2">
                          {sentence.trim()}{idx === 0 ? '.' : ''}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pl-11 space-y-4">
                          {/* Preview completo si no estaba completo */}
                          {previewChunk.split(/\.\s+/).length > 2 && (
                            <div className="text-sm text-eggplant leading-relaxed">
                              {previewChunk.split(/\.\s+/).slice(2).map((sentence, idx) => (
                                <p key={idx} className="mb-2">
                                  {sentence.trim()}.
                                </p>
                              ))}
                            </div>
                          )}

                          {/* Bloques adicionales */}
                          {remainingChunks.map((chunk, chunkIdx) => (
                            <motion.div
                              key={chunkIdx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: chunkIdx * 0.1 }}
                              className={`p-3 rounded-lg bg-white/50 border-l-2 ${colorClasses[section.color].border}`}
                            >
                              <ul className="space-y-1.5">
                                {chunk.split(/\.\s+/).filter(s => s.trim()).map((sentence, idx) => (
                                  <li key={idx} className="text-sm text-eggplant leading-relaxed flex items-start gap-2">
                                    <span className={`${colorClasses[section.color].bullet} mt-1.5 flex-shrink-0`}>▸</span>
                                    <span>{sentence.trim()}.</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;