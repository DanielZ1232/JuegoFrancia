import React from 'react';
import { useGame } from '../context/GameContext';
import { Button } from './Button';

interface LifelinesProps {
  onFiftyFifty: () => void;
  onSkip: () => void;
}

export const Lifelines: React.FC<LifelinesProps> = ({ onFiftyFifty, onSkip }) => {
  const { state, useLifeline } = useGame();
  
  if (state.teams.length === 0) return null;
  const team = state.teams[state.currentTeamIndex];

  const handleFiftyFifty = () => {
    if (team.lifelines.fiftyFifty) {
      useLifeline('fiftyFifty');
      onFiftyFifty();
    }
  };

  const handleSkip = () => {
    if (team.lifelines.skip) {
      useLifeline('skip');
      onSkip();
    }
  };

  const handleExtraTime = () => {
    if (team.lifelines.extraTime) {
      useLifeline('extraTime');
    }
  };

  return (
    <div style={{ display: 'flex', gap: '15px', marginTop: '30px', justifyContent: 'center' }}>
      <Button 
        variant="secondary" 
        onClick={handleFiftyFifty} 
        disabled={!team.lifelines.fiftyFifty}
        style={{ opacity: team.lifelines.fiftyFifty ? 1 : 0.5, backgroundColor: '#2a2a2a', borderColor: '#444', fontSize: '14px', padding: '10px 15px' }}
      >
        50/50
      </Button>
      <Button 
        variant="secondary" 
        onClick={handleSkip} 
        disabled={!team.lifelines.skip}
        style={{ opacity: team.lifelines.skip ? 1 : 0.5, backgroundColor: '#2a2a2a', borderColor: '#444', fontSize: '14px', padding: '10px 15px' }}
      >
        Cambiar Pregunta
      </Button>
      <Button 
        variant="secondary" 
        onClick={handleExtraTime} 
        disabled={!team.lifelines.extraTime}
        style={{ opacity: team.lifelines.extraTime ? 1 : 0.5, backgroundColor: '#2a2a2a', borderColor: '#444', fontSize: '14px', padding: '10px 15px' }}
      >
        +30 Segundos
      </Button>
    </div>
  );
};
