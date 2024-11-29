import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Exchanges_List.css';
import Exchanges_Item from './Exchanges_Item';

function Exchanges_List() {

  const [exchanges , setExchanges] = useState([]);
  const [search, setSearch] = useState('');
  console.log('hi');

  // get API data
  useEffect(()=>{
    axios
    .get(
      'https://api.coingecko.com/api/v3/exchanges?per_page=50&page=1'
    )
    .then(res => {
      setExchanges(res.data);
      console.log('get data done');
    })
    .catch( (error) => {
      console.log(error);
      alert('Failed to fetch exchanges data. Please try again later.');
    });
  }, []);

  // search input handling
  const handleSearchChange = e => {
    setSearch(e.target.value)
  }

  const filteredExchanges = exchanges.filter(exchange =>
    exchange.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="exchanges-list-container">
      <div className="exchange-search">
        <div className="exchange-text">Search Exchange</div>
        <form>
          <input 
            type="text" 
            placeholder="Search" 
            className="exchange-input" 
            onChange={handleSearchChange}
          />
        </form>
      </div>

      {filteredExchanges.map(exchange => {
        return <Exchanges_Item
          key={exchange.id}
          name={exchange.name}
          image={exchange.image}
          trustScore={exchange.trust_score}
          scoreRank={exchange.trust_score_rank}
          volume={exchange.trade_volume_24h_btc}
          volumeNormalized={exchange.trade_volume_24h_btc_normalized}
        />;
      })}

    </div>
  );
}

export default Exchanges_List;