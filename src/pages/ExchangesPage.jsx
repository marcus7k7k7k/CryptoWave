import React from 'react'
import Exchanges_List from "../components/Exchanges_List";
import DefaultLayout from '../components/layout/DefaultLayout'

const ExchangesPage = () => {
  return (
    <DefaultLayout>
        <Exchanges_List/>
    </DefaultLayout>
  )
}

export default ExchangesPage