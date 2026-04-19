import { motion } from 'motion/react';
import { Network } from 'lucide-react';

export function IntegrationNote() {
  return (
    <section className="py-20 px-6 bg-black border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full mb-6">
            <Network className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400 font-medium">System Integration</span>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
            Built to connect with Epic, Cerner, and Surescripts — integrations launching in Phase 2.
            <br />
            <span className="text-gray-600 text-base mt-2 block">
              Currently supporting FHIR R4 API standards and Direct Protocol for provider communication.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
