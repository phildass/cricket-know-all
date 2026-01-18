/**
 * Cricket Know All - World Cup Section Component
 */

import React from 'react';
import { colors, typography, spacing } from '../styles/theme';
import Card from '../components/Card';

export const WorldCupSection: React.FC = () => {
  const containerStyles: React.CSSProperties = {
    padding: `${spacing['4xl']} ${spacing.xl}`,
    backgroundColor: colors.cream,
  };

  const contentStyles: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
  };

  const headlineStyles: React.CSSProperties = {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['4xl'],
    fontWeight: typography.weights.bold,
    color: colors.midnightNavy,
    marginBottom: spacing.lg,
    textAlign: 'center',
  };

  const goldTextStyles: React.CSSProperties = {
    color: colors.indianSaffron,
  };

  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: spacing.xl,
    marginTop: spacing['2xl'],
  };

  const cardContentStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  };

  const cardTitleStyles: React.CSSProperties = {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    color: colors.midnightNavy,
  };

  const cardDescStyles: React.CSSProperties = {
    fontSize: typography.sizes.base,
    color: colors.darkGray,
    lineHeight: 1.6,
  };

  const iconStyles: React.CSSProperties = {
    fontSize: typography.sizes['3xl'],
    marginBottom: spacing.sm,
  };

  const features = [
    {
      icon: '🇮🇳',
      title: 'Team India Tracker',
      description: 'Deep profiles for Indian players with live form updates and performance analytics.',
    },
    {
      icon: '🏟️',
      title: 'Venue Guides',
      description: 'Quick facts, pitch reports, and statistics for all World Cup stadiums.',
    },
    {
      icon: '📅',
      title: 'Smart Schedule',
      description: 'Personalized reminders and match alerts for your favorite teams.',
    },
  ];

  return (
    <section style={containerStyles}>
      <div style={contentStyles}>
        <h2 style={headlineStyles}>
          The <span style={goldTextStyles}>2026 Men's T20 World Cup</span> Hub
        </h2>
        <div style={gridStyles}>
          {features.map((feature, index) => (
            <Card key={index} variant="elevated" hoverable>
              <div style={cardContentStyles}>
                <div style={iconStyles}>{feature.icon}</div>
                <h3 style={cardTitleStyles}>{feature.title}</h3>
                <p style={cardDescStyles}>{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldCupSection;
