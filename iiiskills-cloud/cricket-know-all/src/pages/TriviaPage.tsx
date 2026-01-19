/**
 * Cricket Know All - Trivia Page
 */

import React from 'react';
import { colors, typography, spacing } from '../styles/theme';
import Card from '../components/Card';
import Button from '../components/Button';
import { sampleTriviaModules } from '../database/sampleData';

export const TriviaPage: React.FC = () => {
  const containerStyles: React.CSSProperties = {
    padding: `${spacing.xl}`,
    paddingBottom: '100px',
    minHeight: '100vh',
    backgroundColor: colors.cream,
  };

  const headerStyles: React.CSSProperties = {
    marginBottom: spacing['2xl'],
    textAlign: 'center',
  };

  const titleStyles: React.CSSProperties = {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['3xl'],
    fontWeight: typography.weights.bold,
    color: colors.midnightNavy,
    marginBottom: spacing.md,
  };

  const statsContainerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: spacing.xl,
    marginBottom: spacing['2xl'],
    flexWrap: 'wrap',
  };

  const statCardStyles: React.CSSProperties = {
    textAlign: 'center',
    padding: spacing.lg,
  };

  const statValueStyles: React.CSSProperties = {
    fontSize: typography.sizes['3xl'],
    fontWeight: typography.weights.bold,
    color: colors.electricGold,
    marginBottom: spacing.xs,
  };

  const statLabelStyles: React.CSSProperties = {
    fontSize: typography.sizes.sm,
    color: colors.darkGray,
  };

  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: spacing.lg,
  };

  const moduleCardStyles: React.CSSProperties = {
    padding: spacing.xl,
    position: 'relative',
  };

  const moduleTitleStyles: React.CSSProperties = {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    color: colors.midnightNavy,
    marginBottom: spacing.sm,
  };

  const moduleCategoryStyles: React.CSSProperties = {
    fontSize: typography.sizes.sm,
    color: colors.darkGray,
    marginBottom: spacing.md,
  };

  const lockIconStyles: React.CSSProperties = {
    position: 'absolute',
    top: spacing.lg,
    right: spacing.lg,
    fontSize: typography.sizes['2xl'],
  };

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <h1 style={titleStyles}>🎯 Cricket Mastermind</h1>
        <p style={{ fontSize: typography.sizes.lg, color: colors.darkGray }}>
          Test your cricket knowledge and earn runs!
        </p>
      </div>

      <div style={statsContainerStyles}>
        <Card variant="elevated">
          <div style={statCardStyles}>
            <div style={statValueStyles}>0</div>
            <div style={statLabelStyles}>Total Runs</div>
          </div>
        </Card>
        <Card variant="elevated">
          <div style={statCardStyles}>
            <div style={statValueStyles}>0</div>
            <div style={statLabelStyles}>Centuries</div>
          </div>
        </Card>
        <Card variant="gold">
          <div style={statCardStyles}>
            <div style={{ ...statValueStyles, color: colors.midnightNavy }}>
              Street Cricketer
            </div>
            <div style={{ ...statLabelStyles, color: colors.midnightNavy }}>Current Rank</div>
          </div>
        </Card>
      </div>

      <div style={gridStyles}>
        {sampleTriviaModules.map((module, index) => (
          <Card
            key={module.module_id}
            variant={module.is_locked ? 'outlined' : 'elevated'}
            hoverable={!module.is_locked}
          >
            <div style={moduleCardStyles}>
              {module.is_locked && <div style={lockIconStyles}>🔒</div>}
              <div style={{ fontSize: typography.sizes['2xl'], marginBottom: spacing.md }}>
                {index === 0 ? '📚' : index === 1 ? '🏏' : index === 2 ? '👩' : index === 3 ? '🏆' : '🎳'}
              </div>
              <h3 style={moduleTitleStyles}>{module.title}</h3>
              <p style={moduleCategoryStyles}>{module.category} • {module.difficulty}</p>
              {module.unlock_requirement && (
                <p style={{ fontSize: typography.sizes.sm, color: colors.indianSaffron, marginBottom: spacing.md }}>
                  Unlock at {module.unlock_requirement} runs
                </p>
              )}
              <Button
                variant={module.is_locked ? 'ghost' : 'primary'}
                disabled={module.is_locked}
                fullWidth
              >
                {module.is_locked ? 'Locked' : 'Start Module'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TriviaPage;
