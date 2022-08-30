import React from 'react'
import ReactCountryFlag from "react-country-flag"
import Clock from 'react-live-clock';
import schedules from './mock_data/schedules';

export default function HomeSchedule() {
    const [currScheduleId, setCurrScheduleId] = React.useState(
        JSON.parse(window.localStorage.getItem("Id")) || 0
    )
    const [eventSchedule, setEventSchedule] = React.useState(
        JSON.parse(window.localStorage.getItem("scheduleArr")) || 
        []
    )

    React.useEffect(()=> {
        window.localStorage.setItem("Id", JSON.stringify(currScheduleId))
        const item = window.localStorage.setItem("scheduleArr", JSON.stringify(eventSchedule))
        if (!item) {
            fetch("http://127.0.0.1:5000/api/v1/stats/race-schedule/2022")
                .then(res => res.json())
                .then(data => setEventSchedule(data))
        }        

    }, [currScheduleId])

    const raceSchedule = eventSchedule.map(schedule => {
        if (schedule.id === currScheduleId ) {
            return (
                <>
                    <CardFlag 
                        cardCountry={schedule.gpCountry.toUpperCase()} 
                        cardCountryCode={schedule.gpCountryCode} 
                    />
                    <CardTitle 
                        cardDate={schedule.gpDates}
                        cardCountry={schedule.gpCountry} 
                        cardOfficalName={schedule.gpRaceEventOffical}
                    />
                    <CardClock />
                    <button className='section__btn card__btn'>Change to your time</button> 
                    <CardSchedulesList 
                        scheduleList={schedule.gpScheduleTime} 
                    />
                </>
            )
        }
    })

    function handleNextSlide() {
        setCurrScheduleId(prevId => {
            if (prevId === eventSchedule.length - 1){
                return 0
            } else {
                return prevId + 1;
            }
        })
    }

    function handlePrevSlide() {
        setCurrScheduleId(prevId => {
            if (prevId === 0) {
                return prevId = eventSchedule.length - 1;
            } else {
                return prevId - 1;
            }
        })
    }

  return (
    <section className='home-schedule' id="schedule">
        <div className="home-schedule__card">

            {raceSchedule}
            <CardAction 
                handleNext={handleNextSlide} 
                handlePrev={handlePrevSlide}
            />
        </div>
    </section>
  )
}

function CardAction({handleNext, handlePrev,...props}) {
    return (
        <div class="card__action-btn">
            <button 
            id="action-btn__prev" 
            aria-label="Previous Slidex"
            onClick={handlePrev}
            >
            &lt;
            </button>
            <button 
            id="action-btn__next" 
            aria-label="Next Slide"
            onClick={handleNext}
            >
            &gt;
            </button>
        </div>
    )
}

function CardFlag({cardCountry, cardCountryCode, ...props}) {
    return (
        <div className='card__title'>
            <div className='title__country-flag'>
            <ReactCountryFlag 
                countryCode={cardCountryCode}
                svg
                style={{
                width: '4em',
                height: '3em',
                }} 
            />
            </div>
            <h4 className='title__country-name'>{cardCountry}</h4>
        </div>
    )
}

function CardTitle({cardCountry, cardDate, cardOfficalName, ...props}) {
    return (
        <div className='card__gp-title'>
            <h3 className='gp-title__main'>{cardOfficalName}</h3>
            <p className='gp-title__date'>{cardDate}</p>
        </div>
    )
}

function CardClock() {
    return (
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
    )
}

function CardSchedulesList({scheduleList, ...props}) {
    const scheduleListGroup = scheduleList.map(schedule => {
        return (
            <div className='list__item'>
                <strong className='item item__type'>{schedule[0]}</strong>
                <p className='item item__day'>{schedule[1]}</p>
                <p className='item item__time'>{schedule[2]}</p>
            </div>   
        )
    })

    return (
        <div className='card__calender'>
            <div className='calender__list'>
                {scheduleListGroup}
            </div>
            
        </div>
    )
}