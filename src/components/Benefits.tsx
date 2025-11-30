import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Zap, Globe, Shield, DollarSign, Users, TrendingUp } from 'lucide-react';

export function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const benefits = [
    {
      icon: Zap,
      title: "Instant Intelligence",
      description: "Get medical-grade insights in seconds. No waiting rooms, no appointments needed for initial clarity."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Built for billions of users across 100+ countries. Healthcare intelligence accessible to everyone, everywhere."
    },
    {
      icon: Shield,
      title: "Medical-Grade Safety",
      description: "HIPAA compliant, encrypted, and designed with safety-first AI. We guide, never diagnose."
    },
    {
      icon: DollarSign,
      title: "Reduce Healthcare Costs",
      description: "Smart triage reduces unnecessary ER visits and optimizes care delivery—saving billions in healthcare spending."
    },
    {
      icon: Users,
      title: "Built for Ecosystems",
      description: "Designed to integrate with providers, insurers, wearables, and health systems—not replace them."
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "AI that improves with every interaction, building the world's most comprehensive health intelligence graph."
    }
  ];

  return (
    <section className="py-32 px-8 bg-[#0A1530] relative overflow-hidden" ref={ref}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#01C3B3 1px, transparent 1px), linear-gradient(90deg, #01C3B3 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-6 text-5xl">
            Why BioXverse wins
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed">
            Platform-level advantages that create defensible, lasting value
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#01C3B3] to-[#266FFE] rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white mb-3 text-xl">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
