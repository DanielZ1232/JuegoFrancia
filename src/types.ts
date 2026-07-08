export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  isWorldCup?: boolean;
  level?: number;
}

export interface Team {
  id: string;
  name: string;
  currentRoom: string;
  timeLeft: number;
  lifelines: {
    fiftyFifty: boolean;
    skip: boolean;
    extraTime: boolean;
  };
}

export interface GameState {
  difficulty: Difficulty;
  isTurnTransition: boolean;
  currentTeamIndex: number;
  turnTimeLeft: number;
  teams: Team[];
  usedQuestions: string[];
  currentRoom?: string;
  inventory?: any[];
}

export interface GameContextType {
  state: GameState;
  setupGame: (numTeams: number, difficulty: Difficulty) => void;
  resetGame: () => void;
  answerQuestion: (isCorrect: boolean, questionId: string, nextRoom: string) => void;
  nextTurn: () => void;
  tickTimer: () => void;
  useLifeline: (type: 'fiftyFifty' | 'skip' | 'extraTime') => void;
  setRoom: (roomId: string) => void;
}
