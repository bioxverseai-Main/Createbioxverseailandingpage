import { motion } from 'motion/react';
import { Calendar, Shield, Pill, Network } from 'lucide-react';
import { useState } from 'react';

const capabilities = [
  {
    number: '01',
    icon: Calendar,
    title: 'Appointment scheduling',
    description: 'Books, reschedules, and confirms appointments across providers',
    features: ['Multi-provider coordination', 'Automated reminders', 'Calendar integration'],
    color: '#00E5CC',
  },
  {
    number: '02',
    icon: Shield,
    title: 'Insurance navigation',
    description: 'Submits prior authorizations, verifies coverage, tracks claims',
    features: ['Prior authorization automation', 'Coverage verification', 'Claims tracking'],
    color: '#8B5CF6',
  },
  {
    number: '03',
    icon: Pill,
    title: 'Prescription management',
    description: 'Routes refills to pharmacies, coordinates delivery, manages reconciliation',
    features: ['Automated refills', 'Pharmacy coordination', 'Medication reconciliation'],
    color: '#00E5CC',
  },
  {
    number: '04',
    icon: Network,
    title: 'Care coordination',
    description: 'Manages post-discharge follow-ups, coordinates between specialists',
    features: ['Discharge planning', 'Specialist coordination', 'Follow-up scheduling'],
    color: '#8B5CF6',
  },
];

export function CapabilitiesInteractive() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black via-[#00E5CC]/5 to-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#8B5CF6]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-sm uppercase tracking-widest text-[#00E5CC] mb-4">
            The Approach
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Autonomous AI
            <br />
            <span className="text-gray-500">for every task</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Four core capabilities designed to eliminate healthcare friction
          </p>
        </motion.div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const isSelected = selectedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setSelectedIndex(index)}
                onHoverEnd={() => setSelectedIndex(null)}
                className="relative group"
              >
                <motion.div
                  className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
                  whileHover={{
                    scale: 1.03,
                    borderColor: capability.color,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at top left, ${capability.color}20 0%, transparent 70%)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isSelected ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        {/* Number */}
                        <div className="text-6xl font-bold" style={{ color: capability.color, opacity: 0.2 }}>
                          {capability.number}
                        </div>

                        {/* Icon */}
                        <motion.div
                          animate={{
                            rotate: isSelected ? 360 : 0,
                            scale: isSelected ? 1.2 : 1,
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-12 h-12" style={{ color: capability.color }} />
                        </motion.div>
                      </div>

                      {/* Status badge */}
                      <motion.div
                        className="px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="flex items-center gap-2">
                          <motion.div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: '#F59E0B' }}
                            animate={{
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <span className="text-xs text-gray-400">In development</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {capability.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    {/* Features - expand on hover */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isSelected ? 'auto' : 0,
                        opacity: isSelected ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-white/10">
                        <div className="text-sm text-gray-500 mb-3">Features:</div>
                        <ul className="space-y-2">
                          {capability.features.map((feature, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-2 text-gray-400"
                            >
                              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: capability.color }} />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ backgroundColor: capability.color }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500">
            All capabilities currently under active development
            <br />
            <span className="text-gray-600">Expected availability Q3 2026</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
