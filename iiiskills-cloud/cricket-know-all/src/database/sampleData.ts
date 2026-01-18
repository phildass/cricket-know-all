/**
 * Cricket Know All - Sample Data
 * Mock data for development and demonstration
 */

import type { Player, PlayerStats, Match, TriviaModule, TriviaQuestion, Venue, Team } from '../types';

// Sample Indian Players
export const samplePlayers: Player[] = [
  {
    player_id: 'virat-kohli',
    name: 'Virat Kohli',
    role: 'Batsman',
    batting_style: 'Right-hand bat',
    is_indian: true,
    country: 'India',
    ipl_team_id: 'rcb',
    photo_url: '/images/players/virat-kohli.jpg',
    bio: 'One of the greatest batsmen of all time, known for his aggressive batting and exceptional chasing abilities.',
    birth_date: '1988-11-05',
    birth_place: 'Delhi, India',
    debut_date: '2008-08-18',
    fun_fact: 'Holds the record for most centuries in ODI run chases.',
  },
  {
    player_id: 'jasprit-bumrah',
    name: 'Jasprit Bumrah',
    role: 'Bowler',
    batting_style: 'Right-hand bat',
    bowling_style: 'Right-arm fast',
    is_indian: true,
    country: 'India',
    ipl_team_id: 'mi',
    photo_url: '/images/players/jasprit-bumrah.jpg',
    bio: 'World-class fast bowler known for his unique action and lethal yorkers.',
    birth_date: '1993-12-06',
    birth_place: 'Ahmedabad, India',
    fun_fact: 'Has the best economy rate in death overs among all bowlers.',
  },
  {
    player_id: 'harmanpreet-kaur',
    name: 'Harmanpreet Kaur',
    role: 'All-rounder',
    batting_style: 'Right-hand bat',
    bowling_style: 'Right-arm off break',
    is_indian: true,
    country: 'India',
    photo_url: '/images/players/harmanpreet-kaur.jpg',
    bio: 'Captain of the Indian Women\'s Cricket Team, known for her explosive batting.',
    birth_date: '1989-03-08',
    birth_place: 'Moga, Punjab, India',
    fun_fact: 'Scored an incredible 171* in the 2017 Women\'s World Cup semi-final.',
  },
  {
    player_id: 'rohit-sharma',
    name: 'Rohit Sharma',
    role: 'Batsman',
    batting_style: 'Right-hand bat',
    is_indian: true,
    country: 'India',
    ipl_team_id: 'mi',
    photo_url: '/images/players/rohit-sharma.jpg',
    bio: 'Indian captain and opener, known for his elegant stroke play and record-breaking centuries.',
    birth_date: '1987-04-30',
    birth_place: 'Nagpur, India',
    fun_fact: 'Only player to score 3 double centuries in ODIs.',
  },
  {
    player_id: 'smriti-mandhana',
    name: 'Smriti Mandhana',
    role: 'Batsman',
    batting_style: 'Left-hand bat',
    is_indian: true,
    country: 'India',
    photo_url: '/images/players/smriti-mandhana.jpg',
    bio: 'Stylish left-handed opener, considered one of the best women cricketers in the world.',
    birth_date: '1996-07-18',
    birth_place: 'Mumbai, India',
    fun_fact: 'Youngest Indian woman to score a century in all three formats.',
  },
];

// Sample Player Stats
export const samplePlayerStats: PlayerStats[] = [
  {
    player_id: 'virat-kohli',
    format: 'ODI',
    matches: 279,
    runs: 13848,
    average: 58.67,
    strike_rate: 93.54,
    hundreds: 50,
    fifties: 72,
    highest_score: 183,
  },
  {
    player_id: 'virat-kohli',
    format: 'T20I',
    matches: 115,
    runs: 4008,
    average: 52.73,
    strike_rate: 137.96,
    hundreds: 1,
    fifties: 37,
    highest_score: 94,
  },
  {
    player_id: 'jasprit-bumrah',
    format: 'ODI',
    matches: 89,
    wickets: 149,
    bowling_average: 23.55,
    economy: 4.63,
    best_figures: '6/19',
  },
  {
    player_id: 'jasprit-bumrah',
    format: 'T20I',
    matches: 70,
    wickets: 89,
    bowling_average: 20.22,
    economy: 6.48,
    best_figures: '5/27',
  },
];

// Sample Matches
export const sampleMatches: Match[] = [
  {
    match_id: 'wc2026-ind-pak',
    tournament_type: 'WC2026',
    date: '2026-06-15',
    venue: 'Eden Gardens, Kolkata',
    team1: 'India',
    team2: 'Pakistan',
    live_status: 'upcoming',
  },
  {
    match_id: 'wc2026-ind-aus',
    tournament_type: 'WC2026',
    date: '2026-06-20',
    venue: 'Wankhede Stadium, Mumbai',
    team1: 'India',
    team2: 'Australia',
    live_status: 'upcoming',
  },
  {
    match_id: 'wpl-2026-final',
    tournament_type: 'WPL',
    date: '2026-03-25',
    venue: 'M. Chinnaswamy Stadium, Bangalore',
    team1: 'Mumbai Indians (W)',
    team2: 'Delhi Capitals (W)',
    live_status: 'completed',
    result: 'Mumbai Indians won by 7 wickets',
    team1_score: '168/3 (18.2 overs)',
    team2_score: '165/6 (20 overs)',
  },
];

// Sample Venues
export const sampleVenues: Venue[] = [
  {
    venue_id: 'eden-gardens',
    name: 'Eden Gardens',
    city: 'Kolkata',
    country: 'India',
    capacity: 66000,
    pitch_type: 'Batting-friendly with some turn',
    average_first_innings_score: 165,
    quick_facts: [
      'Second largest cricket stadium in the world',
      'Hosted the 1987 World Cup Final',
      'Known for passionate crowds',
    ],
  },
  {
    venue_id: 'wankhede-stadium',
    name: 'Wankhede Stadium',
    city: 'Mumbai',
    country: 'India',
    capacity: 33000,
    pitch_type: 'Good batting track',
    average_first_innings_score: 170,
    quick_facts: [
      'Venue of India\'s 2011 World Cup victory',
      'Sachin Tendulkar\'s home ground',
      'Sea breeze affects evening matches',
    ],
  },
];

// Sample Teams
export const sampleTeams: Team[] = [
  {
    team_id: 'india',
    name: 'India',
    short_name: 'IND',
    country: 'India',
    team_type: 'National',
    primary_color: '#0066CC',
  },
  {
    team_id: 'rcb',
    name: 'Royal Challengers Bangalore',
    short_name: 'RCB',
    country: 'India',
    team_type: 'IPL',
    primary_color: '#EC1C24',
  },
  {
    team_id: 'mi',
    name: 'Mumbai Indians',
    short_name: 'MI',
    country: 'India',
    team_type: 'IPL',
    primary_color: '#004BA0',
  },
];

// Sample Trivia Modules
export const sampleTriviaModules: TriviaModule[] = [
  {
    module_id: 'module-01',
    title: 'Cricket Basics',
    category: 'Rules',
    difficulty: 'Easy',
    is_locked: false,
    questions: [],
  },
  {
    module_id: 'module-02',
    title: 'IPL Legends',
    category: 'IPL',
    difficulty: 'Medium',
    is_locked: false,
    unlock_requirement: 10,
    questions: [],
  },
  {
    module_id: 'module-03',
    title: 'Women Cricket Stars',
    category: 'Women-Cricket',
    difficulty: 'Medium',
    is_locked: false,
    unlock_requirement: 20,
    questions: [],
  },
  {
    module_id: 'module-04',
    title: 'World Cup 2026',
    category: 'World-Cup-2026',
    difficulty: 'Medium',
    is_locked: true,
    unlock_requirement: 30,
    questions: [],
  },
  {
    module_id: 'module-05',
    title: 'Bowling Masterclass',
    category: 'Bowling',
    difficulty: 'Hard',
    is_locked: true,
    unlock_requirement: 50,
    questions: [],
  },
];

// Sample Trivia Questions
export const sampleTriviaQuestions: TriviaQuestion[] = [
  {
    question_id: 'q-001',
    module_id: 'module-01',
    question: 'How many players are there in a cricket team?',
    options: ['9', '10', '11', '12'],
    correct_answer: 2,
    explanation: 'A cricket team consists of 11 players on the field.',
    points: 1,
    time_limit: 20,
  },
  {
    question_id: 'q-002',
    module_id: 'module-01',
    question: 'What is the maximum number of overs in a T20 match per side?',
    options: ['15', '20', '25', '30'],
    correct_answer: 1,
    explanation: 'T20 cricket features 20 overs per side, making it the shortest international format.',
    points: 1,
    time_limit: 20,
  },
  {
    question_id: 'q-003',
    module_id: 'module-02',
    question: 'Which team has won the most IPL titles?',
    options: ['Chennai Super Kings', 'Mumbai Indians', 'Kolkata Knight Riders', 'Royal Challengers Bangalore'],
    correct_answer: 1,
    explanation: 'Mumbai Indians have won the IPL 5 times, the most by any team.',
    points: 1,
    time_limit: 25,
  },
  {
    question_id: 'q-004',
    module_id: 'module-03',
    question: 'Who scored 171* in the 2017 Women\'s World Cup semi-final?',
    options: ['Mithali Raj', 'Smriti Mandhana', 'Harmanpreet Kaur', 'Jhulan Goswami'],
    correct_answer: 2,
    explanation: 'Harmanpreet Kaur\'s explosive 171* helped India reach the 2017 Women\'s World Cup final.',
    points: 1,
    time_limit: 30,
  },
  {
    question_id: 'q-005',
    module_id: 'module-01',
    question: 'What does LBW stand for in cricket?',
    options: ['Leg Before Wicket', 'Left Ball Wide', 'Long Boundary Wall', 'Last Ball Win'],
    correct_answer: 0,
    explanation: 'LBW stands for Leg Before Wicket, a method of dismissal.',
    points: 1,
    time_limit: 20,
  },
];

// Search Demo Queries
export const searchDemoQueries = [
  'What is Jasprit Bumrah\'s average in Feb 2026?',
  'Show me the 2026 World Cup schedule for Eden Gardens',
  'Highest score in Women\'s IPL history?',
  'Who won India vs Pakistan 2022?',
  'How many times has Bumrah dismissed Babar Azam in T20s?',
  'Virat Kohli ODI centuries',
  'Harmanpreet Kaur career stats',
  'IPL 2025 Orange Cap winner',
  'Women\'s World Cup 2024 top scorer',
];

export default {
  samplePlayers,
  samplePlayerStats,
  sampleMatches,
  sampleVenues,
  sampleTeams,
  sampleTriviaModules,
  sampleTriviaQuestions,
  searchDemoQueries,
};
