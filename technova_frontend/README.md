# TechNova Frontend

Modern, futuristic React frontend for TechNova IT Solutions. Implements multi-page layout, dark mode, animations, and admin dashboard.

## Features
- Futuristic, minimalistic UI with glassmorphism, gradients, and neon accents
- Pages: Home, About, Services, Portfolio, Blog, Testimonials, Careers, Contact, Admin Dashboard
- Responsive layout with sticky navbar and scroll-to-top button
- Dark/Light theme toggle with persistence
- Animations via Framer Motion and AOS
- SEO head tags via react-helmet-async (SSG-friendly)
- Forms: Contact, Newsletter, Careers application (resume upload)
- Admin analytics with charts (Recharts)
- WhatsApp instant chat links

## Setup
1. Copy .env.example to .env and set REACT_APP_API_BASE to your backend URL.
2. Install dependencies:
   npm install
3. Start dev server:
   npm start

## Scripts
- npm start
- npm run build
- npm test

## Structure
- src/context/ThemeContext.js — dark/light theme provider
- src/components — UI components (Navbar, Footer, sections, forms)
- src/pages — route pages (including admin dashboard)
- src/utils/api.js — API helper using REACT_APP_API_BASE

Integration with backend endpoints (/auth, /services, /portfolio, /blog, /contact, /careers, /apply, /newsletter) is stubbed via utils/api.js.
