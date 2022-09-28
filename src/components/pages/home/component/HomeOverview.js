import React from 'react'
import driverRunner from './mock_data/overview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons';

export default function HomeOverview({race_date}) {
    const [validateRaceDate, setValidateRaceDate] = React.useState(false)
    const [driverWinningStat, setDriverWinningStats] = React.useState([])
    const [overviewTitle, setOverviewTitle] = React.useState({})

    React.useEffect(function() {
        fetch(`http://dash-formula-one-api.herokuapp.com/api/v1/utils/validate/${race_date}/gp-race-results-yearly`)
            .then(res => res.json())
            .then(data => setValidateRaceDate(data[0]['_isexists']))

        if (validateRaceDate === true) {
            fetch(`http://dash-formula-one-api.herokuapp.com/api/v1/stats/gp-race-results-yearly/${race_date}`)
            .then(res => res.json())
            .then(data => {
                setDriverWinningStats(data['front_runner_data']);
                setOverviewTitle(data['race_event_info'][0])
            })
        }
    }, [validateRaceDate])

    
    
  return (
    <section className='home-overview' id="overview">
        <div className='section__container container--home-overview'>
            <h2 className='section__title title--home-overview'>{overviewTitle['race_country_event']} 2022</h2>
            <div className='home-overview__container'>
                <div className='container__res-list'>
                    <h3 className='section__subtitle'>Max winning over lewis since Abu Dahbi 2021 GP</h3>
                    <ul className='res-list'>
                        <DriverRunnerResults driverStats={driverWinningStat} />
                    </ul>
                    <a href="/" className='section__btn btn__home-overview'>Result</a>
                    <a href="/" className='section__btn btn__home-overview'>Analysis</a>
                    <a href="/" className='section__btn btn__home-overview'>Highlights</a>
                </div>
                <div className='container__res-stats'>
                    <div className='res-stats'>.res-stats-one</div>
                    <div className='res-stats stats__two'>.res-stats-two</div>
                </div>
            </div>
        </div>
    </section>
  )
}

function DriverRunnerResults(props) {
        const {driverStats} = props
        const getIconType = (grid_pos) => {
            if (grid_pos > 0) {
                return <FontAwesomeIcon icon={Icons.faAngleUp} className="highlight-green" />
            } else if (grid_pos < 0) {
                return <FontAwesomeIcon icon={Icons.faAngleDown} className="highlight-red" />
            } else {
                return <FontAwesomeIcon icon={Icons.faMinus} className="highlight-neutral" />
            }
        }
        const driverBadge = driverStats.map( driver => {
            let grid_margin = driver.GridPosition - driver.Position
            return (
                <li className='list__item' 
                    style={
                        {
                            border: `1px solid #${driver.TeamColor}`
                        }
                    }
                >
                    <strong className="item">{driver.BroadcastName}</strong>
                    <div className='item item-container'>
                        <p className='item-part'>{driver.Time.slice(7, 19)}</p>    
                        <p className='item-part'><strong>+{driver.Points}</strong></p> 
                        <p className='item-part'>{getIconType(grid_margin)} {grid_margin}</p> 
                    </div>
                    <span className="item item__title">{driver.Time.slice(7, 19)}</span>
                </li>
            )
        })
    return (
        <>
            {driverBadge}
        </>
    )
}
