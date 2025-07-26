# EcoNature - Sustainable Living Website

## Overview

EcoNature is a static website promoting sustainable living products and practices. It's a single-page application built with vanilla HTML, CSS, and JavaScript, featuring an eco-friendly design with animated elements and responsive navigation.

## User Preferences

- Preferred communication style: Simple, everyday language
- Language support: English and Arabic with RTL support

## System Architecture

This is a client-side only web application with no backend infrastructure. The architecture follows a simple static website pattern:

- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript
- **Styling**: Custom CSS with CSS Custom Properties for theming
- **Fonts**: Google Fonts (Montserrat and Open Sans)
- **Icons**: Font Awesome 6.0
- **Layout**: Responsive design with mobile-first approach

## Key Components

### 1. HTML Structure (`index.html`)
- Semantic HTML5 structure
- Single-page layout with sections for different content areas
- Navigation menu with hamburger toggle for mobile
- Hero section with animated background elements
- Font Awesome icons for visual enhancement

### 2. Styling System (`styles.css`)
- CSS Custom Properties for consistent theming
- Color scheme focused on green/nature theme:
  - Primary: `#2D5016` (dark green)
  - Secondary: `#8FBC8F` (light green)
  - Accent: `#98FB98` (pale green)
  - Background: `#F0FFF0` (honeydew)
- Responsive design patterns
- Floating leaves animation system
- Modern CSS features (flexbox, transitions, transforms)

### 3. Interactive Features (`script.js`)
- Mobile navigation toggle functionality
- Smooth scrolling for anchor links
- Dynamic navbar styling on scroll
- Intersection Observer for scroll-based animations
- Event delegation for navigation menu interactions
- Multi-language support (English/Arabic) with RTL text direction
- Language preference persistence using localStorage
- Dynamic content translation system

## Data Flow

Since this is a static website, there's no complex data flow:

1. **User Interaction** → JavaScript event handlers
2. **DOM Manipulation** → Visual feedback and animations
3. **CSS Transitions** → Smooth visual changes
4. **Scroll Events** → Dynamic navigation styling

## External Dependencies

### CDN Resources
- **Google Fonts**: Montserrat and Open Sans font families
- **Font Awesome 6.0**: Icon library via CDN

### Browser APIs Used
- Intersection Observer API for scroll animations
- DOM manipulation APIs
- CSS transitions and animations

## Deployment Strategy

This is a static website that can be deployed to any web hosting service:

### Recommended Platforms
- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Easy deployment with form handling capabilities
- **Vercel**: Fast global CDN deployment
- **Traditional Web Hosting**: Any provider supporting static files

### File Structure
```
/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── (assets/)           # Future images/media files
```

### Deployment Requirements
- No server-side processing needed
- No database required
- No build process necessary
- Simple file upload to hosting provider

### Performance Considerations
- Optimize images when added
- Minify CSS/JS for production
- Enable gzip compression on server
- Leverage browser caching for static assets

## Development Notes

- The website appears to be incomplete (HTML file is truncated)
- Responsive design is implemented with mobile-first approach
- Animation performance is optimized with CSS transforms
- Code follows modern web development best practices
- No framework dependencies keep the bundle size minimal