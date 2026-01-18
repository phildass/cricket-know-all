/**
 * Cricket Know All - Home Page (Live)
 */

import React from 'react';
import { colors, typography, spacing } from '../styles/theme';
import Card from '../components/Card';

export const HomePage: React.FC = () => {
  const containerStyles: React.CSSProperties = {
    padding: `${spacing.xl}`,
    paddingBottom: '100px', // Space for bottom navigation
    minHeight: '100vh',
    backgroundColor: colors.cream,
  };

  const titleStyles: React.CSSProperties = {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['3xl'],
    fontWeight: typography.weights.bold,
    color: colors.midnightNavy,
    marginBottom: spacing.lg,
  };

  const sectionStyles: React.CSSProperties = {
    marginBottom: spacing['2xl'],
  };

  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: spacing.lg,
  };

  return (
    <div style={containerStyles}>
      <h1 style={titleStyles}>🏏 Live Cricket</h1>
      
      <div style={sectionStyles}>
        <h2 style={{ ...titleStyles, fontSize: typography.sizes.xl }}>
          Live Matches
        </h2>
        <div style={gridStyles}>
          <Card variant="elevated" hoverable>
            <div style={{ padding: spacing.md }}>
              <div style={{ fontSize: typography.sizes.lg, fontWeight: typography.weights.bold, marginBottom: spacing.sm }}>
                🇮🇳 India vs Australia 🇦🇺
              </div>
              <div style={{ color: colors.darkGray, marginBottom: spacing.sm }}>
                T20 World Cup 2026 - Semi Final
              </div>
              <div style={{ fontSize: typography.sizes['2xl'], fontWeight: typography.weights.bold, color: colors.indianSaffron }}>
                IND 185/4 (18.2 ov)
              </div>
              <div style={{ color: colors.darkGray, fontSize: typography.sizes.sm }}>
                Target: 190 | Need 5 runs in 10 balls
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div style={sectionStyles}>
        <h2 style={{ ...titleStyles, fontSize: typography.sizes.xl }}>
          Upcoming Today
        </h2>
        <div style={gridStyles}>
          <Card variant="outlined">
            <div style={{ padding: spacing.md }}>
              <div style={{ fontSize: typography.sizes.base, fontWeight: typography.weights.semibold, marginBottom: spacing.sm }}>
                🇮🇳 India vs Pakistan 🇵🇰
              </div>
              <div style={{ color: colors.darkGray, fontSize: typography.sizes.sm }}>
                World Cup 2026 - Group Stage<br />
                Eden Gardens, Kolkata<br />
                7:30 PM IST
              </div>
            </div>
          </Card>
          <Card variant="outlined">
            <div style={{ padding: spacing.md }}>
              <div style={{ fontSize: typography.sizes.base, fontWeight: typography.weights.semibold, marginBottom: spacing.sm }}>
                👩 WPL Final
              </div>
              <div style={{ color: colors.darkGray, fontSize: typography.sizes.sm }}>
                Mumbai Indians vs Delhi Capitals<br />
                Wankhede Stadium, Mumbai<br />
                3:30 PM IST
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
