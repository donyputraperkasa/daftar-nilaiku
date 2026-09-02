import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { ClassTabs } from './components/ClassTabs';
import { GradeTable } from './components/GradeTable';
import { StudentDetailModal } from './components/StudentDetailModal';
import { FloatingContact } from './components/FloatingContact';
import { Footer } from './components/Footer';
import { 
  CLASSES_DATA, 
  type ClassData, 
  type StudentGrade 
} from './data/gradesData';

export function App() {
  const [selectedClassId, setSelectedClassId] = useState<string>('all');
  
  // Modal state
  const [selectedStudent, setSelectedStudent] = useState<StudentGrade | null>(null);
  const [selectedStudentClass, setSelectedStudentClass] = useState<ClassData | null>(null);

  // Flattened & Filtered List of Students by Class
  const filteredStudents = useMemo(() => {
    const result: { student: StudentGrade; classInfo: ClassData }[] = [];

    if (selectedClassId === 'all') {
      CLASSES_DATA.forEach((cls) => {
        cls.siswa.forEach((s) => {
          result.push({ student: s, classInfo: cls });
        });
      });
    } else {
      const cls = CLASSES_DATA.find((c) => c.id === selectedClassId);
      if (cls) {
        cls.siswa.forEach((s) => {
          result.push({ student: s, classInfo: cls });
        });
      }
    }

    return result;
  }, [selectedClassId]);

  const currentClassTitle = useMemo(() => {
    if (selectedClassId === 'all') return 'Semua Kelas (Kelas 7, 8, & 9)';
    const cls = CLASSES_DATA.find((c) => c.id === selectedClassId);
    return cls ? cls.namaKelas : 'Rekap Nilai';
  }, [selectedClassId]);

  const handleSelectStudent = (student: StudentGrade, classInfo: ClassData) => {
    setSelectedStudent(student);
    setSelectedStudentClass(classInfo);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
    setSelectedStudentClass(null);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Header / Kop Tengah Persis Referensi */}
      <Navbar onPrint={handlePrint} />

      {/* 2. Class Selector Tabs Rata Tengah */}
      <ClassTabs
        classes={CLASSES_DATA}
        selectedClassId={selectedClassId}
        onSelectClass={setSelectedClassId}
      />

      {/* 3. Main Grade Table Area dengan Ruang Bawah Luas */}
      <main style={{ flex: 1, paddingBottom: '100px' }}>
        <div className="container">
          <GradeTable
            students={filteredStudents}
            currentClassTitle={currentClassTitle}
            onSelectStudent={handleSelectStudent}
          />
        </div>
      </main>

      {/* 4. Student Mini Report Modal */}
      <StudentDetailModal
        student={selectedStudent}
        classInfo={selectedStudentClass}
        onClose={handleCloseModal}
      />

      {/* 5. Floating Contact (Hallo BOPKRI) */}
      <FloatingContact />

      {/* 6. Footer BOPKRI */}
      <Footer />
    </div>
  );
}

export default App;
