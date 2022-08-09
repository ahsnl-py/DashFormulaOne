import React from 'react'
import HomeStatsNav from './HomeStatsNav'

export default function HomeStats() {

    const [tabs, setTabs] = React.useState(HomeStatsNav)
    const [currTab, setCurrTab] = React.useState(tabs[0].customeComp)

    function handleTab(id) {
        for (let i=0; i<tabs.length; i++) {
          if (tabs[i].id === id) {
            setCurrTab(tabs[i].customeComp)
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
            {currTab}
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