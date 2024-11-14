import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Market_Price.css';
import Coin from './Coin';


function Market_Price() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=>{
    axios
    .get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1'
    )
    .then(res => {
      setCoins(res.data);
      console.log('get done')
    })
    .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="coin-app">
      <div className="coin-search">
        <div className="coin-text">Search a currency</div>
        <form>
          <input 
            type="text" 
            placeholder="Search" 
            className="coin-input" 
            onChange={handleChange}
          />
        </form>

      </div>
      {filteredCoins.map(coin => {
        return <Coin
          key={coin.id}
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
