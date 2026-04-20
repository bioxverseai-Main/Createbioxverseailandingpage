import { motion } from 'motion/react';

export function Solution() {
  return (
    <section className="py-40 px-6 bg-gradient-to-b from-black via-blue-950/5 to-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="inline-flex px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 font-medium mb-8">
            Introducing BioXverse
          </div>

          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[0.9]">
            <span className="text-white">Now it doesn't</span>
            <br />
            <span className="text-white">have to be</span>
            <br />
            <span className="gradient-accent">your problem</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            BioXverse is an autonomous AI agent that works silently across 
            scheduling systems, insurance portals, pharmacies, and provider networks.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-500 max-w-3xl mx-auto"
          >
            You make one request. The system executes your entire healthcare journey.
            <br />
            <span className="text-blue-400">Just like it should have worked all along.</span>
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: '24/7', label: 'Always working' },
              { value: '0', label: 'Phone calls needed' },
              { value: '<2hrs', label: 'Average response time' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl sm:text-5xl font-semibold text-white">{item.value}</div>
                <div className="text-sm text-gray-500">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
