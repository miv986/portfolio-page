import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const { i18n } = useTranslation();

  const getLocalizedRoutes = () => {
    if (i18n.language === 'es') {
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/proyecto/:id" element={<ProjectDetail />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/projects" element={<Navigate to="/proyectos" replace />} />
          <Route path="/project/:id" element={<Navigate to="/proyectos" replace />} />
          <Route path="/about" element={<Navigate to="/sobre-mi" replace />} />
          <Route path="/contact" element={<Navigate to="/contacto" replace />} />
        </Routes>
      );
    } else {
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/proyectos" element={<Navigate to="/projects" replace />} />
          <Route path="/proyecto/:id" element={<Navigate to="/projects" replace />} />
          <Route path="/sobre-mi" element={<Navigate to="/about" replace />} />
          <Route path="/contacto" element={<Navigate to="/contact" replace />} />
        </Routes>
      );
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>{getLocalizedRoutes()}</main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
