/**
 * Cricket Know All - Search Demo Component
 */

import React, { useState, useEffect } from 'react';
import { colors, typography, spacing, borderRadius, shadows } from '../styles/theme';
import { searchDemoQueries } from '../database/sampleData';

export const SearchDemo: React.FC = () => {
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentQuery = searchDemoQueries[currentQueryIndex];
    
    if (isTyping) {
      if (displayText.length < currentQuery.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentQuery.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
        setCurrentQueryIndex((currentQueryIndex + 1) % searchDemoQueries.length);
      }
    }
  }, [displayText, isTyping, currentQueryIndex]);

  const containerStyles: React.CSSProperties = {
    padding: `${spacing['4xl']} ${spacing.xl}`,
    backgroundColor: colors.white,
    textAlign: 'center',
  };

  const headlineStyles: React.CSSProperties = {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['4xl'],
    fontWeight: typography.weights.bold,
    color: colors.midnightNavy,
    marginBottom: spacing.md,
  };

  const goldTextStyles: React.CSSProperties = {
    color: colors.electricGold,
  };

  const descriptionStyles: React.CSSProperties = {
    fontSize: typography.sizes.lg,
    color: colors.darkGray,
    marginBottom: spacing['2xl'],
    maxWidth: '600px',
    margin: `0 auto ${spacing['2xl']} auto`,
  };

  const searchBarContainerStyles: React.CSSProperties = {
    maxWidth: '700px',
    margin: '0 auto',
    position: 'relative',
  };

  const searchBarStyles: React.CSSProperties = {
    width: '100%',
    padding: `${spacing.lg} ${spacing['2xl']}`,
    fontSize: typography.sizes.lg,
    borderRadius: borderRadius.xl,
    border: `2px solid ${colors.electricGold}`,
    boxShadow: shadows.xl,
    outline: 'none',
    fontFamily: typography.fonts.body,
    backgroundColor: colors.white,
  };

  const cursorStyles: React.CSSProperties = {
    display: 'inline-block',
    width: '2px',
    height: '1em',
    backgroundColor: colors.electricGold,
    marginLeft: '2px',
    animation: 'pulse 1s infinite',
  };

  return (
    <section style={containerStyles}>
      <h2 style={headlineStyles}>
        <span style={goldTextStyles}>"Google"</span> for Cricket, but Better
      </h2>
      <p style={descriptionStyles}>
        Don't follow the game—know it, with real-time AI answers.
      </p>
      <div style={searchBarContainerStyles}>
        <div style={searchBarStyles}>
          <span style={{ color: displayText ? colors.midnightNavy : colors.lightGray }}>
            {displayText || 'Search anything...'}
          </span>
          <span style={cursorStyles} />
        </div>
      </div>
    </section>
  );
};

export default SearchDemo;
