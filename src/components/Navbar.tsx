import React from 'react';
import { ACADEMIC_INFO } from '../data/gradesData';

export const Navbar: React.FC = () => {
  return (
    <header className="header-section">
      <img
        src="/logo.png"
        alt="Logo Yayasan BOPKRI"
        className="header-logo"
      />
      <h1 className="header-title">
        SMP BOPKRI 1 WATES
      </h1>
      <p className="header-subtitle">
        SMP BOPKRI 1 Wates &bull; Tahun Ajaran {ACADEMIC_INFO.tahunAjaran}
      </p>
    </header>
  );
};
