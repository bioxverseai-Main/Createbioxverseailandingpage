import { motion } from 'motion/react';
import { Clock, Heart } from 'lucide-react';

const useCases = [
  {
    icon: Clock,
    name: "Sarah",
    role: "Caring for her father post-surgery",
    challenge: "The 72-Hour Crisis",
    story: "Dad was discharged from the hospital on a Friday afternoon with a stack of papers: 4 prescriptions to fill, 3 specialist follow-ups to schedule, wound care instructions, and a prior authorization for home health that needed to be submitted by Monday.",
    traditionalOutcome: "47 minutes on hold with the cardiologist's office. Insurance portal crashed twice. Pharmacy said one prescription needed clarification from the doctor. By Sunday night, only 1 appointment was booked, and the prior auth still wasn't submitted.",
    bioxverseOutcome: "Sarah messaged BioXverse from the hospital parking lot. By the time she got her father home, all 3 appointments were confirmed, prescriptions were ready for pickup, and the prior authorization was submitted. Total time spent: one 90-second message.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    name: "Alex",
    role: "Managing Type 2 Diabetes",
    challenge: "The Monthly Coordination Burden",
    story: "Alex sees an endocrinologist, a cardiologist, and a nutritionist. Every month requires coordinating 3 appointments around work, refilling 4 prescriptions across 2 pharmacies, and making sure lab work gets ordered before the endo visit.",
    traditionalOutcome: "8+ tasks per month. Missed a refill once and went 3 days without meds. Had to reschedule the cardiologist twice because the scheduler only picked up during work hours. Lab orders got lost and the endo visit had to be postponed.",
    bioxverseOutcome: "Alex told BioXverse once about his recurring care needs. Now appointments auto-schedule around his work calendar, prescriptions refill automatically with pharmacy coordination, and labs get ordered 2 weeks before each endo visit. He hasn't called a clinic in 6 months.",
    gradient: "from-purple-500 to-pink-500"
  }
];

export function UseCases() {
  return (
    <section className="py-40 px-6 bg-gradient-to-b from-black via-blue-950/5 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 font-medium mb-8">
            Real People, Real Results
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6">
            This is what
            <br />
            <span className="gradient-accent">handled</span> looks like
          </h2>
        </motion.div>

        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="p-10 sm:p-12 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl hover:bg-white/10 transition-all">
                {/* Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className={`p-4 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex-shrink-0`}>
                    <useCase.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
                      Meet {useCase.name}
                    </h3>
                    <p className="text-lg text-gray-400">{useCase.role}</p>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-8">
                  <div className="text-sm text-blue-400 font-semibold uppercase tracking-wider mb-3">
                    {useCase.challenge}
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {useCase.story}
                  </p>
                </div>

                {/* Before/After Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Traditional */}
                  <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                        Traditional Healthcare
                      </div>
                    </div>
                    <p className="text-base text-gray-400 leading-relaxed">
                      {useCase.traditionalOutcome}
                    </p>
                  </div>

                  {/* BioXverse */}
                  <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-2xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="text-sm font-semibold text-green-400 uppercase tracking-wider">
                        With BioXverse
                      </div>
                    </div>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {useCase.bioxverseOutcome}
                    </p>
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
