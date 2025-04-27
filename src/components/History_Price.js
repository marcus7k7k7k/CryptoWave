import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, plugins } from 'chart.js';
import './History_Price.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function History_Price( {coinID} ) {

  const [coinHistory, setCoinHistory] = useState([]);
  const [currency, setCurrency] = useState('usd');  // default USD
  const [timeRange, setTimeRange] = useState(1);  // default 24hr
  const [visibleTicksCount, setVisibleTicksCount] = useState(8); // default show 8 labels

  // Coin Historical Chart Data by ID
  useEffect(()=>{
    if (!coinID) return;

    axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=${currency}&days=${timeRange}`
    )
    .then(res => {
      setCoinHistory(res.data.prices);
    })
    .catch( (error) => {
      console.log(error);
      alert('Failed to fetch coin historical data. Please try again later.');
    });
  }, [coinID, currency, timeRange]);

  // Prepare Chart Data
  const labels = coinHistory.map((priceData) => {
    const date = new Date(priceData[0]);

    return timeRange <= 1 
    ?  `${date.getHours()}:00` // < 1 day show hours
    :  `${date.getMonth() + 1 }/${date.getDate()}`; // > 1 day show mm/dd
  
  });

  const prices = coinHistory.map((priceData) => priceData[1]);

  // adjust labels num by time range
  useEffect(() => {
    switch (timeRange) 
    {
      case 1: 
        setVisibleTicksCount(8); 
        break;
      case 7: 
        setVisibleTicksCount(7); 
        break;
      case 30: 
        setVisibleTicksCount(6); 
        break;
      case 90: 
        setVisibleTicksCount(9); 
        break;
      case 365: 
        setVisibleTicksCount(12); 
        break;
      default:
        setVisibleTicksCount(10);
        break;
    }
  }, [timeRange]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: `${coinID} Price (${currency})`,
        data: prices,
        borderColor: '#F0B90B',
        borderWidth: 1,
        fill: false,
        tension: 0.1 // curve
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        grid: {
          color: '#666', 
        },
        ticks: {
          color: '#fff', 
          callback: function (value, index, label_array) 
          {
            const interval = Math.ceil(label_array.length / visibleTicksCount); // label interval
            if (index % interval === 0) {
              return this.getLabelForValue(value); // show label
            }
            return null; 
          }
        },
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        grid: {
          color: '#666', 
        },
        ticks: {
          color: '#fff', 
        },
        title: {
          display: true,
          text: `Price in ${currency.toLocaleUpperCase()}`
        }
      }
    }
  };

  return (
    <div className="history-price-container">
      <div className="chart-variable-row">
        {/* Currency Select */}
        <div className="currency-select">
          <label htmlFor="currency">Select Currency: </label>
          <select id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="usd">USD-$</option>
            <option value="twd">TWD-NT$</option>
            <option value="eur">EUR-€</option>
            <option value="jpy">JPY-¥</option>
          </select>
        </div>

        {/* Time Range Button */}
        <div className="time-range-buttons">
          <button onClick={() => setTimeRange(1)}>1D</button>
          <button onClick={() => setTimeRange(7)}>7D</button>
          <button onClick={() => setTimeRange(30)}>1M</button>
          <button onClick={() => setTimeRange(90)}>3M</button>
          <button onClick={() => setTimeRange(365)}>1Y</button>
        </div>
      </div>

      {/* Show Data Chart */}
      <div className="coin-history-chart">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default History_Price;
