import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLocalizedPath = (path: string) => {
    if (i18n.language === 'es') {
      switch (path) {
        case '/projects': return '/proyectos';
        case '/about': return '/sobre-mi';
        case '/contact': return '/contacto';
        default: return path;
      }
    }
    return path;
  };

  const isActive = (path: string) => {
    const localizedPath = getLocalizedPath(path);
    return location.pathname === localizedPath;
  };

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'projects', path: '/projects' },
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-lavender-web shadow-soft"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-bold text-xl bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ key, path }) => (
              <Link
                key={key}
                to={getLocalizedPath(path)}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group"
              >
                <span
                  className={`relative z-10 ${
                    isActive(path)
                      ? 'text-primary-600'
                      : 'text-eggplant hover:text-primary-600'
                  }`}
                >
                  {t(`nav.${key}`)}
                </span>
                {isActive(path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary-50 border border-primary-200 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-eggplant hover:text-primary-600 hover:bg-primary-50 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-lavender-web">
                {navItems.map(({ key, path }, index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={getLocalizedPath(path)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                        isActive(path)
                          ? 'text-primary-600 bg-primary-50 border border-primary-200'
                          : 'text-eggplant hover:text-primary-600 hover:bg-primary-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t(`nav.${key}`)}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;