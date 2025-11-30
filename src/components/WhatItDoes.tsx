import { Brain, Activity, Navigation2, Shield } from 'lucide-react';

export function WhatItDoes() {
  const features = [
    {
      icon: Brain,
      title: "AI Symptom Analysis",
      description: "Describe your symptoms in plain language. Our medical-grade AI evaluates patterns and identifies likely causes instantly."
    },
    {
      icon: Activity,
      title: "Severity Scoring",
      description: "Get clear severity ratings and urgency levels so you know whether to rest, see a doctor, or seek immediate care."
    },
    {
      icon: Navigation2,
      title: "Smart Care Navigation",
      description: "Receive personalized guidance on the right type of care—from self-care to specialist visits—saving you time and money."
    },
    {
      icon: Shield,
      title: "Safe & Private",
      description: "Your health data is encrypted and protected. We never diagnose—we guide you to make informed decisions safely."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-[#0A1530] mb-4">
            What BioXverse.ai Does
          </h2>
          <p className="text-gray-600 text-lg">
            An AI-powered health assistant that transforms confusing symptoms into clear, actionable guidance—instantly and safely.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#01C3B3]/10 to-[#266FFE]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#266FFE]" />
                </div>
                <h3 className="text-[#0A1530] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
