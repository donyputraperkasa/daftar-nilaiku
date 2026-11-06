import { Award, CheckCircle2, Crown, Sparkles, TrendingUp } from 'lucide-react';
import type { StudentMetricsBarProps } from '../types';

export function StudentMetricsBar({
  completedCount,
  avgScore,
  maxScore,
}: StudentMetricsBarProps) {
  return (
    <div className="grid grid-cols-3 gap-2.5 mb-4 p-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
      <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white border border-[#edf2f7] shadow-2xs">
        <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
          <CheckCircle2 size={12} className="text-blue-500" />
          Nilai Terisi
        </span>
        <span className="font-mono font-bold text-sm text-slate-800 mt-0.5">
          {completedCount} <span className="text-[11px] text-slate-400 font-normal">/ 9</span>
        </span>
      </div>

      <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white border border-[#edf2f7] shadow-2xs">
        <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
          <TrendingUp size={12} className="text-blue-500" />
          Rata-Rata
        </span>
        <span className="font-mono font-bold text-sm text-[#1e3a8a] mt-0.5">
          {avgScore ?? '—'}
        </span>
      </div>

      <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white border border-[#edf2f7] shadow-2xs">
        <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
          <Award size={12} className={maxScore !== null && maxScore >= 98 ? 'text-amber-500' : maxScore !== null && maxScore >= 85 ? 'text-emerald-500' : 'text-blue-500'} />
          Tertinggi
        </span>
        <div className="mt-0.5">
          {maxScore !== null ? (
            <span className={`font-mono font-extrabold text-sm flex items-center gap-1 ${maxScore >= 98 ? 'text-amber-600' : maxScore >= 85 ? 'text-emerald-600' : 'text-slate-800'
              }`}>
              {maxScore}
              {maxScore >= 98 && <Crown size={12} className="text-amber-500 animate-crown-float" strokeWidth={2.5} />}
              {maxScore >= 90 && maxScore < 98 && <Sparkles size={11} className="text-emerald-500 animate-sparkle-twinkle" />}
            </span>
          ) : (
            <span className="font-mono text-sm text-slate-400">—</span>
          )}
        </div>
      </div>
    </div>
  );
}

