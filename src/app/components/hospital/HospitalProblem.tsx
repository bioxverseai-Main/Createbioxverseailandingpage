import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { DollarSign, Users, Clock, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: DollarSign,
    stat: "$2.6M",
    label: "avg annual HRRP penalty",
    text: "Every preventable readmission you miss costs you. One missed follow-up appointment becomes a 30-day readmission. That readmission becomes an HRRP penalty. Your discharge coordinators can't scale.",
    impact: "200–500 bed hospitals face $1.5–$3M in annual penalties"
  },
  {
    icon: Clock,
    stat: "47min",
    label: "per discharge call",
    text: "Your nursing staff spends hours on hold scheduling follow-ups, chasing prior auths, and coordinating specialist referrals. That's not clinical work. That's administrative friction draining your highest-cost labor.",
    impact: "Average 6.4 manual coordination steps per discharge"
  },
  {
    icon: AlertTriangle,
    stat: "23%",
    label: "post-discharge failure rate",
    text: "Patient discharged Friday afternoon with 4 follow-ups needed by Monday. One specialist's scheduler is out. Insurance portal times out. Prescription needs clarification from the attending who's already gone home. By Monday, nothing's booked.",
    impact: "Care gaps compound into readmissions you're accountable for"
  },
  {
    icon: Users,
    stat: "3-5 FTE",
    label: "discharge coordinators",
    text: "You need dedicated staff just to manage the post-discharge window. They're making phone calls, navigating portals, tracking down orders. It's reactive, manual, and doesn't scale when census spikes.",
    impact: "High-value clinical staff doing administrative work"
  }
];

export function HospitalProblem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section ref={containerRef} className="py-40 px-6 bg-black relative">
      <motion.div
        style={{ opacity, scale }}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="inline-flex px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-sm text-red-400 font-medium mb-8">
            The P&L Impact
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6">
            Every discharge
            <br />
            is a
            <br />
            <span className="text-gray-600">readmission risk</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-500 max-w-3xl">
            Post-discharge coordination is broken. Your staff is overwhelmed. Your patients fall through the cracks.
            And you pay the HRRP penalty.
          </p>
        </motion.div>

        <div className="space-y-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-8 sm:p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.07] hover:border-[#00E5CC]/20 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Icon + Stat */}
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-[#00E5CC]/10 border border-[#00E5CC]/20 rounded-2xl w-fit mb-4">
                      <problem.icon className="w-7 h-7 text-[#00E5CC]" />
                    </div>
                    <div className="text-5xl sm:text-6xl font-semibold text-[#00E5CC]/40 group-hover:text-[#00E5CC]/60 transition-colors">
                      {problem.stat}
                    </div>
                    <div className="text-sm text-gray-600 mt-2 font-medium">
                      {problem.label}
                    </div>
                  </div>

                  {/* Problem text */}
                  <div className="flex-1 space-y-4">
                    <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      {problem.text}
                    </p>
                    <div className="p-4 bg-black/40 border border-white/5 rounded-xl">
                      <div className="text-sm text-[#00E5CC] font-medium">
                        → {problem.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 p-10 bg-gradient-to-b from-red-500/10 to-transparent border border-red-500/20 rounded-3xl text-center"
        >
          <p className="text-2xl sm:text-3xl text-gray-300 leading-relaxed mb-4">
            You can't fix this by hiring more discharge coordinators.
          </p>
          <p className="text-lg text-gray-500">
            The problem is systemic. The solution needs to be autonomous.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
