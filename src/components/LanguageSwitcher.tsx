import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/70 backdrop-blur-sm border border-primary-200 hover:bg-white hover:border-primary-300 transition-all duration-200 text-primary-600 hover:text-primary-700"
      aria-label="Switch language"
    >
      <Globe size={18} />
      <span className="font-medium text-sm">
        {i18n.language === 'es' ? 'EN' : 'ES'}
      </span>
    </motion.button>
  );
};

export default LanguageSwitcher;