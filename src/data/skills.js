/**
 * Skills Configuration
 * Edit this file to update your technical skills across the portfolio
 * Categories: frontend, backend, tools, design, languages, learning
 */

export const skills = {
  frontend: [
    { name: "React", level: 85, icon: "code" },
    { name: "JavaScript (ES6+)", level: 80, icon: "code" },
    { name: "TypeScript", level: 65, icon: "code" },
    { name: "HTML5 & CSS3", level: 90, icon: "layout" },
    { name: "Tailwind CSS", level: 75, icon: "palette" },
    { name: "Vite", level: 80, icon: "zap" },
    { name: "React Router", level: 75, icon: "git-branch" },
    { name: "Framer Motion", level: 70, icon: "move" },
  ],
  backend: [
    { name: "Node.js", level: 60, icon: "server" },
    { name: "Express.js", level: 55, icon: "server" },
    { name: "Python", level: 75, icon: "terminal" },
    { name: "REST APIs", level: 65, icon: "globe" },
  ],
  database: [
    { name: "Firebase", level: 60, icon: "database" },
    { name: "LocalStorage/IndexedDB", level: 75, icon: "hard-drive" },
    { name: "SQL Basics", level: 50, icon: "database" },
  ],
  tools: [
    { name: "Git & GitHub", level: 80, icon: "git-branch" },
    { name: "VS Code", level: 90, icon: "code" },
    { name: "Figma", level: 70, icon: "figma" },
    { name: "Vite", level: 80, icon: "zap" },
    { name: "npm/yarn", level: 85, icon: "package" },
    { name: "Chrome DevTools", level: 80, icon: "monitor" },
  ],
  design: [
    { name: "UI/UX Design", level: 70, icon: "palette" },
    { name: "Figma", level: 70, icon: "figma" },
    { name: "Responsive Design", level: 85, icon: "layout" },
    { name: "Design Systems", level: 60, icon: "grid" },
    { name: "Prototyping", level: 65, icon: "mouse-pointer" },
    { name: "Video Editing", level: 65, icon: "film" },
    { name: "Photo Editing", level: 60, icon: "image" },
  ],
  learning: [
    { name: "Next.js", level: 40, icon: "code" },
    { name: "Machine Learning", level: 35, icon: "cpu" },
    { name: "Three.js", level: 30, icon: "box" },
    { name: "GraphQL", level: 25, icon: "git-branch" },
    { name: "Docker", level: 20, icon: "box" },
  ],
};

export const skillCategories = [
  { key: "frontend", label: "Frontend", color: "#61dafb" },
  { key: "backend", label: "Backend", color: "#68a063" },
  { key: "database", label: "Database", color: "#f29111" },
  { key: "tools", label: "Tools & Workflow", color: "#9c27b0" },
  { key: "design", label: "Design & Creative", color: "#f50057" },
  { key: "learning", label: "Currently Learning", color: "#ff9800" },
];

export default skills;