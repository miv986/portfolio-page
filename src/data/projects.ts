import { Project } from '../types';
const base = import.meta.env.VITE_BASE_PATH || '';


export const projects: Project[] = [
  {
    id: 'kids-playcenter',
    title: {
      es: 'Ludoteca - Sistema de Gestión de Reservas',
      en: 'Kids Playcenter - Booking Management System'
    },
    description: {
      es: 'Sistema completo de gestión de reservas para centro infantil con backend en Node.js/Express y frontend en Next.js.',
      en: 'Complete booking management system for children\'s center with Node.js/Express backend and Next.js frontend.'
    },
    longDescription: {
      es: {
        overview: `Desarrollé un sistema completo de gestión de reservas para un centro infantil, incluyendo reservas de ludoteca diaria y reservas de cumpleaños. 
        El backend se implementó con Node.js, Express y TypeScript, utilizando Prisma ORM para la gestión de base de datos PostgreSQL. 
        El frontend se desarrolló con Next.js 15, React 18 y Tailwind CSS, proporcionando una interfaz moderna y responsive. 
        El sistema incluye autenticación JWT con refresh tokens, roles de usuario (admin, usuario, niño), gestión de slots disponibles, 
        sistema de notificaciones por email con Resend, y automatización de tareas con node-cron para el cierre automático de reservas.`,

        implementation: `En el backend, implementé una arquitectura REST API con Express, utilizando middleware de seguridad como Helmet, 
        express-rate-limit para protección contra ataques, y express-validator junto con class-validator para validación de datos. 
        La autenticación se gestiona con JWT y refresh tokens almacenados en base de datos. 
        Prisma se utiliza como ORM con migraciones para el esquema de base de datos, incluyendo modelos para usuarios, reservas, slots, 
        paquetes de cumpleaños y notas de niños. 
        Se implementó un sistema de jobs con node-cron para el cierre automático de reservas. 
        En el frontend, Next.js 15 con App Router permite renderizado del lado del servidor y routing optimizado. 
        Se utilizaron Context API para gestión de estado global (autenticación, reservas, slots), 
        react-hot-toast para notificaciones, y componentes reutilizables con Tailwind CSS para un diseño consistente. 
        La aplicación incluye dashboards separados para administradores y usuarios, con funcionalidades de gestión de reservas, 
        calendario interactivo, y sistema de notas para comunicación entre padres y administradores.`,

        learnings: `Aprendí a desarrollar aplicaciones fullstack completas desde cero, coordinando backend y frontend de forma independiente. 
        Profundicé en Next.js 15 con App Router, aprendiendo sobre Server Components, routing dinámico y optimizaciones de rendimiento. 
        Reforcé conocimientos de TypeScript aplicándolo tanto en backend como frontend para type safety. 
        Aprendí a utilizar Prisma ORM para modelado de datos complejos con relaciones many-to-many, migraciones y validaciones. 
        Implementé seguridad avanzada con JWT refresh tokens, rate limiting y validación robusta de datos. 
        También aprendí a integrar servicios externos como Resend para emails transaccionales y a automatizar tareas con node-cron. 
        El mayor reto fue diseñar un sistema de slots y reservas que maneje correctamente la disponibilidad, 
        capacidad y estados de las reservas, asegurando integridad de datos en operaciones concurrentes.`
      },
      en: {
        overview: `Developed a complete booking management system for a children's center, including daily daycare bookings and birthday party reservations. 
        The backend was implemented with Node.js, Express and TypeScript, using Prisma ORM for PostgreSQL database management. 
        The frontend was built with Next.js 15, React 18 and Tailwind CSS, providing a modern and responsive interface. 
        The system includes JWT authentication with refresh tokens, user roles (admin, user, child), slot availability management, 
        email notifications with Resend, and task automation with node-cron for automatic booking closures.`,

        implementation: `On the backend, I implemented a REST API architecture with Express, using security middleware like Helmet, 
        express-rate-limit for attack protection, and express-validator along with class-validator for data validation. 
        Authentication is managed with JWT and refresh tokens stored in the database. 
        Prisma is used as ORM with migrations for the database schema, including models for users, bookings, slots, 
        birthday packages and child notes. 
        A job system with node-cron was implemented for automatic booking closures. 
        On the frontend, Next.js 15 with App Router enables server-side rendering and optimized routing. 
        Context API was used for global state management (authentication, bookings, slots), 
        react-hot-toast for notifications, and reusable components with Tailwind CSS for consistent design. 
        The application includes separate dashboards for administrators and users, with booking management features, 
        interactive calendar, and a note system for communication between parents and administrators.`,

        learnings: `I learned to develop complete fullstack applications from scratch, coordinating backend and frontend independently. 
        I deepened my knowledge of Next.js 15 with App Router, learning about Server Components, dynamic routing and performance optimizations. 
        I reinforced TypeScript knowledge applying it in both backend and frontend for type safety. 
        I learned to use Prisma ORM for complex data modeling with many-to-many relationships, migrations and validations. 
        I implemented advanced security with JWT refresh tokens, rate limiting and robust data validation. 
        I also learned to integrate external services like Resend for transactional emails and to automate tasks with node-cron. 
        The biggest challenge was designing a slot and booking system that correctly handles availability, 
        capacity and booking states, ensuring data integrity in concurrent operations.`
      }
    },
    image: `${base}/logo-ludoteca-n.png`,
    images: [
      `${base}/home.png`,
      `${base}/panel-user.png`,
      `${base}/panel-admin.png`,
      `${base}/reservas-daycare.png`,
      `${base}/reserva-ludoteca.png`,
      `${base}/reservas-birthday.png`,
      `${base}/detalles-reserva-ludo.png`,
      `${base}/tutores.png`
    ],
    technologies: [
      'TypeScript',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'JWT',
      'bcrypt',
      'Next.js',
      'React',
      'Tailwind CSS',
      'Helmet',
      'Resend',
      'CORS',
      'REST API',
      'Context API',
      'Git',
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/miv986/kids-playcenter-backend',
    featured: true
  },
  {
    id: 'translation-app',
    title: {
      es: 'Aplicación de traducciones con IA',
      en: 'Translation App with AI'
    },
    description: {
      es: 'Aplicación de traducciones contextual por escenas con integración de IA, voz y texto.',
      en: 'Scene-based translation app integrating AI with voice and text.'
    },
    longDescription: {
      es: {
        overview: `Desarrollé una aplicación de traducción contextual por escenas, integrando modelos de lenguaje como Mistral-7B y Gemma-2B vía Ollama, junto con servicios de Azure como Text-to-Speech y Speech-to-Text para la transcripción y síntesis de voz. 
        Implementé un backend en Spring Boot con autenticación JWT y un frontend en Kotlin con Jetpack Compose (aprendido específicamente para este proyecto). 
        También instalé FFmpeg en el servidor para realizar conversiones de audio de MP4 a WAV, garantizando compatibilidad entre los módulos. 
        El despliegue completo se hizo en Azure sobre una VM Ubuntu, orquestando los servicios de IA y audio de extremo a extremo.`,

        implementation: `En el frontend se usó Kotlin con Jetpack Compose, aprovechando Material 3 para un diseño visual moderno, creación de componentes reutilizables y una interfaz intuitiva. 
        La comunicación con el backend se realizó con Retrofit y MultipartBody.Part para el envío de archivos de audio, y se utilizó intensivamente el modelo asincrónico de corutinas (suspend) en Kotlin. 
        Para la entrada y salida de voz se integraron las APIs nativas de Android TextToSpeech y SpeechRecognizer. 
        En el backend, desarrollado en Spring Boot, se implementó autenticación y autorización con JWT y encriptación con BCrypt, además de controladores REST API conectados a PostgreSQL. 
        En el servidor, se utilizó FFmpeg para procesar audio y garantizar compatibilidad de formatos.`,

        learnings: `Aprendí a trabajar con Jetpack Compose desde cero, creando componentes reutilizables y empleando Material 3 para un diseño accesible. 
        Practiqué integración de servicios de IA como Ollama y técnicas de prompt engineering para lograr mejores resultados en traducción contextual. 
        También reforcé conceptos de seguridad con JWT, comunicación asíncrona con corrutinas, y procesamiento de audio en tiempo real con Retrofit y Multipart. 
        El mayor reto fue coordinar simultáneamente los servicios de voz con la respuesta del modelo y lograr una experiencia fluida en la aplicación móvil.`
      },
      en: {
        overview: `Developed a scene-based translation app integrating Mistral-7B and Gemma-2B via Ollama, along with Azure services such as Text-to-Speech and Speech-to-Text for transcription and synthesis. 
        The backend was implemented in Spring Boot with JWT authentication, and the frontend in Kotlin using Jetpack Compose (learned during the project). 
        FFmpeg was installed on the server to convert audio from MP4 to WAV, ensuring compatibility across modules. 
        The full solution was deployed on Azure over an Ubuntu VM, orchestrating all AI and audio services end-to-end.`,

        implementation: `On the frontend, Kotlin with Jetpack Compose was used, leveraging Material 3 for a modern UI, reusable components, and an intuitive interface. 
        Communication with the backend was handled via Retrofit and MultipartBody.Part for audio transfer, supported by Kotlin coroutines (suspend) for async operations. 
        For voice input/output, Android's native TextToSpeech and SpeechRecognizer APIs were integrated. 
        On the backend, built with Spring Boot, authentication and authorization were implemented using JWT with BCrypt, exposing REST APIs connected to PostgreSQL. 
        On the server, FFmpeg processed audio to ensure format compatibility.`,

        learnings: `I learned Jetpack Compose from scratch, building reusable components and applying Material 3 for accessible UI design. 
        I practiced integrating AI services like Ollama and prompt engineering to achieve better contextual translations. 
        I also strengthened knowledge of JWT security, asynchronous communication with coroutines, and real-time audio processing with Retrofit and Multipart. 
        The main challenge was orchestrating voice services and model responses to create a smooth mobile experience.`
      }
    },
    image: `${base}/logo.jpg`,
    images: [
      `${base}/logo.jpg`,
      `${base}/talkflow-scene.png`,
      `${base}/talkflow-chat.png`,
    ],
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Material 3',
      'Coroutines',
      'Retrofit',
      'Multipart',
      'Spring Boot',
      'JWT',
      'BCrypt',
      'REST API',
      'PostgreSQL',
      'Ollama',
      'Mistral-7B',
      'Gemma-2B',
      'Text-to-Speech',
      'Speech-to-Text',
      'FFmpeg',
      'Azure',
      'Ubuntu/Linux',
      'Git',
      'GitHub'
    ],
    liveUrl: 'https://www.dropbox.com/scl/fi/ntdcjoik2zhn8twdm8hw7/Talkflow_Demo.mp4?rlkey=hpn7ixcuahcamf6qeoqxgrkqh&st=zdkjdk7s&dl=0',
    githubUrl: 'https://github.com/miv986/proyecto_talkflow_frontend',
    featured: false
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
        overview: `Proyecto intermodular donde desarrollé una aplicación de compraventa de productos de segunda mano, inspirada en Wallapop y Vinted. 
        El frontend se implementó en Kotlin utilizando Fragments, gestión de ciclos de vida, navegación entre pantallas, y uso de RecyclerView y adapters para la lista de productos. 
        El backend se desarrolló con Spring Boot (sin autenticación JWT en esta versión), con APIs REST para la gestión de usuarios y productos. 
        Además, se realizaron módulos complementarios: una aplicación de escritorio en Qt C++ para la administración de usuarios y productos de la base de datos con operaciones CRUD, 
        y una aplicación en Java que realizaba copias de seguridad automáticas cada 24 horas y enviaba notificaciones por correo al administrador. 
        El despliegue de la solución se realizó en Azure sobre una VM Ubuntu.`,

        implementation: `Se diseñó una arquitectura cliente-servidor. En el lado del cliente, Kotlin permitió aplicar conceptos vistos en el ciclo de DAM como Fragments, manejo de ciclos de vida de actividades, Intents, manejo de vistas dinámicas y persistencia ligera con SharedPreferences. 
        En el lado del servidor se desarrollaron controladores y repositorios con Spring Boot, conectados a una base de datos relacional. 
        Para administración y mantenimiento se implementó una interfaz de escritorio en Qt y un servicio en Java que automatizaba tareas de backup.`,

        learnings: `Este proyecto me permitió integrar varias tecnologías en un mismo entorno intermodular. 
        Consolidé conocimientos de desarrollo Android con Kotlin (ciclos de vida, fragments, navegación, persistencia, UI dinámica), aprendí a estructurar un backend con Spring Boot y reforcé conceptos de programación en C++ y Java. 
        También adquirí experiencia práctica en despliegue de soluciones en la nube (Azure) y en la importancia de la automatización de tareas como copias de seguridad y notificaciones.`
      },
      en: {
        overview: `Intermodular project where I developed a second-hand marketplace application inspired by Wallapop and Vinted. 
        The frontend was implemented in Kotlin, using Fragments, activity lifecycle management, navigation, and RecyclerView with adapters for product lists. 
        The backend was built with Spring Boot (without JWT authentication in this version), providing REST APIs for user and product management. 
        Additional modules included a desktop application in Qt C++ for CRUD operations on users and products in the database, 
        and a Java application that automatically generated daily backups and sent email notifications to the administrator. 
        The solution was deployed on Azure over an Ubuntu VM.`,

        implementation: `The architecture followed a client-server model. 
        On the client side, Kotlin was used with core concepts such as Fragments, lifecycle management, Intents, dynamic views and lightweight persistence with SharedPreferences. 
        On the server side, controllers and repositories were implemented with Spring Boot, connected to a relational database. 
        For administration and maintenance, a desktop app in Qt and a Java service for automated backups were developed.`,

        learnings: `This project allowed me to integrate several technologies in a single intermodular solution. 
        I strengthened my knowledge of Android development with Kotlin (lifecycle, fragments, navigation, persistence, UI), learned to structure a backend with Spring Boot, and applied programming concepts in C++ and Java. 
        I also gained practical experience in cloud deployment (Azure) and learned the value of automation in tasks such as backups and notifications.`
      }
    },
    image: `${base}/simarropoplogo.jpeg`,
    images: [
      `${base}/simarropoplogo.jpeg`,
      `${base}/simarropop1.jpg`,
      `${base}/simarropop2.jpg`,
      `${base}/simarropop3.jpg`,
      `${base}/simarropop4.jpg`,
      `${base}/simarropop5.jpg`,
    ],
    technologies: ['Kotlin',
      'Android SDK',
      'Fragments',
      'RecyclerView',
      'Intents',
      'SharedPreferences',
      'Java',
      'C++',
      'Qt Framework',
      'Spring Boot',
      'REST API',
      'CRUD',
      'MySQL',
      'PostgreSQL',
      'SMTP/Email API',
      'Backup Automation',
      'Azure',
      'Ubuntu/Linux',
      'Git'],
    liveUrl: 'https://www.dropbox.com/scl/fi/xuk6unbhxh9www5exak4a/portfolio-page/simarropop_Demo.mp4?rlkey=egbp8k4glzg9kfighgx3ot8w7&st=06zvpcfy&dl=0',
    githubUrl: 'https://github.com/username/task-management',
    featured: true
  },
  {
    id: 'real-estate-app',
    title: {
      es: 'Aplicación de compraventa y alquiler de inmuebles',
      en: 'Real Estate Buying, Selling and Rental App'
    },
    description: {
      es: 'Aplicación inmobiliaria multiplataforma en desarrollo (web y móvil) con React Native y backend en Spring Boot.',
      en: 'Cross-platform real estate app in development (web & mobile) with React Native and Spring Boot backend.'
    },
    longDescription: {
      es: {
        overview: `Actualmente en desarrollo, esta aplicación inmobiliaria permite la compraventa y alquiler de inmuebles, integrando búsqueda basada en ubicación y funcionalidades de gestión de usuarios.
        El frontend se desarrolla con React Native y Expo, lo que permite su despliegue tanto en web como en aplicaciones móviles. 
        En el backend, implementado en Spring Boot, se han incorporado mecanismos de seguridad con Spring Security, autenticación con JWT y encriptación con BCrypt. 
        El proyecto se encuentra en fase de construcción, ampliando funcionalidades de filtrado, favoritos y chat entre usuarios.`,

        implementation: `En el frontend, se utiliza React Native con Expo, aprendiendo conceptos clave como componentes reutilizables, navegación y manejo de estado. 
        En el backend con Spring Boot, se ha configurado Spring Security, manejo de CORS, API REST y JWT para garantizar sesiones seguras. 
        La base de datos se encuentra en diseño, priorizando la escalabilidad y normalización para usuarios, propiedades y transacciones.`,

        learnings: `Estoy aprendiendo React Native desde cero, entendiendo cómo construir aplicaciones multiplataforma con un solo código base. 
        En la parte de backend, refuerzo el uso de Spring Security, JWT y BCrypt para la seguridad y buenas prácticas en diseño de APIs REST. 
        El mayor aprendizaje es coordinar el desarrollo simultáneo de frontend multiplataforma y backend seguro, integrando ambos de forma fluida.`
      },
      en: {
        overview: `Currently in development, this real estate app enables buying, selling, and renting properties, integrating location-based search and user management features. 
        The frontend is built with React Native and Expo, allowing deployment on both web and mobile platforms. 
        The backend, developed in Spring Boot, implements Spring Security, JWT authentication, and BCrypt encryption. 
        The project is under construction, expanding features like filtering, favorites, and user-to-user chat.`,

        implementation: `On the frontend, React Native with Expo is used, learning key concepts like reusable components, navigation, and state management. 
        On the backend, Spring Boot with Spring Security, CORS handling, REST APIs, and JWT was configured to ensure secure sessions. 
        The database is in design phase, focusing on scalability and normalization for users, properties, and transactions.`,

        learnings: `I am learning React Native from scratch, understanding how Fto build cross-platform apps with a single codebase. 
        On the backend, I am reinforcing Spring Security, JWT, and BCrypt for robust authentication and best practices in REST API design. 
        The biggest learning has been coordinating the development of a cross-platform frontend with a secure backend, and ensuring smooth integration between them.`
      }
    },
    image: `${base}/habinext-logo.jpg`,
    images: [`${base}/habinext-logo.jpg`],
    technologies: [
      'React Native',
      'Expo',
      'React',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'BCrypt',
      'REST API',
      'CORS',
      'PostgreSQL',
      'Git',
      'GitHub'
    ],
    liveUrl: "", // aún en desarrollo, no hay demo pública
    githubUrl: 'https://github.com/miv986/habinext_frontend',
    featured: false
  }

];