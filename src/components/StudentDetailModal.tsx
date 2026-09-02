import React, { useEffect } from 'react';
import { 
  X, 
  Layers,
  MessageSquare
} from 'lucide-react';
import { 
  type StudentGrade, 
  type ClassData, 
  ACADEMIC_INFO 
} from '../data/gradesData';
import { ScoreBadge } from './ScoreBadge';

interface StudentDetailModalProps {
  student: StudentGrade | null;
  classInfo: ClassData | null;
  onClose: () => void;
}

export const StudentDetailModal: React.FC<StudentDetailModalProps> = ({
  student,
  classInfo,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (student) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [student, onClose]);

  if (!student || !classInfo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#091b33]/60 backdrop-blur-xs" 
        onClick={onClose} 
      />

      {/* Modal Dialog Box */}
      <div 
        className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-[#cbdbee] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Tanpa Wali Kelas) */}
        <div className="relative flex items-center justify-between border-b border-[#c8d8ed] bg-[#0f2a4f] px-6 py-4 text-white">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded bg-[#fff9df] px-1.5 py-0.5 text-[10px] font-bold text-[#855d00]">
                Rapor Mini Siswa
              </span>
              <span className="text-xs text-blue-100">
                {classInfo.namaKelas} &bull; TA {ACADEMIC_INFO.tahunAjaran}
              </span>
            </div>
            <h2 className="mt-1 text-xl font-bold text-white">
              {student.nama}
            </h2>
            <p className="text-xs text-blue-200 mt-0.5">
              Mata Pelajaran: <strong>{ACADEMIC_INFO.mataPelajaran}</strong> &bull; Guru: {ACADEMIC_INFO.guruPengampu}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-blue-200 hover:bg-white/10 hover:text-white transition cursor-pointer"
            title="Tutup (Esc)"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {/* Breakdown per Bab */}
          <div className="mb-6">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-[#172033]">
              <Layers size={16} className="text-[#1f4f8f]" />
              <span>Rincian Capaian Penilaian per Bab</span>
            </h3>

            <div className="grid gap-3.5 sm:grid-cols-3">
              {/* Bab 1 */}
              <div className="rounded-lg border border-[#dbe5f4] bg-white p-4 shadow-2xs">
                <div className="border-b border-[#edf2f8] pb-2 mb-3 font-bold text-xs text-[#0f2a4f] uppercase tracking-wider">
                  BAB 1
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-[#617089]">
                    <span className="font-medium">Kuis 1:</span>
                    <ScoreBadge score={student.kuis1} />
                  </div>
                  <div className="flex items-center justify-between text-[#617089]">
                    <span className="font-medium">Tugas 1:</span>
                    <ScoreBadge score={student.tugas1} />
                  </div>
                  <div className="flex items-center justify-between font-semibold text-[#0f2a4f] pt-2 border-t border-dashed border-[#edf2f8]">
                    <span>UH 1:</span>
                    <ScoreBadge score={student.uh1} />
                  </div>
                </div>
              </div>

              {/* Bab 2 */}
              <div className="rounded-lg border border-[#dbe5f4] bg-white p-4 shadow-2xs">
                <div className="border-b border-[#edf2f8] pb-2 mb-3 font-bold text-xs text-[#0f2a4f] uppercase tracking-wider">
                  BAB 2
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-[#617089]">
                    <span className="font-medium">Kuis 2:</span>
                    <ScoreBadge score={student.kuis2} />
                  </div>
                  <div className="flex items-center justify-between text-[#617089]">
                    <span className="font-medium">Tugas 2:</span>
                    <ScoreBadge score={student.tugas2} />
                  </div>
                  <div className="flex items-center justify-between font-semibold text-[#0f2a4f] pt-2 border-t border-dashed border-[#edf2f8]">
                    <span>UH 2:</span>
                    <ScoreBadge score={student.uh2} />
                  </div>
                </div>
              </div>

              {/* Bab 3 */}
              <div className="rounded-lg border border-[#dbe5f4] bg-white p-4 shadow-2xs">
                <div className="border-b border-[#edf2f8] pb-2 mb-3 font-bold text-xs text-[#0f2a4f] uppercase tracking-wider">
                  BAB 3
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-[#617089]">
                    <span className="font-medium">Kuis 3:</span>
                    <ScoreBadge score={student.kuis3} />
                  </div>
                  <div className="flex items-center justify-between text-[#617089]">
                    <span className="font-medium">Tugas 3:</span>
                    <ScoreBadge score={student.tugas3} />
                  </div>
                  <div className="flex items-center justify-between font-semibold text-[#0f2a4f] pt-2 border-t border-dashed border-[#edf2f8]">
                    <span>UH 3:</span>
                    <ScoreBadge score={student.uh3} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Catatan Pembimbing Guru */}
          {student.catatanGuru ? (
            <div className="flex items-start gap-2.5 rounded-lg border border-[#e2cca4] bg-[#fffcf0] p-3.5 text-xs">
              <MessageSquare size={16} className="text-[#b88c14] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#855d00]">Catatan Guru Pengampu:</p>
                <p className="mt-0.5 text-[#5c4400] italic leading-relaxed">"{student.catatanGuru}"</p>
              </div>
            </div>
          ) : null}

          {/* Modal Footer */}
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
