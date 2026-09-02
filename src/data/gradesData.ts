/**
 * ============================================================================
 * PANDUAN PENGISIAN DATA NILAI MANUAL (GURU)
 * ============================================================================
 * Anda dapat mengubah atau mengisi nilai siswa secara manual di sini.
 * Cukup isi angka (0 - 100) atau biarkan null / kosong jika belum mengumpulkan.
 *
 * KATEGORI VISUAL NILAI:
 * 👑 Emas Bersinar    : 96 - 100 (Istimewa)
 * 🟢 Lingkaran Hijau : 85 - 95  (Sangat Baik)
 * 🔵 Lingkaran Biru  : 75 - 84  (Baik)
 * 🟣 Lingkaran Ungu  : 50 - 74  (Cukup)
 * 🔴 Lingkaran Merah : < 50     (Perlu Bimbingan)
 * 🗿 Moai            : null     (Belum Mengumpulkan)
 * ============================================================================
 */

export type ScoreValue = number | null;

export interface StudentGrade {
  id: string;
  no: number;
  nama: string;
  jenisKelamin: 'L' | 'P';
  // 9 Komponen Nilai (Kuis 1-3, Tugas 1-3, UH 1-3)
  kuis1: ScoreValue;
  tugas1: ScoreValue;
  uh1: ScoreValue;
  kuis2: ScoreValue;
  tugas2: ScoreValue;
  uh2: ScoreValue;
  kuis3: ScoreValue;
  tugas3: ScoreValue;
  uh3: ScoreValue;
  catatanGuru?: string;
}

export interface ClassData {
  id: string; // '7', '8', '9'
  tingkat: number;
  namaKelas: string;
  jumlahSiswa: number;
  siswa: StudentGrade[];
}

export interface AcademicMeta {
  mataPelajaran: string;
  guruPengampu: string;
  tahunAjaran: string;
  semester: string;
  terakhirDiperbarui: string;
}

export const ACADEMIC_INFO: AcademicMeta = {
  mataPelajaran: "Matematika",
  guruPengampu: "dony putra perkasa",
  tahunAjaran: "2026/2027",
  semester: "Semester Ganjil",
  terakhirDiperbarui: "2 September 2026",
};

/**
 * DAFTAR SISWA PER KELAS
 * - Kelas 7: Febi, There (2 Siswa)
 * - Kelas 8: Cisca, Adrian, Abeng, Nadine (4 Siswa)
 * - Kelas 9: Bimo, Derry, Eca, Fajar, Ugra (5 Siswa)
 */
export const CLASSES_DATA: ClassData[] = [
  {
    id: "7",
    tingkat: 7,
    namaKelas: "Kelas VII (Tujuh)",
    jumlahSiswa: 2,
    siswa: [
      {
        id: "7-01",
        no: 1,
        nama: "Febi",
        jenisKelamin: "P",
        kuis1: null,
        tugas1: 70,
        uh1: null,
        kuis2: null,
        tugas2: null,
        uh2: null,
        kuis3: null,
        tugas3: null,
        uh3: null,
        catatanGuru: "",
      },
      {
        id: "7-02",
        no: 2,
        nama: "There",
        jenisKelamin: "P",
        kuis1: null,
        tugas1: null,
        uh1: null,
        kuis2: null,
        tugas2: null,
        uh2: null,
        kuis3: null,
        tugas3: null,
        uh3: null,
        catatanGuru: "",
      },
    ],
  },
  {
    id: "8",
    tingkat: 8,
    namaKelas: "Kelas VIII (Delapan)",
    jumlahSiswa: 4,
    siswa: [
      {
        id: "8-01",
        no: 1,
        nama: "Cisca",
        jenisKelamin: "P",
        kuis1: null,
        tugas1: 85,
        uh1: null,
        kuis2: null,
        tugas2: null,
        uh2: null,
        kuis3: null,
        tugas3: null,
        uh3: null,
        catatanGuru: "",
      },
      {
        id: "8-02",
        no: 2,
        nama: "Adrian",
        jenisKelamin: "L",
        kuis1: null,
        tugas1: 60,
        uh1: null,
        kuis2: null,
        tugas2: null,
        uh2: null,
        kuis3: null,
        tugas3: null,
        uh3: null,
        catatanGuru: "",
      },
      {
        id: "8-03",
        no: 3,
        nama: "Abeng",
        jenisKelamin: "L",
        kuis1: null,
        tugas1: null,
        uh1: null,
        kuis2: null,
        tugas2: null,
        uh2: null,
        kuis3: null,
        tugas3: null,
        uh3: null,
        catatanGuru: "",
      },
      {
        id: "8-04",
        no: 4,
        nama: "Nadine",
        jenisKelamin: "P",
        kuis1: null,
        tugas1: 85,
        uh1: null,
        kuis2: null,
        tugas2: null,
        uh2: null,
        kuis3: null,
        tugas3: null,
        uh3: null,
        catatanGuru: "",
      },
    ],
  },
  {
    id: "9",
    tingkat: 9,
    namaKelas: "Kelas IX (Sembilan)",
    jumlahSiswa: 5,
    siswa: [
      {
        id: "9-01",
        no: 1,
        nama: "Bimo",
        jenisKelamin: "L",
        kuis1: null,
        tugas1: 80,
        uh1: null,
        kuis2: null,
        tugas2: null,
        uh2: null,
        kuis3: null,
        tugas3: null,
        uh3: null,
        catatanGuru: "",
      },
      {
        id: "9-02",
        no: 2,
        nama: "Derry",
        jenisKelamin: "L",
        kuis1: null,
        tugas1: 75,
        uh1: null,
        kuis2: null,
        tugas2: null,
        uh2: null,
        kuis3: null,
        tugas3: null,
        uh3: null,
        catatanGuru: "",
      },
      {
        id: "9-03",
        no: 3,
        nama: "Eca",
        jenisKelamin: "P",
        kuis1: null,
        tugas1: null,
        uh1: null,
        kuis2: null,
        tugas2: null,
        uh2: null,
        kuis3: null,
        tugas3: null,
        uh3: null,
        catatanGuru: "",
      },
      {
        id: "9-04",
        no: 4,
        nama: "Fajar",
        jenisKelamin: "L",
        kuis1: null,
        tugas1: 88,
        uh1: null,
        kuis2: null,
        tugas2: null,
        uh2: null,
        kuis3: null,
        tugas3: null,
        uh3: null,
        catatanGuru: "",
      },
      {
        id: "9-05",
        no: 5,
        nama: "Ugra",
        jenisKelamin: "L",
        kuis1: null,
        tugas1: 75,
        uh1: null,
        kuis2: null,
        tugas2: null,
        uh2: null,
        kuis3: null,
        tugas3: null,
        uh3: null,
        catatanGuru: "",
      },
    ],
  },
];

export type ScoreCategoryType = 'gold' | 'green' | 'blue' | 'purple' | 'red' | 'moai';

export interface ScoreCategoryInfo {
  type: ScoreCategoryType;
  label: string;
  rangeText: string;
  badgeName: string;
  color: string;
  bgColor: string;
  borderColor: string;
  emoji?: string;
}

export const SCORE_CATEGORIES: Record<ScoreCategoryType, ScoreCategoryInfo> = {
  gold: {
    type: 'gold',
    label: 'Emas',
    rangeText: '96 - 100',
    badgeName: 'Emas',
    color: '#92400e',
    bgColor: '#fffbeb',
    borderColor: '#f59e0b',
  },
  green: {
    type: 'green',
    label: 'Hijau',
    rangeText: '85 - 95',
    badgeName: 'Hijau',
    color: '#065f46',
    bgColor: '#ecfdf5',
    borderColor: '#10b981',
  },
  blue: {
    type: 'blue',
    label: 'Biru',
    rangeText: '75 - 84',
    badgeName: 'Biru',
    color: '#1e40af',
    bgColor: '#eff6ff',
    borderColor: '#3b82f6',
  },
  purple: {
    type: 'purple',
    label: 'Ungu',
    rangeText: '50 - 74',
    badgeName: 'Ungu',
    color: '#6b21a8',
    bgColor: '#faf5ff',
    borderColor: '#a855f7',
  },
  red: {
    type: 'red',
    label: 'Merah',
    rangeText: '< 50',
    badgeName: 'Merah',
    color: '#991b1b',
    bgColor: '#fef2f2',
    borderColor: '#ef4444',
  },
  moai: {
    type: 'moai',
    label: 'Belum Mengumpulkan',
    rangeText: 'Kosong',
    badgeName: 'Belum Mengumpulkan',
    color: '#475569',
    bgColor: '#f8fafc',
    borderColor: '#cbd5e1',
    emoji: '🗿',
  },
};

export function getScoreCategory(score: ScoreValue | undefined): ScoreCategoryInfo {
  if (score === null || score === undefined || isNaN(score)) {
    return SCORE_CATEGORIES.moai;
  }
  if (score >= 96) return SCORE_CATEGORIES.gold;
  if (score >= 85) return SCORE_CATEGORIES.green;
  if (score >= 75) return SCORE_CATEGORIES.blue;
  if (score >= 50) return SCORE_CATEGORIES.purple;
  return SCORE_CATEGORIES.red;
}
