import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      setIsVisible(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="bg-black/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
            <div className="px-6 py-4 flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="text-white font-semibold text-sm mb-0.5">
                  Ready to simplify healthcare?
                </div>
                <div className="text-gray-400 text-xs">
                  Join 847+ on the waitlist
                </div>
              </div>

              <motion.button
                onClick={handleClick}
                className="px-6 py-3 bg-[#00E5CC] text-black rounded-full text-sm font-medium hover:bg-[#00FFD1] transition-all flex items-center gap-2 shadow-lg shadow-[#00E5CC]/30 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Access
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
