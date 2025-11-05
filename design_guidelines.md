# Tales Sports Technology Website Design Guidelines

## Design Approach
**Reference-Based: Apple Minimalism + Glassmorphism**
Drawing from Apple's clean aesthetics combined with modern glassmorphism. Think apple.com meets contemporary sports tech—restrained, precise, with depth through blur effects rather than heavy graphics.

## Typography
**Font Stack**: SF Pro Display (primary), Inter (fallback) via Google Fonts CDN
- Hero Headlines: 72px/tight, font-weight 700
- Section Headers: 48px/tight, font-weight 600
- Subheadings: 24px/relaxed, font-weight 500
- Body Text: 18px/relaxed, font-weight 400, #E5E5E5
- Small Text/Labels: 14px/normal, font-weight 500, #9CA3AF

**Color Palette**:
- Backgrounds: #040404 (main), #17161A (cards/sections)
- Text: #FFFFFF (headings), #E5E5E5 (body), #9CA3AF (secondary)
- Gradients: Blue (#3B82F6) to Purple (#8B5CF6) for CTAs and accents
- Glass Effects: rgba(255,255,255,0.05) backgrounds with backdrop-blur-xl

## Layout System
**Spacing**: Tailwind units of 4, 8, 12, 16, 24 (p-4, h-8, gap-12, py-16, my-24)
- Container: max-w-7xl with px-8
- Section Padding: py-24 (desktop), py-16 (mobile)
- Component Gaps: gap-8 for grids, gap-4 within components

## Core Components

**Navigation**: 
Fixed glassmorphic header with backdrop-blur-lg, bg-black/30, border-b border-white/10. Logo left, navigation links center (Projects, Services, Technology, Contact), gradient CTA button right.

**Hero Section** (80vh):
Large background image (stadium/athlete in motion with dark overlay), centered content with 72px headline, 24px subtitle, dual CTA layout (gradient primary + glass secondary with backdrop-blur).

**Case Study Grid**:
2-column (desktop) masonry grid. Each card: glassmorphic container (bg-white/5, backdrop-blur-lg, border border-white/10, rounded-2xl). Include app screenshot image, project title, tech stack tags (glass pills), and metrics (downloads/ratings).

**Technology Stack Section**:
4-column grid (mobile: 2-column) of glass cards featuring tech logos/icons, each with subtle hover lift effect.

**Services Cards**:
3-column layout with large glass cards. Each includes icon area, title, description, and "Learn More" link with arrow.

**Testimonials**:
Single-column carousel with large glass container, client photo, quote in 24px italic, name/company in smaller text.

**Footer**:
Multi-column layout (Company, Services, Resources, Contact) with newsletter signup featuring gradient button. Glass divider line above, small text below.

## Images

**Hero Image**: 
Full-width athletic action shot—sprinter on track or basketball player mid-jump. Apply dark gradient overlay (black to transparent, bottom to top) for text legibility.

**Case Study Screenshots** (8-12 total):
Mobile app interface mockups showing sports tracking features, performance analytics, social feeds. Use realistic iPhone/Android frames. Mix portrait and landscape orientations.

**Technology Logos**:
React Native, Flutter, Swift, Kotlin, Firebase, AWS logos in monochrome white/gray treatment.

**Client/Athlete Photos** (3-5):
Professional headshots for testimonials section, circular crop with subtle glow effect.

**Background Patterns**:
Subtle grid texture or dotted pattern at 5% opacity behind case study sections for depth.

## Glass Effect Implementation
All cards/overlays use: background rgba(255,255,255,0.05), backdrop-filter blur(24px), border 1px solid rgba(255,255,255,0.1). Buttons over images get backdrop-blur-md with bg-white/10.

## Page Structure
1. Hero (image-based, 80vh)
2. Featured Projects Grid (3 highlighted cases)
3. Services Overview (3 cards)
4. Technology Stack (icon grid)
5. Full Case Studies Gallery (8-12 projects, filterable)
6. Testimonials Carousel
7. CTA Section (gradient background)
8. Footer (comprehensive links)