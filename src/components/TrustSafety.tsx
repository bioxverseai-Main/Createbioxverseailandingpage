import { motion } from 'framer-motion@10.18.0';
import { Shield, Lock, FileText, AlertTriangle } from 'lucide-react';

export function TrustSafety() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Trust & Safety
          </h2>
          <p className="text-xl text-gray-600">
            Built on medical ethics, privacy, and security
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
          {[
            {
              icon: <Shield className="w-6 h-6 text-[#0066FF]" />,
              title: "We Guide, Never Diagnose",
              desc: "BioXverse provides intelligent guidance and education—not medical diagnoses. We connect you to the right care, safely."
            },
            {
              icon: <Lock className="w-6 h-6 text-[#0066FF]" />,
              title: "Enterprise-Grade Security",
              desc: "End-to-end encryption, HIPAA compliance, zero data sharing. Bank-level security."
            },
            {
              icon: <FileText className="w-6 h-6 text-[#0066FF]" />,
              title: "Transparent AI",
              desc: "See how our AI arrives at conclusions. Full transparency in reasoning and confidence levels."
            },
            {
              icon: <AlertTriangle className="w-6 h-6 text-[#0066FF]" />,
              title: "Safety-First Architecture",
              desc: "Red flag detection for emergencies. AI trained to recognize critical situations."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto p-6 border border-gray-200 rounded-xl bg-gray-50 text-sm text-gray-500 text-center leading-relaxed"
        >
          <p className="font-semibold mb-1">Medical Disclaimer:</p>
          BioXverse.ai is an intelligent health guidance platform and educational tool. It does not provide medical advice, diagnosis, or treatment. Always consult qualified healthcare professionals for medical decisions. Never disregard professional medical advice or delay seeking care because of information from BioXverse.ai. In case of emergency, call 911 or your local emergency services immediately.
        </motion.div>
      </div>
    </section>
  );
}
