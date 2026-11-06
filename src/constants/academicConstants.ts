import type { AcademicMeta, BabConfig } from '../types';

export const ACADEMIC_INFO: AcademicMeta = {
  mataPelajaran: 'Matematika',
  guruPengampu: 'dony putra perkasa',
  tahunAjaran: '2026/2027',
  semester: 'Semester Ganjil',
  terakhirDiperbarui: '2 September 2026',
};

export const BAB_LIST: readonly BabConfig[] = [
  { num: 1, kuisKey: 'kuis1', tugasKey: 'tugas1', uhKey: 'uh1' },
  { num: 2, kuisKey: 'kuis2', tugasKey: 'tugas2', uhKey: 'uh2' },
  { num: 3, kuisKey: 'kuis3', tugasKey: 'tugas3', uhKey: 'uh3' },
];

