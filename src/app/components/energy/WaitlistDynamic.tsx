import { motion } from 'motion/react';
import { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export function WaitlistDynamic() {
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
    <section id="waitlist" className="py-40 px-6 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#00E5CC]/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#8B5CF6]/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? '#00E5CC' : '#8B5CF6',
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#00E5CC]/30 rounded-full bg-[#00E5CC]/10 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-[#00E5CC]" />
            <span className="text-sm text-[#00E5CC]">Early Access</span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[0.9]">
            <span className="text-white">Be the first</span>
            <br />
            <span className="bg-gradient-to-r from-[#00E5CC] via-[#8B5CF6] to-[#00E5CC] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              to experience it
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto mb-12">
            Join the waitlist for exclusive early access when we launch{' '}
            <span className="text-white font-semibold">Q3 2026</span>
          </p>

          {/* Form or Success state */}
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              {/* User type selector */}
              <div className="flex gap-3 justify-center mb-6">
                <motion.button
                  type="button"
                  onClick={() => setUserType('patient')}
                  className={`px-6 py-3 rounded-full border transition-all ${
                    userType === 'patient'
                      ? 'bg-gradient-to-r from-[#00E5CC] to-[#8B5CF6] text-white border-transparent shadow-[0_0_30px_rgba(0,229,204,0.3)]'
                      : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  I'm a patient/caregiver
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setUserType('hospital')}
                  className={`px-6 py-3 rounded-full border transition-all ${
                    userType === 'hospital'
                      ? 'bg-gradient-to-r from-[#00E5CC] to-[#8B5CF6] text-white border-transparent shadow-[0_0_30px_rgba(0,229,204,0.3)]'
                      : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  I represent a hospital
                </motion.button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-8 py-5 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00E5CC] focus:shadow-[0_0_30px_rgba(0,229,204,0.2)] transition-all text-center text-lg backdrop-blur-sm"
                  whileFocus={{ scale: 1.02 }}
                />

                <motion.button
                  type="submit"
                  className="group w-full px-8 py-5 bg-gradient-to-r from-[#00E5CC] to-[#8B5CF6] text-white rounded-full text-lg font-semibold flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(0,229,204,0.3)]"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 60px rgba(0,229,204,0.5)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <p className="text-sm text-gray-600 pt-2">
                  No spam. Just updates on launch and early access.
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto p-12 border border-[#00E5CC]/30 rounded-3xl bg-gradient-to-br from-[#00E5CC]/10 to-[#8B5CF6]/10 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Success animation */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 1 }}
                style={{
                  background: 'radial-gradient(circle, rgba(0,229,204,0.3) 0%, transparent 70%)',
                }}
              />

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="flex items-center justify-center mb-4"
              >
                <div className="p-4 bg-[#00E5CC] rounded-full">
                  <Check className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <h3 className="text-3xl font-bold text-white mb-2">
                You're on the list!
              </h3>
              <p className="text-gray-400">
                We'll email you when early access opens
              </p>
            </motion.div>
          )}

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <p className="text-gray-400 leading-relaxed">
              Currently in development. Expected launch Q3 2026.
              <br />
              <span className="text-gray-500">
                Built with support from NSF I-Corps and George Mason University.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-gradient {
          animation: gradient 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
