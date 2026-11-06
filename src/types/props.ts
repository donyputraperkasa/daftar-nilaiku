import type {
  BabConfig,
  ClassData,
  ScoreValue,
  StudentGrade,
  StudentWithClass,
} from './grades';

export interface ClassTabsProps {
  classes: ClassData[];
  selectedClassId: string;
  onSelectClass: (classId: string) => void;
  totalStudents: number;
  displayedCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onPrint: () => void;
}

export interface GradeTableProps {
  students: StudentWithClass[];
  currentClassTitle: string;
  onSelectStudent: (student: StudentGrade, classInfo: ClassData) => void;
}

export interface GradeDesktopTableProps {
  students: StudentWithClass[];
  onSelectStudent: (student: StudentGrade, classInfo: ClassData) => void;
  babList: readonly BabConfig[];
}

export interface GradeDesktopRowProps {
  student: StudentGrade;
  index: number;
  onSelect: () => void;
  babList: readonly BabConfig[];
}

export interface GradeMobileViewProps {
  students: StudentWithClass[];
  currentClassTitle: string;
  onSelectStudent: (student: StudentGrade, classInfo: ClassData) => void;
  babList: readonly BabConfig[];
}

export interface StudentMobileCardProps {
  student: StudentGrade;
  classInfo: ClassData;
  index: number;
  onSelect: () => void;
  babList: readonly BabConfig[];
}

export interface StudentDetailModalProps {
  student: StudentGrade | null;
  classInfo: ClassData | null;
  onClose: () => void;
}

export interface StudentMetricsBarProps {
  completedCount: number;
  avgScore: string | null;
  maxScore: number | null;
}

export interface StudentBabCardProps {
  num: number;
  kuis?: ScoreValue;
  tugas?: ScoreValue;
  uh?: ScoreValue;
}

export interface ScoreBadgeProps {
  score: ScoreValue | undefined;
}

export interface ScoreNumberBadgeProps {
  score: ScoreValue | undefined;
  label?: string;
}

export interface CreatorSignatureProps {
  className?: string;
}

