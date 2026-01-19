/**
 * Cricket Know All - Women's Cricket & IPL Section Component
 */

import React from 'react';
import { colors, typography, spacing } from '../styles/theme';
import Card from '../components/Card';

export const WomenIPLSection: React.FC = () => {
  const containerStyles: React.CSSProperties = {
    padding: `${spacing['4xl']} ${spacing.xl}`,
    backgroundColor: colors.white,
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
    marginBottom: spacing.md,
    textAlign: 'center',
  };

  const goldTextStyles: React.CSSProperties = {
    color: colors.indianSaffron,
  };

  const descriptionStyles: React.CSSProperties = {
    fontSize: typography.sizes.lg,
    color: colors.darkGray,
    textAlign: 'center',
    marginBottom: spacing['2xl'],
    maxWidth: '800px',
    margin: `0 auto ${spacing['2xl']} auto`,
  };

  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: spacing.xl,
  };

  const largeCardStyles: React.CSSProperties = {
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: `linear-gradient(135deg, ${colors.indianSaffron} 0%, ${colors.electricGold} 100%)`,
    color: colors.midnightNavy,
    padding: spacing['2xl'],
  };

  const cardTitleStyles: React.CSSProperties = {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['3xl'],
    fontWeight: typography.weights.bold,
    marginBottom: spacing.md,
  };

  const cardDescStyles: React.CSSProperties = {
    fontSize: typography.sizes.base,
    lineHeight: 1.6,
    marginBottom: spacing.lg,
  };

  const featureListStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sm,
  };

  const featureItemStyles: React.CSSProperties = {
    fontSize: typography.sizes.base,
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
  };

  return (
    <section style={containerStyles}>
      <div style={contentStyles}>
        <h2 style={headlineStyles}>
          Beyond the <span style={goldTextStyles}>International Stage</span>
        </h2>
        <p style={descriptionStyles}>
          Women's Cricket and IPL have their own "Kingdoms": big tiles, exclusive data, auctions, schedules.
        </p>

        <div style={gridStyles}>
          <Card variant="default">
            <div style={largeCardStyles}>
              <div>
                <div style={{ fontSize: typography.sizes['4xl'], marginBottom: spacing.md }}>
                  👩‍🦰
                </div>
                <h3 style={cardTitleStyles}>Women's Cricket</h3>
                <p style={cardDescStyles}>
                  Elite coverage for Women's World Cup, WPL, and international series.
                </p>
              </div>
              <div style={featureListStyles}>
                <div style={featureItemStyles}>
                  <span>✓</span> Player profiles & stats
                </div>
                <div style={featureItemStyles}>
                  <span>✓</span> WPL auctions & teams
                </div>
                <div style={featureItemStyles}>
                  <span>✓</span> Match schedules & results
                </div>
              </div>
            </div>
          </Card>

          <Card variant="default">
            <div
              style={{
                ...largeCardStyles,
                background: `linear-gradient(135deg, ${colors.midnightNavy} 0%, ${colors.darkGray} 100%)`,
                color: colors.white,
              }}
            >
              <div>
                <div style={{ fontSize: typography.sizes['4xl'], marginBottom: spacing.md }}>
                  🏏
                </div>
                <h3 style={{ ...cardTitleStyles, color: colors.electricGold }}>IPL Kingdom</h3>
                <p style={{ ...cardDescStyles, color: colors.cream }}>
                  Complete IPL history, team analysis, and "Impact Player" statistics.
                </p>
              </div>
              <div style={featureListStyles}>
                <div style={{ ...featureItemStyles, color: colors.cream }}>
                  <span>✓</span> All 17 seasons covered
                </div>
                <div style={{ ...featureItemStyles, color: colors.cream }}>
                  <span>✓</span> Auction insights
                </div>
                <div style={{ ...featureItemStyles, color: colors.cream }}>
                  <span>✓</span> Team-wise deep dives
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WomenIPLSection;
