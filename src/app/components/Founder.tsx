import { motion } from 'motion/react';
import { Award } from 'lucide-react';

export function Founder() {
  return (
    <section className="py-40 px-6 bg-gradient-to-b from-black via-blue-950/5 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="p-10 sm:p-12 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-[#00E5CC] to-purple-500 rounded-2xl flex items-center justify-center">
                  <span className="text-5xl font-semibold text-white">B</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
                    Built by someone who lived it
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>George Mason University</span>
                    </div>
                    <span>•</span>
                    <span>NSF I-Corps Fellow</span>
                    <span>•</span>
                    <span>ICAP/SBDC</span>
                  </div>
                </div>

                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I built BioXverse after watching my family navigate the chaos of post-hospital care coordination. 
                    Hours on hold, insurance portals that crashed, prescriptions that got lost in the system.
                  </p>
                  <p>
                    Healthcare works when you're healthy. It breaks when you need it most. 
                    BioXverse exists to fix that — to be the invisible concierge that handles everything 
                    so you can focus on what matters: getting better, or caring for someone you love.
                  </p>
                </div>

                {/* Mission statement */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-base text-gray-400 italic">
                    "No one should spend 47 minutes on hold just to schedule a doctor's appointment. 
                    No parent should miss work to coordinate their child's specialist visits. 
                    Healthcare administration should be invisible — and with AI, it finally can be."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
