import { motion } from 'motion/react';

export function MinimalFooter() {
  return (
    <footer className="py-20 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-light tracking-tight text-white">BioXverse</div>
            <p className="text-sm text-gray-700 font-light leading-relaxed max-w-xs">
              Autonomous AI for healthcare coordination.
              <br />
              Launching Q3 2026.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-800 mb-4">Connect</div>
            <div className="space-y-3">
              <a
                href="mailto:hello@bioxverse.ai"
                className="block text-sm text-gray-600 hover:text-white transition-colors font-light"
              >
                hello@bioxverse.ai
              </a>
              <a
                href="mailto:partnerships@bioxverse.ai"
                className="block text-sm text-gray-600 hover:text-white transition-colors font-light"
              >
                partnerships@bioxverse.ai
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-800 mb-4">Supported by</div>
            <div className="space-y-2 text-sm text-gray-700 font-light">
              <div>NSF I-Corps</div>
              <div>George Mason University</div>
              <div>ICAP/SBDC</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-800 font-light">
              © 2026 BioXverse, Inc.
            </div>
            <div className="flex gap-8 text-sm text-gray-700 font-light">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-800 font-light italic max-w-2xl mx-auto">
            For anyone tired of spending hours navigating healthcare systems.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
