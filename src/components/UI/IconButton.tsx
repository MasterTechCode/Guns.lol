import React, { ReactNode } from 'react';
import './IconButton.css';
import { cn } from '../../utils/cn';

interface IconButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
  className?: string;
  target?: string;
  rel?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  onClick,
  href,
  ariaLabel,
  className,
  target,
  rel,
}) => {
  const baseClassName = cn('icon-button', className);

  if (href) {
    return (
      <a
        href={href}
        className={baseClassName}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={baseClassName}
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
    >
      {children}
    </button>
  );
};
