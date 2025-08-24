import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Filter, Grid, List } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get all unique technologies
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  // Filter projects based on selected technology
  const filteredProjects = selectedTech
    ? projects.filter(project => project.technologies.includes(selectedTech))
    : projects;

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-web to-pale-purple py-12">
      <div className="max-w-6xl mx-auto mt-[2rem] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-raisin-black mb-6">
            {t('projects.title')}
          </h1>
          <p className="text-lg text-eggplant max-w-2xl mx-auto leading-relaxed">
            {t('home.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Filters and View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-white/50">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Technology Filter */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Filter size={18} className="text-primary-600" />
                  <span className="font-medium text-primary-800">
                    {t('projects.technologies')}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedTech === null ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setSelectedTech(null)}
                  >
                    All
                  </Button>
                  {allTechnologies.map((tech) => (
                    <Button
                      key={tech}
                      variant={selectedTech === tech ? 'primary' : 'ghost'}
                      size="sm"
                      onClick={() => setSelectedTech(tech)}
                    >
                      {tech}
                    </Button>
                  ))}
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-soft">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-primary-600 text-white'
                      : 'text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list'
                      ? 'bg-primary-600 text-white'
                      : 'text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 pt-4 border-t border-primary-100">
              <p className="text-sm text-eggplant">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                {selectedTech && (
                  <>
                    {' '}with{' '}
                    <Badge variant="primary" size="sm">
                      {selectedTech}
                    </Badge>
                  </>
                )}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div
          layout
          className={
            viewMode === 'grid'
              ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-6'
          }
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={viewMode === 'list' ? 'max-w-4xl mx-auto' : ''}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-raisin-black mb-2">
              No projects found
            </h3>
            <p className="text-eggplant mb-6">
              Try adjusting your filters or browse all projects.
            </p>
            <Button onClick={() => setSelectedTech(null)}>
              Show All Projects
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;