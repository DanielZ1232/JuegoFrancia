import React, { createContext, useContext, useState, useEffect } from 'react';
import type { GameState, GameContextType, Difficulty, Team } from '../types';

const INITIAL_TIME = {
  easy: 3600, // 60 min
  medium: 2700, // 45 min
  hard: 1800, // 30 min
};

const TURN_TIME = 120; // 2 minutes per turn

const initialState: GameState = {
  teams: [],
  currentTeamIndex: 0,
  difficulty: 'medium',
  usedQuestions: [],
  turnTimeLeft: TURN_TIME,
  isTurnTransition: false,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GameState>(() => {
    const saved = localStorage.getItem('louvreGameStateMulti2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialState;
      }
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem('louvreGameStateMulti2', JSON.stringify(state));
  }, [state]);

  const setupGame = (numTeams: number, diff: Difficulty) => {
    const newTeams: Team[] = Array.from({ length: numTeams }, (_, i) => ({
      id: `team-${i + 1}`,
      name: `Equipo ${i + 1}`,
      currentRoom: '/intro',
      timeLeft: INITIAL_TIME[diff],
      lifelines: {
        fiftyFifty: true,
        skip: true,
        extraTime: true,
      }
    }));

    setState({
      teams: newTeams,
      currentTeamIndex: 0,
      difficulty: diff,
      usedQuestions: [],
      turnTimeLeft: TURN_TIME,
      isTurnTransition: true,
    });
  };

  const nextTurn = () => {
    setState((prev) => {
      if (prev.teams.length === 0) return prev;
      const nextIndex = (prev.currentTeamIndex + 1) % prev.teams.length;
      return {
        ...prev,
        currentTeamIndex: nextIndex,
        turnTimeLeft: TURN_TIME,
        isTurnTransition: true,
      };
    });
  };

  const answerQuestion = (isCorrect: boolean, questionId: string, nextRoomId: string) => {
    setState((prev) => {
      if (prev.teams.length === 0) return prev;

      const newUsedQuestions = prev.usedQuestions.includes(questionId) 
        ? prev.usedQuestions 
        : [...prev.usedQuestions, questionId];
      
      if (isCorrect) {
        const updatedTeams = [...prev.teams];
        const team = updatedTeams[prev.currentTeamIndex];
        updatedTeams[prev.currentTeamIndex] = {
          ...team,
          currentRoom: nextRoomId,
        };
        
        return {
          ...prev,
          teams: updatedTeams,
          usedQuestions: newUsedQuestions,
          turnTimeLeft: TURN_TIME,
        };
      } else {
        const nextIndex = (prev.currentTeamIndex + 1) % prev.teams.length;
        return {
          ...prev,
          usedQuestions: newUsedQuestions,
          currentTeamIndex: nextIndex,
          turnTimeLeft: TURN_TIME,
          isTurnTransition: true,
        };
      }
    });
  };

  const tickTimer = () => {
    setState((prev) => {
      if (prev.teams.length === 0 || prev.isTurnTransition) return prev;
      
      const updatedTeams = [...prev.teams];
      const currentTeam = updatedTeams[prev.currentTeamIndex];
      
      if (currentTeam.timeLeft > 0) {
         updatedTeams[prev.currentTeamIndex] = {
            ...currentTeam,
            timeLeft: currentTeam.timeLeft - 1
         };
      }
      
      const newTurnTime = prev.turnTimeLeft > 0 ? prev.turnTimeLeft - 1 : 0;
      
      if (newTurnTime === 0) {
          const nextIndex = (prev.currentTeamIndex + 1) % prev.teams.length;
          return {
             ...prev,
             teams: updatedTeams,
             currentTeamIndex: nextIndex,
             turnTimeLeft: TURN_TIME,
             isTurnTransition: true,
          };
      }
      
      return {
        ...prev,
        teams: updatedTeams,
        turnTimeLeft: newTurnTime,
      };
    });
  };

  const useLifeline = (type: 'fiftyFifty' | 'skip' | 'extraTime') => {
    setState((prev) => {
      if (prev.teams.length === 0) return prev;
      const updatedTeams = [...prev.teams];
      const team = updatedTeams[prev.currentTeamIndex];
      
      if (!team.lifelines[type]) return prev; // Already used

      updatedTeams[prev.currentTeamIndex] = {
        ...team,
        lifelines: {
          ...team.lifelines,
          [type]: false,
        }
      };

      return {
        ...prev,
        teams: updatedTeams,
        turnTimeLeft: type === 'extraTime' ? prev.turnTimeLeft + 30 : prev.turnTimeLeft,
      };
    });
  };

  const setRoom = (roomId: string) => {
     setState((prev) => {
        if (prev.teams.length === 0) return prev;
        const updatedTeams = [...prev.teams];
        updatedTeams[prev.currentTeamIndex] = { ...updatedTeams[prev.currentTeamIndex], currentRoom: roomId };
        return { ...prev, teams: updatedTeams, isTurnTransition: false };
     });
  };

  const resetGame = () => {
    setState(initialState);
  };
  
  return (
    <GameContext.Provider value={{
      state,
      setupGame,
      nextTurn,
      answerQuestion,
      tickTimer,
      resetGame,
      useLifeline,
      setRoom,
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
