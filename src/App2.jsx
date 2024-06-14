import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './login/loginPage';
import FrontPage from './projectPages/navBar';
import Test from './login/testing';
import ResConfirmation from './projectPages/confirmationPage';
import SelectRoom from './projectPages/selectionPage';

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
        <Route path='/admin' element={<Test logout={handleLogout} />} />
        <Route path="*" element={loggedIn ? <Navigate to="/FrontPage/home" /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
