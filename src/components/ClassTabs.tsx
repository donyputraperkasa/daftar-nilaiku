import React from 'react';
import { Building2, Layers, CheckCircle2, Search, X, Printer, RotateCcw } from 'lucide-react';
import { type ClassData } from '../data/gradesData';

interface ClassTabsProps {
  classes: ClassData[];
  selectedClassId: string;
  onSelectClass: (classId: string) => void;
  totalStudents: number;
  displayedCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onPrint: () => void;
}

export const ClassTabs: React.FC<ClassTabsProps> = ({
  classes,
  selectedClassId,
  onSelectClass,
  totalStudents,
  displayedCount,
  searchQuery,
  onSearchChange,
  onPrint,
}) => {
  const isFiltered = searchQuery !== '' || selectedClassId !== 'all';

  return (
    <div className="no-print">
      {/* 1. Dashboard Summary Cards */}
      <section className="dashboard-grid">
        {[
          { label: 'Total Siswa', value: totalStudents, icon: Building2 },
          { 
            label: 'Kategori Jenjang', 
            value: <>{classes.length} <span style={{ fontSize: '16px', fontWeight: 500, color: '#64748b' }}>Jenjang</span></>, 
            icon: Layers 
          },
          { label: 'Hasil Ditampilkan', value: displayedCount, icon: CheckCircle2 },
        ].map((item, i) => (
          <div key={i} className="dashboard-card">
            <h3 className="dashboard-card-title">
              <item.icon size={18} color="#2563eb" />
              <span>{item.label}</span>
            </h3>
            <p className="dashboard-card-value">{item.value}</p>
          </div>
        ))}
      </section>

      {/* 2. Search & Filter Bar */}
      <section className="search-filter-card">
        <div className="search-input-wrapper">
          <div className="search-icon-box"><Search size={20} color="#2563eb" /></div>
          <input
            type="text"
            placeholder="Cari nama siswa..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
            aria-label="Cari nama siswa"
          />
          {searchQuery && (
            <button type="button" onClick={() => onSearchChange('')} className="search-clear-btn" title="Hapus pencarian">
              <X size={15} />
            </button>
          )}
        </div>

        <div className="filter-chips-wrapper" role="group" aria-label="Filter kategori jenjang">
          <button
            type="button"
            onClick={() => onSelectClass('all')}
            className={`filter-chip ${selectedClassId === 'all' ? 'filter-chip-active' : ''}`}
          >
            <span>Semua</span>
            <span className="filter-chip-count">{totalStudents}</span>
          </button>

          {classes.map((cls) => (
            <button
              key={cls.id}
              type="button"
              onClick={() => onSelectClass(cls.id)}
              className={`filter-chip ${selectedClassId === cls.id ? 'filter-chip-active' : ''}`}
            >
              <span>{cls.namaKelas.split(' ')[0]} {cls.tingkat}</span>
              <span className="filter-chip-count">{cls.siswa.length}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 3. Action Buttons */}
      <section className="quick-links-wrap">
        <button type="button" onClick={onPrint} className="quick-link-btn quick-link-template" title="Cetak Rekap Nilai Siswa">
          <Printer size={18} />
          <span>Cetak Rekap Nilai</span>
        </button>

        {isFiltered && (
          <button
            type="button"
            onClick={() => { onSearchChange(''); onSelectClass('all'); }}
            className="quick-link-btn quick-link-record"
            title="Reset filter"
          >
            <RotateCcw size={16} />
            <span>Reset Filter</span>
          </button>
        )}
      </section>
    </div>
  );
};
