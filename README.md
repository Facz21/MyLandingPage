# Andrés Cortés — Portfolio & Landing Page

Personal portfolio landing page for **Andrés Cortés**, Full-Stack Developer & AI Engineer with 5+ years of experience specializing in .NET, Python, React, and Data Analytics.

---

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) / [React 19](https://react.dev) / [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/) & [Nitro](https://nitro.unjs.io/)

---

## Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
├── public/                 # Static assets (favicons, robots.txt)
├── src/
│   ├── assets/             # Images & visual media
│   ├── components/
│   │   ├── portfolio/      # Portfolio sections (Hero, About, Skills, Projects, Contact, Navbar, Footer, ParallaxBackground)
│   │   └── ui/             # Radix UI reusable components (button, input, textarea, etc.)
│   ├── hooks/              # Custom React hooks (useScrollReveal, useMobile)
│   ├── lib/                # Utility helpers (cn, tailwind-merge)
│   ├── routes/             # TanStack Router file-based routes (__root.tsx, index.tsx)
│   └── styles.css          # Tailwind CSS v4 design system & theme variables
├── PORTFOLIO_CONTEXT.md    # Detailed context & roadmap for upcoming portfolio projects
├── package.json
└── vite.config.ts
```

---

## License
MIT © Andrés Cortés
