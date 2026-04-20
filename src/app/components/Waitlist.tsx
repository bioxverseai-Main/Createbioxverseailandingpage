import { motion } from 'motion/react';
import { useState } from 'react';
import { Check, Shield, Lock, Database } from 'lucide-react';

export function Waitlist() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('patient');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      setName('');
      setRole('patient');
    }, 5000);
  };

  return (
    <section id="waitlist" className="py-40 px-6 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <div className="inline-flex px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 font-medium">
              Limited Early Access
            </div>

            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[0.9]">
              <span className="text-white">Stop managing</span>
              <br />
              <span className="gradient-accent">your health</span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto">
              Join the waitlist to be among the first to experience healthcare without the friction.
            </p>

            {/* Early adopter benefit */}
            <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 font-medium">Early access users get Premium free for 6 months</span>
            </div>
          </div>

          {!submitted ? (
            <motion.form 
              onSubmit={handleSubmit} 
              className="max-w-xl mx-auto space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all text-lg"
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all text-lg"
              />

              {/* Trust badges near input */}
              <div className="flex flex-wrap items-center justify-center gap-4 py-2 text-xs text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>HIPAA Compliant</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  <span>AES-256 Encrypted</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  <span>Never Sold</span>
                </div>
              </div>

              {/* Role selector */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole('patient')}
                  className={`px-6 py-4 rounded-2xl border transition-all ${
                    role === 'patient'
                      ? 'bg-blue-500/20 border-blue-500/50 text-white'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                  }`}
                >
                  For me/my family
                </button>
                <button
                  type="button"
                  onClick={() => setRole('provider')}
                  className={`px-6 py-4 rounded-2xl border transition-all ${
                    role === 'provider'
                      ? 'bg-blue-500/20 border-blue-500/50 text-white'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                  }`}
                >
                  I'm a provider
                </button>
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-5 bg-white text-black rounded-2xl text-lg font-medium hover:bg-white/90 transition-all shadow-2xl shadow-white/10"
                whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(255, 255, 255, 0.25)' }}
                whileTap={{ scale: 0.98 }}
              >
                Join the Waitlist
              </motion.button>

              <p className="text-sm text-gray-600 pt-4">
                We're onboarding users in batches. Early access starts in Q2 2026.
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto p-12 bg-blue-500/10 border border-blue-500/20 rounded-3xl"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-blue-500/20 rounded-full">
                  <Check className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              <div className="text-3xl font-semibold text-white mb-3">
                You're on the list
              </div>
              <div className="text-lg text-gray-400">
                We'll email you when it's your turn. Thank you for trusting us with your healthcare journey.
              </div>
            </motion.div>
          )}

          {/* Bottom links */}
          <div className="pt-12 border-t border-white/10 mt-20">
            <p className="text-gray-500 text-base mb-6">
              For clinics, health systems, and enterprise partnerships
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:partnerships@bioxverse.ai"
                className="text-white hover:text-blue-400 transition-colors underline text-lg"
              >
                partnerships@bioxverse.ai
              </a>
              <span className="text-gray-700 hidden sm:block">•</span>
              <a
                href="mailto:hello@bioxverse.ai"
                className="text-white hover:text-blue-400 transition-colors underline text-lg"
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