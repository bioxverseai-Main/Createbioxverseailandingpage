import React from 'react';

export function Logo({ size = 'default', className = '' }: { size?: 'default' | 'large', className?: string }) {
  const dimensions = size === 'large' ? 'w-12 h-12' : 'w-10 h-10';
  
  return (
    <div className={`${dimensions} ${className} relative flex items-center justify-center`}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#00D4AA" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Abstract X / Cross Shape */}
        <path 
          d="M12 12L28 28M28 12L12 28" 
          stroke="url(#grad1)" 
          strokeWidth="4" 
          strokeLinecap="round" 
          filter="url(#glow)"
        />
        
        {/* Center Dot for Focus */}
        <circle cx="20" cy="20" r="2" fill="white" />
      </svg>
    </div>
  );
}
