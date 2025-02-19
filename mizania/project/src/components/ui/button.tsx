// src/components/ui/button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  ariaLabel?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, ariaLabel, children }) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel || 'Button'}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      tabIndex={0}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {children}
    </button>
  );
};

export default Button;
