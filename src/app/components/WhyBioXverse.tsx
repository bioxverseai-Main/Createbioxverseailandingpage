import { motion } from 'framer-motion@10.18.0';
import { ShieldCheck, Zap, BrainCircuit, Heart } from 'lucide-react';

export function WhyBioXverse() {
  const reasons = [
    {
      icon: <Zap className="w-8 h-8 text-[#0066FF]" />,
      title: "Effortless",
      desc: "We do the work. You just say 'yes' to the solution."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-[#00D4AA]" />,
      title: "Predictive",
      desc: "It knows you need a checkup before you remember to book one."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#0066FF]" />,
      title: "Fort Knox Security",
      desc: "Your data is encrypted, private, and yours alone. HIPAA compliant."
    },
    {
      icon: <Heart className="w-8 h-8 text-[#00D4AA]" />,
      title: "Human-Centric",
      desc: "Technology designed to give you more time, not more screen time."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#F8FAFB] border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A1530] mb-6">
            Why trust BioXverse?
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            We're building the first health OS that combines clinical accuracy with consumer simplicity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-[#F8FAFB] rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A1530] mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
