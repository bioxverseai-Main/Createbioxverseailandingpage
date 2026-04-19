import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-black relative overflow-hidden">
      {/* Subtle teal gradient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full bg-[#00E5CC]/8 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ duration: 0.5, ease: 'linear' }}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="max-w-6xl w-full pt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex"
          >
            <div className="px-4 py-2 bg-[#00E5CC]/10 border border-[#00E5CC]/20 rounded-full text-sm text-[#00E5CC] font-medium">
              The First Self-Driving Health OS
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-semibold tracking-tight leading-[0.9] text-white"
          >
            Healthcare.
            <br />
            <span className="gradient-accent">Without the hassle.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-400 max-w-3xl leading-relaxed"
          >
            An autonomous AI agent that books appointments, navigates insurance, 
            refills prescriptions, and eliminates every friction point in healthcare.
            <br />
            <span className="text-gray-500 text-lg sm:text-xl mt-4 block">
              No phone calls. No forms. No wait times.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <motion.button
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-[#00E5CC] text-black rounded-full text-lg font-medium hover:bg-[#00FFD1] transition-all shadow-2xl shadow-[#00E5CC]/30"
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(0, 229, 204, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Waitlist
            </motion.button>
            
            <motion.button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 text-gray-400 hover:text-white transition-colors text-lg font-medium group flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              See how it works
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="pt-12 flex flex-wrap items-center gap-6 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="w-px h-4 bg-gray-800" />
            <div>SOC 2 Type II Certified</div>
            <div className="w-px h-4 bg-gray-800" />
            <div>Enterprise-Grade Security</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-gray-600 text-sm flex flex-col items-center gap-2"
        >
          <span className="text-xs">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
