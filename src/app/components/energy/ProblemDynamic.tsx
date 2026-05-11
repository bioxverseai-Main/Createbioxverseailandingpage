import { motion } from 'motion/react';
import { useState } from 'react';
import { Clock, Phone, FileText, Calendar } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    stat: '47 min',
    label: 'average hold time',
    description: 'Scheduling appointments',
    color: '#00E5CC',
  },
  {
    icon: FileText,
    stat: '3-7 days',
    label: 'processing delays',
    description: 'Insurance prior authorizations',
    color: '#8B5CF6',
  },
  {
    icon: Phone,
    stat: '6 calls',
    label: 'per medication',
    description: 'Prescription refills',
    color: '#00E5CC',
  },
  {
    icon: Calendar,
    stat: '72 hrs',
    label: 'critical window',
    description: 'Post-discharge coordination',
    color: '#8B5CF6',
  },
];

export function ProblemDynamic() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-[#00E5CC]/10 via-transparent to-transparent blur-3xl" />

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
            The Problem
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Healthcare runs on
            <br />
            <span className="text-gray-500">phone calls</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group"
              >
                <motion.div
                  className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
                  whileHover={{ scale: 1.05, borderColor: problem.color }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${problem.color}20 0%, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="mb-4"
                      animate={{
                        rotate: isHovered ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8" style={{ color: problem.color }} />
                    </motion.div>

                    {/* Stat */}
                    <div className="text-4xl font-bold text-white mb-2">
                      {problem.stat}
                    </div>

                    {/* Label */}
                    <div className="text-sm text-gray-400 mb-3">
                      {problem.label}
                    </div>

                    {/* Description - reveals on hover */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isHovered ? 'auto' : 0,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-gray-500 border-t border-white/10 pt-3 overflow-hidden"
                    >
                      {problem.description}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl text-gray-400">
            This isn't normal.
            <br />
            <span className="text-white font-semibold">It's just accepted.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
