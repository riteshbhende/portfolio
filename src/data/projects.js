export const projectsCategories = ["All", "Java & Spring Boot", "Full Stack", "Enterprise & CMS"];

export const projectsData = [
  {
    id: 1,
    projectNumber: "PROJECT 01",
    title: "Alumni Management System",
    subtitle: "Spring Boot & AI-Powered Mentorship Platform",
    category: "Java & Spring Boot",
    iconType: "users",
    iconGradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
    description: "Developed a full-stack alumni management platform for mentorship, referrals, job postings, and event management to enhance student-alumni collaboration with role-based access control and AI matching.",
    highlights: [
      "Implemented secure role-based authentication using Spring Security and REST APIs for efficient user access management.",
      "Built scalable modules like job applications, mentorship sessions, notifications, and real-time chat using Spring Boot, Hibernate, and JPA.",
      "Integrated an AI-powered mentor and career recommendation system using LLMs and RAG to retrieve relevant alumni profiles, skills, and career information for personalized recommendations."
    ],
    tags: ["Spring Boot", "React.js", "REST APIs", "MySQL", "LLMs", "RAG", "Hibernate", "JPA"],
    github: "https://github.com/riteshbhende/Alumini-Management-System",
    live: "https://github.com/riteshbhende/Alumini-Management-System"
  },
  {
    id: 2,
    projectNumber: "PROJECT 02",
    title: "Smart Grocery Store",
    subtitle: "Kirana Store Inventory & Digital Udhar Khata",
    category: "Java & Spring Boot",
    iconType: "shopping-bag",
    iconGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    description: "Developed a full-stack grocery management platform for inventory tracking, order processing, billing, and customer management for kirana stores with transactional credit handling.",
    highlights: [
      "Built a Digital Udhar Khata system to manage customer credit limits, pending dues, and payment history with strict transactional data handling.",
      "Implemented an automated expiry tracking system using Spring Scheduler to optimize inventory and reduce product wastage.",
      "Integrated Redis caching, JWT authentication, and Docker containerization to improve application performance, security, and scalability."
    ],
    tags: ["React.js", "Spring Boot", "JWT", "MySQL", "Redis", "Docker", "Spring Scheduler"],
    github: "https://github.com/riteshbhende",
    live: "https://github.com/riteshbhende"
  },
  {
    id: 3,
    projectNumber: "PROJECT 03",
    title: "Corporate Website & Admin CMS",
    subtitle: "NIRA Industries Management System",
    category: "Enterprise & CMS",
    iconType: "file-text",
    iconGradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    description: "Redesigned the corporate website into a responsive web application featuring a secure Admin Dashboard, real-time Firebase content storage, and automated email processing.",
    highlights: [
      "Redesigned the corporate website into a responsive web application using React.js, Tailwind CSS, and Firebase.",
      "Developed an Admin Dashboard with secure authentication and role-based access to manage products, banners, images, and website content.",
      "Implemented input validation, API rate limiting, CORS, centralized exception handling, and password encryption, deployed on Vercel."
    ],
    tags: ["React.js", "Tailwind CSS", "Firebase", "Admin CMS", "REST APIs", "Vercel"],
    github: "https://github.com/riteshbhende",
    live: "https://github.com/riteshbhende"
  },
  {
    id: 4,
    projectNumber: "PROJECT 04",
    title: "Cricket Scorekeeper & Live Sync",
    subtitle: "Real-Time Scoring & Live Sync Dashboard",
    category: "Full Stack",
    iconType: "trophy",
    iconGradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    description: "Real-time cricket scoring system for local and tournament matches with ball-by-ball scoring, player stats, CRR, and instant WebSocket broadcasting.",
    highlights: [
      "Live scoring dashboard with ball-by-ball tracking, wickets, extras, CRR, partnership stats, and projected score calculation.",
      "Implemented secure backend services using Spring Boot, REST APIs, and JWT-based authentication for match and tournament organizers.",
      "Integrated WebSocket for instant score synchronization to spectator screens."
    ],
    tags: ["React.js", "Spring Boot", "WebSocket", "MySQL", "JWT", "Tailwind CSS"],
    github: "https://github.com/riteshbhende/cricket-app-backend",
    live: "https://github.com/riteshbhende/cricket-app-frontend"
  }
];
