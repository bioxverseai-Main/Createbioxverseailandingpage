import { motion } from 'motion/react';
import { Code, Users, Rocket, CheckCircle2 } from 'lucide-react';

const milestones = [
  {
    phase: 'Foundation',
    status: 'completed',
    icon: CheckCircle2,
    items: ['NSF I-Corps validation', 'George Mason University partnership', 'Problem validation'],
    color: '#10B981',
  },
  {
    phase: 'Development',
    status: 'in-progress',
    icon: Code,
    items: ['AI appointment scheduling', 'Insurance navigation system', 'Prescription management'],
    color: '#00E5CC',
  },
  {
    phase: 'Beta Testing',
    status: 'upcoming',
    icon: Users,
    items: ['Early access program', 'Hospital pilot partners', 'Patient feedback loops'],
    color: '#8B5CF6',
  },
  {
    phase: 'Launch',
    status: 'upcoming',
    icon: Rocket,
    items: ['General availability', 'Full feature rollout', 'Q3 2026'],
    color: '#F59E0B',
  },
];

export function RoadmapTimeline() {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-gradient-to-r from-[#00E5CC]/10 via-[#8B5CF6]/10 to-[#F59E0B]/10 rounded-full blur-3xl" />
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
            Our Journey
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            From vision to{' '}
            <span className="bg-gradient-to-r from-[#00E5CC] to-[#8B5CF6] bg-clip-text text-transparent">
              reality
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Track our progress as we build the future of healthcare coordination
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#10B981] via-[#00E5CC] via-[#8B5CF6] to-[#F59E0B] opacity-20" />

          <div className="space-y-24">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${isLeft ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <motion.div
                      className={`inline-block p-8 rounded-2xl border ${
                        milestone.status === 'completed'
                          ? 'border-[#10B981]/30 bg-[#10B981]/10'
                          : milestone.status === 'in-progress'
                          ? 'border-[#00E5CC]/30 bg-[#00E5CC]/10'
                          : 'border-white/10 bg-white/5'
                      } backdrop-blur-sm group`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                        <h3 className="text-2xl font-bold text-white">
                          {milestone.phase}
                        </h3>
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            milestone.status === 'completed'
                              ? 'bg-[#10B981]/20 text-[#10B981]'
                              : milestone.status === 'in-progress'
                              ? 'bg-[#00E5CC]/20 text-[#00E5CC]'
                              : 'bg-white/10 text-gray-400'
                          }`}
                        >
                          {milestone.status === 'completed' ? 'Completed' : milestone.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {milestone.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-400 text-sm"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Center icon */}
                  <div className="absolute left-1/2 -translate-x-1/2">
                    <motion.div
                      className="relative p-4 rounded-full border-4 border-black"
                      style={{
                        backgroundColor: milestone.color,
                        boxShadow: `0 0 30px ${milestone.color}60`,
                      }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-white" />

                      {milestone.status === 'in-progress' && (
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{
                            border: `2px solid ${milestone.color}`,
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.8, 0, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Launch highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center p-12 rounded-3xl border border-[#F59E0B]/30 bg-gradient-to-br from-[#F59E0B]/10 to-transparent backdrop-blur-sm relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.1) 0%, transparent 70%)',
                'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.2) 0%, transparent 70%)',
                'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.1) 0%, transparent 70%)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <Rocket className="w-16 h-16 text-[#F59E0B] mx-auto mb-6" />
          <h3 className="text-4xl font-bold text-white mb-4">
            General Availability
          </h3>
          <p className="text-2xl text-[#F59E0B] font-semibold mb-2">
            Q3 2026
          </p>
          <p className="text-gray-400">
            Expected launch quarter — join the waitlist to be notified
          </p>
        </motion.div>
      </div>
    </section>
  );
}
