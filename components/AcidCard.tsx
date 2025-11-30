import React, { ReactNode } from 'react';

interface AcidCardProps {
  children: ReactNode;
  title?: string;
  className?: string;
  variant?: 'green' | 'pink' | 'purple' | 'default';
}

const AcidCard: React.FC<AcidCardProps> = ({ children, title, className = '', variant = 'default' }) => {
  let borderColor = 'border-[#ccff00]';
  let shadowColor = 'shadow-[#ccff00]';
  let titleBg = 'bg-[#ccff00]';
  let titleText = 'text-black';

  if (variant === 'pink') {
    borderColor = 'border-[#ff00cc]';
    shadowColor = 'shadow-[#ff00cc]';
    titleBg = 'bg-[#ff00cc]';
  } else if (variant === 'purple') {
    borderColor = 'border-[#9d00ff]';
    shadowColor = 'shadow-[#9d00ff]';
    titleBg = 'bg-[#9d00ff]';
  } else if (variant === 'default') {
     borderColor = 'border-white';
     shadowColor = 'shadow-white';
     titleBg = 'bg-white';
  }

  return (
    <div className={`relative border-2 ${borderColor} bg-black p-6 ${className} transition-all hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] shadow-[4px_4px_0px_0px] ${shadowColor}`}>
      {title && (
        <div className={`absolute -top-4 left-4 ${titleBg} ${titleText} px-2 py-0.5 text-sm font-bold uppercase tracking-wider border border-black`}>
          {title}
        </div>
      )}
      {children}
    </div>
  );
};

export default AcidCard;
