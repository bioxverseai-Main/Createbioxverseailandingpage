import { motion } from 'motion/react';
import { MessageSquare, Brain, Zap, Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'You tell BioXverse what you need',
    description: 'A symptom. A prescription refill. A discharge summary. Hospital records. That\'s your only job.',
    example: '"Dad was discharged yesterday with follow-up care instructions"',
  },
  {
    number: '02',
    icon: Brain,
    title: 'The AI maps your full care journey',
    description: 'Every required action—appointments, referrals, prescriptions, prior authorizations, insurance verification—planned automatically.',
    example: 'Identified: 3 specialist appointments, 2 prescriptions, 1 authorization needed',
  },
  {
    number: '03',
    icon: Zap,
    title: 'BioXverse executes across every system',
    description: 'Contacts providers, submits forms, coordinates schedules, handles insurance. Working autonomously 24/7.',
    example: 'Called 4 clinics, submitted auth, booked appointments, sent to pharmacy',
  },
  {
    number: '04',
    icon: Check,
    title: 'You get a clean summary',
    description: 'What was done. What\'s scheduled. What needs your attention (usually nothing). All care coordinated.',
    example: 'All set. 3 appointments confirmed. Meds ready for pickup tomorrow.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-40 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="inline-flex px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 font-medium mb-8">
            How it works
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-8">
            One request.
            <br />
            Everything
            <br />
            <span className="gradient-accent">handled.</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-500 max-w-2xl">
            From intake to execution, BioXverse acts as your invisible healthcare concierge.
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left: Number and Icon */}
                <div className="lg:col-span-2 flex lg:flex-col items-start gap-6">
                  <div className="text-6xl font-semibold text-gray-800 group-hover:text-blue-500/30 transition-colors">
                    {step.number}
                  </div>
                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                    <step.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-10 space-y-4">
                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl">
                    {step.description}
                  </p>
                  
                  {/* Example */}
                  <div className="mt-6 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
                    <div className="text-xs text-gray-600 uppercase tracking-wider mb-2">
                      Example
                    </div>
                    <div className="text-base text-gray-300 font-mono">
                      {step.example}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[3rem] top-[8rem] lg:top-[12rem] w-px h-24 bg-gradient-to-b from-blue-500/20 to-transparent hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
