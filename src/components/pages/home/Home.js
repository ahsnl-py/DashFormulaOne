import React from 'react'
import HomeOverview from './component/HomeOverview'
import HomeStats from './component/HomeStats'
import HomeSchedule from './component/HomeSchedule'
import HomeNews from './component/HomeNews'
import './home.css'

export default function Home() {
  let getDate = '2021-12-12'
  let ryear = getDate.slice(0,4)
  return (
    <main className='home-content'>
        <HomeOverview  race_date={getDate} />
        <HomeStats raceYear={parseInt(ryear)}/>
        <HomeSchedule year={ryear}/>
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
