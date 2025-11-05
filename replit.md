# Tales Sports Tech Platform

## Overview

This is a fully static web application for Tales (Octopus Tale), a sports technology company that develops cutting-edge software solutions merging sports, technology, and AI. The platform serves as a comprehensive company portfolio showcasing their expertise in fan engagement, full-stack development, gaming, betting solutions, AI solutions, cloud solutions, and automation. The multi-page application features detailed service information, case studies with real project imagery, and an integrated contact form. Built with modern web technologies, it features a React frontend with shadcn/ui components, wouter routing, and an Express.js backend serving static content.

## Recent Changes (November 5, 2025)

- **Tech Partner Badges**: Added red "Tech Partner" badges to highlight partnership projects
  - **Simuka Football Mobile App**: Displays Tech Partner badge alongside Sports Entertainment category
  - **KASID Food Platform**: Displays Tech Partner badge alongside Social Impact Technology category
  - Badges appear across all views: home slideshow, featured projects grid, and all case studies list
  - Distinctive red styling (bg-red-600) to stand out from purple industry tags

- **Contact Section Redesign**: Replaced form with icon-based contact cards
  - **Email Card**: Opens Gmail Compose in new tab with pre-filled recipient (Prashanth@octopustale.co.in)
  - **Call Card**: Initiates phone call to +1 (343) 254-1255
  - **LinkedIn Card**: Links to https://www.linkedin.com/in/prashanthiyer
  - Glassmorphism design with gradient icons and hover effects
  - All cards open in new tabs (Email and LinkedIn) for better UX

- **Featured Projects to Case Studies Navigation**: Enhanced user experience with seamless navigation
  - **Home Page Slideshow**: Clicking "View Full Case Study" navigates to specific case study on All Case Studies page
    - Uses URL query parameter (?project=id) to identify target case study
    - Automatically resets search/filter to ensure visibility
    - Auto-expands the case study details on arrival
    - Precisely centers the case study in viewport with header compensation
    - Uses browser's native scrollIntoView with fine-tuned header adjustment
  - **Case Studies Page Featured Grid**: Clicking any featured project card scrolls to that case study in the All Case Studies section
    - Automatically resets all filters to ensure target is visible
    - Auto-expands the clicked case study
    - Smooth scrolls with precise centering
    - Double requestAnimationFrame ensures stable layout before scrolling
- **Company Logo Integration**: Added Octopus Tale logo to header and footer across all pages
  - Logo displays "Octopus" in blue and "Tale" in white on transparent background
  - Header logo (90px height) is clickable and navigates to home page
  - Footer logo (108px height) provides brand consistency
  - All pages (Home, About, Case Studies) now use shared Header component with logo
  - Logo sizes increased by 125% from original implementation (40px → 90px header, 48px → 108px footer)
- **Contact Information in Footer**: 
  - Added company address: 104 Artesa Unit L, Romania Street, Ontario Canada
  - Address displayed with MapPin icon in footer bottom section
  - LinkedIn profile link added to Company section (after Contact)
  - LinkedIn URL: https://www.linkedin.com/in/prashanthiyer
  - LinkedIn features icon with hover effects, opens in new tab
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