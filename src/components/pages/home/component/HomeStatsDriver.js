import React from 'react'
import driver from './mock_data/driver'

export default function HomeOverviewScoreResultsDriver() {
    
    const tableData = driver.map( driver => {
        const {position, driverName, driverTeam, driverPoints} = driver
        return (
            <tr>
                <td>{position}</td>
                <td>{driverName}</td>
                <td>{driverTeam}</td>
                <td>{driverPoints}</td>
            </tr>
        )
    })    
    
  return (
    <div className='home-stats__stats'>
        <div className='stats__charts'>
            <p>.score-stats-profile</p>
        </div>
        <div className='stats__table'>
            <table border={1} cellPadding={2} className='table'>
                <tr>
                    <th>Position</th>
                    <th>Driver</th>
                    <th>Team</th>
                    <th>Points</th>
                </tr>
                {tableData}
            </table>
        </div>
    </div>
  )
}
