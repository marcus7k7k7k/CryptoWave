import React from 'react';
import'./History_Coin_Info.css'

const History_Coin_Info = ( {image, name, symbol, price, volume, priceChange, marketcap} ) => {
    return (
        <div className='coin-info-container'>
            <div className="coin">
                <img src={image} alt="crypto" />
                <h1>{name}</h1>
                <p className="coin-symbol">{symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">Price:  ${price}</p>
                <p className="coin-volume">Volume:  ${volume ?volume.toLocaleString() : 'N/A'}</p>
                { priceChange !== null && priceChange !== undefined ?
                (
                    <p className={`coin-percent ${priceChange > 0 ? 'green' : 'red' }`}>
                        Price Change:  {priceChange.toFixed(2)}%
                    </p> 
                ):(
                    <p className="coin-percent">N/A</p>
                )}
                <p className="coin-marketcap">Mkt Cap:  ${marketcap.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default History_Coin_Info