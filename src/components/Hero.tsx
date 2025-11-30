import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-40 pb-32 px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#01C3B3]/10 rounded-full mb-8">
              <div className="w-2 h-2 bg-[#01C3B3] rounded-full animate-pulse"></div>
              <span className="text-[#0A1530] text-sm">Building the global health operating system</span>
            </div>
          </motion.div>
          
          <motion.h1
            className="text-[#0A1530] mb-8 text-6xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The intelligence behind your health
          </motion.h1>
          
          <motion.p
            className="text-gray-600 text-xl mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            BioXverse.ai is the AI-powered platform connecting patients, doctors, and health data into one intelligent ecosystem. From instant symptom analysis to universal health profiles—we're building the operating system for global healthcare.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="px-10 py-4 bg-[#0A1530] text-white rounded-lg hover:bg-[#1a2850] transition-all flex items-center justify-center gap-2 group text-lg">
              Get Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 border-2 border-gray-200 text-[#0A1530] rounded-lg hover:border-[#266FFE] hover:text-[#266FFE] transition-all text-lg">
              View Platform
            </button>
          </motion.div>
          
          <motion.div
            className="flex flex-wrap justify-center gap-8 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#01C3B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#01C3B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Medical-Grade AI</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#01C3B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Global Ecosystem</span>
            </div>
          </motion.div>
        </div>
        
        {/* Product showcase */}
        <motion.div
          className="mt-24 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[#0A1530] to-[#266FFE] px-8 py-5 flex items-center justify-between">
              <span className="text-white text-lg">BioXverse Intelligence Platform</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/30"></div>
                <div className="w-3 h-3 rounded-full bg-white/30"></div>
                <div className="w-3 h-3 rounded-full bg-white/30"></div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100">
                  <div className="text-[#266FFE] text-3xl mb-2">AI Analysis</div>
                  <div className="text-[#0A1530] mb-1">Symptom Intelligence</div>
                  <div className="text-xs text-gray-600">Real-time pattern recognition</div>
                  <div className="mt-4 h-2 bg-blue-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#266FFE]"
                      initial={{ width: 0 }}
                      animate={{ width: '92%' }}
                      transition={{ duration: 1.5, delay: 1 }}
                    ></motion.div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100">
                  <div className="text-[#01C3B3] text-3xl mb-2">Care Nav</div>
                  <div className="text-[#0A1530] mb-1">Smart Routing</div>
                  <div className="text-xs text-gray-600">Precision care pathways</div>
                  <div className="mt-4 h-2 bg-green-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#01C3B3]"
                      initial={{ width: 0 }}
                      animate={{ width: '88%' }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                    ></motion.div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100">
                  <div className="text-purple-600 text-3xl mb-2">Health OS</div>
                  <div className="text-[#0A1530] mb-1">Universal Profile</div>
                  <div className="text-xs text-gray-600">Complete health graph</div>
                  <div className="mt-4 h-2 bg-purple-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-purple-600"
                      initial={{ width: 0 }}
                      animate={{ width: '95%' }}
                      transition={{ duration: 1.5, delay: 1.4 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
