/**
 * Cricket Know All - Card Component
 * Reusable card component for consistent UI
 */

import React from 'react';
import { colors, borderRadius, shadows, spacing } from '../styles/theme';

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'gold';
  padding?: keyof typeof spacing;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  onClick,
  className = '',
  variant = 'default',
  padding = 'lg',
  hoverable = false,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'elevated':
        return {
          backgroundColor: colors.white,
          boxShadow: shadows.lg,
          border: 'none',
        };
      case 'outlined':
        return {
          backgroundColor: colors.white,
          border: `1px solid ${colors.lightGray}`,
          boxShadow: shadows.sm,
        };
      case 'gold':
        return {
          backgroundColor: colors.electricGold,
          boxShadow: shadows.gold,
          border: 'none',
          color: colors.midnightNavy,
        };
      default:
        return {
          backgroundColor: colors.white,
          boxShadow: shadows.md,
          border: 'none',
        };
    }
  };

  const baseStyles: React.CSSProperties = {
    borderRadius: borderRadius.xl,
    padding: spacing[padding],
    transition: 'all 0.3s ease',
    cursor: onClick ? 'pointer' : 'default',
    ...getVariantStyles(),
  };

  const hoverStyles: React.CSSProperties = hoverable || onClick ? {
    transform: 'translateY(-4px)',
    boxShadow: shadows.xl,
  } : {};

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={className}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...baseStyles,
        ...(isHovered ? hoverStyles : {}),
      }}
    >
      {children}
    </div>
  );
};

export default Card;
