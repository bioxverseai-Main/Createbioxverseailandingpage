import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] border border-purple-400/20 rounded-[20px] p-8 shadow-xl shadow-purple-500/20">
      <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5 border border-white/20">
        <Icon className="w-6 h-6 text-[#06B6D4]" />
      </div>
      <h3 className="text-white mb-3">{title}</h3>
      <p className="text-purple-100">{description}</p>
    </div>
  );
}