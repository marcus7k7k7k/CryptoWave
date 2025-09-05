import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Coin.css'

const Coin = ({ coinID, rank, image, name, symbol, price, volume, priceChange, marketcap }) => {
  
    const navigate = useNavigate();

    // pass data to historypage
    const handleCoinClick = () => {
        navigate(`/history/${coinID}`, {
            state:{coinID, rank, image, name, symbol, price, volume, priceChange, marketcap}
        });
    }
  
    return (
        <div className='coin-container' onClick={handleCoinClick} style={{cursor:'pointer'}}>
            <div className="coin-row">
                <div className="coin-rank">
                    <p>{rank}</p>
                </div>
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1 className="coin-name">{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price.toLocaleString()}</p>
                    <p className="coin-volume">${volume ?volume.toLocaleString() : 'N/A'}</p>
                    { priceChange !== null && priceChange !== undefined ?
                    (
                        <p className={`coin-percent ${priceChange > 0 ? 'green' : 'red' }`}>
                            {priceChange.toFixed(2)}%
                        </p> 
                    ):(
                        <p className="coin-percent">N/A</p>
                    )}
                    <p className="coin-marketcap">${marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
  )
}

export default Coin