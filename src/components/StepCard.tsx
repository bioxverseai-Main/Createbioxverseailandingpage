import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
}

export function StepCard({ icon: Icon, step, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-sm">
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] flex items-center justify-center shadow-lg shadow-purple-500/30">
          <Icon className="w-10 h-10 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#F97316] text-white flex items-center justify-center shadow-lg">
          {step}
        </div>
      </div>
      <h4 className="text-[#1E293B] mb-3">{title}</h4>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}