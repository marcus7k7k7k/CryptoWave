import React from 'react'
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";  
import DefaultLayout from '../components/layout/DefaultLayout'
import './Homepage.css'

const Homepage = () => {

  const navigate = useNavigate();
  const particlesInit = async (engine) => {
    console.log(engine); 
    await loadSlim(engine); 
  };

  return (
    <DefaultLayout>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "#1a1a1c" },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#FFD700", "#FFC107", "#FFA500"],
            },
            links: {
              enable: true,        
              color: "#FFD700",     
              distance: 160,      
              opacity: 0.3,     
              width: 1,
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.6,
            },
            size: {
              value: { min: 1, max: 5 },
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              outModes: {
                default: "bounce",
              },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="home-container">
        <div className="hero">
          <h1 className="hero-title">CryptoWave</h1>
          <p className="hero-subtitle">Your All-in-One Cryptocurrency Dashboard</p>
          <button className="hero-button" onClick={() => navigate('/market')}>
            View Market
          </button>
        </div>

        <div className="features">
          <div className="feature-card" onClick={() => navigate('/market')}>
            <h2>Market</h2>
            <p>Live Cryptocurrency Prices</p>
          </div>
          <div className="feature-card" onClick={() => navigate('/exchange')}>
            <h2>Exchanges</h2>
            <p>Compare Top Exchanges</p>
          </div>
          <div className="feature-card" onClick={() => navigate('/faq')}>
            <h2>FAQ</h2>
            <p>Learn how CryptoWave works</p>
          </div>
        </div>

        <div className="info">
          <p>Real-time tracking of top cryptocurrencies across global markets.</p>
          <p>All the data you need, in one place.</p>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Homepage