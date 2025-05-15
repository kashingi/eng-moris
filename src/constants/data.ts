import { FigmaIcon, GithubIcon, CodeIcon, DatabaseIcon, ServerIcon, BrainCircuitIcon, BookIcon, PencilRulerIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react';
import type { IconType } from '../types';

export const personalInfo = {
  name: "Morris Kashingi",
  title: "Software Developer",
  email: "moriskashing74@gmail.com",
  phone: "+254790487504",
  location: "Mariakani, Kenya",
  description: "Highly skilled Software Developer with a Bachelor's degree in Computer Science and extensive experience in software development. Proficient in multiple programming languages and frameworks, including Laravel, Angular Ts, Node.js with Express, Bootstrap and Java Spring Boot. Known for creating user-centric solutions and collaborating with cross-functional teams to develop, test, and deploy scalable applications.",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/kashingi",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kashingi-morris-930a77234/",
      icon: LinkedinIcon,
    },
  ]
};

export const navigationLinks = [
  { label: "Home", path: "#home" },
  { label: "Projects", path: "#projects" },
  { label: "Skills", path: "#skills" },
  { label: "Experience", path: "#experience" },
  { label: "Testimonials", path: "#testimonials" },
  { label: "Contact", path: "#contact" },
];

export const skills = [
  {
    category: "Frontend",
    icon: CodeIcon,
    technologies: [
      { name: "Angular", level: 90 },
      { name: "React", level: 85 },
      { name: "Bootstrap", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript/TypeScript", level: 88 },
    ]
  },
  {
    category: "Backend",
    icon: ServerIcon,
    technologies: [
      { name: "Java Spring Boot", level: 90 },
      { name: "Laravel", level: 88 },
      { name: "Node.js/Express", level: 85 },
      { name: "PHP Laravel", level: 85 },
    ]
  },
  {
    category: "Mobile Development",
    icon: PhoneIcon,
    technologies: [
      { name: "Flutter/Dart", level: 85 },
      { name: "Swift", level: 80 },
      { name: "React Native", level: 75 },
    ]
  },
  {
    category: "Database",
    icon: DatabaseIcon,
    technologies: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 85 },
    ]
  },
  {
    category: "Tools & Platforms",
    icon: BrainCircuitIcon,
    technologies: [
      { name: "Git", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Swagger UI", level: 85 },
      { name: "Postman", level: 88 },
      { name: "Canva", level: 85 },
    ]
  }
];

export const projects = [
  {
    title: "Teller Automation System",
    category: "Banking",
    description: "Developed a bank solution to improve teller efficiency, reduce customer waiting time, and enhance access to banking services. Achieved 80% improvement in operational efficiency.",
    image: "https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg",
    technologies: ["Angular", "Java Spring Boot", "MySQL", "REST APIs"],
    link: "https://github.com/emtech-repo/Teller-Automation.git",
    featured: true
  },
  {
    title: "Kanisa App",
    category: "Church Management",
    description: "Developed a comprehensive church management system enabling efficient member management, financial tracking, and service organization. Includes reporting and analytics features.",
    image: "https://images.pexels.com/photos/236339/pexels-photo-236339.jpeg",
    technologies: ["Angular", "Spring Boot", "Bootstrap", "MySQL"],
    link: "https://caritas-kanisa.emtechhouse.co.ke:8907",
    featured: true
  },
  {
    title: "AniTrack",
    category: "Agriculture",
    description: "Animal tracking solution for pastoralist communities in Kenya, providing livestock management information and government oversight capabilities.",
    image: "https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg",
    technologies: ["React", "Node.js", "MongoDB", "GPS Integration"],
    link: "https://github.com/kashingi/AnimalTracking.git",
    featured: true
  },
  {
    title: "MSME Banking Solution",
    category: "Banking",
    description: "Developed banking services solution for ABSA bank's MSME clients, improving access to financial services for small businesses.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    technologies: ["Angular", "Java Spring Boot", "PostgreSQL", "REST APIs"],
    link: "https://ecosystem.emtechhouse.co.ke:4015",
    featured: true
  },
  {
    title: "Cafe Management System",
    category: "Hospitality",
    description: "A comprehensive cafe management system for streamlining operations, order management, and inventory control.",
    image: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg",
    technologies: ["Java Spring Boot", "Angular", "Bootstrap", "Angular Material"],
    link: "https://github.com/kashingi/CafeFrontend.git",
    featured: false
  },
  {
    title: "E-commerce Platform",
    category: "Retail",
    description: "Full-featured e-commerce platform with product management, shopping cart, and secure payment integration.",
    image: "https://images.pexels.com/photos/34577/pexels-photo.jpg",
    technologies: ["Java Spring Boot", "Angular", "Bootstrap", "Angular Material"],
    link: "https://github.com/kashingi/E-Frontend.git",
    featured: false
  },
  {
    title: "Article Hub",
    category: "Content Management",
    description: "A platform for creating, managing, and sharing articles with user authentication and rich text editing.",
    image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg",
    technologies: ["Node.js", "Express", "Angular", "Bootstrap", "Angular Material"],
    link: "https://github.com/kashingi/Article-Hub-Node.git",
    featured: false
  }
];

export const testimonials = [
  {
    name: "Fredrick Agesa Bulungu",
    role: "Operations Manager, Equity Bank KE",
    content: "Morris demonstrated exceptional skills in digital banking implementation and customer service. His technical expertise and ability to explain complex systems to customers made him an invaluable team member.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    name: "Susan Kamau",
    role: "Assistant Principal, PLP Academy",
    content: "Morris excelled as a software development trainer, effectively teaching complex concepts and inspiring students. His practical approach to teaching the MERN stack and integration of real-world applications like M-Pesa made the content highly relevant.",
    avatar: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg"
  }
];

export const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end development using Angular, React, Spring Boot, and Laravel with focus on scalable and maintainable solutions.",
    icon: CodeIcon
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile application development using Flutter/Dart and Swift.",
    icon: PhoneIcon
  },
  {
    title: "Technical Training",
    description: "Comprehensive software development training and mentorship in web technologies and MERN stack.",
    icon: BookIcon
  },
  {
    title: "Database Design",
    description: "Efficient database design and implementation using MySQL and MongoDB.",
    icon: DatabaseIcon
  },
  {
    title: "UI/UX Implementation",
    description: "Creating responsive and user-friendly interfaces using modern frameworks and design tools.",
    icon: PencilRulerIcon
  },
  {
    title: "Digital Banking Solutions",
    description: "Implementation and training for digital banking systems and financial technology solutions.",
    icon: ServerIcon
  }
];

export const experience = [
  {
    role: "Software Developer",
    company: "Emtech House",
    period: "2022 - Present",
    description: "Lead developer for multiple banking and financial technology solutions. Developed and maintained core banking systems, digital banking platforms, and financial management tools. Implemented secure payment integrations and real-time transaction processing systems.",
    technologies: ["Angular", "Java Spring Boot", "MySQL", "REST APIs", "PostgreSQL"]
  },
  {
    role: "Software Development Trainer",
    company: "PLP Academy",
    period: "2021 - 2022",
    description: "Conducted comprehensive software development training programs focusing on web technologies and mobile development. Created and delivered curriculum covering MERN stack, Flutter, and system integration with M-Pesa.",
    technologies: ["MERN Stack", "Flutter", "M-Pesa Integration", "Git", "Agile Methodologies"]
  },
  {
    role: "Digital Banking Officer",
    company: "Equity Bank",
    period: "2020 - 2021",
    description: "Implemented digital banking solutions and provided technical support for banking systems. Trained staff and customers on digital banking platforms and ensured smooth operation of banking software.",
    technologies: ["Core Banking Systems", "Digital Banking Platforms", "Customer Service", "Technical Support"]
  }
];