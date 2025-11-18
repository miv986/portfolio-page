import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-web to-pale-purple flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-raisin-black mb-4">
          Page Not Found
        </h2>
        <p className="text-eggplant mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            <Home size={20} />
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
