import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FutureFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FutureFeature({ icon: Icon, title, description }: FutureFeatureProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 group">
      <div className="w-16 h-16 rounded-2xl border-2 border-[#06B6D4] bg-cyan-50 flex items-center justify-center mb-4 group-hover:bg-[#06B6D4] transition-colors duration-300">
        <Icon className="w-8 h-8 text-[#06B6D4] group-hover:text-white transition-colors duration-300" />
      </div>
      <h4 className="text-[#1E293B] mb-2">{title}</h4>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  );
}