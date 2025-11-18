import { Experience, Education } from '../types';

export const experiences: Experience[] = [
  {
    company: 'Freelance',
    position: {
      es: 'Desarrolladora Fullstack Autónoma',
      en: 'Fullstack Freelance Developer'
    },
    period: '06/2025 - Present',
    description: {
      es: 'Desarrollo fullstack de aplicaciones web completas, incluyendo backend con Node.js, Express y Prisma, y frontend con Next.js y React.',
      en: 'Fullstack development of complete web applications, including backend with Node.js, Express and Prisma, and frontend with Next.js and React.'
    }
  },
  {
    company: 'Pawify.org',
    position: {
      es: 'Desarrolladora Junior Frontend',
      en: 'Frontend Junior Developer'
    },
    period: '07/2025 - Present',
    description: {
      es: 'Desarrollo y refactorizo la web de Pawify.es utilizando React.',
      en: 'Develop and refactor Pawify.es web using React.'
    }
  },
  {
    company: 'Innovant',
    position: {
      es: 'Desarrolladora Junior Frontend',
      en: 'Frontend Junior Developer'
    },
    period: '04/2025 - 07/2025',
    description: {
      es: 'Desarrollé y refactoricé aplicaciones web utilizando PHP y JavaScript para optimización y mejor rendimiento.',
      en: 'Developed and refactored web applications using PHP and JavaScript to optimize performance and efficiency.'
    }
  }
];

export const education: Education[] = [
  {
    institution: 'Dr.Luís Simarro',
    degree: {
      es: 'Desarrollo de Aplicaciones Multiplataforma',
      en: 'Multiplatform Application Development'
    },
    period: '2023 - 2025'
  }
];

export const skills = [
  'Java', 'Kotlin', 'PHP', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS', 'XML',
  'Spring', 'Spring Boot', 'Hibernate', 'Jetpack Compose', 'MVC', 'jQuery',
  'React', 'React Native', 'Next.js', 'Bootstrap', 'Retrofit', 'Room',
  'Node.js', 'Express.js', 'body-parser', 'Prisma',
  'MySQL', 'SQLite', 'PostgreSQL',
  'Git', 'GitHub', 'Postman', 'Maven', 'Gradle',
  'IntelliJ IDEA', 'Android Studio', 'VS Code',
  'REST APIs', 'API REST', 'JWT Authentication', 'Swagger', 'JSON',
  'Material Design', 'Jetpack Compose UI', 'Responsive Design', 'Figma (Prototypes)',
  'Tailwind CSS', 'Helmet', 'Resend'
];
