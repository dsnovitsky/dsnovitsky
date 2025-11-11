export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  image?: string
  category: string
}

export const projects: Project[] = [
  // Game Development
  {
    id: "1",
    title: "Real-time Multiplayer Economy System",
    description: "Distributed economy system for FiveM/RedM with dynamic market prices, cross-server trading, and blockchain-like transaction history.",
    technologies: ["Lua", "TypeScript", "WebSocket", "Redis", "MySQL"],
    githubUrl: "https://github.com",
    category: "Game Development",
  },
  {
    id: "2",
    title: "Advanced Vehicle Management System",
    description: "Comprehensive vehicle system with custom tuning, damage simulation, fuel economy, and real-time tracking dashboard.",
    technologies: ["Lua", "FiveM", "React", "TypeScript", "WebSocket"],
    githubUrl: "https://github.com",
    category: "Game Development",
  },
  {
    id: "3",
    title: "AI-driven NPC Behavior System",
    description: "Intelligent NPC system with machine learning-based decision making, dynamic dialogue, and adaptive quest generation.",
    technologies: ["Lua", "Python", "TensorFlow", "Redis", "MySQL"],
    githubUrl: "https://github.com",
    category: "Game Development",
  },
  {
    id: "4",
    title: "Cross-server Player Progression",
    description: "Unified player progression system across multiple servers with secure data synchronization and achievement tracking.",
    technologies: ["Lua", "TypeScript", "GraphQL", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com",
    category: "Game Development",
  },
  {
    id: "5",
    title: "Dynamic Weather & Environment System",
    description: "Procedural weather system with real-world data integration, seasonal changes, and performance-optimized rendering.",
    technologies: ["Lua", "C#", "REST API", "MySQL"],
    githubUrl: "https://github.com",
    category: "Game Development",
  },
  // Web Development
  {
    id: "6",
    title: "Real-time Server Monitoring Dashboard",
    description: "Advanced monitoring platform with live metrics, alerting system, and performance analytics for game servers.",
    technologies: ["React", "TypeScript", "WebSocket", "Node.js", "InfluxDB"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    category: "Web Development",
  },
  {
    id: "7",
    title: "Player Analytics Platform",
    description: "ML-powered analytics platform with behavior prediction, churn analysis, and personalized recommendations for players.",
    technologies: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "TensorFlow"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    category: "Web Development",
  },
  {
    id: "8",
    title: "Microservices API Gateway",
    description: "Scalable API gateway with rate limiting, authentication, load balancing, and real-time request monitoring.",
    technologies: ["TypeScript", "Node.js", "Express", "Redis", "Docker", "Kubernetes"],
    githubUrl: "https://github.com",
    category: "Web Development",
  },
  {
    id: "9",
    title: "WebSocket Live Chat System",
    description: "Real-time chat system with message encryption, file sharing, voice channels, and cross-platform support.",
    technologies: ["React", "TypeScript", "WebSocket", "Node.js", "MongoDB", "Redis"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    category: "Web Development",
  },
  // Tools & DevOps
  {
    id: "10",
    title: "CI/CD Pipeline for Game Servers",
    description: "Automated deployment pipeline with testing, versioning, rollback capabilities, and multi-environment support.",
    technologies: ["GitHub Actions", "Docker", "Kubernetes", "Python", "TypeScript"],
    githubUrl: "https://github.com",
    category: "Tools & DevOps",
  },
  {
    id: "11",
    title: "Performance Profiling Tool",
    description: "Advanced profiling tool for game scripts with real-time performance metrics, memory leak detection, and optimization suggestions.",
    technologies: ["Lua", "TypeScript", "React", "WebSocket", "Python"],
    githubUrl: "https://github.com",
    category: "Tools & DevOps",
  },
  {
    id: "12",
    title: "Automated Testing Framework",
    description: "Comprehensive testing framework for game scripts with unit tests, integration tests, and automated regression testing.",
    technologies: ["TypeScript", "Jest", "Lua", "Python", "Docker"],
    githubUrl: "https://github.com",
    category: "Tools & DevOps",
  },
]

