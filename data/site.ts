export const siteConfig = {
  name: "Uday Pundir",
  role: "Full Stack Developer | React, Next.js, Supabase",
  email: "udayr6588@gmail.com",
  phone: "+91 9761344501",
  location: "Greater Noida, UP",
  linkedin: "https://linkedin.com/in/udaypundir16",
  github: "https://github.com/udaypundir16",
  education:
    "B.Tech in Computer Science & Engineering (2024-2028), Galgotias College of Engineering & Technology",
};

export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export type SocialLink = {
  label: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/udaypundir16" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/udaypundir16" },
  { label: "LeetCode", href: "https://leetcode.com/u/udaypundir16" },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/udaypundir16",
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "SettleIn",
    description:
      "A student accommodation and hostel/PG finder platform built to help students discover suitable stays with a smooth search experience.",
    stack: ["MERN", "React", "Database Integration"],
    features: [
      "Student-focused platform",
      "Accommodation discovery",
      "Real-world usability",
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
    featured: true,
  },
  {
    title: "Agrovision",
    description:
      "A crop prediction and recommendation app created during SIH 2025 that uses datasets to estimate crop yield and support better agricultural decisions.",
    stack: ["React", "Prediction Logic", "Data-driven Features"],
    features: [
      "Smart agriculture use case",
      "Dataset-based recommendations",
      "Innovation-focused build",
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
    featured: true,
  },
  {
    title: "Farmer360",
    description:
      "A real-time agriculture platform built during Dextrix 2025 by team Future Forge with live crop prices, government schemes, and relevant agri insights.",
    stack: ["React", "Supabase", "Real-time Database"],
    features: [
      "Real-time crop price updates",
      "Government scheme integration",
      "Built with team Future Forge",
      "2nd position in round 2 out of 50 teams",
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://farmer360.vercel.app",
    featured: true,
  },
];

export const topSkills = [
  "React.js",
  "Next.js",
  "Supabase",
  "JavaScript",
  "TypeScript",
  "REST APIs",
  "Tailwind CSS",
  "Problem Solving",
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "React.js", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["SQL", "MongoDB", "Supabase"],
  },
  {
    title: "AI & Automation",
    skills: ["Generative AI", "RAG", "Agentic AI", "n8n"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Vercel"],
  },
];

export type Certification = {
  title: string;
  issuer: string;
};

export const certifications: Certification[] = [
  { title: "AWS Educate Machine Learning Foundations", issuer: "Amazon" },
  { title: "Data Science Essentials with Python", issuer: "Cisco" },
  { title: "Generative AI in Action", issuer: "IBM" },
  { title: "Develop Generative AI Apps in Azure", issuer: "Microsoft" },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte Australia - Forage" },
  { title: "Introduction to Cloud Infrastructure", issuer: "Microsoft" },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2025 – Present",
    bullets: [
      "Engineered and deployed responsive full-stack web applications using React, Node.js, Express, and MongoDB, handling both client-facing UI and backend architecture.",
      "Designed and delivered a business website for Aggarwal Misthan Bhandar, giving a local retail brand its first digital storefront and improving customer discoverability and product visibility online.",
      "Owned the full project lifecycle — UI design, REST API development, database integration, and production deployment — as sole developer on client engagements.",
    ],
  },
];

export type JourneyMilestone = {
  year: string;
  title: string;
  description: string;
};

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "Start",
    title: "Started coding journey",
    description:
      "Began by understanding core programming concepts and writing small practice programs consistently.",
  },
  {
    year: "Foundation",
    title: "Learned HTML, CSS, and JavaScript",
    description:
      "Built frontend fundamentals and started creating clean, responsive interfaces from scratch.",
  },
  {
    year: "Growth",
    title: "Moved into React and Next.js",
    description:
      "Started building component-driven interfaces and scalable full-stack-ready applications.",
  },
  {
    year: "Projects",
    title: "Built full stack products",
    description:
      "Developed real-world products including student accommodation and agriculture-focused solutions.",
  },
  {
    year: "Hackathons",
    title: "Participated in innovation challenges",
    description:
      "Worked in teams during SIH and Dextrix to build practical solutions under tight timelines.",
  },
  {
    year: "Consistency",
    title: "Practicing DSA and problem solving",
    description:
      "Continuing structured practice on coding platforms to improve logic and interview readiness.",
  },
  {
    year: "Now",
    title: "Exploring Agentic AI",
    description:
      "Currently learning how autonomous AI workflows can improve product development and user outcomes.",
  },
];

export type Achievement = {
  title: string;
  description: string;
  tag: string;
};

export const achievements: Achievement[] = [
  {
    title: "SIH 2025 Participation",
    description:
      "Contributed to an innovation-driven solution in a national-level hackathon environment.",
    tag: "Hackathon",
  },
  {
    title: "Dextrix 2025 Participation",
    description:
      "Collaborated in a high-energy competition focused on building impactful products quickly.",
    tag: "Competition",
  },
  {
    title: "Team Future Forge",
    description:
      "Built Farmer360 with Future Forge, emphasizing collaboration and practical execution.",
    tag: "Teamwork",
  },
  {
    title: "2nd Position in Round 2",
    description:
      "Secured 2nd position in round 2 among 50 teams during Dextrix 2025.",
    tag: "Recognition",
  },
  {
    title: "DSA Discipline",
    description:
      "Maintaining regular problem-solving practice to improve algorithmic thinking in C++.",
    tag: "Problem Solving",
  },
  {
    title: "LeetCode / HackerRank Consistency",
    description:
      "Consistent platform-based coding practice to strengthen technical depth and speed.",
    tag: "Consistency",
  },
];

export const focusAreas = [
  {
    title: "Who I Am",
    description:
      "A B.Tech CSE student who enjoys building practical products and learning by shipping real projects.",
  },
  {
    title: "What I Do",
    description:
      "Create modern web apps with React, Next.js, and backend integrations focused on performance and clarity.",
  },
  {
    title: "What I\'m Exploring",
    description:
      "Agentic AI systems, production-grade full stack architecture, and advanced DSA problem-solving patterns.",
  },
];

export const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Operating Systems",
  "Cyber Security",
  "Theory of Automata",
  "Database Management Systems",
  "Java",
  "Web Development",
  "AI Technologies",
];

export const currentlyLearning = [
  "Full stack development",
  "DSA and competitive problem solving",
  "Agentic AI workflows",
];
