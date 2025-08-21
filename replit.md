# Tales Sports Tech Platform

## Overview

This is a full-stack web application for Tales, a sports technology company that develops cutting-edge software solutions merging sports, technology, and AI. The platform serves as a company portfolio and contact system, showcasing their digital transformation services, sports app development capabilities, and project case studies. Built with modern web technologies, it features a React frontend with shadcn/ui components and an Express.js backend with PostgreSQL database integration.

## Recent Changes (August 21, 2025)

- **Major Restructuring**: Removed "Our Projects" section completely
- **New Featured Projects Carousel**: Implemented horizontal auto-sliding carousel with infinite loop
- **Enhanced Case Studies**: Moved existing case studies content into carousel format with preserved card layout
- **Mobile-First Navigation**: Added touch/swipe support for mobile devices with responsive controls
- **Smart Auto-Play**: 5-second intervals with auto-pause on user interaction, resumes after 10 seconds
- **Updated Links**: All internal navigation links now point to `/featured-projects` section

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
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript throughout the stack for consistent type safety
- **Database ORM**: Drizzle ORM for type-safe database operations and migrations
- **Session Management**: Built-in session handling with connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement and development middleware integration

### Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Neon Database serverless connection
- **Schema Management**: Drizzle Kit for database migrations and schema synchronization
- **Development Storage**: In-memory storage implementation for development/testing
- **Data Validation**: Zod schemas for runtime type validation and API request/response validation

### Authentication and Authorization
- **Session-based Authentication**: Express sessions with PostgreSQL session store
- **User Management**: Basic user registration and authentication system with username/password
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations

### API Design
- **RESTful Endpoints**: Clean API structure with `/api/` prefix for all backend routes
- **Contact System**: Form submission endpoint with validation and error handling
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request/response logging and performance monitoring

## External Dependencies

### UI and Styling
- **Radix UI**: Complete suite of accessible, unstyled UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework with PostCSS integration
- **Lucide React**: Modern icon library with consistent design language
- **class-variance-authority**: Utility for creating consistent component variants

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database platform
- **Drizzle ORM**: Type-safe ORM with excellent TypeScript integration
- **connect-pg-simple**: PostgreSQL session store for Express sessions

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