import React from 'react'
import { useLocation } from 'react-router-dom';
import DefaultLayout from '../components/layout/DefaultLayout'
import History_Coin_Info from "../components/History_Coin_Info";
import History_Price from "../components/History_Price";
import './HistoryPage.css';

const HistoryPage = () => {
  // check NEED
  const location = useLocation();
  const state = location.state;

  if (!state) {
    return (
      <DefaultLayout>
        <div>Failed to fetch coin data. Please try again later.</div>
      </DefaultLayout>
    );
  }

  const {coinID, image, name, symbol, price, volume, priceChange, marketcap} = state;
  console.log("coinID in HistoryPage:", coinID);

  return (
    <DefaultLayout>
      <div className="history-page-container">
        <div className="coin-info-container">
          <History_Coin_Info
            image={image}
            name={name}
            symbol={symbol}
            price={price}
            volume={volume}
            priceChange={priceChange}
            marketcap={marketcap}
          />
        </div>
        <div className="history-chart-container">
          <History_Price coinID={coinID} />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default HistoryPage