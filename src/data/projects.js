/**
 * Projects Configuration
 * Edit this file to add, remove, or update projects
 * The Projects page dynamically generates cards from this array
 */

export const projects = [
  {
    id: "notes-by-gabe",
    title: "Notes by Gabe",
    description: "A full-featured web-based notes application built with React and Vite. Features include creating, editing, deleting, and searching notes with localStorage persistence for data retention across sessions.",
    shortDescription: "React notes app with CRUD operations and search",
    technologies: ["React", "Vite", "React Router", "localStorage", "UUID", "CSS"],
    category: "Web Development",
    image: "/images/projects/notes-preview.png",
    github: "https://github.com/GabeEyo/note-app",
    live: "https://notesbygabe.netlify.app",
    status: "Completed",
    featured: true,
    order: 1
  },
  {
    id: "checkpalindrome",
    title: "CheckPalindrome",
    description: "A clean, responsive palindrome checker that validates whether a word or phrase reads the same forwards and backwards. Built with vanilla JavaScript featuring real-time validation and error handling.",
    shortDescription: "Vanilla JS palindrome validator",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6)"],
    category: "Web Development",
    image: "/images/projects/palindrome-preview.png",
    github: "https://github.com/GabeEyo/palindrome_checker",
    live: "https://checkpalidrome.netlify.app",
    status: "Completed",
    featured: false,
    order: 2
  },
  {
    id: "gabeblackjack",
    title: "Gabe Blackjack",
    description: "A classic Blackjack card game implemented in vanilla JavaScript. Features betting with virtual chips, hit/stand mechanics, win/loss detection, and a polished casino-style UI with a felt table background.",
    shortDescription: "Vanilla JS Blackjack game with chip betting",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6)"],
    category: "Games",
    image: "/images/projects/blackjack-preview.png",
    github: "https://github.com/GabeEyo/blackjack_game",
    live: "https://gabeblackjack.netlify.app",
    status: "Completed",
    featured: false,
    order: 3
  },
  {
    id: "passwords-by-gabe",
    title: "Passwords by Gabe",
    description: "A secure random password generator that creates strong passwords with customizable character sets (uppercase, lowercase, numbers, symbols). Includes one-click copy to clipboard with toast notification feedback.",
    shortDescription: "Secure password generator with clipboard copy",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "Clipboard API"],
    category: "Utilities",
    image: "/images/projects/passwords-preview.png",
    github: "https://github.com/GabeEyo/password_generator",
    live: "https://passwordsbygabe.netlify.app",
    status: "Completed",
    featured: true,
    order: 4
  },
  {
    id: "kelvin-weather-app",
    title: "Kelvin Weather App",
    description: "A weather application that fetches real-time weather data from the OpenWeatherMap API. Features city search, temperature display in Kelvin, humidity, wind speed, and dynamic weather icons based on conditions.",
    shortDescription: "Weather app using OpenWeatherMap API",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "Fetch API", "OpenWeatherMap API"],
    category: "Web Development",
    image: "/images/projects/weather-preview.png",
    github: "https://github.com/GabeEyo/weather_app",
    live: "https://kelvinweatherapp.netlify.app",
    status: "Completed",
    featured: false,
    order: 5
  },
  {
    id: "counter-by-gabe",
    title: "Counter by Gabe",
    description: "A simple yet polished counter application with increment, decrement, and save functionality. Entries are preserved in a history log. Features a beautiful background image and responsive card-based layout.",
    shortDescription: "Counter app with entry history logging",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6)"],
    category: "Utilities",
    image: "/images/projects/counter-preview.png",
    github: "https://github.com/GabeEyo/counter_app",
    live: "https://counterbygabe.netlify.app",
    status: "Completed",
    featured: false,
    order: 6
  },
  {
    id: "classiq",
    title: "ClassIq",
    description: "A role-based authentication system built with React and Vite. Features login/register flows, protected dashboard routes, and role-specific views for Parents, Teachers, Administrators, and Users. Includes form validation, avatar generation, and responsive design.",
    shortDescription: "React auth system with role-based dashboards",
    technologies: ["React", "Vite", "React Router", "CSS Modules", "Context API"],
    category: "Web Development",
    image: "/images/projects/classiq-preview.png",
    github: "https://github.com/GabeEyo/classiq",
    live: "", // Add live URL when deployed
    status: "In Progress",
    featured: true,
    order: 7
  },
];

export const projectCategories = [
  "All",
  "Web Development",
  "Games",
  "Utilities",
];

export const projectStatuses = {
  "Completed": { label: "Completed", color: "#22c55e" },
  "In Progress": { label: "In Progress", color: "#f59e0b" },
  "Planned": { label: "Planned", color: "#6366f1" },
  "Archived": { label: "Archived", color: "#9ca3af" },
};

export default projects;