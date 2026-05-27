// ============================================
// Portfolio Data — Satyam Haldkar
// ============================================

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  bio: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  points: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  grade: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  github: string;
  category: "fullstack" | "frontend" | "ai-ml";
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export interface Achievement {
  title: string;
  event: string;
  date: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

// ---- Personal Info ----
export const personalInfo: PersonalInfo = {
  name: "Satyam Haldkar",
  role: "Full Stack Developer",
  tagline:
    "Building scalable web applications with modern technologies",
  email: "satyamhaldkar45@gmail.com",
  phone: "+91 7879970233",
  github: "https://github.com/satyam18x",
  linkedin: "https://www.linkedin.com/in/satyam-haldkar-b9b366310",
  bio: "Computer Science undergraduate with hands-on experience in full-stack development using TypeScript and the MERN stack. Skilled in building scalable web applications, designing responsive user interfaces, and developing robust backend services with seamless integration.",
};

// ---- Experience ----
export const experiences: Experience[] = [
  {
    company: "Mind8 Solutions",
    role: "Full Stack Developer Intern",
    duration: "Mar 2026 – Present",
    location: "Jabalpur",
    type: "On-site",
    points: [
      "Built and deployed full-stack applications using the MERN stack.",
      "Developed REST APIs, integrated databases, and optimized performance.",
      "Collaborated to deliver scalable, production-ready solutions.",
    ],
  },
];

// ---- Education ----
export const education: Education[] = [
  {
    institution: "Baderia Global Institute of Engineering",
    degree: "B.Tech — Computer Science & Engineering",
    year: "2023 – 2027",
    grade: "CGPA: 8.20",
  },
  {
    institution: "Pt L.S Jha Govt. Model Excellence School",
    degree: "Class 12th",
    year: "2023",
    grade: "81.2%",
  },
  {
    institution: "Pt L.S Jha Govt. Model Excellence School",
    degree: "Class 10th",
    year: "2021",
    grade: "94%",
  },
];

// ---- Projects ----
export const projects: Project[] = [
  {
    title: "DataTrustX-AI",
    description:
      "A synthetic data marketplace with a responsive React frontend integrated with a FastAPI backend. Handles Python-based ML models and data validation for secure data processing.",
    techStack: ["React", "Tailwind CSS", "FastAPI", "Python", "ML Models", "SQLite"],
    features: [
      "Synthetic data generation & marketplace",
      "Python-based ML model integration",
      "Secure data validation pipeline",
      "Responsive React frontend",
    ],
    github: "https://github.com/satyam18x/DataTrustX-AI-",
    category: "ai-ml",
  },
  {
    title: "Burn IT NxT",
    description:
      "A secure, advanced Next.js athlete-tracking, workout curriculum management, and custom video-learning portal tailored for Burn IT Out Fitness.",
    techStack: ["Next.js", "React", "Express.js", "Node.js", "MySQL", "JWT", "Bcrypt","pure vanilla CSS"],
    features: [
      "Advanced athlete progress tracking with analytics",
      "Curriculum and workout management",
      "Secure custom video portal",
      "Responsive and intuitive UI",
    ],
    github: "https://github.com/satyam18x/Burn-IT-NxT",
    category: "fullstack",
  },
  {
    title: "ShopEZ",
    description:
      "A full-stack e-commerce platform with product management, authentication, and admin features using the MERN stack with efficient state management.",
    techStack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "Product management & admin panel",
      "User authentication with JWT",
      "Shopping cart & checkout",
      "Efficient state management",
    ],
    github: "https://github.com/satyam18x/ShopEZ-E-commerce-Application",
    category: "fullstack",
  },
  

];

// ---- Skills ----
export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "SiReact", category: "frontend" },
  { name: "Next.js", icon: "SiNextdotjs", category: "frontend" },
  { name: "TypeScript", icon: "SiTypescript", category: "frontend" },
  { name: "JavaScript", icon: "SiJavascript", category: "frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "frontend" },
  { name: "Redux", icon: "SiRedux", category: "frontend" },
  { name: "HTML5", icon: "SiHtml5", category: "frontend" },
  { name: "CSS3", icon: "SiCss", category: "frontend" },
  // Backend
  { name: "Node.js", icon: "SiNodedotjs", category: "backend" },
  { name: "Express.js", icon: "SiExpress", category: "backend" },
  { name: "FastAPI", icon: "SiFastapi", category: "backend" },
  { name: "Python", icon: "SiPython", category: "backend" },
  { name: "C++", icon: "SiCplusplus", category: "backend" },
  // Database
  { name: "MongoDB", icon: "SiMongodb", category: "database" },
  { name: "SQLite", icon: "SiSqlite", category: "database" },
  // Tools
  { name: "Git", icon: "SiGit", category: "tools" },
  { name: "GitHub", icon: "SiGithub", category: "tools" },
  { name: "Docker", icon: "SiDocker", category: "tools" },
  { name: "Postman", icon: "SiPostman", category: "tools" },
  { name: "Vite", icon: "SiVite", category: "tools" },
  { name: "Streamlit", icon: "SiStreamlit", category: "tools" },
];

// ---- Achievements ----
export const achievements: Achievement[] = [
  {
    title: "Under Officer — National Cadet Corps (NCC)",
    event: "NCC",
    date: "Sep 2023 – Feb 2026",
  },
  {
    title: "Code-Nakshatra II",
    event: "National Level Hackathon — Greater Noida",
    date: "May 2026",
  },
  {
    title: "HackCrux",
    event: "National Level Hackathon — LNMIIT, Jaipur",
    date: "May 2025",
  },
];

// ---- Certifications ----
export const certifications: Certification[] = [
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Apr 2026",
  },
  {
    title: "Experimental Learning - MERN",
    issuer: "FutureSkills Prime",
    date: "Mar 2026",
  },
  {
    title: "Pre-Placement Training (3P)",
    issuer: "Titans Learning Pvt. Ltd.",
    date: "Feb 2026",
  },
  {
    title: "AI Foundations Associate",
    issuer: "Oracle",
    date: "Oct 2025",
  },
  {
    title: "AIML Virtual Internship",
    issuer: "EduSkills Foundation",
    date: "Jul 2024",
  },
];

// ---- Navigation Links ----
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// ---- Stats ----
export const stats = [
  { label: "Projects Built", value: "3+" },
  { label: "Certifications", value: "5" },
  { label: "CGPA", value: "8.20" },
  { label: "Hackathons", value: "2" },
];

// ---- Typing Animation Roles ----
export const typingRoles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "React Developer",
  "TypeScript Enthusiast",
  "Problem Solver",
];
