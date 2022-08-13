import React from 'react'
import HomeOverview from './component/HomeOverview'
import HomeStats from './component/HomeStats'
import HomeSchedule from './component/HomeSchedule'
import HomeNews from './component/HomeNews'
import './home.css'

export default function Home() {
  return (
    <main className='home-content'>
        {/* <HomeOverview /> */}
        <HomeStats />
        {/* <HomeSchedule />
        <HomeNews /> */}
    </main>
  )
}
