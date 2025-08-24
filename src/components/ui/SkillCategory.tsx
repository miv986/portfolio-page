import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import Badge from './Badge';
import Card from './Card';

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: 'primary' | 'secondary' | 'accent';
  delay?: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  icon: Icon,
  skills,
  color,
  delay = 0
}) => {
  const colorClasses = {
    primary: {
      icon: 'text-primary-600 bg-primary-100',
      title: 'text-primary-800',
      badge: 'primary' as const,
    },
    secondary: {
      icon: 'text-secondary-600 bg-secondary-100',
      title: 'text-secondary-800',
      badge: 'secondary' as const,
    },
    accent: {
      icon: 'text-accent-600 bg-accent-100',
      title: 'text-accent-800',
      badge: 'accent' as const,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg ${colorClasses[color].icon}`}>
            <Icon size={20} />
          </div>
          <h3 className={`text-lg font-semibold ${colorClasses[color].title}`}>
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge variant={colorClasses[color].badge} size="sm">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default SkillCategory;