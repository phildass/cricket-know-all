# Cricket Know All

**India's Premier AI Cricket Encyclopedia & Gamified Experience**

![Cricket Know All](./iiiskills-cloud/cricket-know-all/public/cricket.svg)

## Why Cricket Know All?

**Because for us, Cricket isn't just a game. It's an obsession.**

In a world of cluttered apps and basic scorecards, Cricket Know All is built for fans who want more.
We don't just tell you the score; we tell you the story behind every ball, the history behind every player, and the math behind every win.

### The "Indian Heart" Engine

Optimized for the Indian fan. From new heroes in the Ranji Trophy to the World Cup form of Virat Kohli—India's legends and rising stars are always front and center.

### Intelligence Beyond the Scorecard

Ask any question—from "Who won India vs Pakistan 2022?" to "How many times has Bumrah dismissed Babar Azam in T20s?" No more searching, just knowing.

### Women's Cricket & IPL

Not just a tab—a dedicated destination. Elite design and data for WPL, Women's Internationals, and IPL alike.

### Gamified Wisdom

Earn marks, score Centuries, and become a Cricket Legend. Dive into modules, climb leaderboards, and sharpen your mastery—it's trivia as a career, not a pastime.

### Clean. Elegant. Fast.

No clutter, no ads. Just premium performance, beautiful card-based interfaces, floating nav, and instant updates at every tap.

## The Know All Promise

> "If it happened on a cricket pitch—anywhere, in any era, in any format—you will find it here. Zero blind spots. Total coverage."

---

## 🚀 Features

### Core Features

- **🏏 Live Cricket Hub**: Real-time scores, match updates, and live commentary
- **🔍 AI-Powered Search**: Find anything cricket-related instantly with semantic search
- **🏆 World Cup 2026 Hub**: Complete coverage of the Men's T20 World Cup
- **👩 Women's Cricket & IPL**: Dedicated sections with rich data and exclusive content
- **🎯 Gamified Trivia**: 10 modules, 100 questions - become a Cricket Mastermind
- **📊 Player Profiles**: Deep-dive stats, bio, records, and live form for every player
- **🏟️ Venue Guides**: Stadium facts, pitch reports, and historical data

### Trivia System Features

- **Progression System**: Street Cricketer → Club Player → Domestic Star → International → Legend
- **Run Economy**: Earn runs for correct answers, spend to unlock content
- **Century Badges**: Perfect scores earn exclusive badges
- **Leaderboards**: Local and national rankings
- **Super Over**: Daily 6-question challenge with double points
- **Nostalgia Alerts**: Daily push notifications with historic events

---

## 🎨 Design System

### Color Palette

- **Primary**: Midnight Navy (`#0A1A39`)
- **Secondary**: Electric Gold (`#FFD700`)
- **Accent**: Indian Saffron (`#FF9933`)
- **Supporting**: Cream, White, Dark Gray

### Typography

- **Headings**: Montserrat (Bold, Sans-serif)
- **Body**: Inter (Clean, Readable)

### UI Principles

- Card-based layouts with elegant white space
- Floating bottom navigation for easy access
- Micro-animations for premium feel
- Responsive design for all devices

---

## 📁 Project Structure

```
iiiskills-cloud/cricket-know-all/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── SearchDemo.tsx
│   │   ├── WorldCupSection.tsx
│   │   ├── TriviaChallenge.tsx
│   │   └── WomenIPLSection.tsx
│   ├── pages/               # Main application pages
│   │   ├── LandingPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── DiscoverPage.tsx
│   │   └── TriviaPage.tsx
│   ├── styles/              # Design system and themes
│   │   ├── theme.ts
│   │   └── global.ts
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── database/            # Database schema and sample data
│   │   ├── schema.ts
│   │   └── sampleData.ts
│   ├── services/            # API and external services
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main app component
│   └── index.tsx            # Application entry point
├── public/                  # Static assets
├── docs/                    # Documentation
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

---

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ and Yarn
- Modern web browser
- (Optional) PostgreSQL for database

### Installation Steps

1. **Clone the repository**
   ```bash
   cd /home/runner/work/cricket-know-all/cricket-know-all
   ```

2. **Navigate to the app directory**
   ```bash
   cd iiiskills-cloud/cricket-know-all
   ```

3. **Install dependencies**
   ```bash
   yarn install
   ```

4. **Run the development server**
   ```bash
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
yarn build
```

The built files will be in the `dist/` directory.

---

## 🗄️ Database Schema

The application uses the following main tables:

### Core Tables

- **Player**: Player information (name, role, country, bio, stats)
- **PlayerStats**: Performance statistics by format
- **Match**: Match details, scores, and status
- **Venue**: Stadium information and quick facts
- **Team**: Team details (national, IPL, WPL)

### Trivia Tables

- **TriviaModule**: Module structure and unlock requirements
- **TriviaQuestion**: Questions with options and explanations
- **TriviaProgress**: User progress and scores

### User Tables

- **UserProfile**: User information and rankings
- **Badge**: Achievement badges
- **Notification**: Push notifications and alerts

See `src/database/schema.ts` for complete schema definition.

---

## 📱 Navigation Structure

The app features a persistent bottom navigation bar:

1. **Home (Live)** 🏏 - Live matches and upcoming fixtures
2. **Discover (Search)** 🔍 - AI-powered search for players, matches, stats
3. **World Cup '26** 🏆 - 2026 T20 World Cup hub
4. **Women's/IPL** ⭐ - Women's cricket and IPL content
5. **Trivia** 🎯 - Gamified quiz modules

---

## 🎯 Trivia Game Mechanics

### Module Structure

- 10 modules with 10 questions each (100 total)
- Categories: History, IPL, Women's Cricket, World Cup 2026, Fielding, Bowling, Captaincy, Rules, Records, Legends

### Scoring System

- 1 correct answer = 1 "Run"
- Perfect module (10/10) = "Century" badge
- Unlock modules by earning runs
- Spend runs on exclusive content

### Progression Ranks

1. **Street Cricketer** (0-50 runs)
2. **Club Player** (51-150 runs)
3. **Domestic Star** (151-350 runs)
4. **International** (351-650 runs)
5. **Legend** (651+ runs)

### Daily Challenges

- **Super Over**: 6 questions in 60 seconds, double points
- **Nostalgia Alert**: Daily historic event quiz

---

## 🔌 API Integration (Future)

The app is designed to integrate with:

- **Sportradar API**: Live scores and match data
- **Cricbuzz API**: Player stats and news
- **Custom RAG/LLM**: AI-powered search and insights

---

## 🚧 Development Roadmap

### Phase 1 (Current)
- [x] Core UI components and design system
- [x] Landing page with all sections
- [x] Navigation system
- [x] Basic pages (Home, Discover, Trivia)
- [x] Database schema and sample data

### Phase 2 (Next)
- [ ] Live API integration
- [ ] Full trivia game implementation
- [ ] User authentication and profiles
- [ ] Real-time match updates
- [ ] Push notifications

### Phase 3 (Future)
- [ ] AI-powered search with RAG
- [ ] Social features and leaderboards
- [ ] Premium content unlocks
- [ ] Mobile app (React Native)
- [ ] Advanced analytics and insights

---

## 🧪 Testing

```bash
# Type checking
yarn type-check

# Linting
yarn lint

# Build test
yarn build
```

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🤝 Contributing

This project follows monorepo conventions and universal features from other Learn-apps in the iiiskills-cloud ecosystem.

### Guidelines

- Use TypeScript for all new code
- Follow the existing design system
- Write clear, concise commit messages
- Test all changes before submitting
- Never reference legacy names (CricOmni, learn-cricket, etc.)

---

## 📞 Support

For questions, issues, or feature requests, please open an issue on GitHub.

---

**Built with ❤️ for cricket fans everywhere**

*Cricket Know All - If it happened on a cricket pitch, you'll find it here.*
