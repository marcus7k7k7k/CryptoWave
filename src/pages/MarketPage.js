import React from 'react'
import Market_Price from "../components/Market_Price";
import DefaultLayout from '../components/layout/DefaultLayout'


const MarketPage = () => {
  return (
    <>
      <DefaultLayout>
        <Market_Price/>
      </DefaultLayout>

    </>
  )
}

export default MarketPage