import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function HospitalSolution() {
  return (
    <section className="py-40 px-6 bg-gradient-to-b from-black via-[#00E5CC]/5 to-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-[#00E5CC]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="inline-flex px-4 py-2 bg-[#00E5CC]/10 border border-[#00E5CC]/20 rounded-full text-sm text-[#00E5CC] font-medium mb-8">
            The BioXverse Solution
          </div>

          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[0.9]">
            <span className="text-white">Autonomous execution.</span>
            <br />
            <span className="text-white">Zero care gaps.</span>
            <br />
            <span className="gradient-accent">Measurable outcomes.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            BioXverse is an AI agent that executes post-discharge coordination on behalf of
            your patients — across scheduling systems, insurance portals, pharmacies, and provider networks.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-500 max-w-3xl mx-auto"
          >
            Your discharge coordinator documents the care plan in Epic.
            BioXverse handles everything else — before the patient leaves the building.
          </motion.p>

          {/* What gets automated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto text-left"
          >
            {[
              'Specialist follow-up scheduling (cardiologist, orthopedic, wound care)',
              'Prior authorization submission and tracking',
              'Prescription routing to patient\'s preferred pharmacy',
              'DME coordination (oxygen, walker, hospital bed)',
              'Home health scheduling and insurance verification',
              'Transportation arrangement for appointments',
              'Lab order placement before follow-up visits',
              'Insurance benefit verification for all services'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="p-1 bg-[#00E5CC]/20 rounded-full mt-0.5">
                  <Check className="w-4 h-4 text-[#00E5CC]" />
                </div>
                <span className="text-base text-gray-300">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Key metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: '<2hrs', label: 'Average completion time for full discharge coordination' },
              { value: '24/7', label: 'Works autonomously, including nights and weekends' },
              { value: '0', label: 'Additional FTE headcount needed' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl sm:text-5xl font-semibold text-white">{item.value}</div>
                <div className="text-sm text-gray-500">{item.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Integration note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-12 p-6 bg-[#00E5CC]/5 border border-[#00E5CC]/20 rounded-2xl max-w-3xl mx-auto"
          >
            <p className="text-base text-gray-400">
              <span className="text-[#00E5CC] font-semibold">Integrates with your existing EHR.</span>{' '}
              Pulls discharge orders from Epic/Cerner via FHIR R4. Logs all actions back to the patient chart.
              Your clinical workflow stays the same. The administrative burden disappears.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
