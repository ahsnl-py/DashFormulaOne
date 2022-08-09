import React from 'react'
import ReactCountryFlag from "react-country-flag"
import Clock from 'react-live-clock';

export default function HomeSchedule() {
  return (
    <section className='home-schedule' id="schedule">
        <div className="home-schedule__card">
            <div className='card__title'>
                <div className='title__country-flag'>
                <ReactCountryFlag 
                    countryCode={"BE"}
                    svg
                    style={{
                    width: '4em',
                    height: '3em',
                    }} 
                />
                </div>
                <h4 className='title__country-name'>Belgium</h4>
            </div>
            <div className='card__gp-title'>
                <h3 className='gp-title__main'>Formula 1 Belgium Grand Prix 2022</h3>
                <p className='gp-title__date'>29 August 2022 - 31 August 2022</p>
            </div>
            <div className='card__time'>
                <div className='time__local-time'>
                    <p>Local Time</p>
                    <p>14:00</p>
                </div>
                <div className='time__clock'><Clock format={'HH:mm:ss'} /></div>
                <div className='time__user-time'>
                    <p>Your Time</p>
                    <p>12:00</p>
                </div>
            </div>
            <button className='section__btn card__btn'>Change to your time</button>
            <div className='card__calender'>
                <div className='calender__list'>
                    <div className='list__item'>
                        <strong className='item item__type'>FP 1</strong>
                        <p className='item item__day'>fri</p>
                        <p className='item item__time'>14:00-15:00</p>
                    </div>
                    <div className='list__item'>
                        <strong className='item item__type'>FP 2</strong>
                        <p className='item item__day'>fri</p>
                        <p className='item item__time'>17:00-18:00</p>
                    </div>
                    <div className='list__item'>
                        <strong className='item item__type'>FP 3</strong>
                        <p className='item item__day'>sat</p>
                        <p className='item item__time'>13:00-14:00</p>
                    </div>
                    <div className='list__item'>
                        <strong className='item item__type'>QUAL</strong>
                        <p className='item item__day'>sat</p>
                        <p className='item item__time'>16:00-17:00</p>
                    </div>
                    <div className='list__item'>
                        <strong className='item item__type'>RACE</strong>
                        <p className='item item__day'>sun</p>
                        <p className='item item__time'>15:00-16:00</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

