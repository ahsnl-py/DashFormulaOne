import React from 'react'
import HomeStatsComponents from "./HomeStatsComponents.js"
// import navbarStatsList from './HomeStatsNav'

export default function HomeStats({raceYear}) {
    
    const navStatsTabs = [
      {
          id: "driver-stats",
          tabName: "Driver",
          isOnTab: true
      },
      {
          id: "constructor-stats",
          tabName: "Constructor",
          isOnTab: false
      }
      // , TBD
      // {
      //     id: "race-res-stats",
      //     tabName: "Race Results",
      //     isOnTab: false
      // }
    ]
    const [tabs, setTabs] = React.useState(navStatsTabs)
    const [currTabId, setcurrTabId] = React.useState(tabs[0].id)

    function handleTab(id) {
      for (let i=0; i<tabs.length; i++) {
        if (tabs[i].id === id) {
          setcurrTabId(tabs[i].id)
        }
      }
  
      setTabs((prevTabs) => {
        prevTabs.map(tab => tab.isOnTab = false)
        return prevTabs.map((tab) => {
          return tab.id === id ? {...tab, isOnTab: true} : tab
        })
      })
    }

    const navigateTabs = tabs.map( tab => {
        return (
          <CustomeNav 
              tabItems={tab} 
              handClick={handleTab}
          />
        )
    })

  return (
    <section className='home-stats' id="stats">
        <div className='home-stats__nav'>
            {navigateTabs}
        </div>
        <div className='nav__items'>
            <HomeStatsComponents id={currTabId} session={raceYear} />
        </div>
    </section>
  )
}

function CustomeNav({tabItems, handClick, ...props}) {
    const activateTab = (tabItems.isOnTab) ? "activate" : "";
    return (
        <button  onClick={() => handClick(tabItems.id)} className={`item__tab ${activateTab}`}>
            {tabItems.tabName}
        </button>
    )
}