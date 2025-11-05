# Tales Sports Tech Platform

## Overview

This is a fully static web application for Tales (Octopus Tale), a sports technology company that develops cutting-edge software solutions merging sports, technology, and AI. The platform serves as a comprehensive company portfolio showcasing their expertise in fan engagement, full-stack development, gaming, betting solutions, AI solutions, cloud solutions, and automation. The multi-page application features detailed service information, case studies with real project imagery, and an integrated contact form. Built with modern web technologies, it features a React frontend with shadcn/ui components, wouter routing, and an Express.js backend serving static content.

## Recent Changes (November 5, 2025)

- **Company Logo Integration**: Added Octopus Tale logo to header and footer across all pages
  - Logo displays "Octopus" in blue and "Tale" in white on transparent background
  - Header logo (60px height) is clickable and navigates to home page
  - Footer logo (72px height) provides brand consistency
  - All pages (Home, About, Case Studies) now use shared Header component with logo
  - Logo sizes increased by 50% from original implementation
- **Database Dependencies Removed**: Fully static site with no database requirements
  - Removed all Drizzle ORM, PostgreSQL, and Neon Database dependencies
  - Contact form now uses dummy submission with console logging
  - In-memory storage for any development needs
- **Case Studies Page Header Fix**: Replaced custom inline header with shared Header component for consistency

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework serving static frontend
- **Language**: TypeScript throughout the stack for consistent type safety
- **Storage**: In-memory storage for any development needs (no database)
- **Development**: Hot module replacement and development middleware integration via Vite

### Data Management
- **Fully Static**: No database dependencies or external storage requirements
- **Contact Form**: Client-side validation with dummy submission (console logging)
- **In-Memory Storage**: Simple storage interface for development/testing purposes
- **Data Validation**: Zod schemas for runtime type validation of form inputs

## External Dependencies

### UI and Styling
- **Radix UI**: Complete suite of accessible, unstyled UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework with PostCSS integration
- **Lucide React**: Modern icon library with consistent design language
- **class-variance-authority**: Utility for creating consistent component variants

### Branding and Assets
- **Company Logo**: Octopus Tale logo (blue "Octopus" + white "Tale") integrated in header and footer
- **Case Study Images**: Real project screenshots in optimized .webp format with lazy loading
- **Design System**: Glassmorphism with dark theme (#040404/#17161A), blue-purple gradients

### Development Tools
- **Vite**: Build tool with HMR and optimized bundling
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment plugins and runtime error handling

### Form Handling and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration layer for external validation libraries
- **Zod**: Runtime type validation and schema definition

### Additional Libraries
- **date-fns**: Modern date utility library for date manipulation
- **cmdk**: Command palette component for enhanced UX
- **embla-carousel**: Carousel component for image galleries and content sliders
- **wouter**: Minimalist routing library for React applications