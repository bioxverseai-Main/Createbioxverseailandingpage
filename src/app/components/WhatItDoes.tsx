import { Brain, Activity, Navigation2, Shield } from 'lucide-react';

export function WhatItDoes() {
  const features = [
    {
      icon: Brain,
      title: "Autonomous Booking",
      description: "It calls the clinic, finds the slot, and adds it to your calendar. No hold music required."
    },
    {
      icon: Activity,
      title: "Instant Refills",
      description: "Tracks your supply and reorders automatically. Meds arrive at your door before you run out."
    },
    {
      icon: Navigation2,
      title: "Universal Records",
      description: "Every lab result, scan, and prescription in one timeline. You own your data, finally."
    },
    {
      icon: Shield,
      title: "Proactive Shield",
      description: "AI that monitors your trends 24/7 and flags risks before they become emergencies."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-[#0A1530] mb-4">
            A Complete Health OS
          </h2>
          <p className="text-gray-600 text-lg">
            The first operating system designed to manage the business of being a patient.
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
