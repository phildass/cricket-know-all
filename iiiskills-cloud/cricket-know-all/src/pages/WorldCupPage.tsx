/**
 * Cricket Know All - World Cup 2026 Page
 */

import React from 'react';
import { colors, typography, spacing } from '../styles/theme';
import Card from '../components/Card';
import Button from '../components/Button';

export const WorldCupPage: React.FC = () => {
  const containerStyles: React.CSSProperties = {
    padding: `${spacing.xl}`,
    paddingBottom: '100px',
    minHeight: '100vh',
    background: `linear-gradient(to bottom, ${colors.midnightNavy} 0%, ${colors.cream} 30%)`,
  };

  const headerStyles: React.CSSProperties = {
    textAlign: 'center',
    color: colors.white,
    padding: `${spacing['3xl']} 0`,
  };

  const titleStyles: React.CSSProperties = {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['4xl'],
    fontWeight: typography.weights.bold,
    marginBottom: spacing.md,
  };

  const subtitleStyles: React.CSSProperties = {
    fontSize: typography.sizes.xl,
    color: colors.electricGold,
  };

  const sectionStyles: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    marginTop: spacing['2xl'],
  };

  const sectionTitleStyles: React.CSSProperties = {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['2xl'],
    fontWeight: typography.weights.bold,
    color: colors.midnightNavy,
    marginBottom: spacing.lg,
  };

  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: spacing.lg,
    marginBottom: spacing['3xl'],
  };

  const featureCardStyles: React.CSSProperties = {
    padding: spacing.xl,
  };

  const iconStyles: React.CSSProperties = {
    fontSize: typography.sizes['3xl'],
    marginBottom: spacing.md,
  };

  const cardTitleStyles: React.CSSProperties = {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    color: colors.midnightNavy,
    marginBottom: spacing.sm,
  };

  const cardDescStyles: React.CSSProperties = {
    fontSize: typography.sizes.base,
    color: colors.darkGray,
    lineHeight: 1.6,
    marginBottom: spacing.md,
  };

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <h1 style={titleStyles}>🏆 T20 World Cup 2026</h1>
        <p style={subtitleStyles}>The Ultimate Cricket Championship</p>
      </div>

      <div style={sectionStyles}>
        <h2 style={sectionTitleStyles}>Team India War Room</h2>
        <div style={gridStyles}>
          <Card variant="elevated" hoverable>
            <div style={featureCardStyles}>
              <div style={iconStyles}>🇮🇳</div>
              <h3 style={cardTitleStyles}>Squad Analysis</h3>
              <p style={cardDescStyles}>
                Deep dive into India's World Cup squad with player form, stats, and match-up insights.
              </p>
              <Button variant="primary">View Squad</Button>
            </div>
          </Card>

          <Card variant="elevated" hoverable>
            <div style={featureCardStyles}>
              <div style={iconStyles}>📊</div>
              <h3 style={cardTitleStyles}>Live Stats</h3>
              <p style={cardDescStyles}>
                Real-time performance tracking for all Indian players throughout the tournament.
              </p>
              <Button variant="primary">Live Dashboard</Button>
            </div>
          </Card>

          <Card variant="elevated" hoverable>
            <div style={featureCardStyles}>
              <div style={iconStyles}>🎯</div>
              <h3 style={cardTitleStyles}>Match Predictions</h3>
              <p style={cardDescStyles}>
                AI-powered predictions and match previews for India's fixtures.
              </p>
              <Button variant="primary">View Predictions</Button>
            </div>
          </Card>
        </div>

        <h2 style={sectionTitleStyles}>Tournament Schedule</h2>
        <div style={gridStyles}>
          <Card variant="outlined">
            <div style={{ padding: spacing.lg }}>
              <div style={{ fontSize: typography.sizes.base, fontWeight: typography.weights.bold, marginBottom: spacing.sm }}>
                🇮🇳 India vs Pakistan 🇵🇰
              </div>
              <div style={{ color: colors.darkGray, fontSize: typography.sizes.sm, marginBottom: spacing.sm }}>
                Group Stage - Match 16<br />
                Eden Gardens, Kolkata<br />
                June 15, 2026 - 7:30 PM IST
              </div>
              <Button variant="gold" size="sm" fullWidth>Set Reminder</Button>
            </div>
          </Card>

          <Card variant="outlined">
            <div style={{ padding: spacing.lg }}>
              <div style={{ fontSize: typography.sizes.base, fontWeight: typography.weights.bold, marginBottom: spacing.sm }}>
                🇮🇳 India vs Australia 🇦🇺
              </div>
              <div style={{ color: colors.darkGray, fontSize: typography.sizes.sm, marginBottom: spacing.sm }}>
                Group Stage - Match 22<br />
                Wankhede Stadium, Mumbai<br />
                June 20, 2026 - 7:30 PM IST
              </div>
              <Button variant="gold" size="sm" fullWidth>Set Reminder</Button>
            </div>
          </Card>

          <Card variant="outlined">
            <div style={{ padding: spacing.lg }}>
              <div style={{ fontSize: typography.sizes.base, fontWeight: typography.weights.bold, marginBottom: spacing.sm }}>
                🇮🇳 India vs England 🏴󠁧󠁢󠁥󠁮󠁧󠁿
              </div>
              <div style={{ color: colors.darkGray, fontSize: typography.sizes.sm, marginBottom: spacing.sm }}>
                Group Stage - Match 28<br />
                M. Chinnaswamy Stadium, Bangalore<br />
                June 25, 2026 - 7:30 PM IST
              </div>
              <Button variant="gold" size="sm" fullWidth>Set Reminder</Button>
            </div>
          </Card>
        </div>

        <h2 style={sectionTitleStyles}>Venues</h2>
        <div style={gridStyles}>
          <Card variant="elevated" hoverable>
            <div style={featureCardStyles}>
              <div style={iconStyles}>🏟️</div>
              <h3 style={cardTitleStyles}>Eden Gardens</h3>
              <p style={cardDescStyles}>
                Kolkata • Capacity: 66,000<br />
                Known for passionate crowds and spin-friendly pitch.
              </p>
              <Button variant="outline" size="sm">Venue Guide</Button>
            </div>
          </Card>

          <Card variant="elevated" hoverable>
            <div style={featureCardStyles}>
              <div style={iconStyles}>🏟️</div>
              <h3 style={cardTitleStyles}>Wankhede Stadium</h3>
              <p style={cardDescStyles}>
                Mumbai • Capacity: 33,000<br />
                Historic venue of India's 2011 World Cup triumph.
              </p>
              <Button variant="outline" size="sm">Venue Guide</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WorldCupPage;
