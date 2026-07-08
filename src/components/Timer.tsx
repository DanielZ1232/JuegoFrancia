import React, { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { motion } from 'framer-motion';

export const Timer: React.FC = () => {
  const { state, tickTimer } = useGame();

  if (state.teams.length === 0) return null;

  const currentTeam = state.teams[state.currentTeamIndex];

  useEffect(() => {
    if (currentTeam.currentRoom !== '/' && currentTeam.currentRoom !== '/intro' && !state.isTurnTransition) {
      const interval = setInterval(() => {
        tickTimer();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentTeam.currentRoom, state.isTurnTransition, tickTimer]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (currentTeam.currentRoom === '/' || currentTeam.currentRoom === '/intro' || state.isTurnTransition) return null;

  const isLowTime = currentTeam.timeLeft < 300;
  const isTurnLowTime = state.turnTimeLeft < 30;

  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'var(--color-panel)',
        padding: '10px 20px',
        borderRadius: '8px',
        border: `1px solid ${isLowTime ? 'red' : 'var(--color-gold)'}`,
        boxShadow: `0 0 10px ${isLowTime ? 'rgba(255,0,0,0.5)' : 'rgba(197, 160, 89, 0.3)'}`,
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '14px', color: 'var(--color-gold-light)', fontWeight: 'bold' }}>
        <span>{currentTeam.name.toUpperCase()}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '10px', color: '#ccc', textTransform: 'uppercase' }}>Tiempo Total</span>
            <span style={{ fontSize: '20px', fontFamily: 'var(--font-title)', color: isLowTime ? '#ff4d4d' : 'var(--color-gold)' }}>
               {formatTime(currentTeam.timeLeft)}
            </span>
         </div>
         <div style={{ width: '1px', height: '30px', backgroundColor: '#333' }}></div>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '10px', color: '#ccc', textTransform: 'uppercase' }}>Turno</span>
            <span style={{ fontSize: '24px', fontFamily: 'var(--font-title)', color: isTurnLowTime ? '#ff4d4d' : 'white' }}>
               {formatTime(state.turnTimeLeft)}
            </span>
         </div>
      </div>
    </motion.div>
  );
};
