/**
 * Cricket Know All - Main App Component
 */

import { useState } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import TriviaPage from './pages/TriviaPage';
import WorldCupPage from './pages/WorldCupPage';
import WomenIPLPage from './pages/WomenIPLPage';
import type { NavigationRoute } from './types';

function App() {
  const [currentRoute, setCurrentRoute] = useState<NavigationRoute>('home');
  const [showLanding, setShowLanding] = useState(true);

  const handleNavigate = (route: NavigationRoute) => {
    setShowLanding(false);
    setCurrentRoute(route);
  };

  const renderPage = () => {
    if (showLanding) {
      return <LandingPage onEnterApp={() => setShowLanding(false)} />;
    }

    switch (currentRoute) {
      case 'home':
        return <HomePage />;
      case 'discover':
        return <DiscoverPage />;
      case 'worldcup':
        return <WorldCupPage />;
      case 'women-ipl':
        return <WomenIPLPage />;
      case 'trivia':
        return <TriviaPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      {renderPage()}
      {!showLanding && (
        <Navigation currentRoute={currentRoute} onNavigate={handleNavigate} />
      )}
    </>
  );
}

export default App;
