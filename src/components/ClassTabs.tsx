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
    <div className="border-b border-[#dbe5f4] bg-[#f8fafd] py-3 sm:py-4 no-print">
      <div className="container">
        {/* Scrollable on Mobile, Centered on Desktop */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
          {/* Semua Kelas Tab */}
          <button
            type="button"
            onClick={() => onSelectClass('all')}
            className={`flex items-center gap-2 rounded-xl border px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold shrink-0 transition-all cursor-pointer shadow-2xs ${
              selectedClassId === 'all'
                ? 'border-[#0f2a4f] bg-[#0f2a4f] text-white shadow-xs'
                : 'border-[#cdddf2] bg-white text-[#173b6b] hover:border-[#1f4f8f] hover:bg-[#eef5fd]'
            }`}
          >
            <Layers size={16} className={selectedClassId === 'all' ? 'text-[#f2d35f]' : 'text-[#1f4f8f]'} />
            <span className="whitespace-nowrap">Semua Kelas</span>
            <span
              className={`rounded-full px-2 py-0.2 text-[11px] font-bold ${
                selectedClassId === 'all'
                  ? 'bg-white/20 text-white'
                  : 'bg-[#eef3fb] text-[#1f4f8f]'
              }`}
            >
              {allStudentsCount}
            </span>
          </button>

          {/* Individual Class Tabs */}
          {classes.map((cls) => {
            const isActive = selectedClassId === cls.id;
            return (
              <button
                key={cls.id}
                type="button"
                onClick={() => onSelectClass(cls.id)}
                className={`flex items-center gap-2 rounded-xl border px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold shrink-0 transition-all cursor-pointer shadow-2xs ${
                  isActive
                    ? 'border-[#0f2a4f] bg-[#0f2a4f] text-white shadow-xs'
                    : 'border-[#cdddf2] bg-white text-[#173b6b] hover:border-[#1f4f8f] hover:bg-[#eef5fd]'
                }`}
              >
                <GraduationCap size={16} className={isActive ? 'text-[#f2d35f]' : 'text-[#1f4f8f]'} />
                <span className="whitespace-nowrap">{cls.namaKelas}</span>
                <span
                  className={`rounded-full px-2 py-0.2 text-[11px] font-bold ${
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
