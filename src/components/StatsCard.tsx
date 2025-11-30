import React from 'react';

interface StatsCardProps {
  number: string;
  label: string;
  suffix?: string;
}

export function StatsCard({ number, label, suffix }: StatsCardProps) {
  return (
    <div className="text-center">
      <div className="flex items-baseline justify-center gap-1 mb-2">
        <span className="text-5xl font-bold bg-gradient-to-r from-[#06B6D4] to-[#7C3AED] bg-clip-text text-transparent">
          {number}
        </span>
        {suffix && (
          <span className="text-2xl font-bold text-[#7C3AED]">{suffix}</span>
        )}
      </div>
      <div className="text-slate-600">{label}</div>
    </div>
  );
}
