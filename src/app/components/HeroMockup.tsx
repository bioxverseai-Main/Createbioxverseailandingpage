import React from 'react';
import { Brain, Activity, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';

export function HeroMockup() {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#F97316] rounded-[32px] blur-3xl opacity-30 animate-pulse" />
      
      {/* Main device frame */}
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-[28px] p-1 shadow-2xl">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[24px] overflow-hidden">
          {/* Screen content */}
          <div className="p-8 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#7C3AED] flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm">AI Health Analysis</div>
                  <div className="text-slate-400 text-xs">Real-time Assessment</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-slate-400">Active</span>
              </div>
            </div>

            {/* Symptom input */}
            <div className="space-y-3">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Your Symptoms</div>
              <div className="bg-slate-700/50 backdrop-blur-xl rounded-2xl p-4 border border-slate-600">
                <p className="text-white text-sm leading-relaxed">
                  "I've been experiencing persistent headaches, mild fever around 100°F, and unusual fatigue for the past 3 days. The headache is worse in the morning."
                </p>
              </div>
            </div>

            {/* AI Analysis */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#7C3AED]/20 flex items-center justify-center">
                  <Brain className="w-4 h-4 text-[#7C3AED]" />
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">AI Analysis</div>
              </div>
              
              {/* Severity meter */}
              <div className="bg-gradient-to-br from-[#7C3AED]/10 to-[#06B6D4]/10 backdrop-blur-xl rounded-2xl p-5 border border-[#06B6D4]/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-sm">Severity Level</span>
                  <span className="text-[#F97316] px-3 py-1 bg-orange-500/10 rounded-lg text-xs">Moderate</span>
                </div>
                <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#F97316] w-3/5 rounded-full" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-500">
                  <span>Mild</span>
                  <span>Severe</span>
                </div>
              </div>

              {/* Key findings */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-3 border border-slate-600">
                  <div className="flex items-center gap-2 mb-1">
                    <Activity className="w-4 h-4 text-[#06B6D4]" />
                    <span className="text-xs text-slate-400">Confidence</span>
                  </div>
                  <div className="text-white">87%</div>
                </div>
                <div className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-3 border border-slate-600">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-[#7C3AED]" />
                    <span className="text-xs text-slate-400">Urgency</span>
                  </div>
                  <div className="text-white">24-48h</div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="space-y-2">
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-3">Recommendations</div>
              <div className="flex items-start gap-3 p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white text-sm mb-1">Primary Care Physician</div>
                  <div className="text-slate-400 text-xs">Schedule within 24-48 hours</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white text-sm mb-1">Monitor Symptoms</div>
                  <div className="text-slate-400 text-xs">Track fever and hydration levels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
