import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useGame } from '../context/GameContext';

const dialogues = [
  "Durante una visita nocturna exclusiva al Museo del Louvre...",
  "Las puertas principales se cierran con un estruendo metálico.",
  "La luz parpadea. Una voz misteriosa resuena por los pasillos:",
  "«Solo quienes demuestren conocer los secretos de Francia y de este museo podrán salir antes del amanecer...»",
  "El reloj comienza a correr. Debes encontrar la llave maestra."
];

const Intro: React.FC = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { setRoom } = useGame();

  const handleNext = () => {
    if (step < dialogues.length - 1) {
      setStep(step + 1);
    } else {
      setRoom('/room1');
      navigate('/room1');
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
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
      }}
    >
      <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          <motion.p
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: '32px', textAlign: 'center', maxWidth: '80%', lineHeight: '1.5' }}
          >
            {dialogues[step]}
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ marginTop: '60px' }}
      >
        <Button variant="ghost" onClick={handleNext}>
          {step < dialogues.length - 1 ? 'Siguiente >' : 'Entrar al Hall Principal'}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
