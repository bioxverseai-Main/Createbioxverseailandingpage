import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { MessageSquare, Zap, Globe } from 'lucide-react';

const visionPoints = [
  {
    icon: MessageSquare,
    title: 'One interface',
    description: "Message BioXverse like you'd text a friend",
  },
  {
    icon: Zap,
    title: 'Zero friction',
    description: 'AI handles appointments, insurance, and prescriptions',
  },
  {
    icon: Globe,
    title: 'Complete autonomy',
    description: 'Works 24/7 across all healthcare systems',
  },
];

export function VisionParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-40 px-6 bg-gradient-to-b from-black via-[#8B5CF6]/5 to-black relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div
        style={{ y: y3, opacity: 0.1 }}
        className="absolute top-20 left-10 w-96 h-96 bg-[#00E5CC] rounded-full blur-[120px]"
      />
      <motion.div
        style={{ y: y1, opacity: 0.1 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B5CF6] rounded-full blur-[120px]"
      />

      <motion.div
        style={{ opacity }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div
          style={{ y: y2 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm uppercase tracking-widest text-[#8B5CF6] mb-4"
          >
            The Vision
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Imagine healthcare
            <br />
            <span className="bg-gradient-to-r from-[#00E5CC] to-[#8B5CF6] bg-clip-text text-transparent">
              that just works
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
          >
            No hold times. No repeated information. No navigating insurance portals.
            <br />
            <span className="text-white">Just one message, and everything is handled.</span>
          </motion.p>
        </motion.div>

        {/* Vision grid with depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            const yOffset = useTransform(scrollYProgress, [0, 1], ["0%", `${-15 * (index + 1)}%`]);

            return (
              <motion.div
                key={index}
                style={{ y: yOffset }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <motion.div
                  className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm group"
                  whileHover={{
                    scale: 1.05,
                    borderColor: index % 2 === 0 ? '#00E5CC' : '#8B5CF6',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon with glow */}
                  <motion.div
                    className="mb-6 relative"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                      style={{
                        background: index % 2 === 0 ? '#00E5CC' : '#8B5CF6',
                      }}
                    />
                    <Icon
                      className="w-12 h-12 relative z-10"
                      style={{
                        color: index % 2 === 0 ? '#00E5CC' : '#8B5CF6',
                      }}
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Promise */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center p-12 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(0,229,204,0.1) 0%, rgba(139,92,246,0.1) 50%, transparent 100%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <p className="text-2xl md:text-3xl text-white relative z-10 leading-relaxed">
            We're building the{' '}
            <span className="font-bold bg-gradient-to-r from-[#00E5CC] to-[#8B5CF6] bg-clip-text text-transparent">
              invisible layer
            </span>
            <br />
            between you and healthcare complexity
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
