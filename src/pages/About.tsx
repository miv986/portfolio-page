import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { experiences, education, skills } from '../data/profile';

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'es' | 'en';
  const [show, setShow] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-50 py-12 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-700">
        {/* Aquí iría el contenido animado por secciones */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h1>
        </div>

        {/* Bio Section */}
        <div className={`bg-white rounded-lg shadow-md p-8 mb-8 ${show ? 'fade-in' : ''}`}
          style={show ? { animationDelay: '0.5s' } : {}}>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {t('about.bio')}
          </p>
          <div className="grid md:grid-cols-1 gap-8">
            <div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Working"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="flex items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('about.skills')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className={`bg-white rounded-lg shadow-md p-8 mb-8 ${show ? 'fade-in' : ''}`}
          style={show ? { animationDelay: '0.5s' } : {}}>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t('about.experience')}
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.position[currentLang]}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {exp.company} • {exp.period}
                </p>
                <p className="text-gray-600">
                  {exp.description[currentLang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className={`bg-white rounded-lg shadow-md p-8 mb-8 ${show ? 'fade-in' : ''}`}
          style={show ? { animationDelay: '0.5s' } : {}}>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t('about.education')}
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {edu.degree[currentLang]}
                </h3>
                <p className="text-green-600 font-medium mb-2">
                  {edu.institution} • {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;