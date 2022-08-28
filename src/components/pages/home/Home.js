import React from 'react'
import HomeOverview from './component/HomeOverview'
import HomeStats from './component/HomeStats'
import HomeSchedule from './component/HomeSchedule'
import HomeNews from './component/HomeNews'
import './home.css'

export default function Home() {
  let getDate = '2022-03-27'
  return (
    <main className='home-content'>
        <HomeOverview  race_date={getDate} />
        <HomeStats />
        <HomeSchedule />
        <HomeNews />
    </main>
  )
}

function getDateNow() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  return yyyy + '/' + mm + '/' + dd;
}