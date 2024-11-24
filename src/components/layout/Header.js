import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
        <div class="navbar">
            <div class="container">
                <a href="#!" class="brand">
                    <h1>CryptoWave</h1>
                </a>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link">
                            <Link to="/">Home</Link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <Link to="/market">Market</Link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <Link to="/tradeplatform">TradePlatform</Link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <Link to="/news">News</Link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <Link to="/FAQ">FAQ</Link>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header