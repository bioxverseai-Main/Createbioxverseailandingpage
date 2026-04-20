import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Send, Bot, CheckCircle } from 'lucide-react';

const demoSteps = [
  {
    step: 1,
    type: 'user',
    message: 'Mom needs her cardiologist follow-up scheduled. She was discharged yesterday.',
    delay: 0
  },
  {
    step: 2,
    type: 'agent',
    message: 'Got it. I\'m locating her cardiologist, checking available appointments, and coordinating with her insurance network...',
    delay: 2000
  },
  {
    step: 3,
    type: 'agent',
    message: 'Done. Tuesday, March 18 at 2:00 PM with Dr. Patel at Inova Fairfax Heart & Vascular Institute. Confirmation sent to her phone. Transportation arranged if needed.',
    delay: 5000,
    isComplete: true
  }
];

export function ProductDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    if (currentStep < demoSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, demoSteps[currentStep]?.delay || 2000);
      return () => clearTimeout(timer);
    } else {
      // Reset after completion
      setTimeout(() => {
        setCurrentStep(0);
        setIsPlaying(true);
      }, 3000);
    }
  }, [currentStep, isPlaying]);

  const startDemo = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  useEffect(() => {
    // Auto-start on mount
    startDemo();
  }, []);

  return (
    <section className="py-40 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 font-medium mb-8">
            See it in action
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6">
            One message.
            <br />
            <span className="gradient-accent">Everything handled.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Watch how BioXverse turns a complex healthcare task into a single message.
          </p>
        </motion.div>

        {/* Demo Interface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Phone mockup frame */}
          <div className="max-w-lg mx-auto">
            <div className="bg-gradient-to-b from-gray-900 to-black border border-white/20 rounded-[3rem] p-4 shadow-2xl">
              {/* Screen */}
              <div className="bg-black rounded-[2.5rem] overflow-hidden border border-white/10">
                {/* Header */}
                <div className="bg-gradient-to-b from-gray-900 to-black border-b border-white/10 px-6 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">BioXverse Agent</div>
                    <div className="text-xs text-green-400 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Active
                    </div>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="h-[500px] overflow-hidden px-6 py-8 space-y-6">
                  <AnimatePresence>
                    {demoSteps.slice(0, currentStep + 1).map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                        className={`flex ${step.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[85%] ${step.type === 'user' ? 'order-2' : 'order-1'}`}>
                          <div
                            className={`px-5 py-4 rounded-3xl ${
                              step.type === 'user'
                                ? 'bg-blue-500 text-white'
                                : 'bg-white/10 text-gray-200 border border-white/10'
                            }`}
                          >
                            <p className="text-base leading-relaxed">{step.message}</p>
                            {step.isComplete && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-3 flex items-center gap-2 text-green-400"
                              >
                                <CheckCircle className="w-5 h-5" />
                                <span className="text-sm font-medium">Completed</span>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing indicator */}
                  {isPlaying && currentStep < demoSteps.length && demoSteps[currentStep].type === 'agent' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white/10 border border-white/10 px-5 py-4 rounded-3xl">
                        <div className="flex gap-1">
                          <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                          <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                          <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Input bar */}
                <div className="border-t border-white/10 px-6 py-4 bg-gradient-to-t from-gray-900 to-black">
                  <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-full">
                    <input
                      type="text"
                      placeholder="Type your healthcare need..."
                      disabled
                      className="flex-1 bg-transparent text-gray-400 placeholder:text-gray-600 outline-none text-sm"
                    />
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Send className="w-4 h-4 text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Replay button */}
          <motion.button
            onClick={startDemo}
            className="mt-8 mx-auto block px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Replay Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
