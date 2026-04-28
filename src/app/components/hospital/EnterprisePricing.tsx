import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

export function EnterprisePricing() {
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
            Pilot Structure & Pricing
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6">
            Per-discharge pricing.
            <br />
            <span className="gradient-accent">ROI-positive from day one.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            No seat licenses. No implementation fees. You only pay when we successfully coordinate a discharge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* 90-Day Pilot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.07] hover:border-[#00E5CC]/30 transition-all"
          >
            <div className="mb-6">
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Phase 1</div>
              <h3 className="text-3xl font-semibold text-white mb-2">90-Day Pilot</h3>
              <p className="text-gray-400">Prove the model with your sickest cohort</p>
            </div>

            <div className="mb-8">
              <div className="text-4xl font-semibold text-[#00E5CC] mb-1">$25</div>
              <div className="text-sm text-gray-500">per successfully coordinated discharge</div>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                'CHF, COPD, or high-risk surgical cohort',
                'Up to 50 discharges in pilot',
                'Weekly outcome reporting',
                'Epic/Cerner integration included',
                'Dedicated implementation support',
                'Readmission tracking dashboard'
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-[#00E5CC] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-[#00E5CC]/5 border border-[#00E5CC]/20 rounded-xl">
              <p className="text-xs text-gray-400">
                <span className="text-[#00E5CC] font-semibold">Typical pilot ROI:</span> If we prevent 2 readmissions,
                you've saved more than the entire pilot cost.
              </p>
            </div>
          </motion.div>

          {/* Full Deployment */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 bg-gradient-to-b from-[#00E5CC]/10 to-[#00E5CC]/5 border-2 border-[#00E5CC]/30 rounded-3xl relative"
          >
            <div className="absolute top-0 right-0 px-4 py-1 bg-[#00E5CC] text-black text-xs font-semibold rounded-bl-xl rounded-tr-2xl">
              MOST POPULAR
            </div>

            <div className="mb-6 mt-4">
              <div className="text-sm text-[#00E5CC] uppercase tracking-wider mb-2">Phase 2</div>
              <h3 className="text-3xl font-semibold text-white mb-2">Full Deployment</h3>
              <p className="text-gray-300">All medical/surgical discharges</p>
            </div>

            <div className="mb-8">
              <div className="text-4xl font-semibold text-white mb-1">$15–20</div>
              <div className="text-sm text-gray-400">per discharge (volume-based)</div>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                'All discharge types (medical, surgical, observation)',
                'Unlimited volume',
                'Quarterly outcome reviews',
                'Custom CAHPS integration',
                'Multi-site support (if applicable)',
                'Priority feature requests',
                'Dedicated success manager'
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-200">
                  <Check className="w-5 h-5 text-[#00E5CC] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-black/40 border border-[#00E5CC]/20 rounded-xl">
              <p className="text-xs text-gray-300">
                <span className="text-[#00E5CC] font-semibold">Projected annual ROI:</span> 250-bed hospital
                averages $400K–$800K in HRRP penalty avoidance.
              </p>
            </div>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.07] hover:border-purple-500/30 transition-all"
          >
            <div className="mb-6">
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Enterprise</div>
              <h3 className="text-3xl font-semibold text-white mb-2">Health System</h3>
              <p className="text-gray-400">Multi-site deployment</p>
            </div>

            <div className="mb-8">
              <div className="text-4xl font-semibold text-purple-400 mb-1">Custom</div>
              <div className="text-sm text-gray-500">volume & per-member pricing available</div>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                'All features from Full Deployment',
                'Cross-facility analytics dashboard',
                'API access for custom integrations',
                'White-label patient communications',
                'Service-level agreements (SLA)',
                'Annual strategic planning sessions',
                'Executive readiness reporting'
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:partnerships@bioxverse.ai"
              className="flex items-center justify-center gap-2 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400 hover:bg-purple-500/20 transition-all group"
            >
              <span className="text-sm font-medium">Contact partnerships team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* What's included in all tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 bg-white/5 border border-white/10 rounded-3xl"
        >
          <h4 className="text-xl font-semibold text-white mb-6 text-center">
            Included in all tiers
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'HIPAA-compliant infrastructure',
              'Epic/Cerner integration',
              'Real-time coordination tracking',
              'Patient satisfaction monitoring',
              'Care gap alerts',
              'Quarterly business reviews',
              'FHIR R4 data standards',
              'No hidden implementation fees'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#00E5CC] flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-400">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-base text-gray-500 max-w-3xl mx-auto">
            <span className="text-white font-semibold">Why per-discharge pricing?</span>{' '}
            Because we only get paid when we successfully coordinate a discharge. If the patient doesn't
            have actionable follow-up needs, you don't pay. Our incentives are aligned with yours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
