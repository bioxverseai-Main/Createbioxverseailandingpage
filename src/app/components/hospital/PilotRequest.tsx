import { motion } from 'motion/react';
import { useState } from 'react';
import { Check, Shield, Lock, Database, Calendar } from 'lucide-react';

export function PilotRequest() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    hospital: '',
    beds: '',
    email: '',
    phone: '',
    timeline: 'q2-2026'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        title: '',
        hospital: '',
        beds: '',
        email: '',
        phone: '',
        timeline: 'q2-2026'
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="pilot-request" className="py-40 px-6 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-[#00E5CC]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00E5CC]/10 border border-[#00E5CC]/20 rounded-full text-sm text-[#00E5CC] font-medium">
              <Calendar className="w-4 h-4" />
              90-Day Pilot Program
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.9]">
              <span className="text-white">Ready to reduce</span>
              <br />
              <span className="gradient-accent">readmissions?</span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
              We're launching pilots with 3–5 community hospitals in Q2 2026.
              If you're accountable for HRRP penalties or readmission rates, let's talk.
            </p>
          </div>

          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00E5CC]/50 focus:bg-white/10 transition-all text-base"
                  />
                  <input
                    type="text"
                    name="title"
                    placeholder="Title (e.g., VP of Quality)"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00E5CC]/50 focus:bg-white/10 transition-all text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="hospital"
                    placeholder="Hospital / Health System name"
                    value={formData.hospital}
                    onChange={handleChange}
                    required
                    className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00E5CC]/50 focus:bg-white/10 transition-all text-base"
                  />
                  <select
                    name="beds"
                    value={formData.beds}
                    onChange={handleChange}
                    required
                    className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[#00E5CC]/50 focus:bg-white/10 transition-all text-base"
                  >
                    <option value="" className="bg-black">Bed count</option>
                    <option value="<100" className="bg-black">Under 100 beds</option>
                    <option value="100-200" className="bg-black">100–200 beds</option>
                    <option value="200-350" className="bg-black">200–350 beds</option>
                    <option value="350-500" className="bg-black">350–500 beds</option>
                    <option value="500+" className="bg-black">500+ beds</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Work email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00E5CC]/50 focus:bg-white/10 transition-all text-base"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00E5CC]/50 focus:bg-white/10 transition-all text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-500 mb-3">
                    When are you looking to pilot?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { value: 'q2-2026', label: 'Q2 2026 (Apr–Jun)' },
                      { value: 'q3-2026', label: 'Q3 2026 (Jul–Sep)' },
                      { value: 'exploring', label: 'Just exploring' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, timeline: option.value }))}
                        className={`px-6 py-4 rounded-2xl border transition-all text-sm font-medium ${
                          formData.timeline === option.value
                            ? 'bg-[#00E5CC]/20 border-[#00E5CC]/50 text-white'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 py-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    <span>HIPAA Compliant</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    <span>SOC 2 Type II In Progress</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    <span>No data resale, ever</span>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-5 bg-[#00E5CC] text-black rounded-2xl text-lg font-medium hover:bg-[#00FFD1] transition-all shadow-2xl shadow-[#00E5CC]/30"
                  whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0, 229, 204, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request a Pilot Conversation
                </motion.button>

                <p className="text-sm text-gray-600 text-center pt-2">
                  We'll respond within 1 business day with pilot structure, pricing, and next steps.
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto p-12 bg-[#00E5CC]/10 border border-[#00E5CC]/20 rounded-3xl"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-[#00E5CC]/20 rounded-full">
                  <Check className="w-8 h-8 text-[#00E5CC]" />
                </div>
              </div>
              <div className="text-3xl font-semibold text-white mb-3 text-center">
                Request received
              </div>
              <div className="text-lg text-gray-400 text-center">
                We'll reach out within 1 business day to schedule a 15-minute pilot conversation.
                Check your inbox at <span className="text-white">{formData.email}</span>
              </div>
            </motion.div>
          )}

          {/* Bottom links */}
          <div className="pt-12 border-t border-white/10 mt-16">
            <p className="text-gray-500 text-base mb-6 text-center">
              For enterprise contracts, multi-site deployments, or strategic partnerships
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:partnerships@bioxverse.ai"
                className="text-white hover:text-[#00E5CC] transition-colors underline text-lg"
              >
                partnerships@bioxverse.ai
              </a>
              <span className="text-gray-700 hidden sm:block">•</span>
              <a
                href="mailto:hello@bioxverse.ai"
                className="text-white hover:text-[#00E5CC] transition-colors underline text-lg"
              >
                hello@bioxverse.ai
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
