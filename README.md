# Gabe's Developer Portfolio

A modern, premium-quality personal developer portfolio website built with React, Vite, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Layout.jsx          # Main layout with header, navigation, footer
│   ├── context/
│   │   └── ThemeContext.jsx    # Light/dark theme provider
│   ├── data/
│   │   ├── personalInfo.js     # Personal information (name, bio, education, etc.)
│   │   ├── socialLinks.js      # Social media links
│   │   ├── skills.js           # Technical skills with proficiency levels
│   │   └── projects.js         # Project data array
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with hero, featured projects, skills
│   │   ├── About.jsx           # About page with journey, skills, CV section
│   │   ├── Projects.jsx        # Projects showcase with filtering & search
│   │   ├── Contact.jsx         # Contact page with form and social links
│   │   └── NotFound.jsx        # 404 page
│   ├── styles/
│   │   └── globals.css         # Global styles, CSS variables, utilities
│   ├── App.jsx                 # Main app with routing
│   └── main.jsx                # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ✨ Features

- **Dark/Light Theme** - System preference detection with manual toggle
- **Smooth Animations** - Framer Motion powered transitions and scroll animations
- **Responsive Design** - Mobile-first approach, works on all devices
- **Centralized Configuration** - Edit content without touching components
- **Project Filtering** - Filter by category and search projects
- **Accessible** - Semantic HTML, ARIA labels, reduced motion support
- **Performance Optimized** - Code splitting, lazy loading ready

## 🎨 Customization

### Personal Information
Edit `src/data/personalInfo.js` to update:
- Name, preferred name, title
- Hero section greeting and tagline
- About section (background, education, journey, interests, career goals)
- CV/Resume availability

### Social Links
Edit `src/data/socialLinks.js` to update:
- GitHub, LinkedIn, Twitter, Email URLs
- Set to empty string `""` to hide a link

### Skills
Edit `src/data/skills.js` to update:
- Skill categories (frontend, backend, database, tools, design, learning)
- Individual skills with proficiency levels (0-100)
- Category colors and labels

### Projects
Edit `src/data/projects.js` to:
- **Add projects**: Add new objects to the `projects` array
- **Remove projects**: Remove objects from the array
- **Update details**: Modify any field (title, description, technologies, etc.)
- **Change images**: Update the `image` path (place images in `public/images/projects/`)
- **Add GitHub/Live URLs**: Update `github` and `live` fields
- **Change status**: Use "Completed", "In Progress", "Planned", or "Archived"
- **Feature projects**: Set `featured: true` for homepage showcase

Example project object:
```javascript
{
  id: "unique-id",
  title: "Project Name",
  description: "Full description...",
  shortDescription: "Short summary for cards",
  technologies: ["React", "TypeScript", "Tailwind"],
  category: "Web Development",
  image: "/images/projects/project-preview.png",
  github: "https://github.com/username/repo",
  live: "https://project-demo.com",
  status: "Completed",
  featured: true,
  order: 1
}
```

### Adding Project Images
1. Place project screenshots in `public/images/projects/`
2. Reference them in `projects.js` as `/images/projects/filename.png`
3. Recommended size: 800x500px (16:10 aspect ratio)

### Styling
Customize the design in `src/styles/globals.css`:
- CSS custom properties (colors, spacing, fonts)
- Theme colors (dark/light)
- Component styles (buttons, cards, forms)
- Animations and transitions

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **React Router v6** - Client-side routing
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **CSS Variables** - Theming system

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: 768px - 1024px
- Large Desktop: > 1024px

## 🚀 Deployment

The portfolio is ready for deployment to any static hosting:

### Netlify
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add `_redirects` file to `public/` for SPA routing:
   ```
   /*    /index.html   200
   ```

### Vercel
1. Import project
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### GitHub Pages
1. Run `npm run build`
2. Deploy `dist/` folder to `gh-pages` branch
3. Configure GitHub Pages to serve from `gh-pages`

## 🔧 Development Notes

### Theme System
The theme uses CSS custom properties defined in `globals.css`. Two themes are supported:
- Dark (default): `data-theme="dark"` or no attribute
- Light: `data-theme="light"`

### Animation Performance
- Uses `transform` and `opacity` for animations (GPU accelerated)
- Respects `prefers-reduced-motion` media query
- Framer Motion's `whileInView` for scroll-triggered animations

### Accessibility
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Focus visible styles
- Color contrast ratios (WCAG AA)
- Keyboard navigation support

## 📝 License

Personal portfolio project. Feel free to use as reference for your own portfolio.

---

Built with ❤️ by Gabe