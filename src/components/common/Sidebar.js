import React from 'react';

const Sidebar = ({ setView, view, isSidebarOpen }) => {
  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <ul>
        <li
          onClick={() => setView('Overall')}
          className={view === 'Overall' ? 'active' : ''}
        >
          Overview
        </li>
        <li
          onClick={() => setView('Appliances')}
          className={view === 'Appliances' ? 'active' : ''}
        >
          Appliances
        </li>
        <li
          onClick={() => setView('Reports')}
          className={view === 'Reports' ? 'active' : ''}
        >
          Reports
        </li>
        
        <li
          onClick={() => setView('Portfolio')}
          className={view === 'Portfolio' ? 'active' : ''}
        >
          Portfolio
        </li>
        <li
          className="disabled"
          onClick={(e) => e.preventDefault()} // Prevent click event
        >
          Alerts
        </li>
        <li
          className="disabled"
          onClick={(e) => e.preventDefault()} // Prevent click event
        >
          Help & Support
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
