import { Crown, Sparkles } from 'lucide-react';
import type { ScoreNumberBadgeProps } from '../types';
import { getScoreCategory, isGlossyGreen } from '../utils/scoreUtils';

export function ScoreNumberBadge({ score, label }: ScoreNumberBadgeProps) {
  const cat = getScoreCategory(score);

  if (cat.type === 'moai' || score === null || score === undefined || isNaN(score)) {
    return (
      <div
        className="flex items-center justify-center min-w-[54px] px-2.5 py-1 rounded-lg bg-slate-100/90 border border-slate-200/90 text-slate-400 font-mono text-xs font-semibold select-none shadow-2xs"
        title={`${label ? `${label}: ` : ''}Belum Mengumpulkan (Kosong)`}
      >
        <span>—</span>
      </div>
    );
  }

  if (cat.type === 'gold' || score >= 98) {
    const isPerfect = score === 100;
    return (
      <div
        className="score-badge-gold group inline-flex items-center justify-center gap-1.5 min-w-[64px] px-2.5 py-1 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 select-none"
        title={`${label ? `${label}: ` : ''}Nilai Istimewa: Emas (${score})${isPerfect ? ' • Sempurna!' : ''}`}
      >
        <span className="relative flex items-center justify-center">
          <Crown size={13} className="text-amber-600 animate-crown-float shrink-0 drop-shadow-xs" strokeWidth={2.5} />
        </span>
        <span className="font-mono font-extrabold text-xs text-amber-950 tracking-tight">
          {score}
        </span>
        {isPerfect && (
          <Sparkles size={11} className="text-amber-600 animate-sparkle-twinkle shrink-0" />
        )}
      </div>
    );
  }

  if (cat.type === 'green' || score >= 85) {
    if (isGlossyGreen(score)) {
      return (
        <div
          className="score-badge-green group inline-flex items-center justify-center gap-1 min-w-[60px] px-2.5 py-1 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 select-none"
          title={`${label ? `${label}: ` : ''}Nilai Sangat Baik (Bersinar): Hijau (${score})`}
        >
          <Sparkles size={12} className="text-emerald-700 animate-sparkle-twinkle shrink-0 drop-shadow-2xs" />
          <span className="font-mono font-extrabold text-xs text-emerald-950 tracking-tight">
            {score}
          </span>
        </div>
      );
    }

    return (
      <div
        className="inline-flex items-center justify-center min-w-[54px] px-2.5 py-1 rounded-lg bg-[#ecfdf5] text-[#065f46] border border-[#a7f3d0] font-mono font-bold text-xs shadow-2xs hover:bg-[#d1fae5] transition-colors cursor-pointer select-none"
        title={`${label ? `${label}: ` : ''}Nilai Sangat Baik: Hijau (${score})`}
      >
        <span>{score}</span>
      </div>
    );
  }

  if (cat.type === 'blue' || score >= 75) {
    return (
      <div
        className="inline-flex items-center justify-center min-w-[54px] px-2.5 py-1 rounded-lg bg-[#eff6ff] text-[#1d4ed8] border border-[#bfdbfe] font-mono font-bold text-xs shadow-2xs hover:bg-[#dbeafe] transition-colors cursor-pointer select-none"
        title={`${label ? `${label}: ` : ''}Nilai Baik: Biru (${score})`}
      >
        <span>{score}</span>
      </div>
    );
  }

  if (cat.type === 'purple' || score >= 50) {
    return (
      <div
        className="inline-flex items-center justify-center min-w-[54px] px-2.5 py-1 rounded-lg bg-[#faf5ff] text-[#7e22ce] border border-[#e9d5ff] font-mono font-bold text-xs shadow-2xs hover:bg-[#f3e8ff] transition-colors cursor-pointer select-none"
        title={`${label ? `${label}: ` : ''}Nilai Cukup: Ungu (${score})`}
      >
        <span>{score}</span>
      </div>
    );
  }

  return (
    <div
      className="inline-flex items-center justify-center min-w-[54px] px-2.5 py-1 rounded-lg bg-[#fef2f2] text-[#dc2626] border border-[#fecaca] font-mono font-bold text-xs shadow-2xs hover:bg-[#fee2e2] transition-colors cursor-pointer select-none"
      title={`${label ? `${label}: ` : ''}Nilai Perlu Bimbingan: Merah (${score})`}
    >
      <span>{score}</span>
    </div>
  );
}
