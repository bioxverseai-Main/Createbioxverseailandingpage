import { motion } from 'motion/react';
import { EnergyHero } from './components/energy/EnergyHero';
import { ProblemDynamic } from './components/energy/ProblemDynamic';
import { VisionParallax } from './components/energy/VisionParallax';
import { RoadmapTimeline } from './components/energy/RoadmapTimeline';
import { CapabilitiesInteractive } from './components/energy/CapabilitiesInteractive';
import { WaitlistDynamic } from './components/energy/WaitlistDynamic';
import { FooterBold } from './components/energy/FooterBold';

export default function Hospitals() {
  return (
    <div className="bg-black min-h-screen antialiased">
      {/* Top nav with glassmorphism */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 backdrop-blur-lg bg-black/50 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-[#00E5CC] to-[#8B5CF6] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            BioXverse
          </a>
          <a
            href="mailto:partnerships@bioxverse.ai"
            className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
          >
            Contact
          </a>
        </div>
      </motion.div>

      <main>
        <EnergyHero />
        <ProblemDynamic />
        <VisionParallax />
        <RoadmapTimeline />
        <CapabilitiesInteractive />
        <WaitlistDynamic />
      </main>
      <FooterBold />
    </div>
  );
}
