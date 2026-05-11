import { motion } from 'motion/react';
import { Mail, Building2, Sparkles } from 'lucide-react';

export function FooterBold() {
  return (
    <footer className="py-20 px-6 bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00E5CC]/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00E5CC] to-[#8B5CF6] bg-clip-text text-transparent">
                  BioXverse
                </div>
                <Sparkles className="w-5 h-5 text-[#00E5CC]" />
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                Autonomous AI for healthcare coordination.
                <br />
                <span className="text-white">Launching Q3 2026.</span>
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00E5CC]/30 rounded-full bg-[#00E5CC]/10">
                <div className="w-2 h-2 rounded-full bg-[#00E5CC] animate-pulse" />
                <span className="text-sm text-[#00E5CC]">In Development</span>
              </div>
            </motion.div>
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-4 h-4 text-[#00E5CC]" />
              <div className="text-sm font-semibold text-white uppercase tracking-wider">
                Connect
              </div>
            </div>
            <div className="space-y-3">
              <a
                href="mailto:hello@bioxverse.ai"
                className="block text-gray-400 hover:text-[#00E5CC] transition-colors"
              >
                hello@bioxverse.ai
              </a>
              <a
                href="mailto:partnerships@bioxverse.ai"
                className="block text-gray-400 hover:text-[#8B5CF6] transition-colors"
              >
                partnerships@bioxverse.ai
              </a>
            </div>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-4 h-4 text-[#8B5CF6]" />
              <div className="text-sm font-semibold text-white uppercase tracking-wider">
                Supported by
              </div>
            </div>
            <div className="space-y-2 text-gray-400">
              <div>NSF I-Corps</div>
              <div>George Mason University</div>
              <div>ICAP/SBDC</div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mb-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-500"
          >
            © 2026 BioXverse, Inc.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-8 text-gray-400"
          >
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 italic">
            For anyone tired of spending hours navigating healthcare systems.
          </p>
        </motion.div>

        {/* Decorative gradient line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 h-1 bg-gradient-to-r from-[#00E5CC] via-[#8B5CF6] to-[#00E5CC] rounded-full origin-center"
        />
      </div>
    </footer>
  );
}
