import React from 'react';
import Sidebar from '../components/common/Sidebar';
import Filters from '../components/dashboard/Filters';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        {children} {/* This will be the charts and data table */}
      </div>
      <Filters />
    </div>
  );
};

export default DashboardLayout;