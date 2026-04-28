import { motion } from 'motion/react';
import { TrendingDown, Users, Clock, Shield } from 'lucide-react';

const useCases = [
  {
    icon: TrendingDown,
    scenario: "Post-Surgical CHF Discharge",
    hospital: "Community Hospital, Cardiology Unit",
    challenge: "High-Risk Readmission Window",
    problem: "72-year-old patient discharged Friday afternoon post-heart failure exacerbation. Needs cardiology follow-up within 7 days, medication reconciliation, weight monitoring setup, and dietary consult. Discharge coordinator has 15 other patients that day.",
    withoutBioxverse: {
      label: "Traditional Process",
      outcome: "Coordinator spends 47 minutes calling cardiology (20min hold time). Leaves voicemail at DME company for scale. Sends patient home with paper instructions to 'call your cardiologist Monday.' Patient readmitted day 9 with fluid overload. HRRP penalty triggered.",
      metrics: ["47min staff time", "9-day readmission", "HRRP penalty exposure"]
    },
    withBioxverse: {
      label: "With BioXverse",
      outcome: "Discharge coordinator enters care plan in Epic. BioXverse executes: cardiology appointment booked for day 5, DME scale delivered day 2, dietary consult scheduled same week, medication auto-refills coordinated. Patient receives text confirmations. Readmission avoided.",
      metrics: ["2min staff time", "Zero readmission", "HRRP penalty avoided"]
    },
    gradient: "from-[#00E5CC] to-[#00FFD1]"
  },
  {
    icon: Shield,
    scenario: "Weekend Orthopedic Discharge",
    hospital: "Regional Medical Center, Ortho Floor",
    challenge: "Limited Weekend Staffing",
    problem: "Total knee replacement patient ready for discharge Saturday morning. Needs PT follow-up, pain management consult, wound check in 10 days, and prior auth for outpatient PT sessions. Weekend discharge coordinator covering 3 floors.",
    withoutBioxverse: {
      label: "Traditional Process",
      outcome: "Coordinator leaves notes for Monday team. Patient sent home with phone numbers. Monday: PT scheduler backed up, prior auth request sits in queue, patient calls frustrated on Tuesday. Wound check delayed to day 14. Satisfaction scores impacted.",
      metrics: ["Tasks delayed 48-72hrs", "Low CAHPS score", "Care coordination failure"]
    },
    withBioxverse: {
      label: "With BioXverse",
      outcome: "BioXverse executes Saturday: PT appointments booked, prior auth submitted (approved Monday morning), wound check scheduled day 10, pain management follow-up confirmed. Patient receives full care plan via text before leaving hospital. CAHPS: 'definitely would recommend.'",
      metrics: ["Real-time execution", "High CAHPS score", "100% task completion"]
    },
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Users,
    scenario: "Complex Multi-Specialty Discharge",
    hospital: "Academic Medical Center, Medicine Service",
    challenge: "Coordination Across 4 Specialists",
    problem: "Diabetic patient with new dialysis access, post-CVA, needs: nephrology for dialysis training, neurology stroke follow-up, endocrinology for insulin adjustment, vascular surgery for graft check. 8 total appointments needed within 30 days.",
    withoutBioxverse: {
      label: "Traditional Process",
      outcome: "Discharge coordinator attempts to schedule. Nephrology portal requires separate login. Neurology scheduler only answers Tuesday/Thursday. Vascular surgery books 6 weeks out. Patient discharged with 2 of 8 appointments booked. Readmitted day 18 with missed dialysis sessions.",
      metrics: ["2 of 8 appointments booked", "18-day readmission", "3.2 FTE hours wasted"]
    },
    withBioxverse: {
      label: "With BioXverse",
      outcome: "BioXverse coordinates across all 4 specialties simultaneously. All 8 appointments scheduled within optimal windows. Dialysis training set for day 3. All specialists receive discharge summary via Direct Protocol. Patient receives unified calendar. No readmission.",
      metrics: ["8 of 8 appointments confirmed", "Zero readmission", "12min staff time"]
    },
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Clock,
    scenario: "High-Volume Discharge Day",
    hospital: "Community Hospital, Medical/Surgical Floor",
    challenge: "Census Surge + Staffing Constraints",
    problem: "23 discharges scheduled on a Monday after weekend admits. 2 discharge coordinators on duty (1 called out sick). Each discharge requires average 5.7 coordination tasks. Backlog building by 10am.",
    withoutBioxverse: {
      label: "Traditional Process",
      outcome: "Coordinator triages: focuses on complex cases, gives simple discharges paper instructions. 14 of 23 patients sent home with incomplete follow-up coordination. 3 readmitted within 15 days. Nursing supervisor fields 17 patient calls that week asking about appointments.",
      metrics: ["14 incomplete discharges", "3 preventable readmissions", "Overwhelmed staff"]
    },
    withBioxverse: {
      label: "With BioXverse",
      outcome: "Coordinators enter care plans for all 23 patients. BioXverse executes in parallel: all follow-ups scheduled, all prescriptions routed, all authorizations submitted. Zero backlog. Coordinators spend time on clinical education instead of phone calls. Zero readmissions from that cohort.",
      metrics: ["23 complete discharges", "Zero readmissions", "Staff capacity recovered"]
    },
    gradient: "from-orange-500 to-red-500"
  }
];

export function HospitalUseCases() {
  return (
    <section className="py-40 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 font-medium mb-8">
            Real Scenarios, Measurable Impact
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6">
            This is what
            <br />
            <span className="gradient-accent">prevented readmissions</span> look like
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Four common discharge scenarios where BioXverse closes the care gap your staff can't scale to reach.
          </p>
        </motion.div>

        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div className="p-8 sm:p-10 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl hover:bg-white/[0.07] transition-all">
                {/* Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className={`p-4 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex-shrink-0`}>
                    <useCase.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-[#00E5CC] font-semibold uppercase tracking-wider mb-2">
                      {useCase.challenge}
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
                      {useCase.scenario}
                    </h3>
                    <p className="text-base text-gray-500">{useCase.hospital}</p>
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-8 p-6 bg-black/40 border border-white/5 rounded-2xl">
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-semibold">
                    The Scenario
                  </div>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {useCase.problem}
                  </p>
                </div>

                {/* Before/After Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Without BioXverse */}
                  <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                        {useCase.withoutBioxverse.label}
                      </div>
                    </div>
                    <p className="text-base text-gray-400 leading-relaxed mb-4">
                      {useCase.withoutBioxverse.outcome}
                    </p>
                    <div className="space-y-2">
                      {useCase.withoutBioxverse.metrics.map((metric, i) => (
                        <div key={i} className="text-xs text-red-400 font-mono">
                          ✗ {metric}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* With BioXverse */}
                  <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-2xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="text-sm font-semibold text-green-400 uppercase tracking-wider">
                        {useCase.withBioxverse.label}
                      </div>
                    </div>
                    <p className="text-base text-gray-300 leading-relaxed mb-4">
                      {useCase.withBioxverse.outcome}
                    </p>
                    <div className="space-y-2">
                      {useCase.withBioxverse.metrics.map((metric, i) => (
                        <div key={i} className="text-xs text-green-400 font-mono">
                          ✓ {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-gray-400 mb-6">
            These scenarios happen in your hospital every day. BioXverse prevents the ones that become readmissions.
          </p>
          <motion.button
            onClick={() => document.getElementById('pilot-request')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-[#00E5CC] text-black rounded-full text-lg font-medium hover:bg-[#00FFD1] transition-all shadow-2xl shadow-[#00E5CC]/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Pilot Conversation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
