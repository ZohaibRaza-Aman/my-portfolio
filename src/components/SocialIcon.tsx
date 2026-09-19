import React from 'react';
import { Linkedin, Github, Twitter, MessageCircle, Globe } from 'lucide-react';
import { SocialLink } from '../types';

interface SocialIconProps {
  social: SocialLink;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ social }) => {
  const renderIcon = () => {
    switch (social.iconName) {
      case 'Linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'Github':
        return <Github className="w-4 h-4" />;
      case 'Twitter':
        return <Twitter className="w-4 h-4" />;
      case 'MessageCircle':
        return <MessageCircle className="w-4 h-4" />;
      case 'Globe':
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <a
      id={`social-link-${social.id}`}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] active:scale-95"
    >
      {renderIcon()}
      {/* Tooltip on hover */}
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 text-[11px] font-medium text-slate-200 bg-slate-800 border border-slate-700/80 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg whitespace-nowrap z-20">
        {social.name}
      </span>
    </a>
  );
};
