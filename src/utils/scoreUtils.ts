import type {
  GenderType,
  NilaiArray,
  ScoreCategoryInfo,
  ScoreValue,
  StudentGrade,
} from '../types';
import { SCORE_CATEGORIES } from '../constants';

export function getScoreCategory(score: ScoreValue | undefined): ScoreCategoryInfo {
  if (score === null || score === undefined || isNaN(score)) return SCORE_CATEGORIES.moai;
  if (score >= 98) return SCORE_CATEGORIES.gold;
  if (score >= 85) return SCORE_CATEGORIES.green;
  if (score >= 75) return SCORE_CATEGORIES.blue;
  if (score >= 50) return SCORE_CATEGORIES.purple;
  return SCORE_CATEGORIES.red;
}

export function isGlossyGreen(score: ScoreValue | undefined): boolean {
  if (score === null || score === undefined || isNaN(score)) return false;
  return score >= 90 && score < 98;
}

export function createSiswa(
  id: string,
  no: number,
  nama: string,
  gender: GenderType,
  nilai: NilaiArray,
  catatanGuru: string = ''
): StudentGrade {
  return {
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
  };
}

