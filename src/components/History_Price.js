import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Market_Price.css';
import './History_Price.css';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function History_Price( {coinID} ) {

  const [coinHistory, setCoinHistory] = useState([]);

  // Coin Historical Chart Data by ID
  useEffect(()=>{
    if (!coinID) return;

    axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=30`
    )
    .then(res => {
      setCoinHistory(res.data.prices);
      // console.log('get done')
    })
    .catch( (error) => {
      console.log(error);
      alert('Failed to fetch coin data. Please try again later.');
    });
  }, [coinID]);

  // Prepare Chart Data
  const labels = coinHistory.map((priceData) => {
    const date = new Date(priceData[0]);
    return `${date.getMonth()}/${date.getDate()}`;
  });
  const prices = coinHistory.map((priceData) => priceData[1]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: `${coinID} Price (USD)`,
        data: prices,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
        tension: 0.1
      }
    ]
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Price in USD'
        }
      }
    }
  };

  return (
    <div className="coin-app">
      <div className="coin-search">
        <div className="coin-text">Coin History</div>
    
        {/* Show Data Chart */}
        <div className="coin-history-chart">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default History_Price;
