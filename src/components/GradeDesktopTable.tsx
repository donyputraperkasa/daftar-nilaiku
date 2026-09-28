import React from 'react';
import { BookOpen } from 'lucide-react';
import { type StudentGrade, type ClassData } from '../data/gradesData';
import { GradeDesktopRow } from './GradeDesktopRow';

interface GradeDesktopTableProps {
  students: { student: StudentGrade; classInfo: ClassData }[];
  onSelectStudent: (student: StudentGrade, classInfo: ClassData) => void;
  babList: readonly { num: number; kuisKey: 'kuis1' | 'kuis2' | 'kuis3'; tugasKey: 'tugas1' | 'tugas2' | 'tugas3'; uhKey: 'uh1' | 'uh2' | 'uh3' }[];
}

export const GradeDesktopTable: React.FC<GradeDesktopTableProps> = ({
  students,
  onSelectStudent,
  babList,
}) => {
  return (
    <div className="hidden md:block theme-table-wrap">
      <table className="theme-table">
        <thead>
          <tr className="group-row">
            <th colSpan={3} className="text-center border-r border-[#bfdbfe]">Identitas Siswa</th>
            {babList.map((b) => (
              <th key={b.num} colSpan={3} className="text-center border-r border-[#bfdbfe]">
                <div className="flex items-center justify-center gap-1.5 font-bold">
                  <BookOpen size={14} color="#2563eb" />
                  <span>Penilaian Bab {['I', 'II', 'III'][b.num - 1]}</span>
                </div>
              </th>
            ))}
            <th className="text-center no-print w-24">Rapor</th>
          </tr>
          <tr className="sub-row">
            <th className="text-center w-12 border-r border-slate-200">No</th>
            <th className="text-left pl-5 min-w-[180px] border-r border-slate-200">Nama Siswa</th>
            <th className="text-center w-12 border-r border-slate-200" title="Jenis Kelamin">L/P</th>
            {babList.map((b) => (
              <React.Fragment key={b.num}>
                <th className="text-center w-20 border-r border-slate-200">Kuis {b.num}</th>
                <th className="text-center w-20 border-r border-slate-200">Tugas {b.num}</th>
                <th className="text-center w-20 border-r border-slate-200 bg-[#dbeafe] text-[#1e40af] font-bold">UH {b.num}</th>
              </React.Fragment>
            ))}
            <th className="text-center no-print w-24">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan={13} className="py-16 text-center text-slate-400">
                <p className="font-semibold text-sm text-slate-600">Tidak ada data siswa yang cocok.</p>
              </td>
            </tr>
          ) : (
            students.map(({ student: s, classInfo }, idx) => {
              const isFirstInClass = idx === 0 || students[idx - 1].classInfo.id !== classInfo.id;
              return (
                <React.Fragment key={s.id}>
                  {isFirstInClass && (
                    <tr className="bg-[#f8fafc] border-y border-[#e2e8f0]">
                      <td colSpan={13} className="py-2.5 px-5 text-left">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#2563eb] text-white text-[10px] font-bold shadow-2xs">
                            {classInfo.tingkat}
                          </span>
                          <span className="font-bold text-xs uppercase tracking-wider text-[#1e3a8a]">{classInfo.namaKelas}</span>
                          <span className="text-[11px] font-semibold text-[#64748b]">&bull; {classInfo.siswa.length} Siswa Terdaftar</span>
                        </div>
                      </td>
                    </tr>
                  )}
                  <GradeDesktopRow
                    student={s}
                    index={idx}
                    onSelect={() => onSelectStudent(s, classInfo)}
                    babList={babList}
                  />
                </React.Fragment>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};
