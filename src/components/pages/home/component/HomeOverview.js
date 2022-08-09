import React from 'react'

export default function HomeOverview() {
  return (
    <section className='home-overview' id="overview">
        <div className='section__container container--home-overview'>
            <h2 className='section__title title--home-overview'>Belgium 2022</h2>
            <div className='home-overview__container'>
                <div className='container__res-list'>
                    <h3 className='section__subtitle'>Max winning over lewis since Abu Dahbi 2021 GP</h3>
                    <ul className='res-list'>
                        <li className='list__item'>
                            <strong className="item">Max</strong>
                            <span className="item item__title">1:00:00</span>
                        </li>
                        <li className='list__item'>
                            <strong className="item">Lewis</strong>
                            <span className="item item__title">+32.4</span>
                        </li>
                        <li className='list__item'>
                            <strong className="item">Russel</strong>
                            <span className="item item__title">+100</span>
                        </li>
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
