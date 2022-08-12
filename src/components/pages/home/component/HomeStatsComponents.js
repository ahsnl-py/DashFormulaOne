import React from 'react'
import driver from './mock_data/driver'

export default function HomeStatsComponents(props) {
    
    const [statsProps, setStatsProps] = React.useState(driver)

    let currActivateTab
    switch (props.id) {
        case "constructor-stats":
            currActivateTab = <HomeStatsConstructor constructors={statsProps} />
            break;
        default:
            currActivateTab = <HomeStatsDriver drivers={statsProps} />    
            break;
        // case "race-res-stats":
        //     currActivateTab = <HomeStatsRace  />
        //     break;
    }

    React.useEffect(function() {
        fetch(`http://127.0.0.1:5000/api/v1/stats/${props.id}`)
            .then(res => res.json())
            .then(data => setStatsProps(data["data"]))
    }, [props.id])

  return (
    <>{currActivateTab}</>
  )
}

function HomeStatsDriver({drivers}) {
    const tableData = drivers.map( driver => {
        const {row_number, driver_fullname, constructors_name, points} = driver
        return (
            <tr>
                <td>{row_number}</td>
                <td>{driver_fullname}</td>
                <td>{constructors_name}</td>
                <td>{points}</td>
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
                        <th>Constructor</th>
                        <th>Team</th>
                        <th>Points</th>
                    </tr>
                    {tableData}
                </table>
            </div>
        </div>
    )

}

function HomeStatsConstructor({constructors}) {
    const tableData = constructors.map( constructor => {
        const {row_number, constructors_name, points} = constructor
        return (
            <tr>
                <td>{row_number}</td>
                <td>{constructors_name}</td>
                <td>{points}</td>
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
                        <th>Constructor</th>
                        <th>Points</th>
                    </tr>
                    {tableData}
                </table>
            </div>
        </div>
    )
}

function HomeStatsRace() {
    return (
        <div>HomeStatsRace</div>
    )
}
