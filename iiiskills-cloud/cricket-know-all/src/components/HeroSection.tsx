/**
 * Cricket Know All - Hero Section Component
 */

import React from 'react';
import { colors, typography, spacing, shadows } from '../styles/theme';
import Button from '../components/Button';

export const HeroSection: React.FC = () => {
  const containerStyles: React.CSSProperties = {
    position: 'relative',
    minHeight: '600px',
    background: `linear-gradient(135deg, ${colors.midnightNavy} 0%, ${colors.darkGray} 100%)`,
    color: colors.white,
    padding: `${spacing['4xl']} ${spacing.xl}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  const contentStyles: React.CSSProperties = {
    maxWidth: '1280px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: spacing['3xl'],
    alignItems: 'center',
    zIndex: 2,
  };

  const textContainerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xl,
  };

  const headlineStyles: React.CSSProperties = {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['6xl'],
    fontWeight: typography.weights.extrabold,
    lineHeight: 1.1,
    marginBottom: spacing.md,
  };

  const goldTextStyles: React.CSSProperties = {
    color: colors.electricGold,
  };

  const subheadlineStyles: React.CSSProperties = {
    fontSize: typography.sizes.xl,
    lineHeight: 1.6,
    color: colors.cream,
    marginBottom: spacing.lg,
  };

  const imageContainerStyles: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    gap: spacing.md,
    justifyContent: 'center',
  };

  const playerCardStyles: React.CSSProperties = {
    width: '200px',
    height: '280px',
    backgroundColor: colors.navyAlpha80,
    borderRadius: '16px',
    boxShadow: shadows.xl,
    border: `3px solid ${colors.electricGold}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: typography.sizes['4xl'],
  };

  const decorativeCircleStyles: React.CSSProperties = {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: `radial-gradient(circle, ${colors.goldAlpha20} 0%, transparent 70%)`,
    top: '-100px',
    right: '-100px',
    zIndex: 1,
  };

  return (
    <section style={containerStyles}>
      <div style={decorativeCircleStyles} />
      <div style={contentStyles}>
        <div style={textContainerStyles}>
          <h1 style={headlineStyles}>
            The World Cup is Here. <br />
            <span style={goldTextStyles}>Know Everything.</span>
          </h1>
          <p style={subheadlineStyles}>
            From live 2026 World Cup scores to the deepest secrets of Indian Cricket.
          </p>
          <div style={{ display: 'flex', gap: spacing.md, flexWrap: 'wrap' }}>
            <Button variant="gold" size="lg">
              Download Cricket Know All
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        <div style={imageContainerStyles}>
          <div style={playerCardStyles}>
            👩‍🦰
            <div style={{ fontSize: typography.sizes.sm, marginTop: spacing.md }}>
              Harmanpreet
            </div>
          </div>
          <div style={{ ...playerCardStyles, marginTop: spacing['2xl'] }}>
            👨
            <div style={{ fontSize: typography.sizes.sm, marginTop: spacing.md }}>
              Virat Kohli
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
