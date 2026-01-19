/**
 * Cricket Know All - Women's Cricket & IPL Page
 */

import React, { useState } from 'react';
import { colors, typography, spacing } from '../styles/theme';
import Card from '../components/Card';
import Button from '../components/Button';

export const WomenIPLPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'women' | 'ipl'>('women');

  const containerStyles: React.CSSProperties = {
    padding: `${spacing.xl}`,
    paddingBottom: '100px',
    minHeight: '100vh',
    backgroundColor: colors.cream,
  };

  const tabContainerStyles: React.CSSProperties = {
    display: 'flex',
    gap: spacing.md,
    marginBottom: spacing['2xl'],
    justifyContent: 'center',
  };

  const tabStyles = (isActive: boolean): React.CSSProperties => ({
    padding: `${spacing.md} ${spacing.xl}`,
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    backgroundColor: isActive ? colors.indianSaffron : colors.white,
    color: isActive ? colors.white : colors.midnightNavy,
    borderRadius: '12px',
    border: `2px solid ${isActive ? colors.indianSaffron : colors.lightGray}`,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  });

  const titleStyles: React.CSSProperties = {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['3xl'],
    fontWeight: typography.weights.bold,
    color: colors.midnightNavy,
    marginBottom: spacing.lg,
    textAlign: 'center',
  };

  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: spacing.lg,
    maxWidth: '1280px',
    margin: '0 auto',
  };

  const cardContentStyles: React.CSSProperties = {
    padding: spacing.xl,
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
      <div style={tabContainerStyles}>
        <div
          style={tabStyles(activeTab === 'women')}
          onClick={() => setActiveTab('women')}
        >
          👩 Women's Cricket
        </div>
        <div
          style={tabStyles(activeTab === 'ipl')}
          onClick={() => setActiveTab('ipl')}
        >
          🏏 IPL
        </div>
      </div>

      {activeTab === 'women' ? (
        <>
          <h1 style={titleStyles}>Women's Cricket</h1>
          <div style={gridStyles}>
            <Card variant="elevated" hoverable>
              <div style={cardContentStyles}>
                <div style={{ fontSize: typography.sizes['3xl'], marginBottom: spacing.md }}>
                  🏆
                </div>
                <h3 style={cardTitleStyles}>Women's Premier League</h3>
                <p style={cardDescStyles}>
                  Complete coverage of WPL teams, players, auctions, and match schedules.
                </p>
                <Button variant="primary">Explore WPL</Button>
              </div>
            </Card>

            <Card variant="elevated" hoverable>
              <div style={cardContentStyles}>
                <div style={{ fontSize: typography.sizes['3xl'], marginBottom: spacing.md }}>
                  🌍
                </div>
                <h3 style={cardTitleStyles}>International Cricket</h3>
                <p style={cardDescStyles}>
                  Follow women's international series, ODIs, T20Is, and Test matches worldwide.
                </p>
                <Button variant="primary">View Matches</Button>
              </div>
            </Card>

            <Card variant="elevated" hoverable>
              <div style={cardContentStyles}>
                <div style={{ fontSize: typography.sizes['3xl'], marginBottom: spacing.md }}>
                  👩
                </div>
                <h3 style={cardTitleStyles}>Star Players</h3>
                <p style={cardDescStyles}>
                  Profiles of top women cricketers including Harmanpreet Kaur, Smriti Mandhana, and more.
                </p>
                <Button variant="primary">Player Profiles</Button>
              </div>
            </Card>

            <Card variant="gold">
              <div style={cardContentStyles}>
                <h3 style={{ ...cardTitleStyles, color: colors.midnightNavy }}>
                  Featured: Harmanpreet Kaur
                </h3>
                <p style={{ ...cardDescStyles, color: colors.midnightNavy }}>
                  Indian Captain • All-rounder<br />
                  ODI Avg: 34.5 | T20I Avg: 27.8
                </p>
                <Button variant="outline">View Full Profile</Button>
              </div>
            </Card>
          </div>
        </>
      ) : (
        <>
          <h1 style={titleStyles}>Indian Premier League</h1>
          <div style={gridStyles}>
            <Card variant="elevated" hoverable>
              <div style={cardContentStyles}>
                <div style={{ fontSize: typography.sizes['3xl'], marginBottom: spacing.md }}>
                  📊
                </div>
                <h3 style={cardTitleStyles}>IPL 2025 Season</h3>
                <p style={cardDescStyles}>
                  Live scores, standings, and match highlights from the current IPL season.
                </p>
                <Button variant="primary">View Season</Button>
              </div>
            </Card>

            <Card variant="elevated" hoverable>
              <div style={cardContentStyles}>
                <div style={{ fontSize: typography.sizes['3xl'], marginBottom: spacing.md }}>
                  🏟️
                </div>
                <h3 style={cardTitleStyles}>All Teams</h3>
                <p style={cardDescStyles}>
                  Explore all 10 IPL franchises with squad details, team stats, and history.
                </p>
                <Button variant="primary">Browse Teams</Button>
              </div>
            </Card>

            <Card variant="elevated" hoverable>
              <div style={cardContentStyles}>
                <div style={{ fontSize: typography.sizes['3xl'], marginBottom: spacing.md }}>
                  💰
                </div>
                <h3 style={cardTitleStyles}>Auction Insights</h3>
                <p style={cardDescStyles}>
                  Player auctions, team strategies, and mega auction analysis.
                </p>
                <Button variant="primary">Auction Data</Button>
              </div>
            </Card>

            <Card variant="elevated" hoverable>
              <div style={cardContentStyles}>
                <div style={{ fontSize: typography.sizes['3xl'], marginBottom: spacing.md }}>
                  📈
                </div>
                <h3 style={cardTitleStyles}>Records & Stats</h3>
                <p style={cardDescStyles}>
                  Orange Cap, Purple Cap, highest scores, best figures, and all-time records.
                </p>
                <Button variant="primary">View Records</Button>
              </div>
            </Card>

            <Card variant="elevated" hoverable>
              <div style={{
                ...cardContentStyles,
                background: `linear-gradient(135deg, ${colors.midnightNavy} 0%, ${colors.darkGray} 100%)`,
                borderRadius: '12px',
              }}>
                <h3 style={{ ...cardTitleStyles, color: colors.electricGold }}>
                  Most Successful Team
                </h3>
                <p style={{ ...cardDescStyles, color: colors.cream }}>
                  Mumbai Indians<br />
                  5 IPL Titles (2013, 2015, 2017, 2019, 2020)
                </p>
                <Button variant="gold">Team Profile</Button>
              </div>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

export default WomenIPLPage;
