/**
 * Cricket Know All - Discover Page (Search)
 */

import React, { useState } from 'react';
import { colors, typography, spacing, borderRadius, shadows } from '../styles/theme';
import Card from '../components/Card';
import { samplePlayers } from '../database/sampleData';

export const DiscoverPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const containerStyles: React.CSSProperties = {
    padding: `${spacing.xl}`,
    paddingBottom: '100px',
    minHeight: '100vh',
    backgroundColor: colors.white,
  };

  const searchContainerStyles: React.CSSProperties = {
    marginBottom: spacing['2xl'],
  };

  const searchInputStyles: React.CSSProperties = {
    width: '100%',
    padding: `${spacing.lg} ${spacing.xl}`,
    fontSize: typography.sizes.lg,
    borderRadius: borderRadius.xl,
    border: `2px solid ${colors.electricGold}`,
    outline: 'none',
    fontFamily: typography.fonts.body,
    boxShadow: shadows.md,
  };

  const titleStyles: React.CSSProperties = {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['2xl'],
    fontWeight: typography.weights.bold,
    color: colors.midnightNavy,
    marginBottom: spacing.lg,
  };

  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: spacing.lg,
  };

  const playerCardContentStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
  };

  const playerAvatarStyles: React.CSSProperties = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: colors.cream,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: typography.sizes['2xl'],
  };

  const playerInfoStyles: React.CSSProperties = {
    flex: 1,
  };

  const playerNameStyles: React.CSSProperties = {
    fontWeight: typography.weights.bold,
    fontSize: typography.sizes.lg,
    color: colors.midnightNavy,
    marginBottom: spacing.xs,
  };

  const playerRoleStyles: React.CSSProperties = {
    fontSize: typography.sizes.sm,
    color: colors.darkGray,
  };

  const filteredPlayers = samplePlayers.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    player.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={containerStyles}>
      <div style={searchContainerStyles}>
        <input
          type="text"
          placeholder="Search players, matches, stats..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={searchInputStyles}
          aria-label="Search for cricket players, matches, and statistics"
        />
      </div>

      <h2 style={titleStyles}>
        {searchQuery ? 'Search Results' : 'Featured Indian Players'}
      </h2>

      <div style={gridStyles}>
        {filteredPlayers.map((player) => (
          <Card key={player.player_id} variant="elevated" hoverable>
            <div style={playerCardContentStyles}>
              <div style={playerAvatarStyles}>
                {player.name.includes('Harmanpreet') || player.name.includes('Smriti') ? '👩' : '👨'}
              </div>
              <div style={playerInfoStyles}>
                <div style={playerNameStyles}>{player.name}</div>
                <div style={playerRoleStyles}>
                  {player.role} • {player.country}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredPlayers.length === 0 && (
        <div style={{ textAlign: 'center', padding: spacing['4xl'], color: colors.darkGray }}>
          No results found for "{searchQuery}"
        </div>
      )}
    </div>
  );
};

export default DiscoverPage;
