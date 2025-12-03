import { motion } from 'framer-motion@10.18.0';
import { MessageSquare, Brain, CheckCircle2, ArrowRight } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      id: "01",
      icon: <MessageSquare className="w-8 h-8 text-[#0066FF]" />,
      title: "Natural Input",
      description: "Describe your symptoms in plain language. No medical knowledge required."
    },
    {
      id: "02",
      icon: <Brain className="w-8 h-8 text-[#00D4AA]" />,
      title: "Intelligence Layer",
      description: "Medical-grade AI analyzes patterns, evaluates severity, and generates insights."
    },
    {
      id: "03",
      icon: <CheckCircle2 className="w-8 h-8 text-[#0066FF]" />,
      title: "Clear Guidance",
      description: "Get likely causes, urgency level, care pathways, and provider recommendations."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            From symptom to solution in 3 steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center text-center z-10 relative">
                <div className="absolute top-6 right-6 text-4xl font-bold text-gray-100 -z-10 select-none">
                  {step.id}
                </div>
                
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 translate-x-1/2 z-20 text-gray-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
