/**
 * Cricket Know All - Global Styles
 */

import { colors, typography } from './theme';

export const globalStyles = `
  /* Import Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

  /* CSS Reset & Base Styles */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: ${typography.fonts.body};
    font-size: ${typography.sizes.base};
    font-weight: ${typography.weights.normal};
    line-height: 1.5;
    color: ${colors.darkGray};
    background-color: ${colors.white};
    overflow-x: hidden;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${typography.fonts.heading};
    font-weight: ${typography.weights.bold};
    line-height: 1.2;
    margin-bottom: 0.5em;
    color: ${colors.midnightNavy};
  }

  h1 {
    font-size: ${typography.sizes['5xl']};
  }

  h2 {
    font-size: ${typography.sizes['4xl']};
  }

  h3 {
    font-size: ${typography.sizes['3xl']};
  }

  h4 {
    font-size: ${typography.sizes['2xl']};
  }

  h5 {
    font-size: ${typography.sizes.xl};
  }

  h6 {
    font-size: ${typography.sizes.lg};
  }

  p {
    margin-bottom: 1em;
  }

  a {
    color: ${colors.electricGold};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${colors.indianSaffron};
  }

  /* Utility Classes */
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .text-center {
    text-align: center;
  }

  .text-navy {
    color: ${colors.midnightNavy};
  }

  .text-gold {
    color: ${colors.electricGold};
  }

  .text-saffron {
    color: ${colors.indianSaffron};
  }

  .bg-navy {
    background-color: ${colors.midnightNavy};
  }

  .bg-gold {
    background-color: ${colors.electricGold};
  }

  .bg-cream {
    background-color: ${colors.cream};
  }

  /* Button Base */
  button {
    font-family: ${typography.fonts.body};
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Input Base */
  input, textarea, select {
    font-family: ${typography.fonts.body};
    font-size: ${typography.sizes.base};
    border: 1px solid ${colors.lightGray};
    outline: none;
  }

  input:focus, textarea:focus, select:focus {
    border-color: ${colors.electricGold};
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.cream};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.midnightNavy};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.electricGold};
  }

  /* Animation Keyframes */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  /* Responsive Typography */
  @media (max-width: 768px) {
    h1 {
      font-size: ${typography.sizes['3xl']};
    }

    h2 {
      font-size: ${typography.sizes['2xl']};
    }

    h3 {
      font-size: ${typography.sizes.xl};
    }
  }

  /* Respect user's motion preferences */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default globalStyles;
