import React from 'react';
import { Sparkles, Crown } from 'lucide-react';

const CATEGORIES = [
  { label: 'Emas', range: '96 - 100', border: 'border-[#fde68a]', bg: 'bg-[#fffbeb]', text: 'text-[#b45309]', isCrown: true },
  { label: 'Hijau', range: '85 - 95', border: 'border-[#bbf7d0]', bg: 'bg-[#f0fdf4]', text: 'text-[#15803d]', dot: 'bg-[#10b981] border-[#059669]' },
  { label: 'Biru', range: '75 - 84', border: 'border-[#bfdbfe]', bg: 'bg-[#eff6ff]', text: 'text-[#1d4ed8]', dot: 'bg-[#2563eb] border-[#1d4ed8]' },
  { label: 'Ungu', range: '50 - 74', border: 'border-[#e9d5ff]', bg: 'bg-[#faf5ff]', text: 'text-[#7e22ce]', dot: 'bg-[#8b5cf6] border-[#7c3aed]' },
  { label: 'Merah', range: '< 50', border: 'border-[#fecdd3]', bg: 'bg-[#fff1f2]', text: 'text-[#be123c]', dot: 'bg-[#ef4444] border-[#dc2626]' },
  { label: 'Belum Ada', range: 'Kosong', border: 'border-slate-200', bg: 'bg-slate-50', text: 'text-slate-700', isDash: true },
];

export const GradeGuideCard: React.FC = () => (
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
      {CATEGORIES.map((cat, i) => (
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
