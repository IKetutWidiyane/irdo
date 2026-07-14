# IRDO - International Robot Design Olympiad

Landing page for the International Robot Design Olympiad, built with React + Tailwind CSS + Framer Motion.

## Features

### ✨ Text Scramble (Binary)
- Animated headline using only binary characters (`0` and `1`) that scramble before resolving to the actual text
- Smooth progressive character resolution from left to right
- Click the headline to rescramble the animation
- Subtle 3D perspective tilt effect on hover (follows mouse position)

### 🖱️ Cursor Trail
- Small geometric shapes (circle, square, diamond, triangle) follow the cursor
- Particles have gravity, friction, rotation, and fade out naturally
- Rendered via Canvas API for high performance
- Indigo/irdo color palette

### 🌐 Background Mesh Pattern
- SVG-based wireframe/net pattern with grid lines and intersection dots
- Three layers: small grid (80px), large grid (160px), diagonal cross (120px)
- Adaptive opacity for light/dark mode
- Applied consistently across all sections

### 🎨 Design System (Tailwind CSS)
- Custom `irdo` color palette (indigo scale) as primary accent
- Surface colors: `#ffffff` light / `#0a0a0f` dark (not pure black)
- Custom utility classes defined in `index.css`:
  - `section-container`, `section-padding`
  - `card`, `card-hover`
  - `btn-primary`, `btn-secondary`
  - `input-field`
  - `section-label`, `section-title`, `section-desc`
  - `gradient-text`

### 📱 Sections
| Section | Description |
|---------|-------------|
| **Hero** | Binary scramble headline, badge, CTAs, stats (500+ participants, 30+ countries, 50+ speakers, $50K prize) |
| **About** | Mission/Vision cards + 4 feature cards (Global Reach, Expert Judging, Multiple Categories, Networking) |
| **Competition** | 4 categories (Creative Robot, Capstone Project, Autonomous Systems, AI Innovation) + alternating timeline + requirements |
| **Speakers** | 4 expert cards with gradient avatar initials |
| **Schedule** | 3-day card layout with gradient headers |
| **Register** | Registration form with validation |
| **Sponsors** | Tiered layout (Platinum/Gold/Silver) + Academic Partners |
| **Footer** | Dark theme with social icons, quick links, contact info |

### 🌗 Dark/Light Mode
- Full dark/light mode support with theme toggle
- Dark mode uses deep charcoal (`#0a0a0f`) instead of pure black
- All sections adapt colors, patterns, and glows per mode
- Persists user preference

## Tech Stack

- **React 19** with Hooks
- **Tailwind CSS 3** for styling
- **Framer Motion** for animations
- **Canvas API** for cursor trail
- **SVG Patterns** for background mesh

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## Project Structure

```
src/
├── App.js                    # Root component
├── index.css                 # Tailwind + custom utility classes
├── tailwind.config.js        # Theme configuration
├── hooks/
│   └── useScrambleText.js    # Hook for binary text scrambling animation
└── components/
    ├── Navbar.jsx            # Navigation with backdrop blur
    ├── Hero.jsx              # Hero section with scramble headline
    ├── About.jsx             # About section
    ├── Competition.jsx       # Competition details + timeline
    ├── Speakers.jsx          # Speaker cards
    ├── Schedule.jsx          # Event schedule
    ├── Register.jsx          # Registration form
    ├── Sponsors.jsx          # Sponsors & partners
    ├── Footer.jsx            # Site footer
    ├── ScrambleText.jsx      # Reusable scramble text component
    ├── CursorTrail.jsx       # Cursor trail particles
    ├── BackgroundPattern.jsx # SVG mesh/net background
    └── ThemeToggle.jsx       # Dark/light mode toggle
```

## Design Reference

Design follows principles inspired by Linear, Vercel, Stripe, and GitHub — prioritizing clarity, whitespace, hierarchy, and consistency.