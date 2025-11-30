import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { User, Stethoscope, Watch, CreditCard, HeartPulse, Globe, Layers, Sparkles } from 'lucide-react';

export function FutureVision() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const visionItems = [
    {
      icon: User,
      title: "Universal Health Profile",
      description: "Complete medical history, wearable data, labs, imaging, and diagnoses—your entire health story in one secure graph.",
      phase: "Phase 2"
    },
    {
      icon: Stethoscope,
      title: "AI for Doctors",
      description: "Automated charting, clinical summarization, and intelligent diagnosis support—reducing physician burnout.",
      phase: "Phase 3"
    },
    {
      icon: Watch,
      title: "Wearable Integration",
      description: "Real-time health monitoring from Apple Health, Fitbit, Oura, Garmin—continuous intelligence, not episodic.",
      phase: "Phase 2"
    },
    {
      icon: CreditCard,
      title: "Insurance Intelligence",
      description: "Predictive claims, coverage optimization, cost transparency—making healthcare costs understandable.",
      phase: "Phase 4"
    },
    {
      icon: HeartPulse,
      title: "Preventive Health OS",
      description: "Daily health status, risk predictions, early warning systems—shift from reactive to proactive care.",
      phase: "Phase 3"
    },
    {
      icon: Globe,
      title: "Global Health Ecosystem",
      description: "A unified platform serving billions across 100+ countries and languages—healthcare without borders.",
      phase: "Phase 5"
    },
    {
      icon: Layers,
      title: "Clinical AI Network",
      description: "AI-powered telehealth, real-time doctor augmentation, and intelligent triage for health systems.",
      phase: "Phase 4"
    },
    {
      icon: Sparkles,
      title: "Personal Health Graph",
      description: "A dynamic, AI-powered model of your complete health state—the ultimate health operating system.",
      phase: "Phase 5"
    }
  ];

  return (
    <section className="py-32 px-8 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#266FFE]/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#266FFE]" />
            <span className="text-[#0A1530] text-sm">Our Roadmap</span>
          </div>
          <h2 className="text-[#0A1530] mb-6 text-5xl">
            Building the Apple of healthcare
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            We're not building a symptom checker. We're building the global health operating system—the infrastructure layer that powers all healthcare decisions for patients, doctors, and health systems worldwide.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#266FFE] hover:shadow-lg transition-all group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-10 h-10 text-[#266FFE] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 px-2 py-1 bg-gray-50 rounded">{item.phase}</span>
                </div>
                <h3 className="text-[#0A1530] mb-3 text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          className="mt-20 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-[#0A1530] to-[#266FFE] rounded-2xl p-12 text-white">
            <h3 className="text-3xl mb-4">This is a trillion-dollar opportunity</h3>
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              Healthcare is broken worldwide. AI will replace Google for symptom search. Doctors need AI to reduce workload. Insurance and hospitals need intelligent automation. The world is ready for Healthcare 2.0—and we're building the platform that powers it.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div>
                <div className="text-4xl mb-1">$4.3T</div>
                <div className="text-gray-300">US Healthcare Market</div>
              </div>
              <div>
                <div className="text-4xl mb-1">7.9B</div>
                <div className="text-gray-300">Global Users</div>
              </div>
              <div>
                <div className="text-4xl mb-1">100+</div>
                <div className="text-gray-300">Countries</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
