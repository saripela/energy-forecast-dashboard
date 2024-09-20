import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;