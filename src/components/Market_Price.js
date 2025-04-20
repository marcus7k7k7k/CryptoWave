import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Market_Price.css';
import Coin from './Coin';
import './Coin.css';

function Market_Price() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  // get API data
  useEffect(()=>{
    axios
    .get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1'
    )
    .then(res => {
      setCoins(res.data);
    })
    .catch( (error) => {
      console.log(error);
      alert('Failed to fetch coin data. Please try again later.');
    });
  }, []);

  // search input handling
  const handleSearchChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="coin-app">
      <div className="coin-search">
        <div className="coin-text">Search a Currency</div>
        <form>
          <input 
            type="text" 
            placeholder="Search" 
            className="coin-input" 
            onChange={handleSearchChange}
          />
        </form>
      </div>

      <div className='coin-header'>
        <div className="coin-row">
          <div className="coin-rank">
            <p>#</p>
          </div> 
          <div className="coin">
            <p className="coin-space"></p>
            <p className="coin-name">Coin</p>
            <p className="coin-symbol">abbr.</p>
          </div>
          <div className="coin-data">
            <p className="coin-price">Price</p>
            <p className="coin-volume">Volume</p>
            <p className="coin-percent">Price Change</p>
            <p className="coin-marketcap">Market Cap</p>
          </div>
        </div>
      </div>

      {filteredCoins.map(coin => {
        return <Coin
          key={coin.id}
          coinID={coin.id}
          rank={coin.market_cap_rank}
          image={coin.image}
          name={coin.name}
          symbol={coin.symbol}
          price={coin.current_price}
          volume={coin.total_volume}
          priceChange={coin.market_cap_change_percentage_24h}
          marketcap={coin.market_cap}
        />;
      })}

    </div>
  );
}

export default Market_Price;
