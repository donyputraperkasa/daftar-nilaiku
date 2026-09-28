import React from 'react';
import { Info } from 'lucide-react';
import { type StudentGrade, type ClassData } from '../data/gradesData';
import { GradeGuideCard } from './GradeGuideCard';
import { GradeMobileView } from './GradeMobileView';
import { GradeDesktopTable } from './GradeDesktopTable';

interface GradeTableProps {
  students: { student: StudentGrade; classInfo: ClassData }[];
  currentClassTitle: string;
  onSelectStudent: (student: StudentGrade, classInfo: ClassData) => void;
}

const BAB_LIST = [
  { num: 1, kuisKey: 'kuis1' as const, tugasKey: 'tugas1' as const, uhKey: 'uh1' as const },
  { num: 2, kuisKey: 'kuis2' as const, tugasKey: 'tugas2' as const, uhKey: 'uh2' as const },
  { num: 3, kuisKey: 'kuis3' as const, tugasKey: 'tugas3' as const, uhKey: 'uh3' as const },
] as const;

export const GradeTable: React.FC<GradeTableProps> = ({
  students,
  currentClassTitle,
  onSelectStudent,
}) => {
  return (
    <div className="w-full">
      {/* 1. Panduan Capaian Nilai */}
      <GradeGuideCard />

      {/* 2. Tampilan Khusus Mobile (Card / Simple Table) */}
      <GradeMobileView
        students={students}
        currentClassTitle={currentClassTitle}
        onSelectStudent={onSelectStudent}
        babList={BAB_LIST}
      />

      {/* 3. Tampilan Desktop (Full Responsive Grid Table) */}
      <GradeDesktopTable
        students={students}
        onSelectStudent={onSelectStudent}
        babList={BAB_LIST}
      />

      {/* 4. Info Footer Note */}
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
};
