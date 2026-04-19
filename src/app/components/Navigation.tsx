import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Logo size="default" animate={false} />
          <span className="text-xl font-semibold tracking-tight text-white">
            BioXverse
          </span>
        </motion.a>

        <div className="flex items-center gap-6">
          <button
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block"
          >
            How it works
          </button>
          <motion.button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 bg-[#00E5CC] text-black rounded-full text-sm font-medium hover:bg-[#00FFD1] transition-all duration-300 shadow-lg shadow-[#00E5CC]/20"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(0, 229, 204, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get Early Access
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
