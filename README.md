# SWG Infinity Frontend

A modern Next.js website for the Star Wars Galaxies Infinity server community, featuring an interactive events calendar, player spotlight system, comprehensive guides, and community features.

## 🌟 Features

- **Interactive Events Calendar** - Browse and filter community events
- **Player Recognition System** - Monthly player spotlights and achievements
- **Comprehensive Guides** - Profession, quest, and dungeon guides
- **Character Builder** - Plan your character's profession and skills
- **Community Hub** - Discord integration and player cities
- **Server Status** - Real-time server information
- **Patch Notes** - Categorized update information
- **Responsive Design** - Optimized for all devices

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/RogerHuba/frontend.git
cd frontend
```

1. Install dependencies:

```bash
npm install
```

1. Run the development server:

```bash
npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000) to view the site

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run linting and type checking
npm run format     # Format code with Biome
```

## 📁 Project Structure

```text
├── public/                 # Static assets (images, icons)
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about-infinity/    # About section pages
│   │   ├── character-builder/ # Character planning tool
│   │   ├── community/         # Community information
│   │   ├── events/           # Events calendar
│   │   ├── guides/           # Game guides
│   │   ├── server-information/ # Server details
│   │   └── api/              # API routes
│   ├── components/        # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── about-infinity/   # About section components
│   │   ├── character-builder/ # Character builder components
│   │   └── guides/           # Guide-specific components
│   ├── data/             # JSON data files
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Helper functions
├── vercel.json           # Vercel deployment configuration
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Next.js built-in
- **Linting**: Biome
- **Deployment**: Vercel

## 📊 Content Management

### Server Status Management

Update server information in `/src/data/serverStatus.json`:

```json
{
  "status": "online",           // "online" | "high-traffic" | "maintenance" | "offline"
  "playerCount": 847,
  "maxPlayers": 1500,
  "serverName": "SWG Infinity",
  "lastUpdated": "2025-07-09T15:30:00Z",
  "maintenanceMessage": null,   // String message during maintenance
  "motd": "Welcome to Star Wars Galaxies Infinity!",
  "events": [
    {
      "name": "Double XP Weekend",
      "active": false,
      "startTime": "2025-07-12T18:00:00Z",
      "endTime": "2025-07-14T23:59:59Z"
    }
  ],
  "serverInfo": {
    "uptime": "99.8%",
    "version": "2.0.97",
    "location": "US East",
    "timezone": "EST"
  }
}
```

### Patch Notes Management

Add new patches to `/src/data/patchNotes.json` with categorized structure:

```json
{
  "id": "2025-07-15",
  "version": "2.4.0",
  "date": "July 15, 2025",
  "title": "Summer Update",
  "categories": [
    {
      "area": "Jedi",
      "updates": [
        {"type": "balance", "description": "Force Absorb cooldown reduced"},
        {"type": "change", "description": "Jedi state set to Padawan when leaving FRS"},
        {"type": "addition", "description": "Added confirmation dialog"}
      ]
    },
    {
      "area": "Combat",
      "updates": [
        {"type": "addition", "description": "Added new weapon types"},
        {"type": "balance", "description": "Rebalanced lightsaber damage"}
      ]
    }
  ]
}
```

**Update Types:**

- `addition` - New features (green)
- `change` - Modifications (blue)
- `balance` - Balance changes (orange)
- `fix` - Bug fixes (purple)

**Recommended Categories:**

- Jedi, Combat, Crafting, Player vs Player, Creatures & NPCs
- Space, Housing & Decoration, Player Association, Quests & Collections
- User Interface, Misc Features, Bug Fixes

### Events Calendar Management

Manage community events in `/src/data/events.json`:

```json
{
  "events": [
    {
      "id": 1,
      "title": "Weekly PvP Tournament",
      "date": "2025-01-18",
      "time": "20:00",
      "timezone": "EST",
      "type": "pvp",                    // "pvp" | "social" | "training" | "dungeon" | "contest"
      "description": "Join us for our weekly PvP tournament!",
      "location": "Bestine Arena, Tatooine",
      "organizer": "PvP Council",
      "maxParticipants": 32,
      "rewards": ["Tournament Trophy", "Credits", "Rare Materials"],
      "recurring": "weekly"
    }
  ]
}
```

### Team Positions Management

Update job postings in `/src/data/teamPositions.json`:

```json
{
  "id": "unique-position-id",
  "title": "Position Title",
  "icon": "Code",                     // Lucide React icon name
  "description": "Detailed description of the role and responsibilities.",
  "requirements": [
    "First requirement",
    "Second requirement",
    "Third requirement"
  ],
  "applicationEmail": "devs@swginfinity.com",
  "applicationNote": "Apply by emailing with examples of your work."
}
```

**Available Icons:**

- `Code` - Programming/development
- `Users` - Community/management
- `MessageCircle` - Communication/content
- `Wrench` - Technical support
- `Brush` - Creative/design
- `Database` - Database/technical
- `Shield` - Security/QA
- `HelpCircle` - Documentation/help

## 🚀 Deployment

### Vercel Deployment (Recommended)

#### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

#### Option 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and login
1. Click "New Project"
1. Import your Git repository
1. Vercel auto-detects Next.js configuration
1. Click "Deploy"

### Build Configuration

Your project includes:

- **`vercel.json`** - Vercel-specific configuration
- **`next.config.js`** - Next.js configuration optimized for Vercel
- **`.vercelignore`** - Files excluded from deployment
- **`.env.example`** - Environment variables template

### Environment Variables

Set in Vercel Dashboard under Project Settings → Environment Variables:

- `NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app`
- `NEXT_PUBLIC_DISCORD_INVITE=your-discord-invite-link`

### Performance Features

- Static Site Generation (SSG) for optimal performance
- Image optimization for faster loading
- Automatic code splitting with Next.js
- Gzip compression via Vercel
- Global CDN distribution

## 🐛 Troubleshooting

### Build Errors

- Run `npm run build` to check for TypeScript errors
- Verify all imports are correct
- Ensure environment variables are set

### Deployment Issues

- Check Vercel Function Logs in dashboard
- Verify Node.js version compatibility
- Review build output for errors

### Development Issues

- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`
- Check browser console for client-side errors
- Verify all dependencies are installed: `npm install`

## 🔧 Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow the existing component structure
- Use Tailwind CSS for styling
- Keep components focused and reusable

### Adding New Pages

1. Create page in `/src/app/` directory
1. Add corresponding component in `/src/components/`
1. Update navigation if needed
1. Add to guides or appropriate section

### Component Structure

```tsx
"use client";

import { Navigation } from "@/components/Navigation";
import { PageLayout } from "@/components/PageLayout";

export function YourComponent() {
  return (
    <PageLayout title="Your Title" subtitle="Your subtitle">
      {/* Your content */}
    </PageLayout>
  );
}
```

## 📈 Monitoring & Analytics

Vercel provides built-in monitoring:

- Real User Monitoring (RUM)
- Core Web Vitals tracking
- Function logs and performance
- Deployment analytics

## 🤝 Contributing

1. Fork the repository
1. Create a feature branch: `git checkout -b feature-name`
1. Make your changes and test locally
1. Commit with descriptive messages
1. Push to your fork and create a pull request

## 📄 License

This project is proprietary to SWG Infinity. All rights reserved.

## 🔗 Links

- **Live Site**: [SWG Infinity Website](https://your-domain.vercel.app)
- **Discord**: [Join our community](https://discord.gg/jyakeRJ)
- **Vercel**: [Deployment platform](https://vercel.com)
- **Next.js**: [Framework documentation](https://nextjs.org/docs)

---

**Star Wars Galaxies Infinity** - Experience the galaxy like never before! 🌟
