import React from 'react';
import './SocialLinks.css';
import { IconButton } from '../UI/IconButton';
import { SocialLink } from '../../types';

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="social-links">
      {links.map((link, index) => (
        <IconButton
          key={link.id}
          href={link.href}
          ariaLabel={link.ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link-button"
          style={{
            animationDelay: `${(index + 1) * 100}ms`,
          }}
        >
          {link.icon}
        </IconButton>
      ))}
    </div>
  );
};
