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
  external?: boolean;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
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
    title: "ATS-LENS",
    description:
      "An AI-powered resume evaluator that parses resumes against job descriptions using NLP and semantic matching, ranking candidates and generating automated improvement feedback to speed up HR shortlisting.",
    stack: ["React", "FastAPI", "NLP/spaCy", "Semantic Scoring", "Gemini API"],
    features: [
      "Automated skill & experience extraction from resumes",
      "JD-to-resume semantic matching for accurate ranking",
      "AI-generated, candidate-specific feedback reports",
    ],
    githubUrl: "https://github.com/udaypundir16",
    liveUrl: "https://example.com/",
    featured: true,
  },
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

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialId?: string;
  description: string;
  verificationUrl: string;
};

export const certificates: Certificate[] = [
  {
    id: "aws-ml-foundations",
    title: "AWS Educate Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "2026",
    image: "/certificates/aws-ml-foundations.png",
    credentialId: "7e92ee78-8580-482b-b343-be8ba2bd779c",
    description:
      "Completed foundational training in Machine Learning, including core ML concepts, workflows, and applications using AWS technologies.",
    verificationUrl:
      "https://www.credly.com/earner/earned/badge/7e92ee78-8580-482b-b343-be8ba2bd779c",
  },
  {
    id: "cisco-data-science",
    title: "Data Science Essentials with Python",
    issuer: "Cisco",
    date: "2026",
    image: "/certificates/cisco-data-science-python.png",
    credentialId: "ffc670e8-c446-4d9f-a83e-b9587c289e90",
    description:
      "Developed skills in Python-based data exploration, visualization, and modeling using industry-standard data science libraries.",
    verificationUrl:
      "https://www.credly.com/earner/earned/badge/ffc670e8-c446-4d9f-a83e-b9587c289e90",
  },
  {
    id: "ibm-gen-ai",
    title: "Generative AI in Action",
    issuer: "IBM",
    date: "2026",
    image: "/certificates/ibm-generative-ai.png",
    credentialId: "ca6a3fcb-c55e-4dd4-98f8-57e06f020809",
    description:
      "Applied generative AI concepts, prompt engineering techniques, and Python libraries while exploring GenAI applications and ethical considerations.",
    verificationUrl:
      "https://www.credly.com/earner/earned/badge/ca6a3fcb-c55e-4dd4-98f8-57e06f020809",
  },
  {
    id: "msft-azure-genai",
    title: "Develop Generative AI Apps in Azure",
    issuer: "Microsoft",
    date: "August 13, 2026",
    image: "/certificates/microsoft-azure-genai.png",
    description:
      "Learned concepts and practices for developing generative AI applications using Microsoft Azure and its AI capabilities.",
    verificationUrl:
      "https://learn.microsoft.com/en-us/users/udaypundir16/achievements/print/3zky6wgh?tab=tab-learning-paths",
  },
  {
    id: "deloitte-data-analytics",
    title: "Deloitte Australia – Data Analytics Job Simulation",
    issuer: "Forage",
    date: "August 13, 2026",
    image: "/certificates/deloitte-data-analytics.png",
    credentialId: "6a7d8ef000ad9dc2bf98c575",
    description:
      "Completed a practical data analytics job simulation focused on analyzing data, deriving insights, and applying analytical problem-solving in a professional business context.",
    verificationUrl:
      "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a7d8e0700ad9dc2bf98822f_1786614013560_completion_certificate.pdf",
  },
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
    title: "Dextrix 2025 — 2nd Position (Round 2)",
    description:
      "Built Farmer360 as part of Team Future Forge, collaborating in a competitive product-building challenge and securing 2nd position among 50 teams in Round 2.",
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
