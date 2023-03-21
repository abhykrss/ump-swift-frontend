/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../views/LandingPage/LandingPage';
import { Register } from '../views/RegisterTable/Register';
import Login from '../views/Login/Login';
import { SaveToPdf } from '../downloadPDF/components';
import { useAppSelector } from '../store/constants';

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/home/register" element={<Register />} />
        <Route path="/home/register/exportPdf" element={<SaveToPdf />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
