/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../views/LandingPage/LandingPage';
import { Register } from '../views/RegisterTable/Register';
import Login from '../views/Login/Login';

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/home/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
