/**
 * @author Joel Kemkeng
 * @description Point d'entrée de l'application
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/wallet/detail-transaction/MainLayout';
import HomePage from './pages/HomePage';
import WalletComponentsPage from './pages/wallet/detail-transaction/WalletComponentsPage';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wallet" element={<WalletComponentsPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
