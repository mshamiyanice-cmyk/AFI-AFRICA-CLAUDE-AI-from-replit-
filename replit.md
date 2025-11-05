# AFI Africa - AI For Impact In Africa

## Overview

AFI Africa is a modern, visually stunning multi-page website built to showcase the organization's mission of democratizing AI across Africa. The application features an immersive 3D experience with Spline integration, smooth animations using Framer Motion, and a custom fluid cursor system. The site presents AFI Africa's vision, services, and ways to engage with the movement through six interconnected pages with seamless client-side routing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18.3.1 with TypeScript for type-safe component development
- Vite as the build tool and development server, configured to run on port 5000
- Strict TypeScript configuration enabled for enhanced type checking

**Routing Strategy**
- Wouter (v3.7.1) provides lightweight client-side routing
- Six main routes: Home, Who We Are, Services, Explore Vision, Join Movement, and Support
- All navigation handled through the `Navigation` component with active state management

**Styling Approach**
- Tailwind CSS for utility-first styling with custom configuration
- PostCSS with Autoprefixer for vendor prefix handling
- Custom CSS including disabled default cursor (replaced with custom fluid cursor)
- Golden gradient color scheme (#FFD700 to #B8860B) used throughout for brand consistency
- Dark theme with black background as the primary aesthetic

**Animation & Interactivity**
- Framer Motion (v12.23.24) for sophisticated animations and transitions
- Custom FluidCursor component that follows mouse movement with smooth trailing effects
- Scroll-based animations that transform background elements based on scroll progress
- Interactive hover states that modify cursor size and appearance

**3D Integration**
- Spline viewer integration for 3D background scenes
- Custom React type definitions for the `spline-viewer` web component
- Spline background responds to scroll progress with transform and scale effects

**Component Structure**
- **Pages** (src/pages/): Six modular page components for each route
  - Home: Hero section with Spline 3D background and call-to-action buttons
  - WhoWeAre: About page with animated Africa outline and pulsing data routes
  - Services: AI consulting, automation, and digital transformation offerings with glowing cards
  - ExploreVision: Interactive 3D rotating Africa map with visionary phrases
  - JoinMovement: Contact form with interactive cursor and glow effects
  - Support: Donation and partnership options with impact statistics
- **Shared Components** (src/components/):
  - Navigation: Top navigation bar with mobile menu and active route highlighting
  - FluidCursor: Custom electric gold cursor with hover interactions
  - SplineBackground: 3D background scene with scroll-based transformations
- Each page implements unique animations, scroll effects, and interactive elements

**State Management**
- React hooks (useState, useEffect, useRef) for local component state
- Scroll progress tracking across multiple components
- Form state management in JoinMovement page
- No global state management library - intentionally kept simple

### UI/UX Patterns

**Visual Design**
- Glassmorphism with backdrop blur effects on navigation
- Radial gradients for glowing effects around key elements
- Linear gradients for text with WebKit background clipping
- Custom scrollbar styling with golden gradient theme

**Responsive Design**
- Mobile-first responsive breakpoints using Tailwind's md/lg utilities
- Hamburger menu for mobile navigation
- Fluid typography scaling from mobile to desktop

**Accessibility Considerations**
- Semantic HTML structure
- Link components with proper routing attributes
- Form labels and structure in JoinMovement page

## External Dependencies

### Third-Party Services

**Spline (3D Graphics)**
- CDN-loaded Spline viewer library (v1.10.90)
- Scene hosted at `https://prod.spline.design/xx9QEnS4Qdr3I1km/scene.splinecode`
- Used for immersive 3D background visualization
- Module script loaded dynamically in SplineBackground component

**Supabase**
- @supabase/supabase-js (v2.57.4) installed but not yet configured
- Likely intended for future backend features (authentication, data storage)
- No active integration in current codebase

### Development Tools

**Linting & Code Quality**
- ESLint with TypeScript support
- React Hooks and React Refresh plugins
- Configured for ES2020 with browser globals

**Icon Library**
- Lucide React (v0.344.0) for consistent icon system
- Icons used: Menu, X, Users, Lightbulb, Heart, Send, Brain, Zap, Rocket, Code, Database, Shield, DollarSign, HandshakeIcon, Share2, CheckCircle

### Build Configuration

**Vite Optimizations**
- Lucide React excluded from dependency optimization
- React plugin with fast refresh enabled
- Server configured for all network interfaces (0.0.0.0) for container/cloud compatibility

**TypeScript Setup**
- Separate configurations for app code (tsconfig.app.json) and build tools (tsconfig.node.json)
- Strict mode enabled with unused variable checking
- JSX transformation set to react-jsx (new JSX runtime)

### Deployment Context

- Originally migrated from Bolt to Replit environment
- Configured for Replit deployment with network-accessible dev server on port 5000
- Frontend-only application - no backend infrastructure
- Static site suitable for CDN deployment or static hosting

## Recent Changes (November 4, 2025)

**Migration Completed**
- Successfully migrated from Bolt to Replit
- Installed wouter (v3.7.1) for client-side routing
- Installed framer-motion (v12.23.24) for advanced animations
- Configured Vite to run on port 5000 with host 0.0.0.0 for Replit compatibility

**Site Structure**
- Converted from single-page to multi-page application
- Created 6 distinct pages with unique designs and animations
- Implemented Navigation component with mobile-responsive menu
- Added JSX type definitions for spline-viewer web component

**Design Implementation**
- Dark futuristic theme with electric gold (#FFD700) accents and electric blue (#3B82F6) highlights
- Cinematic, deliberate motion with sophisticated Framer Motion animations throughout
- **Who We Are**: Soft gold circuit lines that draw on scroll, minimal text with strong typography, visionary yet grounded narrative
- **Services**: Flowing alternating sections (not grid), data stream background effects, elegant presentation implying intelligence
- **Explore Vision**: Sticky rotating digital Africa with data pulses, scroll-triggered visionary phrases, discovery-focused interaction
- **Join Movement**: Form with golden glow effects on interaction, fields respond to focus with animated underlines, invitation-focused design
- **Support**: Restrained animations with visual calm, trust-driven minimalism, whispered credibility through refined presentation
- All pages use scroll-based viewport animations, smooth easing, and controlled state management