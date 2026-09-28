import { type ClassData, type StudentGrade, type ScoreValue } from './gradesTypes';

/**
 * PANDUAN PENGISIAN NILAI (GURU):
 * 1. Simbol `_` artinya nilai KOSONG / belum mengumpulkan (null).
 * 2. Format urutan nilai (9 kolom):
 *    [ Kuis 1, Tugas 1, UH 1,   Kuis 2, Tugas 2, UH 2,   Kuis 3, Tugas 3, UH 3 ]
 * 3. Nilai lurus sejajar ke bawah seperti kolom Excel, tidak akan terlompat-lompat!
 */
const _ = null;

type NilaiArray = [
  ScoreValue, ScoreValue, ScoreValue, // Bab 1 (K1, T1, UH1)
  ScoreValue, ScoreValue, ScoreValue, // Bab 2 (K2, T2, UH2)
  ScoreValue, ScoreValue, ScoreValue  // Bab 3 (K3, T3, UH3)
];

const createSiswa = (
  id: string,
  no: number,
  nama: string,
  gender: 'L' | 'P',
  nilai: NilaiArray,
  catatanGuru: string = ''
): StudentGrade => ({
  id,
  no,
  nama,
  jenisKelamin: gender,
  kuis1: nilai[0],
  tugas1: nilai[1],
  uh1: nilai[2],
  kuis2: nilai[3],
  tugas2: nilai[4],
  uh2: nilai[5],
  kuis3: nilai[6],
  tugas3: nilai[7],
  uh3: nilai[8],
  catatanGuru,
});

export const CLASSES_DATA: ClassData[] = [
  {
    id: '7',
    tingkat: 7,
    namaKelas: 'Kelas VII (Tujuh)',
    jumlahSiswa: 2,
    siswa: [
      //                                   [  K1,  T1, UH1,   K2,  T2, UH2,   K3,  T3, UH3 ]
      createSiswa('7-01', 1, 'Febi',  'P', [  80,  70,  78,    _,   _,   _,    _,   _,   _ ]),
      createSiswa('7-02', 2, 'There', 'P', [   _,   _,   _,    _,   _,   _,    _,   _,   _ ]),
    ],
  },
  {
    id: '8',
    tingkat: 8,
    namaKelas: 'Kelas VIII (Delapan)',
    jumlahSiswa: 4,
    siswa: [
      //                                    [  K1,  T1, UH1,   K2,  T2, UH2,   K3,  T3, UH3 ]
      createSiswa('8-01', 1, 'Cisca',  'P', [ 100,  85,  75,    _,   _,   _,    _,   _,   _ ]),
      createSiswa('8-02', 2, 'Adrian', 'L', [ 100,  60,   _,    _,   _,   _,    _,   _,   _ ]),
      createSiswa('8-03', 3, 'Abeng',  'L', [  90,  80,  70,    _,   _,   _,    _,   _,   _ ]),
      createSiswa('8-04', 4, 'Nadine', 'P', [ 100,  85, 100,    _,   _,   _,    _,   _,   _ ]),
    ],
  },
  {
    id: '9',
    tingkat: 9,
    namaKelas: 'Kelas IX (Sembilan)',
    jumlahSiswa: 5,
    siswa: [
      //                                   [  K1,  T1, UH1,   K2,  T2, UH2,   K3,  T3, UH3 ]
      createSiswa('9-01', 1, 'Bimo',  'L', [  85,  80,   100,    _,   _,   _,    _,   _,   _ ]),
      createSiswa('9-02', 2, 'Derry', 'L', [   _,  75,   78,    _,   _,   _,    _,   _,   _ ]),
      createSiswa('9-03', 3, 'Eca',   'P', [  80,  80,   _,    _,   _,   _,    _,   _,   _ ]),
      createSiswa('9-04', 4, 'Fajar', 'L', [  90,  88,   100,    _,   _,   _,    _,   _,   _ ]),
      createSiswa('9-05', 5, 'Ugra',  'L', [   _,  75,   _,    _,   _,   _,    _,   _,   _ ]),
    ],
  },
];
