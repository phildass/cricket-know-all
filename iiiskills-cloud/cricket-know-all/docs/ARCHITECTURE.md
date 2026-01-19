# Cricket Know All - Architecture Documentation

## Overview

Cricket Know All is a comprehensive cricket encyclopedia and gamified experience built with React, TypeScript, and Vite. The application follows a monorepo structure and is designed to integrate with universal features from the iiiskills-cloud ecosystem.

## Technology Stack

### Frontend
- **React 18**: Component-based UI framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **React Router**: Client-side routing (to be added)

### Styling
- **Inline Styles with Theme System**: Consistent design system
- **Google Fonts**: Montserrat (headings) and Inter (body)

### State Management
- **React Hooks**: useState, useEffect for local state
- **Future**: Context API or Redux for global state

### Backend (Future)
- **PostgreSQL/MySQL**: Relational database
- **REST API**: Backend API services
- **GraphQL**: Advanced data querying (optional)

## Design Patterns

### Component Structure
```
components/
├── Shared/          # Reusable UI components (Button, Card, etc.)
├── Features/        # Feature-specific components (HeroSection, SearchDemo, etc.)
└── Layout/          # Layout components (Navigation)
```

### Page Structure
```
pages/
├── LandingPage     # Marketing landing page
├── HomePage        # Live cricket matches
├── DiscoverPage    # Search and discovery
├── TriviaPage      # Trivia game
└── [Future pages]  # World Cup, Women's/IPL
```

### Data Flow
1. **Data Models** (types/index.ts) - TypeScript interfaces
2. **Sample Data** (database/sampleData.ts) - Mock data for development
3. **Components** - Consume data via props
4. **Pages** - Coordinate data fetching and component composition

## Design System

### Theme Architecture
The design system is centralized in `src/styles/theme.ts`:

```typescript
{
  colors: { ... },        // Color palette
  typography: { ... },    // Fonts and sizes
  spacing: { ... },       // Consistent spacing
  borderRadius: { ... },  // Border radius values
  shadows: { ... },       // Box shadows
  breakpoints: { ... }    // Responsive breakpoints
}
```

### Component API Patterns
All components follow consistent prop patterns:
- `variant`: Style variants (primary, secondary, etc.)
- `size`: Size variants (sm, md, lg)
- `className`: Custom CSS classes
- `children`: React children for composition

## Database Architecture

### Schema Design
See `src/database/schema.ts` for complete schema.

Key principles:
- **Normalization**: Separate tables for players, stats, matches
- **Relationships**: Foreign keys for data integrity
- **Indexes**: Performance optimization on common queries
- **Timestamps**: Track creation and updates

### Query Patterns
Common query patterns are documented in `src/database/schema.ts`:
- Player search
- Match schedules
- User progress
- Leaderboards

## Gamification System

### Trivia Module Architecture
```
TriviaModule
├── module_id
├── title
├── category
├── questions[]
└── unlock_requirement
```

### Scoring Algorithm
```
Runs = Correct Answers × 1
Century = 10/10 correct in a module
Rank = Function(total_runs, centuries)
```

### Progression System
- Street Cricketer: 0-50 runs
- Club Player: 51-150 runs
- Domestic Star: 151-350 runs
- International: 351-650 runs
- Legend: 651+ runs

## API Integration (Future)

### External APIs
1. **Sportradar API**: Live scores, match data
2. **Cricbuzz API**: Player stats, news
3. **Custom RAG/LLM**: AI-powered search

### API Service Layer
```typescript
services/
├── cricketAPI.ts      # Main API wrapper
├── playerService.ts   # Player data
├── matchService.ts    # Match data
└── searchService.ts   # AI search
```

## Performance Optimization

### Current
- Vite for fast builds
- Code splitting by route (future)
- Lazy loading for images (future)

### Future Optimizations
- React.lazy for code splitting
- useMemo/useCallback for expensive computations
- Virtual scrolling for long lists
- Service Worker for offline support

## Security Considerations

### Current
- TypeScript for type safety
- Input sanitization in search
- No sensitive data in client code

### Future
- JWT authentication
- HTTPS only
- Rate limiting
- SQL injection prevention
- XSS protection

## Testing Strategy (Future)

### Unit Tests
- Component tests with React Testing Library
- Utility function tests with Jest

### Integration Tests
- API integration tests
- User flow tests

### E2E Tests
- Cypress or Playwright for critical paths

## Deployment

### Build Process
```bash
yarn build
```
Output: Optimized static files in `dist/`

### Hosting Options
- Vercel (recommended)
- Netlify
- AWS S3 + CloudFront
- Firebase Hosting

## Accessibility

### Current Features
- Semantic HTML
- Keyboard navigation support
- Color contrast compliance

### Future Enhancements
- ARIA labels
- Screen reader optimization
- Focus management
- High contrast mode

## Internationalization (Future)

### Strategy
- i18n library integration
- English (default)
- Hindi
- Regional Indian languages

## Mobile Strategy

### Responsive Web
- Mobile-first design
- Touch-friendly UI
- Bottom navigation for thumb zone

### Native Apps (Future)
- React Native for iOS/Android
- Code sharing with web app

## Monitoring & Analytics (Future)

### Performance Monitoring
- Web Vitals tracking
- Error tracking (Sentry)

### User Analytics
- User behavior tracking
- Conversion funnel analysis
- A/B testing framework

## Contributing Guidelines

### Code Style
- Use TypeScript for all new code
- Follow existing naming conventions
- Use functional components with hooks
- Write self-documenting code

### Git Workflow
- Feature branches
- Pull request reviews
- Conventional commits

### Documentation
- Update README for new features
- Document complex logic
- Maintain architecture docs

---

*Last updated: 2026-01-18*
