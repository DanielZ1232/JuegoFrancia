import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';


interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  size = 'medium',
  style,
  ...rest 
}) => {
  
  const baseStyle: React.CSSProperties = {
    fontFamily: 'var(--font-title)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    transition: 'all 0.3s ease',
  };

  const sizes: Record<string, React.CSSProperties> = {
    small: { padding: '8px 16px', fontSize: '14px' },
    medium: { padding: '12px 24px', fontSize: '16px' },
    large: { padding: '16px 40px', fontSize: '20px' },
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'transparent',
      color: 'var(--color-gold)',
      border: '2px solid var(--color-gold)',
      boxShadow: '0 0 15px rgba(197, 160, 89, 0.2)',
    },
    secondary: {
      backgroundColor: 'var(--color-panel)',
      color: 'var(--color-text)',
      border: '1px solid var(--color-text-muted)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-text)',
      border: 'none',
    }
  };

  const hoverVariants = {
    primary: {
      backgroundColor: 'rgba(197, 160, 89, 0.1)',
      boxShadow: '0 0 25px rgba(197, 160, 89, 0.5)',
      scale: 1.05,
    },
    secondary: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      scale: 1.05,
    },
    ghost: {
      color: 'var(--color-gold)',
      scale: 1.1,
    }
  };

  return (
    <motion.button
      onClick={onClick}
      style={{ ...baseStyle, ...sizes[size], ...variants[variant], ...(style as React.CSSProperties) }}
      whileHover={hoverVariants[variant]}
      whileTap={{ scale: 0.95 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
