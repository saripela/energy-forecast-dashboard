import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes'; // Import the routing component
import './App.css';  // Ensure your global CSS is imported here

function App() {
  return (
    <div>
      
      <AppRoutes />
    </div>
  );
}

export default App;
