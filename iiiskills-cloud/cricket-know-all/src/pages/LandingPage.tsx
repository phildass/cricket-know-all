/**
 * Cricket Know All - Landing Page
 */

import React from 'react';
import HeroSection from '../components/HeroSection';
import SearchDemo from '../components/SearchDemo';
import WorldCupSection from '../components/WorldCupSection';
import TriviaChallenge from '../components/TriviaChallenge';
import WomenIPLSection from '../components/WomenIPLSection';
import { spacing } from '../styles/theme';

export const LandingPage: React.FC = () => {
  const containerStyles: React.CSSProperties = {
    paddingBottom: spacing['4xl'], // Space for navigation
  };

  return (
    <div style={containerStyles}>
      <HeroSection />
      <SearchDemo />
      <WorldCupSection />
      <TriviaChallenge />
      <WomenIPLSection />
    </div>
  );
};

export default LandingPage;
