import { useState, useMemo } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { ClassTabs } from './components/ClassTabs';
import { GradeTable } from './components/GradeTable';
import { StudentDetailModal } from './components/StudentDetailModal';
import { FloatingContact } from './components/FloatingContact';
import { Footer } from './components/Footer';
import { CLASSES_DATA, type ClassData, type StudentGrade } from './data/gradesData';

export function App() {
  const [selectedClassId, setSelectedClassId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Modal state
  const [selectedStudent, setSelectedStudent] = useState<StudentGrade | null>(null);
  const [selectedStudentClass, setSelectedStudentClass] = useState<ClassData | null>(null);

  // Total students count across all classes
  const totalStudents = useMemo(() => {
    return CLASSES_DATA.reduce((sum, c) => sum + c.siswa.length, 0);
  }, []);

  // Filtered List of Students by Class & Search Query
  const filteredStudents = useMemo(() => {
    const result: { student: StudentGrade; classInfo: ClassData }[] = [];
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
      {/* 1. Header (tatakelolaku style) */}
      <Navbar />

      {/* 2. Dashboard Summary Cards + Search & Filter Bar + Action Button */}
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

      {/* 3. Main Grade Table Area */}
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

      {/* 4. Student Mini Report Modal */}
      <StudentDetailModal
        student={selectedStudent}
        classInfo={selectedStudentClass}
        onClose={() => {
          setSelectedStudent(null);
          setSelectedStudentClass(null);
        }}
      />

      {/* 5. Floating WhatsApp Contact */}
      <FloatingContact />

      {/* 6. Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
