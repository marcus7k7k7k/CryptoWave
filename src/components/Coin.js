import React from 'react';
import './Coin.css'

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap, onClick }) => {
  return (
    <div className='coin-container' onClick={onClick} style={{cursor:'pointer'}}>
        <div className="coin-row">
            <div className="coin">
                <img src={image} alt="crypto" />
                <h1>{name}</h1>
                <p className="coin-symbol">{symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">${price}</p>
                <p className="coni-volume">${volume ?volume.toLocaleString() : 'N/A'}</p>
                { priceChange !== null && priceChange !== undefined ?
                (
                    <p className={`coin-percent ${priceChange > 0 ? 'green' : 'red' }`}>
                        {priceChange.toFixed(2)}%
                    </p> 
                ):(
                    <p className="coin-percent">N/A</p>
                )}
                <p className="coin-marketcap">Mkt Cap: ${marketcap.toLocaleString()}</p>
            </div>
        </div>

    </div>
  )
}

export default Coin