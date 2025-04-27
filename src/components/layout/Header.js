import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
// import logo from '../../images/logo.png';


const Header = () => {
  return (
    <>
        <div className="navbar">
            <div className="container">
                <Link to="/" className="brand">
                    {/* <img src={logo} alt="CryptoWave Logo" className="logo-img" /> */}
                    <h1>CryptoWave</h1>
                </Link>
    
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/market" className="nav-link">Market</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/exchanges" className="nav-link">Exchanges</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/FAQ" className="nav-link">FAQ</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header