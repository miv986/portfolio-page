import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Wrench, 
  Database, 
  Palette,
  Briefcase,
  GraduationCap,
  User,
  ChevronDown
} from 'lucide-react';
import { experiences, education } from '../data/profile';
import SkillCategory from '../components/ui/SkillCategory';
import Card from '../components/ui/Card';

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'es' | 'en';
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [expandedEdu, setExpandedEdu] = useState<number | null>(null);

  const skillCategories = [
    {
      title: i18n.language === 'es' ? 'Lenguajes' : 'Languages',
      icon: Code2,
      skills: ['JavaScript', 'TypeScript', 'Java', 'Kotlin', 'PHP', 'HTML', 'CSS', 'SQL', 'XML'],
      color: 'primary' as const,
    },
    {
      title: i18n.language === 'es' ? 'Frameworks & Librerías' : 'Frameworks & Libraries',
      icon: Layers,
      skills: ['React', 'Next.js', 'React Native', 'Node.js', 'Express.js', 'Spring Boot', 'Jetpack Compose', 'Bootstrap', 'Tailwind CSS', 'Prisma', 'Hibernate'],
      color: 'secondary' as const,
    },
    {
      title: i18n.language === 'es' ? 'Herramientas' : 'Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Postman', 'Maven', 'Gradle', 'IntelliJ IDEA', 'Android Studio', 'VS Code', 'Swagger'],
      color: 'accent' as const,
    },
    {
      title: i18n.language === 'es' ? 'Bases de Datos' : 'Databases',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'SQLite', 'Room'],
      color: 'primary' as const,
    },
    {
      title: i18n.language === 'es' ? 'APIs & Seguridad' : 'APIs & Security',
      icon: Code2,
      skills: ['REST APIs', 'JWT Authentication', 'Helmet', 'Resend', 'Retrofit'],
      color: 'secondary' as const,
    },
    {
      title: 'UX/UI',
      icon: Palette,
      skills: ['Figma', 'Material Design', 'Responsive Design', 'Prototyping', 'Wireframing', 'Accessibility'],
      color: 'accent' as const,
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
          className="mb-12"
        >
          <Card padding="lg" shadow="medium">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
                  <User size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-800">
                  {i18n.language === 'es' ? 'Sobre Mí' : 'About Me'}
                </h2>
              </div>
              <p className="text-base text-eggplant leading-relaxed">
                {t('about.bio')}
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-raisin-black mb-3">
              {t('about.skills')}
            </h2>
            <p className="text-base text-eggplant">
              {i18n.language === 'es' 
                ? 'Tecnologías y herramientas que domino' 
                : 'Technologies and tools I work with'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card padding="lg" shadow="medium" className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-secondary-100 text-secondary-600 rounded-lg">
                  <Briefcase size={24} />
                </div>
                <h2 className="text-2xl font-bold text-secondary-800">
                  {t('about.experience')}
                </h2>
              </div>
              
              <div className="space-y-4">
                {experiences.map((exp, index) => {
                  const isExpanded = expandedExp === index;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      <div
                        onClick={() => setExpandedExp(isExpanded ? null : index)}
                        className="cursor-pointer"
                      >
                        <Card 
                          padding="md" 
                          shadow="soft" 
                          className="bg-gradient-to-br from-secondary-50 to-secondary-100 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-secondary-500 rounded-full" />
                                <h3 className="text-base font-semibold text-raisin-black">
                                  {exp.position[currentLang]}
                                </h3>
                              </div>
                              <p className="text-sm text-secondary-600 font-medium mb-2">
                                {exp.company} • {exp.period}
                              </p>
                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-sm text-eggplant leading-relaxed overflow-hidden"
                                  >
                                    {exp.description[currentLang]}
                                  </motion.p>
                                )}
                              </AnimatePresence>
                            </div>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0"
                            >
                              <ChevronDown 
                                size={18} 
                                className="text-secondary-600"
                              />
                            </motion.div>
                          </div>
                        </Card>
                      </div>
                    </motion.div>
                  );
                })}
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
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent-100 text-accent-600 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-2xl font-bold text-accent-800">
                  {t('about.education')}
                </h2>
              </div>
              
              <div className="space-y-4">
                {education.map((edu, index) => {
                  const isExpanded = expandedEdu === index;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    >
                      <div
                        onClick={() => setExpandedEdu(isExpanded ? null : index)}
                        className="cursor-pointer"
                      >
                        <Card 
                          padding="md" 
                          shadow="soft" 
                          className="bg-gradient-to-br from-accent-50 to-accent-100 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                                <h3 className="text-base font-semibold text-raisin-black">
                                  {edu.degree[currentLang]}
                                </h3>
                              </div>
                              <p className="text-sm text-accent-600 font-medium">
                                {edu.institution} • {edu.period}
                              </p>
                            </div>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0"
                            >
                              <ChevronDown 
                                size={18} 
                                className="text-accent-600"
                              />
                            </motion.div>
                          </div>
                        </Card>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;