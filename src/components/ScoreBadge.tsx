import React from 'react';
import { Crown } from 'lucide-react';
import { type ScoreValue, getScoreCategory } from '../data/gradesData';

interface ScoreBadgeProps {
  score: ScoreValue | undefined;
}

export const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  const cat = getScoreCategory(score);

  // 1. Belum Mengumpulkan (🗿 Moai Emoticon - Ukuran Jelas & Proporsional)
  if (cat.type === 'moai') {
    return (
      <div className="flex items-center justify-center" title="Belum Mengumpulkan">
        <span className="text-2xl select-none leading-none hover:scale-115 transition-transform">
          🗿
        </span>
      </div>
    );
  }

  // 2. Logo Emas Bersinar (96 - 100)
  if (cat.type === 'gold') {
    return (
      <div className="flex items-center justify-center" title={`Emas (${score ?? '96-100'})`}>
        <div className="relative group inline-flex items-center justify-center">
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 opacity-70 blur-2xs" />
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-amber-300 bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-400 text-amber-900 shadow-sm shadow-amber-500/40 animate-pulse">
            <Crown size={17} strokeWidth={2.5} />
          </span>
        </div>
      </div>
    );
  }

  // 3. Lingkaran Berwarna (Hijau, Biru, Ungu, Merah - Ukuran Besar & Jelas)
  const getCircleBg = () => {
    switch (cat.type) {
      case 'green':
        return 'bg-emerald-500 shadow-emerald-500/40';
      case 'blue':
        return 'bg-blue-500 shadow-blue-500/40';
      case 'purple':
        return 'bg-purple-500 shadow-purple-500/40';
      case 'red':
      default:
        return 'bg-rose-500 shadow-rose-500/40';
    }
  };

  return (
    <div className="flex items-center justify-center" title={`${cat.label} (${score ?? cat.rangeText})`}>
      <span className={`inline-block h-7 w-7 rounded-full ${getCircleBg()} shadow-sm hover:scale-110 transition-transform`} />
    </div>
  );
};
