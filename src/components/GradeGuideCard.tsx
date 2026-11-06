import { Sparkles, Crown } from 'lucide-react';
import { GUIDE_CATEGORIES } from '../constants';

export function GradeGuideCard() {
  return (
    <section className="theme-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe]">
            <Sparkles size={16} />
          </span>
          <div>
            <h3 className="text-sm font-bold text-[#1e3a8a] tracking-tight">Panduan Kategori Capaian Nilai</h3>
            <p className="text-xs text-[#64748b]">Pencapaian nilai disajikan dalam simbol visual &amp; lingkaran warna standar</p>
          </div>
        </div>
        <span className="text-xs font-semibold text-[#64748b]">Rentang Nilai: 0 - 100</span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-6 text-xs">
        {GUIDE_CATEGORIES.map((cat, i) => (
          <div key={i} className={`flex items-center gap-2.5 rounded-xl border ${cat.border} ${cat.bg} p-2.5 shadow-2xs`}>
            {cat.isCrown ? (
              <span className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full bg-[#f59e0b] text-white shadow-xs">
                <Crown size={14} strokeWidth={2.5} />
              </span>
            ) : cat.isDash ? (
              <span className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full bg-white border border-slate-300 text-slate-400 font-bold text-sm select-none">—</span>
            ) : (
              <span className={`h-5.5 w-5.5 shrink-0 rounded-full border ${cat.dot}`} />
            )}
            <div className="min-w-0">
              <p className={`font-bold text-[11px] ${cat.text}`}>{cat.label}</p>
              <p className={`text-[10px] ${cat.text} font-mono font-bold opacity-80`}>{cat.range}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
