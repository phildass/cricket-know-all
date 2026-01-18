/**
 * Cricket Know All - Navigation Component
 * Persistent bottom/floating navigation bar
 */

import React from 'react';
import { colors, spacing, borderRadius, shadows, typography } from '../styles/theme';
import type { NavigationRoute } from '../types';

interface NavigationProps {
  currentRoute: NavigationRoute;
  onNavigate: (route: NavigationRoute) => void;
}

interface NavItem {
  route: NavigationRoute;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { route: 'home', label: 'Home', icon: '🏏' },
  { route: 'discover', label: 'Discover', icon: '🔍' },
  { route: 'worldcup', label: 'World Cup', icon: '🏆' },
  { route: 'women-ipl', label: 'Women/IPL', icon: '⭐' },
  { route: 'trivia', label: 'Trivia', icon: '🎯' },
];

export const Navigation: React.FC<NavigationProps> = ({ currentRoute, onNavigate }) => {
  const containerStyles: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.midnightNavy,
    boxShadow: shadows['2xl'],
    zIndex: 1000,
    borderTop: `2px solid ${colors.electricGold}`,
  };

  const navStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: `${spacing.sm} ${spacing.md}`,
    maxWidth: '1280px',
    margin: '0 auto',
  };

  const itemStyles = (isActive: boolean): React.CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.xs,
    padding: spacing.sm,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: borderRadius.md,
    backgroundColor: isActive ? colors.navyAlpha60 : 'transparent',
    color: isActive ? colors.electricGold : colors.white,
    minWidth: '60px',
  });

  const iconStyles: React.CSSProperties = {
    fontSize: typography.sizes['2xl'],
  };

  const labelStyles: React.CSSProperties = {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.medium,
    fontFamily: typography.fonts.body,
  };

  return (
    <div style={containerStyles}>
      <nav style={navStyles}>
        {navItems.map((item) => {
          const isActive = currentRoute === item.route;
          return (
            <div
              key={item.route}
              style={itemStyles(isActive)}
              onClick={() => onNavigate(item.route)}
            >
              <span style={iconStyles}>{item.icon}</span>
              <span style={labelStyles}>{item.label}</span>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Navigation;
