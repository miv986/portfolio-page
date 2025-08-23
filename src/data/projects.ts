import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'translation-app',
    title: {
      es: 'Aplicación de traducciones con IA',
      en: 'E-commerce Platform'
    },
    description: {
      es: 'Aplicación de traducciones con integración de inteligencia artificial y servicios de Speech-To-Text/Text-To-Speech .',
      en: 'A complete e-commerce platform with inventory management and payments.'
    },
    longDescription: {

      "es": "Desarrollé una aplicación de traducción contextual por escenas, integrando Mistral-7B vía Ollama, servicios de Text-to-Speech y Speech-to-Text. Implementé backend en Spring Boot con autenticación JWT y un frontend en Jetpack Compose (aprendido para el proyecto). Desplegué la solución en Azure sobre una VM Ubuntu, conectando y orquestando todos los servicios de IA y audio de extremo a extremo.",
      "en": "Built a scene-based translation application integrating Mistral-7B via Ollama, Text-to-Speech, and Speech-to-Text services. Implemented a Spring Boot backend with JWT authentication and a Jetpack Compose frontend (learned for the project). Deployed on Azure using an Ubuntu VM, wiring and orchestrating all AI and audio services end-to-end.",

    },
    image: '/src/assets/logo-removebg-preview (1).png',
    technologies: ['Jetpack Compose', 'AI', 'PostgreSQL', 'Kotlin', 'Spring Boot'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/miv986/habinext_frontend',
    featured: true
  },
  {
    id: 'secondhand-sale-app',
    title: {
      es: 'Aplicación de ventas de segunda mano',
      en: 'Task Management App'
    },
    description: {
      es: 'Una aplicación colaborativa para gestión de tareas con tiempo real.',
      en: 'A collaborative task management application with real-time features.'
    },
    longDescription: {
      es: 'Una aplicación web colaborativa que permite a los equipos gestionar proyectos y tareas en tiempo real. Incluye funcionalidades como asignación de tareas, seguimiento de progreso, notificaciones en tiempo real, y reportes detallados. Utiliza WebSockets para actualizaciones instantáneas.',
      en: 'A collaborative web application that allows teams to manage projects and tasks in real-time. It includes features like task assignment, progress tracking, real-time notifications, and detailed reports. Uses WebSockets for instant updates.'
    },
    image: '/src/assets/simarropoplogo.jpeg',
    technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://example-tasks.com',
    githubUrl: 'https://github.com/username/task-management',
    featured: true
  },
  {
    id: 'weather-dashboard',
    title: {
      es: 'Dashboard del Clima',
      en: 'Weather Dashboard'
    },
    description: {
      es: 'Un dashboard interactivo para visualización de datos meteorológicos.',
      en: 'An interactive dashboard for weather data visualization.'
    },
    longDescription: {
      es: 'Un dashboard completo que muestra datos meteorológicos en tiempo real con gráficos interactivos, mapas, y predicciones. Integra múltiples APIs meteorológicas y presenta la información de manera clara y atractiva con animaciones fluidas.',
      en: 'A complete dashboard that displays real-time weather data with interactive charts, maps, and forecasts. It integrates multiple weather APIs and presents information clearly and attractively with smooth animations.'
    },
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'D3.js', 'Chart.js', 'Weather API', 'Sass'],
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/username/weather-dashboard',
    featured: false
  },
  {
    id: 'weather-dashboard',
    title: {
      es: 'Dashboard del Clima',
      en: 'Weather Dashboard'
    },
    description: {
      es: 'Un dashboard interactivo para visualización de datos meteorológicos.',
      en: 'An interactive dashboard for weather data visualization.'
    },
    longDescription: {
      es: 'Un dashboard completo que muestra datos meteorológicos en tiempo real con gráficos interactivos, mapas, y predicciones. Integra múltiples APIs meteorológicas y presenta la información de manera clara y atractiva con animaciones fluidas.',
      en: 'A complete dashboard that displays real-time weather data with interactive charts, maps, and forecasts. It integrates multiple weather APIs and presents information clearly and attractively with smooth animations.'
    },
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'D3.js', 'Chart.js', 'Weather API', 'Sass'],
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/username/weather-dashboard',
    featured: false
  }
];