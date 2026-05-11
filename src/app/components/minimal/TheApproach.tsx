import { motion } from 'motion/react';

const capabilities = [
  {
    number: "01",
    title: "Appointment scheduling",
    description: "Books, reschedules, and confirms appointments across providers. Finds available slots. Coordinates timing.",
    status: "In development"
  },
  {
    number: "02",
    title: "Insurance navigation",
    description: "Submits prior authorizations. Verifies coverage. Tracks claims. Handles denials and appeals.",
    status: "In development"
  },
  {
    number: "03",
    title: "Prescription management",
    description: "Routes refills to pharmacies. Coordinates delivery. Manages medication reconciliation.",
    status: "In development"
  },
  {
    number: "04",
    title: "Care coordination",
    description: "Manages post-discharge follow-ups. Coordinates between specialists. Ensures nothing falls through.",
    status: "In development"
  }
];

export function TheApproach() {
  return (
    <section className="py-40 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-32"
        >
          <div className="text-xs uppercase tracking-widest text-gray-700 mb-6">How it works</div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-[-0.03em] leading-[0.9] text-white">
            Autonomous AI
            <br />
            <span className="text-gray-700">for every task</span>
          </h2>
        </motion.div>

        <div className="space-y-px">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-10 sm:p-12 border border-white/5 hover:border-white/10 hover:bg-white/[0.01] transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Number */}
                  <div className="lg:col-span-2">
                    <div className="text-7xl font-light text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                      {item.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8 space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-light text-white">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="lg:col-span-2 flex justify-start lg:justify-end">
                    <div className="px-4 py-2 border border-white/10 rounded-full text-xs text-gray-700 whitespace-nowrap">
                      {item.status}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
