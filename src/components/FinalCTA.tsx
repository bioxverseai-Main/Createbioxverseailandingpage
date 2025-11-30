import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Mail } from 'lucide-react';

export function FinalCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-32 px-8 bg-gradient-to-br from-[#0A1530] via-[#1a2850] to-[#0A1530] relative overflow-hidden" ref={ref}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #01C3B3 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#01C3B3]/20 rounded-full mb-8">
            <div className="w-2 h-2 bg-[#01C3B3] rounded-full animate-pulse"></div>
            <span className="text-white text-sm">Limited Early Access Spots</span>
          </div>
          
          <h2 className="text-white mb-6 text-5xl">
            Join the health intelligence revolution
          </h2>
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Be among the first to experience the platform that will power global healthcare. Early access members help shape the future of BioXverse.ai.
          </p>
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full sm:w-96">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full pl-14 pr-5 py-5 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#01C3B3] backdrop-blur-sm text-lg"
            />
          </div>
          <button className="w-full sm:w-auto px-10 py-5 bg-[#01C3B3] text-white rounded-xl hover:bg-[#00a89a] transition-all flex items-center justify-center gap-2 group text-lg">
            Get Early Access
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
        
        <motion.div
          className="flex flex-wrap justify-center gap-8 text-sm text-gray-300 mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#01C3B3] rounded-full"></div>
            <span>Free during beta phase</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#01C3B3] rounded-full"></div>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#01C3B3] rounded-full"></div>
            <span>Shape the future with us</span>
          </div>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl text-white mb-2">Users</div>
            <div className="text-sm text-gray-300">Join our growing community</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl text-white mb-2">Developers</div>
            <div className="text-sm text-gray-300">Build on our platform</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl text-white mb-2">Healthcare Orgs</div>
            <div className="text-sm text-gray-300">Partner with us</div>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-2xl text-white tracking-tight">
              Bio<span className="text-[#01C3B3]">X</span>verse
            </span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>
          <div>
            © 2025 BioXverse.ai
          </div>
        </div>
      </div>
    </section>
  );
}
