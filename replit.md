# AI Club Website

## Overview
This is a React + TypeScript + Vite website for an AI Club at Tech University Engineering College. The site features a modern, animated design with sections including Hero, Team, and Footer.

## Recent Changes (October 26, 2025)
- ✅ Configured Vite for Replit environment (0.0.0.0:5000 with allowedHosts: true)
- ✅ Added Team section with @tanstack/react-query for data management
- ✅ Integrated react-intersection-observer for scroll animations
- ✅ Created custom 3D card components with hover effects
- ✅ Added professional stock images for all 8 team members
- ✅ Set up path aliases (@/ and @shared/) for cleaner imports
- ✅ Configured deployment for Replit autoscale
- ✅ Team section fully functional with navigation and scroll detection

## Project Architecture

### Tech Stack
- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.1.7
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.1.16
- **Animations**: Framer Motion 12.23.24
- **State Management**: @tanstack/react-query
- **Icons**: React Icons 5.5.0

### Project Structure
```
src/
├── api/              # API data and mock data
│   └── teamData.ts   # Team member data with images
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   │   └── 3d-card.tsx
│   ├── Counter.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── RotatingText.tsx
│   └── Team.tsx
├── lib/             # Library configurations
│   └── queryClient.tsx
├── shared/          # Shared types and schemas
│   └── schema.ts
├── App.tsx          # Main app component
└── main.tsx         # Entry point with QueryProvider

public/
└── images/
    └── team/        # Team member headshot images
```

## Key Features

### Navigation
- Fixed header with smooth scrolling
- Active section highlighting based on scroll position
- Mobile responsive drawer menu
- Social media links (LinkedIn, Instagram, GitHub, Email)

### Team Section
The Team section includes:
1. **Category Filtering**: Filter members by Faculty, Student Leaders, Core Team, or All
2. **Animated Cards**: 3D hover effects on team member cards
3. **Member Information**:
   - Professional headshot images
   - Name and role
   - Description
   - LinkedIn link
4. **Scroll Detection**: Section activates when scrolled into view
5. **Tech-themed Background**: Floating CS diagrams (neural networks, binary trees, databases)

### How Navigation Works
- Click "Team" in the header → Smoothly scrolls to #team section
- Scroll down the page → Navigation automatically highlights current section
- Team section has `id="team"` for anchor linking
- Navigation uses `scrollIntoView({ behavior: 'smooth' })` for smooth transitions

## Development

### Running Locally
```bash
npm install
npm run dev  # Starts on http://0.0.0.0:5000
```

### Building for Production
```bash
npm run build
npm run preview
```

## Environment Setup
- **Host**: 0.0.0.0 (required for Replit proxy)
- **Port**: 5000 (Replit's only non-firewalled port)
- **Allowed Hosts**: true (required for iframe preview)

## Team Images
All team member images are stored in `public/images/team/` and are professional stock photos showing:
- 2 Faculty coordinators
- 2 Student leaders
- 4 Core team members

Images are referenced in the team data with paths like `/images/team/professional_headsho_[hash].jpg`

## Deployment
Configured for Replit Autoscale deployment:
- Build command: `npm run build`
- Run command: `npx vite preview --host 0.0.0.0 --port 5000`

## User Preferences
- Modern, gradient-based color scheme (cyan to green)
- Animated interactions using Framer Motion
- Tech/CS themed visual elements
- Professional, clean design aesthetic
