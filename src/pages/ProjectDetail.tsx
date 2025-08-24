import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import motion from 'framer-motion';

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
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Project not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to={getProjectsPath()}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft size={20} />
          {t('projects.backToProjects')}
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title[currentLang]}
              className="w-full h-full object-cover"
            />
          </div>
          {project.images && project.images.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {project.images.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`${project.title[currentLang]} - ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-sm"
                />
              ))}
            </div>
          )}


          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {project.title[currentLang]}
            </h1>

            <div className="space-y-6 text-gray-700 mb-4">
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{t('projects.overview')}</h2>
                <p className="text-base leading-relaxed">{project.longDescription[currentLang].overview}</p>
              </section>
              <hr className="my-4 border-gray-300" />

              <section className='bg-gray-50 p-4 rounded-lg'>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{t('projects.implementation')}</h2>
                <p className="text-base leading-relaxed">{project.longDescription[currentLang].implementation}</p>
              </section>
              <hr className="my-4 border-gray-300" />

              <section className='bg-gray-50 p-4 rounded-lg'>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{t('projects.learnings')}</h2>
                <p className="text-base leading-relaxed">{project.longDescription[currentLang].learnings}</p>
              </section>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('projects.technologies')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink size={20} />
                  {t('projects.liveDemo')}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Github size={20} />
                  {t('projects.sourceCode')}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;