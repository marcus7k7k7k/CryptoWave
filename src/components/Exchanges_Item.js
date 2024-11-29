import React from 'react'
import './Exchanges_Item.css'

const Exchanges_Item = ({ name, image, trustScore, scoreRank, volume, volumeNormalized }) => {
  
  return (
    <div className='exchange-item-container'>
      <div className="exchange-row">
        <div className="exchange-rank">
          <p>{scoreRank}</p>
        </div>
        <div className="exchange">
          <img src={image} alt="exchange" />
          <h1>{name}</h1>
        </div>
        <div className="exchange-data">
          <p className="exchange-trustScore">{trustScore}/10</p>
          <p className="exchange-volume">${volume ?volume.toLocaleString() : 'N/A'}</p>
          <p className="exchange-volumeNormalized">${volumeNormalized ?volumeNormalized.toLocaleString() : 'N/A'}</p>
        </div>
      </div>
    </div>
  )
}

export default Exchanges_Item