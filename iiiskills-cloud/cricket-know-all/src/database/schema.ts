/**
 * Cricket Know All - Database Schema
 * SQL Schema Definition for PostgreSQL/MySQL
 */

export const databaseSchema = `
-- ============================================
-- PLAYER TABLES
-- ============================================

CREATE TABLE IF NOT EXISTS Player (
  player_id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL CHECK (role IN ('Batsman', 'Bowler', 'All-rounder', 'Wicket-keeper')),
  batting_style VARCHAR(50),
  bowling_style VARCHAR(100),
  is_indian BOOLEAN NOT NULL DEFAULT FALSE,
  country VARCHAR(100) NOT NULL,
  ipl_team_id VARCHAR(50),
  photo_url TEXT,
  bio TEXT,
  birth_date DATE,
  birth_place VARCHAR(255),
  debut_date DATE,
  fun_fact TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_player_name ON Player(name);
CREATE INDEX idx_player_indian ON Player(is_indian);
CREATE INDEX idx_player_country ON Player(country);

CREATE TABLE IF NOT EXISTS PlayerStats (
  stat_id SERIAL PRIMARY KEY,
  player_id VARCHAR(50) NOT NULL,
  format VARCHAR(20) NOT NULL CHECK (format IN ('Test', 'ODI', 'T20', 'IPL', 'T20I')),
  matches INT DEFAULT 0,
  runs INT DEFAULT 0,
  average DECIMAL(6,2),
  strike_rate DECIMAL(6,2),
  hundreds INT DEFAULT 0,
  fifties INT DEFAULT 0,
  highest_score INT,
  wickets INT DEFAULT 0,
  bowling_average DECIMAL(6,2),
  economy DECIMAL(4,2),
  best_figures VARCHAR(10),
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (player_id) REFERENCES Player(player_id) ON DELETE CASCADE,
  UNIQUE(player_id, format)
);

-- ============================================
-- MATCH & VENUE TABLES
-- ============================================

CREATE TABLE IF NOT EXISTS Match (
  match_id VARCHAR(50) PRIMARY KEY,
  tournament_type VARCHAR(50) NOT NULL,
  date DATE NOT NULL,
  venue VARCHAR(255) NOT NULL,
  team1 VARCHAR(100) NOT NULL,
  team2 VARCHAR(100) NOT NULL,
  live_status VARCHAR(20) DEFAULT 'upcoming' CHECK (live_status IN ('upcoming', 'live', 'completed')),
  result TEXT,
  team1_score VARCHAR(50),
  team2_score VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_match_date ON Match(date);
CREATE INDEX idx_match_tournament ON Match(tournament_type);
CREATE INDEX idx_match_status ON Match(live_status);

CREATE TABLE IF NOT EXISTS Venue (
  venue_id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  country VARCHAR(100) NOT NULL,
  capacity INT,
  pitch_type VARCHAR(100),
  average_first_innings_score INT,
  quick_facts TEXT,
  photo_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Team (
  team_id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  short_name VARCHAR(10) NOT NULL,
  country VARCHAR(100),
  team_type VARCHAR(20) NOT NULL CHECK (team_type IN ('National', 'IPL', 'WPL')),
  logo_url TEXT,
  primary_color VARCHAR(7),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- TRIVIA TABLES
-- ============================================

CREATE TABLE IF NOT EXISTS TriviaModule (
  module_id VARCHAR(50) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL,
  difficulty VARCHAR(20) NOT NULL CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
  unlock_requirement INT DEFAULT 0,
  display_order INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS TriviaQuestion (
  question_id VARCHAR(50) PRIMARY KEY,
  module_id VARCHAR(50) NOT NULL,
  question TEXT NOT NULL,
  options JSON NOT NULL,
  correct_answer INT NOT NULL,
  explanation TEXT,
  points INT DEFAULT 1,
  time_limit INT DEFAULT 30,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (module_id) REFERENCES TriviaModule(module_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS TriviaProgress (
  progress_id SERIAL PRIMARY KEY,
  user_id VARCHAR(50) NOT NULL,
  module_id VARCHAR(50) NOT NULL,
  score INT DEFAULT 0,
  runs_earned INT DEFAULT 0,
  rank_title VARCHAR(50),
  completed_at TIMESTAMP,
  is_century BOOLEAN DEFAULT FALSE,
  time_taken INT,
  streak INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (module_id) REFERENCES TriviaModule(module_id) ON DELETE CASCADE,
  UNIQUE(user_id, module_id)
);

CREATE INDEX idx_trivia_progress_user ON TriviaProgress(user_id);
CREATE INDEX idx_trivia_progress_runs ON TriviaProgress(runs_earned DESC);

-- ============================================
-- USER TABLES
-- ============================================

CREATE TABLE IF NOT EXISTS UserProfile (
  user_id VARCHAR(50) PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  display_name VARCHAR(255) NOT NULL,
  avatar_url TEXT,
  total_runs INT DEFAULT 0,
  rank_title VARCHAR(50) DEFAULT 'Street Cricketer',
  centuries INT DEFAULT 0,
  favorite_team VARCHAR(50),
  favorite_player VARCHAR(50),
  joined_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_total_runs ON UserProfile(total_runs DESC);
CREATE INDEX idx_user_username ON UserProfile(username);

CREATE TABLE IF NOT EXISTS Badge (
  badge_id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  icon_url TEXT,
  requirement TEXT,
  rarity VARCHAR(20) CHECK (rarity IN ('Common', 'Rare', 'Epic', 'Legendary')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS UserBadge (
  user_badge_id SERIAL PRIMARY KEY,
  user_id VARCHAR(50) NOT NULL,
  badge_id VARCHAR(50) NOT NULL,
  earned_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES UserProfile(user_id) ON DELETE CASCADE,
  FOREIGN KEY (badge_id) REFERENCES Badge(badge_id) ON DELETE CASCADE,
  UNIQUE(user_id, badge_id)
);

-- ============================================
-- NOTIFICATION TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS Notification (
  notification_id VARCHAR(50) PRIMARY KEY,
  user_id VARCHAR(50) NOT NULL,
  type VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_read BOOLEAN DEFAULT FALSE,
  action_url TEXT,
  FOREIGN KEY (user_id) REFERENCES UserProfile(user_id) ON DELETE CASCADE
);

CREATE INDEX idx_notification_user ON Notification(user_id);
CREATE INDEX idx_notification_read ON Notification(is_read);
CREATE INDEX idx_notification_timestamp ON Notification(timestamp DESC);
`;

// Sample Queries
export const sampleQueries = {
  // Search Indian Cricketers
  searchIndianCricketers: `
    SELECT * FROM Player 
    WHERE is_indian = TRUE 
    AND name ILIKE '%Kohli%'
    ORDER BY name;
  `,
  
  // World Cup 2026 Schedule
  worldCup2026Schedule: `
    SELECT * FROM Match 
    WHERE tournament_type = 'WC2026' 
    AND date >= '2026-02-01'
    ORDER BY date ASC;
  `,
  
  // Get Player with Stats
  getPlayerWithStats: `
    SELECT p.*, ps.format, ps.matches, ps.runs, ps.average, ps.wickets
    FROM Player p
    LEFT JOIN PlayerStats ps ON p.player_id = ps.player_id
    WHERE p.player_id = ?
    ORDER BY ps.format;
  `,
  
  // Leaderboard - Top 100 Users
  leaderboard: `
    SELECT 
      ROW_NUMBER() OVER (ORDER BY total_runs DESC) as rank,
      user_id,
      username,
      display_name,
      total_runs,
      centuries,
      rank_title
    FROM UserProfile
    ORDER BY total_runs DESC
    LIMIT 100;
  `,
  
  // User's Trivia Progress
  userTriviaProgress: `
    SELECT 
      tm.title,
      tm.category,
      tp.score,
      tp.runs_earned,
      tp.is_century,
      tp.completed_at
    FROM TriviaProgress tp
    JOIN TriviaModule tm ON tp.module_id = tm.module_id
    WHERE tp.user_id = ?
    ORDER BY tp.completed_at DESC;
  `,
  
  // Live Matches
  liveMatches: `
    SELECT * FROM Match
    WHERE live_status = 'live'
    ORDER BY date DESC;
  `,
  
  // Women's Cricket Matches
  womenMatches: `
    SELECT * FROM Match
    WHERE tournament_type IN ('Women-WC', 'WPL')
    ORDER BY date DESC
    LIMIT 20;
  `,
};

export default databaseSchema;
