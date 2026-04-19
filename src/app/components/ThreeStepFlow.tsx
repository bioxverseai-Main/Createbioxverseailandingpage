import { motion } from 'motion/react';
import { MessageSquare, Cpu, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'You Say It',
    description: 'Send one message with your healthcare need',
    example: '"Dad needs his discharge follow-ups scheduled"'
  },
  {
    icon: Cpu,
    title: 'We Execute',
    description: 'AI handles every step across all systems',
    example: 'Contacts providers, verifies insurance, books appointments'
  },
  {
    icon: CheckCircle,
    title: "You're Done",
    description: 'Get a clean summary of what was completed',
    example: '3 appointments confirmed, prescriptions ready'
  }
];

export function ThreeStepFlow() {
  return (
    <section className="py-40 px-6 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-full max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="w-32 h-px bg-gradient-to-r from-transparent to-[#00E5CC]/50" />
            <div className="w-32 h-px bg-[#00E5CC]/50" />
            <div className="w-32 h-px bg-gradient-to-l from-transparent to-[#00E5CC]/50" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6">
            Three steps.
            <br />
            <span className="gradient-accent">That's it.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Healthcare coordination simplified to what it should have always been.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Step number */}
              <div className="text-8xl font-bold text-gray-900 mb-6">
                {(index + 1).toString().padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="mb-6 p-4 bg-[#00E5CC]/10 border border-[#00E5CC]/20 rounded-2xl w-fit">
                <step.icon className="w-8 h-8 text-[#00E5CC]" />
              </div>

              {/* Content */}
              <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Example */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-xs text-gray-600 uppercase tracking-wider mb-2">
                  Example
                </div>
                <div className="text-sm text-gray-300">
                  {step.example}
                </div>
              </div>

              {/* Connector arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 -right-6 lg:-right-8">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="text-[#00E5CC]/30 text-4xl"
                  >
                    →
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl text-gray-400">
            No phone calls. No portals. No friction.
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Just healthcare that works the way it should.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
