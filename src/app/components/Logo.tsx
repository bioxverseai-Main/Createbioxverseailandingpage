import { motion } from 'motion/react';

interface LogoProps {
  size?: 'default' | 'large';
  className?: string;
  animate?: boolean;
}

export function Logo({ size = 'default', className = '', animate = true }: LogoProps) {
  const dimensions = size === 'large' ? 'w-12 h-12' : 'w-10 h-10';

  return (
    <motion.div
      className={`${dimensions} ${className} relative flex items-center justify-center`}
      whileHover={animate ? { scale: 1.05 } : {}}
      transition={{ duration: 0.2 }}
    >
      {/* Pulse effect background */}
      {animate && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-[#00E5CC]/20 blur-sm"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10">
        <defs>
          <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5CC" />
            <stop offset="100%" stopColor="#00FFD1" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Geometric X - Precision Convergence */}
        <path
          d="M12 12L28 28M28 12L12 28"
          stroke="url(#tealGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Center precision dot */}
        <circle cx="20" cy="20" r="2.5" fill="#00E5CC" />

        {/* Subtle ring for medical precision */}
        <circle cx="20" cy="20" r="8" stroke="#00E5CC" strokeWidth="1" fill="none" opacity="0.3" />
      </svg>
    </motion.div>
  );
}
