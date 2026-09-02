import React from 'react';
import { Printer } from 'lucide-react';
import { ACADEMIC_INFO } from '../data/gradesData';

interface NavbarProps {
  onPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPrint }) => {
  return (
    <header className="border-b border-[#dbe5f4] bg-white">
      {/* Top Accent Stripe */}
      <span className="block h-1 w-full bg-gradient-to-r from-[#1f4f8f] via-[#29328f] to-[#f2d35f]" />

      {/* Kop Tengah Sesuai Gambar Referensi */}
      <div className="container py-8 sm:py-10">
        <div className="mx-auto max-w-2xl text-center">
          {/* 1. Logo BOPKRI di Tengah */}
          <div className="flex justify-center mb-3.5">
            <img 
              src="/logo.png" 
              alt="Yayasan BOPKRI Yogyakarta" 
              className="h-20 sm:h-22 w-auto object-contain select-none" 
            />
          </div>

          {/* 2. Judul Besar di Tengah */}
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#17336b]">
            Rekap Nilai Matematika
          </h1>

          {/* 3. Subtitle di Tengah */}
          <p className="mt-2 text-sm sm:text-base font-normal text-[#617089]">
            SMP BOPKRI Yogyakarta &bull; Guru: <strong className="text-[#172033] font-semibold">{ACADEMIC_INFO.guruPengampu}</strong> &bull; Tahun Ajaran {ACADEMIC_INFO.tahunAjaran}
          </p>

          {/* 4. Tombol Cetak Rekap */}
          <div className="mt-4 flex justify-center no-print">
            <button
              type="button"
              onClick={onPrint}
              className="btn-primary flex items-center gap-2 rounded-xl bg-[#0f2a4f] px-5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#173b6b] transition cursor-pointer"
              title="Cetak Rekap Nilai Matematika"
            >
              <Printer size={15} />
              <span>Cetak Rekap</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
