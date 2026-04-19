import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function TrustBadge({ icon: Icon, title, description }: TrustBadgeProps) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#06B6D4] transition-colors duration-300">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#06B6D4]/10 to-[#7C3AED]/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-[#7C3AED]" />
      </div>
      <div>
        <h4 className="text-[#1E293B] mb-1">{title}</h4>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  );
}