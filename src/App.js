import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './normalize.css';
import './App.css';
import HomePage from "./pages/Homepage";
import MarketPage from './pages/MarketPage'; 
import HistoryPage from './pages/HistoryPage';
import TradePlatformPage from './pages/TradePlatformPage';
import NewsPage from './pages/NewsPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />}> </Route>
        <Route path="/market" exact element={<MarketPage />}> </Route>
        <Route path="/history" exact element={<HistoryPage />}> </Route>
        <Route path="/tradeplatform" exact element={<TradePlatformPage />}> </Route>
        <Route path="/news" exact element={<NewsPage />}> </Route>
        <Route path="/:others" element={<Navigate replace to="/" />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
