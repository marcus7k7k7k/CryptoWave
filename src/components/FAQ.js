import React from 'react'
import './FAQ.css';

const FAQ = () => {
    return (
	    <div className="faq-container">
			<h2 className="faq-title">FAQ</h2>
			<div className="q-container">
				<details>
					<summary>What is CryptoWave?</summary>
					<p>Welcome to CryptoWave! Your All-in-One Platform For Cryptocurrency Market Data! As crypto traders and investors ourselves, we understand the hassle of browsing multiple websites and exchanges to find reliable information and market data for a coin. That’s why we built CryptoWave – so you can access all crypto information in one place.</p>
				</details>

				<details>
          			<summary>Do I need an account to use CryptoWave?</summary>
          			<p>No, you don’t need to sign up or create an account to use CryptoWave. All features are free to access and available to everyone. We believe in open access to cryptocurrency data for the entire community.</p>
        		</details>

				<details>
					<summary>Where can I check cryptocurrency exchange rates?</summary>
					<p>You can track exchange rates for over 10,000 cryptocurrencies on CryptoWave, across more than 50 fiat currencies. Popular pairs like BTC-TWD, ETH-TWD, and USDT-TWD are all supported. You can also view 24-hour trading volume, market capitalization, historical price charts, and more indicators.</p>
				</details>

    			<details>
					<summary>Get Reliable Live Cryptocurrency Prices</summary>
					<p>Crypto prices and market data have always been at the core of our product – it’s what we do best. We provide unbiased cryptocurrency data for the community, whether to help you make an investment decision or check the value of your crypto assets.</p>
					<p>We use an average price as crypto prices vary between markets. Crypto prices on an exchange depend on its market condition, influenced by factors like liquidity, trading pairs, offerings, and economic conditions. As exchanges may sometimes show abnormal prices, the crypto community relies on tools like CryptoWave for more accurate coin prices.</p>
				</details>


				<details>
					<summary>What does 24-hour trading volume mean?</summary>
					<p>The 24-hour trading volume refers to the total amount of a cryptocurrency that has been bought and sold in the spot markets across all exchanges within the past 24 hours. For example, if Ethereum's 24-hour trading volume is $15 billion, it means that Ether worth a total of $15 billion has changed hands on all trading platforms over the past 24 hours.</p>
				</details>

				<details>
					<summary>What is Trust Score?</summary>
					<p>Trust Score is a rating algorithm developed by CryptoWave to assess the legitimacy of trading volume reported by exchanges. It is calculated based on various factors, including liquidity, operational scale, and cybersecurity indicators.</p>
				</details>
			</div>
	    </div>
    )
}

export default FAQ