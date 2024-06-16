// src/App1.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './login/loginPage';
import FrontPage from './projectPages/navBar';
import Admin from './login/AdminPage'; // Import the updated Admin component
import ResConfirmation from './projectPages/confirmationPage';
import SelectRoom from './projectPages/selectionPage';
import Checkout from './projectPages/checkOut'; // Import the Checkout component

import Profil from './projectPages/Profile';
import Compte from './projectPages/Compte';


const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

export default function App1() {
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());

  useEffect(() => {
    const handleStorageChange = () => {
      setLoggedIn(isAuthenticated());
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/FrontPage/*' element={<FrontPage logout={handleLogout} />} />
        <Route path='/select' element={<SelectRoom />} />
        <Route path='/confirm' element={<ResConfirmation />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/admin' element={<Admin logout={handleLogout} />} />
        <Route path='/compte' element={<Compte />} /> {/* Add this line */}
        <Route path='/profil' element={<Profil />} /> {/* Add this line */}
        <Route path="*" element={loggedIn ? <Navigate to="/FrontPage/home" /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
