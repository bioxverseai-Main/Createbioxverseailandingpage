import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Cpu, Network } from 'lucide-react';

export function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Natural Input",
      description: "Users describe symptoms in plain language. No medical knowledge required—just natural conversation with our AI."
    },
    {
      number: "02",
      icon: Cpu,
      title: "Intelligence Layer",
      description: "Medical-grade AI processes symptoms, analyzes patterns, evaluates risk factors, and generates severity scores with transparent reasoning."
    },
    {
      number: "03",
      icon: Network,
      title: "Intelligent Action",
      description: "The platform delivers clear guidance: likely causes, urgency levels, care pathways, and provider recommendations—all in seconds."
    }
  ];

  return (
    <section className="py-32 px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#0A1530] mb-6 text-5xl">
            How the platform works
          </h2>
          <p className="text-gray-600 text-xl">
            From confusion to clarity through intelligent infrastructure
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-32 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#01C3B3] via-[#266FFE] to-[#01C3B3]"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-white rounded-2xl p-10 border border-gray-100 hover:border-[#266FFE] transition-all">
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-6xl text-gray-100">{step.number}</span>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#01C3B3] to-[#266FFE] rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-[#0A1530] mb-4 text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
