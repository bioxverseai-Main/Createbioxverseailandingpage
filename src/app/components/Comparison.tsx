import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

const comparisonRows = [
  {
    metric: 'Time per task',
    traditional: '47 minutes',
    bioxverse: '12 seconds',
    traditionalBad: true
  },
  {
    metric: 'Phone hold time',
    traditional: '15–45 min',
    bioxverse: 'Zero',
    traditionalBad: true
  },
  {
    metric: 'Portals to manage',
    traditional: '3+ systems',
    bioxverse: 'One message',
    traditionalBad: true
  },
  {
    metric: 'Post-discharge failure rate',
    traditional: '20–30%',
    bioxverse: 'Near zero',
    traditionalBad: true
  },
  {
    metric: 'Monthly cost',
    traditional: 'Your time',
    bioxverse: '$20/month',
    traditionalBad: false
  }
];

export function Comparison() {
  return (
    <section className="py-40 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6">
            The difference is
            <br />
            <span className="gradient-accent">impossible to ignore</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Side-by-side comparison of traditional healthcare coordination vs. BioXverse.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 p-6 sm:p-8 border-b border-white/10 bg-gradient-to-b from-white/10 to-transparent">
            <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
              Metric
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
                <X className="w-4 h-4 text-red-400" />
                <span className="text-sm font-semibold text-red-400">Traditional</span>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-green-400">BioXverse</span>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/10">
            {comparisonRows.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-3 gap-4 p-6 sm:p-8 hover:bg-white/5 transition-colors"
              >
                {/* Metric */}
                <div className="flex items-center">
                  <span className="text-base sm:text-lg text-white font-medium">
                    {row.metric}
                  </span>
                </div>

                {/* Traditional */}
                <div className="flex items-center justify-center">
                  <span className="text-base sm:text-lg text-gray-400 text-center">
                    {row.traditional}
                  </span>
                </div>

                {/* BioXverse */}
                <div className="flex items-center justify-center">
                  <span className="text-base sm:text-lg font-semibold text-[#00E5CC] text-center">
                    {row.bioxverse}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="p-6 sm:p-8 bg-gradient-to-t from-[#00E5CC]/5 to-transparent border-t border-[#00E5CC]/20 text-center">
            <p className="text-gray-400 mb-4">
              Stop wasting time on healthcare logistics
            </p>
            <motion.button
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#00E5CC] text-white rounded-full text-base font-medium hover:bg-[#00B8A3] transition-all shadow-xl shadow-[#00E5CC]/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Waitlist
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
