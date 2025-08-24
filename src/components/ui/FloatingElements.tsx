import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circle */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Medium floating circle */}
      <motion.div
        className="absolute top-1/3 -left-10 w-24 h-24 bg-gradient-to-br from-accent-200/40 to-primary-200/40 rounded-full blur-lg"
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Small floating circles */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-secondary-300/50 to-accent-300/50 rounded-full blur-md"
        animate={{
          y: [0, -12, 0],
          x: [0, 6, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-8 h-8 bg-primary-400/20 rotate-45 blur-sm"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default FloatingElements;