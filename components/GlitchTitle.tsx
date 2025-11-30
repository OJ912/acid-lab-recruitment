import React from 'react';

interface GlitchTitleProps {
  text: string;
  className?: string;
}

const GlitchTitle: React.FC<GlitchTitleProps> = ({ text, className = '' }) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      <h1 className="relative z-10 font-black text-6xl md:text-8xl tracking-tighter text-white mix-blend-difference">
        {text}
      </h1>
      <h1 className="absolute top-0 left-0 z-0 font-black text-6xl md:text-8xl tracking-tighter text-[#ccff00] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-100 select-none">
        {text}
      </h1>
      <h1 className="absolute top-0 left-0 z-0 font-black text-6xl md:text-8xl tracking-tighter text-[#ff00cc] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:translate-y-1 transition-all duration-100 delay-75 select-none">
        {text}
      </h1>
    </div>
  );
};

export default GlitchTitle;
