import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { Button } from '../components/Button';

const FinalRoom: React.FC = () => {
  const navigate = useNavigate();
  const { state, resetGame } = useGame();

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handlePlayAgain = () => {
    resetGame();
    navigate('/');
  };

  const INITIAL_TIME = {
    easy: 3600,
    medium: 2700,
    hard: 1800,
  };
  
  if (state.teams.length === 0) return null;

  const currentTeam = state.teams[state.currentTeamIndex];
  const totalTimeTaken = INITIAL_TIME[state.difficulty] - currentTeam.timeLeft;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        width: '100%',
        height: '100%',
        padding: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(rgba(10, 14, 23, 0.7), rgba(10, 14, 23, 0.95)), url("https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1920") center/cover',
      }}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
        style={{
          backgroundColor: 'rgba(15, 20, 35, 0.85)',
          padding: '60px',
          borderRadius: '20px',
          border: '2px solid var(--color-gold)',
          textAlign: 'center',
          boxShadow: '0 0 60px rgba(197, 160, 89, 0.4)',
          maxWidth: '800px',
          backdropFilter: 'blur(10px)',
        }}
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{ 
            fontSize: '48px', 
            marginBottom: '20px',
            color: 'var(--color-gold)',
            textShadow: '0 0 20px rgba(197, 160, 89, 0.5)'
          }}
        >
          ¡{currentTeam.name.toUpperCase()} HA ESCAPADO!
        </motion.h1>
        
        <p style={{ fontSize: '22px', marginBottom: '40px', lineHeight: '1.6' }}>
          La pesada puerta del sótano se abre y la luz del amanecer ilumina París. 
          Han logrado resolver el Misterio del Louvre y escapar a tiempo.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '30px', 
          marginBottom: '50px',
          backgroundColor: 'rgba(0,0,0,0.3)',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid rgba(197, 160, 89, 0.3)'
        }}>
          <div>
            <h3 style={{ color: 'var(--color-gold-light)', fontSize: '18px', marginBottom: '10px' }}>Tiempo Restante del Equipo</h3>
            <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{formatTime(currentTeam.timeLeft)}</div>
          </div>
          <div>
            <h3 style={{ color: 'var(--color-gold-light)', fontSize: '18px', marginBottom: '10px' }}>Tiempo Total Invertido</h3>
            <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{formatTime(totalTimeTaken)}</div>
          </div>
          <div>
            <h3 style={{ color: 'var(--color-gold-light)', fontSize: '18px', marginBottom: '10px' }}>Dificultad</h3>
            <div style={{ fontSize: '36px', fontWeight: 'bold', textTransform: 'capitalize' }}>{state.difficulty}</div>
          </div>
        </div>

        <Button variant="primary" size="large" onClick={handlePlayAgain}>
          Volver a Jugar (Reiniciar)
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default FinalRoom;
