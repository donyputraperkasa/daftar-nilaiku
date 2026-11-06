import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { ClassTabs } from './components/ClassTabs';
import { GradeTable } from './components/GradeTable';
import { StudentDetailModal } from './components/StudentDetailModal';
import { FloatingContact } from './components/FloatingContact';
import { Footer } from './components/Footer';
import { CLASSES_DATA } from './data/studentsData';
import type { ClassData, StudentGrade, StudentWithClass } from './types';

export function App() {
  const [selectedClassId, setSelectedClassId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStudent, setSelectedStudent] = useState<StudentGrade | null>(null);
  const [selectedStudentClass, setSelectedStudentClass] = useState<ClassData | null>(null);

  const totalStudents = useMemo(() => {
    return CLASSES_DATA.reduce((sum, c) => sum + c.siswa.length, 0);
  }, []);

  const filteredStudents = useMemo(() => {
    const result: StudentWithClass[] = [];
    const query = searchQuery.toLowerCase().trim();

    CLASSES_DATA.forEach((cls) => {
      if (selectedClassId === 'all' || selectedClassId === cls.id) {
        cls.siswa.forEach((s) => {
          if (!query || s.nama.toLowerCase().includes(query)) {
            result.push({ student: s, classInfo: cls });
          }
        });
      }
    });

    return result;
  }, [selectedClassId, searchQuery]);

  const currentClassTitle = useMemo(() => {
    if (selectedClassId === 'all') return 'Semua Kelas (Kelas 7, 8, & 9)';
    const cls = CLASSES_DATA.find((c) => c.id === selectedClassId);
    return cls ? cls.namaKelas : 'Rekap Nilai';
  }, [selectedClassId]);

  return (
    <div className="app-container">
      <Navbar />

      <ClassTabs
        classes={CLASSES_DATA}
        selectedClassId={selectedClassId}
        onSelectClass={setSelectedClassId}
        totalStudents={totalStudents}
        displayedCount={filteredStudents.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onPrint={() => window.print()}
      />

      <main>
        <GradeTable
          students={filteredStudents}
          currentClassTitle={currentClassTitle}
          onSelectStudent={(student, classInfo) => {
            setSelectedStudent(student);
            setSelectedStudentClass(classInfo);
          }}
        />
      </main>

      <StudentDetailModal
        student={selectedStudent}
        classInfo={selectedStudentClass}
        onClose={() => {
          setSelectedStudent(null);
          setSelectedStudentClass(null);
        }}
      />

      <FloatingContact />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
