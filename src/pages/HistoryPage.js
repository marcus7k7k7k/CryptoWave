import React from 'react'
import { useParams } from 'react-router-dom';
import History_Price from "../components/History_Price";
import DefaultLayout from '../components/layout/DefaultLayout'

const HistoryPage = () => {
  // get coin ID from URL
  const { coinID } = useParams(); 

  if (!coinID) {
    return (
      <DefaultLayout>
        <div>Failed to fetch coin data. Please try again later.</div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <History_Price coinID={coinID} />
    </DefaultLayout>
  )
}

export default HistoryPage