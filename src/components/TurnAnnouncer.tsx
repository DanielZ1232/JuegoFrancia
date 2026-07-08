import React from 'react';
import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

export const TurnAnnouncer: React.FC = () => {
  const { state, setRoom } = useGame();
  const navigate = useNavigate();

  if (state.teams.length === 0) return null;

  const currentTeam = state.teams[state.currentTeamIndex];

  const handleStartTurn = () => {
    // Navigate to their current room and clear the transition flag
    navigate(currentTeam.currentRoom);
    setRoom(currentTeam.currentRoom);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--color-bg)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <motion.h2
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 10 }}
        style={{ fontSize: '60px', color: 'var(--color-gold)', marginBottom: '20px' }}
      >
        ¡Turno del {currentTeam.name}!
      </motion.h2>
      <p style={{ fontSize: '24px', marginBottom: '40px', color: 'var(--color-text-muted)' }}>
        Prepárense. Tienen 2 minutos para intentar avanzar.
      </p>
      
      <Button variant="primary" size="large" onClick={handleStartTurn}>
        Comenzar Turno
      </Button>
    </motion.div>
  );
};
