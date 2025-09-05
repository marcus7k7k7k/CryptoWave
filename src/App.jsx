import React from 'react';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import './normalize.css';
import './App.css';
import HomePage from "./pages/Homepage";
import MarketPage from './pages/MarketPage'; 
import HistoryPage from './pages/HistoryPage';
import ExchangesPage from './pages/ExchangesPage';
import FAQPage from './pages/FAQPage';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/market" element={<MarketPage />}> </Route>
        <Route path="/history/:coinID" element={<HistoryPage />}> </Route>
        <Route path="/exchanges" element={<ExchangesPage />}> </Route>
        <Route path="/FAQ" element={<FAQPage />}> </Route>
        <Route path="*" element={<Navigate replace to="/" />}> </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
