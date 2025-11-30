import React from 'react';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, className = '' }) => {
  const content = Array(10).fill(text).join(' /// ');

  return (
    <div className={`overflow-hidden whitespace-nowrap py-3 bg-[#ccff00] text-black border-y-2 border-black ${className}`}>
      <div className="inline-block animate-marquee font-bold text-lg tracking-widest uppercase">
        {content}
      </div>
    </div>
  );
};

export default Marquee;
