import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'translation-app',
    title: {
      es: 'Aplicación de traducciones con IA',
      en: 'Translation App with AI'
    },
    description: {
      es: 'Aplicación de traducciones basada en escenas con integración de IA.',
      en: 'Translating app based on scenes integrating AI.'
    },
    longDescription: {
      es: {
        overview: `Desarrollé una aplicación de traducción contextual por escenas, integrando Mistral-7B vía Ollama, servicios de Text-to-Speech y Speech-to-Text.
    Implementé backend en Spring Boot con autenticación JWT y un frontend en Jetpack Compose (aprendido para el proyecto).
    Desplegué la solución en Azure sobre una VM Ubuntu, conectando y orquestando todos los servicios de IA y audio de extremo a extremo.`,
        implementation: `Usé Kotlin para el frontend con Jetpack Compose, y Java con Spring Boot para el backend. La autenticación se manejó con JWT y la comunicación con servicios de IA se hizo vía REST.`,
        learnings: `Aprendí a integrar modelos de lenguaje con interfaces móviles, a desplegar servicios en la nube y a manejar flujos de audio en tiempo real. El mayor reto fue coordinar los servicios de voz con la respuesta del modelo.`,
      },
      en: {
        overview: `Built a scene-based translation application integrating Mistral-7B via Ollama, Text-to-Speech, and Speech-to-Text services.
    Implemented a Spring Boot backend with JWT authentication and a Jetpack Compose frontend (learned for the project).
    Deployed on Azure using an Ubuntu VM, wiring and orchestrating all AI and audio services end-to-end.`,
        implementation: `Used Kotlin for the frontend with Jetpack Compose, and Java with Spring Boot for the backend. Authentication was handled with JWT and communication with AI services via REST.`,
        learnings: `I learned how to integrate language models with mobile interfaces, deploy services to the cloud, and manage real-time audio flows. The biggest challenge was coordinating voice services with model responses.`,
      }
    },
    image: '/src/assets/logo.jpg',
    images: [
      '/src/assets/logo.jpg',
      '/src/assets/screenshot1.jpg',
      '/src/assets/screenshot2.jpg'
    ],
    technologies: ['Jetpack Compose', 'AI', 'PostgreSQL', 'Kotlin', 'Spring Boot'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/miv986/habinext_frontend',
    featured: true
  },
  {
    id: 'secondhand-sale-app',
    title: {
      es: 'Aplicación de ventas de segunda mano',
      en: 'Second hand sales App'
    },
    description: {
      es: 'Una aplicación para venta de productos de segunda mano.',
      en: 'Second hand sales app.'
    },
    longDescription: {
      es: {
        overview: `Desarrollé una aplicación de traducción contextual por escenas, integrando Mistral-7B vía Ollama, servicios de Text-to-Speech y Speech-to-Text.
    Implementé backend en Spring Boot con autenticación JWT y un frontend en Jetpack Compose (aprendido para el proyecto).
    Desplegué la solución en Azure sobre una VM Ubuntu, conectando y orquestando todos los servicios de IA y audio de extremo a extremo.`,
        implementation: `Usé Kotlin para el frontend con Jetpack Compose, y Java con Spring Boot para el backend. La autenticación se manejó con JWT y la comunicación con servicios de IA se hizo vía REST.`,
        learnings: `Aprendí a integrar modelos de lenguaje con interfaces móviles, a desplegar servicios en la nube y a manejar flujos de audio en tiempo real. El mayor reto fue coordinar los servicios de voz con la respuesta del modelo.`,
      },
      en: {
        overview: `Built a scene-based translation application integrating Mistral-7B via Ollama, Text-to-Speech, and Speech-to-Text services.
    Implemented a Spring Boot backend with JWT authentication and a Jetpack Compose frontend (learned for the project).
    Deployed on Azure using an Ubuntu VM, wiring and orchestrating all AI and audio services end-to-end.`,
        implementation: `Used Kotlin for the frontend with Jetpack Compose, and Java with Spring Boot for the backend. Authentication was handled with JWT and communication with AI services via REST.`,
        learnings: `I learned how to integrate language models with mobile interfaces, deploy services to the cloud, and manage real-time audio flows. The biggest challenge was coordinating voice services with model responses.`,
      }
    },
    image: '/src/assets/simarropoplogo.jpeg',
    images: [
      '/src/assets/simarropoplogo.jpeg',
      '/src/assets/simarropoplogo.jpeg',
      '/src/assets/screenshot2.jpg'
    ],
    technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://example-tasks.com',
    githubUrl: 'https://github.com/username/task-management',
    featured: true
  },
  {
    id: 'real-estate-app',
    title: {
      es: 'Aplicación de compraventa y alquiler de inmuebles',
      en: 'Home buying, selling and rental app'
    },
    description: {
      es: 'Aplicación de compraventa y alquiler de inmuebles basada en ubicación',
      en: 'An interactive dashboard for weather data visualization.'
    },
    longDescription: {
      es: {
        overview: `Desarrollé una aplicación de traducción contextual por escenas, integrando Mistral-7B vía Ollama, servicios de Text-to-Speech y Speech-to-Text.
    Implementé backend en Spring Boot con autenticación JWT y un frontend en Jetpack Compose (aprendido para el proyecto).
    Desplegué la solución en Azure sobre una VM Ubuntu, conectando y orquestando todos los servicios de IA y audio de extremo a extremo.`,
        implementation: `Usé Kotlin para el frontend con Jetpack Compose, y Java con Spring Boot para el backend. La autenticación se manejó con JWT y la comunicación con servicios de IA se hizo vía REST.`,
        learnings: `Aprendí a integrar modelos de lenguaje con interfaces móviles, a desplegar servicios en la nube y a manejar flujos de audio en tiempo real. El mayor reto fue coordinar los servicios de voz con la respuesta del modelo.`,
      },
      en: {
        overview: `Built a scene-based translation application integrating Mistral-7B via Ollama, Text-to-Speech, and Speech-to-Text services.
    Implemented a Spring Boot backend with JWT authentication and a Jetpack Compose frontend (learned for the project).
    Deployed on Azure using an Ubuntu VM, wiring and orchestrating all AI and audio services end-to-end.`,
        implementation: `Used Kotlin for the frontend with Jetpack Compose, and Java with Spring Boot for the backend. Authentication was handled with JWT and communication with AI services via REST.`,
        learnings: `I learned how to integrate language models with mobile interfaces, deploy services to the cloud, and manage real-time audio flows. The biggest challenge was coordinating voice services with model responses.`,
      }
    },
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      '/src/assets/logo.jpg',
      '/src/assets/screenshot1.jpg',
      '/src/assets/screenshot2.jpg'
    ],
    technologies: ['React', 'D3.js', 'Chart.js', 'Weather API', 'Sass'],
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/miv986/habinext_frontend',
    featured: false
  }
];