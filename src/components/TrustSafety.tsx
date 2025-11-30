import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, FileCheck, AlertTriangle } from 'lucide-react';

export function TrustSafety() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const trustPoints = [
    {
      icon: Shield,
      title: "We Guide, Never Diagnose",
      description: "BioXverse provides intelligent guidance and education—not medical diagnoses. We're the intelligence layer that connects you to the right care, safely."
    },
    {
      icon: Lock,
      title: "Enterprise-Grade Security",
      description: "End-to-end encryption, HIPAA compliance, and zero data sharing. Your health information is protected with bank-level security."
    },
    {
      icon: FileCheck,
      title: "Transparent AI",
      description: "See exactly how our AI arrives at every conclusion. Full transparency in reasoning, data sources, and confidence levels."
    },
    {
      icon: AlertTriangle,
      title: "Safety-First Architecture",
      description: "Red flag detection for emergencies. Our AI is trained to recognize critical situations and direct you to immediate care."
    }
  ];

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
            Trust & Safety
          </h2>
          <p className="text-gray-600 text-xl">
            Built on a foundation of medical ethics, privacy, and security
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                className="flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#01C3B3]/10 to-[#266FFE]/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#266FFE]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[#0A1530] mb-3 text-xl">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          className="max-w-4xl mx-auto p-8 bg-white rounded-2xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center">
            <p className="text-[#0A1530] leading-relaxed">
              <strong>Medical Disclaimer:</strong> BioXverse.ai is an intelligent health guidance platform and educational tool. It does not provide medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical decisions. Never disregard professional medical advice or delay seeking care because of information from BioXverse.ai. In case of emergency, call 911 or your local emergency services immediately.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
