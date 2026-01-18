/**
 * Cricket Know All - Trivia Challenge Component
 */

import React from 'react';
import { colors, typography, spacing, borderRadius } from '../styles/theme';
import Button from '../components/Button';

export const TriviaChallenge: React.FC = () => {
  const containerStyles: React.CSSProperties = {
    padding: `${spacing['4xl']} ${spacing.xl}`,
    background: `linear-gradient(135deg, ${colors.midnightNavy} 0%, ${colors.darkGray} 100%)`,
    color: colors.white,
  };

  const contentStyles: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const headlineStyles: React.CSSProperties = {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['4xl'],
    fontWeight: typography.weights.bold,
    marginBottom: spacing.md,
  };

  const goldTextStyles: React.CSSProperties = {
    color: colors.electricGold,
  };

  const subheadlineStyles: React.CSSProperties = {
    fontSize: typography.sizes.xl,
    color: colors.cream,
    marginBottom: spacing['2xl'],
  };

  const badgeContainerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: spacing.xl,
    marginBottom: spacing['3xl'],
    flexWrap: 'wrap',
  };

  const badgeStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.sm,
  };

  const badgeIconStyles: React.CSSProperties = {
    fontSize: typography.sizes['5xl'],
    filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))',
  };

  const badgeLabelStyles: React.CSSProperties = {
    fontSize: typography.sizes.sm,
    color: colors.electricGold,
    fontWeight: typography.weights.semibold,
  };

  const leaderboardStyles: React.CSSProperties = {
    backgroundColor: colors.navyAlpha80,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    maxWidth: '600px',
    margin: `${spacing['2xl']} auto`,
    border: `2px solid ${colors.electricGold}`,
  };

  const leaderboardTitleStyles: React.CSSProperties = {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    marginBottom: spacing.md,
    color: colors.electricGold,
  };

  const leaderboardItemStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: spacing.md,
    borderBottom: `1px solid ${colors.navyAlpha60}`,
    fontSize: typography.sizes.base,
  };

  return (
    <section style={containerStyles}>
      <div style={contentStyles}>
        <h2 style={headlineStyles}>
          Are You a <span style={goldTextStyles}>"Gully Cricketer"</span> or a{' '}
          <span style={goldTextStyles}>"Legend"</span>?
        </h2>
        <p style={subheadlineStyles}>
          10 Modules. 100 Questions. Only one Mastermind.
        </p>

        <div style={badgeContainerStyles}>
          <div style={badgeStyles}>
            <div style={badgeIconStyles}>🏏</div>
            <div style={badgeLabelStyles}>Street Cricketer</div>
          </div>
          <div style={badgeStyles}>
            <div style={badgeIconStyles}>⭐</div>
            <div style={badgeLabelStyles}>Club Player</div>
          </div>
          <div style={badgeStyles}>
            <div style={badgeIconStyles}>🏅</div>
            <div style={badgeLabelStyles}>Domestic Star</div>
          </div>
          <div style={badgeStyles}>
            <div style={badgeIconStyles}>🏆</div>
            <div style={badgeLabelStyles}>Legend</div>
          </div>
        </div>

        <div style={leaderboardStyles}>
          <div style={leaderboardTitleStyles}>🔥 Live Leaderboard</div>
          <div style={leaderboardItemStyles}>
            <span>Rahul from Mumbai</span>
            <span style={{ color: colors.electricGold }}>Century in Module 4! 💯</span>
          </div>
          <div style={leaderboardItemStyles}>
            <span>Priya from Delhi</span>
            <span style={{ color: colors.electricGold }}>850 Runs Total 🚀</span>
          </div>
          <div style={leaderboardItemStyles}>
            <span>Arjun from Bangalore</span>
            <span style={{ color: colors.electricGold }}>5 Centuries! 🎯</span>
          </div>
        </div>

        <Button variant="gold" size="lg">
          Start Your First Module
        </Button>
      </div>
    </section>
  );
};

export default TriviaChallenge;
