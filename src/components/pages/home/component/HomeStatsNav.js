import HomeStatsDriver from './HomeStatsDriver'
import HomeStatsConstructor from './HomeStatsConstructor'
import HomeStatsRace from './HomeStatsRace'

export default [
    {
        id: "driver-stats",
        tabName: "Driver",
        isOnTab: true,
        customeComp: <HomeStatsDriver />
    },
    {
        id: "constructor-stats",
        tabName: "Constructor",
        isOnTab: false,
        customeComp: <HomeStatsConstructor />
    },
    {
        id: "race-res-stats",
        tabName: "Race Results",
        isOnTab: false,
        customeComp: <HomeStatsRace />
    }
]