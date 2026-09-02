import React from 'react';
import { Layers, GraduationCap } from 'lucide-react';
import { type ClassData } from '../data/gradesData';

interface ClassTabsProps {
  classes: ClassData[];
  selectedClassId: string;
  onSelectClass: (classId: string) => void;
}

export const ClassTabs: React.FC<ClassTabsProps> = ({
  classes,
  selectedClassId,
  onSelectClass,
}) => {
  const allStudentsCount = classes.reduce((sum, c) => sum + c.siswa.length, 0);

  return (
    <div className="border-b border-[#dbe5f4] bg-[#f8fafd] py-5 sm:py-6 no-print">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* Semua Kelas Tab - Ukuran Besar, Tinggi, & Lebar */}
          <button
            type="button"
            onClick={() => onSelectClass('all')}
            className={`flex items-center gap-3 rounded-2xl border px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-bold transition-all cursor-pointer shadow-2xs hover:-translate-y-0.5 ${
              selectedClassId === 'all'
                ? 'border-[#0f2a4f] bg-[#0f2a4f] text-white shadow-md shadow-[#0f2a4f]/20'
                : 'border-[#cdddf2] bg-white text-[#173b6b] hover:border-[#1f4f8f] hover:bg-[#eef5fd] hover:shadow-sm'
            }`}
          >
            <Layers size={20} className={selectedClassId === 'all' ? 'text-[#f2d35f]' : 'text-[#1f4f8f]'} />
            <span>Semua Kelas</span>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-extrabold ${
                selectedClassId === 'all'
                  ? 'bg-white/20 text-white'
                  : 'bg-[#eef3fb] text-[#1f4f8f]'
              }`}
            >
              {allStudentsCount}
            </span>
          </button>

          {/* Individual Class Tabs - Ukuran Besar, Tinggi, & Lebar */}
          {classes.map((cls) => {
            const isActive = selectedClassId === cls.id;
            return (
              <button
                key={cls.id}
                type="button"
                onClick={() => onSelectClass(cls.id)}
                className={`flex items-center gap-3 rounded-2xl border px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-bold transition-all cursor-pointer shadow-2xs hover:-translate-y-0.5 ${
                  isActive
                    ? 'border-[#0f2a4f] bg-[#0f2a4f] text-white shadow-md shadow-[#0f2a4f]/20'
                    : 'border-[#cdddf2] bg-white text-[#173b6b] hover:border-[#1f4f8f] hover:bg-[#eef5fd] hover:shadow-sm'
                }`}
              >
                <GraduationCap size={20} className={isActive ? 'text-[#f2d35f]' : 'text-[#1f4f8f]'} />
                <span>{cls.namaKelas}</span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-extrabold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-[#eef3fb] text-[#1f4f8f]'
                  }`}
                >
                  {cls.siswa.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
