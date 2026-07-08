import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { Backpack } from 'lucide-react';

export const Inventory: React.FC = () => {
  const { state } = useGame();
  const [isOpen, setIsOpen] = useState(false);

  if (state.currentRoom === '/' || state.currentRoom === '/intro') return null;

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'absolute',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-gold-dark)',
          border: '2px solid var(--color-gold)',
          color: 'var(--color-bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 0 20px rgba(0,0,0,0.5)',
          zIndex: 101,
        }}
      >
        <Backpack size={32} />
        {state.inventory.length > 0 && (
          <div style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            background: 'red',
            color: 'white',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
          }}>
            {state.inventory.length}
          </div>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            style={{
              position: 'absolute',
              bottom: '100px',
              right: '30px',
              width: '300px',
              minHeight: '200px',
              maxHeight: '400px',
              backgroundColor: 'var(--color-panel)',
              border: '1px solid var(--color-gold-dark)',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
              zIndex: 100,
              overflowY: 'auto',
            }}
          >
            <h3 style={{ borderBottom: '1px solid var(--color-text-muted)', paddingBottom: '10px', marginBottom: '15px' }}>
              Inventario
            </h3>
            
            {state.inventory.length === 0 ? (
              <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '40px' }}>
                Tu inventario está vacío.
              </p>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                {state.inventory.map((item) => (
                  <div key={item.id} style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    padding: '10px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    border: '1px solid rgba(197, 160, 89, 0.3)'
                  }}>
                    <div style={{ width: '40px', height: '40px', margin: '0 auto 10px', backgroundColor: 'var(--color-gold-dark)', borderRadius: '4px' }}>
                      {/* Placeholder icon */}
                    </div>
                    <p style={{ fontSize: '14px', margin: 0, color: 'var(--color-gold-light)' }}>{item.name}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
