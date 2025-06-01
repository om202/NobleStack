# Noble Stack - Where AI Meets the Modern Web

A professional company website for Noble Stack, showcasing AI development and modern web solutions. Built with Next.js 15, TypeScript, and modern UI components.

## About Noble Stack

Noble Stack is a technology company specializing in:
- **Artificial Intelligence** - Advanced AI solutions and machine learning implementations
- **Modern Web Development** - Fast, responsive, and scalable web applications
- **AI Agents & Automation** - Intelligent automation systems and AI-powered workflows
- **Custom Software Development** - Tailored software solutions built from the ground up

## Tech Stack

- **Next.js 15** - React framework with App Router and Turbopack
- **React 19** - Latest React with modern features
- **TypeScript** - Type safety and enhanced developer experience
- **Tailwind CSS 4.1.8** - Latest utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI primitives
- **Framer Motion** - Smooth animations and interactions
- **Lucide React** - Modern icon library
- **React Icons** - Additional icon sets

## Features

- ✨ **Modern Design** - Professional, clean, and responsive interface
- 📱 **Mobile-First** - Optimized for all device sizes with bottom navigation
- ♿ **Accessibility** - Built with Radix UI components for full accessibility
- 🎯 **Multi-Page Architecture** - Complete website structure with:
  - Home page with hero, features, services, and FAQ sections
  - About page with company information
  - Services page showcasing offerings
  - Career page for job opportunities
  - Contact page with contact forms
- 🎨 **Interactive UI** - Animated gradients, hover effects, and smooth transitions
- 📊 **Tech Stack Carousel** - Interactive showcase of technologies
- 🔄 **Dynamic Navigation** - Bottom navigation with active state indicators
- ⚡ **Performance Optimized** - Built with Next.js 15 and Turbopack

## Project Structure

```
src/
├── app/
│   ├── Home/
│   │   ├── page.tsx         # Main homepage
│   │   ├── L1.tsx          # Hero section
│   │   ├── L2.tsx          # Features section
│   │   ├── L3.tsx          # Services section
│   │   └── L4.tsx          # FAQ section
│   ├── About/
│   │   └── page.tsx        # About page
│   ├── Services/
│   │   └── page.tsx        # Services page
│   ├── Career/
│   │   └── page.tsx        # Career page
│   ├── Contact/
│   │   └── page.tsx        # Contact page
│   ├── globals.css         # Global styles with custom animations
│   ├── layout.tsx          # Root layout with navigation
│   └── page.tsx           # Main page entry point
├── components/
│   ├── common/
│   │   ├── Navigation.tsx  # Bottom navigation component
│   │   └── Footer.tsx      # Footer component
│   └── TechStackCarousel.tsx # Interactive tech showcase
└── lib/                    # Utilities (currently empty)
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   
   This uses Turbopack for faster development builds.

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Key Components

### Navigation
- Bottom-positioned navigation bar with glassmorphism effect
- Active state indicators with gradient backgrounds
- Mobile-responsive with collapsible menu
- Smooth hover animations and transitions

### Page Sections
- **Hero Section (L1)** - Company branding, call-to-action, and value propositions
- **Features Section (L2)** - Key capabilities and offerings
- **Services Section (L3)** - Detailed service descriptions
- **FAQ Section (L4)** - Common questions and answers

### TechStackCarousel
- Interactive technology showcase
- Auto-scrolling with manual controls
- Responsive grid layout
- Progress indicator

## Customization

- **Brand Identity** - Update logos, colors, and company information in components
- **Content** - Modify text, images, and sections in individual page files
- **Styling** - Customize Tailwind classes and CSS animations in globals.css
- **Navigation** - Add or modify routes in Navigation.tsx

## Deployment

Optimized for deployment on Vercel:

```bash
npm run build
```

The site is configured for static export and can be deployed to any static hosting platform.

## License

MIT License - © Noble Stack
