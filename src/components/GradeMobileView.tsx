import React, { useState } from 'react';
import { LayoutGrid, Table as TableIcon } from 'lucide-react';
import { type StudentGrade, type ClassData } from '../data/gradesData';
import { StudentMobileCard } from './StudentMobileCard';

interface GradeMobileViewProps {
  students: { student: StudentGrade; classInfo: ClassData }[];
  currentClassTitle: string;
  onSelectStudent: (student: StudentGrade, classInfo: ClassData) => void;
  babList: readonly { num: number; kuisKey: 'kuis1' | 'kuis2' | 'kuis3'; tugasKey: 'tugas1' | 'tugas2' | 'tugas3'; uhKey: 'uh1' | 'uh2' | 'uh3' }[];
}

export const GradeMobileView: React.FC<GradeMobileViewProps> = ({
  students,
  currentClassTitle,
  onSelectStudent,
  babList,
}) => {
  const [viewMode, setViewMode] = useState<'card' | 'table'>('card');

  if (students.length === 0) {
    return (
      <div className="block md:hidden rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500 shadow-xs">
        <p className="font-semibold text-sm">Tidak ada siswa yang sesuai pencarian.</p>
      </div>
    );
  }

  return (
    <div className="block md:hidden">
      <div className="flex items-center justify-between mb-3 no-print">
        <span className="text-xs font-bold text-[#1e3a8a]">{currentClassTitle}</span>
        <div className="flex rounded-xl border border-slate-200 bg-white p-1 shadow-xs">
          <button
            type="button"
            onClick={() => setViewMode('card')}
            className={`p-1.5 rounded-lg transition-colors ${viewMode === 'card' ? 'bg-[#2563eb] text-white' : 'text-slate-500'}`}
            title="Tampilan Kartu Siswa"
          >
            <LayoutGrid size={15} />
          </button>
          <button
            type="button"
            onClick={() => setViewMode('table')}
            className={`p-1.5 rounded-lg transition-colors ${viewMode === 'table' ? 'bg-[#2563eb] text-white' : 'text-slate-500'}`}
            title="Tampilan Tabel"
          >
            <TableIcon size={15} />
          </button>
        </div>
      </div>

      {viewMode === 'card' ? (
        <div className="grid gap-3">
          {students.map(({ student: s, classInfo }, idx) => (
            <StudentMobileCard
              key={s.id}
              student={s}
              classInfo={classInfo}
              index={idx}
              onSelect={() => onSelectStudent(s, classInfo)}
              babList={babList}
            />
          ))}
        </div>
      ) : (
        <div className="theme-table-wrap">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-[#eff6ff] text-[#1e3a8a] text-xs font-bold uppercase tracking-wider border-b border-[#bfdbfe]">
                <th className="py-3 px-3 w-12 text-center">No</th>
                <th className="py-3 px-3">Nama Siswa</th>
                <th className="py-3 px-2 w-12 text-center">L/P</th>
                <th className="py-3 px-3 w-20 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {students.map(({ student: s, classInfo }, idx) => (
                <tr
                  key={s.id}
                  onClick={() => onSelectStudent(s, classInfo)}
                  className="border-b border-slate-100 hover:bg-slate-50 transition cursor-pointer"
                >
                  <td className="py-3 px-3 text-center text-slate-500 font-bold text-xs">{idx + 1}</td>
                  <td className="py-3 px-3 font-bold text-[#1e3a8a] text-sm">{s.nama}</td>
                  <td className="py-3 px-2 text-center">
                    <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold border ${s.jenisKelamin === 'L' ? 'bg-blue-50 text-[#1d4ed8] border-blue-200' : 'bg-pink-50 text-[#be185d] border-pink-200'}`}>
                      {s.jenisKelamin}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectStudent(s, classInfo);
                      }}
                      className="rounded-lg bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe] px-2.5 py-1 text-xs font-bold hover:bg-[#2563eb] hover:text-white transition cursor-pointer"
                    >
                      Rapor
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
