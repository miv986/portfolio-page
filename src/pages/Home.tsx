import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Download, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SplitText from '../components/SplitText';


const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const featuredProjects = projects.filter(p => p.featured);

  const getProjectsPath = () => {
    return i18n.language === 'es' ? '/proyectos' : '/projects';
  };

  const handleDownloadCV = () => {
    // In a real application, you would have actual CV files
    const cvUrl = i18n.language === 'es' ? 'src/assets/Miroslava Ivanova-CV-esp.pdf' : 'src/assets/Miroslava Ivanova-CV-eng.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = `CV-${i18n.language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };



  return (


    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>

              <SplitText
                text="Miroslava Ivanova"
                className="text-5xl font-bold text-gray-900 mb-4"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />


              <h2 className="text-2xl text-blue-600 mb-6">
                {t('home.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('home.bio')}
              </p>
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Download size={20} />
                {t('home.downloadCV')}
              </button>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/src/assets/image.jpg"
                  alt="Juan Pérez"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('home.featuredProjects')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('home.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to={getProjectsPath()}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              {t('home.viewAllProjects')}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;