/**
 * Cricket Know All - Type Definitions
 */

// Player Types
export interface Player {
  player_id: string;
  name: string;
  role: 'Batsman' | 'Bowler' | 'All-rounder' | 'Wicket-keeper';
  batting_style?: 'Right-hand bat' | 'Left-hand bat';
  bowling_style?: string;
  is_indian: boolean;
  country: string;
  ipl_team_id?: string;
  photo_url?: string;
  bio?: string;
  birth_date?: string;
  birth_place?: string;
  debut_date?: string;
  fun_fact?: string;
}

export interface PlayerStats {
  player_id: string;
  format: 'Test' | 'ODI' | 'T20' | 'IPL' | 'T20I';
  matches: number;
  runs?: number;
  average?: number;
  strike_rate?: number;
  hundreds?: number;
  fifties?: number;
  highest_score?: number;
  wickets?: number;
  bowling_average?: number;
  economy?: number;
  best_figures?: string;
}

// Match Types
export interface Match {
  match_id: string;
  tournament_type: 'WC2026' | 'IPL' | 'ODI' | 'Test' | 'T20' | 'Women-WC' | 'WPL';
  date: string;
  venue: string;
  team1: string;
  team2: string;
  live_status: 'upcoming' | 'live' | 'completed';
  result?: string;
  team1_score?: string;
  team2_score?: string;
}

// Venue Types
export interface Venue {
  venue_id: string;
  name: string;
  city: string;
  country: string;
  capacity: number;
  pitch_type?: string;
  average_first_innings_score?: number;
  quick_facts?: string[];
  photo_url?: string;
}

// Team Types
export interface Team {
  team_id: string;
  name: string;
  short_name: string;
  country: string;
  team_type: 'National' | 'IPL' | 'WPL';
  logo_url?: string;
  primary_color?: string;
}

// Trivia Types
export interface TriviaModule {
  module_id: string;
  title: string;
  category: 'History' | 'IPL' | 'Women-Cricket' | 'World-Cup-2026' | 'Fielding' | 'Bowling' | 'Captaincy' | 'Rules' | 'Records' | 'Legends';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  is_locked: boolean;
  unlock_requirement?: number; // runs needed to unlock
  questions: TriviaQuestion[];
}

export interface TriviaQuestion {
  question_id: string;
  module_id: string;
  question: string;
  options: string[];
  correct_answer: number; // index of correct option
  explanation?: string;
  points: number;
  time_limit?: number; // in seconds
}

export interface TriviaProgress {
  user_id: string;
  module_id: string;
  score: number;
  runs_earned: number;
  rank_title: string;
  completed_at?: string;
  is_century: boolean; // perfect score
  time_taken?: number;
  streak?: number;
}

export interface UserProfile {
  user_id: string;
  username: string;
  email: string;
  display_name: string;
  avatar_url?: string;
  total_runs: number;
  rank_title: 'Street Cricketer' | 'Club Player' | 'Domestic Star' | 'International' | 'Legend';
  centuries: number; // perfect modules
  favorite_team?: string;
  favorite_player?: string;
  joined_date: string;
  last_active: string;
}

// Leaderboard Types
export interface LeaderboardEntry {
  rank: number;
  user_id: string;
  username: string;
  display_name: string;
  total_runs: number;
  centuries: number;
  rank_title: string;
  location?: string;
}

// Badge Types
export interface Badge {
  badge_id: string;
  name: string;
  description: string;
  icon_url: string;
  requirement: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  earned_date?: string;
}

// Search Types
export interface SearchResult {
  type: 'player' | 'match' | 'venue' | 'team' | 'stat';
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image_url?: string;
  metadata?: Record<string, unknown>;
}

// Notification Types
export interface Notification {
  notification_id: string;
  user_id: string;
  type: 'match-update' | 'player-milestone' | 'daily-challenge' | 'achievement' | 'nostalgia';
  title: string;
  message: string;
  timestamp: string;
  is_read: boolean;
  action_url?: string;
}

// Navigation Types
export type NavigationRoute = 'home' | 'discover' | 'worldcup' | 'women-ipl' | 'trivia';

export interface NavigationItem {
  route: NavigationRoute;
  label: string;
  icon: string;
  badge?: number;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  per_page: number;
  has_more: boolean;
}
