import React from 'react';
import { 
  FileSpreadsheet, 
  Eye, 
  Crown, 
  Sparkles, 
  Info, 
  BookOpen 
} from 'lucide-react';
import { 
  type StudentGrade, 
  type ClassData 
} from '../data/gradesData';
import { ScoreBadge } from './ScoreBadge';

interface GradeTableProps {
  students: { student: StudentGrade; classInfo: ClassData }[];
  currentClassTitle: string;
  onSelectStudent: (student: StudentGrade, classInfo: ClassData) => void;
}

export const GradeTable: React.FC<GradeTableProps> = ({
  students,
  currentClassTitle,
  onSelectStudent,
}) => {
  const totalStudents = students.length;

  return (
    <div className="py-8 w-full">
      {/* 1. Panduan Kategori Penilaian Visual - Ukuran Lebih Luas & Jelas */}
      <div className="mb-6 rounded-2xl border border-[#dbe5f4] bg-white p-5 shadow-xs">
        <div className="flex items-center gap-3 border-b border-[#edf2f8] pb-3 mb-4">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0f2a4f] text-[#f2d35f]">
            <Sparkles size={16} />
          </span>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f2a4f]">
              Panduan Kategori Penilaian
            </h3>
            <p className="text-xs text-[#617089]">
              Kategori pencapaian nilai disajikan dalam logo visual dan lingkaran warna
            </p>
          </div>
        </div>

        {/* 6 Category Items - Ukuran Besar & Nyaman Dibaca */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 text-xs">
          {/* 1. Emas (96 - 100) */}
          <div className="flex items-center gap-3 rounded-xl border border-amber-300 bg-amber-50/80 p-3 text-amber-900 shadow-2xs">
            <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-yellow-400 text-amber-900 shadow-xs">
              <Crown size={16} className="animate-pulse" />
            </span>
            <div className="min-w-0">
              <p className="font-bold text-sm leading-tight text-amber-900">Emas</p>
              <p className="text-xs text-amber-700 font-mono font-semibold">96 - 100</p>
            </div>
          </div>

          {/* 2. Hijau (85 - 95) */}
          <div className="flex items-center gap-3 rounded-xl border border-emerald-300 bg-emerald-50/80 p-3 text-emerald-900 shadow-2xs">
            <span className="h-6 w-6 shrink-0 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/40" />
            <div className="min-w-0">
              <p className="font-bold text-sm leading-tight text-emerald-900">Hijau</p>
              <p className="text-xs text-emerald-700 font-mono font-semibold">85 - 95</p>
            </div>
          </div>

          {/* 3. Biru (75 - 84) */}
          <div className="flex items-center gap-3 rounded-xl border border-blue-300 bg-blue-50/80 p-3 text-blue-900 shadow-2xs">
            <span className="h-6 w-6 shrink-0 rounded-full bg-blue-500 shadow-sm shadow-blue-500/40" />
            <div className="min-w-0">
              <p className="font-bold text-sm leading-tight text-blue-900">Biru</p>
              <p className="text-xs text-blue-700 font-mono font-semibold">75 - 84</p>
            </div>
          </div>

          {/* 4. Ungu (50 - 74) */}
          <div className="flex items-center gap-3 rounded-xl border border-purple-300 bg-purple-50/80 p-3 text-purple-900 shadow-2xs">
            <span className="h-6 w-6 shrink-0 rounded-full bg-purple-500 shadow-sm shadow-purple-500/40" />
            <div className="min-w-0">
              <p className="font-bold text-sm leading-tight text-purple-900">Ungu</p>
              <p className="text-xs text-purple-700 font-mono font-semibold">50 - 74</p>
            </div>
          </div>

          {/* 5. Merah (< 50) */}
          <div className="flex items-center gap-3 rounded-xl border border-rose-300 bg-rose-50/80 p-3 text-rose-900 shadow-2xs">
            <span className="h-6 w-6 shrink-0 rounded-full bg-rose-500 shadow-sm shadow-rose-500/40" />
            <div className="min-w-0">
              <p className="font-bold text-sm leading-tight text-rose-900">Merah</p>
              <p className="text-xs text-rose-700 font-mono font-semibold">&lt; 50</p>
            </div>
          </div>

          {/* 6. Belum Mengumpulkan (🗿 Moai) */}
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-slate-700 shadow-2xs">
            <span className="text-2xl leading-none select-none">🗿</span>
            <div className="min-w-0">
              <p className="font-bold text-sm leading-tight text-slate-700">Belum Ada</p>
              <p className="text-xs text-slate-500">Kosong</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Table Header Title Bar */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <FileSpreadsheet size={20} className="text-[#1f4f8f]" />
          <h2 className="text-lg font-bold text-[#172033]">
            {currentClassTitle}
          </h2>
          <span className="text-xs text-[#617089] font-medium">
            ({totalStudents} Siswa)
          </span>
        </div>
      </div>

      {/* 3. Spreadsheet Table - Besar, Luas, Gagah, & Tetap Pas di Layar Penuh */}
      <div className="classic-table-wrap w-full">
        <table className="classic-table w-full">
          <thead>
            {/* Top Group Row - Center & Menarik */}
            <tr className="group-header">
              <th colSpan={3} className="text-center py-4 bg-gradient-to-r from-[#0c2342] to-[#12315b] border-r border-[#204a80]">
                <div className="flex items-center justify-center gap-1.5 font-bold tracking-wider text-sm">
                  <span>IDENTITAS SISWA</span>
                </div>
              </th>

              <th colSpan={3} className="text-center py-4 bg-[#12315b] border-r border-[#204a80]">
                <div className="flex items-center justify-center gap-1.5 font-bold tracking-wider text-amber-300 text-sm">
                  <BookOpen size={15} className="text-amber-300" />
                  <span>PENILAIAN BAB 1</span>
                </div>
              </th>

              <th colSpan={3} className="text-center py-4 bg-[#12315b] border-r border-[#204a80]">
                <div className="flex items-center justify-center gap-1.5 font-bold tracking-wider text-amber-300 text-sm">
                  <BookOpen size={15} className="text-amber-300" />
                  <span>PENILAIAN BAB 2</span>
                </div>
              </th>

              <th colSpan={3} className="text-center py-4 bg-[#12315b] border-r border-[#204a80]">
                <div className="flex items-center justify-center gap-1.5 font-bold tracking-wider text-amber-300 text-sm">
                  <BookOpen size={15} className="text-amber-300" />
                  <span>PENILAIAN BAB 3</span>
                </div>
              </th>

              <th className="text-center py-4 bg-gradient-to-r from-[#12315b] to-[#0c2342] no-print w-24">
                <span className="font-bold tracking-wider text-sm">AKSI</span>
              </th>
            </tr>

            {/* Sub Header Row - Semua Center & Jelas */}
            <tr className="sub-header text-center">
              <th className="text-center w-14 py-3.5 bg-[#e9f0f8] font-bold text-[#0f2a4f]">No</th>
              <th className="text-center py-3.5 min-w-[180px] bg-[#eef4fb] font-bold text-[#0f2a4f]">Nama Siswa</th>
              <th className="text-center w-16 py-3.5 bg-[#e9f0f8] font-bold text-[#0f2a4f]" title="Jenis Kelamin">L/P</th>
              
              {/* Bab 1 */}
              <th className="text-center py-3.5 font-semibold text-[#173b6b] bg-[#f5f8fc]">kuis 1</th>
              <th className="text-center py-3.5 font-semibold text-[#173b6b] bg-[#f5f8fc]">tugas 1</th>
              <th className="text-center py-3.5 font-bold text-[#0f2a4f] bg-[#e2ecf9] border-x border-[#c2d7f0]">UH 1</th>

              {/* Bab 2 */}
              <th className="text-center py-3.5 font-semibold text-[#173b6b] bg-[#f5f8fc]">kuis 2</th>
              <th className="text-center py-3.5 font-semibold text-[#173b6b] bg-[#f5f8fc]">tugas 2</th>
              <th className="text-center py-3.5 font-bold text-[#0f2a4f] bg-[#e2ecf9] border-x border-[#c2d7f0]">UH 2</th>

              {/* Bab 3 */}
              <th className="text-center py-3.5 font-semibold text-[#173b6b] bg-[#f5f8fc]">kuis 3</th>
              <th className="text-center py-3.5 font-semibold text-[#173b6b] bg-[#f5f8fc]">tugas 3</th>
              <th className="text-center py-3.5 font-bold text-[#0f2a4f] bg-[#e2ecf9] border-x border-[#c2d7f0]">UH 3</th>

              {/* Aksi */}
              <th className="text-center py-3.5 no-print w-24 bg-[#eef4fb] font-bold text-[#0f2a4f]">Detail</th>
            </tr>
          </thead>

          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan={13} className="py-14 text-center text-[#617089]">
                  <p className="font-semibold text-base">Tidak ada data siswa.</p>
                </td>
              </tr>
            ) : (
              students.map(({ student: s, classInfo }, idx) => {
                const isFirstInClass = idx === 0 || students[idx - 1].classInfo.id !== classInfo.id;

                return (
                  <React.Fragment key={s.id}>
                    {/* Baris Pemisah / Jeda Per Kelas yang Rapi & Jelas */}
                    {isFirstInClass && (
                      <tr className="bg-gradient-to-r from-[#e9f2fc] via-[#f3f7fd] to-white border-y-2 border-[#cbdbee]">
                        <td colSpan={13} className="py-3 px-5 text-left">
                          <div className="flex items-center gap-2.5">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1f4f8f] text-white text-xs font-bold shadow-2xs">
                              {classInfo.tingkat}
                            </span>
                            <span className="font-extrabold text-sm uppercase tracking-wider text-[#0f2a4f]">
                              {classInfo.namaKelas}
                            </span>
                            <span className="text-xs text-[#617089] font-medium">
                              ({classInfo.siswa.length} Siswa)
                            </span>
                          </div>
                        </td>
                      </tr>
                    )}

                    <tr 
                      onClick={() => onSelectStudent(s, classInfo)}
                      title="Klik untuk membuka rincian nilai siswa"
                      className="hover:bg-[#edf4fe] transition-colors"
                    >
                      {/* No */}
                      <td className="text-center text-[#617089] font-bold py-4.5">{idx + 1}</td>

                      {/* Nama Siswa */}
                      <td className="text-left pl-6 font-bold text-base text-[#172033] py-4.5">
                        {s.nama}
                      </td>

                      {/* Kolom Jenis Kelamin (L/P) */}
                      <td className="text-center py-4.5">
                        <span className={`inline-flex size-7 items-center justify-center rounded-full text-xs font-bold shadow-2xs ${
                          s.jenisKelamin === 'L' 
                            ? 'border border-blue-200 bg-blue-50 text-blue-700' 
                            : 'border border-pink-200 bg-pink-50 text-pink-700'
                        }`}>
                          {s.jenisKelamin}
                        </span>
                      </td>

                      {/* 9 Kolom Nilai (Visual Badges) */}
                      <td className="text-center py-4.5"><ScoreBadge score={s.kuis1} /></td>
                      <td className="text-center py-4.5"><ScoreBadge score={s.tugas1} /></td>
                      <td className="text-center py-4.5 bg-slate-50/70 font-semibold border-x border-[#edf2f8]"><ScoreBadge score={s.uh1} /></td>

                      <td className="text-center py-4.5"><ScoreBadge score={s.kuis2} /></td>
                      <td className="text-center py-4.5"><ScoreBadge score={s.tugas2} /></td>
                      <td className="text-center py-4.5 bg-slate-50/70 font-semibold border-x border-[#edf2f8]"><ScoreBadge score={s.uh2} /></td>

                      <td className="text-center py-4.5"><ScoreBadge score={s.kuis3} /></td>
                      <td className="text-center py-4.5"><ScoreBadge score={s.tugas3} /></td>
                      <td className="text-center py-4.5 bg-slate-50/70 font-semibold border-x border-[#edf2f8]"><ScoreBadge score={s.uh3} /></td>

                      {/* Aksi Button */}
                      <td className="text-center py-4.5 no-print">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectStudent(s, classInfo);
                          }}
                          className="rounded-xl border border-[#dbe5f4] bg-white px-3.5 py-1.5 text-xs font-bold text-[#1f4f8f] hover:bg-[#0f2a4f] hover:text-white hover:border-[#0f2a4f] transition cursor-pointer shadow-2xs"
                        >
                          <Eye size={14} className="inline mr-1" />
                          <span>Lihat</span>
                        </button>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Info Footer */}
      <div className="mt-4 flex items-center justify-between text-xs text-[#617089]">
        <div className="flex items-center gap-1.5">
          <Info size={15} className="text-[#1f4f8f]" />
          <span>Nilai diisi langsung secara berkala oleh guru mata pelajaran matematika.</span>
        </div>
      </div>
    </div>
  );
};
