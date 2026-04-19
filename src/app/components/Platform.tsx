import { motion } from 'framer-motion@10.18.0';
import { useInView } from 'react-intersection-observer';
import { Brain, Activity, Database, Network } from 'lucide-react';

export function Platform() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const platforms = [
    {
      icon: Brain,
      title: "AI Health Intelligence",
      description: "Medical-grade AI that analyzes symptoms, evaluates severity, and provides instant clarity—replacing dangerous Google searches with trusted guidance."
    },
    {
      icon: Activity,
      title: "Care Navigation System",
      description: "Smart routing that connects users to the right care at the right time. Reduce unnecessary ER visits and optimize healthcare delivery."
    },
    {
      icon: Database,
      title: "Universal Health Profile",
      description: "A single source of truth for all health data—medical history, wearables, labs, imaging, and diagnoses in one secure ecosystem."
    },
    {
      icon: Network,
      title: "Healthcare Operating System",
      description: "The infrastructure layer connecting patients, providers, insurers, and AI into one intelligent global network."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-32 px-8 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#0A1530] mb-6 text-5xl">
            More than an app. A platform.
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            We're not building another health app. We're building the intelligent infrastructure that powers the future of healthcare—for patients, doctors, and health systems worldwide.
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-10 hover:shadow-xl transition-all border border-gray-100 group"
                variants={itemVariants}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#01C3B3]/10 to-[#266FFE]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-[#266FFE]" />
                </div>
                <h3 className="text-[#0A1530] mb-4 text-2xl">
                  {platform.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {platform.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
