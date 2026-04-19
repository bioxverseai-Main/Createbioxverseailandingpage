import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-2xl font-semibold tracking-tight">BioXverse</div>
            <p className="text-gray-500 max-w-md leading-relaxed">
              The first self-driving health OS. Your healthcare journey, fully automated.
            </p>
          </div>

          {/* Product */}
          <div>
            <div className="text-sm font-semibold text-white mb-4">Product</div>
            <div className="space-y-3">
              <a href="#how-it-works" className="block text-sm text-gray-500 hover:text-white transition-colors">
                How it works
              </a>
              <a href="#waitlist" className="block text-sm text-gray-500 hover:text-white transition-colors">
                Waitlist
              </a>
              <a href="mailto:partnerships@bioxverse.ai" className="block text-sm text-gray-500 hover:text-white transition-colors">
                For Providers
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-sm font-semibold text-white mb-4">Company</div>
            <div className="space-y-3">
              <a href="mailto:hello@bioxverse.ai" className="block text-sm text-gray-500 hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="block text-sm text-gray-500 hover:text-white transition-colors">
                Security & Privacy
              </a>
              <a href="#" className="block text-sm text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} BioXverse, Inc. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="text-gray-600">SOC 2 Type II</div>
          </div>
        </div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-700 italic max-w-2xl mx-auto">
            Built for anyone who's ever spent hours on hold, navigating insurance portals, 
            or coordinating care for a loved one. Healthcare should work for you.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}