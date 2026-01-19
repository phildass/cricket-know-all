/**
 * Cricket Know All - Landing Page
 */

import React from 'react';
import HeroSection from '../components/HeroSection';
import SearchDemo from '../components/SearchDemo';
import WorldCupSection from '../components/WorldCupSection';
import TriviaChallenge from '../components/TriviaChallenge';
import WomenIPLSection from '../components/WomenIPLSection';
import Button from '../components/Button';
import { spacing, colors, typography } from '../styles/theme';

interface LandingPageProps {
  onEnterApp?: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp }) => {
  const containerStyles: React.CSSProperties = {
    paddingBottom: spacing['4xl'], // Space for navigation
  };

  const ctaContainerStyles: React.CSSProperties = {
    textAlign: 'center',
    padding: `${spacing['4xl']} ${spacing.xl}`,
    background: `linear-gradient(135deg, ${colors.midnightNavy} 0%, ${colors.darkGray} 100%)`,
  };

  const ctaTitleStyles: React.CSSProperties = {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['3xl'],
    fontWeight: typography.weights.bold,
    color: colors.white,
    marginBottom: spacing.lg,
  };

  const ctaSubtitleStyles: React.CSSProperties = {
    fontSize: typography.sizes.lg,
    color: colors.cream,
    marginBottom: spacing['2xl'],
  };

  return (
    <div style={containerStyles}>
      <HeroSection />
      <SearchDemo />
      <WorldCupSection />
      <TriviaChallenge />
      <WomenIPLSection />
      
      <div style={ctaContainerStyles}>
        <h2 style={ctaTitleStyles}>Ready to Become a Cricket Legend?</h2>
        <p style={ctaSubtitleStyles}>
          Enter the app and start your journey to cricket mastery
        </p>
        {onEnterApp && (
          <Button variant="gold" size="lg" onClick={onEnterApp}>
            Enter Cricket Know All →
          </Button>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
