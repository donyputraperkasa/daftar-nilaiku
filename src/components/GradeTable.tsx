import { Info } from 'lucide-react';
import type { GradeTableProps } from '../types';
import { BAB_LIST } from '../constants';
import { GradeGuideCard } from './GradeGuideCard';
import { GradeMobileView } from './GradeMobileView';
import { GradeDesktopTable } from './GradeDesktopTable';

export function GradeTable({
  students,
  currentClassTitle,
  onSelectStudent,
}: GradeTableProps) {
  return (
    <div className="w-full">
      <GradeGuideCard />

      <GradeMobileView
        students={students}
        currentClassTitle={currentClassTitle}
        onSelectStudent={onSelectStudent}
        babList={BAB_LIST}
      />

      <GradeDesktopTable
        students={students}
        onSelectStudent={onSelectStudent}
        babList={BAB_LIST}
      />

      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#64748b] px-1">
        <div className="flex items-center gap-1.5">
          <Info size={14} color="#2563eb" className="shrink-0" />
          <span>Nilai diisi secara berkala oleh guru pengampu mata pelajaran matematika.</span>
        </div>
        <div className="text-[11px] text-slate-400 font-medium">
          Klik baris siswa mana saja untuk membuka rincian rapor mini
        </div>
      </div>
    </div>
  );
}
