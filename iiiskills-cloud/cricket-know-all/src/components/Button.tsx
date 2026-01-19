/**
 * Cricket Know All - Button Component
 * Reusable button component with variants
 */

import React from 'react';
import { colors, borderRadius, spacing, typography, shadows } from '../styles/theme';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  type = 'button',
  className = '',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colors.midnightNavy,
          color: colors.white,
          border: 'none',
          boxShadow: shadows.md,
        };
      case 'secondary':
        return {
          backgroundColor: colors.indianSaffron,
          color: colors.white,
          border: 'none',
          boxShadow: shadows.md,
        };
      case 'gold':
        return {
          backgroundColor: colors.electricGold,
          color: colors.midnightNavy,
          border: 'none',
          boxShadow: shadows.gold,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: colors.midnightNavy,
          border: `2px solid ${colors.midnightNavy}`,
          boxShadow: 'none',
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: colors.midnightNavy,
          border: 'none',
          boxShadow: 'none',
        };
      default:
        return {};
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          padding: `${spacing.sm} ${spacing.md}`,
          fontSize: typography.sizes.sm,
        };
      case 'lg':
        return {
          padding: `${spacing.lg} ${spacing.xl}`,
          fontSize: typography.sizes.lg,
        };
      default:
        return {
          padding: `${spacing.md} ${spacing.lg}`,
          fontSize: typography.sizes.base,
        };
    }
  };

  const baseStyles: React.CSSProperties = {
    fontFamily: typography.fonts.body,
    fontWeight: typography.weights.semibold,
    borderRadius: borderRadius.lg,
    transition: 'all 0.3s ease',
    width: fullWidth ? '100%' : 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    ...getVariantStyles(),
    ...getSizeStyles(),
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const hoverStyles: React.CSSProperties = !disabled ? {
    transform: 'translateY(-2px)',
    boxShadow: shadows.lg,
    opacity: 0.9,
  } : {};

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...baseStyles,
        ...(isHovered ? hoverStyles : {}),
      }}
    >
      {children}
    </button>
  );
};

export default Button;
