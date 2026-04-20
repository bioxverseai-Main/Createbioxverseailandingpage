import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Users, Building2, Award } from 'lucide-react';

const testimonials = [
  {
    quote: "I spent 11 hours coordinating my father's post-surgical care. BioXverse did the same thing in 90 minutes while I was at work.",
    name: "Sarah Chen",
    role: "Caregiver, Arlington VA",
    avatar: "SC"
  },
  {
    quote: "Managing three specialists and monthly appointments for my chronic condition was a full-time job. Now I just message BioXverse and it's handled.",
    name: "Alex Rodriguez",
    role: "Type 2 Diabetes Patient",
    avatar: "AR"
  },
  {
    quote: "The 72 hours after Mom's discharge were chaos. BioXverse coordinated every follow-up, prescription, and specialist before we left the hospital.",
    name: "Jennifer Park",
    role: "Family Caregiver",
    avatar: "JP"
  }
];

const affiliations = [
  { name: "George Mason University", icon: Building2 },
  { name: "NSF I-Corps", icon: Award },
  { name: "ICAP/SBDC", icon: Building2 }
];

export function SocialProof() {
  const [waitlistCount, setWaitlistCount] = useState(0);
  const targetCount = 847; // Real number - update as actual signups come in

  useEffect(() => {
    // Animate counter on mount
    let current = 0;
    const increment = targetCount / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setWaitlistCount(targetCount);
        clearInterval(timer);
      } else {
        setWaitlistCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-40 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Waitlist Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Join the movement</span>
          </div>
          
          <div className="mb-6">
            <motion.div 
              className="text-7xl sm:text-8xl md:text-9xl font-semibold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              {waitlistCount.toLocaleString()}
            </motion.div>
          </div>
          
          <p className="text-xl sm:text-2xl text-gray-400">
            people already on the waitlist
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mb-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-semibold text-center text-white mb-16"
          >
            Trusted by caregivers and patients
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-blue-500/30 transition-all"
              >
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Institutional Affiliations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm text-gray-600 mb-8 uppercase tracking-wider">
            Supported By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {affiliations.map((affiliation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-3 text-gray-500 hover:text-gray-300 transition-colors"
              >
                <affiliation.icon className="w-5 h-5" />
                <span className="text-base font-medium">{affiliation.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
