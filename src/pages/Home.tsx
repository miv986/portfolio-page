import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Sparkles, Code, Palette } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/ui/Button';
import FloatingElements from '../components/ui/FloatingElements';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const featuredProjects = projects.filter(p => p.featured);

  const getProjectsPath = () => {
    return i18n.language === 'es' ? '/proyectos' : '/projects';
  };

  const handleDownloadCV = () => {
    const cvUrl = i18n.language === 'es' ? '/portfolio-page/Miroslava Ivanova-CV-esp.pdf' : '/portfolio-page/Miroslava Ivanova-CV-eng.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = `CV-${i18n.language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative sm:max-h-screen lg:max-h-[48rem] bg-gradient-to-br from-lavender-web via-pale-purple to-lavender-web-2 overflow-hidden">
        <FloatingElements />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Greeting with animated text */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-2 text-primary-600"
                >
                  <Sparkles size={20} className="animate-pulse-soft" />
                  <span className="text-sm font-medium uppercase tracking-wider">
                    {i18n.language === 'es' ? 'Hola, soy' : 'Hello, I\'m'}
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl lg:text-6xl font-bold text-raisin-black leading-tight"
                >
                  Miroslava
                  <span className="block text-primary-600">Ivanova</span>
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-xl lg:text-2xl text-english-violet font-medium"
                >
                  {t('home.title')}
                </motion.h2>
              </div>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-lg text-eggplant leading-relaxed max-w-lg"
              >
                {t('home.bio')}
              </motion.p>

              {/* Skills highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200">
                  <Code size={16} className="text-primary-600" />
                  <span className="text-sm font-medium text-primary-700">Full Stack</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary-200">
                  <Palette size={16} className="text-secondary-600" />
                  <span className="text-sm font-medium text-secondary-700">UI/UX</span>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <Button
                  onClick={handleDownloadCV}
                  size="lg"
                  className="shadow-glow"
                >
                  <Download size={20} />
                  {t('home.downloadCV')}
                </Button>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 rounded-full opacity-20 blur-xl"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-large border-4 border-white/50 backdrop-blur-sm"
                >
                  <img
                    src="/portfolio-page/image.jpg"
                    alt="Miroslava Ivanova"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-raisin-black mb-6">
              {t('home.featuredProjects')}
            </h2>
            <p className="text-lg text-eggplant max-w-2xl mx-auto leading-relaxed">
              {t('home.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link to={getProjectsPath()}>
              <Button variant="outline" size="lg" className='bg-[#e7e6f7]'>
                {t('home.viewAllProjects')}
                <ArrowRight size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;