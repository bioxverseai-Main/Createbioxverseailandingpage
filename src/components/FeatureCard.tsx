import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
}

export function FeatureCard({ icon: Icon, title, description, gradient = 'from-[#06B6D4] to-[#7C3AED]' }: FeatureCardProps) {
  return (
    <div className="group relative">
      {/* Animated gradient border */}
      <div className={`absolute -inset-[1px] bg-gradient-to-r ${gradient} rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
      
      <div className="relative bg-white rounded-[24px] p-8 shadow-lg border border-slate-200 hover:border-transparent transition-all duration-500 h-full">
        <div className="flex flex-col h-full">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-[#1E293B] mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#06B6D4] group-hover:to-[#7C3AED] transition-all duration-300">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}