import type {
  GuideCategoryItem,
  ScoreCategoryInfo,
  ScoreCategoryType,
} from '../types';

export const SCORE_CATEGORIES: Record<ScoreCategoryType, ScoreCategoryInfo> = {
  gold: {
    type: 'gold',
    label: 'Emas',
    rangeText: '98 - 100',
    badgeName: 'Emas',
    color: '#92400e',
    bgColor: '#fffbeb',
    borderColor: '#f59e0b',
  },
  green: {
    type: 'green',
    label: 'Hijau',
    rangeText: '85 - 97',
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
  },
};

export const SCORE_COLOR_CLASSES: Record<string, string> = {
  green: 'bg-[#10b981] border-[#059669]',
  blue: 'bg-[#2563eb] border-[#1d4ed8]',
  purple: 'bg-[#8b5cf6] border-[#7c3aed]',
  red: 'bg-[#ef4444] border-[#dc2626]',
};

export const GUIDE_CATEGORIES: readonly GuideCategoryItem[] = [
  { label: 'Emas', range: '98 - 100', border: 'border-[#fde68a]', bg: 'bg-[#fffbeb]', text: 'text-[#b45309]', isCrown: true },
  { label: 'Hijau', range: '85 - 97', border: 'border-[#bbf7d0]', bg: 'bg-[#f0fdf4]', text: 'text-[#15803d]', dot: 'score-badge-green-circle' },
  { label: 'Biru', range: '75 - 84', border: 'border-[#bfdbfe]', bg: 'bg-[#eff6ff]', text: 'text-[#1d4ed8]', dot: 'bg-[#2563eb] border-[#1d4ed8]' },
  { label: 'Ungu', range: '50 - 74', border: 'border-[#e9d5ff]', bg: 'bg-[#faf5ff]', text: 'text-[#7e22ce]', dot: 'bg-[#8b5cf6] border-[#7c3aed]' },
  { label: 'Merah', range: '< 50', border: 'border-[#fecdd3]', bg: 'bg-[#fff1f2]', text: 'text-[#be123c]', dot: 'bg-[#ef4444] border-[#dc2626]' },
  { label: 'Belum Ada', range: 'Kosong', border: 'border-slate-200', bg: 'bg-slate-50', text: 'text-slate-700', isDash: true },
];

