import React from 'react';
import { BookOpen } from 'lucide-react';
import { ScoreNumberBadge } from './ScoreNumberBadge';
import { type ScoreValue } from '../data/gradesData';

interface StudentBabCardProps {
  num: number;
  kuis?: ScoreValue;
  tugas?: ScoreValue;
  uh?: ScoreValue;
}

export const StudentBabCard: React.FC<StudentBabCardProps> = ({ num, kuis, tugas, uh }) => (
  <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-4 shadow-2xs hover:border-[#cbd5e1] transition-colors">
    <div className="border-b border-[#e2e8f0] pb-2 mb-3 flex items-center justify-between">
      <span className="font-bold text-xs text-[#1e3a8a] flex items-center gap-1.5">
        <BookOpen size={13} color="#2563eb" />
        BAB {num}
      </span>
      <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-[#e2e8f0]">
        3 Nilai
      </span>
    </div>
    <div className="space-y-2.5 text-xs">
      <div className="flex items-center justify-between text-slate-700 font-medium">
        <span>Kuis {num}:</span>
        <ScoreNumberBadge score={kuis} label={`Bab ${num} - Kuis`} />
      </div>
      <div className="flex items-center justify-between text-slate-700 font-medium">
        <span>Tugas {num}:</span>
        <ScoreNumberBadge score={tugas} label={`Bab ${num} - Tugas`} />
      </div>
      <div className="flex items-center justify-between font-bold text-[#1e3a8a] pt-2 border-t border-dashed border-[#e2e8f0]">
        <span>UH {num}:</span>
        <ScoreNumberBadge score={uh} label={`Bab ${num} - Ulangan Harian`} />
      </div>
    </div>
  </div>
);
