export interface TechItem {
  name: string
  category: string
  description?: string
}

export const techStack: TechItem[] = [
  // Languages
  { name: "Lua", category: "Languages", description: "Game scripting and server-side logic" },
  { name: "Python", category: "Languages", description: "Backend services and automation" },
  { name: "JavaScript", category: "Languages", description: "Frontend and full-stack development" },
  { name: "TypeScript", category: "Languages", description: "Type-safe web development" },
  
  // Frameworks & Tools
  { name: "React", category: "Frameworks", description: "UI development and dashboards" },
  { name: "Express", category: "Frameworks", description: "Node.js backend APIs" },
  { name: "Flask", category: "Frameworks", description: "Python web services" },
  { name: "ESX", category: "Frameworks", description: "FiveM server framework" },
  { name: "RSG", category: "Frameworks", description: "RedM server framework" },
  { name: "FiveM", category: "Platforms", description: "GTA V multiplayer platform" },
  { name: "RedM", category: "Platforms", description: "Red Dead Redemption 2 multiplayer platform" },
  
  // Databases
  { name: "MySQL", category: "Databases", description: "Relational database management" },
  { name: "SQLite", category: "Databases", description: "Lightweight embedded database" },
  { name: "Redis", category: "Databases", description: "In-memory data structure store" },
  
  // Areas
  { name: "Game Scripting", category: "Areas", description: "Server-client events and gameplay logic" },
  { name: "Web Development", category: "Areas", description: "RESTful APIs and real-time dashboards" },
  { name: "DevOps", category: "Areas", description: "CI/CD and server management" },
]

export const categories = ["Languages", "Frameworks", "Platforms", "Databases", "Areas"]

