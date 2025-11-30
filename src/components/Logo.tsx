import React from 'react';

export function Logo({ size = 'default' }: { size?: 'default' | 'large' }) {
  const dimensions = size === 'large' ? 'w-12 h-12' : 'w-10 h-10';
  
  return (
    <div className={`${dimensions} relative`}>
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#06B6D4] via-[#7C3AED] to-[#F97316] p-[2px]">
        <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
          {/* DNA Helix inspired design */}
          <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
            <path
              d="M8 6 Q16 10, 24 6"
              stroke="url(#gradient1)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M8 16 Q16 20, 24 16"
              stroke="url(#gradient1)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M8 26 Q16 30, 24 26"
              stroke="url(#gradient1)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <line x1="8" y1="6" x2="8" y2="26" stroke="url(#gradient2)" strokeWidth="1.5" />
            <line x1="24" y1="6" x2="24" y2="26" stroke="url(#gradient2)" strokeWidth="1.5" />
            <circle cx="8" cy="11" r="1.5" fill="#7C3AED" />
            <circle cx="24" cy="11" r="1.5" fill="#06B6D4" />
            <circle cx="8" cy="21" r="1.5" fill="#06B6D4" />
            <circle cx="24" cy="21" r="1.5" fill="#7C3AED" />
            <defs>
              <linearGradient id="gradient1" x1="8" y1="0" x2="24" y2="32">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="50%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0" y1="6" x2="0" y2="26">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
