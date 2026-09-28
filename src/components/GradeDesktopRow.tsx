import React from 'react';
import { Eye } from 'lucide-react';
import { type StudentGrade } from '../data/gradesData';
import { ScoreBadge } from './ScoreBadge';

interface GradeDesktopRowProps {
  student: StudentGrade;
  index: number;
  onSelect: () => void;
  babList: readonly { 
    num: number; kuisKey: 'kuis1' | 'kuis2' | 'kuis3'; 
    tugasKey: 'tugas1' | 'tugas2' | 'tugas3'; 
    uhKey: 'uh1' | 'uh2' | 'uh3' }[];
}

export const GradeDesktopRow: React.FC<GradeDesktopRowProps> = ({
  student: s,
  index,
  onSelect,
  babList,
}) => {
  return (
    <tr 
      onClick={onSelect}
      className="hover:bg-[#f8faff] transition-colors cursor-pointer border-b border-[#f1f5f9]"
    >
      <td className="text-center text-slate-400 font-bold text-xs py-3.5 border-r border-[#f1f5f9]">{index + 1}</td>
      <td className="text-left pl-5 py-3.5 border-r border-[#f1f5f9]">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#2563eb] text-white font-bold text-[11px] shadow-2xs">
            {s.nama.charAt(0)}
          </span>
          <span className="font-bold text-sm text-[#1e3a8a] hover:text-[#2563eb] transition-colors">{s.nama}</span>
        </div>
      </td>
      <td className="text-center py-3.5 border-r border-slate-200">
        <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold border ${s.jenisKelamin === 'L' ? 'bg-blue-50 text-[#1d4ed8] border-blue-200' : 'bg-pink-50 text-[#be185d] border-pink-200'}`}>
          {s.jenisKelamin}
        </span>
      </td>
      {babList.map((b) => (
        <React.Fragment key={b.num}>
          <td className="text-center py-3.5 border-r border-[#f1f5f9]"><ScoreBadge score={s[b.kuisKey]} /></td>
          <td className="text-center py-3.5 border-r border-[#f1f5f9]"><ScoreBadge score={s[b.tugasKey]} /></td>
          <td className="text-center py-3.5 bg-[#eff6ff]/60 border-r border-slate-200"><ScoreBadge score={s[b.uhKey]} /></td>
        </React.Fragment>
      ))}
      <td className="text-center py-3.5 no-print">
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onSelect(); }}
          className="inline-flex items-center gap-1 rounded-xl bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe] hover:bg-[#2563eb] hover:text-white px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer shadow-2xs"
        >
          <Eye size={12} />
          <span>Rincian</span>
        </button>
      </td>
    </tr>
  );
};
