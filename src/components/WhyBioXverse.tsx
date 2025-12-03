import { motion } from 'framer-motion@10.18.0';
import { Zap, Globe, ShieldCheck, TrendingDown, Link, LineChart } from 'lucide-react';

export function WhyBioXverse() {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-[#00D4AA]" />,
      title: "Instant Intelligence",
      description: "Get medical-grade insights in seconds. No waiting rooms, no appointments."
    },
    {
      icon: <Globe className="w-6 h-6 text-[#00D4AA]" />,
      title: "Global Scale",
      description: "Built for billions of users across 100+ countries. Healthcare for everyone."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00D4AA]" />,
      title: "Medical-Grade Safety",
      description: "HIPAA compliant, encrypted. We guide, never diagnose."
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-[#00D4AA]" />,
      title: "Reduce Healthcare Costs",
      description: "Smart triage reduces unnecessary ER visits—saving billions."
    },
    {
      icon: <Link className="w-6 h-6 text-[#00D4AA]" />,
      title: "Built for Ecosystems",
      description: "Designed to integrate with providers, insurers, and health systems."
    },
    {
      icon: <LineChart className="w-6 h-6 text-[#00D4AA]" />,
      title: "Continuous Learning",
      description: "AI improves with every interaction, building comprehensive health intelligence."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0A1530]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why people will trust BioXverse
          </h2>
          <p className="text-xl text-gray-400">
            Built for speed, accuracy, and safety
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#13224a] p-8 rounded-2xl border border-[#1f3a75] hover:border-[#00D4AA]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-[#00D4AA]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00D4AA]/20 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
