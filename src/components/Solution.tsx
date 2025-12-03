import { motion } from 'framer-motion@10.18.0';
import { Check, Activity, Shield, ArrowRight, Stethoscope } from 'lucide-react';

export function Solution() {
  return (
    <section className="py-24 px-6 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Get clarity in 60 seconds
          </h2>
          <p className="text-xl text-gray-600">
            Medical-grade AI that understands your symptoms
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Mockup Interface */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-16"
          >
            {/* Mockup Header */}
            <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 text-center text-sm font-medium text-gray-400">BioXverse Analysis</div>
            </div>

            {/* Mockup Body */}
            <div className="p-8 bg-gray-50/50 min-h-[400px] flex flex-col gap-6">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-[#0066FF] text-white px-6 py-3 rounded-2xl rounded-tr-sm max-w-[80%] shadow-md">
                  I have a headache, fever, and sore throat. It started this morning.
                </div>
              </div>

              {/* AI Response */}
              <div className="flex justify-start w-full">
                <div className="bg-white border border-gray-200 px-6 py-6 rounded-2xl rounded-tl-sm w-full max-w-[90%] shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#00D4AA]/20 rounded-full flex items-center justify-center">
                       <Activity className="w-5 h-5 text-[#00D4AA]" />
                    </div>
                    <span className="font-bold text-[#1a1a1a]">Analysis Complete</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">Possible Conditions</p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                          <span className="font-medium text-[#1a1a1a]">1. Viral Infection</span>
                          <span className="text-sm text-blue-600 font-medium">High Match</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                          <span className="font-medium text-gray-700">2. Influenza (Flu)</span>
                          <span className="text-sm text-gray-500">Moderate Match</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                          <span className="font-medium text-gray-700">3. Strep Throat</span>
                          <span className="text-sm text-gray-500">Possible</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                        <p className="text-sm text-orange-600 font-medium mb-1">Severity Level</p>
                        <p className="text-xl font-bold text-[#1a1a1a]">Medium</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                        <p className="text-sm text-green-600 font-medium mb-1">Recommendation</p>
                        <p className="text-lg font-bold text-[#1a1a1a]">See doctor within 24h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <div className="mb-4 text-center">
            <p className="text-lg font-semibold text-gray-700">What you'll get from BioXverse:</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Activity className="w-5 h-5" />, text: "Condition Analysis" },
              { icon: <Shield className="w-5 h-5" />, text: "Severity Assessment" },
              { icon: <ArrowRight className="w-5 h-5" />, text: "Clear Next Steps" },
              { icon: <Stethoscope className="w-5 h-5" />, text: "Doctor Matching" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-[#0066FF]">{item.icon}</div>
                <span className="font-medium text-gray-800 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
