import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function MinimalHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center px-6 bg-black relative overflow-hidden">
      {/* Ultra-minimal gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[#00E5CC]/[0.03] rounded-full blur-3xl" />

      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl w-full pt-32 pb-20 relative z-10"
      >
        <div className="space-y-16">
          {/* Minimal badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="px-4 py-1.5 border border-white/10 rounded-full text-xs text-gray-500 tracking-wider uppercase">
              Launching Q3 2026
            </div>
          </motion.div>

          {/* Ultra-minimal headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="text-center space-y-8"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-light tracking-[-0.04em] leading-[0.85] text-white">
              Healthcare
              <br />
              <span className="font-extralight text-gray-600">without</span>
              <br />
              <span className="gradient-accent font-normal">the wait</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed"
            >
              AI that handles appointments, prescriptions,
              <br />
              and insurance — so you never wait again
            </motion.p>
          </motion.div>

          {/* Minimal CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <motion.button
              onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-white text-black rounded-full text-base font-medium hover:bg-gray-100 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Early Access
            </motion.button>

            <p className="text-sm text-gray-700">
              Be among the first to experience autonomous healthcare
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
