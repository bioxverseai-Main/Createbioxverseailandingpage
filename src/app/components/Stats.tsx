import { motion } from 'motion/react';

const stats = [
  {
    value: '3–7 days',
    label: 'of post-discharge coordination',
    sublabel: 'handled in under 2 hours',
  },
  {
    value: '6.4',
    label: 'manual steps eliminated',
    sublabel: 'per care episode',
  },
  {
    value: '53M',
    label: 'Americans providing unpaid care',
    sublabel: 'for family members',
  },
  {
    value: '0',
    label: 'phone calls required',
    sublabel: 'from you',
  },
];

export function Stats() {
  return (
    <section className="py-40 px-6 bg-gradient-to-b from-black via-blue-950/5 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            The numbers tell the story
          </h2>
          <p className="text-xl text-gray-500">
            Healthcare administration wastes time, money, and peace of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div 
                className="text-6xl sm:text-7xl font-semibold mb-4 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-lg text-gray-400 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 max-w-4xl mx-auto"
        >
          <div className="p-12 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
            <div className="text-3xl sm:text-4xl text-gray-300 leading-relaxed mb-6">
              "Managing three specialists and monthly appointments was a full-time job. 
              Now I just message BioXverse and everything is handled. I haven't called a clinic in 6 months."
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                AR
              </div>
              <div>
                <div className="text-white font-medium">Alex Rodriguez</div>
                <div className="text-sm text-gray-500">Type 2 Diabetes Patient</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}