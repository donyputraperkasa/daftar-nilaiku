import type { ClassData } from '../types';
import { createSiswa } from '../utils/scoreUtils';

/**
 * PANDUAN PENGISIAN NILAI (GURU):
 * 1. Simbol `_` artinya nilai KOSONG / belum mengumpulkan (null).
 * 2. Format urutan nilai (9 kolom):
 *    [ Kuis 1, Tugas 1, UH 1,   Kuis 2, Tugas 2, UH 2,   Kuis 3, Tugas 3, UH 3 ]
 * 3. Nilai lurus sejajar ke bawah seperti kolom Excel, tidak akan terlompat-lompat!
 */
const _ = null;

export const CLASSES_DATA: ClassData[] = [
  {
    id: '7',
    tingkat: 7,
    namaKelas: 'Kelas VII (Tujuh)',
    jumlahSiswa: 2,
    siswa: [
      //                                   [  K1,  T1, UH1,   K2,  T2, UH2,   K3,  T3, UH3 ]
      createSiswa('7-01', 1, 'Febi', 'P', [80, 70, 78, 70, 70, 75, _, _, _]),
    ],
  },
  {
    id: '8',
    tingkat: 8,
    namaKelas: 'Kelas VIII (Delapan)',
    jumlahSiswa: 4,
    siswa: [
      //                                    [  K1,  T1, UH1,   K2,  T2, UH2,   K3,  T3, UH3 ]
      createSiswa('8-01', 1, 'Cisca', 'P', [100, 85, 75, 90, 90, 88, _, _, _]),
      createSiswa('8-02', 2, 'Adrian', 'L', [100, 60, 70, 70, 78, 27, _, _, _]),
      createSiswa('8-03', 3, 'Abeng', 'L', [90, 80, 70, 70, 78, 17, _, _, _]),
      createSiswa('8-04', 4, 'Nadine', 'P', [100, 85, 100, 100, 100, 96, _, _, _]),
    ],
  },
  {
    id: '9',
    tingkat: 9,
    namaKelas: 'Kelas IX (Sembilan)',
    jumlahSiswa: 5,
    siswa: [
      //                                   [  K1,  T1, UH1,   K2,  T2, UH2,   K3,  T3, UH3 ]
      createSiswa('9-01', 1, 'Bimo', 'L', [85, 80, 100, 100, 100, 0, _, _, _]),
      createSiswa('9-02', 2, 'Derry', 'L', [80, 75, 78, 80, 80, 76, _, _, _]),
      createSiswa('9-03', 3, 'Eca', 'P', [80, 80, 80, 55, 65, 0, _, _, _]),
      createSiswa('9-04', 4, 'Fajar', 'L', [90, 88, 100, 80, 85, 79, _, _, _]),
      createSiswa('9-05', 5, 'Ugra', 'L', [_, 75, 80, 80, 80, 10, 75, _, _]),
    ],
  },
];
