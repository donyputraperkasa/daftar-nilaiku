export type ScoreValue = number | null;

export interface StudentGrade {
  id: string;
  no: number;
  nama: string;
  jenisKelamin: 'L' | 'P';
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
  id: string;
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
  mataPelajaran: 'Matematika',
  guruPengampu: 'dony putra perkasa',
  tahunAjaran: '2026/2027',
  semester: 'Semester Ganjil',
  terakhirDiperbarui: '2 September 2026',
};

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
  gold: { type: 'gold', label: 'Emas', rangeText: '96 - 100', badgeName: 'Emas', color: '#92400e', bgColor: '#fffbeb', borderColor: '#f59e0b' },
  green: { type: 'green', label: 'Hijau', rangeText: '85 - 95', badgeName: 'Hijau', color: '#065f46', bgColor: '#ecfdf5', borderColor: '#10b981' },
  blue: { type: 'blue', label: 'Biru', rangeText: '75 - 84', badgeName: 'Biru', color: '#1e40af', bgColor: '#eff6ff', borderColor: '#3b82f6' },
  purple: { type: 'purple', label: 'Ungu', rangeText: '50 - 74', badgeName: 'Ungu', color: '#6b21a8', bgColor: '#faf5ff', borderColor: '#a855f7' },
  red: { type: 'red', label: 'Merah', rangeText: '< 50', badgeName: 'Merah', color: '#991b1b', bgColor: '#fef2f2', borderColor: '#ef4444' },
  moai: { type: 'moai', label: 'Belum Mengumpulkan', rangeText: 'Kosong', badgeName: 'Belum Mengumpulkan', color: '#475569', bgColor: '#f8fafc', borderColor: '#cbd5e1' },
};

export function getScoreCategory(score: ScoreValue | undefined): ScoreCategoryInfo {
  if (score === null || score === undefined || isNaN(score)) return SCORE_CATEGORIES.moai;
  if (score >= 96) return SCORE_CATEGORIES.gold;
  if (score >= 85) return SCORE_CATEGORIES.green;
  if (score >= 75) return SCORE_CATEGORIES.blue;
  if (score >= 50) return SCORE_CATEGORIES.purple;
  return SCORE_CATEGORIES.red;
}
