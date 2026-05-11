import { motion } from 'motion/react';

const timeWasted = [
  {
    task: "Scheduling appointments",
    time: "47 min",
    subtitle: "average hold time"
  },
  {
    task: "Insurance prior auth",
    time: "3-7 days",
    subtitle: "processing delays"
  },
  {
    task: "Prescription refills",
    time: "6 calls",
    subtitle: "per medication"
  },
  {
    task: "Post-discharge coordination",
    time: "72 hrs",
    subtitle: "critical window"
  }
];

export function TheProblem() {
  return (
    <section className="py-40 px-6 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] leading-[0.9] text-white mb-8">
            Healthcare runs on
            <br />
            <span className="text-gray-700">phone calls</span>
          </h2>
          <p className="text-2xl text-gray-600 font-light max-w-2xl mx-auto">
            Every task requires hours of waiting, navigating systems, and repeating information
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeWasted.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 border border-white/5 rounded-2xl hover:border-white/10 transition-all duration-500 h-full">
                <div className="space-y-6">
                  <div className="text-6xl font-light text-[#00E5CC]/40 group-hover:text-[#00E5CC]/60 transition-colors duration-500 tabular-nums">
                    {item.time}
                  </div>
                  <div>
                    <div className="text-lg text-white font-light mb-1">
                      {item.task}
                    </div>
                    <div className="text-sm text-gray-700">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-32 text-center"
        >
          <p className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-600 leading-relaxed max-w-4xl mx-auto">
            This isn't normal.
            <br />
            <span className="text-white">It's just accepted.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
