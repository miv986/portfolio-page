import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'soft' | 'medium' | 'large';
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  padding = 'md',
  shadow = 'soft'
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const shadowClasses = {
    soft: 'shadow-soft',
    medium: 'shadow-medium',
    large: 'shadow-large',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -5, boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.15)' } : {}}
      className={clsx(
        'bg-white rounded-xl border border-lavender-web transition-all duration-300',
        paddingClasses[padding],
        shadowClasses[shadow],
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;