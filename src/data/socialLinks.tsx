import { Send, Github, Mail } from 'lucide-react';
import { SocialLink } from '../types';

// X (Twitter) Icon SVG
const XIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const socialLinks: SocialLink[] = [
  {
    id: 'telegram',
    icon: <Send size={20} />,
    href: 'https://t.me/elshodbekmukhtorov',
    ariaLabel: 'Telegram',
  },
  {
    id: 'x',
    icon: <XIcon />,
    href: 'https://x.com/MasterTech_Code',
    ariaLabel: 'X (Twitter)',
  },
  {
    id: 'github',
    icon: <Github size={20} />,
    href: 'https://github.com/MasterTechCode',
    ariaLabel: 'GitHub',
  },
  {
    id: 'email',
    icon: <Mail size={20} />,
    href: 'mailto:elshodbekmuxtorov44@gmail.com',
    ariaLabel: 'Email',
  },
];
