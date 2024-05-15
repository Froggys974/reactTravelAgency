import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../components/index/index';
import ErrorPage from '../error-page';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      {/* Ajoutez d'autres routes si nécessaire */}
      <Route path="*" element={<ErrorPage />} /> {/* Catch-all route */}

    </Routes>
  );
}

export default AppRoutes;