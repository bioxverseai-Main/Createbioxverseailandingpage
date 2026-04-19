import { motion } from 'motion/react';
import { Hospital, ShieldCheck, Calendar, Pill, Users, Network } from 'lucide-react';

const features = [
  {
    icon: Hospital,
    title: 'Post-Discharge Coordinator',
    description: 'The 72 hours after hospital discharge are chaos. BioXverse handles every follow-up appointment, medication, and specialist referral before you get home.',
  },
  {
    icon: ShieldCheck,
    title: 'Insurance Autopilot',
    description: 'Prior authorizations, benefit verifications, claims follow-ups. Your care never gets delayed by paperwork you shouldn\'t have to manage.',
  },
  {
    icon: Calendar,
    title: 'Autonomous Scheduling',
    description: 'Books, reschedules, and confirms appointments across multiple providers and specialties. Coordinates timing. No phone trees.',
  },
  {
    icon: Pill,
    title: 'Prescription Coordination',
    description: 'Refill requests, pharmacy routing, medication reconciliation, and delivery coordination. Handled before you run out.',
  },
  {
    icon: Users,
    title: 'Family Care Dashboard',
    description: 'Managing care for aging parents or chronic conditions? See everything—appointments, medications, providers—in one unified view.',
  },
  {
    icon: Network,
    title: 'Works With Your Providers',
    description: 'Integrates with existing clinic portals, EHR systems, and insurance networks. No switching providers required.',
  },
];

export function Features() {
  return (
    <section className="py-40 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-4xl"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-8">
            Everything healthcare
            <br />
            makes hard—
            <br />
            <span className="gradient-accent">automated</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-500">
            BioXverse eliminates friction at every point in your healthcare journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-[#00E5CC]/30 transition-all duration-300 cursor-default"
            >
              <div className="mb-6 p-3 bg-[#00E5CC]/10 border border-[#00E5CC]/20 rounded-2xl w-fit group-hover:bg-[#00E5CC]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#00E5CC]" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-[#00E5CC] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="text-lg text-gray-500 mb-6">
            And we're just getting started.
          </p>
          <motion.button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#00E5CC] text-white rounded-full text-base font-medium hover:bg-[#00B8A3] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Early Access
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
