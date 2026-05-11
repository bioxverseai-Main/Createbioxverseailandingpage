import { motion } from 'motion/react';
import { useState } from 'react';
import { Check } from 'lucide-react';

export function EarlyAccess() {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<'patient' | 'hospital'>('patient');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 5000);
  };

  return (
    <section id="early-access" className="py-40 px-6 bg-gradient-to-b from-black via-[#00E5CC]/[0.02] to-black relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[1000px] h-[1000px] bg-[#00E5CC]/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-widest text-gray-700">
              Early Access
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] leading-[0.9] text-white">
              Be the first
              <br />
              <span className="gradient-accent font-normal">to experience it</span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
              Join the waitlist for exclusive early access when we launch Q3 2026
            </p>
          </div>

          {/* Form */}
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto space-y-6"
            >
              {/* User type selector */}
              <div className="flex gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => setUserType('patient')}
                  className={`px-6 py-3 rounded-full border transition-all text-sm font-light ${
                    userType === 'patient'
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-gray-600 border-white/10 hover:border-white/20'
                  }`}
                >
                  I'm a patient/caregiver
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('hospital')}
                  className={`px-6 py-3 rounded-full border transition-all text-sm font-light ${
                    userType === 'hospital'
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-gray-600 border-white/10 hover:border-white/20'
                  }`}
                >
                  I represent a hospital
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-gray-700 focus:outline-none focus:border-white/30 transition-all text-center text-lg font-light"
                />

                <motion.button
                  type="submit"
                  className="w-full px-8 py-5 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-100 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Waitlist
                </motion.button>

                <p className="text-sm text-gray-700 pt-2">
                  No spam. Just updates on launch and early access.
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto p-12 border border-white/10 rounded-3xl"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-[#00E5CC]/20 rounded-full">
                  <Check className="w-6 h-6 text-[#00E5CC]" />
                </div>
              </div>
              <div className="text-2xl font-light text-white mb-2">
                You're on the list
              </div>
              <div className="text-base text-gray-600 font-light">
                We'll email you when early access opens
              </div>
            </motion.div>
          )}

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-16 max-w-2xl mx-auto"
          >
            <p className="text-base text-gray-700 font-light leading-relaxed">
              Currently in development. Expected launch Q3 2026.
              <br />
              <span className="text-gray-600">Built with support from NSF I-Corps and George Mason University.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
