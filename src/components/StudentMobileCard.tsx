import React from 'react';
import { Eye } from 'lucide-react';
import { type StudentGrade, type ClassData } from '../data/gradesData';
import { ScoreBadge } from './ScoreBadge';

interface StudentMobileCardProps {
  student: StudentGrade;
  classInfo: ClassData;
  index: number;
  onSelect: () => void;
  babList: readonly { num: number; kuisKey: 'kuis1' | 'kuis2' | 'kuis3'; tugasKey: 'tugas1' | 'tugas2' | 'tugas3'; uhKey: 'uh1' | 'uh2' | 'uh3' }[];
}

export const StudentMobileCard: React.FC<StudentMobileCardProps> = ({
  student: s,
  classInfo,
  index,
  onSelect,
  babList,
}) => {
  return (
    <div
      onClick={onSelect}
      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs hover:border-[#bfdbfe] transition-colors cursor-pointer"
    >
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#2563eb] text-white font-bold text-sm shadow-xs">
            {s.nama.charAt(0)}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-bold">#{index + 1}</span>
              <h4 className="font-bold text-sm text-[#1e3a8a] truncate">{s.nama}</h4>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700 border border-slate-200">
                {classInfo.namaKelas}
              </span>
              <span className={`inline-flex px-2 py-0.5 rounded-md text-[10px] font-bold border ${s.jenisKelamin === 'L' ? 'bg-blue-50 text-[#1d4ed8] border-blue-200' : 'bg-pink-50 text-[#be185d] border-pink-200'}`}>
                {s.jenisKelamin === 'L' ? 'Laki-laki' : 'Perempuan'}
              </span>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className="flex items-center gap-1 rounded-xl bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe] px-3 py-1.5 text-xs font-bold hover:bg-[#2563eb] hover:text-white transition-colors cursor-pointer shrink-0"
        >
          <Eye size={13} />
          <span>Rapor</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        {babList.map((b) => (
          <div key={b.num} className="rounded-xl bg-slate-50 p-2 border border-slate-100">
            <p className="text-[10px] font-bold text-[#1e3a8a] uppercase tracking-wider mb-1.5">Bab {b.num}</p>
            <div className="flex items-center justify-center">
              <ScoreBadge score={s[b.uhKey]} />
            </div>
            <span className="block text-[9px] text-slate-500 font-semibold mt-1">UH {b.num}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
