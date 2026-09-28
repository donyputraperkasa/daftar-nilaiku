import React, { useEffect } from 'react';
import { X, Layers, Printer, Info, Crown, Sparkles, Award, TrendingUp, CheckCircle2 } from 'lucide-react';
import { type StudentGrade, type ClassData, ACADEMIC_INFO } from '../data/gradesData';
import { StudentBabCard } from './StudentBabCard';

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

  // Hitung metrik capaian penilaian siswa
  const allScores = [
    student.kuis1, student.tugas1, student.uh1,
    student.kuis2, student.tugas2, student.uh2,
    student.kuis3, student.tugas3, student.uh3,
  ].filter((s): s is number => s !== null && s !== undefined && !isNaN(s));

  const maxScore = allScores.length > 0 ? Math.max(...allScores) : null;
  const avgScore = allScores.length > 0 
    ? (allScores.reduce((acc, curr) => acc + curr, 0) / allScores.length).toFixed(1) 
    : null;
  const completedCount = allScores.length;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-icon">{student.nama.charAt(0)}</div>
          <div className="modal-header-text">
            <div className="flex items-center gap-2">
              <h3 className="modal-title">{student.nama}</h3>
              <span className="rounded-md bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe] px-2 py-0.5 text-[11px] font-bold">
                {classInfo.namaKelas}
              </span>
            </div>
            <p className="modal-subtitle">
              Mata Pelajaran: <strong>{ACADEMIC_INFO.mataPelajaran}</strong> &bull; Guru: <span className="capitalize">{ACADEMIC_INFO.guruPengampu}</span> &bull; TA {ACADEMIC_INFO.tahunAjaran}
            </p>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Tutup modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2.5 mb-4 p-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
            <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white border border-[#edf2f7] shadow-2xs">
              <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                <CheckCircle2 size={12} className="text-blue-500" />
                Nilai Terisi
              </span>
              <span className="font-mono font-bold text-sm text-slate-800 mt-0.5">
                {completedCount} <span className="text-[11px] text-slate-400 font-normal">/ 9</span>
              </span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white border border-[#edf2f7] shadow-2xs">
              <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                <TrendingUp size={12} className="text-blue-500" />
                Rata-Rata
              </span>
              <span className="font-mono font-bold text-sm text-[#1e3a8a] mt-0.5">
                {avgScore ?? '—'}
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white border border-[#edf2f7] shadow-2xs">
              <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                <Award size={12} className={maxScore !== null && maxScore >= 96 ? 'text-amber-500' : maxScore !== null && maxScore >= 85 ? 'text-emerald-500' : 'text-blue-500'} />
                Tertinggi
              </span>
              <div className="mt-0.5">
                {maxScore !== null ? (
                  <span className={`font-mono font-extrabold text-sm flex items-center gap-1 ${
                    maxScore >= 96 
                      ? 'text-amber-600' 
                      : maxScore >= 85 
                        ? 'text-emerald-600' 
                        : 'text-slate-800'
                  }`}>
                    {maxScore}
                    {maxScore >= 96 && <Crown size={12} className="text-amber-500 animate-crown-float" strokeWidth={2.5} />}
                    {maxScore >= 85 && maxScore < 96 && <Sparkles size={11} className="text-emerald-500 animate-sparkle-twinkle" />}
                  </span>
                ) : (
                  <span className="font-mono text-sm text-slate-400">—</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h4 className="flex items-center gap-2 text-sm font-bold text-[#1e3a8a]">
              <Layers size={16} color="#2563eb" />
              <span>Rincian Capaian Penilaian per Bab</span>
            </h4>
            <span className="text-xs text-[#64748b]">Kuis, Tugas, &amp; UH</span>
          </div>

          {/* 3 Bab Cards Grid */}
          <div className="grid gap-3.5 sm:grid-cols-3">
            {[
              { num: 1, kuis: student.kuis1, tugas: student.tugas1, uh: student.uh1 },
              { num: 2, kuis: student.kuis2, tugas: student.tugas2, uh: student.uh2 },
              { num: 3, kuis: student.kuis3, tugas: student.tugas3, uh: student.uh3 },
            ].map((bab) => (
              <StudentBabCard key={bab.num} {...bab} />
            ))}
          </div>

          {/* Catatan Guru */}
          {student.catatanGuru ? (
            <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#fde68a] bg-[#fffbeb] p-3.5 text-xs text-[#92400e]">
              <Info size={16} color="#d97706" className="shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#78350f]">Catatan Guru:</strong>
                <p className="mt-0.5 italic leading-relaxed text-[#92400e]">"{student.catatanGuru}"</p>
              </div>
            </div>
          ) : (
            <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3 text-xs text-[#64748b]">
              <Info size={15} color="#94a3b8" className="shrink-0" />
              <span>Belum ada catatan khusus dari guru pengampu untuk siswa ini.</span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button type="button" onClick={() => window.print()} className="modal-footer-close-btn">
            <Printer size={15} />
            <span>Cetak Rapor Siswa</span>
          </button>
          <button type="button" onClick={onClose} className="modal-footer-close-btn primary">
            Tutup Rincian
          </button>
        </div>
      </div>
    </div>
  );
};
