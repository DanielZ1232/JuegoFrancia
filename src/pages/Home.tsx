import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useGame } from '../context/GameContext';
import type { Difficulty } from '../types';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { setupGame, resetGame, state } = useGame();
  
  const [step, setStep] = useState<'teams' | 'difficulty'>('teams');
  const [numTeams, setNumTeams] = useState<number>(3);

  const handleStart = (diff: Difficulty) => {
    resetGame();
    setupGame(numTeams, diff);
  };

  const handleContinue = () => {
    if (state.teams.length > 0) {
      navigate(state.teams[state.currentTeamIndex].currentRoom);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(rgba(10, 14, 23, 0.7), rgba(10, 14, 23, 0.9)), url("https://images.unsplash.com/photo-1499892477393-f675706cbe6e?q=80&w=1920") center/cover',
      }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ textAlign: 'center', marginBottom: '60px', display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        <h2 style={{ fontSize: '24px', letterSpacing: '8px', color: 'var(--color-gold-light)', margin: 0, lineHeight: 1 }}>ESCAPE ROOM INTERACTIVO</h2>
        <h1 style={{ fontSize: '80px', margin: 0, lineHeight: 1, textShadow: '0 0 20px rgba(197, 160, 89, 0.5)' }}>EL MISTERIO DEL LOUVRE</h1>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        {state.teams.length > 0 && (
          <Button variant="primary" size="large" onClick={handleContinue}>
            Continuar Partida
          </Button>
        )}
        
        {step === 'teams' ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
             <h3 style={{ fontSize: '24px', color: 'var(--color-text)' }}>Selecciona la cantidad de equipos:</h3>
             <div style={{ display: 'flex', gap: '20px' }}>
                <Button variant={numTeams === 2 ? 'primary' : 'secondary'} onClick={() => setNumTeams(2)}>2 Equipos</Button>
                <Button variant={numTeams === 3 ? 'primary' : 'secondary'} onClick={() => setNumTeams(3)}>3 Equipos</Button>
                <Button variant={numTeams === 4 ? 'primary' : 'secondary'} onClick={() => setNumTeams(4)}>4 Equipos</Button>
             </div>
             <Button variant="primary" size="large" onClick={() => setStep('difficulty')} style={{ marginTop: '20px' }}>
               Siguiente
             </Button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
             <h3 style={{ fontSize: '24px', color: 'var(--color-text)' }}>Selecciona la dificultad:</h3>
             <div style={{ display: 'flex', gap: '20px' }}>
                <Button variant="secondary" onClick={() => handleStart('easy')}>
                  Fácil (60 min)
                </Button>
                <Button variant="secondary" onClick={() => handleStart('medium')}>
                  Medio (45 min)
                </Button>
                <Button variant="secondary" onClick={() => handleStart('hard')}>
                  Difícil (30 min)
                </Button>
             </div>
             <Button variant="secondary" onClick={() => setStep('teams')} style={{ marginTop: '20px' }}>
               Volver
             </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Home;
