import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Wrench, 
  Database, 
  Palette,
  Briefcase,
  GraduationCap,
  User
} from 'lucide-react';
import { experiences, education } from '../data/profile';
import SkillCategory from '../components/ui/SkillCategory';
import Card from '../components/ui/Card';

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'es' | 'en';

  const skillCategories = [
    {
      title: i18n.language === 'es' ? 'Tecnologías' : 'Technologies',
      icon: Code2,
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'PHP', 'SQL', 'XML'],
      color: 'primary' as const,
    },
    {
      title: i18n.language === 'es' ? 'Frameworks' : 'Frameworks',
      icon: Layers,
      skills: ['React', 'React Native', 'Spring Boot', 'Jetpack Compose', 'Bootstrap', 'Tailwind CSS'],
      color: 'secondary' as const,
    },
    {
      title: i18n.language === 'es' ? 'Herramientas' : 'Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Postman', 'Maven', 'Gradle', 'IntelliJ IDEA', 'Android Studio', 'VS Code'],
      color: 'accent' as const,
    },
    {
      title: i18n.language === 'es' ? 'Bases de Datos' : 'Databases',
      icon: Database,
      skills: ['MySQL', 'SQLite', 'PostgreSQL', 'Room', 'Hibernate'],
      color: 'primary' as const,
    },
    {
      title: 'UX/UI',
      icon: Palette,
      skills: ['Figma', 'Material Design', 'Responsive Design', 'Prototyping', 'Wireframing', 'Accessibility'],
      color: 'secondary' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-web to-pale-purple py-12">
      <div className="max-w-6xl mx-auto mt-[2rem] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-raisin-black mb-6">
            {t('about.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full" />
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card padding="lg" shadow="medium">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
                    <User size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-800">
                    {i18n.language === 'es' ? 'Sobre Mí' : 'About Me'}
                  </h2>
                </div>
                <p className="text-lg text-eggplant leading-relaxed">
                  {t('about.bio')}
                </p>
              </div>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-64 h-64 rounded-2xl overflow-hidden shadow-large"
                >
                  <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Working"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-raisin-black mb-4">
              {t('about.skills')}
            </h2>
            <p className="text-lg text-eggplant">
              {i18n.language === 'es' 
                ? 'Tecnologías y herramientas que domino' 
                : 'Technologies and tools I work with'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                color={category.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Experience & Education */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card padding="lg" shadow="medium" className="h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-secondary-100 text-secondary-600 rounded-lg">
                  <Briefcase size={24} />
                </div>
                <h2 className="text-2xl font-bold text-secondary-800">
                  {t('about.experience')}
                </h2>
              </div>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="relative pl-6 border-l-2 border-secondary-200 last:border-l-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary-500 rounded-full" />
                    <h3 className="text-lg font-semibold text-raisin-black">
                      {exp.position[currentLang]}
                    </h3>
                    <p className="text-secondary-600 font-medium mb-2">
                      {exp.company} • {exp.period}
                    </p>
                    <p className="text-eggplant leading-relaxed">
                      {exp.description[currentLang]}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card padding="lg" shadow="medium" className="h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-accent-100 text-accent-600 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-2xl font-bold text-accent-800">
                  {t('about.education')}
                </h2>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    className="relative pl-6 border-l-2 border-accent-200 last:border-l-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-accent-500 rounded-full" />
                    <h3 className="text-lg font-semibold text-raisin-black">
                      {edu.degree[currentLang]}
                    </h3>
                    <p className="text-accent-600 font-medium">
                      {edu.institution} • {edu.period}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;