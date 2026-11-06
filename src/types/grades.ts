export type ScoreValue = number | null;

export type GenderType = 'L' | 'P';

export type ScoreCategoryType = 'gold' | 'green' | 'blue' | 'purple' | 'red' | 'moai';

export type KuisKey = 'kuis1' | 'kuis2' | 'kuis3';
export type TugasKey = 'tugas1' | 'tugas2' | 'tugas3';
export type UhKey = 'uh1' | 'uh2' | 'uh3';

export type NilaiArray = [
  ScoreValue, ScoreValue, ScoreValue, // Bab 1 (K1, T1, UH1)
  ScoreValue, ScoreValue, ScoreValue, // Bab 2 (K2, T2, UH2)
  ScoreValue, ScoreValue, ScoreValue  // Bab 3 (K3, T3, UH3)
];

export interface StudentGrade {
  id: string;
  no: number;
  nama: string;
  jenisKelamin: GenderType;
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

export interface StudentWithClass {
  student: StudentGrade;
  classInfo: ClassData;
}

export interface AcademicMeta {
  mataPelajaran: string;
  guruPengampu: string;
  tahunAjaran: string;
  semester: string;
  terakhirDiperbarui: string;
}

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

export interface BabConfig {
  num: number;
  kuisKey: KuisKey;
  tugasKey: TugasKey;
  uhKey: UhKey;
}

export interface GuideCategoryItem {
  label: string;
  range: string;
  border: string;
  bg: string;
  text: string;
  dot?: string;
  isCrown?: boolean;
  isDash?: boolean;
}

