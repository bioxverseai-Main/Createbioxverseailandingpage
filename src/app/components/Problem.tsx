import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const problems = [
  {
    text: "Called the clinic. Put on hold for 47 minutes. The portal didn't work. Your appointment request expired.",
    stat: "47min",
    label: "avg hold time"
  },
  {
    text: "Dad discharged with 6 follow-ups, 4 prescriptions, 2 specialist referrals, and a stack of forms. You had 72 hours to coordinate everything.",
    stat: "72hrs",
    label: "to execute"
  },
  {
    text: "Mom's chronic care requires 3 specialists, 2 pharmacies, and 8 monthly appointments. You have a spreadsheet. It shouldn't be this way.",
    stat: "8+",
    label: "monthly tasks"
  },
  {
    text: "Prior authorization denied. Appeal deadline in 5 days. Provider says they submitted it. Insurance says they didn't. You're stuck in the middle.",
    stat: "23%",
    label: "denial rate"
  },
];

export function Problem() {
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
        className="max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6">
            Healthcare wasn't
            <br />
            designed for
            <br />
            <span className="text-gray-600">real life</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-500 max-w-2xl">
            Every task requires you to become a project manager, insurance expert, and full-time advocate.
          </p>
        </motion.div>

        <div className="space-y-20">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Stat */}
                <div className="flex-shrink-0">
                  <div className="text-5xl sm:text-6xl font-semibold text-[#00E5CC]/20 group-hover:text-[#00E5CC]/40 transition-colors">
                    {problem.stat}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {problem.label}
                  </div>
                </div>

                {/* Problem text */}
                <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {problem.text}
                </p>
              </div>

              {/* Subtle line */}
              <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00E5CC]/20 to-transparent hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
