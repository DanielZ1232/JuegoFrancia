import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { Button } from '../components/Button';
import { questionBank } from '../data/questions';
import { Lifelines } from '../components/Lifelines';
import type { Question } from '../types';

const Room2: React.FC = () => {
  const navigate = useNavigate();
  const { state, answerQuestion } = useGame();
  
  const [question, setQuestion] = useState<Question | null>(null);
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  useEffect(() => {
    if (!question) {
      const availableQuestions = questionBank.filter(q => !state.usedQuestions.includes(q.id) && !q.isWorldCup && q.level === 2);
      if (availableQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        setQuestion(availableQuestions[randomIndex]);
      } else {
        const fallbackQs = questionBank.filter(q => !q.isWorldCup && q.level === 2);
        setQuestion(fallbackQs[Math.floor(Math.random() * fallbackQs.length)]);
      }
    }
  }, [state.usedQuestions, question]);

  const handleAnswer = (index: number) => {
    if (!question) return;
    const isCorrect = index === question.correctAnswerIndex;
    answerQuestion(isCorrect, question.id, '/room3');
    if (isCorrect) {
       navigate('/room3');
    }
  };

  const handleFiftyFifty = () => {
    if (!question) return;
    const incorrects = question.options
      .map((_, i) => i)
      .filter(i => i !== question.correctAnswerIndex);
    const shuffled = incorrects.sort(() => 0.5 - Math.random());
    setHiddenOptions(shuffled.slice(0, 2));
  };

  const handleSkip = () => {
    const availableWc = questionBank.filter(q => q.isWorldCup && !state.usedQuestions.includes(q.id));
    if (availableWc.length > 0) {
       const randomIndex = Math.floor(Math.random() * availableWc.length);
       setQuestion(availableWc[randomIndex]);
       setHiddenOptions([]);
    }
  };

  if (!question) return null;

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
        background: 'linear-gradient(rgba(10, 14, 23, 0.8), rgba(10, 14, 23, 0.95)), url("https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=1920") center/cover',
      }}
    >
      <h1 style={{ marginBottom: '20px' }}>Sala 2: Galería de Arte Clásico</h1>
      
      <motion.div
        style={{
          backgroundColor: 'var(--color-panel)',
          padding: '40px',
          borderRadius: '16px',
          border: '1px solid var(--color-gold)',
          maxWidth: '800px',
          width: '100%',
          textAlign: 'center',
          marginTop: '40px'
        }}
      >
        <h2 style={{ fontSize: '28px', marginBottom: '40px' }}>{question.text}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {question.options.map((opt, i) => (
             <Button 
               key={i} 
               variant="secondary" 
               onClick={() => handleAnswer(i)}
               style={{ 
                 height: '80px', 
                 fontSize: '18px',
                 opacity: hiddenOptions.includes(i) ? 0 : 1, 
                 pointerEvents: hiddenOptions.includes(i) ? 'none' : 'auto' 
               }}
             >
               {opt}
             </Button>
          ))}
        </div>
        {feedback === 'correct' && <p style={{ color: 'var(--color-gold)', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>¡Correcto! Avanzando...</p>}
        {feedback === 'incorrect' && <p style={{ color: '#ff4444', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>¡Respuesta Incorrecta! Cambio de turno.</p>}
        <Lifelines onFiftyFifty={handleFiftyFifty} onSkip={handleSkip} />
      </motion.div>
    </motion.div>
  );
};

export default Room2;
