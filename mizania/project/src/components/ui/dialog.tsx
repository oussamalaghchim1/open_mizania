// src/components/ui/dialog.tsx
import React, { ReactNode } from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-container" onClick={(e) => e.stopPropagation()}>
        <button className="dialog-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export const DialogContent: React.FC = ({ children }) => (
  <div className="dialog-content">{children}</div>
);

export const DialogHeader: React.FC = ({ children }) => (
  <div className="dialog-header">{children}</div>
);

export const DialogTitle: React.FC = ({ children }) => (
  <h2 className="dialog-title">{children}</h2>
);
