import React from 'react';
import { Crown } from 'lucide-react';
import { type ScoreValue, getScoreCategory } from '../data/gradesData';

const COLOR_CLASSES: Record<string, string> = {
  green: 'bg-[#10b981] border-[#059669]',
  blue: 'bg-[#2563eb] border-[#1d4ed8]',
  purple: 'bg-[#8b5cf6] border-[#7c3aed]',
  red: 'bg-[#ef4444] border-[#dc2626]',
};

export const ScoreBadge: React.FC<{ score: ScoreValue | undefined }> = ({ score }) => {
  const cat = getScoreCategory(score);

  if (cat.type === 'moai') {
    return (
      <div className="flex items-center justify-center min-h-[28px]" title="Belum Mengumpulkan (Kosong)">
        <span className="text-slate-300 font-semibold text-sm select-none">—</span>
      </div>
    );
  }

  if (cat.type === 'gold') {
    return (
      <div className="flex items-center justify-center" title={`Istimewa: Emas (${score ?? '96-100'})`}>
        <span className="score-badge-gold-circle flex h-6.5 w-6.5 items-center justify-center rounded-full text-white cursor-pointer transition-transform duration-150 hover:scale-120">
          <Crown size={13} strokeWidth={2.5} className="animate-crown-float drop-shadow-xs" />
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center" title={`${cat.label} (${score ?? cat.rangeText})`}>
      <span className={`inline-block h-5.5 w-5.5 rounded-full border ${COLOR_CLASSES[cat.type] || COLOR_CLASSES.red} shadow-2xs hover:scale-115 transition-transform duration-150 cursor-pointer`} />
    </div>
  );
};
