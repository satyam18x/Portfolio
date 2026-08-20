// ============================================
// Portfolio Data — Satyam Haldkar
// ============================================

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  twitter?: string;
  location: string;
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

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  github: string;
  liveUrl?: string;
  image?: string;
  category: "fullstack" | "frontend" | "ai-ml" | "games";
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
  image?: string;
  description?: string;
}


// ---- Personal Info ----
export const personalInfo: PersonalInfo = {
  name: "Satyam Haldkar",
  role: "Full Stack Developer",
  tagline:
    "Building scalable web applications with modern technologies",
  email: "satyamhaldkar45@gmail.com",
  github: "https://github.com/satyam18x",
  linkedin: "https://www.linkedin.com/in/satyam-haldkar-b9b366310",
  twitter: "",
  location: "Jabalpur, Madhya Pradesh, India",
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
    liveUrl: "",
    image: "/datatrustx.png",
    category: "ai-ml",
  },
  {
    title: "Burn IT NxT",
    description:
      "A secure, advanced Next.js athlete-tracking, workout curriculum management, and custom video-learning portal tailored for Burn IT Out Fitness.",
    techStack: ["Next.js", "React", "Express.js", "Node.js", "MySQL", "JWT", "Bcrypt"],
    features: [
      "Advanced athlete progress tracking with analytics",
      "Curriculum and workout management",
      "Secure custom video portal",
      "Responsive and intuitive UI",
    ],
    github: "https://github.com/satyam18x/Burn-IT-NxT",
    liveUrl: "",
    image: "/burn-it-nxt.png",
    category: "fullstack",
  },
  {
    title: "Bulls & Cows",
    description:
      "A real-time offline multiplayer number guessing game built with React Native and TypeScript. Operates over local WiFi/hotspot via zero-config TCP server auto-discovery.",
    techStack: ["React Native", "TypeScript", "Node.js"],
    features: [
      "Real-time multiplayer over local WiFi / hotspot",
      "Zero-config TCP auto-discovery via mDNS",
      "Custom game engine & TCP server implementation",
      "Live guess history & offline gameplay",
    ],
    github: "https://github.com/satyam18x/Bulls-Cows",
    liveUrl: "",
    image: "/bulls-cows.jpeg",
    category: "games",
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
    liveUrl: "",
    image: "/shopez.png",
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
    title: "HackCrux",
    event: "National Level Hackathon — LNMIIT, Jaipur",
    date: "May 2025",
    image: "/achievements/hackcrux.png",
  },
  {
    title: "Code-Nakshatra II",
    event: "National Level Hackathon — Greater Noida",
    date: "May 2026",
    image: "/achievements/code-nakshatra.png",
  },
  {
    title: "Under Officer — National Cadet Corps (NCC)",
    event: "NCC 1 MP ARMD SQN",
    date: "Sep 2023 – Feb 2026",
    image: "/achievements/ncc.png",
  },
];


// ---- Navigation Links ----
export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

// ---- Stats ----
export const stats = [
  { label: "Projects Built", value: "4+" },
  { label: "CGPA", value: "8.20" },
  { label: "Hackathons", value: "3+" },
];

// ---- Typing Animation Roles ----
export const typingRoles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "React Developer",
  "TypeScript Enthusiast",
  "Problem Solver",
];
