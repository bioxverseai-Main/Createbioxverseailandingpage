import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Building2, Shield, Database, Network } from 'lucide-react';

export function HospitalHero() {
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
      {/* Subtle gradient orb */}
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
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#00E5CC]/10 border border-[#00E5CC]/20 rounded-full text-sm text-[#00E5CC] font-medium"
          >
            <Network className="w-4 h-4" />
            Autonomous Post-Discharge Coordination • FHIR R4 • Epic & Cerner Compatible
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] font-semibold tracking-tight leading-[0.9] text-white"
          >
            The 30 days after discharge
            <br />
            <span className="text-gray-600">define your</span>
            <br />
            <span className="gradient-accent">readmission rate.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-400 max-w-4xl leading-relaxed"
          >
            BioXverse executes every follow-up — so yours never falls through.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-500 max-w-3xl leading-relaxed"
          >
            An autonomous AI agent that coordinates post-discharge appointments,
            prior authorizations, and prescription follow-through on behalf of your patients.
            <br />
            <span className="text-[#00E5CC] font-medium mt-2 block">
              No nursing phone trees. No care gap leakage. No HRRP exposure.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <motion.button
              onClick={() => document.getElementById('pilot-request')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-[#00E5CC] text-black rounded-full text-lg font-medium hover:bg-[#00FFD1] transition-all shadow-2xl shadow-[#00E5CC]/30"
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(0, 229, 204, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Request a 15-Minute Pilot Conversation
            </motion.button>

            <motion.a
              href="#roi-calculator"
              className="px-10 py-5 text-gray-400 hover:text-white transition-colors text-lg font-medium group flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              Download the ROI One-Pager
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </motion.a>
          </motion.div>

          {/* Trust Bar - Epic/Cerner Integration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#00E5CC]/10 rounded-lg">
                <Building2 className="w-5 h-5 text-[#00E5CC]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Integrates with Epic · Cerner · Surescripts</div>
                <div className="text-xs text-gray-600 mt-0.5">EHR-native workflow</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">HIPAA · AES-256 · AWS GovCloud</div>
                <div className="text-xs text-gray-600 mt-0.5">Enterprise security</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Database className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">FHIR R4 · CMS-Compliant</div>
                <div className="text-xs text-gray-600 mt-0.5">Data standards</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Network className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">NSF I-Corps · George Mason</div>
                <div className="text-xs text-gray-600 mt-0.5">Research-backed</div>
              </div>
            </div>
          </motion.div>

          {/* Proof Stat Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl"
          >
            <div className="text-center sm:text-left">
              <div className="text-5xl sm:text-6xl font-semibold text-[#00E5CC] mb-2">20–30%</div>
              <div className="text-sm text-gray-400 leading-relaxed">
                Reduction in readmissions with structured follow-up*
              </div>
            </div>

            <div className="text-center sm:text-left">
              <div className="text-5xl sm:text-6xl font-semibold text-[#00E5CC] mb-2">72hrs</div>
              <div className="text-sm text-gray-400 leading-relaxed">
                Post-discharge coordination window automated
              </div>
            </div>

            <div className="text-center sm:text-left">
              <div className="text-5xl sm:text-6xl font-semibold text-[#00E5CC] mb-2">6.4</div>
              <div className="text-sm text-gray-400 leading-relaxed">
                Manual steps eliminated per care episode
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-xs text-gray-700 pt-2"
          >
            *CMS benchmark data, 2023. Pilot outcomes forthcoming.
          </motion.p>
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
          <span className="text-xs">Explore the solution</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
