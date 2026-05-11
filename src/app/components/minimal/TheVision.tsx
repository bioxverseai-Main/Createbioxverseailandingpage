import { motion } from 'motion/react';

export function TheVision() {
  return (
    <section className="py-40 px-6 bg-gradient-to-b from-black via-[#00E5CC]/[0.02] to-black relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-[#00E5CC]/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-16"
        >
          <div className="space-y-8">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] leading-[0.9] text-white">
              Imagine healthcare
              <br />
              <span className="gradient-accent font-normal">that just works</span>
            </h2>

            <p className="text-2xl sm:text-3xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
              No hold times. No repeated information. No navigating insurance portals.
              <br />
              <span className="text-white">Just one message, and everything is handled.</span>
            </p>
          </div>

          {/* The vision grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            {[
              {
                title: "One interface",
                description: "Message BioXverse like you'd text a friend"
              },
              {
                title: "Zero friction",
                description: "AI handles appointments, insurance, and prescriptions"
              },
              {
                title: "Complete autonomy",
                description: "Works 24/7 across all healthcare systems"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="space-y-4"
              >
                <div className="text-xl font-light text-white">{item.title}</div>
                <div className="text-base text-gray-600 font-light leading-relaxed">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* The promise */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-24 max-w-3xl mx-auto"
          >
            <div className="p-12 border border-white/5 rounded-3xl">
              <p className="text-2xl sm:text-3xl font-light text-gray-500 leading-relaxed">
                We're building the invisible layer
                <br />
                <span className="text-white">between you and healthcare complexity</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
