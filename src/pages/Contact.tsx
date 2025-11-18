import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useForm } from '@formspree/react'

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm('xrbjgnjj');

  useEffect(() => {
    if (state.succeeded) {
      // Reset form after successful submission
      const form = document.querySelector('form') as HTMLFormElement;
      if (form) {
        form.reset();
      }
      // Clean URL parameters
      if (window.location.search) {
        window.history.replaceState({}, '', window.location.pathname + window.location.hash);
      }
    }
  }, [state.succeeded]);



  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/miv986',
      color: 'text-gray-700 hover:text-primary-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/miroslavaivanovageorgieva/',
      color: 'text-blue-600 hover:text-blue-700',
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
            {t('contact.title')}
          </h1>
          <p className="text-xl text-eggplant max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card padding="lg" shadow="large">
              <h2 className="text-2xl font-bold text-raisin-black mb-6">
                {t('contact.send')}
              </h2>

              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-700 mb-2">
                    {t('contact.messageSent')}
                  </h3>
                  <p className="text-green-600">
                    {t('contact.messageSentDescription')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }} className="space-y-6" method='POST'>
                  {state.errors && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      <p>An error occurred. Please try again.</p>
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-eggplant mb-2">
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white/70 backdrop-blur-sm"
                      placeholder={t('contact.namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-eggplant mb-2">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white/70 backdrop-blur-sm"
                      placeholder={t('contact.emailPlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-eggplant mb-2">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white/70 backdrop-blur-sm resize-none"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    isLoading={state.submitting}
                    disabled={state.submitting}
                  >
                    <Send size={20} />
                    {state.submitting ? t('contact.sending') : t('contact.send')}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Social Links */}
            <Card padding="lg" shadow="medium">
              <h3 className="text-xl font-bold text-raisin-black mb-6">
                {t('contact.socialMedia')}
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl border-2 border-transparent hover:border-primary-200 transition-all duration-300 ${social.color} bg-white shadow-soft hover:shadow-medium`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Card padding="lg" shadow="medium" className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-soft" />
                  <div>
                    <p className="font-semibold text-green-800">{t('contact.available')}</p>
                    <p className="text-sm text-green-600">
                      {t('contact.accepting')}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;