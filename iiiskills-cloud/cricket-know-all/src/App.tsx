/**
 * Cricket Know All - Main App Component
 */

import React, { useState } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import TriviaPage from './pages/TriviaPage';
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
      return <LandingPage />;
    }

    switch (currentRoute) {
      case 'home':
        return <HomePage />;
      case 'discover':
        return <DiscoverPage />;
      case 'worldcup':
        return (
          <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh' }}>
            <h1>🏆 World Cup 2026</h1>
            <p>Coming soon...</p>
          </div>
        );
      case 'women-ipl':
        return (
          <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh' }}>
            <h1>⭐ Women's Cricket & IPL</h1>
            <p>Coming soon...</p>
          </div>
        );
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
