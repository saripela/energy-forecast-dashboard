import React from 'react';
import Sidebar from '../components/common/Sidebar';


const DashboardLayout = ({ children, setView, view, isSidebarOpen }) => {
  return (
    <div className="dashboard-layout">
       <Sidebar setView={setView} view={view} isSidebarOpen={isSidebarOpen}/>
       
      <div className="dashboard-content">
        {children} {/* This will be the charts and data table */}
      </div>
     
    </div>
  );
};

export default DashboardLayout;