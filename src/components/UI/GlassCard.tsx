import React, { ReactNode } from 'react';
import './GlassCard.css';
import { cn } from '../../utils/cn';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className }) => {
  return (
    <div className={cn('glass-card-component', className)}>
      {children}
    </div>
  );
};
